# Comparaison — Banque de questions du Quiz PSE1 ↔ Référentiel national PSE, édition juillet 2026

**Date :** 29 septembre 2026
**Objet :** confronter les 266 questions de `data/questions.json` au document de référence PSE1 de juillet 2026.

---

## 0. Avertissement méthodologique — à lire

**Le fichier que tu as joint (« Guide de Synthèse Technique Complet _ PSE 1 (Edition Juillet 2026).pdf ») n'est jamais arrivé dans mon espace de travail.** Malgré le message d'attachement, le dossier de dépôt n'existe pas et aucune trace du PDF n'est présente sur le disque — vérifié à plusieurs reprises, y compris après plusieurs minutes d'attente.

Pour ne pas te laisser sans réponse, j'ai récupéré **la source officielle de la même édition** : les *Références techniques nationales — Premiers Secours en Équipe, édition juillet 2026* (DGSCGC, annexe 3 de l'arrêté du 7 juillet 2026, 198 fiches, 389 pages, applicables depuis le 11 juillet 2026). C'est le texte dont dépend légalement toute formation PSE1 : il est **opposable**, et il est donc le bon étalon de comparaison — même si ton guide est une synthèse rédigée à partir de lui.

**Conséquence pratique :** si ton « Guide de Synthèse Technique Complet » est une reformulation de ce référentiel, la comparaison ci-dessous est directement exploitable. S'il contient des développements propres (schémas, fiches de synthèse, contenus pédagogiques additionnels), renvoie-le et je complète l'analyse sur ces parties.

---

## 1. Sources utilisées

| Source | Usage |
|---|---|
| *Références techniques nationales PSE, édition juillet 2026* — PDF officiel, 198 fiches ([lien](https://www.alertis.fr/wp-content/uploads/2026/09/references-techniques-nationales-pse-juillet-2026.pdf)) | Structure complète des 13 chapitres, codes de fiches (`05FT10`…), dates de révision, marquage PSE①/PSE② |
| Secourisme.net — [« PSE 2026 : ce qui change »](https://www.secourisme.net/spip.php?breve621=&lang=fr) | Comparaison fiche à fiche 2024 → 2026 |
| [Référentiel PSE 2026 : télécharger le PDF officiel](https://www.secourisme.net/spip.php?article927=&lang=fr) | Sommaire des 13 chapitres, nombre de fiches, code et date |
| Secourisme.net — [« Chaleur : la conduite à tenir du secouriste »](https://www.secourisme.net/spip.php?article932) | Doctrine 2026 du refroidissement actif |
| `data/questions.json` (266 questions) | Banque auditée |

---

## 2. Vue d'ensemble — deux découpages qui ne se recouvrent pas

Le référentiel est organisé en **13 chapitres** ; le quiz en **11 thématiques**. Le découpage du quiz suit l'**ancienne logique pédagogique** (le secouriste, la chaîne des secours, la sécurité, l'alerte, l'obstruction, les hémorragies, l'inconscience, l'arrêt cardiaque, le DAE, les détresses vitales, les malaises, les accidents de la peau, les traumatismes, la noyade, la surveillance) et **ignore trois chapitres entiers du référentiel 2026**.

| Chapitre du référentiel 2026 | Fiches | Dont PSE① | Questions du quiz | Verdict |
|---|---:|---:|---:|:--:|
| 01 Attitude et comportement | 11 | **11** | ~24 | ⚠️ Volume OK, **contenu psychologique absent** (voir §6) |
| 02 Protection et sécurité | 4 | 3 | ~4 | ✅ |
| 03 Hygiène et asepsie | 13 | **13** | ~6 | ⚠️ Sous-couvert |
| **04 Bilans** | **23** | **22** | **0 dédiée, 5 mentions** | ❌ **Le plus gros manque du quiz** |
| 05 Urgences vitales | 37 | **37** | ~125 | ✅ Sur-couvert (voir §3) |
| 06 Malaises et affections spécifiques | 17 | 5 | ~28 | ❌ Mal ciblé (voir §4) |
| 07 Traumatismes | 36 | ~21 | ~46 | ⚠️ Trop sur le rachis (PSE2), pas assez sur les techniques PSE1 |
| 08 Atteintes circonstancielles | 35 | 2 (noyade) | ~5 | ⚠️ Faible mais conforme (peu de PSE1) |
| 09 Souffrance psychique | 2 | 0 (PSE②) | 0 | ➖ Hors PSE1, mais voir chapitre 01 |
| **10 Relevage et brancardage** | **14** | 1 | **1** | ⚠️ Quasi absent |
| **11 Situations particulières** | **2** | **2** | **0** | ❌ **Obligatoire PSE1, absent** |
| 12 Divers (alerte) | 3 | **3** | ~5 | ⚠️ Incomplet (voir §5, point K) |
| 13 Formations | 1 | 1 | 1 | ✅ |

**Lecture :** le quiz sur-investit le chapitre « ce qui tue en premier » (125 questions pour 37 fiches) et sous-investit tout le reste. Les chapitres **Bilans** (23 fiches, 22 obligatoires PSE1) et **Situations particulières** (2 fiches, obligatoires PSE1) sont les deux trous les plus nets.

---

## 3. La sur-couverture du chapitre 05 (Urgences vitales)

Cinq des onze thématiques du quiz (Urgences Vitales, RCP & DAE, Obstruction des Voies Aériennes, Position Latérale de Secours, Hémorragie & Pansements) correspondent à **un seul chapitre** du référentiel. Cela représente **125 questions sur 266, soit 47 % de la banque**, pour 37 fiches sur 198 (19 %).

Budgétairement parlant, ce n'est pas absurde — c'est bien là que se jouent les vies. Mais l'effet secondaire est que **la banque paraît couvrir le programme alors qu'elle n'en couvre qu'un cinquième.**

---

## 4. Divergences doctrinales — les items à corriger

Ce sont les écarts **vérifiés** entre ce qu'enseigne le quiz et ce que dit l'édition juillet 2026.

### ❌ 4.1 — Le défaut le plus grave : `rcp-22` enseigne une séquence supprimée

| | |
|---|---|
| **Question du quiz** | `rcp-22` — « Par quelle manœuvre débute-t-on la réanimation d'un enfant ou d'un noyé ? » |
| **Réponse donnée** | « **Par cinq insufflations, puis la RCP** » |
| **Explication du quiz** | « En cas d'asphyxie ou de noyade, la cause est respiratoire : cinq insufflations initiales sont réalisées avant les compressions. » |
| **Ce que dit l'édition juillet 2026** | La séquence de **5 insufflations initiales a disparu du texte** (fiches 05PR04 / 05PR05 / 05FT10). La réanimation débute **directement par les compressions thoraciques**, comme chez l'adulte, avec un ratio adapté à l'âge : 30/2 chez l'adulte, **15/2 chez l'enfant et le nourrisson** — y compris en contexte de noyade. |

**C'est le seul item de la banque qui enseigne un geste explicitement retiré du référentiel.** Dans une application utilisée pour préparer un examen adossé à un texte opposable, c'est une correction prioritaire et immédiate.

**Proposition de réécriture :**
> **Question :** Par quelle manœuvre débute-t-on la réanimation d'un enfant ou d'un nourrisson en arrêt cardiaque ?
> **Bonne réponse :** Par des compressions thoraciques immédiates, puis 2 insufflations après 15 compressions.
> **Explication :** Depuis l'édition juillet 2026, la réanimation débute directement par les compressions, quel que soit l'âge et quelle que soit la cause (y compris la noyade). Le ratio est de 15 compressions pour 2 insufflations chez l'enfant et le nourrisson.

### ❌ 4.2 — Coup de chaleur (`mal-23`) : doctrine de refroidissement dépassée

L'édition 2026 installe une **fiche technique entièrement nouvelle (08FT03)** sur le **refroidissement actif** : **immersion totale du corps** comme méthode de référence (variante improvisée par bâche et eau glacée), avec un **objectif chiffré : température corporelle inférieure à 39 °C**, ou 15 minutes si la température ne peut pas être mesurée, et poursuite **jusqu'à disparition des signes neurologiques**.

Le quiz répond « il la met à l'ombre, la rafraîchit et l'hydrate si elle est consciente » : c'est la doctrine passive antérieure, sans seuil d'arrêt ni méthode de référence.
*Note de niveau : dans le référentiel, « Affections liées à la chaleur » est marqué **PSE②**, alors que `mal-23` est étiqueté PSE1.*

### ⚠️ 4.3 — Autres écarts vérifiés

| id | Ce que dit le quiz | Ce que dit l'édition juillet 2026 | Action |
|---|---|---|---|
| `rcp-23` | RCP nourrisson : « compressions au centre de la poitrine, 100 à 120/min » | Technique **unifiée** : **deux pouces l'un sur l'autre**, en encerclant le thorax avec les mains ; profondeur **au-delà d'un tiers de la hauteur du thorax** | Compléter la question |
| `ova-08` | Désobstruction nourrisson : 5 claques (tête plus basse) puis 5 compressions thoraciques | Séquence conforme, mais technique de compression **à deux mains / deux pouces** et profondeur **> 1/3** désormais fixées | Compléter |
| `ova-02` | « Quand la victime tousse, l'air passe encore : on ne l'interrompt pas » | Indication des claques dans le dos **étendue** : « incapable de parler ou de tousser, **ou dont la toux devient inefficace** » (nourrisson : « incapable de pleurer fortement ») | Ajouter le critère « toux inefficace » |
| `rcp-11` / `rcp-17` | Électrodes : position adulte (clavicule droite / aisselle gauche) ; « électrodes pédiatriques ou atténuateur » | **Nouvelle section « Position des électrodes »** avec **seuil de 25 kg** : antéro-latérale au-delà, **antéro-postérieure en dessous** (nourrisson, enfant de moins de 25 kg). En cas d'échecs répétés chez l'adulte : bascule en antéro-postérieure, et double défibrillation à l'arrivée d'une équipe médicale | Corriger les deux items |
| `mal-12` | Réaction allergique grave : alerter, aider à utiliser l'auto-injecteur | Délai de la **2ᵉ injection d'adrénaline ramené à 5 minutes** (contre 10 à 15 minutes en 2024) | Ajouter le délai |
| `urg-10` | Signes de détresse respiratoire : tirage, cyanose, difficulté à parler ou tousser | **Nouveau signe à rechercher : le balancement thoraco-abdominal** (mouvement opposé du thorax et de l'abdomen) | Ajouter le signe |
| `urg-24` | « Sur une surface dure et plane, au sol de préférence » | Note nouvelle : « **l'installation sur un plan dur ne doit pas retarder la réanimation cardio-pulmonaire** » | Nuancer |
| `hem-01` / `hem-26` | Premier geste : compression directe (main protégée) ; garrot de fortune « un lien large et résistant » | 2026 réécrit la doctrine : **compression par la victime**, **pansement compressif systématique face aux amputations**, **préférence pour le garrot industriel** ; ajout du **packing des plaies cavitaires** et des **garrots pneumatiques** | Enrichir |
| `att-06` | 114 « réservé aux personnes sourdes ou malentendantes, par SMS ou par application » | Fiche 12AC02 (07-2026) : accessibles en **visio, tchat, images et SMS**, pour les personnes sourdes, **sourdaveugles**, malentendantes **et aphasiques**, **et utilisable en situation de violences intrafamiliales** quand l'appelant ne peut pas parler | Corriger |
| `urg-19` | Les détresses vitales : « arrêt cardiaque, inconscience, détresse respiratoire et hémorragie externe » | Le référentiel distingue **détresse respiratoire (05AC07)**, **détresse circulatoire (05AC08)** et **détresse neurologique (05AC09)** — c'est le vocabulaire attendu | Aligner le vocabulaire |

### ✅ 4.4 — Points de la banque conformes (à ne pas toucher)

- `hem-17` — conditionnement du segment amputé : linge propre puis sac au frais, **sans contact direct avec la glace**. Conforme à la fiche 07FT04, qui justifie précisément ce point (risque de gelures compromettant la réimplantation).
- `tra-03` / `tra-24` — pas de glace directement sur une brûlure / interposition d'un linge. Conforme.
- `rcp-01` / `rcp-21` — ratios 30:2 (adulte) et 15:2 (enfant) : conformes à l'édition 2026.
- `att-01` (PAS), `att-02` (protection), `att-11` à `att-14` (hygiène), `att-17` (pudeur) : conformes au chapitre 01/03.

---

## 5. Étiquetage PSE1 / PSE2 — une trentaine d'items mal classés

Le référentiel marque chaque fiche **PSE①**, **PSE②**, ou sans marquage (**enseignement non obligatoire**, utile en complément). Le quiz n'a que deux valeurs (`PSE1` / `PSE2`). Le résultat est que **la banque déclare « PSE1 » des contenus que le référentiel réserve au PSE2**, et inversement.

### 5.1 Contenus PSE2-only enseignés comme du PSE1

| Contenu | Fiches officielles | Items du quiz concernés |
|---|---|---|
| **Accident vasculaire cérébral** | 06AC03 / 06PR03 — **PSE②** | `mal-26`, `mal-28`, `neu-08`, `neu-11`, `neu-12`, `neu-13`, `neu-23` (7 items) |
| **Douleur thoracique non traumatique** | 06AC02 / 06PR02 — **PSE②** | `mal-04`, `mal-05` |
| **Traumatisme du crâne** | 07AC09 / 07PR09 — **PSE②** | `neu-15`, `neu-16`, `neu-17`, `neu-18`, `tra-23` |
| **Traumatisme de l'abdomen** | 07AC04 / 07PR04 — **PSE②** | `hem-14` |
| **Traumatisme du dos et du cou** | 07AC08 / 07PR08 — **PSE②** | une partie de la thématique Rachis (`rac-05`, `rac-07`, `rac-08`, `rac-09`, `rac-10`, `rac-13`…) |
| **Piqûres et morsures** | 08AC09 / 08PR11 — **PSE②** | `hem-19`, `hem-20` |
| **Accident électrique** | 08AC01 / 08PR01 — **PSE②** | `urg-16`, `urg-17`, `tra-11` |
| **Intoxications** | 08AC08 / 08PR09 — **PSE②** | `urg-15`, `urg-18` |

**Remarque importante :** ce n'est **pas** une erreur « de contenu » — ces questions sont pédagogiquement bonnes. Le problème est **de niveau** : le mode classique du quiz (9 thèmes socle, 226 questions) les présente comme du socle PSE1, alors que le référentiel 2026 les place en PSE2. Il faut soit changer le `level`, soit assumer explicitement que la banque est « PSE1 + notions PSE2 en bonus » et le dire dans l'application.

### 5.2 Contenus PSE1 obligatoires étiquetés PSE2 (l'inverse)

| Contenu | Fiche officielle | Item du quiz |
|---|---|---|
| **Bouteille d'oxygène, inhalation d'O₂** | 05AC01, 05FT01 — **PSE①** | toute la thématique « Matériel & Oxygénothérapie », étiquetée PSE2 à **19/20** |
| **Ventilation par insufflateur manuel (BAVU)** | 05FT11 — **PSE①** | `mat-07`, `mat-08` (PSE2) |
| **Canule oropharyngée / aspiration** | 05FT14, 05FT15 — **PSE①** | `mat-09` (PSE2) |
| **Mesure de la SpO₂** | 04FT08 (07-2026) — **PSE①** | `mat-11`, `mat-12` (PSE2) |
| **Utilisation du DAE** | 05FT16 — **PSE①** | `mat-17` à `mat-20` (PSE2) |
| **Retrait d'un casque de protection** | 04FT03 — **PSE①** | `pls-19`, `rac-14` (PSE2) |
| **Pose d'un collier cervical** | 07FT12 — **PSE①** | `rac-04` (PSE2) |
| **Maintien de la tête en position neutre** | 07FT11 — **PSE①** | `rac-01` à `rac-03` (PSE1 ✅) |

**Conséquence concrète sur l'application :** 19 des 20 questions de la thématique « Matériel & Oxygénothérapie » sont exclues du mode classique et du mode révision « socle » alors que, dans le référentiel 2026, **l'oxygène, le BAVU, l'aspiration, le DAE et la SpO₂ sont du PSE1 obligatoire.** C'est un manque de préparation à l'examen, pas seulement une coquille.

---

## 6. Contenus obligatoires PSE1 absents de la banque

### 6.1 Chapitre 04 — Bilans (22 fiches PSE①, aucune question dédiée)

C'est le trou principal. Le quiz ne contient **aucune question dédiée au bilan** : seules cinq mentions dispersées (`att-18` bilan circonstanciel, `att-19` transmit son bilan, `urg-29` heure des événements, `neu-23` informations à transmettre, `hem-05` heure de pose du garrot sur la fiche bilan). Sont absents :

- **les quatre regards** (`04PR01` premier regard, `04PR02` deuxième regard — mis à jour 07-2026, `04PR03` troisième, `04PR04` quatrième) : c'est la structure même du bilan d'urgence vitale, enseignée comme un enchaînement ;
- **surveillance de la victime** (`04PR05`, 07-2026) et **transmission du bilan** (`04PR06`) ;
- **retournement à deux secouristes** (`04FT01`) et **à un secouriste** (`04FT02`) ;
- **mesure de la glycémie capillaire** (`04FT13`, nouvelle fiche 07-2026) ;
- **mesure de la température** (`04FT14`, 07-2026) ;
- **recherche de lésions** (`04FT15`) et **mesure de la douleur** (`04FT16`) ;
- **mesure de la pression artérielle** (`04FT10`) — alors que `mat-11` évoque l'oxymètre sans jamais parler de pression artérielle ;
- **libération des voies aériennes** dans ses trois variantes (`04FT04` non traumatisée, `04FT05` traumatisée, `04FT06` victime assise) — la banque n'en couvre que deux, et pas la variante assise.

### 6.2 Chapitre 11 — Situations particulières (2 fiches, **PSE①**)

**Aucune question.** Le référentiel rend obligatoires en PSE1 :

- `11PR01` **Situation à nombreuses victimes** ;
- `11PR02` **Repérage en cas de nombreuses victimes**.

C'est un contenu **nouveau et obligatoire** que la banque ignore totalement.

### 6.3 Chapitre 01 — Soutien psychologique (6 fiches PSE①, 0 question)

Le référentiel consacre six fiches PSE1 à la dimension psychologique, **toutes absentes du quiz** :

- `01FT01` Évaluation de l'impact psychologique
- `01FT02` Stabiliser l'état psycho-physiologique d'une victime
- `01FT03` L'écoute active
- `01FT04` La respiration contrôlée
- `01FT05` Focalisation / défocalisation attentionnelle
- `01PR02` Intervenir auprès d'un enfant

Le quiz ne contient qu'une occurrence du mot « réassurance » (`mal-17`) et **aucune** question sur l'abord relationnel, l'écoute active ou l'intervention auprès d'un enfant — alors que ce dernier point est un objectif pédagogique explicite du référentiel.

### 6.4 Chapitre 12 — Alerte (3 fiches PSE①)

- `12AC02` **Alerte** (07-2026) : le 114 dans sa nouvelle définition (voir §4.3) ;
- `12AC03` **Alerte et protection des populations** (07-2026, entièrement nouvelle) : **signal national d'alerte par sirènes, notifications FR-Alert, réseaux sociaux officiels**.

`att-04` à `att-08` couvrent l'alerte classique (112, 15, 114 partiellement, message d'alerte) mais **rien sur l'alerte aux populations**, qui est pourtant une compétence PSE1 obligatoire depuis cette édition.

### 6.5 Chapitre 05 — Nouvelles techniques 2026

- `05FT05` **Gaze imbibée de substance hémostatique** (07-2026) — absente du quiz ;
- `05FT06` **Techniques de réchauffement d'une victime** (PSE①) — donc **l'hypothermie** est bien un sujet PSE1, or la banque ne contient **aucune** question sur l'hypothermie ;
- `05FT13` **Administration d'oxygène par insufflation** — absente ;
- `05FT14` **Mise en place d'une canule oropharyngée** — absente (le quiz ne parle que de la canule *d'aspiration*, `mat-09`).

### 6.6 Chapitre 10 — Relevage et brancardage (14 fiches)

Sur les 14 fiches, **seule `10FT04` « Préparation d'un dispositif de portage » est PSE①** ; tout le reste est PSE② (aide à la marche, chaise de transport, relevages à 3 et 4, brancardage…). La banque ne traite ce chapitre que par un item indirect — `rac-15` « À quoi sert un plan dur ou une civière à coquille ? » — qui correspond en réalité à la fiche **PSE② 07FT14** (immobilisation générale sur un plan dur), et qui se trouve de surcroît rangé dans la thématique « Traumatisme Rachis & Immobilisation ». Autrement dit : la seule fiche de portage obligatoire en PSE1 (`10FT04`) n'a **aucune question**, et le seul item qui parle de matériel de portage est mal rattaché.

---

## 7. Plan d'action proposé

### Priorité 1 — Corrections factuelles (à faire sans attendre)

1. **`rcp-22`** : réécrire la question et l'explication (5 insufflations supprimées). **Impact : un élève qui suit ce quiz apprend un geste retiré du référentiel.**
2. **`mal-23`** : intégrer le refroidissement actif, l'immersion, le seuil < 39 °C.
3. **`rcp-11` / `rcp-17`** : ajouter le seuil de 25 kg et la position antéro-postérieure.
4. **`mal-12`** : ajouter le délai de 5 minutes pour la 2ᵉ injection d'adrénaline.
5. **`att-06`** : mettre à jour la définition du 114.
6. **`rcp-23`**, **`ova-08`**, **`ova-02`**, **`urg-10`**, **`urg-24`**, **`urg-19`**, **`hem-01`**, **`hem-26`** : compléter selon le tableau §4.3.

### Priorité 2 — Niveaux PSE1/PSE2

7. Reprendre `data/questions.json` champ par champ `level` à partir du marquage du référentiel (§5). Décider ensuite **explicitement** de la politique : soit on aligne l'étiquette sur le référentiel, soit on sépare « socle PSE1 » et « complément PSE2 » dans l'interface — mais pas l'actuel entre-deux, qui retire du socle des contenus obligatoires.

### Priorité 3 — Contenus manquants (création)

8. Créer un lot de questions sur le **chapitre 04 Bilans** (les quatre regards, surveillance, transmission, retournements, glycémie, température, recherche de lésions, mesure de la douleur).
9. Créer un lot sur le **chapitre 01 psychologique** (impact psychologique, écoute active, respiration contrôlée, intervenir auprès d'un enfant).
10. Créer **2 questions** sur le **chapitre 11 Situations particulières** (nombreuses victimes, repérage).
11. Créer **1 à 2 questions** sur l'**alerte aux populations** (FR-Alert, sirènes) et sur la **gaze hémostatique** / les **techniques de réchauffement**.
12. Créer **1 question** sur l'**hypothermie** (PSE① par le biais des techniques de réchauffement).

### Priorité 4 — Qualité de la banque (voir le rapport `ANALYSE-BANQUE.md`)

13. Corriger le biais de longueur : **81 % des bonnes réponses sont l'option la plus longue**, ce qui rend le quiz contournable sans rien connaître.
14. Traiter les **54 questions** contenant un distracteur à terme absolu.

---

## 8. Synthèse en une page

**Ce qui tient.** Les blocs « ce qui tue en premier » (RCP, DAE, obstruction, hémorragies, PLS, inconscience) sont bien couverts, et plusieurs items pointus sont conformes à la nouvelle doctrine, notamment le conditionnement du segment amputé sans contact avec la glace.

**Ce qui casse la préparation à l'examen.** Trois choses, par ordre de gravité :

1. **`rcp-22` enseigne un geste supprimé** (les 5 insufflations initiales chez l'enfant et le nourrisson, supprimées en juillet 2026). À corriger immédiatement.
2. **L'étiquetage PSE1/PSE2 est inversé sur une trentaine d'items** : le quiz étiquette PSE2 l'oxygénothérapie, le BAVU, l'aspiration, la SpO₂ et le DAE — tous **PSE1 obligatoires** — et étiquette PSE1 l'AVC, la douleur thoracique, le traumatisme crânien, les piqûres et morsures, l'accident électrique — tous **PSE2**. Résultat : le mode classique retire du socle ce qui est exigible et y fait entrer ce qui ne l'est pas.
3. **Le chapitre 04 « Bilans » (22 fiches PSE1) est quasi absent**, comme les 6 fiches de soutien psychologique du chapitre 01 et les 2 fiches obligatoires « Situations particulières ».

**Et un quatrième point, indépendant du référentiel :** la longueur des options trahit la bonne réponse dans 81 % des cas — la banque est donc gagnable sans compétence réelle.

---

*Rapport d'audit de forme de la banque : `ANALYSE-BANQUE.md`. Sources et éléments de comparaison disponibles dans le tableau §1.*
