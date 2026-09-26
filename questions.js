const QUESTION_BANK = [
  {
    "cat": "Attitude & Comportement",
    "q": "Quelle est la priorité absolue du secouriste lorsqu'il arrive sur une scène d'accident ?",
    "opts": [
      "Identifier les antécédents de la victime",
      "Protéger : assurer sa sécurité, celle de l'équipe et de la victime",
      "Pratiquer immédiatement un bilan vital",
      "Transmettre le bilan au SAMU"
    ],
    "c": 1,
    "e": "La protection est primordiale pour éviter le suraccident et garantir la sécurité des intervenants."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "En présence d'un danger imminent incontrôlable (ex: incendie majeur, effondrement), que fait le secouriste ?",
    "opts": [
      "Tenter une extraction rapide quel que soit le danger",
      "Réaliser un dégagement d'urgence si possible sinon évacuer la zone et baliser",
      "Attendre sans prévenir personne",
      "Pratiquer la RCP sur place"
    ],
    "c": 1,
    "e": "Face à un danger imminent, si le dégagement d'urgence est impossible ou trop dangereux, il faut sécuriser le périmètre et alerter."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Combien de regards comporte l'évaluation initiale de la situation par le secouriste ?",
    "opts": [
      "2 regards",
      "3 regards",
      "4 regards",
      "5 regards"
    ],
    "c": 2,
    "e": "L'évaluation initiale comprend 4 regards : observer les dangers, identifier les menaces vitales, évaluer les fonctions vitales et réaliser le bilan complémentaire."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Quel est l'objectif principal du balisage lors d'un accident de la circulation ?",
    "opts": [
      "Régler le trafic automobile",
      "Matérialiser la zone de danger pour protéger les victimes et les secours",
      "Faciliter l'arrivée des médias",
      "Éviter les amendes des forces de l'ordre"
    ],
    "c": 1,
    "e": "Le balisage permet de rendre la zone visible de loin et de prévenir les suraccidents."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Quelle distance minimale de sécurité est préconisée face à un véhicule en feu sur autoroute ?",
    "opts": [
      "10 mètres",
      "25 mètres",
      "50 mètres",
      "100 mètres"
    ],
    "c": 2,
    "e": "Une distance minimale de 50 mètres est nécessaire en raison des risques d'explosion ou de fumées toxiques."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Lors de l'intervention auprès d'une victime agressive, quelle doit être l'attitude du secouriste ?",
    "opts": [
      "Employer la force pour la maintenir",
      "Garder une distance de sécurité, rester calme, ne pas isoler le secouriste et demander du renfort",
      "Quitter les lieux définitivement sans prévenir les secours",
      "Ignorer l'agressivité et toucher la victime de force"
    ],
    "c": 1,
    "e": "La sécurité du secouriste prime : garder ses distances, communiquer sereinement et solliciter les forces de l'ordre si nécessaire."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Que signifie le secret professionnel pour un secouriste en équipe ?",
    "opts": [
      "Ne rien dire même aux médecins du SAMU",
      "Ne divulguer les informations médicales qu'aux seules personnes participant directement aux soins de la victime",
      "Publier les informations sur les réseaux sociaux si les noms sont masqués",
      "Raconter l'intervention à sa famille"
    ],
    "c": 1,
    "e": "Les informations médicales sont confidentielles et ne sont transmises qu'aux professionnels de santé prenant en charge la victime."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Dans le cadre du port des EPI, quand le secouriste doit-il mettre ses gants à usage unique ?",
    "opts": [
      "Uniquement s'il y a du sang visible",
      "Avant tout contact avec la victime ou du matériel souillé",
      "Juste avant de transmettre le bilan",
      "Après avoir pris la tension"
    ],
    "c": 1,
    "e": "Le port des gants est obligatoire avant tout contact avec la victime pour éviter les risques de contamination manuportée."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Que doit faire un secouriste si une victime consciente refuse expressément les soins ?",
    "opts": [
      "L'obliger physiquement à se faire soigner",
      "Informer la victime des risques, respecter sa décision si elle est lucide, et demander l'avis du médecin régulateur",
      "Laisser la victime immédiatement sans contacter le régulateur",
      "Appeler directement la famille pour décision"
    ],
    "c": 1,
    "e": "Toute personne consciente et majeure peut refuser les soins; le secouriste informe et prend avis auprès du médecin régulateur."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Quel numéro permet de joindre les secours d'urgence depuis n'importe quel pays de l'Union Européenne ?",
    "opts": [
      "15",
      "17",
      "18",
      "112"
    ],
    "c": 3,
    "e": "Le 112 est le numéro d'urgence européen unique."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "En France, quel numéro permet de joindre le SAMU ?",
    "opts": [
      "15",
      "18",
      "112",
      "114"
    ],
    "c": 0,
    "e": "Le 15 est le numéro direct pour la régulation médicale du SAMU."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Le numéro d'urgence 114 est spécifiquement dédié :",
    "opts": [
      "Aux urgences en mer",
      "Aux personnes sourdes ou malentendantes (par SMS ou application)",
      "Aux urgences psychiatriques",
      "Aux accidents du travail"
    ],
    "c": 1,
    "e": "Le 114 permet aux personnes sourdes ou malentendantes de contacter les secours par texte ou vidéo."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Quel numéro d'urgence joindre en priorité pour un incendie ou un risque d'effondrement ?",
    "opts": [
      "15",
      "17",
      "18",
      "115"
    ],
    "c": 2,
    "e": "Le 18 est le numéro d'urgence des Sapeurs-Pompiers."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Lors du bilan transmis au SAMU, quel élément doit obligatoirement figurer dès le début du message ?",
    "opts": [
      "Le nom du médecin traitant",
      "L'adresse précise du lieu d'intervention et le motif d'appel",
      "La température corporelle de la victime",
      "La tension artérielle exacte"
    ],
    "c": 1,
    "e": "La localisation exacte garantit l'envoi immédiat des secours même si la ligne est coupée."
  },
  {
    "cat": "Attitude & Comportement",
    "q": "Quelle est la première étape de la chaîne de survie chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "La défibrillation précoce",
      "La reconnaissance précoce de l'arrêt et l'alerte des secours",
      "La réanimation cardio-pulmonaire précoce",
      "Les soins post-réanimation"
    ],
    "c": 1,
    "e": "Le premier maillon de la chaîne de survie est la reconnaissance et l'alerte immédiate."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q16 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Prendre la température",
      "Poser un collier cervical",
      "Arrêter une hémorragie externe grave",
      "Mettre en PLS"
    ],
    "c": 2,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q17 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Donner à boire",
      "Mettre les jambes en l'air",
      "Appliquer une compression directe sur la plaie",
      "Poser de la glace"
    ],
    "c": 2,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q18 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour toute plaie simple du bras",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour un saignement du nez",
      "Pour une écorchure du genou"
    ],
    "c": 1,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q19 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "En dessous de la plaie",
      "Sur la plaie directement",
      "Sur l'articulation la plus proche"
    ],
    "c": 0,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q20 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Le desserrer toutes les 5 minutes",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "L'enlever dès que le saignement s'arrête"
    ],
    "c": 2,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q21 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "15 compressions pour 2 insufflations",
      "30 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations",
      "5 compressions pour 1 insufflation"
    ],
    "c": 1,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q22 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "80 à 100 compressions par minute",
      "100 à 120 compressions par minute",
      "130 à 150 compressions par minute",
      "60 à 80 compressions par minute"
    ],
    "c": 1,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q23 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "3 à 4 cm",
      "5 à 6 cm",
      "8 à 10 cm",
      "1 à 2 cm"
    ],
    "c": 1,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q24 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Secouer la victime",
      "Faire du bouche-à-bouche",
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Continuer les compressions thoraciques"
    ],
    "c": 2,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q25 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Sur les deux cuisses",
      "Les deux sur la poitrine à gauche",
      "Sur le ventre et dans le dos",
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)"
    ],
    "c": 3,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q26 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Attendre que la victime séche seule pendant 20 minutes",
      "Mettre de l'alcool sur la poitrine",
      "Poser les électrodes directement sur la peau mouillée",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau"
    ],
    "c": 3,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q27 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime ronfle bruyamment en dormant",
      "La victime a une voix rauque mais répond aux questions",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime tousse vigoureusement et parle"
    ],
    "c": 2,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q28 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Allonger la victime sur le dos",
      "Donner un verre d'eau",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Pratiquer la méthode d'Heimlich directement"
    ],
    "c": 2,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q29 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Mettre en PLS",
      "Insufler de l'air de force",
      "Effectuer un balayage de la bouche avec le doigt"
    ],
    "c": 0,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q30 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Attendre 5 minutes",
      "Mettre la victime debout",
      "Continuer la méthode de Heimlich au sol",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques"
    ],
    "c": 3,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q31 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "L'immersion dans l'eau",
      "Des compressions thoraciques au centre du sternum",
      "Des compressions sur les cuisses",
      "Des tapotements sur les joues"
    ],
    "c": 1,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q32 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Anxiété",
      "Arrêt cardiaque",
      "Aphasique",
      "Alert (Alerte / Éveillé)"
    ],
    "c": 3,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q33 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vascularisé",
      "Vision",
      "Vertige",
      "Verbal (Répond à la stimulation verbale)"
    ],
    "c": 3,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q34 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Paralysie",
      "Pupille",
      "Pouls",
      "Pain (Réagit uniquement à la douleur)"
    ],
    "c": 3,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q35 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urinaire",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Urgente",
      "Unilateral"
    ],
    "c": 1,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q36 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Dilatées en permanence (mydriase)",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "Asymétriques et immobiles",
      "De couleurs différentes"
    ],
    "c": 1,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q37 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement incolore",
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement noir en nappe",
      "Un saignement rosé très lent"
    ],
    "c": 1,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q38 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "30 secondes puis lâcher",
      "10 secondes",
      "1 minute exacte",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours"
    ],
    "c": 3,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q39 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Pansement sec très serré en appuyant fort",
      "Mettre de l'alcool pur",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Repousser les intestins à l'intérieur avant de panser"
    ],
    "c": 2,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q40 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Injecter de l'eau dans la plaie",
      "Mettre la victime à plat ventre",
      "Appuyer fort pour fermer le poumon",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)"
    ],
    "c": 3,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q41 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime consciente avec fracture du bras",
      "Victime en arrêt cardiaque",
      "Victime en malaise hypoglycémique conscient",
      "Victime inconsciente qui respire normalement"
    ],
    "c": 3,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q42 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour faire baisser la tension artérielle",
      "Pour accélérer le pouls",
      "Pour l'empêcher de s'enfuir",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures"
    ],
    "c": 3,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q43 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le côté gauche (décubitus latéral gauche)",
      "Sur le ventre",
      "Sur le côté droit",
      "En position assise"
    ],
    "c": 0,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q44 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "Ne jamais la tourner même si elle vomit",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "La mettre debout",
      "La plier en deux"
    ],
    "c": 1,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q45 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "Lui faire boire un grand verre d'alcool",
      "La mettre au repos dans la position où elle se sent le mieux",
      "La faire courir pour activer le sang",
      "Lui donner des médicaments de la trousse"
    ],
    "c": 1,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q46 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Fièvre, toux, bouton sur la peau",
      "Brûlure d'estomac, hoquet, crampe",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole"
    ],
    "c": 3,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q47 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Plat ventre",
      "Debout en marchant",
      "Tête en bas et pieds en l'air",
      "Position semi-assise (ou position de confort choisie)"
    ],
    "c": 3,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q48 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une hypoglycémie",
      "Un coup de soleil",
      "Une crise d'asthme",
      "Une entorse de cheville"
    ],
    "c": 0,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q49 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "De l'eau salée",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "Un plat gras",
      "Rien du tout"
    ],
    "c": 1,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q50 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Mettre du beurre ou de l'huile",
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Appliquer de la glace pilée pendant 1 heure",
      "Rincer 10 secondes"
    ],
    "c": 1,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q51 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Mettre un pansement sec immédiatement sans rincer",
      "Appliquer du vinaigre",
      "Frotter fort avec une brosse",
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés"
    ],
    "c": 3,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q52 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Tourner le corps étranger dans la plaie",
      "Pousser le corps étranger plus profondément",
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Le retirer immédiatement en tirant fort"
    ],
    "c": 2,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q53 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Tourner la tête à gauche et à droite",
      "Pose directe du collier cervical sans tenir la tête",
      "Mettre un oreiller lourd sous le cou",
      "Maintien de la tête à deux mains en position neutre"
    ],
    "c": 3,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q54 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Non, il ne sert qu'à réchauffer le cou",
      "Oui, il bloque totalement 100% des mouvements",
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Oui, s'il est serré au maximum"
    ],
    "c": 2,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q55 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "1 à 2 litres par minute",
      "10 à 15 litres par minute",
      "25 à 30 litres par minute",
      "3 à 5 litres par minute"
    ],
    "c": 1,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q56 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Huiler le filetage de la bouteille",
      "Approcher une flamme pour tester la sortie",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Frapper la bouteille avec un marteau"
    ],
    "c": 2,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q57 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Poser un collier cervical",
      "Prendre la température",
      "Arrêter une hémorragie externe grave",
      "Mettre en PLS"
    ],
    "c": 2,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q58 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Appliquer une compression directe sur la plaie",
      "Poser de la glace",
      "Mettre les jambes en l'air",
      "Donner à boire"
    ],
    "c": 0,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q59 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour toute plaie simple du bras",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour une écorchure du genou",
      "Pour un saignement du nez"
    ],
    "c": 1,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q60 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Sur l'articulation la plus proche",
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "En dessous de la plaie",
      "Sur la plaie directement"
    ],
    "c": 1,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q61 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "L'enlever dès que le saignement s'arrête",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "Le desserrer toutes les 5 minutes"
    ],
    "c": 0,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q62 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "30 compressions pour 2 insufflations",
      "15 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations",
      "5 compressions pour 1 insufflation"
    ],
    "c": 0,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q63 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "130 à 150 compressions par minute",
      "60 à 80 compressions par minute",
      "80 à 100 compressions par minute",
      "100 à 120 compressions par minute"
    ],
    "c": 3,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q64 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "5 à 6 cm",
      "1 à 2 cm",
      "8 à 10 cm",
      "3 à 4 cm"
    ],
    "c": 0,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q65 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Faire du bouche-à-bouche",
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Continuer les compressions thoraciques",
      "Secouer la victime"
    ],
    "c": 1,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q66 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Sur les deux cuisses",
      "Sur le ventre et dans le dos",
      "Les deux sur la poitrine à gauche"
    ],
    "c": 0,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q67 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Poser les électrodes directement sur la peau mouillée",
      "Attendre que la victime séche seule pendant 20 minutes",
      "Mettre de l'alcool sur la poitrine"
    ],
    "c": 0,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q68 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime ronfle bruyamment en dormant",
      "La victime tousse vigoureusement et parle",
      "La victime a une voix rauque mais répond aux questions"
    ],
    "c": 0,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q69 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Pratiquer la méthode d'Heimlich directement",
      "Donner un verre d'eau",
      "Allonger la victime sur le dos"
    ],
    "c": 0,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q70 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Effectuer un balayage de la bouche avec le doigt",
      "Insufler de l'air de force",
      "Mettre en PLS"
    ],
    "c": 0,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q71 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Attendre 5 minutes",
      "Mettre la victime debout",
      "Continuer la méthode de Heimlich au sol",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques"
    ],
    "c": 3,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q72 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des tapotements sur les joues",
      "Des compressions sur les cuisses",
      "L'immersion dans l'eau",
      "Des compressions thoraciques au centre du sternum"
    ],
    "c": 3,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q73 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Aphasique",
      "Arrêt cardiaque",
      "Alert (Alerte / Éveillé)",
      "Anxiété"
    ],
    "c": 2,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q74 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Verbal (Répond à la stimulation verbale)",
      "Vision",
      "Vascularisé",
      "Vertige"
    ],
    "c": 0,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q75 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pupille",
      "Pouls",
      "Pain (Réagit uniquement à la douleur)",
      "Paralysie"
    ],
    "c": 2,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q76 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Unilateral",
      "Urinaire",
      "Urgente"
    ],
    "c": 0,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q77 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Dilatées en permanence (mydriase)",
      "De couleurs différentes",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "Asymétriques et immobiles"
    ],
    "c": 2,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q78 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement rosé très lent",
      "Un saignement noir en nappe",
      "Un saignement incolore"
    ],
    "c": 0,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q79 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "1 minute exacte",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours",
      "10 secondes",
      "30 secondes puis lâcher"
    ],
    "c": 1,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q80 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Mettre de l'alcool pur",
      "Repousser les intestins à l'intérieur avant de panser",
      "Pansement sec très serré en appuyant fort",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères"
    ],
    "c": 3,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q81 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Appuyer fort pour fermer le poumon",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)",
      "Injecter de l'eau dans la plaie",
      "Mettre la victime à plat ventre"
    ],
    "c": 1,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q82 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime consciente avec fracture du bras",
      "Victime en arrêt cardiaque",
      "Victime inconsciente qui respire normalement",
      "Victime en malaise hypoglycémique conscient"
    ],
    "c": 2,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q83 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour accélérer le pouls",
      "Pour l'empêcher de s'enfuir",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures",
      "Pour faire baisser la tension artérielle"
    ],
    "c": 2,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q84 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le ventre",
      "Sur le côté droit",
      "En position assise",
      "Sur le côté gauche (décubitus latéral gauche)"
    ],
    "c": 3,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q85 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La plier en deux",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "Ne jamais la tourner même si elle vomit",
      "La mettre debout"
    ],
    "c": 1,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q86 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "La mettre au repos dans la position où elle se sent le mieux",
      "Lui faire boire un grand verre d'alcool",
      "Lui donner des médicaments de la trousse",
      "La faire courir pour activer le sang"
    ],
    "c": 0,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q87 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Brûlure d'estomac, hoquet, crampe",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Fièvre, toux, bouton sur la peau"
    ],
    "c": 0,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q88 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Debout en marchant",
      "Plat ventre",
      "Tête en bas et pieds en l'air",
      "Position semi-assise (ou position de confort choisie)"
    ],
    "c": 3,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q89 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une crise d'asthme",
      "Un coup de soleil",
      "Une hypoglycémie",
      "Une entorse de cheville"
    ],
    "c": 2,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q90 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "Un plat gras",
      "De l'eau salée",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "Rien du tout"
    ],
    "c": 2,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q91 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Mettre du beurre ou de l'huile",
      "Appliquer de la glace pilée pendant 1 heure",
      "Rincer 10 secondes",
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes"
    ],
    "c": 3,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q92 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Frotter fort avec une brosse",
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Appliquer du vinaigre",
      "Mettre un pansement sec immédiatement sans rincer"
    ],
    "c": 1,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q93 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Le retirer immédiatement en tirant fort",
      "Pousser le corps étranger plus profondément",
      "Tourner le corps étranger dans la plaie"
    ],
    "c": 0,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q94 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Pose directe du collier cervical sans tenir la tête",
      "Mettre un oreiller lourd sous le cou",
      "Maintien de la tête à deux mains en position neutre",
      "Tourner la tête à gauche et à droite"
    ],
    "c": 2,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q95 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Non, il ne sert qu'à réchauffer le cou",
      "Oui, s'il est serré au maximum",
      "Oui, il bloque totalement 100% des mouvements",
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire"
    ],
    "c": 3,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q96 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "1 à 2 litres par minute",
      "3 à 5 litres par minute",
      "25 à 30 litres par minute",
      "10 à 15 litres par minute"
    ],
    "c": 3,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q97 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Huiler le filetage de la bouteille",
      "Frapper la bouteille avec un marteau",
      "Approcher une flamme pour tester la sortie"
    ],
    "c": 0,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q98 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Mettre en PLS",
      "Poser un collier cervical",
      "Prendre la température",
      "Arrêter une hémorragie externe grave"
    ],
    "c": 3,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q99 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Poser de la glace",
      "Appliquer une compression directe sur la plaie",
      "Mettre les jambes en l'air",
      "Donner à boire"
    ],
    "c": 1,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q100 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour toute plaie simple du bras",
      "Pour une écorchure du genou",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour un saignement du nez"
    ],
    "c": 2,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q101 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "En dessous de la plaie",
      "Sur l'articulation la plus proche",
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "Sur la plaie directement"
    ],
    "c": 2,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q102 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "L'enlever dès que le saignement s'arrête",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "Le desserrer toutes les 5 minutes"
    ],
    "c": 0,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q103 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "15 compressions pour 2 insufflations",
      "5 compressions pour 1 insufflation",
      "30 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations"
    ],
    "c": 2,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q104 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "100 à 120 compressions par minute",
      "80 à 100 compressions par minute",
      "130 à 150 compressions par minute",
      "60 à 80 compressions par minute"
    ],
    "c": 0,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q105 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "1 à 2 cm",
      "5 à 6 cm",
      "3 à 4 cm",
      "8 à 10 cm"
    ],
    "c": 1,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q106 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Continuer les compressions thoraciques",
      "Faire du bouche-à-bouche",
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Secouer la victime"
    ],
    "c": 2,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q107 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Sur les deux cuisses",
      "Sur le ventre et dans le dos",
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Les deux sur la poitrine à gauche"
    ],
    "c": 2,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q108 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Mettre de l'alcool sur la poitrine",
      "Poser les électrodes directement sur la peau mouillée",
      "Attendre que la victime séche seule pendant 20 minutes"
    ],
    "c": 0,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q109 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime tousse vigoureusement et parle",
      "La victime a une voix rauque mais répond aux questions",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime ronfle bruyamment en dormant"
    ],
    "c": 2,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q110 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Allonger la victime sur le dos",
      "Pratiquer la méthode d'Heimlich directement",
      "Donner un verre d'eau",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates"
    ],
    "c": 3,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q111 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Insufler de l'air de force",
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Mettre en PLS",
      "Effectuer un balayage de la bouche avec le doigt"
    ],
    "c": 1,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q112 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Attendre 5 minutes",
      "Continuer la méthode de Heimlich au sol",
      "Mettre la victime debout"
    ],
    "c": 0,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q113 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "L'immersion dans l'eau",
      "Des compressions thoraciques au centre du sternum",
      "Des compressions sur les cuisses",
      "Des tapotements sur les joues"
    ],
    "c": 1,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q114 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Anxiété",
      "Alert (Alerte / Éveillé)",
      "Aphasique",
      "Arrêt cardiaque"
    ],
    "c": 1,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q115 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vascularisé",
      "Verbal (Répond à la stimulation verbale)",
      "Vertige",
      "Vision"
    ],
    "c": 1,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q116 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pouls",
      "Pain (Réagit uniquement à la douleur)",
      "Paralysie",
      "Pupille"
    ],
    "c": 1,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q117 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urinaire",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Unilateral",
      "Urgente"
    ],
    "c": 1,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q118 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "De couleurs différentes",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "Asymétriques et immobiles",
      "Dilatées en permanence (mydriase)"
    ],
    "c": 1,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q119 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement noir en nappe",
      "Un saignement incolore",
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement rosé très lent"
    ],
    "c": 2,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q120 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours",
      "1 minute exacte",
      "10 secondes",
      "30 secondes puis lâcher"
    ],
    "c": 0,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q121 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Pansement sec très serré en appuyant fort",
      "Mettre de l'alcool pur",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Repousser les intestins à l'intérieur avant de panser"
    ],
    "c": 2,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q122 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)",
      "Appuyer fort pour fermer le poumon",
      "Injecter de l'eau dans la plaie",
      "Mettre la victime à plat ventre"
    ],
    "c": 0,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q123 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime consciente avec fracture du bras",
      "Victime en malaise hypoglycémique conscient",
      "Victime en arrêt cardiaque",
      "Victime inconsciente qui respire normalement"
    ],
    "c": 3,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q124 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour l'empêcher de s'enfuir",
      "Pour accélérer le pouls",
      "Pour faire baisser la tension artérielle",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures"
    ],
    "c": 3,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q125 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le côté gauche (décubitus latéral gauche)",
      "Sur le côté droit",
      "En position assise",
      "Sur le ventre"
    ],
    "c": 0,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q126 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La mettre debout",
      "Ne jamais la tourner même si elle vomit",
      "La plier en deux",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire"
    ],
    "c": 3,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q127 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "Lui donner des médicaments de la trousse",
      "La faire courir pour activer le sang",
      "La mettre au repos dans la position où elle se sent le mieux",
      "Lui faire boire un grand verre d'alcool"
    ],
    "c": 2,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q128 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Fièvre, toux, bouton sur la peau",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Brûlure d'estomac, hoquet, crampe",
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole"
    ],
    "c": 3,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q129 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Debout en marchant",
      "Tête en bas et pieds en l'air",
      "Plat ventre",
      "Position semi-assise (ou position de confort choisie)"
    ],
    "c": 3,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q130 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une hypoglycémie",
      "Un coup de soleil",
      "Une entorse de cheville",
      "Une crise d'asthme"
    ],
    "c": 0,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q131 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "Un plat gras",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "De l'eau salée",
      "Rien du tout"
    ],
    "c": 1,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q132 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Appliquer de la glace pilée pendant 1 heure",
      "Mettre du beurre ou de l'huile",
      "Rincer 10 secondes"
    ],
    "c": 0,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q133 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Frotter fort avec une brosse",
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Appliquer du vinaigre",
      "Mettre un pansement sec immédiatement sans rincer"
    ],
    "c": 1,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q134 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Pousser le corps étranger plus profondément",
      "Le retirer immédiatement en tirant fort",
      "Tourner le corps étranger dans la plaie",
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place"
    ],
    "c": 3,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q135 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Maintien de la tête à deux mains en position neutre",
      "Tourner la tête à gauche et à droite",
      "Mettre un oreiller lourd sous le cou",
      "Pose directe du collier cervical sans tenir la tête"
    ],
    "c": 0,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q136 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Oui, s'il est serré au maximum",
      "Oui, il bloque totalement 100% des mouvements",
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Non, il ne sert qu'à réchauffer le cou"
    ],
    "c": 2,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q137 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "3 à 5 litres par minute",
      "10 à 15 litres par minute",
      "1 à 2 litres par minute",
      "25 à 30 litres par minute"
    ],
    "c": 1,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q138 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Huiler le filetage de la bouteille",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Frapper la bouteille avec un marteau",
      "Approcher une flamme pour tester la sortie"
    ],
    "c": 1,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q139 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Prendre la température",
      "Arrêter une hémorragie externe grave",
      "Poser un collier cervical",
      "Mettre en PLS"
    ],
    "c": 1,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q140 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Mettre les jambes en l'air",
      "Donner à boire",
      "Appliquer une compression directe sur la plaie",
      "Poser de la glace"
    ],
    "c": 2,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q141 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour toute plaie simple du bras",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour une écorchure du genou",
      "Pour un saignement du nez"
    ],
    "c": 1,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q142 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "Sur la plaie directement",
      "Sur l'articulation la plus proche",
      "En dessous de la plaie"
    ],
    "c": 0,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q143 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "L'enlever dès que le saignement s'arrête",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "Le desserrer toutes les 5 minutes"
    ],
    "c": 0,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q144 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "15 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations",
      "5 compressions pour 1 insufflation",
      "30 compressions pour 2 insufflations"
    ],
    "c": 3,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q145 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "60 à 80 compressions par minute",
      "100 à 120 compressions par minute",
      "80 à 100 compressions par minute",
      "130 à 150 compressions par minute"
    ],
    "c": 1,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q146 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "3 à 4 cm",
      "5 à 6 cm",
      "1 à 2 cm",
      "8 à 10 cm"
    ],
    "c": 1,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q147 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Continuer les compressions thoraciques",
      "Faire du bouche-à-bouche",
      "Secouer la victime",
      "S'écarter et veiller à ce que personne ne touche la victime"
    ],
    "c": 3,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q148 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Les deux sur la poitrine à gauche",
      "Sur le ventre et dans le dos",
      "Sur les deux cuisses"
    ],
    "c": 0,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q149 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Mettre de l'alcool sur la poitrine",
      "Poser les électrodes directement sur la peau mouillée",
      "Attendre que la victime séche seule pendant 20 minutes",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau"
    ],
    "c": 3,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q150 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime ronfle bruyamment en dormant",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime a une voix rauque mais répond aux questions",
      "La victime tousse vigoureusement et parle"
    ],
    "c": 1,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q151 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Donner un verre d'eau",
      "Allonger la victime sur le dos",
      "Pratiquer la méthode d'Heimlich directement"
    ],
    "c": 0,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q152 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Mettre en PLS",
      "Insufler de l'air de force",
      "Effectuer un balayage de la bouche avec le doigt",
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)"
    ],
    "c": 3,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q153 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Continuer la méthode de Heimlich au sol",
      "Attendre 5 minutes",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Mettre la victime debout"
    ],
    "c": 2,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q154 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions sur les cuisses",
      "L'immersion dans l'eau",
      "Des compressions thoraciques au centre du sternum",
      "Des tapotements sur les joues"
    ],
    "c": 2,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q155 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Alert (Alerte / Éveillé)",
      "Anxiété",
      "Arrêt cardiaque",
      "Aphasique"
    ],
    "c": 0,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q156 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vertige",
      "Vision",
      "Vascularisé",
      "Verbal (Répond à la stimulation verbale)"
    ],
    "c": 3,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q157 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Paralysie",
      "Pupille",
      "Pouls",
      "Pain (Réagit uniquement à la douleur)"
    ],
    "c": 3,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q158 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Unilateral",
      "Urgente",
      "Urinaire",
      "Unresponsive (Abolition totale des réponses / Inconscient)"
    ],
    "c": 3,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q159 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Asymétriques et immobiles",
      "De couleurs différentes",
      "Dilatées en permanence (mydriase)",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)"
    ],
    "c": 3,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q160 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement rosé très lent",
      "Un saignement noir en nappe",
      "Un saignement incolore"
    ],
    "c": 0,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q161 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "1 minute exacte",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours",
      "10 secondes",
      "30 secondes puis lâcher"
    ],
    "c": 1,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q162 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Pansement sec très serré en appuyant fort",
      "Repousser les intestins à l'intérieur avant de panser",
      "Mettre de l'alcool pur",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères"
    ],
    "c": 3,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q163 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)",
      "Mettre la victime à plat ventre",
      "Appuyer fort pour fermer le poumon",
      "Injecter de l'eau dans la plaie"
    ],
    "c": 0,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q164 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime inconsciente qui respire normalement",
      "Victime consciente avec fracture du bras",
      "Victime en malaise hypoglycémique conscient",
      "Victime en arrêt cardiaque"
    ],
    "c": 0,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q165 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour faire baisser la tension artérielle",
      "Pour accélérer le pouls",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures",
      "Pour l'empêcher de s'enfuir"
    ],
    "c": 2,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q166 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "En position assise",
      "Sur le côté gauche (décubitus latéral gauche)",
      "Sur le côté droit",
      "Sur le ventre"
    ],
    "c": 1,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q167 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "Ne jamais la tourner même si elle vomit",
      "La plier en deux",
      "La mettre debout"
    ],
    "c": 0,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q168 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "La faire courir pour activer le sang",
      "Lui faire boire un grand verre d'alcool",
      "Lui donner des médicaments de la trousse",
      "La mettre au repos dans la position où elle se sent le mieux"
    ],
    "c": 3,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q169 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Brûlure d'estomac, hoquet, crampe",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Fièvre, toux, bouton sur la peau",
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole"
    ],
    "c": 3,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q170 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Plat ventre",
      "Position semi-assise (ou position de confort choisie)",
      "Tête en bas et pieds en l'air",
      "Debout en marchant"
    ],
    "c": 1,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q171 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une crise d'asthme",
      "Une hypoglycémie",
      "Un coup de soleil",
      "Une entorse de cheville"
    ],
    "c": 1,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q172 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "Rien du tout",
      "De l'eau salée",
      "Un plat gras",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)"
    ],
    "c": 3,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q173 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Appliquer de la glace pilée pendant 1 heure",
      "Rincer 10 secondes",
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Mettre du beurre ou de l'huile"
    ],
    "c": 2,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q174 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Appliquer du vinaigre",
      "Frotter fort avec une brosse",
      "Mettre un pansement sec immédiatement sans rincer"
    ],
    "c": 0,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q175 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Pousser le corps étranger plus profondément",
      "Tourner le corps étranger dans la plaie",
      "Le retirer immédiatement en tirant fort"
    ],
    "c": 0,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q176 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Maintien de la tête à deux mains en position neutre",
      "Mettre un oreiller lourd sous le cou",
      "Tourner la tête à gauche et à droite",
      "Pose directe du collier cervical sans tenir la tête"
    ],
    "c": 0,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q177 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Oui, il bloque totalement 100% des mouvements",
      "Oui, s'il est serré au maximum",
      "Non, il ne sert qu'à réchauffer le cou",
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire"
    ],
    "c": 3,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q178 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "10 à 15 litres par minute",
      "3 à 5 litres par minute",
      "25 à 30 litres par minute",
      "1 à 2 litres par minute"
    ],
    "c": 0,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q179 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Frapper la bouteille avec un marteau",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Huiler le filetage de la bouteille",
      "Approcher une flamme pour tester la sortie"
    ],
    "c": 1,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q180 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Prendre la température",
      "Poser un collier cervical",
      "Arrêter une hémorragie externe grave",
      "Mettre en PLS"
    ],
    "c": 2,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q181 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Mettre les jambes en l'air",
      "Poser de la glace",
      "Donner à boire",
      "Appliquer une compression directe sur la plaie"
    ],
    "c": 3,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q182 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour une écorchure du genou",
      "Pour toute plaie simple du bras",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour un saignement du nez"
    ],
    "c": 2,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q183 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "En dessous de la plaie",
      "Sur l'articulation la plus proche",
      "Sur la plaie directement"
    ],
    "c": 0,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q184 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Le recouvrir d'un pansement étanche pour le cacher",
      "L'enlever dès que le saignement s'arrête",
      "Le desserrer toutes les 5 minutes",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot"
    ],
    "c": 3,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q185 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "50 compressions pour 5 insufflations",
      "5 compressions pour 1 insufflation",
      "30 compressions pour 2 insufflations",
      "15 compressions pour 2 insufflations"
    ],
    "c": 2,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q186 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "130 à 150 compressions par minute",
      "60 à 80 compressions par minute",
      "80 à 100 compressions par minute",
      "100 à 120 compressions par minute"
    ],
    "c": 3,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q187 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "1 à 2 cm",
      "8 à 10 cm",
      "5 à 6 cm",
      "3 à 4 cm"
    ],
    "c": 2,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q188 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Faire du bouche-à-bouche",
      "Continuer les compressions thoraciques",
      "Secouer la victime",
      "S'écarter et veiller à ce que personne ne touche la victime"
    ],
    "c": 3,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q189 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Les deux sur la poitrine à gauche",
      "Sur le ventre et dans le dos",
      "Sur les deux cuisses"
    ],
    "c": 0,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q190 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Poser les électrodes directement sur la peau mouillée",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Mettre de l'alcool sur la poitrine",
      "Attendre que la victime séche seule pendant 20 minutes"
    ],
    "c": 1,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q191 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime tousse vigoureusement et parle",
      "La victime a une voix rauque mais répond aux questions",
      "La victime ronfle bruyamment en dormant",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge"
    ],
    "c": 3,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q192 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Donner un verre d'eau",
      "Allonger la victime sur le dos",
      "Pratiquer la méthode d'Heimlich directement"
    ],
    "c": 0,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q193 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Mettre en PLS",
      "Insufler de l'air de force",
      "Effectuer un balayage de la bouche avec le doigt"
    ],
    "c": 0,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q194 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Mettre la victime debout",
      "Continuer la méthode de Heimlich au sol",
      "Attendre 5 minutes",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques"
    ],
    "c": 3,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q195 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions thoraciques au centre du sternum",
      "L'immersion dans l'eau",
      "Des tapotements sur les joues",
      "Des compressions sur les cuisses"
    ],
    "c": 0,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q196 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Arrêt cardiaque",
      "Aphasique",
      "Alert (Alerte / Éveillé)",
      "Anxiété"
    ],
    "c": 2,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q197 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vertige",
      "Verbal (Répond à la stimulation verbale)",
      "Vision",
      "Vascularisé"
    ],
    "c": 1,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q198 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pouls",
      "Paralysie",
      "Pupille",
      "Pain (Réagit uniquement à la douleur)"
    ],
    "c": 3,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q199 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urinaire",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Urgente",
      "Unilateral"
    ],
    "c": 1,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q200 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "Dilatées en permanence (mydriase)",
      "Asymétriques et immobiles",
      "De couleurs différentes"
    ],
    "c": 0,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q201 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement incolore",
      "Un saignement noir en nappe",
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement rosé très lent"
    ],
    "c": 2,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q202 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours",
      "10 secondes",
      "30 secondes puis lâcher",
      "1 minute exacte"
    ],
    "c": 0,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q203 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Repousser les intestins à l'intérieur avant de panser",
      "Pansement sec très serré en appuyant fort",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Mettre de l'alcool pur"
    ],
    "c": 2,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q204 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Appuyer fort pour fermer le poumon",
      "Mettre la victime à plat ventre",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)",
      "Injecter de l'eau dans la plaie"
    ],
    "c": 2,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q205 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime en malaise hypoglycémique conscient",
      "Victime en arrêt cardiaque",
      "Victime consciente avec fracture du bras",
      "Victime inconsciente qui respire normalement"
    ],
    "c": 3,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q206 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour accélérer le pouls",
      "Pour l'empêcher de s'enfuir",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures",
      "Pour faire baisser la tension artérielle"
    ],
    "c": 2,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q207 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le côté gauche (décubitus latéral gauche)",
      "Sur le côté droit",
      "En position assise",
      "Sur le ventre"
    ],
    "c": 0,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q208 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La plier en deux",
      "La mettre debout",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "Ne jamais la tourner même si elle vomit"
    ],
    "c": 2,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q209 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "Lui faire boire un grand verre d'alcool",
      "Lui donner des médicaments de la trousse",
      "La faire courir pour activer le sang",
      "La mettre au repos dans la position où elle se sent le mieux"
    ],
    "c": 3,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q210 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Fièvre, toux, bouton sur la peau",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Brûlure d'estomac, hoquet, crampe",
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole"
    ],
    "c": 3,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q211 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Tête en bas et pieds en l'air",
      "Position semi-assise (ou position de confort choisie)",
      "Plat ventre",
      "Debout en marchant"
    ],
    "c": 1,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q212 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Un coup de soleil",
      "Une crise d'asthme",
      "Une entorse de cheville",
      "Une hypoglycémie"
    ],
    "c": 3,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q213 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "Un plat gras",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "Rien du tout",
      "De l'eau salée"
    ],
    "c": 1,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q214 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Rincer 10 secondes",
      "Mettre du beurre ou de l'huile",
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Appliquer de la glace pilée pendant 1 heure"
    ],
    "c": 2,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q215 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Appliquer du vinaigre",
      "Mettre un pansement sec immédiatement sans rincer",
      "Frotter fort avec une brosse",
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés"
    ],
    "c": 3,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q216 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Le retirer immédiatement en tirant fort",
      "Tourner le corps étranger dans la plaie",
      "Pousser le corps étranger plus profondément"
    ],
    "c": 0,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q217 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Maintien de la tête à deux mains en position neutre",
      "Tourner la tête à gauche et à droite",
      "Mettre un oreiller lourd sous le cou",
      "Pose directe du collier cervical sans tenir la tête"
    ],
    "c": 0,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q218 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Oui, il bloque totalement 100% des mouvements",
      "Non, il ne sert qu'à réchauffer le cou",
      "Oui, s'il est serré au maximum",
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire"
    ],
    "c": 3,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q219 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "10 à 15 litres par minute",
      "25 à 30 litres par minute",
      "3 à 5 litres par minute",
      "1 à 2 litres par minute"
    ],
    "c": 0,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q220 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Frapper la bouteille avec un marteau",
      "Approcher une flamme pour tester la sortie",
      "Huiler le filetage de la bouteille"
    ],
    "c": 0,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q221 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Poser un collier cervical",
      "Mettre en PLS",
      "Arrêter une hémorragie externe grave",
      "Prendre la température"
    ],
    "c": 2,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q222 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Appliquer une compression directe sur la plaie",
      "Donner à boire",
      "Mettre les jambes en l'air",
      "Poser de la glace"
    ],
    "c": 0,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q223 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour une écorchure du genou",
      "Pour toute plaie simple du bras",
      "Pour un saignement du nez",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible"
    ],
    "c": 3,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q224 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "Sur l'articulation la plus proche",
      "Sur la plaie directement",
      "En dessous de la plaie"
    ],
    "c": 0,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q225 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Le desserrer toutes les 5 minutes",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "L'enlever dès que le saignement s'arrête"
    ],
    "c": 1,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q226 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "15 compressions pour 2 insufflations",
      "30 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations",
      "5 compressions pour 1 insufflation"
    ],
    "c": 1,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q227 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "80 à 100 compressions par minute",
      "130 à 150 compressions par minute",
      "60 à 80 compressions par minute",
      "100 à 120 compressions par minute"
    ],
    "c": 3,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q228 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "8 à 10 cm",
      "1 à 2 cm",
      "5 à 6 cm",
      "3 à 4 cm"
    ],
    "c": 2,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q229 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Secouer la victime",
      "Continuer les compressions thoraciques",
      "Faire du bouche-à-bouche"
    ],
    "c": 0,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q230 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Sur le ventre et dans le dos",
      "Sur les deux cuisses",
      "Les deux sur la poitrine à gauche"
    ],
    "c": 0,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q231 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Poser les électrodes directement sur la peau mouillée",
      "Attendre que la victime séche seule pendant 20 minutes",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Mettre de l'alcool sur la poitrine"
    ],
    "c": 2,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q232 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime a une voix rauque mais répond aux questions",
      "La victime tousse vigoureusement et parle",
      "La victime ronfle bruyamment en dormant"
    ],
    "c": 0,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q233 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Allonger la victime sur le dos",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Donner un verre d'eau",
      "Pratiquer la méthode d'Heimlich directement"
    ],
    "c": 1,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q234 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Effectuer un balayage de la bouche avec le doigt",
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Insufler de l'air de force",
      "Mettre en PLS"
    ],
    "c": 1,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q235 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Attendre 5 minutes",
      "Mettre la victime debout",
      "Continuer la méthode de Heimlich au sol"
    ],
    "c": 0,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q236 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des tapotements sur les joues",
      "Des compressions sur les cuisses",
      "Des compressions thoraciques au centre du sternum",
      "L'immersion dans l'eau"
    ],
    "c": 2,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q237 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Alert (Alerte / Éveillé)",
      "Anxiété",
      "Arrêt cardiaque",
      "Aphasique"
    ],
    "c": 0,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q238 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vertige",
      "Vision",
      "Verbal (Répond à la stimulation verbale)",
      "Vascularisé"
    ],
    "c": 2,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q239 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Paralysie",
      "Pupille",
      "Pain (Réagit uniquement à la douleur)",
      "Pouls"
    ],
    "c": 2,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q240 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urgente",
      "Unilateral",
      "Urinaire",
      "Unresponsive (Abolition totale des réponses / Inconscient)"
    ],
    "c": 3,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q241 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Dilatées en permanence (mydriase)",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "De couleurs différentes",
      "Asymétriques et immobiles"
    ],
    "c": 1,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q242 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement incolore",
      "Un saignement rosé très lent",
      "Un saignement noir en nappe"
    ],
    "c": 0,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q243 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "1 minute exacte",
      "10 secondes",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours",
      "30 secondes puis lâcher"
    ],
    "c": 2,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q244 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Mettre de l'alcool pur",
      "Repousser les intestins à l'intérieur avant de panser",
      "Pansement sec très serré en appuyant fort",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères"
    ],
    "c": 3,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q245 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Appuyer fort pour fermer le poumon",
      "Mettre la victime à plat ventre",
      "Injecter de l'eau dans la plaie",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)"
    ],
    "c": 3,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q246 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime en malaise hypoglycémique conscient",
      "Victime en arrêt cardiaque",
      "Victime consciente avec fracture du bras",
      "Victime inconsciente qui respire normalement"
    ],
    "c": 3,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q247 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour l'empêcher de s'enfuir",
      "Pour accélérer le pouls",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures",
      "Pour faire baisser la tension artérielle"
    ],
    "c": 2,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q248 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le côté gauche (décubitus latéral gauche)",
      "En position assise",
      "Sur le ventre",
      "Sur le côté droit"
    ],
    "c": 0,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q249 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La mettre debout",
      "La plier en deux",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "Ne jamais la tourner même si elle vomit"
    ],
    "c": 2,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q250 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "Lui faire boire un grand verre d'alcool",
      "Lui donner des médicaments de la trousse",
      "La mettre au repos dans la position où elle se sent le mieux",
      "La faire courir pour activer le sang"
    ],
    "c": 2,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q251 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Fièvre, toux, bouton sur la peau",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Brûlure d'estomac, hoquet, crampe"
    ],
    "c": 0,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q252 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Debout en marchant",
      "Position semi-assise (ou position de confort choisie)",
      "Tête en bas et pieds en l'air",
      "Plat ventre"
    ],
    "c": 1,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q253 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une crise d'asthme",
      "Un coup de soleil",
      "Une entorse de cheville",
      "Une hypoglycémie"
    ],
    "c": 3,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q254 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "Rien du tout",
      "Un plat gras",
      "De l'eau salée"
    ],
    "c": 0,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q255 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Rincer 10 secondes",
      "Appliquer de la glace pilée pendant 1 heure",
      "Mettre du beurre ou de l'huile"
    ],
    "c": 0,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q256 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Appliquer du vinaigre",
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Frotter fort avec une brosse",
      "Mettre un pansement sec immédiatement sans rincer"
    ],
    "c": 1,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q257 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Tourner le corps étranger dans la plaie",
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Pousser le corps étranger plus profondément",
      "Le retirer immédiatement en tirant fort"
    ],
    "c": 1,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q258 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Mettre un oreiller lourd sous le cou",
      "Pose directe du collier cervical sans tenir la tête",
      "Maintien de la tête à deux mains en position neutre",
      "Tourner la tête à gauche et à droite"
    ],
    "c": 2,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q259 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Oui, s'il est serré au maximum",
      "Non, il ne sert qu'à réchauffer le cou",
      "Oui, il bloque totalement 100% des mouvements"
    ],
    "c": 0,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q260 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "1 à 2 litres par minute",
      "10 à 15 litres par minute",
      "25 à 30 litres par minute",
      "3 à 5 litres par minute"
    ],
    "c": 1,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q261 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Frapper la bouteille avec un marteau",
      "Approcher une flamme pour tester la sortie",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Huiler le filetage de la bouteille"
    ],
    "c": 2,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q262 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Poser un collier cervical",
      "Prendre la température",
      "Arrêter une hémorragie externe grave",
      "Mettre en PLS"
    ],
    "c": 2,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q263 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Appliquer une compression directe sur la plaie",
      "Mettre les jambes en l'air",
      "Poser de la glace",
      "Donner à boire"
    ],
    "c": 0,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q264 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour un saignement du nez",
      "Pour une écorchure du genou",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour toute plaie simple du bras"
    ],
    "c": 2,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q265 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Sur la plaie directement",
      "Sur l'articulation la plus proche",
      "En dessous de la plaie",
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation"
    ],
    "c": 3,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q266 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Le recouvrir d'un pansement étanche pour le cacher",
      "L'enlever dès que le saignement s'arrête",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "Le desserrer toutes les 5 minutes"
    ],
    "c": 2,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q267 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "50 compressions pour 5 insufflations",
      "5 compressions pour 1 insufflation",
      "30 compressions pour 2 insufflations",
      "15 compressions pour 2 insufflations"
    ],
    "c": 2,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q268 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "80 à 100 compressions par minute",
      "100 à 120 compressions par minute",
      "130 à 150 compressions par minute",
      "60 à 80 compressions par minute"
    ],
    "c": 1,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q269 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "8 à 10 cm",
      "3 à 4 cm",
      "1 à 2 cm",
      "5 à 6 cm"
    ],
    "c": 3,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q270 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Faire du bouche-à-bouche",
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Continuer les compressions thoraciques",
      "Secouer la victime"
    ],
    "c": 1,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q271 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Les deux sur la poitrine à gauche",
      "Sur les deux cuisses",
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Sur le ventre et dans le dos"
    ],
    "c": 2,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q272 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Poser les électrodes directement sur la peau mouillée",
      "Attendre que la victime séche seule pendant 20 minutes",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Mettre de l'alcool sur la poitrine"
    ],
    "c": 2,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q273 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime tousse vigoureusement et parle",
      "La victime a une voix rauque mais répond aux questions",
      "La victime ronfle bruyamment en dormant"
    ],
    "c": 0,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q274 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Pratiquer la méthode d'Heimlich directement",
      "Allonger la victime sur le dos",
      "Donner un verre d'eau",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates"
    ],
    "c": 3,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q275 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Insufler de l'air de force",
      "Effectuer un balayage de la bouche avec le doigt",
      "Mettre en PLS"
    ],
    "c": 0,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q276 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Continuer la méthode de Heimlich au sol",
      "Mettre la victime debout",
      "Attendre 5 minutes"
    ],
    "c": 0,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q277 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions thoraciques au centre du sternum",
      "Des compressions sur les cuisses",
      "Des tapotements sur les joues",
      "L'immersion dans l'eau"
    ],
    "c": 0,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q278 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Anxiété",
      "Aphasique",
      "Alert (Alerte / Éveillé)",
      "Arrêt cardiaque"
    ],
    "c": 2,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q279 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vision",
      "Vertige",
      "Vascularisé",
      "Verbal (Répond à la stimulation verbale)"
    ],
    "c": 3,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q280 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pain (Réagit uniquement à la douleur)",
      "Paralysie",
      "Pupille",
      "Pouls"
    ],
    "c": 0,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q281 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urgente",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Unilateral",
      "Urinaire"
    ],
    "c": 1,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q282 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Asymétriques et immobiles",
      "De couleurs différentes",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "Dilatées en permanence (mydriase)"
    ],
    "c": 2,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q283 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement noir en nappe",
      "Un saignement rosé très lent",
      "Un saignement incolore",
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques"
    ],
    "c": 3,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q284 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours",
      "1 minute exacte",
      "10 secondes",
      "30 secondes puis lâcher"
    ],
    "c": 0,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q285 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Mettre de l'alcool pur",
      "Pansement sec très serré en appuyant fort",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Repousser les intestins à l'intérieur avant de panser"
    ],
    "c": 2,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q286 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Mettre la victime à plat ventre",
      "Injecter de l'eau dans la plaie",
      "Appuyer fort pour fermer le poumon",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)"
    ],
    "c": 3,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q287 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime consciente avec fracture du bras",
      "Victime en malaise hypoglycémique conscient",
      "Victime inconsciente qui respire normalement",
      "Victime en arrêt cardiaque"
    ],
    "c": 2,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q288 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour l'empêcher de s'enfuir",
      "Pour faire baisser la tension artérielle",
      "Pour accélérer le pouls",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures"
    ],
    "c": 3,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q289 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "En position assise",
      "Sur le côté droit",
      "Sur le côté gauche (décubitus latéral gauche)",
      "Sur le ventre"
    ],
    "c": 2,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q290 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La mettre debout",
      "La plier en deux",
      "Ne jamais la tourner même si elle vomit",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire"
    ],
    "c": 3,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q291 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "La faire courir pour activer le sang",
      "Lui donner des médicaments de la trousse",
      "La mettre au repos dans la position où elle se sent le mieux",
      "Lui faire boire un grand verre d'alcool"
    ],
    "c": 2,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q292 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Fièvre, toux, bouton sur la peau",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Brûlure d'estomac, hoquet, crampe"
    ],
    "c": 0,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q293 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Plat ventre",
      "Debout en marchant",
      "Position semi-assise (ou position de confort choisie)",
      "Tête en bas et pieds en l'air"
    ],
    "c": 2,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q294 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Un coup de soleil",
      "Une crise d'asthme",
      "Une hypoglycémie",
      "Une entorse de cheville"
    ],
    "c": 2,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q295 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "De l'eau salée",
      "Un plat gras",
      "Rien du tout",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)"
    ],
    "c": 3,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q296 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Rincer 10 secondes",
      "Appliquer de la glace pilée pendant 1 heure",
      "Mettre du beurre ou de l'huile"
    ],
    "c": 0,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q297 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Appliquer du vinaigre",
      "Mettre un pansement sec immédiatement sans rincer",
      "Frotter fort avec une brosse"
    ],
    "c": 0,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q298 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Pousser le corps étranger plus profondément",
      "Le retirer immédiatement en tirant fort",
      "Tourner le corps étranger dans la plaie"
    ],
    "c": 0,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q299 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Tourner la tête à gauche et à droite",
      "Mettre un oreiller lourd sous le cou",
      "Pose directe du collier cervical sans tenir la tête",
      "Maintien de la tête à deux mains en position neutre"
    ],
    "c": 3,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q300 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Oui, s'il est serré au maximum",
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Oui, il bloque totalement 100% des mouvements",
      "Non, il ne sert qu'à réchauffer le cou"
    ],
    "c": 1,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q301 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "1 à 2 litres par minute",
      "3 à 5 litres par minute",
      "10 à 15 litres par minute",
      "25 à 30 litres par minute"
    ],
    "c": 2,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q302 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Huiler le filetage de la bouteille",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Approcher une flamme pour tester la sortie",
      "Frapper la bouteille avec un marteau"
    ],
    "c": 1,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q303 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Poser un collier cervical",
      "Prendre la température",
      "Mettre en PLS",
      "Arrêter une hémorragie externe grave"
    ],
    "c": 3,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q304 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Appliquer une compression directe sur la plaie",
      "Mettre les jambes en l'air",
      "Donner à boire",
      "Poser de la glace"
    ],
    "c": 0,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q305 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour toute plaie simple du bras",
      "Pour un saignement du nez",
      "Pour une écorchure du genou",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible"
    ],
    "c": 3,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q306 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "Sur la plaie directement",
      "Sur l'articulation la plus proche",
      "En dessous de la plaie"
    ],
    "c": 0,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q307 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Le desserrer toutes les 5 minutes",
      "L'enlever dès que le saignement s'arrête",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "Le recouvrir d'un pansement étanche pour le cacher"
    ],
    "c": 2,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q308 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "5 compressions pour 1 insufflation",
      "50 compressions pour 5 insufflations",
      "30 compressions pour 2 insufflations",
      "15 compressions pour 2 insufflations"
    ],
    "c": 2,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q309 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "130 à 150 compressions par minute",
      "80 à 100 compressions par minute",
      "100 à 120 compressions par minute",
      "60 à 80 compressions par minute"
    ],
    "c": 2,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q310 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "8 à 10 cm",
      "5 à 6 cm",
      "1 à 2 cm",
      "3 à 4 cm"
    ],
    "c": 1,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q311 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Faire du bouche-à-bouche",
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Secouer la victime",
      "Continuer les compressions thoraciques"
    ],
    "c": 1,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q312 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Sur les deux cuisses",
      "Les deux sur la poitrine à gauche",
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Sur le ventre et dans le dos"
    ],
    "c": 2,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q313 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Mettre de l'alcool sur la poitrine",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Poser les électrodes directement sur la peau mouillée",
      "Attendre que la victime séche seule pendant 20 minutes"
    ],
    "c": 1,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q314 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime a une voix rauque mais répond aux questions",
      "La victime ronfle bruyamment en dormant",
      "La victime tousse vigoureusement et parle"
    ],
    "c": 0,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q315 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Donner un verre d'eau",
      "Allonger la victime sur le dos",
      "Pratiquer la méthode d'Heimlich directement"
    ],
    "c": 0,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q316 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Effectuer un balayage de la bouche avec le doigt",
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Mettre en PLS",
      "Insufler de l'air de force"
    ],
    "c": 1,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q317 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Attendre 5 minutes",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Continuer la méthode de Heimlich au sol",
      "Mettre la victime debout"
    ],
    "c": 1,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q318 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions sur les cuisses",
      "Des tapotements sur les joues",
      "L'immersion dans l'eau",
      "Des compressions thoraciques au centre du sternum"
    ],
    "c": 3,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q319 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Alert (Alerte / Éveillé)",
      "Aphasique",
      "Anxiété",
      "Arrêt cardiaque"
    ],
    "c": 0,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q320 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vision",
      "Vertige",
      "Vascularisé",
      "Verbal (Répond à la stimulation verbale)"
    ],
    "c": 3,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q321 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pain (Réagit uniquement à la douleur)",
      "Pouls",
      "Paralysie",
      "Pupille"
    ],
    "c": 0,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q322 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urinaire",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Unilateral",
      "Urgente"
    ],
    "c": 1,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q323 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Dilatées en permanence (mydriase)",
      "Asymétriques et immobiles",
      "De couleurs différentes",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)"
    ],
    "c": 3,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q324 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement rosé très lent",
      "Un saignement noir en nappe",
      "Un saignement incolore",
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques"
    ],
    "c": 3,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q325 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours",
      "10 secondes",
      "1 minute exacte",
      "30 secondes puis lâcher"
    ],
    "c": 0,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q326 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Repousser les intestins à l'intérieur avant de panser",
      "Pansement sec très serré en appuyant fort",
      "Mettre de l'alcool pur",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères"
    ],
    "c": 3,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q327 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)",
      "Injecter de l'eau dans la plaie",
      "Appuyer fort pour fermer le poumon",
      "Mettre la victime à plat ventre"
    ],
    "c": 0,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q328 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime inconsciente qui respire normalement",
      "Victime en arrêt cardiaque",
      "Victime consciente avec fracture du bras",
      "Victime en malaise hypoglycémique conscient"
    ],
    "c": 0,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q329 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour l'empêcher de s'enfuir",
      "Pour accélérer le pouls",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures",
      "Pour faire baisser la tension artérielle"
    ],
    "c": 2,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q330 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le ventre",
      "Sur le côté droit",
      "En position assise",
      "Sur le côté gauche (décubitus latéral gauche)"
    ],
    "c": 3,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q331 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La plier en deux",
      "Ne jamais la tourner même si elle vomit",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "La mettre debout"
    ],
    "c": 2,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q332 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "La mettre au repos dans la position où elle se sent le mieux",
      "La faire courir pour activer le sang",
      "Lui donner des médicaments de la trousse",
      "Lui faire boire un grand verre d'alcool"
    ],
    "c": 0,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q333 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Brûlure d'estomac, hoquet, crampe",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Fièvre, toux, bouton sur la peau"
    ],
    "c": 0,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q334 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Position semi-assise (ou position de confort choisie)",
      "Debout en marchant",
      "Plat ventre",
      "Tête en bas et pieds en l'air"
    ],
    "c": 0,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q335 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une crise d'asthme",
      "Une entorse de cheville",
      "Une hypoglycémie",
      "Un coup de soleil"
    ],
    "c": 2,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q336 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "De l'eau salée",
      "Rien du tout",
      "Un plat gras",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)"
    ],
    "c": 3,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q337 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Mettre du beurre ou de l'huile",
      "Rincer 10 secondes",
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Appliquer de la glace pilée pendant 1 heure"
    ],
    "c": 2,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q338 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Frotter fort avec une brosse",
      "Appliquer du vinaigre",
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Mettre un pansement sec immédiatement sans rincer"
    ],
    "c": 2,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q339 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Pousser le corps étranger plus profondément",
      "Le retirer immédiatement en tirant fort",
      "Tourner le corps étranger dans la plaie",
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place"
    ],
    "c": 3,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q340 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Pose directe du collier cervical sans tenir la tête",
      "Maintien de la tête à deux mains en position neutre",
      "Mettre un oreiller lourd sous le cou",
      "Tourner la tête à gauche et à droite"
    ],
    "c": 1,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q341 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Non, il ne sert qu'à réchauffer le cou",
      "Oui, s'il est serré au maximum",
      "Oui, il bloque totalement 100% des mouvements"
    ],
    "c": 0,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q342 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "25 à 30 litres par minute",
      "1 à 2 litres par minute",
      "10 à 15 litres par minute",
      "3 à 5 litres par minute"
    ],
    "c": 2,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q343 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Approcher une flamme pour tester la sortie",
      "Huiler le filetage de la bouteille",
      "Frapper la bouteille avec un marteau",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre"
    ],
    "c": 3,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q344 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Prendre la température",
      "Mettre en PLS",
      "Arrêter une hémorragie externe grave",
      "Poser un collier cervical"
    ],
    "c": 2,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q345 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Appliquer une compression directe sur la plaie",
      "Donner à boire",
      "Poser de la glace",
      "Mettre les jambes en l'air"
    ],
    "c": 0,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q346 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour une écorchure du genou",
      "Pour un saignement du nez",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour toute plaie simple du bras"
    ],
    "c": 2,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q347 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Sur l'articulation la plus proche",
      "En dessous de la plaie",
      "Sur la plaie directement",
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation"
    ],
    "c": 3,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q348 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "L'enlever dès que le saignement s'arrête",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "Le desserrer toutes les 5 minutes",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot"
    ],
    "c": 3,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q349 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "15 compressions pour 2 insufflations",
      "5 compressions pour 1 insufflation",
      "50 compressions pour 5 insufflations",
      "30 compressions pour 2 insufflations"
    ],
    "c": 3,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q350 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "130 à 150 compressions par minute",
      "100 à 120 compressions par minute",
      "80 à 100 compressions par minute",
      "60 à 80 compressions par minute"
    ],
    "c": 1,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q351 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "5 à 6 cm",
      "8 à 10 cm",
      "3 à 4 cm",
      "1 à 2 cm"
    ],
    "c": 0,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q352 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Continuer les compressions thoraciques",
      "Faire du bouche-à-bouche",
      "Secouer la victime",
      "S'écarter et veiller à ce que personne ne touche la victime"
    ],
    "c": 3,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q353 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Les deux sur la poitrine à gauche",
      "Sur le ventre et dans le dos",
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Sur les deux cuisses"
    ],
    "c": 2,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q354 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Attendre que la victime séche seule pendant 20 minutes",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Mettre de l'alcool sur la poitrine",
      "Poser les électrodes directement sur la peau mouillée"
    ],
    "c": 1,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q355 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime a une voix rauque mais répond aux questions",
      "La victime ronfle bruyamment en dormant",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime tousse vigoureusement et parle"
    ],
    "c": 2,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q356 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Donner un verre d'eau",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Allonger la victime sur le dos",
      "Pratiquer la méthode d'Heimlich directement"
    ],
    "c": 1,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q357 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Mettre en PLS",
      "Effectuer un balayage de la bouche avec le doigt",
      "Insufler de l'air de force",
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)"
    ],
    "c": 3,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q358 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Attendre 5 minutes",
      "Mettre la victime debout",
      "Continuer la méthode de Heimlich au sol"
    ],
    "c": 0,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q359 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions thoraciques au centre du sternum",
      "L'immersion dans l'eau",
      "Des compressions sur les cuisses",
      "Des tapotements sur les joues"
    ],
    "c": 0,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q360 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Anxiété",
      "Alert (Alerte / Éveillé)",
      "Aphasique",
      "Arrêt cardiaque"
    ],
    "c": 1,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q361 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vascularisé",
      "Vision",
      "Vertige",
      "Verbal (Répond à la stimulation verbale)"
    ],
    "c": 3,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q362 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Paralysie",
      "Pain (Réagit uniquement à la douleur)",
      "Pupille",
      "Pouls"
    ],
    "c": 1,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q363 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Urinaire",
      "Urgente",
      "Unilateral"
    ],
    "c": 0,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q364 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Dilatées en permanence (mydriase)",
      "Asymétriques et immobiles",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "De couleurs différentes"
    ],
    "c": 2,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q365 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement noir en nappe",
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement incolore",
      "Un saignement rosé très lent"
    ],
    "c": 1,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q366 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "1 minute exacte",
      "30 secondes puis lâcher",
      "10 secondes",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours"
    ],
    "c": 3,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q367 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Pansement sec très serré en appuyant fort",
      "Repousser les intestins à l'intérieur avant de panser",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Mettre de l'alcool pur"
    ],
    "c": 2,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q368 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Appuyer fort pour fermer le poumon",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)",
      "Injecter de l'eau dans la plaie",
      "Mettre la victime à plat ventre"
    ],
    "c": 1,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q369 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime inconsciente qui respire normalement",
      "Victime consciente avec fracture du bras",
      "Victime en malaise hypoglycémique conscient",
      "Victime en arrêt cardiaque"
    ],
    "c": 0,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q370 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour faire baisser la tension artérielle",
      "Pour accélérer le pouls",
      "Pour l'empêcher de s'enfuir",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures"
    ],
    "c": 3,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q371 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "En position assise",
      "Sur le ventre",
      "Sur le côté gauche (décubitus latéral gauche)",
      "Sur le côté droit"
    ],
    "c": 2,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q372 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La plier en deux",
      "Ne jamais la tourner même si elle vomit",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "La mettre debout"
    ],
    "c": 2,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q373 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "La mettre au repos dans la position où elle se sent le mieux",
      "Lui faire boire un grand verre d'alcool",
      "Lui donner des médicaments de la trousse",
      "La faire courir pour activer le sang"
    ],
    "c": 0,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q374 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Fièvre, toux, bouton sur la peau",
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Brûlure d'estomac, hoquet, crampe"
    ],
    "c": 1,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q375 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Tête en bas et pieds en l'air",
      "Position semi-assise (ou position de confort choisie)",
      "Debout en marchant",
      "Plat ventre"
    ],
    "c": 1,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q376 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une entorse de cheville",
      "Un coup de soleil",
      "Une hypoglycémie",
      "Une crise d'asthme"
    ],
    "c": 2,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q377 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "Rien du tout",
      "Un plat gras",
      "De l'eau salée",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)"
    ],
    "c": 3,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q378 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Mettre du beurre ou de l'huile",
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Appliquer de la glace pilée pendant 1 heure",
      "Rincer 10 secondes"
    ],
    "c": 1,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q379 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Mettre un pansement sec immédiatement sans rincer",
      "Frotter fort avec une brosse",
      "Appliquer du vinaigre"
    ],
    "c": 0,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q380 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Le retirer immédiatement en tirant fort",
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Pousser le corps étranger plus profondément",
      "Tourner le corps étranger dans la plaie"
    ],
    "c": 1,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q381 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Tourner la tête à gauche et à droite",
      "Maintien de la tête à deux mains en position neutre",
      "Pose directe du collier cervical sans tenir la tête",
      "Mettre un oreiller lourd sous le cou"
    ],
    "c": 1,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q382 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Oui, s'il est serré au maximum",
      "Non, il ne sert qu'à réchauffer le cou",
      "Oui, il bloque totalement 100% des mouvements"
    ],
    "c": 0,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q383 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "1 à 2 litres par minute",
      "3 à 5 litres par minute",
      "10 à 15 litres par minute",
      "25 à 30 litres par minute"
    ],
    "c": 2,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q384 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Huiler le filetage de la bouteille",
      "Frapper la bouteille avec un marteau",
      "Approcher une flamme pour tester la sortie",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre"
    ],
    "c": 3,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q385 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Prendre la température",
      "Mettre en PLS",
      "Poser un collier cervical",
      "Arrêter une hémorragie externe grave"
    ],
    "c": 3,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q386 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Poser de la glace",
      "Appliquer une compression directe sur la plaie",
      "Donner à boire",
      "Mettre les jambes en l'air"
    ],
    "c": 1,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q387 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour toute plaie simple du bras",
      "Pour une écorchure du genou",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour un saignement du nez"
    ],
    "c": 2,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q388 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Sur l'articulation la plus proche",
      "Sur la plaie directement",
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "En dessous de la plaie"
    ],
    "c": 2,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q389 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Le recouvrir d'un pansement étanche pour le cacher",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "L'enlever dès que le saignement s'arrête",
      "Le desserrer toutes les 5 minutes"
    ],
    "c": 1,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q390 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "30 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations",
      "5 compressions pour 1 insufflation",
      "15 compressions pour 2 insufflations"
    ],
    "c": 0,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q391 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "80 à 100 compressions par minute",
      "130 à 150 compressions par minute",
      "100 à 120 compressions par minute",
      "60 à 80 compressions par minute"
    ],
    "c": 2,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q392 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "5 à 6 cm",
      "8 à 10 cm",
      "1 à 2 cm",
      "3 à 4 cm"
    ],
    "c": 0,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q393 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Faire du bouche-à-bouche",
      "Secouer la victime",
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Continuer les compressions thoraciques"
    ],
    "c": 2,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q394 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Sur les deux cuisses",
      "Les deux sur la poitrine à gauche",
      "Sur le ventre et dans le dos"
    ],
    "c": 0,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q395 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Poser les électrodes directement sur la peau mouillée",
      "Mettre de l'alcool sur la poitrine",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Attendre que la victime séche seule pendant 20 minutes"
    ],
    "c": 2,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q396 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime tousse vigoureusement et parle",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime a une voix rauque mais répond aux questions",
      "La victime ronfle bruyamment en dormant"
    ],
    "c": 1,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q397 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Donner un verre d'eau",
      "Pratiquer la méthode d'Heimlich directement",
      "Allonger la victime sur le dos",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates"
    ],
    "c": 3,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q398 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Effectuer un balayage de la bouche avec le doigt",
      "Insufler de l'air de force",
      "Mettre en PLS"
    ],
    "c": 0,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q399 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Continuer la méthode de Heimlich au sol",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Mettre la victime debout",
      "Attendre 5 minutes"
    ],
    "c": 1,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q400 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions sur les cuisses",
      "L'immersion dans l'eau",
      "Des compressions thoraciques au centre du sternum",
      "Des tapotements sur les joues"
    ],
    "c": 2,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q401 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Anxiété",
      "Arrêt cardiaque",
      "Alert (Alerte / Éveillé)",
      "Aphasique"
    ],
    "c": 2,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q402 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vascularisé",
      "Vertige",
      "Verbal (Répond à la stimulation verbale)",
      "Vision"
    ],
    "c": 2,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q403 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pupille",
      "Pouls",
      "Pain (Réagit uniquement à la douleur)",
      "Paralysie"
    ],
    "c": 2,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q404 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Unilateral",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Urinaire",
      "Urgente"
    ],
    "c": 1,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q405 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "De couleurs différentes",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "Dilatées en permanence (mydriase)",
      "Asymétriques et immobiles"
    ],
    "c": 1,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q406 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement incolore",
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement rosé très lent",
      "Un saignement noir en nappe"
    ],
    "c": 1,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q407 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "1 minute exacte",
      "30 secondes puis lâcher",
      "10 secondes",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours"
    ],
    "c": 3,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q408 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Mettre de l'alcool pur",
      "Repousser les intestins à l'intérieur avant de panser",
      "Pansement sec très serré en appuyant fort"
    ],
    "c": 0,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q409 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Injecter de l'eau dans la plaie",
      "Appuyer fort pour fermer le poumon",
      "Mettre la victime à plat ventre",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)"
    ],
    "c": 3,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q410 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime inconsciente qui respire normalement",
      "Victime en arrêt cardiaque",
      "Victime consciente avec fracture du bras",
      "Victime en malaise hypoglycémique conscient"
    ],
    "c": 0,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q411 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour l'empêcher de s'enfuir",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures",
      "Pour accélérer le pouls",
      "Pour faire baisser la tension artérielle"
    ],
    "c": 1,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q412 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le ventre",
      "Sur le côté droit",
      "Sur le côté gauche (décubitus latéral gauche)",
      "En position assise"
    ],
    "c": 2,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q413 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La mettre debout",
      "La plier en deux",
      "Ne jamais la tourner même si elle vomit",
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire"
    ],
    "c": 3,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q414 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "La faire courir pour activer le sang",
      "La mettre au repos dans la position où elle se sent le mieux",
      "Lui faire boire un grand verre d'alcool",
      "Lui donner des médicaments de la trousse"
    ],
    "c": 1,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q415 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Brûlure d'estomac, hoquet, crampe",
      "Fièvre, toux, bouton sur la peau",
      "Douleur au genou, envie de vomir, vision floue des deux yeux"
    ],
    "c": 0,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q416 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Debout en marchant",
      "Plat ventre",
      "Position semi-assise (ou position de confort choisie)",
      "Tête en bas et pieds en l'air"
    ],
    "c": 2,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q417 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une entorse de cheville",
      "Une hypoglycémie",
      "Un coup de soleil",
      "Une crise d'asthme"
    ],
    "c": 1,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q418 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "Un plat gras",
      "Rien du tout",
      "De l'eau salée"
    ],
    "c": 0,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q419 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Rincer 10 secondes",
      "Appliquer de la glace pilée pendant 1 heure",
      "Mettre du beurre ou de l'huile",
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes"
    ],
    "c": 3,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q420 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Mettre un pansement sec immédiatement sans rincer",
      "Frotter fort avec une brosse",
      "Appliquer du vinaigre"
    ],
    "c": 0,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q421 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Le retirer immédiatement en tirant fort",
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Tourner le corps étranger dans la plaie",
      "Pousser le corps étranger plus profondément"
    ],
    "c": 1,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q422 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Pose directe du collier cervical sans tenir la tête",
      "Mettre un oreiller lourd sous le cou",
      "Tourner la tête à gauche et à droite",
      "Maintien de la tête à deux mains en position neutre"
    ],
    "c": 3,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q423 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Non, il ne sert qu'à réchauffer le cou",
      "Oui, s'il est serré au maximum",
      "Oui, il bloque totalement 100% des mouvements"
    ],
    "c": 0,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q424 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "1 à 2 litres par minute",
      "10 à 15 litres par minute",
      "25 à 30 litres par minute",
      "3 à 5 litres par minute"
    ],
    "c": 1,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q425 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Frapper la bouteille avec un marteau",
      "Approcher une flamme pour tester la sortie",
      "Huiler le filetage de la bouteille"
    ],
    "c": 0,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q426 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Mettre en PLS",
      "Poser un collier cervical",
      "Prendre la température",
      "Arrêter une hémorragie externe grave"
    ],
    "c": 3,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q427 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Donner à boire",
      "Appliquer une compression directe sur la plaie",
      "Mettre les jambes en l'air",
      "Poser de la glace"
    ],
    "c": 1,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q428 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "Pour une écorchure du genou",
      "Pour toute plaie simple du bras",
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour un saignement du nez"
    ],
    "c": 2,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q429 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "En dessous de la plaie",
      "Sur la plaie directement",
      "Sur l'articulation la plus proche"
    ],
    "c": 0,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q430 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot",
      "Le desserrer toutes les 5 minutes",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "L'enlever dès que le saignement s'arrête"
    ],
    "c": 0,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q431 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "5 compressions pour 1 insufflation",
      "15 compressions pour 2 insufflations",
      "30 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations"
    ],
    "c": 2,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q432 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "100 à 120 compressions par minute",
      "80 à 100 compressions par minute",
      "60 à 80 compressions par minute",
      "130 à 150 compressions par minute"
    ],
    "c": 0,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q433 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "1 à 2 cm",
      "8 à 10 cm",
      "5 à 6 cm",
      "3 à 4 cm"
    ],
    "c": 2,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q434 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Faire du bouche-à-bouche",
      "Continuer les compressions thoraciques",
      "Secouer la victime",
      "S'écarter et veiller à ce que personne ne touche la victime"
    ],
    "c": 3,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q435 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Sur les deux cuisses",
      "Les deux sur la poitrine à gauche",
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)",
      "Sur le ventre et dans le dos"
    ],
    "c": 2,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q436 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Mettre de l'alcool sur la poitrine",
      "Attendre que la victime séche seule pendant 20 minutes",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Poser les électrodes directement sur la peau mouillée"
    ],
    "c": 2,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q437 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime ronfle bruyamment en dormant",
      "La victime tousse vigoureusement et parle",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge",
      "La victime a une voix rauque mais répond aux questions"
    ],
    "c": 2,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q438 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Allonger la victime sur le dos",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Pratiquer la méthode d'Heimlich directement",
      "Donner un verre d'eau"
    ],
    "c": 1,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q439 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Effectuer un balayage de la bouche avec le doigt",
      "Mettre en PLS",
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)",
      "Insufler de l'air de force"
    ],
    "c": 2,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q440 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Attendre 5 minutes",
      "Mettre la victime debout",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Continuer la méthode de Heimlich au sol"
    ],
    "c": 2,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q441 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions thoraciques au centre du sternum",
      "L'immersion dans l'eau",
      "Des tapotements sur les joues",
      "Des compressions sur les cuisses"
    ],
    "c": 0,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q442 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Alert (Alerte / Éveillé)",
      "Aphasique",
      "Anxiété",
      "Arrêt cardiaque"
    ],
    "c": 0,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q443 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vertige",
      "Verbal (Répond à la stimulation verbale)",
      "Vision",
      "Vascularisé"
    ],
    "c": 1,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q444 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pouls",
      "Paralysie",
      "Pain (Réagit uniquement à la douleur)",
      "Pupille"
    ],
    "c": 2,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q445 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urinaire",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Unilateral",
      "Urgente"
    ],
    "c": 1,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q446 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Dilatées en permanence (mydriase)",
      "De couleurs différentes",
      "Asymétriques et immobiles",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)"
    ],
    "c": 3,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q447 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement rosé très lent",
      "Un saignement noir en nappe",
      "Un saignement incolore"
    ],
    "c": 0,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q448 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "30 secondes puis lâcher",
      "1 minute exacte",
      "10 secondes",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours"
    ],
    "c": 3,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q449 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Repousser les intestins à l'intérieur avant de panser",
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Pansement sec très serré en appuyant fort",
      "Mettre de l'alcool pur"
    ],
    "c": 1,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q450 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Mettre la victime à plat ventre",
      "Injecter de l'eau dans la plaie",
      "Appuyer fort pour fermer le poumon",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)"
    ],
    "c": 3,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q451 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime inconsciente qui respire normalement",
      "Victime en arrêt cardiaque",
      "Victime en malaise hypoglycémique conscient",
      "Victime consciente avec fracture du bras"
    ],
    "c": 0,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q452 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures",
      "Pour accélérer le pouls",
      "Pour faire baisser la tension artérielle",
      "Pour l'empêcher de s'enfuir"
    ],
    "c": 0,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q453 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "Sur le côté gauche (décubitus latéral gauche)",
      "En position assise",
      "Sur le côté droit",
      "Sur le ventre"
    ],
    "c": 0,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q454 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "La mettre debout",
      "Ne jamais la tourner même si elle vomit",
      "La plier en deux"
    ],
    "c": 0,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q455 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "Lui faire boire un grand verre d'alcool",
      "La faire courir pour activer le sang",
      "La mettre au repos dans la position où elle se sent le mieux",
      "Lui donner des médicaments de la trousse"
    ],
    "c": 2,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q456 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Fièvre, toux, bouton sur la peau",
      "Brûlure d'estomac, hoquet, crampe",
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Douleur au genou, envie de vomir, vision floue des deux yeux"
    ],
    "c": 2,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q457 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Position semi-assise (ou position de confort choisie)",
      "Debout en marchant",
      "Tête en bas et pieds en l'air",
      "Plat ventre"
    ],
    "c": 0,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q458 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une entorse de cheville",
      "Une crise d'asthme",
      "Une hypoglycémie",
      "Un coup de soleil"
    ],
    "c": 2,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q459 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "De l'eau salée",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "Rien du tout",
      "Un plat gras"
    ],
    "c": 1,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q460 : Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?",
    "opts": [
      "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes",
      "Appliquer de la glace pilée pendant 1 heure",
      "Rincer 10 secondes",
      "Mettre du beurre ou de l'huile"
    ],
    "c": 0,
    "e": "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q461 : En cas de brûlure chimique cutanée par acide ou base, que fait-on ?",
    "opts": [
      "Appliquer du vinaigre",
      "Mettre un pansement sec immédiatement sans rincer",
      "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés",
      "Frotter fort avec une brosse"
    ],
    "c": 2,
    "e": "Le rinçage à grande eau dilue et élimine le produit chimique."
  },
  {
    "cat": "Traumatismes & Brûlures",
    "q": "[Traumatismes & Brûlures] Q462 : Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?",
    "opts": [
      "Pousser le corps étranger plus profondément",
      "Ne JAMAIS retirer le corps étranger et l'immobiliser en place",
      "Le retirer immédiatement en tirant fort",
      "Tourner le corps étranger dans la plaie"
    ],
    "c": 1,
    "e": "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q463 : Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?",
    "opts": [
      "Mettre un oreiller lourd sous le cou",
      "Maintien de la tête à deux mains en position neutre",
      "Pose directe du collier cervical sans tenir la tête",
      "Tourner la tête à gauche et à droite"
    ],
    "c": 1,
    "e": "Le maintien manuel de la tête en position neutre est le geste initial indispensable."
  },
  {
    "cat": "Traumatisme Rachis & Immobilisation",
    "q": "[Traumatisme Rachis & Immobilisation] Q464 : Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?",
    "opts": [
      "Non, il limite les mouvements mais le maintien manuel reste nécessaire",
      "Oui, il bloque totalement 100% des mouvements",
      "Oui, s'il est serré au maximum",
      "Non, il ne sert qu'à réchauffer le cou"
    ],
    "c": 0,
    "e": "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q465 : Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?",
    "opts": [
      "1 à 2 litres par minute",
      "10 à 15 litres par minute",
      "25 à 30 litres par minute",
      "3 à 5 litres par minute"
    ],
    "c": 1,
    "e": "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."
  },
  {
    "cat": "Matériel & Oxygénothérapie",
    "q": "[Matériel & Oxygénothérapie] Q466 : Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?",
    "opts": [
      "Frapper la bouteille avec un marteau",
      "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre",
      "Huiler le filetage de la bouteille",
      "Approcher une flamme pour tester la sortie"
    ],
    "c": 1,
    "e": "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée)."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q467 : Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?",
    "opts": [
      "Prendre la température",
      "Mettre en PLS",
      "Poser un collier cervical",
      "Arrêter une hémorragie externe grave"
    ],
    "c": 3,
    "e": "L'hémorragie externe peut tuer en quelques minutes."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q468 : Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?",
    "opts": [
      "Mettre les jambes en l'air",
      "Poser de la glace",
      "Donner à boire",
      "Appliquer une compression directe sur la plaie"
    ],
    "c": 3,
    "e": "La compression directe est le geste immédiat de choix."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q469 : Quand le secouriste doit-il poser un garrot d'emblée ?",
    "opts": [
      "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible",
      "Pour un saignement du nez",
      "Pour toute plaie simple du bras",
      "Pour une écorchure du genou"
    ],
    "c": 0,
    "e": "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q470 : À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?",
    "opts": [
      "Sur la plaie directement",
      "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation",
      "En dessous de la plaie",
      "Sur l'articulation la plus proche"
    ],
    "c": 1,
    "e": "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."
  },
  {
    "cat": "Urgences Vitales",
    "q": "[Urgences Vitales] Q471 : Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?",
    "opts": [
      "L'enlever dès que le saignement s'arrête",
      "Le desserrer toutes les 5 minutes",
      "Le recouvrir d'un pansement étanche pour le cacher",
      "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot"
    ],
    "c": 3,
    "e": "Le garrot ne doit être retiré que par un médecin sous surveillance."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q472 : Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?",
    "opts": [
      "5 compressions pour 1 insufflation",
      "30 compressions pour 2 insufflations",
      "15 compressions pour 2 insufflations",
      "50 compressions pour 5 insufflations"
    ],
    "c": 1,
    "e": "30:2 est le rythme standard international chez l'adulte."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q473 : Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?",
    "opts": [
      "80 à 100 compressions par minute",
      "100 à 120 compressions par minute",
      "130 à 150 compressions par minute",
      "60 à 80 compressions par minute"
    ],
    "c": 1,
    "e": "Le rythme cible est de 100 à 120 compressions/min."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q474 : Quelle doit être la profondeur de compression du thorax chez un adulte ?",
    "opts": [
      "1 à 2 cm",
      "8 à 10 cm",
      "3 à 4 cm",
      "5 à 6 cm"
    ],
    "c": 3,
    "e": "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q475 : Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?",
    "opts": [
      "Secouer la victime",
      "S'écarter et veiller à ce que personne ne touche la victime",
      "Faire du bouche-à-bouche",
      "Continuer les compressions thoraciques"
    ],
    "c": 1,
    "e": "Toute mouvement ou contact peut fausser l'analyse de l'appareil."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q476 : Où se collent les électrodes du DAE chez l'adulte ?",
    "opts": [
      "Sur le ventre et dans le dos",
      "Sur les deux cuisses",
      "Les deux sur la poitrine à gauche",
      "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)"
    ],
    "c": 3,
    "e": "Position antéro-latérale standard pour englober le cœur dans le champ électrique."
  },
  {
    "cat": "RCP & DAE",
    "q": "[RCP & DAE] Q477 : Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?",
    "opts": [
      "Attendre que la victime séche seule pendant 20 minutes",
      "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau",
      "Mettre de l'alcool sur la poitrine",
      "Poser les électrodes directement sur la peau mouillée"
    ],
    "c": 1,
    "e": "L'eau conduit le courant et risque de dériver le choc électrique."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q478 : Quel est le signe caractéristique d'une OAVA TOTALE ?",
    "opts": [
      "La victime a une voix rauque mais répond aux questions",
      "La victime tousse vigoureusement et parle",
      "La victime ronfle bruyamment en dormant",
      "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge"
    ],
    "c": 3,
    "e": "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q479 : Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?",
    "opts": [
      "Pratiquer la méthode d'Heimlich directement",
      "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates",
      "Donner un verre d'eau",
      "Allonger la victime sur le dos"
    ],
    "c": 1,
    "e": "On commence toujours par 1 à 5 claques dans le dos."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q480 : Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?",
    "opts": [
      "Insufler de l'air de force",
      "Effectuer un balayage de la bouche avec le doigt",
      "Mettre en PLS",
      "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)"
    ],
    "c": 3,
    "e": "Les compressions abdominales succèdent aux claques dorsales inefficaces."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q481 : Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?",
    "opts": [
      "Attendre 5 minutes",
      "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques",
      "Mettre la victime debout",
      "Continuer la méthode de Heimlich au sol"
    ],
    "c": 1,
    "e": "Dès la perte de connaissance, on débute la RCP."
  },
  {
    "cat": "Obstruction des Voies Aériennes",
    "q": "[Obstruction des Voies Aériennes] Q482 : Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?",
    "opts": [
      "Des compressions thoraciques au centre du sternum",
      "Des compressions sur les cuisses",
      "Des tapotements sur les joues",
      "L'immersion dans l'eau"
    ],
    "c": 0,
    "e": "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q483 : Que signifie la lettre 'A' dans le score AVPU ?",
    "opts": [
      "Alert (Alerte / Éveillé)",
      "Aphasique",
      "Arrêt cardiaque",
      "Anxiété"
    ],
    "c": 0,
    "e": "A = Alert (la victime est éveillée et répond spontanément)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q484 : Que signifie la lettre 'V' dans le score AVPU ?",
    "opts": [
      "Vertige",
      "Vision",
      "Vascularisé",
      "Verbal (Répond à la stimulation verbale)"
    ],
    "c": 3,
    "e": "V = Verbal (réagit aux ordres ou questions verbales)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q485 : Que signifie la lettre 'P' dans le score AVPU ?",
    "opts": [
      "Pain (Réagit uniquement à la douleur)",
      "Pouls",
      "Pupille",
      "Paralysie"
    ],
    "c": 0,
    "e": "P = Pain (réagit seulement aux stimuli douloureux)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q486 : Que signifie la lettre 'U' dans le score AVPU ?",
    "opts": [
      "Urinaire",
      "Urgente",
      "Unresponsive (Abolition totale des réponses / Inconscient)",
      "Unilateral"
    ],
    "c": 2,
    "e": "U = Unresponsive (aucun stimulus ne fait réagir la victime)."
  },
  {
    "cat": "Évaluation Neurologique",
    "q": "[Évaluation Neurologique] Q487 : Comment doivent être les pupilles d'un sujet sain à la lumière ?",
    "opts": [
      "Asymétriques et immobiles",
      "Dilatées en permanence (mydriase)",
      "Égales, rondes et réactives à la lumière (myosis à la lumière)",
      "De couleurs différentes"
    ],
    "c": 2,
    "e": "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière)."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q488 : Comment se nomme un saignement d'origine artérielle ?",
    "opts": [
      "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques",
      "Un saignement noir en nappe",
      "Un saignement incolore",
      "Un saignement rosé très lent"
    ],
    "c": 0,
    "e": "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q489 : Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?",
    "opts": [
      "10 secondes",
      "30 secondes puis lâcher",
      "1 minute exacte",
      "Jusqu'au relais par un pansement compressif ou l'arrivée des secours"
    ],
    "c": 3,
    "e": "La compression doit être ininterrompue jusqu'au relais efficace."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q490 : Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?",
    "opts": [
      "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères",
      "Pansement sec très serré en appuyant fort",
      "Mettre de l'alcool pur",
      "Repousser les intestins à l'intérieur avant de panser"
    ],
    "c": 0,
    "e": "On protège les viscères sans jamais chercher à les réintégrer."
  },
  {
    "cat": "Hémorragie & Pansements",
    "q": "[Hémorragie & Pansements] Q491 : Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?",
    "opts": [
      "Appuyer fort pour fermer le poumon",
      "Injecter de l'eau dans la plaie",
      "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)",
      "Mettre la victime à plat ventre"
    ],
    "c": 2,
    "e": "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q492 : Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?",
    "opts": [
      "Victime consciente avec fracture du bras",
      "Victime en arrêt cardiaque",
      "Victime en malaise hypoglycémique conscient",
      "Victime inconsciente qui respire normalement"
    ],
    "c": 3,
    "e": "Toute victime inconsciente qui respire doit être placée en PLS."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q493 : Pourquoi met-on une victime en PLS ?",
    "opts": [
      "Pour faire baisser la tension artérielle",
      "Pour l'empêcher de s'enfuir",
      "Pour accélérer le pouls",
      "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures"
    ],
    "c": 3,
    "e": "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q494 : Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?",
    "opts": [
      "En position assise",
      "Sur le côté droit",
      "Sur le côté gauche (décubitus latéral gauche)",
      "Sur le ventre"
    ],
    "c": 2,
    "e": "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."
  },
  {
    "cat": "Position Latérale de Secours",
    "q": "[Position Latérale de Secours] Q495 : Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?",
    "opts": [
      "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire",
      "La plier en deux",
      "Ne jamais la tourner même si elle vomit",
      "La mettre debout"
    ],
    "c": 0,
    "e": "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q496 : Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?",
    "opts": [
      "Lui faire boire un grand verre d'alcool",
      "La mettre au repos dans la position où elle se sent le mieux",
      "Lui donner des médicaments de la trousse",
      "La faire courir pour activer le sang"
    ],
    "c": 1,
    "e": "Mise au repos immédiate dans la position de confort choisie par la victime."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q497 : Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?",
    "opts": [
      "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole",
      "Brûlure d'estomac, hoquet, crampe",
      "Douleur au genou, envie de vomir, vision floue des deux yeux",
      "Fièvre, toux, bouton sur la peau"
    ],
    "c": 0,
    "e": "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q498 : Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?",
    "opts": [
      "Tête en bas et pieds en l'air",
      "Position semi-assise (ou position de confort choisie)",
      "Debout en marchant",
      "Plat ventre"
    ],
    "c": 1,
    "e": "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q499 : Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?",
    "opts": [
      "Une entorse de cheville",
      "Un coup de soleil",
      "Une crise d'asthme",
      "Une hypoglycémie"
    ],
    "c": 3,
    "e": "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."
  },
  {
    "cat": "Malaises & Affections",
    "q": "[Malaises & Affections] Q500 : Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?",
    "opts": [
      "De l'eau salée",
      "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)",
      "Un plat gras",
      "Rien du tout"
    ],
    "c": 1,
    "e": "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler."
  }
];
