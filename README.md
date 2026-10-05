# Quiz secourisme — Protection Civile du Lot

Application web d'entraînement au **PSC**, au **PSE1** et au **PSE2** : 330 questions
corrigées, réparties en 11 thématiques, avec correction immédiate, explications,
mode révision et fiche mémo.

**Site en ligne :** <https://rabi46.github.io/Quiz/>

Les formulations ajoutées privilégient les termes officiels des références techniques nationales fournies dans le dépôt.

## Fonctionnalités

- **11 thématiques** + un **mode classique** (les 9 thèmes de base, mélangeant désormais PSC, PSE1 et PSE2 selon la banque disponible).
- **Lots sans aucune répétition** : un cycle parcourt toutes les questions d'une
  thématique une seule fois, par lots de 7 à 10 questions ; les questions déjà
  posées ne reviennent qu'au cycle suivant.
- **Correction immédiate** avec explication pédagogique, chronomètre de 30 secondes.
- **Fin de lot** : score, pourcentage, liste des questions à revoir et bouton
  « Rejouer mes erreurs ».
- **Mode révision** : toutes les questions, réponses et explications, sans chronomètre.
- **Fiche mémo** : numéros d'urgence et repères chiffrés à connaître par cœur.
- **Progression locale** : les questions déjà vues sont mémorisées sur l'appareil
  (localStorage), aucune donnée n'est envoyée.
- **PWA** : installation sur mobile et fonctionnement hors ligne via service worker.
- **Animation de démarrage** : au lancement, l'emblème de la Protection Civile
  (disque orange, triangle blanc, triangle bleu) se dessine, des ondes de
  protection s'en échappent et le nom de l'association apparaît, puis l'écran
  s'efface tout seul (nettoyage garanti par un minuteur, appui ou touche pour
  passer, désactivée si « réduire les animations » est demandé).
- **Accessibilité** : navigation au clavier (touches `1`-`4` ou `A`-`D`), annonces
  lecteur d'écran, contrastes conformes AA, respect de `prefers-reduced-motion`,
  lien d'évitement visible au focus, bonne/mauvaise réponse signalées par un
  glyphe et un libellé (pas par la couleur seule).
- **Chronomètre respectueux** : le décompte de 30 secondes se met en pause quand
  l'onglet passe en arrière-plan et reprend où il s'était arrêté.

## Structure du dépôt

| Chemin | Rôle |
|---|---|
| `index.html` | structure des écrans (accueil, mémo, révision, quiz, résultat) |
| `styles.css` | feuille de styles unique (thème clair, contrastes AA) |
| `app.js` | logique du quiz, tirage des lots, stockage de la progression |
| `data/questions.json` | **source de vérité** de la banque de questions |
| `questions.js` | banque compilée pour le navigateur (générée, ne pas éditer) |
| `Références techniques nationales - Premiers Secours en Equipe (1).pdf` | référence officielle utilisée pour les formulations PSE1/PSE2 |
| `references-techniques-nationales-psc-juillet-2026.pdf` | référence officielle utilisée pour les formulations PSC |
| `sw.js` | service worker (hors ligne) |
| `manifest.webmanifest` | manifeste PWA |
| `tools/validate_bank.mjs` | contrôle automatique de la banque |
| `tools/check_sw_version.mjs` | exige l'incrémentation de `VERSION` quand un fichier publié change |
| `tools/test_lot.mjs` | test des lots (aucune répétition dans un cycle) |
| `tools/generate_questions_js.py` | génère `questions.js` depuis `data/questions.json` |
| `tools/check_ui.mjs` | vérifie identifiants, fichiers et absence de dépendance externe |
| `tools/e2e.mjs` | parcours complet dans un DOM simulé (jsdom) |
| `tools/make_icons.sh` | régénère les icônes PNG (`icons/`) |
| `.github/workflows/pages.yml` | contrôles + déploiement GitHub Pages |

## Ajouter ou corriger une question

1. Modifier **`data/questions.json`** (jamais `questions.js`) :

```json
{
  "id": "urg-31",
  "cat": "Urgences Vitales",
  "level": "PSE1",
  "q": "Question se terminant par un point d'interrogation ?",
  "opts": ["Bonne réponse", "Distracteur 1", "Distracteur 2", "Distracteur 3"],
  "c": 0,
  "e": "Explication pédagogique affichée après la réponse."
}
```

Règles à respecter :

- `id` unique et stable : **ne jamais le changer**, c'est lui qui mémorise la
  progression des utilisateurs (modifier le texte d'une question ne casse rien) ;
- `cat` : l'une des thématiques **déclarées dans `app.js`** (la liste n'est plus
  recopiée dans l'outillage : ajouter un thème se fait d'abord dans `THEMES`) ;
- `level` : `PSC`, `PSE1` ou `PSE2` ;
- exactement 4 propositions, toutes distinctes et de longueur comparable
  (la bonne réponse ne doit pas être repérable par sa longueur) ;
- une thématique doit compter **au moins 7 questions** (`MIN_LOT`) pour pouvoir
  composer un lot ; en dessous, le contrôle bloque. Entre 11 et 13 questions,
  le lot de fin de cycle est court : le contrôle le signale en avertissement ;
- pas de distracteur contenant « jamais », « toujours », « 100 % »… qui le rend
  éliminable d'office ;
- l'explication (`e`) est obligatoire.

2. Régénérer et vérifier :

```bash
python3 tools/generate_questions_js.py   # met à jour questions.js
node tools/validate_bank.mjs             # doit afficher « Banque valide »
node tools/test_lot.mjs                  # doit afficher « 0 répétition »
node tools/check_ui.mjs                  # doit afficher « Interface cohérente »
```

3. Si des fichiers de l'application changent, incrémenter `VERSION` dans `sw.js`
   (sinon les visiteurs gardent l'ancienne version en cache). GitHub Actions le
   vérifie désormais : `node tools/check_sw_version.mjs <révision-de-base>`.

## Développement local

L'application n'a **aucune dépendance** : un simple serveur statique suffit.

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Les contrôles automatiques (également exécutés par GitHub Actions) :

```bash
npm install            # jsdom, uniquement pour le test de bout en bout
npm test               # banque + lots + cohérence de l'interface
python3 -m http.server 8080 &
npm run test:e2e       # parcours complet dans un DOM simulé
npm run test:sw        # cache : VERSION incrémentée si un fichier publié change
```

`tools/check_ui.mjs` vérifie aussi que **chaque classe posée par `index.html` ou
`app.js` a bien une règle dans `styles.css`** (une classe orpheline = un style
oublié) et que **le service worker précharge tous les fichiers du site**.

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/pages.yml` :
les contrôles (`validate`) s'exécutent d'abord, puis le site est publié sur
GitHub Pages si la banque est valide. Les branches mortes et l'outillage interne
(`tools/`, `data/`) ne sont pas publiés.

## Contenu et responsabilité

Les questions et la fiche mémo sont des **repères pédagogiques** destinés à
l'entraînement. Elles ne remplacent ni le référentiel officiel de la Protection
Civile, ni les recommandations du médecin régulateur. Faire relire toute
évolution de contenu par un formateur PSE habilité.

## Licence

Code publié sous licence MIT (voir `LICENSE`).
Le logo de la Protection Civile reste la propriété de l'association.

## Sources documentaires utilisées

Les formulations officielles des questions ajoutées ou reformulées s'appuient sur les documents de référence suivants :

- `Références techniques nationales - Premiers Secours en Equipe (1).pdf`
- `references-techniques-nationales-psc-juillet-2026.pdf`

## Mentions d'état du contenu, sources, RGPD et contacts

- **Bandeau d'accueil** (`#home .notice`) : « En attente de validation par Vianney et Ana ». Il n'apparaît que sur l'écran d'accueil. **Retirer le bandeau est une décision de l'association, pas une retouche d'interface** : il ne disparaîtra qu'une fois la relecture validée.
- **Pied de page** (`footer.foot-note`, visible sur tous les écrans) : sources (références techniques nationales de la Sécurité civile, édition 2026 — PSC · PSE1 · PSE2), mention de conformité RGPD (aucune donnée collectée ; progression stockée localement uniquement, effaçable depuis l'accueil) et contacts (courriel et téléphone).
- `tools/e2e.mjs` vérifie la présence de ces mentions et la validité des liens `mailto:` et `tel:` : les retirer fait échouer la CI.
