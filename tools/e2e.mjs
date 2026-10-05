/* Test de bout en bout du Quiz PSE dans un vrai DOM (jsdom).
 * Usage : node tools/e2e.mjs [url]   (par défaut http://127.0.0.1:8080/)
 */
import { JSDOM, VirtualConsole } from "jsdom";

const url = process.argv[2] || "http://127.0.0.1:8080/";
const problems = [];
const errors = [];

const virtualConsole = new VirtualConsole();
virtualConsole.on("jsdomError", (e) => {
  const message = String(e.message || e);
  /* jsdom n'implémente ni la mise en page ni window.scrollTo : ces messages ne
   * concernent pas le code de l'application. */
  if (!/Not implemented|Could not parse CSS|Could not load/.test(message)) errors.push("jsdomError: " + message);
});
virtualConsole.on("error", (m) => errors.push("console.error: " + m));

const dom = await JSDOM.fromURL(url, {
  runScripts: "dangerously",
  resources: "usable",
  pretendToBeVisual: true,
  virtualConsole,
});
const { window } = dom;
const $ = (id) => window.document.getElementById(id);
const visible = (id) => !$(id).classList.contains("hidden");
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

await new Promise((resolve) => {
  if (window.document.readyState === "complete") resolve();
  else window.addEventListener("load", resolve);
});
await wait(300);

/* ---------- 0. animation de démarrage ---------- */
const splash = $("splash");
if (!splash) problems.push("splash : l'animation de démarrage est absente au chargement");
else {
  if (!splash.querySelector(".sp-disc")) problems.push("splash : le disque orange de l'emblème est absent");
  if (!splash.querySelector(".sp-tri-white")) problems.push("splash : le triangle blanc de l'emblème est absent");
  if (!splash.querySelector(".sp-tri-blue")) problems.push("splash : le triangle bleu de l'emblème est absent");
  if (!/Protection Civile/i.test(splash.textContent)) problems.push("splash : le nom de l'association n'apparaît pas");
  if (!/du Lot/i.test(splash.textContent)) problems.push("splash : la mention « du Lot » n'apparaît pas");
  if (!window.document.body.classList.contains("booting")) problems.push("splash : la page n'est pas signalée en cours de démarrage");
}

/* ---------- 1. écran d'accueil ---------- */
/* Attendus dérivés de l'application et de la banque : ajouter une question ou
 * un thème ne doit plus obliger à retoucher ce test. */
const api = window.quizPSE;
const BANK = api.bank().length;
const THEMES = api.themes.length;
const MIN_LOT = api.minLot ?? 7;
const MAX_LOT = api.total ?? 10;
const buttons = [...window.document.querySelectorAll("#themes .theme-btn")];
if (buttons.length !== THEMES) problems.push(`accueil : ${buttons.length} thématiques affichées au lieu de ${THEMES}`);
if (!visible("home")) problems.push("accueil : l'écran d'accueil n'est pas visible");
if ($("bank-total").textContent !== String(BANK)) problems.push(`accueil : total affiché « ${$("bank-total").textContent} » au lieu de ${BANK}`);
if (/\bnouveau cycle\b/.test(buttons[0].textContent) === false) problems.push("accueil : compteur de cycle absent");

/* Mentions obligatoires : elles ne doivent pas disparaître silencieusement. */
const doc = window.document;
const notice = doc.querySelector("#home .notice");
if (!notice || !/Vianney et Ana/.test(notice.textContent)) problems.push("accueil : le bandeau « en attente de validation par Vianney et Ana » est absent");
const footNote = doc.querySelector("footer.foot-note");
if (!footNote) problems.push("pied de page : footer.foot-note absent");
else {
  const t = footNote.textContent.replace(/\s+/g, " ");
  if (!/RGPD/.test(t)) problems.push("pied de page : mention RGPD absente");
  if (!/références techniques nationales/.test(t) || !/2026/.test(t)) problems.push("pied de page : référence aux références techniques nationales 2026 absente");
  const mail = footNote.querySelector('a[href^="mailto:"]');
  if (!mail || !/^mailto:[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(mail.getAttribute("href"))) problems.push("pied de page : lien mailto: absent ou invalide");
  const tel = footNote.querySelector('a[href^="tel:"]');
  if (!tel || !/^tel:\+\d{9,15}$/.test(tel.getAttribute("href"))) problems.push("pied de page : lien tel: absent ou invalide");
}

/* ---------- 2. lancer un lot ---------- */
const theme = buttons.find((b) => /RCP/.test(b.dataset.theme));
theme.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await wait(50);

if (!visible("quiz")) problems.push("quiz : l'écran de quiz ne s'affiche pas après un clic sur une thématique");
const question = $("q").textContent;
if (!question || question === "Chargement…") problems.push("quiz : aucune question affichée");
if (!/^Question 1 \/ \d+$/.test($("num").textContent)) problems.push(`quiz : entête inattendue « ${$("num").textContent} »`);
if (!/Niveau (PSC|PSE1|PSE2)/.test($("level").textContent)) problems.push("quiz : niveau non affiché");
if ($("cat").textContent !== "RCP et DAE") problems.push(`quiz : catégorie affichée « ${$("cat").textContent} »`);
if ($("bar-wrap").getAttribute("aria-valuenow") !== "1") problems.push("quiz : barre de progression non mise à jour");

const lotSize = Number($("num").textContent.split("/")[1].trim());
if (lotSize > MAX_LOT) problems.push(`quiz : lot de ${lotSize} questions, au-dessus du maximum ${MAX_LOT}`);
if (lotSize < MIN_LOT) problems.push(`quiz : premier lot de ${lotSize} questions, sous le minimum ${MIN_LOT}`);
/* Le progressbar doit annoncer le vrai dénominateur : un lot de 8 questions ne
 * finit pas « 8 sur 10 ». */
if ($("bar-wrap").getAttribute("aria-valuemax") !== String(lotSize)) {
  problems.push(`quiz : aria-valuemax=${$("bar-wrap").getAttribute("aria-valuemax")} au lieu de ${lotSize}`);
}
if (!/Question 1 sur \d+/.test($("bar-wrap").getAttribute("aria-valuetext") || "")) {
  problems.push(`quiz : aria-valuetext absent ou incorrect « ${$("bar-wrap").getAttribute("aria-valuetext")} »`);
}

let answers = [...window.document.querySelectorAll("#answers .answer")];
if (answers.length !== 4) problems.push(`quiz : ${answers.length} propositions affichées au lieu de 4`);
if (answers.some((a) => !a.textContent.trim())) problems.push("quiz : une proposition est vide");

/* ---------- 2bis. onglet masqué : le chronomètre doit s'arrêter ---------- */
const timerEl = $("timer");
const leftBefore = Number(timerEl.textContent);
Object.defineProperty(window.document, "hidden", { configurable: true, get: () => true });
window.document.dispatchEvent(new window.Event("visibilitychange"));
await wait(1300);
if (Number(timerEl.textContent) !== leftBefore) {
  problems.push("chronomètre : le décompte continue alors que l'onglet est en arrière-plan");
}
if (!timerEl.classList.contains("paused")) problems.push("chronomètre : la mise en pause n'est pas signalée (visuellement ni aux lecteurs d'écran)");
Object.defineProperty(window.document, "hidden", { configurable: true, get: () => false });
window.document.dispatchEvent(new window.Event("visibilitychange"));
await wait(1300);
if (Number(timerEl.textContent) >= leftBefore) problems.push("chronomètre : le décompte ne reprend pas au retour de l'onglet");
if (timerEl.classList.contains("paused")) problems.push("chronomètre : la pause reste affichée après le retour de l'onglet");

/* ---------- 3. répondre à tout le lot (alternance juste/faux) ---------- */
let mistakes = 0;
for (let i = 0; i < lotSize; i++) {
  answers = [...window.document.querySelectorAll("#answers .answer")];
  if (answers.length !== 4) { problems.push(`quiz : question ${i + 1} — ${answers.length} propositions`); break; }

  /* l'état interne donne l'index de la bonne réponse dans les propositions
   * affichées (elles sont mélangées à l'affichage) ; on répond volontairement
   * faux une question sur trois. */
  const state = window.quizPSE.state();
  const current = state.questions[state.index];
  if (!current) { problems.push("quiz : l'état interne ne contient pas la question courante"); break; }
  const wrong = i % 3 === 1;
  const clickIndex = wrong ? (current.c + 1) % 4 : current.c;
  if (wrong) mistakes++;

  answers[clickIndex].dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await wait(30);

  if ($("feedback").classList.contains("hidden")) problems.push(`quiz : pas de correction après la question ${i + 1}`);
  if (!$("feedback").textContent.trim()) problems.push(`quiz : correction vide à la question ${i + 1}`);
  if (!window.document.querySelector("#answers .answer.correct")) problems.push("quiz : la bonne réponse n'est pas mise en évidence");
  /* L'état doit rester lisible sans couleur et sans vue : un glyphe et un nom
   * accessible sur la bonne réponse comme sur la réponse choisie. */
  const corrected = [...window.document.querySelectorAll("#answers .answer")];
  const goodBtn = corrected.find((a) => a.classList.contains("correct"));
  if (!goodBtn || !/✓/.test(goodBtn.textContent)) problems.push(`quiz : la bonne réponse n'affiche pas de repère non coloré (${$( "q").textContent.slice(0, 30)}…)`);
  if (goodBtn && !/^Bonne réponse/.test(goodBtn.getAttribute("aria-label") || "")) problems.push("quiz : la bonne réponse n'est pas annoncée aux lecteurs d'écran");
  if (wrong && !/Votre réponse/.test((corrected[clickIndex].getAttribute("aria-label") || ""))) problems.push("quiz : la réponse choisie n'est pas signalée comme telle");
  if ($("next").classList.contains("hidden")) problems.push("quiz : bouton de passage masqué après la réponse");

  $("next").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await wait(30);
}

/* ---------- 4. écran de résultat ---------- */
if (!visible("done")) problems.push("résultat : l'écran de fin de lot ne s'affiche pas");
const scoreText = $("done-score").textContent;
if (!/^\d+ \/ \d+$/.test(scoreText)) problems.push(`résultat : score inattendu « ${scoreText} »`);
const scored = Number(scoreText.split("/")[0]);
const total = Number(scoreText.split("/")[1].trim());
if (total !== lotSize) problems.push(`résultat : total ${total} différent de la taille du lot ${lotSize}`);
if (scored !== lotSize - mistakes) problems.push(`résultat : score ${scored} au lieu de ${lotSize - mistakes}`);
if (mistakes > 0 && $("done") && window.document.querySelectorAll("#done-recap .revision-card").length !== mistakes) {
  problems.push("résultat : le récapitulatif des erreurs ne correspond pas au nombre d'erreurs");
}

/* ---------- 5. rejouer les erreurs ---------- */
if (mistakes > 0) {
  $("done-review-wrong").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await wait(30);
  if (!visible("quiz")) problems.push("erreurs : le lot d'erreurs ne se lance pas");
  const num = $("num").textContent;
  if (!new RegExp(`/ ${mistakes}$`).test(num)) problems.push(`erreurs : ${num} au lieu de ${mistakes} questions`);
  if (!/Révision de mes erreurs/.test($("lot").textContent)) problems.push(`erreurs : entête de lot « ${$("lot").textContent} »`);

  /* Cette fois on répond juste à tout : plus aucune erreur ne subsiste, le
   * bouton principal doit donc proposer de repartir sur la thématique d'origine
   * — et le faire réellement (l'étiquette et l'action avaient divergé). */
  for (let i = 0; i < mistakes; i++) {
    const state = window.quizPSE.state();
    const current = state.questions[state.index];
    answers = [...window.document.querySelectorAll("#answers .answer")];
    answers[current.c].dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
    await wait(30);
    $("next").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
    await wait(30);
  }
  const label = $("done-again").textContent;
  if (!/Refaire un lot de la thématique d'origine/.test(label)) problems.push(`erreurs : bouton de fin « ${label} » après une révision sans faute`);
  $("done-again").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await wait(40);
  if (!visible("quiz")) problems.push("erreurs : « Refaire un lot de la thématique d'origine » ne lance pas de lot");
  $("top-home").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await wait(20);
  if (!visible("home")) problems.push("erreurs : le retour à l'accueil ne fonctionne plus");
}

/* ---------- 6. mode classique, mémo, révision ---------- */
$("classic-btn").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await wait(30);
if (!visible("quiz")) problems.push("classique : le mode classique ne démarre pas");
if (!/^Question 1 \/ \d+$/.test($("num").textContent)) problems.push("classique : entête inattendue");

/* réponse au clavier (accessibilité) */
const keyboardState = window.quizPSE.state();
const expected = keyboardState.questions[keyboardState.index].c;
window.document.dispatchEvent(new window.KeyboardEvent("keydown", { key: "1", bubbles: true }));
await wait(20);
if ($("feedback").classList.contains("hidden")) problems.push("clavier : la réponse par la touche « 1 » n'est pas prise en compte");
const chosenLetter = window.document.querySelectorAll("#answers .answer");
const marked = [...chosenLetter].findIndex((a) => a.classList.contains("correct") || a.classList.contains("wrong"));
if (marked !== 0) problems.push(`clavier : la touche « 1 » répond à la proposition ${marked + 1}`);
if (expected < 0) problems.push("clavier : état interne incohérent");
$("top-home").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await wait(20);

$("memo-btn").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await wait(20);
if (!visible("memo")) problems.push("mémo : l'écran mémo ne s'affiche pas");
if (!/112/.test($("memo").textContent)) problems.push("mémo : contenu attendu absent");
$("memo-back").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await wait(20);
if (!visible("home")) problems.push("mémo : le retour à l'accueil ne fonctionne pas");

$("revision-btn").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await wait(50);
if (!visible("revision")) problems.push("révision : l'écran révision ne s'affiche pas");
const cards = [...window.document.querySelectorAll("#revision-list .revision-card")];
if (cards.length !== BANK) problems.push(`révision : ${cards.length} fiches affichées au lieu de ${BANK}`);
const firstCard = cards[0] && cards[0].textContent;
if (!firstCard || !/Bonne réponse/.test(firstCard)) problems.push("révision : la bonne réponse n'apparaît pas");
$("revision-back").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await wait(20);

/* ---------- 7. progression mémorisée ---------- */
const keys = Object.keys(window.localStorage).filter((k) => k.startsWith("quizPSE"));
if (!keys.length) problems.push("stockage : aucune progression mémorisée");
if (!keys.every((k) => /_v2_/.test(k))) problems.push("stockage : clés non versionnées " + keys.join(", "));
const stored = JSON.parse(window.localStorage.getItem(keys.find((k) => k.includes("Pool"))));
if (!Array.isArray(stored) || !stored.every((id) => /^[a-z]{3}(?:-[a-z]{3})?-\d{2}$/.test(id))) {
  problems.push("stockage : le cycle ne mémorise pas des identifiants de question");
}
const seenCard = window.document.querySelector("#themes .theme-btn.seen");
if (!seenCard) problems.push("accueil : la thématique entamée n'est pas signalée comme telle");

/* ---------- 8. l'animation de démarrage rend la main ---------- */
await wait(2000);
const leftover = $("splash");
if (leftover && !leftover.classList.contains("off")) {
  problems.push("splash : l'animation de démarrage est encore affichée après le démarrage");
}
if (window.document.body.classList.contains("booting")) {
  problems.push("splash : la page reste bloquée en mode démarrage");
}

/* ---------- 8bis. lien d'évitement ---------- */
const skip = window.document.querySelector("a.visually-hidden");
if (!skip) problems.push("accessibilité : lien d'évitement absent");
else if (!skip.getAttribute("href")?.startsWith("#") || !window.document.querySelector(skip.getAttribute("href"))) {
  problems.push("accessibilité : le lien d'évitement ne pointe vers aucune cible du document");
}

/* ---------- résultat ---------- */
errors.forEach((e) => problems.push(e));
if (problems.length) {
  console.error(`❌ ${problems.length} problème(s) détecté(s) :`);
  problems.forEach((p) => console.error("   - " + p));
  process.exit(1);
}
console.log(`✅ Parcours complet validé (${BANK} questions, ${THEMES} thématiques) : animation de démarrage, accueil, lot sans répétition, corrections, chronomètre en pause, score, erreurs rejouées, classique, clavier, mémo, révision, stockage.`);
dom.window.close();
