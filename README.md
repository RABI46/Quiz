# Quiz PSE — Protection Civile du Lot

Application web d'entraînement au **PSE1** (Premiers Secours en Équipe) : 305 questions
corrigées, réparties en 13 thématiques, avec correction immédiate, explications,
mode révision et fiche mémo.

Le contenu est aligné sur les **Références techniques nationales — Premiers Secours en
Équipe, édition juillet 2026** (DGSCGC, annexe 3 de l'arrêté du 7 juillet 2026), qui
constituent le référentiel opposable des formations PSE1 et PSE2.

**Site en ligne :** <https://rabi46.github.io/Quiz/>

## Fonctionnalités

- **13 thématiques** + un **mode classique** (les 10 thèmes socle, 251 questions).
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
- **Accessibilité** : navigation au clavier (touches `1`-`4` ou `A`-`D`), annonces
  lecteur d'écran, contrastes conformes AA, respect de `prefers-reduced-motion`.

## Structure du dépôt

| Chemin | Rôle |
|---|---|
| `index.html` | structure des écrans (accueil, mémo, révision, quiz, résultat) |
| `styles.css` | feuille de styles unique (thème clair, contrastes AA) |
| `app.js` | logique du quiz, tirage des lots, stockage de la progression |
| `data/questions.json` | **source de vérité** de la banque de questions |
| `questions.js` | banque compilée pour le navigateur (générée, ne pas éditer) |
| `sw.js` | service worker (hors ligne) |
| `manifest.webmanifest` | manifeste PWA |
| `tools/validate_bank.mjs` | contrôle automatique de la banque |
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
- `cat` : l'une des 13 thématiques existantes ;
- `level` : `PSE1` ou `PSE2`, à accorder au marquage PSE① / PSE② de la fiche du
  référentiel dont la question traite ;
- exactement 4 propositions, toutes distinctes et de longueur comparable
  (la bonne réponse ne doit pas être repérable par sa longueur) ;
- pas de distracteur contenant « jamais », « toujours », « uniquement », « tous
  les », « 100 % »… qui le rend éliminable d'office ;
- l'explication (`e`) est obligatoire ;
- le contenu doit être conforme au référentiel en vigueur (voir la section
  « Conformité au référentiel » ci-dessous) ;
- une thématique compte **au moins 11 questions**, sans quoi le tirage ne peut pas
  éviter de reproposer les questions du lot précédent au changement de cycle.

2. Régénérer et vérifier :

```bash
python3 tools/generate_questions_js.py   # met à jour questions.js
node tools/validate_bank.mjs             # doit afficher « Banque valide »
node tools/test_lot.mjs                  # doit afficher « 0 répétition »
```

`validate_bank.mjs` contrôle désormais aussi la **qualité pédagogique** et
avertit lorsque :

- la bonne réponse est nettement plus longue que les distracteurs (au-delà de
  ×1,6 par rapport au plus long, ou de 25 caractères d'écart à leur moyenne) ;
- la bonne réponse est l'option la plus longue dans plus de **35 %** des
  questions — au-delà, l'élève peut réussir en cochant systématiquement la
  proposition la plus détaillée ;
- un distracteur contient un terme absolu qui le rend éliminable d'office ;
- les positions de la bonne réponse sont déséquilibrées.

Ces avertissements ne bloquent pas la publication : ils signalent le travail de
réécriture restant.

## Conformité au référentiel

Le contenu suit les **Références techniques nationales — Premiers Secours en
Équipe, édition juillet 2026** (DGSCGC) : 198 fiches réparties en 13 chapitres,
applicables depuis le 11 juillet 2026.

- Chaque question dont le niveau est renseigné respecte le marquage **PSE① /
  PSE②** de la fiche correspondante.
- Les évolutions de juillet 2026 intégrées : suppression des cinq insufflations
  initiales chez l'enfant, du nourrisson et du noyé ; refroidissement actif par
  immersion avec un seuil de 39 °C ; seuil de 25 kg et position antéro-postérieure
  des électrodes du DAE ; seconde injection d'adrénaline à 5 minutes ; balancement
  thoraco-abdominal ; nouveau périmètre du 114 ; compression par la victime, gaze
  hémostatique et garrot industriel.
- Deux thématiques couvrent des chapitres jusque-là absents : « Bilans &
  Surveillance » (chapitre 04) et « Situations Particulières » (chapitres 11 et 12).

Toute évolution de contenu doit être **relue par un formateur PSE habilité**.

3. Si des fichiers de l'application changent, incrémenter `VERSION` dans `sw.js`
   (sinon les visiteurs gardent l'ancienne version en cache).

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
```

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
