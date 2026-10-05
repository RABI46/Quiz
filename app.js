/* Quiz secourisme — logique de l'application
 * Protection Civile du Lot
 *
 * Principes :
 *  - les questions sont identifiées par un identifiant stable (champ « id »),
 *    jamais par leur texte ;
 *  - un lot de 10 questions ne contient jamais deux fois la même question ;
 *  - la progression est lue d'abord dans les profils, avec repli sur localStorage.
 */
(function () {
  "use strict";

  var TOTAL = 10;          /* taille visée d'un lot (et d'un cycle complet) */
  var MIN_LOT = 7;         /* un lot peut descendre jusque-là pour finir un cycle pile */
  var TIME = 30;
  var LETTERS = ["A", "B", "C", "D"];
  var REVIEW = "Révision de mes erreurs";

  /* Les 9 thématiques « socle » : elles forment aussi le mode classique. */
  var CLASSIC = [
    "Attitude et comportement",
    "Urgences vitales",
    "RCP et DAE",
    "Obstruction des voies aériennes",
    "Évaluation neurologique",
    "Hémorragies et pansements",
    "Position latérale de sécurité",
    "Malaises et affections",
    "Traumatismes et brûlures"
  ];

  var THEMES = [
    { cat: "Attitude et comportement", icon: "🛡️" },
    { cat: "Urgences vitales", icon: "🚨" },
    { cat: "RCP et DAE", icon: "❤️" },
    { cat: "Obstruction des voies aériennes", icon: "🫁" },
    { cat: "Évaluation neurologique", icon: "🧠" },
    { cat: "Hémorragies et pansements", icon: "🩸" },
    { cat: "Position latérale de sécurité", icon: "↩️" },
    { cat: "Malaises et affections", icon: "⚕️" },
    { cat: "Traumatismes et brûlures", icon: "🔥" },
    { cat: "Traumatisme du rachis et immobilisation", icon: "🦴" },
    { cat: "Matériel et oxygénothérapie", icon: "🧰" }
  ];

  /* ---------- état ---------- */
  var qs = [];
  var cur = 0;
  var left = TIME;
  var timer = null;
  var answered = false;
  var currentTheme = "";
  var reviewOrigin = "";      /* thématique d'origine quand on rejoue ses erreurs */
  var score = 0;
  var history = [];

  /* ---------- utilitaires ---------- */
  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m];
    });
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Accès protégé au stockage : un mode privé ou saturé ne doit pas casser l'application. */
  function storeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* ignoré */ }
  }
  function storeRemove(key) {
    try { window.localStorage.removeItem(key); } catch (e) { /* ignoré */ }
  }
  function storeKeys() {
    try {
      var out = [];
      for (var i = 0; i < window.localStorage.length; i++) out.push(window.localStorage.key(i));
      return out;
    } catch (e) { return []; }
  }

  function poolKey(mode) { return "quizPSEPool_v2_" + mode; }
  function seenKey(mode) { return "quizPSEPrevious_v2_" + mode; }

  function readJSON(key, fallback) {
    var raw = storeGet(key);
    if (!raw) return fallback;
    try {
      var v = JSON.parse(raw);
      return v == null ? fallback : v;
    } catch (e) { return fallback; }
  }

  /* ---------- banque de questions ---------- */
  function getBank() {
    var bank = (typeof QUESTION_BANK !== "undefined") ? QUESTION_BANK : window.QUESTION_BANK;
    if (!Array.isArray(bank)) return [];
    return bank.filter(function (item) {
      return item && item.id && item.q && Array.isArray(item.opts) &&
        item.opts.length === 4 && typeof item.c === "number" &&
        item.c >= 0 && item.c < item.opts.length;
    });
  }

  function bankFor(mode) {
    var bank = getBank();
    if (mode === "classique") {
      return bank.filter(function (q) { return CLASSIC.indexOf(q.cat) !== -1; });
    }
    return bank.filter(function (q) { return q.cat === mode; });
  }

  function countsByTheme() {
    var counts = {};
    getBank().forEach(function (q) { counts[q.cat] = (counts[q.cat] || 0) + 1; });
    return counts;
  }

  /* Libellé lisible du mode courant : le même mot partout (en-tête de lot,
   * écran de résultat), pour qu'ils ne divergent jamais. */
  function modeLabel(mode) {
    if (mode === "classique") return "Mode classique";
    if (mode === REVIEW) return "Révision de mes erreurs";
    return mode || "Quiz";
  }

  /* ---------- navigation entre les écrans ---------- */
  function show(id) {
    ["home", "memo", "revision", "quiz", "done"].forEach(function (x) {
      var el = $(x);
      if (el) el.classList.toggle("hidden", x !== id);
    });
    /* L'écran de résultat a déjà ses propres boutons : le bouton « Accueil »
     * de l'en-tête n'y a rien à faire. */
    $("top-home").classList.toggle("hidden", id === "home" || id === "done");
  }

  function goHome() {
    stopTimer();
    show("home");
    buildThemes();
    window.scrollTo(0, 0);
  }

  /* ---------- écran d'accueil ---------- */
  function buildThemes() {
    var counts = countsByTheme();
    var host = $("themes");
    if (!host) return;
    host.innerHTML = "";

    THEMES.forEach(function (theme) {
      var total = counts[theme.cat] || 0;
      if (!total) return;
      var pool = readPool(theme.cat);
      var remaining = pool.length;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "theme-btn" + (total > remaining ? " seen" : "");
      btn.dataset.theme = theme.cat;
      btn.setAttribute("aria-label", theme.cat + " : " + total + " questions, " + remaining + " restantes dans le cycle");
      btn.innerHTML =
        '<span class="theme-icon" aria-hidden="true">' + theme.icon + "</span>" +
        '<span class="theme-text">' +
        '<span class="theme-name">' + esc(theme.cat) + "</span>" +
        '<span class="theme-count"><strong>' + total + " questions</strong> · " +
        (remaining ? remaining + " restantes" : "nouveau cycle") + "</span>" +
        "</span>" +
        '<span class="theme-arrow" aria-hidden="true">›</span>';
      host.appendChild(btn);
    });

    var classicTotal = bankFor("classique").length;
    var classicRemaining = readPool("classique").length;
    $("classic-count").innerHTML = "<strong>" + classicTotal + " questions</strong> · " +
      (classicRemaining ? classicRemaining + " restantes" : "nouveau cycle");

    var total = getBank().length;
    $("bank-total").textContent = total;
    $("bank-themes").textContent = THEMES.filter(function (t) { return counts[t.cat]; }).length;
  }

  function readPool(mode) {
    var bank = bankFor(mode);
    var valid = {};
    bank.forEach(function (q) { valid[q.id] = true; });
    var pool = readJSON(poolKey(mode), []);
    if (!Array.isArray(pool)) return [];
    /* Un identifiant ne doit jamais compter deux fois dans un cycle, même si
     * le stockage a été altéré ou vient d'une version antérieure. */
    var unique = {};
    return pool.filter(function (id) {
      if (!valid[id] || unique[id]) return false;
      unique[id] = true;
      return true;
    });
  }

  function writePool(mode, pool, previousIds) {
    storeSet(poolKey(mode), JSON.stringify(pool));
    storeSet(seenKey(mode), JSON.stringify(previousIds || []));
  }

  function resetHistory() {
    THEMES.forEach(function (t) {
      storeRemove(poolKey(t.cat));
      storeRemove(seenKey(t.cat));
    });
    storeRemove(poolKey("classique"));
    storeRemove(seenKey("classique"));
    buildThemes();
    alert("Historique des questions réinitialisé : chaque thématique repart d'un cycle complet.");
  }

  /* ---------- tirage d'un lot ---------- *
   * Un « cycle » parcourt toutes les questions de la thématique une seule
   * fois. La taille des lots s'adapte pour que le cycle tombe juste :
   * chaque lot contient entre 7 et 10 questions (10 pour les grandes
   * thématiques) et aucune question n'est reposée avant la fin du cycle.
   * Un nouveau cycle commence par les questions qui n'étaient pas dans le
   * lot précédent.
   */
  function lotSize(remaining) {
    if (remaining <= TOTAL) return Math.max(1, remaining);
    var lots = Math.ceil(remaining / TOTAL);
    /* Le lot ne descend jamais sous MIN_LOT : la seule exception est le lot
     * final, quand il reste moins de questions que ce minimum pour finir le
     * cycle pile. */
    return Math.min(remaining, Math.max(MIN_LOT, Math.ceil(remaining / lots)));
  }

  function drawQuestions(mode) {
    var bank = bankFor(mode);
    if (bank.length < 4) return null;

    var byId = {};
    bank.forEach(function (q) { byId[q.id] = q; });

    var pool = readPool(mode);
    var previous = readJSON(seenKey(mode), []);
    if (!Array.isArray(previous)) previous = [];

    if (!pool.length) {
      /* Nouveau cycle : toutes les questions du thème, celles du lot
       * précédent reléguées en fin de cycle. */
      var previousSet = {};
      previous.forEach(function (id) { previousSet[id] = true; });
      var others = shuffle(bank.filter(function (q) { return !previousSet[q.id]; })
        .map(function (q) { return q.id; }));
      var last = shuffle(bank.filter(function (q) { return previousSet[q.id]; })
        .map(function (q) { return q.id; }));
      pool = others.concat(last);
    }

    var size = lotSize(pool.length);
    var chosenIds = pool.slice(0, size);
    var poolRest = pool.slice(size);

    /* Sécurité : jamais deux fois la même question dans un lot. */
    var seen = {};
    chosenIds = chosenIds.filter(function (id) {
      if (seen[id]) return false;
      seen[id] = true;
      return true;
    });

    writePool(mode, poolRest, chosenIds);
    return chosenIds.map(function (id) { return byId[id]; }).filter(Boolean);
  }

  function startQuiz(mode) {
    var bank = bankFor(mode);
    if (!bank.length) { alert("Aucune question trouvée pour cette thématique."); return; }
    if (bank.length < 4) { alert("Cette thématique ne contient pas assez de questions."); return; }

    var drawn = drawQuestions(mode);
    if (!drawn || !drawn.length) { alert("Impossible de composer un lot de questions."); return; }

    currentTheme = mode;
    reviewOrigin = "";
    score = 0;
    history = [];
    qs = drawn.map(function (item) {
      var options = item.opts.map(function (text, i) { return { text: text, ok: i === item.c }; });
      shuffle(options);
      return {
        id: item.id,
        cat: item.cat,
        level: item.level || "PSE1",
        q: item.q,
        opts: options.map(function (o) { return o.text; }),
        c: options.findIndex(function (o) { return o.ok; }),
        e: item.e || ""
      };
    });
    cur = 0;
    show("quiz");
    render();
  }

  /* ---------- illustration ---------- */
  function illustrationFor(question) {
    var cat = String(question.cat || "").toLowerCase();
    var text = String(question.q || "").toLowerCase();
    var icon = "✚", title = "SECOURS", sub = question.level || "PSE/PSC";
    if (cat.indexOf("hémorrag") !== -1 || text.indexOf("saign") !== -1 || text.indexOf("garrot") !== -1) {
      icon = "🩸"; title = "HÉMORRAGIE"; sub = "COMPRIMER · ALERTER";
    } else if (cat.indexOf("rcp") !== -1 || cat.indexOf("dae") !== -1 || text.indexOf("défibr") !== -1) {
      icon = "♥"; title = "RÉANIMATION"; sub = "RCP · DAE";
    } else if (cat.indexOf("obstruction") !== -1 || text.indexOf("étouff") !== -1) {
      icon = "🫁"; title = "VOIES AÉRIENNES"; sub = "DÉSOBSTRUCTION";
    } else if (cat.indexOf("neurolog") !== -1 || cat.indexOf("avc") !== -1 || text.indexOf("avpu") !== -1) {
      icon = "🧠"; title = "NEUROLOGIE"; sub = "ÉVALUATION";
    } else if (cat.indexOf("position latérale") !== -1 || text.indexOf("pls") !== -1) {
      icon = "↻"; title = "PLS"; sub = "POSITION DE SÉCURITÉ";
    } else if (cat.indexOf("malaise") !== -1 || text.indexOf("avc") !== -1 || text.indexOf("hypoglyc") !== -1) {
      icon = "⚕"; title = "MALAISE"; sub = "RECONNAÎTRE · ALERTER";
    } else if (cat.indexOf("brûl") !== -1 || text.indexOf("brûl") !== -1) {
      icon = "🔥"; title = "BRÛLURE"; sub = "REFROIDIR · PROTÉGER";
    } else if (cat.indexOf("rachis") !== -1 || cat.indexOf("immobilisation") !== -1 || text.indexOf("rachis") !== -1) {
      icon = "🦴"; title = "RACHIS"; sub = "IMMOBILISER";
    } else if (cat.indexOf("traumatis") !== -1 || text.indexOf("fracture") !== -1) {
      icon = "🩹"; title = "TRAUMATISME"; sub = "PROTÉGER · IMMOBILISER";
    } else if (cat.indexOf("matériel") !== -1 || text.indexOf("oxyg") !== -1) {
      icon = "O₂"; title = "MATÉRIEL"; sub = "OXYGÉNOTHÉRAPIE";
    } else if (cat.indexOf("attitude") !== -1 || text.indexOf("danger") !== -1 || text.indexOf("balisage") !== -1) {
      icon = "🛡"; title = "PROTECTION"; sub = "SÉCURISER · ALERTER";
    }
    var escSvg = function (v) {
      return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    return '<svg viewBox="0 0 760 170" role="img" aria-label="' + escSvg(title) + '">' +
      '<defs><linearGradient id="ig" x1="0" x2="1"><stop offset="0" stop-color="#ff6600"/>' +
      '<stop offset="1" stop-color="#ff9a58"/></linearGradient>' +
      '<radialGradient id="rg"><stop stop-color="#ffffff22"/><stop offset="1" stop-color="#ffffff00"/></radialGradient></defs>' +
      '<rect width="760" height="170" fill="#0b1b33"/>' +
      '<circle cx="650" cy="30" r="145" fill="url(#rg)"/>' +
      '<circle cx="120" cy="150" r="110" fill="#ff660012"/>' +
      '<rect x="28" y="28" width="114" height="114" rx="28" fill="url(#ig)" opacity=".95"/>' +
      '<text x="85" y="103" text-anchor="middle" class="ill-main">' + escSvg(icon) + "</text>" +
      '<text x="175" y="72" class="ill-label">' + escSvg(title) + "</text>" +
      '<text x="175" y="102" fill="#ffffff" font-size="24" font-weight="800" font-family="system-ui,sans-serif">' + escSvg(sub) + "</text>" +
      '<path d="M175 121h430" stroke="#ffffff22"/>' +
      '<circle cx="625" cy="121" r="5" fill="#ff6600"/>' +
      '<circle cx="645" cy="121" r="5" fill="#ff6600" opacity=".55"/>' +
      '<circle cx="665" cy="121" r="5" fill="#ff6600" opacity=".25"/></svg>';
  }

  /* ---------- rendu d'une question ---------- */
  function announce(message) {
    var live = $("live");
    if (live) live.textContent = message;
  }

  function render() {
    if (!qs.length || !qs[cur]) { goHome(); return; }
    answered = false;
    stopTimer();

    var q = qs[cur];
    $("num").textContent = "Question " + (cur + 1) + " / " + qs.length;
    $("lot").textContent = modeLabel(currentTheme);
    $("bar").style.width = ((cur + 1) / qs.length * 100) + "%";
    $("bar-wrap").setAttribute("aria-valuenow", String(cur + 1));
    /* Les lots font 7 à 10 questions : le maximum doit suivre la taille réelle
     * du lot, sinon l'annonce « 8 sur 10 » ment à la fin d'un lot de 8. */
    $("bar-wrap").setAttribute("aria-valuemax", String(qs.length));
    $("bar-wrap").setAttribute("aria-valuetext", "Question " + (cur + 1) + " sur " + qs.length);
    $("cat").textContent = q.cat;
    $("level").textContent = "Niveau " + q.level;
    $("q").textContent = q.q;
    try { $("illustration").innerHTML = illustrationFor(q); }
    catch (e) { $("illustration").innerHTML = ""; }

    var feedback = $("feedback");
    feedback.className = "feedback hidden";
    feedback.innerHTML = "";
    $("next").classList.add("hidden");

    var host = $("answers");
    host.innerHTML = "";
    q.opts.forEach(function (text, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.innerHTML = '<span class="letter" aria-hidden="true">' + LETTERS[i] + "</span><span>" + esc(text) + "</span>";
      btn.addEventListener("click", function () { answer(i); });
      host.appendChild(btn);
    });

    left = TIME;
    $("timer").classList.remove("paused");
    tick();
    startTimer();

    announce("Question " + (cur + 1) + " sur " + qs.length + ". " + q.q);
  }

  /* ---------- chronomètre ---------- *
   * Le décompte est arrêté dès que l'onglet passe en arrière-plan : les
   * minuteurs sont ralentis par le navigateur, et la question se fermait toute
   * seule sur un « temps écoulé » infligé hors écran. Le décompte reprend où il
   * s'était arrêté, sans pénalité. */
  function stopTimer() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function startTimer() {
    stopTimer();
    if (left <= 0) return;
    timer = setInterval(function () {
      left--;
      tick();
      if (left <= 0) {
        stopTimer();
        answer(-1);
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!timer) return;
    var t = $("timer");
    if (t) { t.classList.add("paused"); t.setAttribute("aria-label", "Chronomètre en pause"); }
    stopTimer();
  }

  function resumeTimer() {
    var quizVisible = $("quiz") && !$("quiz").classList.contains("hidden");
    var t = $("timer");
    if (t) t.classList.remove("paused");
    if (quizVisible && !answered && !timer) { tick(); startTimer(); }
  }

  function tick() {
    var t = $("timer");
    t.textContent = left;
    t.classList.toggle("warn", left <= 10);
    t.setAttribute("aria-label", "Temps restant : " + left + " secondes");
  }

  /* ---------- réponse ---------- */
  function answer(choice) {
    if (answered) return;
    answered = true;
    stopTimer();

    var q = qs[cur];
    var buttons = $("answers").querySelectorAll(".answer");
    Array.prototype.forEach.call(buttons, function (btn, i) {
      btn.disabled = true;
      /* Le bon/mauvais état est porté par la couleur, par un glyphe ET par le
       * nom accessible : un lecteur d'écran et un daltonien doivent voir la
       * même chose qu'un œil valide. */
      var label = LETTERS[i] + ". " + q.opts[i];
      if (i === q.c) {
        btn.classList.add("correct");
        btn.innerHTML += '<span class="mark" aria-hidden="true">✓</span>';
        label = "Bonne réponse — " + label;
      } else if (i === choice) {
        btn.classList.add("wrong");
        btn.innerHTML += '<span class="mark" aria-hidden="true">✗</span>';
        label = "Votre réponse (incorrecte) — " + label;
      } else {
        btn.classList.add("void");
        label = "Non choisie — " + label;
      }
      btn.setAttribute("aria-label", label);
    });

    var good = choice === q.c;
    if (good) score++;
    history.push({ q: q, ok: good, chosen: choice });

    var feedback = $("feedback");
    if (good) {
      feedback.className = "feedback good";
      feedback.innerHTML = "<b>✅ Bonne réponse.</b> " + esc(q.e);
      announce("Bonne réponse. " + q.e);
    } else if (choice === -1) {
      feedback.className = "feedback bad";
      feedback.innerHTML = "<b>⏰ Temps écoulé.</b> Bonne réponse : <b>" + esc(q.opts[q.c]) + "</b><br>" + esc(q.e);
      announce("Temps écoulé. La bonne réponse était : " + q.opts[q.c]);
    } else {
      feedback.className = "feedback bad";
      feedback.innerHTML = "<b>❌ Mauvaise réponse.</b> Bonne réponse : <b>" + esc(q.opts[q.c]) + "</b><br>" + esc(q.e);
      announce("Mauvaise réponse. La bonne réponse était : " + q.opts[q.c]);
    }
    feedback.classList.remove("hidden");

    var next = $("next");
    next.textContent = cur < qs.length - 1 ? "Question suivante →" : "🏁 Voir le résultat";
    next.classList.remove("hidden");
    next.focus();
  }

  function nextQuestion() {
    cur++;
    if (cur >= qs.length) { showResult(); return; }
    render();
    window.scrollTo(0, 0);
  }

  /* ---------- fin de lot ---------- */
  function showResult() {
    stopTimer();
    var percent = Math.round(score / qs.length * 100);
    $("done-theme").textContent = currentTheme === REVIEW && reviewOrigin
      ? modeLabel(REVIEW) + " · " + modeLabel(reviewOrigin)
      : modeLabel(currentTheme);
    $("done-score").textContent = score + " / " + qs.length;
    $("done-percent").textContent = percent + " % de bonnes réponses";

    var wrong = history.filter(function (h) { return !h.ok; });
    var hasWrong = wrong.length > 0;
    var reviewing = currentTheme === REVIEW;
    var recap = $("done-recap");
    if (!hasWrong) {
      recap.innerHTML = '<p class="done-perfect">Sans faute, bravo ! 🎉</p>';
    } else {
      recap.innerHTML = "<h3 class=\"section-title\">À revoir (" + wrong.length + ")</h3>" +
        wrong.map(function (h) {
          return '<article class="revision-card"><div class="r-theme">' + esc(h.q.cat) + "</div><h3>" +
            esc(h.q.q) + '</h3><div class="r-answer"><b>Bonne réponse :</b> ' + esc(h.q.opts[h.q.c]) +
            "</div><p>" + esc(h.q.e) + "</p></article>";
        }).join("");
    }

    $("done-again").textContent = reviewing
      ? (hasWrong ? "🔁 Rejouer les questions encore ratées"
                  : "🔁 Refaire un lot de la thématique d'origine")
      : "🔁 Refaire un lot de cette thématique";
    var reviewWrong = $("done-review-wrong");
    reviewWrong.classList.toggle("hidden", !hasWrong);

    announce("Lot terminé. Score : " + score + " sur " + qs.length + ".");
    $("bar").style.width = "100%";
    $("bar-wrap").setAttribute("aria-valuenow", String(qs.length));
    $("bar-wrap").setAttribute("aria-valuetext", "Lot terminé : " + score + " bonnes réponses sur " + qs.length);
    show("done");
    window.scrollTo(0, 0);
  }

  /* Rejoue uniquement les questions ratées. La thématique d'origine est
   * mémorisée : une fois les erreurs corrigées, « Refaire un lot » ramène au
   * thème plutôt qu'à l'accueil. */
  function replayMistakes() {
    var wrong = history.filter(function (h) { return !h.ok; });
    if (!wrong.length) return;
    if (currentTheme !== REVIEW) reviewOrigin = currentTheme;
    currentTheme = REVIEW;
    score = 0;
    history = [];
    qs = shuffle(wrong.map(function (h) { return h.q; })).map(function (q) {
      var options = q.opts.map(function (text, i) { return { text: text, ok: i === q.c }; });
      shuffle(options);
      return {
        id: q.id, cat: q.cat, level: q.level, q: q.q,
        opts: options.map(function (o) { return o.text; }),
        c: options.findIndex(function (o) { return o.ok; }),
        e: q.e
      };
    });
    cur = 0;
    show("quiz");
    render();
    window.scrollTo(0, 0);
  }

  /* ---------- mode révision ---------- */
  function showRevision() {
    stopTimer();
    var bank = getBank();
    var list = $("revision-list");
    list.innerHTML = "";
    var groups = {};
    bank.forEach(function (q) {
      var key = q.cat || "PSE1";
      if (!groups[key]) groups[key] = [];
      groups[key].push(q);
    });
    Object.keys(groups).sort(function (a, b) { return a.localeCompare(b, "fr"); }).forEach(function (theme) {
      var title = document.createElement("h3");
      title.className = "section-title";
      title.textContent = theme + " (" + groups[theme].length + " questions)";
      list.appendChild(title);
      groups[theme].forEach(function (q) {
        var card = document.createElement("article");
        card.className = "revision-card";
        card.innerHTML = '<div class="r-theme">' + esc(theme) + " · Niveau " + esc(q.level || "PSE1") + "</div>" +
          "<h3>" + esc(q.q) + "</h3>" +
          '<div class="r-answer"><b>Bonne réponse :</b> ' + esc(q.opts[q.c]) + "</div>" +
          "<p>" + esc(q.e || "") + "</p>";
        list.appendChild(card);
      });
    });
    $("revision-count").textContent = bank.length;
    show("revision");
    window.scrollTo(0, 0);
  }

  /* ---------- fiche mémo ---------- */
  function showMemo() {
    stopTimer();
    show("memo");
    window.scrollTo(0, 0);
  }

  /* ---------- accès pour les tests automatisés (tools/test_lot.mjs) ---------- */
  if (typeof window !== "undefined") {
    window.quizPSE = {
      total: TOTAL,
      minLot: MIN_LOT,
      /* Taille réellement appliquée à un lot restant : les outils de contrôle
       * l'utilisent au lieu de recopier la formule. */
      lotSize: lotSize,
      themes: THEMES.map(function (t) { return t.cat; }),
      classic: CLASSIC.slice(),
      bank: getBank,
      draw: function (mode) { return (drawQuestions(mode) || []).map(function (q) { return q.id; }); },
      state: function () {
        return {
          theme: currentTheme,
          index: cur,
          score: score,
          size: qs.length,
          questions: qs.map(function (q) {
            return { id: q.id, q: q.q, cat: q.cat, level: q.level, opts: q.opts, c: q.c };
          })
        };
      },
      clear: function () {
        THEMES.forEach(function (t) { storeRemove(poolKey(t.cat)); storeRemove(seenKey(t.cat)); });
        storeRemove(poolKey("classique"));
        storeRemove(seenKey("classique"));
      },
      keys: function () { return storeKeys().filter(function (k) { return /^quizPSE/.test(k); }); }
    };
  }

  /* ---------- animation de démarrage ---------- *
   * L'écran de démarrage reprend l'emblème de la Protection Civile : le
   * disque orange se pose, les triangles se tracent, le nom s'affiche, puis
   * la page reprend la main. L'animation est purement décorative : elle ne
   * bloque jamais l'application (durée maximale garantie) et disparaît d'un
   * simple appui, d'une touche ou dès que « réduire les animations » est
   * demandé par l'utilisateur.
   */
  var SPLASH_MIN = 1400;   /* durée minimale à l'écran, en ms */
  var SPLASH_MAX = 2400;   /* au-delà, l'application reprend la main */
  var splashStart = 0;
  var splashTimers = [];

  function hideSplash() {
    var splash = $("splash");
    if (!splash || splash.classList.contains("off")) return;
    splashTimers.forEach(clearTimeout);
    splashTimers = [];
    splash.classList.add("off");
    window.removeEventListener("keydown", hideSplash);
    document.body.classList.remove("booting");
    document.body.classList.add("reveal");
    setTimeout(function () {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 460);
  }

  function showSplash() {
    var splash = $("splash");
    if (!splash) return;

    var reduce = false;
    try {
      reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    } catch (e) { /* pas de matchMedia : on garde l'animation */ }
    if (reduce) {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
      return;
    }

    /* Les tracés se dessinent à la longueur réelle du trait : on la mesure
     * quand le navigateur sait le faire (repli dans styles.css sinon). */
    Array.prototype.forEach.call(splash.querySelectorAll(".sp-trace"), function (path) {
      try {
        if (typeof path.getTotalLength !== "function") return;
        var len = Math.ceil(path.getTotalLength());
        if (len > 0) path.style.setProperty("--trace", len);
      } catch (e) { /* longueur de repli */ }
    });

    splashStart = Date.now();
    document.body.classList.add("booting");
    splash.addEventListener("click", hideSplash);
    splash.addEventListener("touchstart", hideSplash, { passive: true });
    window.addEventListener("keydown", hideSplash);
    splashTimers.push(setTimeout(hideSplash, SPLASH_MAX));   /* filet de sécurité */

    /* L'animation se termine, puis on laisse la place : au plus tôt après
     * SPLASH_MIN, au plus tard à SPLASH_MAX. */
    if (document.readyState === "complete") {
      splashTimers.push(setTimeout(hideSplash, SPLASH_MIN));
    } else {
      window.addEventListener("load", function () {
        splashTimers.push(setTimeout(hideSplash, Math.max(0, SPLASH_MIN - (Date.now() - splashStart))));
      }, { once: true });
    }
  }

  /* ---------- initialisation ---------- */
  function migrateOldStorage() {
    var renamedThemes = {
      "Attitude & Comportement": "Attitude et comportement",
      "Urgences Vitales": "Urgences vitales",
      "RCP & DAE": "RCP et DAE",
      "Obstruction des Voies Aériennes": "Obstruction des voies aériennes",
      "Évaluation Neurologique": "Évaluation neurologique",
      "Hémorragie & Pansements": "Hémorragies et pansements",
      "Position Latérale de Secours": "Position latérale de sécurité",
      "Malaises & Affections": "Malaises et affections",
      "Traumatismes & Brûlures": "Traumatismes et brûlures",
      "Traumatisme Rachis & Immobilisation": "Traumatisme du rachis et immobilisation",
      "Matériel & Oxygénothérapie": "Matériel et oxygénothérapie"
    };

    /* Les versions précédentes mémorisaient des textes de questions (clés non
     * versionnées). On les supprime une fois pour toutes, sans jamais toucher
     * aux clés actuelles de la version 2. */
    storeKeys().forEach(function (key) {
      if (/^quizPSE(Pool|Previous)_(?!v2_)/.test(key)) storeRemove(key);
    });

    /* Migration douce des cycles déjà vus lorsque le nom visible d'une
     * thématique a été officialisé. Les identifiants de questions restent les
     * mêmes : on recopie donc les clés v2 existantes vers le nouveau libellé
     * puis on supprime l'ancien, sans perdre la progression locale. */
    Object.keys(renamedThemes).forEach(function (legacy) {
      var modern = renamedThemes[legacy];
      ["Pool", "Previous"].forEach(function (kind) {
        var oldKey = "quizPSE" + kind + "_v2_" + legacy;
        var newKey = "quizPSE" + kind + "_v2_" + modern;
        var oldValue = storeGet(oldKey);
        var newValue = storeGet(newKey);
        if (oldValue && !newValue) storeSet(newKey, oldValue);
        if (oldValue) storeRemove(oldKey);
      });
    });
  }

  function bindEvents() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("#themes .theme-btn");
      if (!btn) return;
      e.preventDefault();
      try { startQuiz(btn.dataset.theme || ""); }
      catch (err) {
        console.error(err);
        alert("Erreur lors du lancement du quiz : " + (err && err.message ? err.message : "erreur JavaScript"));
      }
    });

    $("classic-btn").addEventListener("click", function () { startQuiz("classique"); });
    $("top-home").addEventListener("click", goHome);
    $("memo-btn").addEventListener("click", showMemo);
    $("memo-back").addEventListener("click", goHome);
    $("revision-btn").addEventListener("click", showRevision);
    $("revision-back").addEventListener("click", goHome);
    $("reset-btn").addEventListener("click", resetHistory);
    $("next").addEventListener("click", nextQuestion);
    $("done-again").addEventListener("click", function () {
      if (currentTheme === REVIEW) {
        /* En révision, le bouton promet de rejouer : on rejoue vraiment les
         * questions encore ratées, sinon on repart sur la thématique d'origine. */
        var stillWrong = history.some(function (h) { return !h.ok; });
        if (stillWrong) { replayMistakes(); return; }
        if (!reviewOrigin) { goHome(); return; }
        startQuiz(reviewOrigin);
        return;
      }
      startQuiz(currentTheme);
    });
    $("done-review-wrong").addEventListener("click", replayMistakes);
    $("done-home").addEventListener("click", goHome);

    /* Le chronomètre suit la visibilité de l'onglet : une question ne doit pas
     * se corriger toute seule pendant que l'application est en arrière-plan. */
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) pauseTimer();
      else resumeTimer();   /* retour : on reprend le décompte où il s'était arrêté */
    });

    /* Réponses au clavier : 1-4 ou A-D. */
    document.addEventListener("keydown", function (e) {
      if ($("quiz").classList.contains("hidden") || answered) return;
      var key = e.key.toUpperCase();
      var index = ["1", "2", "3", "4"].indexOf(key);
      if (index === -1) index = LETTERS.indexOf(key);
      if (index === -1 || index >= qs[cur].opts.length) return;
      var buttons = $("answers").querySelectorAll(".answer");
      if (buttons[index]) { e.preventDefault(); answer(index); }
    });
  }

  function init() {
    showSplash();
    migrateOldStorage();
    buildThemes();
    bindEvents();
    /* Mise à jour du service worker : recharge discrètement quand une nouvelle
     * version est publiée. Une première installation n'est pas une mise à jour :
     * sans ce garde-fou, le message s'affichait dès la toute première visite. */
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").then(function (registration) {
        var wasInstalled = !!registration.active;
        registration.addEventListener("updatefound", function () {
          if (!wasInstalled) return;
          var sw = registration.installing;
          if (!sw) return;
          sw.addEventListener("statechange", function () {
            if (sw.state === "activated" && navigator.serviceWorker.controller) {
              var note = $("update-note");
              if (note) note.classList.remove("hidden");
            }
          });
        });
      }).catch(function () { /* pas de service worker : l'application reste utilisable */ });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
