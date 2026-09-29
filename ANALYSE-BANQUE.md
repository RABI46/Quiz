# Analyse de la banque de questions — Quiz PSE1 (Protection Civile du Lot)

**Date :** 29 septembre 2026
**Périmètre audité :** `data/questions.json` (source de vérité), `questions.js` (banque compilée), `app.js`, `README.md`, `tools/`
**Objet :** document de travail pour la comparaison avec le *Guide de Synthèse Technique Complet — PSE 1 (Édition Juillet 2026)*

> ⚠️ **Le PDF du guide n'a pas pu être ouvert** : il n'a pas été déposé dans l'espace de travail (aucun dossier `uploads/`, aucun PDF sur le disque). Ce rapport couvre donc **la moitié « quiz »** de la comparaison, entièrement vérifiée sur le dépôt. La colonne « conforme au guide » sera remplie dès que le fichier sera accessible. Les points §5 sont les **candidats** à confronter au guide.

---

## 1. Inventaire de la banque

| Indicateur | Valeur |
|---|---|
| Questions | **266** |
| Thématiques | **11** |
| Propositions par question | **4** (aucune non-distincte, aucun doublon de banque) |
| Explications pédagogiques | **266 / 266** (obligatoires, présentes) |
| Niveaux déclarés | **241 PSE1** / **25 PSE2** |
| Longueur d'explication | 58 → 172 caractères (moyenne 98) |
| Mode classique (9 thèmes socle) | 226 questions, 23 lots |

### Répartition par thématique

| Thématique | Questions | PSE1 | PSE2 |
|---|---:|---:|---:|
| Urgences Vitales | 30 | 30 | 0 |
| Malaises & Affections | 28 | 28 | 0 |
| RCP & DAE | 27 | 27 | 0 |
| Hémorragie & Pansements | 26 | 25 | 1 |
| Traumatismes & Brûlures | 26 | 26 | 0 |
| Attitude & Comportement | 24 | 24 | 0 |
| Évaluation Neurologique | 23 | 23 | 0 |
| Obstruction des Voies Aériennes | 22 | 22 | 0 |
| Position Latérale de Secours | 20 | 19 | 1 |
| Traumatisme Rachis & Immobilisation | 20 | 16 | 4 |
| Matériel & Oxygénothérapie | 20 | 1 | **19** |
| **Total** | **266** | **241** | **25** |

**Point d'attention — étiquetage des niveaux.** La thématique « Matériel & Oxygénothérapie » est marquée **PSE2 à 19/20** : c'est une thématique quasi exclusivement PSE2 mélangée, dans la même liste, à dix thématiques PSE1 — et un seul de ses items, `mat-20` (le DAE), est étiqueté PSE1. À l'inverse, `hem-15` (plaie thoracique, pansement sur trois côtés) ainsi que `pls-19`, `rac-04`, `rac-13`, `rac-14` et `rac-15` (collier cervical, retournement en bloc, plan dur) sont marqués PSE2. Comme le champ `level` conditionne ce qui apparaît en mode classique et en révision, **chaque étiquette PSE1/PSE2 doit être validée contre le guide** — c'est un point de contrôle à part entière, pas un détail cosmétique.

---

## 2. Contrôles automatiques du dépôt

Tous les outils passent ✅ — la banque est **structurellement saine** :

```
node tools/validate_bank.mjs  → Banque valide : 266 questions, 11 thématiques, aucun doublon
node tools/test_lot.mjs       → 0 répétition dans un lot, 0 répétition dans un cycle
node tools/check_ui.mjs       → 35 identifiants, 10 fichiers référencés, aucune ressource externe
```

Ces contrôles **ne portent que sur la forme** (unicité, comptage, cohérence de l'interface). Ils ne détectent aucune des deux anomalies de fond ci-dessous.

---

## 3. Anomalie majeure — la bonne réponse est repérable à la longueur

C'est le défaut le plus lourd du point de vue pédagogique : **l'élève peut réussir sans rien connaître au programme.**

| Mesure | Valeur observée | Attendu si neutre |
|---|---|---|
| Bonne réponse = **option la plus longue** | **215 / 266 = 81 %** | 25 % |
| Bonne réponse = option la plus courte | 10 / 266 = 4 % | 25 % |
| Longueur moyenne de la bonne réponse | **66,4 caractères** | ≈ |
| Longueur moyenne des distracteurs | **49,2 caractères** | ≈ |

**Conséquence directe :** une stratégie « je coche toujours la proposition la plus détaillée » rapporte **81 %** de réussite, contre 25 % par hasard. Le quiz ne mesure plus les connaissances mais la capacité à repérer un style de rédaction.

Cette dérive **contredit une règle explicitement inscrite dans le `README.md`** du dépôt :

> « exactement 4 propositions, toutes distinctes et de longueur comparable (la bonne réponse ne doit pas être repérable par sa longueur) »

La règle est énoncée mais n'est contrôlée ni par `tools/validate_bank.mjs`, ni par aucun autre test.

**Correctif recommandé (durable) :** ajouter au validateur un test statistique (`% d'items où la bonne réponse est la plus longue`, seuil ≈ 35 %) et, à défaut, un test par question signalant un écart de longueur supérieur à ~40 % entre la bonne réponse et la moyenne des distracteurs. Puis réécrire les distracteurs trop courts — le travail est mécanique et peut être ciblé sur les items les plus criants.

---

## 4. Anomalie secondaire — distracteurs éliminables d'office

Le `README.md` interdit aussi :

> « pas de distracteur contenant « jamais », « toujours », « 100 % »… qui le rend éliminable d'office »

**54 / 266 questions (20 %)** contiennent au moins un distracteur à terme absolu. Exemples :

| id | Distracteur fautif |
|---|---|
| `att-11` | « **Uniquement** lorsqu'il voit du sang » |
| `att-17` | « Pour éviter **uniquement** qu'elle prenne froid » |
| `urg-06` | « Oui, **uniquement** au niveau du cou » |
| `urg-26` | « **Toutes** les quinze minutes, montre en main » |
| `att-24` | « En renouvelant son diplôme **tous** les six mois auprès de la préfecture » |

Le terme absolu est parfois un marqueur de fausse piste utile, mais à 20 % de couverture il devient un réflexe d'élimination. À traiter par lots, en priorité sur les items où le distracteur absolu est aussi le plus court (il cumule les deux indices).

---

## 5. Points de vigilance à confronter au guide

Ces items sont **à vérifier ligne à ligne contre le guide** : ils reposent sur une valeur chiffrée ou une formulation qui varie d'une édition du référentiel à l'autre, et constituent les candidats les plus probables à une divergence.

| id | Ce qui est écrit dans le quiz | Point à vérifier |
|---|---|---|
| `tra-01` / `tra-02` | Refroidir « au moins quinze à vingt minutes », eau « tempérée », l'explication cite **15 à 20 °C** | Température exacte et durée minimale retenues par l'édition Juillet 2026 |
| `tra-08` | Brûlure chimique : rinçage « au moins vingt à trente minutes » | Durée de rinçage retenue |
| `mat-01` | Masque haute concentration : **10 à 15 L/min** | Certaines éditions retiennent 9 ou 15 L/min |
| `mat-02` | Lunettes à oxygène : **2 à 6 L/min** | Plusieurs référentiels annoncent **1 à 6 L/min** |
| `pls-20` | Victime **trouvée sur le ventre** qui respire → « la retourne en PLS » | Les recommandations récentes admettent de la **laisser sur le ventre** si la ventilation est libre |
| `pls-18` | « La jambe **du côté vers lequel la victime est tournée**, pliée » | Formulation ambiguë : la jambe pliée est celle **du dessus** (côté opposé au sol) |
| `rcp-03` | Profondeur adulte **5 à 6 cm** | Conforme aux recommandations, mais à croiser avec le chiffrage du guide |
| `rcp-23` | RCP nourrisson : « au centre de la poitrine, 100 à 120/min » | La **profondeur** (≈ 1/3 du thorax) n'est pas chiffrée — voir §6 |
| `mal-23` | Coup de chaleur : « met à l'ombre, rafraîchit, hydrate si consciente » | Critères d'alerte et technique de refroidissement |
| `urg-11` | Détresse respiratoire : position « assise ou demi-assise, celle où elle respire le mieux » | — |
| `att-04` | 112 « depuis **n'importe quel pays de l'Union européenne** » | Conforme |
| `ova-03` | Obstruction totale adulte : **5 claques puis 5 compressions abdominales** | Certaines éditions inversent l'ordre ou précisent « 5 cycles » |

Ces treize items ne représentent pas des erreurs démontrées : ce sont les **points de divergence les plus probables** entre une banque écrite par génération/compilation et un guide technique officiel daté.

---

## 6. Couverture du programme — notions absentes ou très minces

Balayage automatique de l'ensemble des 266 questions (énoncé + propositions + explication) à la recherche des notions du référentiel PSE1 :

### Notions totalement absentes ❌ (0 question)

| Notion | Enjeu |
|---|---|
| **Hémorragie interne** | Aucun item : c'est pourtant une détresse circulatoire à savoir suspecter et alerter |
| **Luxation** | Aucun item, alors que **entorse** (`tra-18`) et **contusion** (`tra-17`) sont traitées |
| **Crampe musculaire** | Le mot n'apparaît **que dans des distracteurs** (`urg-19`, `tra-19`) |
| **Hyperglycémie / coma diabétique** | Seule l'**hypoglycémie** est couverte (3 items) : le tableau inverse n'existe pas |
| **Bilan complémentaire (bilan secondaire, tête aux pieds)** | Seul le **bilan circonstanciel** (`att-18`) est vraiment traité ; le mot n'apparaît nulle part |
| **Hypothermie** | Le mot n'apparaît que dans un distracteur (`pls-16`) : aucune conduite à tenir |
| **Soutien / accompagnement psychologique, détresse psychique** | 0 question (seule la « réassurance » de `mal-17` s'en approche) — bloc pourtant central dans les référentiels récents |
| **Personnes vulnérables : handicap, maltraitance, violences** | 0 question |
| **Accouchement inopiné** | 0 question (seules 3 questions traitent la femme enceinte : `rcp-16`, `ova-06`, `pls-06`) |
| **Profondeur des compressions chez l'enfant / le nourrisson** | `rcp-21` et `rcp-23` ne donnent que le ratio et la fréquence |
| **Insufflation bouche-à-bouche + nez chez le nourrisson** | Technique spécifique non décrite |

### Notions très minces ⚠️ (1 seule question, ou bloc réduit)

| Notion | Couverture | Remarque |
|---|---|---|
| **Relevage / portage / brancardage à plusieurs** | 1 question (`rac-15`, plan dur et civière à coquille, PSE2) | Geste de base du travail en équipe, réduit à un item de matériel |
| **Aspiration des sécrétions** | 1 question (`mat-09`) | — |
| **DAE chez l'enfant** | 1 question (`rcp-17`) | — |
| **Retrait du casque** | 2 questions, formulations différentes (`pls-19` et `rac-14`) | Voir §7 |
| **Fiche bilan / transmission écrite** | 3 mentions seulement (`urg-25`, `urg-29`, `hem-05`) | Aucune question dédiée à la structure du bilan |
| **Noyade** | 2 questions (`urg-14`, `rcp-22`) | — |
| **Électrisation** | 2 questions (`urg-17`, `tra-11`) | — |
| **Intoxication au monoxyde de carbone** | 1 question (`urg-15`) | — |

### Blocs bien couverts ✅

Détresses vitales et bilan d'urgence vitale · RCP adulte et DAE · obstruction des voies aériennes (adulte, enfant, nourrisson) · hémorragies externes et pansements (abdomen, thorax, œil, amputation, morsure, piqûre) · PLS · rachis et immobilisation · malaises (AVC, douleur thoracique, convulsions, asthme, anaphylaxie, hypoglycémie, hyperventilation, malaise vagal, coup de chaleur) · alerte et numéros d'urgence · hygiène, protection, AES · cadre juridique (consentement, refus de soins, confidentialité, pudeur).

---

## 7. Incohérences internes relevées

| Point | Détail |
|---|---|
| `pls-19` vs `rac-14` | Deux questions sur le **casque du motard** avec des réponses formulées différemment (« le retrait se fait à deux, dans l'axe » / « on le laisse en place et on le maintient ») — cohérentes entre elles, mais redondantes et susceptibles d'être perçues comme contradictoires par un élève |
| `hem-10` vs `tra-26` | Deux questions quasi identiques sur le **corps étranger planté dans une plaie** (`hem-10` thème Hémorragie, `tra-26` thème Traumatismes) — pas un doublon strict, donc non détecté par le validateur, mais redondance forte |
| `att-01` vs `att-04/05` vs `urg-…` | Le bloc « alerte » est réparti entre **Attitude & Comportement** (`att-04` à `att-08`) et **Urgences Vitales** : il n'existe aucune thématique « alerte et bilan », alors que c'est une compétence transversale du référentiel |
| `app.js` **ligne 17** | Commentaire obsolète : *« elles forment aussi le mode classique (90 questions) »* alors que le mode classique compte **226** questions (vérifié par `tools/test_lot.mjs`) |
| `pls-18` | Formulation de la bonne réponse ambiguë (voir §5) — risque de contestation par un formateur |

---

## 8. Cadre de comparaison préparé pour le guide

Dès que le PDF sera accessible, l'analyse suivra cette grille, notion par notion du guide :

| Colonne | Contenu |
|---|---|
| § du guide | Numéro de chapitre / section du *Guide de Synthèse Technique Complet* |
| Notion | Intitulé du geste ou de la connaissance |
| Quiz | `id` de la ou des questions correspondantes (ou « — ») |
| Verdict | ✅ conforme · ⚠️ divergent (détail du chiffre ou de la formulation) · ❌ absent de la banque |
| Action | Rien / corriger l'item `xxx` / créer un item `xxx-nn` |

Puis, à partir de cette table : la **liste des questions à corriger**, la **liste des questions à créer** (avec `id`, `cat`, `level`, les 4 propositions et l'explication, au format du `README.md`) et la mise à jour de `data/questions.json` + `questions.js` + `VERSION` dans `sw.js`.

---

## 9. Synthèse

**Ce qui va bien.** La banque est propre sur la forme : 266 questions, 11 thématiques, 4 propositions distinctes, explications systématiques, aucun doublon, aucun cycle de lot qui se répète, application sans dépendance externe. L'infrastructure de test (`validate_bank`, `test_lot`, `check_ui`, `e2e`) est sérieuse et le déploiement conditionne la publication à la validité de la banque.

**Ce qui doit être corrigé, par ordre d'impact pédagogique :**

1. **La longueur trahit la bonne réponse dans 81 % des cas** → l'application est contournable ; c'est le correctif n° 1.
2. **20 % des questions ont un distracteur éliminable d'office** (termes absolus).
3. **Onze notions du référentiel sont totalement absentes** : hémorragie interne, luxation, crampe, hyperglycémie/coma diabétique, bilan complémentaire, hypothermie, soutien psychologique, personnes vulnérables, accouchement inopiné, profondeur des compressions du nourrisson, insufflation bouche-à-bouche + nez.
4. **Huit blocs sont sous-couverts** (1 à 3 questions) : relevage/portage/brancardage, aspiration, DAE enfant, retrait du casque, fiche bilan, noyade, électrisation, monoxyde de carbone.
5. **Treize items à vérifier** contre l'édition Juillet 2026 du guide (§5) : ce sont les seuls endroits où une divergence de fond avec le document est plausible.
6. **Deux garde-fous à ajouter au dépôt** : un contrôle automatique de l'équilibre des longueurs dans `tools/validate_bank.mjs`, et une déduplication par similarité pour repérer les quasi-doublons inter-thématiques (`hem-10`/`tra-26`).

Les points 1, 2, 4 et 6 sont **vérifiés et exploitables dès maintenant**, sans le guide. Le point 5 et la liste des questions à créer dépendent de la lecture du PDF.
