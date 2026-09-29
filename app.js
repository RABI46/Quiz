/* Quiz PSE — logique de l'application
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

  var TOTAL = 10;
  var TIME = 30;
  var LETTERS = ["A", "B", "C", "D"];

  /* Les 9 thématiques « socle » : elles forment aussi le mode classique (90 questions). */
  var CLASSIC = [
    "Attitude & Comportement",
    "Urgences Vitales",
    "RCP & DAE",
    "Obstruction des Voies Aériennes",
    "Évaluation Neurologique",
    "Hémorragie & Pansements",
    "Position Latérale de Secours",
    "Malaises & Affections",
    "Traumatismes & Brûlures"
  ];

  var THEMES = [
    { cat: "Attitude & Comportement", icon: "🛡️" },
    { cat: "Urgences Vitales", icon: "🚨" },
    { cat: "RCP & DAE", icon: "❤️" },
    { cat: "Obstruction des Voies Aériennes", icon: "🫁" },
    { cat: "Évaluation Neurologique", icon: "🧠" },
    { cat: "Hémorragie & Pansements", icon: "🩸" },
    { cat: "Position Latérale de Secours", icon: "↩️" },
    { cat: "Malaises & Affections", icon: "⚕️" },
    { cat: "Traumatismes & Brûlures", icon: "🔥" },
    { cat: "Traumatisme Rachis & Immobilisation", icon: "🦴" },
    { cat: "Matériel & Oxygénothérapie", icon: "🧰" }
  ];

  /* ---------- état ---------- */
  var qs = [];
  var cur = 0;
  var left = TIME;
  var timer = null;
  var answered = false;
  var currentTheme = "";
  var score = 0;
  var history = [];
  var favorite = [];

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

  /* ---------- navigation entre les écrans ---------- */
  function show(id) {
    ["home", "memo", "revision", "quiz", "done"].forEach(function (x) {
      var el = $(x);
      if (el) el.classList.toggle("hidden", x !== id);
    });
    $("top-home").classList.toggle("hidden", id === "home");
  }

  function goHome() {
    clearInterval(timer);
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
    return pool.filter(function (id) { return valid[id]; });
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
    var lots = Math.ceil(remaining / TOTAL);
    return Math.max(1, Math.ceil(remaining / lots));
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
    var icon = "✚", title = "SECOURS", sub = "PSE1";
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
    } else if (cat.indexOf("traumatisme rachis") !== -1 || cat.indexOf("immobilisation") !== -1 || text.indexOf("rachis") !== -1) {
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
    clearInterval(timer);

    var q = qs[cur];
    $("num").textContent = "Question " + (cur + 1) + " / " + qs.length;
    $("lot").textContent = currentTheme === "classique" ? "Mode classique" : currentTheme;
    $("bar").style.width = ((cur + 1) / qs.length * 100) + "%";
    $("bar-wrap").setAttribute("aria-valuenow", String(cur + 1));
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
    tick();
    timer = setInterval(function () {
      left--;
      tick();
      if (left <= 0) {
        clearInterval(timer);
        answer(-1);
      }
    }, 1000);

    announce("Question " + (cur + 1) + " sur " + qs.length + ". " + q.q);
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
    clearInterval(timer);

    var q = qs[cur];
    var buttons = $("answers").querySelectorAll(".answer");
    Array.prototype.forEach.call(buttons, function (btn, i) {
      btn.disabled = true;
      if (i === q.c) btn.classList.add("correct");
      else if (i === choice) btn.classList.add("wrong");
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
    clearInterval(timer);
    var percent = Math.round(score / qs.length * 100);
    $("done-theme").textContent = currentTheme === "classique" ? "Mode classique" : currentTheme;
    $("done-score").textContent = score + " / " + qs.length;
    $("done-percent").textContent = percent + " % de bonnes réponses";

    var wrong = history.filter(function (h) { return !h.ok; });
    var recap = $("done-recap");
    if (!wrong.length) {
      recap.innerHTML = '<p class="done-perfect">Sans faute, bravo ! 🎉</p>';
    } else {
      recap.innerHTML = "<h3 class=\"section-title\">À revoir (" + wrong.length + ")</h3>" +
        wrong.map(function (h) {
          return '<article class="revision-card"><div class="r-theme">' + esc(h.q.cat) + "</div><h3>" +
            esc(h.q.q) + '</h3><div class="r-answer"><b>Bonne réponse :</b> ' + esc(h.q.opts[h.q.c]) +
            "</div><p>" + esc(h.q.e) + "</p></article>";
        }).join("");
    }

    $("done-again").textContent = currentTheme === "Révision de mes erreurs"
      ? "🔁 Rejouer ce lot d'erreurs"
      : "🔁 Refaire un lot de cette thématique";
    var reviewWrong = $("done-review-wrong");
    reviewWrong.classList.toggle("hidden", wrong.length === 0);

    announce("Lot terminé. Score : " + score + " sur " + qs.length + ".");
    $("bar").style.width = "100%";
    show("done");
    window.scrollTo(0, 0);
  }

  /* Rejoue uniquement les questions ratées. */
  function replayMistakes() {
    var wrong = history.filter(function (h) { return !h.ok; });
    if (!wrong.length) return;
    currentTheme = "Révision de mes erreurs";
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
    clearInterval(timer);
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
    clearInterval(timer);
    show("memo");
    window.scrollTo(0, 0);
  }

  /* ---------- accès pour les tests automatisés (tools/test_lot.mjs) ---------- */
  if (typeof window !== "undefined") {
    window.quizPSE = {
      total: TOTAL,
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
    /* Les versions précédentes mémorisaient des textes de questions (clés non
     * versionnées). On les supprime une fois pour toutes, sans jamais toucher
     * aux clés actuelles de la version 2. */
    storeKeys().forEach(function (key) {
      if (/^quizPSE(Pool|Previous)_(?!v2_)/.test(key)) storeRemove(key);
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
      if (currentTheme === "Révision de mes erreurs") { goHome(); return; }
      startQuiz(currentTheme);
    });
    $("done-review-wrong").addEventListener("click", replayMistakes);
    $("done-home").addEventListener("click", goHome);

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
     * version est publiée. */
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").then(function (registration) {
        registration.addEventListener("updatefound", function () {
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
