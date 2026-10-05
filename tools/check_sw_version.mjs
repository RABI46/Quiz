#!/usr/bin/env node
/* Contrôle du cache : le service worker sert les fichiers « cache d'abord ».
 *
 * Sans incrémentation de VERSION dans sw.js, toute modification de l'app.js,
 * styles.css, questions.js… reste invisible pour les visiteurs déjà passés par
 * le site. La règle est documentée dans le README mais jamais vérifiée : ce
 * script la rend mécanique.
 *
 * Usage : node tools/check_sw_version.mjs [révision-de-base]
 *   - avec une base : échoue (code 1) si un fichier publié a changé alors que
 *     VERSION est restée la même ;
 *   - sans base exploitable : affiche un avertissement et sort 0 (le contrôle
 *     n'a pas de sens, par exemple sur un dépôt sans historique commun).
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLISHED = /^(index\.html|styles\.css|app\.js|questions\.js|manifest\.webmanifest|icon\.svg|icons\/|assets\/)/;

const git = (args) => {
  try {
    return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch (e) {
    return null;
  }
};

const versionOf = (source) => {
  const match = /const VERSION = "([^"]+)"/.exec(source || "");
  return match ? match[1] : null;
};

const base = (process.argv[2] || process.env.SW_BASE || "").trim();
const resolved = base && !/^0+$/.test(base) ? (git(["rev-parse", "--verify", "--quiet", `${base}^{commit}`]) || "").trim() : "";

if (!resolved) {
  console.log("ℹ️  check_sw_version : pas de révision de base exploitable, contrôle neutralisé.");
  console.log("   Usage local : node tools/check_sw_version.mjs origin/main");
  console.log("   En CI : la SHA cible de la PR, ou github.event.before pour un push.");
  process.exit(0);
}
const from = resolved;

const changed = (git(["diff", "--name-only", `${from}...HEAD`]) || "")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);
const touched = changed.filter((file) => PUBLISHED.test(file));

if (!touched.length) {
  console.log("✅ check_sw_version : aucun fichier publié modifié, VERSION inchangée est normal.");
  process.exit(0);
}

const before = versionOf(git(["show", `${from}:sw.js`]) || "");
const after = versionOf(readFileSync(join(ROOT, "sw.js"), "utf8"));

if (before === null || after === null) {
  console.error("❌ check_sw_version : impossible de lire « const VERSION » dans sw.js.");
  process.exit(1);
}
if (before === after) {
  console.error(`❌ check_sw_version : VERSION toujours à « ${after} » alors que ${touched.length} fichier(s) publié(s) ont changé :`);
  console.error("   - " + touched.join("\n   - "));
  console.error("   Les visiteurs garderaient l'ancienne copie en cache : incrémentez VERSION dans sw.js.");
  process.exit(1);
}
console.log(`✅ check_sw_version : VERSION ${before} → ${after} pour ${touched.length} fichier(s) publié(s) modifié(s).`);
