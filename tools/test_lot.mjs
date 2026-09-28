#!/usr/bin/env node
/* Test de non-répétition des lots du Quiz PSE.
 *
 * Charge le code réel de l'application (questions.js + app.js) dans un DOM
 * minimal simulé, puis vérifie, pour chaque thématique :
 *   1. chaque lot contient 10 questions distinctes ;
 *   2. un cycle complet passe par toutes les questions du thème sans jamais
 *      en répéter une seule ;
 *   3. au démarrage d'un nouveau cycle, les questions du lot précédent sont
 *      évitées (quand la thématique compte assez de questions).
 *
 * Exécution : node tools/test_lot.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

/* ---------- DOM minimal ---------- */
function makeElement() {
  const classes = new Set();
  const element = {
    children: [],
    dataset: {},
    style: {},
    attributes: {},
    innerHTML: "",
    textContent: "",
    hidden: false,
    classList: {
      add: (...names) => names.forEach((n) => classes.add(n)),
      remove: (...names) => names.forEach((n) => classes.delete(n)),
      contains: (name) => classes.has(name),
      toggle: (name, force) => {
        const on = force === undefined ? !classes.has(name) : Boolean(force);
        if (on) classes.add(name); else classes.delete(name);
        return on;
      },
    },
    setAttribute(name, value) { this.attributes[name] = value; },
    getAttribute(name) { return this.attributes[name]; },
    appendChild(child) { this.children.push(child); return child; },
    addEventListener() {},
    removeEventListener() {},
    focus() {},
    closest() { return null; },
    querySelector() { return makeElement(); },
    querySelectorAll() { return []; },
  };
  return element;
}

const elements = new Map();
const storage = new Map();
const context = {
  console,
  setTimeout,
  clearTimeout,
  setInterval: () => 0,
  clearInterval: () => {},
  alert: () => {},
  scrollTo: () => {},
  localStorage: {
    get length() { return storage.size; },
    key: (i) => [...storage.keys()][i] ?? null,
    getItem: (k) => (storage.has(k) ? storage.get(k) : null),
    setItem: (k, v) => storage.set(k, String(v)),
    removeItem: (k) => storage.delete(k),
  },
  navigator: {},
  document: {
    readyState: "complete",
    getElementById: (id) => {
      if (!elements.has(id)) elements.set(id, makeElement());
      return elements.get(id);
    },
    querySelectorAll: () => [],
    querySelector: () => makeElement(),
    createElement: () => makeElement(),
    addEventListener: () => {},
  },
};
context.window = context;
context.globalThis = context;
vm.createContext(context);

vm.runInContext(readFileSync(join(ROOT, "questions.js"), "utf8"), context, { filename: "questions.js" });
vm.runInContext(readFileSync(join(ROOT, "app.js"), "utf8"), context, { filename: "app.js" });

const api = context.quizPSE;
if (!api) {
  console.error("❌ app.js n'expose pas window.quizPSE");
  process.exit(1);
}

const LOT = api.total;
const bankById = new Map(api.bank().map((q) => [q.id, q]));

function idsFor(mode) {
  const bank = mode === "classique" ? api.bank().filter((q) => api.classic.includes(q.cat)) : api.bank().filter((q) => q.cat === mode);
  return bank.map((q) => q.id);
}

function expectedSizes(total) {
  const sizes = [];
  let remaining = total;
  while (remaining > 0) {
    const size = Math.max(1, Math.ceil(remaining / Math.ceil(remaining / LOT)));
    sizes.push(size);
    remaining -= size;
  }
  return sizes;
}

function checkMode(mode, expected) {
  api.clear();
  const total = expected.length;
  const sizes = expectedSizes(total);
  const seenInCycle = new Set();
  let previousLot = [];
  let lotIndex = 0;
  let cyclesChecked = 0;

  /* On parcourt deux cycles complets pour vérifier aussi le passage de cycle. */
  for (let cycle = 0; cycle < 2; cycle++) {
    let index = 0;
    for (const size of sizes) {
      const lot = api.draw(mode);
      if (lot.length !== size) {
        failures.push(`${mode} : lot de ${lot.length} questions au lieu de ${size} attendues`);
      }
      if (new Set(lot).size !== lot.length) {
        failures.push(`${mode} : lot contenant deux fois la même question`);
      }
      for (const id of lot) {
        if (!bankById.has(id)) failures.push(`${mode} : identifiant inconnu « ${id} »`);
        if (seenInCycle.has(id)) failures.push(`${mode} : question répétée dans le même cycle (${id})`);
        seenInCycle.add(id);
        if (cycle > 0 && previousLot.includes(id)) {
          failures.push(`${mode} : question répétée d'un lot au suivant (${id})`);
        }
      }
      previousLot = lot;
      index += size;
      lotIndex++;
      if (index > total) failures.push(`${mode} : le cycle dépasse la taille de la banque`);
    }
    if (seenInCycle.size !== total) {
      failures.push(`${mode} : le cycle ${cycle + 1} ne couvre que ${seenInCycle.size} questions sur ${total}`);
    }
    if (cycle === 0) {
      seenInCycle.clear();
      cyclesChecked++;
    }
  }

  console.log(
    mode.padEnd(38) +
    String(total).padStart(6) + " q.  " +
    String(sizes.length).padStart(3) + " lots de " +
    String(Math.min(...sizes)) + " à " + String(Math.max(...sizes)) + "  " +
    String(lotIndex).padStart(3) + " lots testés  " +
    "0 répétition ✓"
  );
}

console.log("Thématique".padEnd(38) + "  banque   cycle");
const themes = [...new Set(api.bank().map((q) => q.cat))].sort((a, b) => a.localeCompare(b, "fr"));
themes.forEach((theme) => checkMode(theme, idsFor(theme)));
checkMode("classique", idsFor("classique"));

/* Stockage : identifiants uniquement, clés versionnées. */
api.clear();
api.draw(themes[0]);
const keys = api.keys();
if (!keys.every((k) => /^quizPSE(Pool|Previous)_v2_/.test(k))) {
  failures.push("clés de stockage inattendues : " + keys.join(", "));
}
const stored = storage.get(keys.find((k) => k.startsWith("quizPSEPool_v2_")));
JSON.parse(stored).forEach((id) => {
  if (!bankById.has(id)) failures.push(`le cycle mémorise un identifiant inconnu « ${id} »`);
});

/* Persistance : un rechargement de l'application ne doit pas effacer la progression. */
api.clear();
const mode = themes[0];
const firstLot = api.draw(mode);
const poolKey = keys.find((k) => k.startsWith("quizPSEPool_v2_")) || "quizPSEPool_v2_" + mode;
const before = storage.get(poolKey);
vm.runInContext(readFileSync(join(ROOT, "app.js"), "utf8"), context, { filename: "app.js" });
const after = storage.get(poolKey);
if (before === undefined || before !== after) {
  failures.push("un rechargement de l'application efface ou modifie la progression mémorisée");
}
if (firstLot.length && !JSON.parse(after || "[]").every((id) => bankById.has(id))) {
  failures.push("la progression mémorisée contient des identifiants inconnus");
}

/* Migration : les anciennes clés (texte de question) doivent disparaître,
 * les nouvelles doivent rester. */
storage.set("quizPSEPool_RCP & DAE", JSON.stringify(["ancienne clé"]));
storage.set("quizPSEPrevious_RCP & DAE", JSON.stringify(["ancienne clé"]));
vm.runInContext(readFileSync(join(ROOT, "app.js"), "utf8"), context, { filename: "app.js" });
if (storage.has("quizPSEPool_RCP & DAE") || storage.has("quizPSEPrevious_RCP & DAE")) {
  failures.push("les anciennes clés de stockage ne sont pas nettoyées");
}
if (storage.get(poolKey) !== after) {
  failures.push("la migration a effacé la progression de la version actuelle");
}

if (failures.length) {
  console.error(`\n❌ ${failures.length} échec(s) :`);
  [...new Set(failures)].slice(0, 20).forEach((f) => console.error("   - " + f));
  process.exit(1);
}
console.log("\n✅ Aucun doublon dans un lot, aucun doublon dans un cycle, passage de cycle sans répétition.");
