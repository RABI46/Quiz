#!/usr/bin/env node
/* Contrôle de cohérence de l'interface du Quiz PSE.
 *
 * Vérifie que :
 *   1. chaque élément référencé par app.js ($("...")) existe dans index.html ;
 *   2. chaque fichier référencé par index.html, le manifeste et le service
 *      worker existe bien dans le dépôt ;
 *   3. aucun fichier du site ne dépend d'un domaine tiers (le filigrane du logo
 *      était auparavant chargé depuis un site externe) ;
 *   4. chaque classe posée par le HTML ou par app.js a bien une règle CSS, et
 *      chaque fichier à précharger figure dans le service worker.
 *
 * Exécution : node tools/check_ui.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const problems = [];

const html = read("index.html");
const app = read("app.js");
const css = read("styles.css");
const sw = read("sw.js");
const manifest = JSON.parse(read("manifest.webmanifest"));

/* 1. identifiants utilisés par app.js ----------------------------------- */
const htmlIds = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const usedIds = new Set([...app.matchAll(/\$\("([^"]+)"\)/g)].map((m) => m[1]));
for (const id of usedIds) {
  if (!htmlIds.has(id)) problems.push(`index.html ne contient aucun élément id="${id}" utilisé par app.js`);
}

/* 2. fichiers référencés ------------------------------------------------- */
const assets = new Set();
for (const match of html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g)) assets.add(match[1]);
for (const match of css.matchAll(/url\("(\.\/[^"]+)"\)/g)) assets.add(match[1]);
manifest.icons.forEach((icon) => assets.add("./" + icon.src));

for (const asset of [...assets]) {
  if (!existsSync(join(ROOT, asset))) problems.push(`fichier référencé introuvable : ${asset}`);
}

/* le service worker doit précharger tous les fichiers de l'application */
const coreBlock = sw.slice(sw.indexOf("const CORE"), sw.indexOf("];", sw.indexOf("const CORE")));
const core = [...coreBlock.matchAll(/"\.\/([^"]*)"/g)].map((m) => "./" + m[1]);
/* Tous les fichiers du site, sans exception : le filigrane n'était pas le seul
 * à devoir être disponible hors ligne (l'icône maskable manque à l'appel). */
for (const asset of assets) {
  if (asset === "./index.html" || asset === "./") continue;
  if (!core.includes(asset)) problems.push(`le service worker ne précharge pas ${asset} (indisponible hors ligne)`);
}
for (const file of core) {
  if (file !== "./" && !existsSync(join(ROOT, file))) problems.push(`le service worker référence un fichier absent : ${file}`);
}

/* 4. chaque classe posée par le HTML ou par app.js doit avoir une règle CSS :
 *    une classe orpheline est un style oublié (la fiche mémo en a fait les
 *    frais) ou un sélecteur devenu inutile. */
const defined = new Set([...css.matchAll(/\.([A-Za-z][\w-]*)/g)].map((m) => m[1]));
const usedClasses = new Set();
const collect = (source) => {
  for (const m of source.matchAll(/class(?:Name)?\s*=\s*"([^"{}]+)"/g)) m[1].trim().split(/\s+/).forEach((c) => c && usedClasses.add(c));
  for (const m of source.matchAll(/class(?:List)?\.(?:add|remove|toggle|contains)\("([^"]+)"\)/g)) usedClasses.add(m[1]);
  for (const m of source.matchAll(/className \+ " ?([\w -]+)"/g)) m[1].trim().split(/\s+/).forEach((c) => c && usedClasses.add(c));
};
collect(html);
collect(app);
for (const cls of [...usedClasses].sort()) {
  if (!defined.has(cls)) problems.push(`classe « ${cls} » utilisée mais absente de styles.css`);
}

/* 3. aucune dépendance à un domaine tiers -------------------------------- */
const body = html.slice(html.indexOf("</head>"));
const external = [...body.matchAll(/https?:\/\/[^"'\s)]+/g)].map((m) => m[0]);
if (external.length) problems.push(`index.html charge des ressources externes : ${external.join(", ")}`);
const cssExternal = [...css.matchAll(/url\((?!")[^)]*https?:\/\/[^)]+/g)].map((m) => m[0]);
if (cssExternal.length) problems.push(`styles.css charge des ressources externes : ${cssExternal.join(", ")}`);

/* le thème clair annoncé doit correspondre au manifeste et au HTML */
const themeTag = (html.match(/name="theme-color" content="([^"]+)"/) || [])[1];
if (themeTag && themeTag.toLowerCase() !== manifest.theme_color.toLowerCase()) {
  problems.push(`theme-color incohérent : index.html=${themeTag}, manifest=${manifest.theme_color}`);
}

if (problems.length) {
  console.error(`❌ ${problems.length} problème(s) d'interface :`);
  problems.forEach((p) => console.error("   - " + p));
  process.exit(1);
}
console.log(`✅ Interface cohérente : ${usedIds.size} identifiants, ${assets.size} fichiers référencés, ${usedClasses.size} classes stylées, aucune ressource externe.`);
