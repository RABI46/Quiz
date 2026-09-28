#!/usr/bin/env node
/* Contrôle automatique de la banque de questions du Quiz PSE.
 *
 * Exécution : node tools/validate_bank.mjs
 * Sortie    : code 0 si la banque est valide, 1 sinon.
 *
 * Ce contrôle est exécuté à chaque push par GitHub Actions (.github/workflows/pages.yml).
 * Il garantit notamment qu'aucune question dupliquée ni aucun lot impossible
 * ne peut être publié — c'est exactement le défaut qui a motivé sa création.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const THEMES = [
  "Attitude & Comportement",
  "Urgences Vitales",
  "RCP & DAE",
  "Obstruction des Voies Aériennes",
  "Évaluation Neurologique",
  "Hémorragie & Pansements",
  "Position Latérale de Sécurité",
  "Position Latérale de Secours",
  "Malaises & Affections",
  "Traumatismes & Brûlures",
  "Traumatisme Rachis & Immobilisation",
  "Matériel & Oxygénothérapie",
];
const LEVELS = ["PSE1", "PSE2"];
const LOT_SIZE = 10;
const MAX_OPTION_RATIO = 1.6;

const errors = [];
const warnings = [];

/* --- chargement --------------------------------------------------------- */
const context = { console };
context.globalThis = context;
vm.createContext(context);
vm.runInContext(readFileSync(join(ROOT, "questions.js"), "utf8"), context, { filename: "questions.js" });
const bank = context.QUESTION_BANK;
const json = JSON.parse(readFileSync(join(ROOT, "data/questions.json"), "utf8"));

if (!Array.isArray(bank)) {
  console.error("❌ questions.js n'expose pas un tableau QUESTION_BANK");
  process.exit(1);
}

/* --- synchronisation questions.js <-> data/questions.json --------------- */
if (JSON.stringify(bank) !== JSON.stringify(json)) {
  errors.push("questions.js et data/questions.json ne sont pas synchronisés (python3 tools/generate_questions_js.py)");
}

/* --- structure de chaque question -------------------------------------- */
const byId = new Map();
const byText = new Map();
const byOptionSet = new Map();
const normalize = (s) => s.toLowerCase().normalize("NFC").replace(/[^a-zà-ÿ0-9]+/gi, " ").trim();

bank.forEach((item, index) => {
  const where = `item #${index + 1} (${item && item.id ? item.id : "sans id"})`;

  if (!item || typeof item !== "object") { errors.push(`${where} : entrée invalide`); return; }
  for (const field of ["id", "cat", "level", "q", "e"]) {
    if (typeof item[field] !== "string" || !item[field].trim()) errors.push(`${where} : champ « ${field} » manquant ou vide`);
  }
  if (!Array.isArray(item.opts) || item.opts.length !== 4) {
    errors.push(`${where} : il faut exactement 4 propositions`);
    return;
  }
  if (!Number.isInteger(item.c) || item.c < 0 || item.c >= item.opts.length) {
    errors.push(`${where} : index de la bonne réponse invalide (${item.c})`);
  }
  if (item.q && !item.q.trim().endsWith("?")) errors.push(`${where} : la question ne se termine pas par « ? »`);
  if (item.level && !LEVELS.includes(item.level)) errors.push(`${where} : niveau inconnu « ${item.level} »`);
  if (item.cat && !THEMES.includes(item.cat)) errors.push(`${where} : thématique inconnue « ${item.cat} »`);

  if (byId.has(item.id)) errors.push(`${where} : identifiant déjà utilisé`);
  byId.set(item.id, item);

  const textKey = normalize(item.q || "");
  if (byText.has(textKey)) errors.push(`${where} : question identique à ${byText.get(textKey)}`);
  byText.set(textKey, item.id);

  const optionKey = item.opts.map(normalize).slice().sort().join(" | ");
  if (byOptionSet.has(optionKey)) errors.push(`${where} : mêmes 4 propositions que ${byOptionSet.get(optionKey)}`);
  byOptionSet.set(optionKey, item.id);

  const seen = new Set();
  item.opts.forEach((option) => {
    if (typeof option !== "string" || !option.trim()) errors.push(`${where} : proposition vide`);
    const key = normalize(option);
    if (seen.has(key)) errors.push(`${where} : deux propositions identiques`);
    seen.add(key);
  });

  const good = item.opts[item.c];
  const others = item.opts.filter((_, i) => i !== item.c);
  if (typeof good === "string" && others.length) {
    const ratio = good.length / Math.max(...others.map((o) => o.length));
    if (ratio >= MAX_OPTION_RATIO) {
      warnings.push(`${where} : bonne réponse beaucoup plus longue que les distracteurs (×${ratio.toFixed(2)})`);
    }
  }
  others.forEach((option) => {
    if (/\b(jamais|toujours|100\s?%|impossible|systématiquement)\b/i.test(option)) {
      warnings.push(`${where} : distracteur éliminable d'office — « ${option.slice(0, 70)} »`);
    }
  });
});

/* --- composition par thématique ----------------------------------------- */
const counts = new Map();
bank.forEach((item) => counts.set(item.cat, (counts.get(item.cat) || 0) + 1));

console.log("Thématique".padEnd(40) + "questions");
for (const theme of THEMES.filter((t) => counts.get(t))) {
  const total = counts.get(theme);
  console.log(theme.padEnd(40) + String(total).padStart(8));
  if (total < LOT_SIZE) errors.push(`thématique « ${theme} » : ${total} questions, impossible de composer un lot de ${LOT_SIZE}`);
}
console.log("TOTAL".padEnd(40) + String(bank.length).padStart(8));

/* --- biais de position de la bonne réponse ------------------------------ */
const positions = [0, 0, 0, 0];
bank.forEach((item) => { if (Number.isInteger(item.c) && item.c < 4) positions[item.c]++; });
const maxPos = Math.max(...positions);
const minPos = Math.min(...positions);
console.log("\nPosition de la bonne réponse : " + positions.map((n, i) => `${"ABCD"[i]}=${n}`).join("  "));
if (minPos === 0) errors.push("certaines positions ne contiennent jamais la bonne réponse");
else if (maxPos > 1.8 * minPos) warnings.push(`positions de la bonne réponse déséquilibrées (${positions.join("/")})`);

/* --- résultat ----------------------------------------------------------- */
if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} avertissement(s) de qualité pédagogique :`);
  warnings.forEach((w) => console.log("   - " + w));
}
if (errors.length) {
  console.error(`\n❌ ${errors.length} erreur(s) bloquante(s) :`);
  errors.forEach((e) => console.error("   - " + e));
  process.exit(1);
}
console.log(`\n✅ Banque valide : ${bank.length} questions, ${[...counts.keys()].length} thématiques, aucun doublon.`);
