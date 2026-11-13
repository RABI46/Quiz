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
/* Un lien sortant (<a href="https://…">) est légitime : seules les ressources
 * réellement chargées par la page doivent rester locales. */
const external = [
  ...body.matchAll(/\bsrc(?:set)?="(https?:\/\/[^"]+)"/g),
  ...body.matchAll(/<link\b[^>]*\bhref="(https?:\/\/[^"]+)"/g),
].map((match) => match[1]);
if (external.length) problems.push(`index.html charge des ressources externes : ${external.join(", ")}`);
const cssExternal = [...css.matchAll(/url\((?!")[^)]*https?:\/\/[^)]+/g)].map((m) => m[0]);
if (cssExternal.length) problems.push(`styles.css charge des ressources externes : ${cssExternal.join(", ")}`);

/* Le thème annoncé doit correspondre au manifeste, au HTML et au CSS. */
const themeTag = (html.match(/name="theme-color" content="([^"]+)"/) || [])[1];
if (themeTag && themeTag.toLowerCase() !== manifest.theme_color.toLowerCase()) {
  problems.push(`theme-color incohérent : index.html=${themeTag}, manifest=${manifest.theme_color}`);
}
const rootStyle = (css.match(/:root\s*\{([^}]+)\}/) || [])[1] || "";
const background = (rootStyle.match(/--bg:\s*(#[\da-f]+)/i) || [])[1];
if (background && background.toLowerCase() !== manifest.background_color.toLowerCase()) {
  problems.push(`fond PWA incohérent : styles.css=${background}, manifest=${manifest.background_color}`);
}
const schemeTag = (html.match(/name="color-scheme" content="([^"]+)"/) || [])[1];
const schemeStyle = (rootStyle.match(/color-scheme:\s*([^;]+);/) || [])[1]?.trim();
if (schemeTag && schemeStyle && schemeTag !== schemeStyle) {
  problems.push(`color-scheme incohérent : index.html=${schemeTag}, styles.css=${schemeStyle}`);
}

/* 5. les nombres de questions annoncés doivent suivre la banque réelle ------
 * « 330 » était recopié dans la meta description, og:description, le manifeste,
 * les compteurs de l'accueil et le README : ajouter une question rendait ces
 * annonces fausses sans qu'aucun contrôle ne s'en aperçoive. */
const bankTotal = JSON.parse(read("data/questions.json")).length;
const readme = read("README.md");
const claims = [
  ["index.html (meta description)", (html.match(/<meta name="description" content="([^"]*)"/) || [])[1]],
  ["index.html (og:description)", (html.match(/<meta property="og:description" content="([^"]*)"/) || [])[1]],
  ["manifest.webmanifest (description)", manifest.description],
  ["README.md (introduction)", readme],
];
for (const [label, text] of claims) {
  const claim = (text || "").match(/(\d+)\s+questions?\b/);
  if (!claim) problems.push(`${label} n'annonce aucun nombre de questions`);
  else if (Number(claim[1]) !== bankTotal) problems.push(`${label} annonce ${claim[1]} questions au lieu de ${bankTotal}`);
}
for (const id of ["bank-total", "revision-count"]) {
  const counter = html.match(new RegExp(`id="${id}"[^>]*>(\\d+)<`));
  if (!counter) problems.push(`index.html : le compteur #${id} est absent`);
  else if (Number(counter[1]) !== bankTotal) problems.push(`index.html : #${id} affiche ${counter[1]} au lieu de ${bankTotal}`);
}

if (problems.length) {
  console.error(`❌ ${problems.length} problème(s) d'interface :`);
  problems.forEach((p) => console.error("   - " + p));
  process.exit(1);
}
console.log(`✅ Interface cohérente : ${usedIds.size} identifiants, ${assets.size} fichiers référencés, ${usedClasses.size} classes stylées, aucune ressource externe.`);
