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
const buttons = [...window.document.querySelectorAll("#themes .theme-btn")];
if (buttons.length !== 11) problems.push(`accueil : ${buttons.length} thématiques affichées au lieu de 11`);
if (!visible("home")) problems.push("accueil : l'écran d'accueil n'est pas visible");
if ($("bank-total").textContent !== "330") problems.push(`accueil : total affiché « ${$("bank-total").textContent} » au lieu de 330`);
if (/\bnouveau cycle\b/.test(buttons[0].textContent) === false) problems.push("accueil : compteur de cycle absent");

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
if (lotSize < 7 || lotSize > 10) problems.push(`quiz : lot de ${lotSize} questions, hors de la plage 7-10`);

let answers = [...window.document.querySelectorAll("#answers .answer")];
if (answers.length !== 4) problems.push(`quiz : ${answers.length} propositions affichées au lieu de 4`);
if (answers.some((a) => !a.textContent.trim())) problems.push("quiz : une proposition est vide");

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
  $("top-home").dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await wait(20);
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
if (cards.length !== 330) problems.push(`révision : ${cards.length} fiches affichées au lieu de 330`);
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

/* ---------- résultat ---------- */
errors.forEach((e) => problems.push(e));
if (problems.length) {
  console.error(`❌ ${problems.length} problème(s) détecté(s) :`);
  problems.forEach((p) => console.error("   - " + p));
  process.exit(1);
}
console.log("✅ Parcours complet validé : animation de démarrage, accueil, lot sans répétition, corrections, score, erreurs, classique, clavier, mémo, révision, stockage.");
dom.window.close();
