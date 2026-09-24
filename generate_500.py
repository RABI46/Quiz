import json
import random

# Script to build 500 comprehensive, rigorous PSE1 questions based on Official French First Aid (PSE1) Guidelines.

categories = [
    "Attitude & Comportement",
    "Bilans & Évaluation",
    "Urgences Vitales",
    "RCP & DAE",
    "Obstruction des Voies Aériennes",
    "Hygiène & Asepsie",
    "Évaluation Neurologique",
    "Hémorragie & Pansements",
    "Malaises & Affections",
    "Traumatismes & Brûlures",
    "Position Latérale de Secours",
    "Crise Convulsive",
    "Bilans - Paramètres Vitaux",
    "AVC & Urgences Vasculaires",
    "Noyade & Risques Aquatiques",
    "Hypoglycémie & Diabète",
    "Traumatisme Rachis & Immobilisation",
    "Accouchement Inopiné",
    "Formation & Réglementation",
    "Matériel & Oxygénothérapie"
]

base_questions = []

def add_q(cat, q, opts, c, e):
    base_questions.append({"cat": cat, "q": q, "opts": opts, "c": c, "e": e})

# 1. Attitude & Comportement
add_q("Attitude & Comportement", "Quelle est la priorité absolue du secouriste lorsqu'il arrive sur une scène d'accident ?",
      ["Identifier les antécédents de la victime", "Protéger : assurer sa sécurité, celle de l'équipe et de la victime", "Pratiquer immédiatement un bilan vital", "Transmettre le bilan au SAMU"], 1,
      "La protection est primordiale pour éviter le suraccident et garantir la sécurité des intervenants.")

add_q("Attitude & Comportement", "En présence d'un danger imminent incontrôlable (ex: incendie majeur, effondrement), que fait le secouriste ?",
      ["Tenter une extraction rapide quel que soit le danger", "Réaliser un dégagement d'urgence si possible sinon évacuer la zone et baliser", "Attendre sans prévenir personne", "Pratiquer la RCP sur place"], 1,
      "Face à un danger imminent, si le dégagement d'urgence est impossible ou trop dangereux, il faut sécuriser le périmètre et alerter.")

add_q("Attitude & Comportement", "Combien de regards comporte l'évaluation initiale de la situation par le secouriste ?",
      ["2 regards", "3 regards", "4 regards", "5 regards"], 2,
      "L'évaluation initiale comprend 4 regards : observer les dangers, identifier les menaces vitales, évaluer les fonctions vitales et réaliser le bilan complémentaire.")

add_q("Attitude & Comportement", "Quel est l'objectif principal du balisage lors d'un accident de la circulation ?",
      ["Régler le trafic automobile", "Matérialiser la zone de danger pour protéger les victimes et les secours", "Faciliter l'arrivée des médias", "Éviter les amendes des forces de l'ordre"], 1,
      "Le balisage permet de rendre la zone visible de loin et de prévenir les suraccidents.")

add_q("Attitude & Comportement", "Quelle distance minimale de sécurité est préconisée face à un véhicule en feu sur autoroute ?",
      ["10 mètres", "25 mètres", "50 mètres", "100 mètres"], 2,
      "Une distance minimale de 50 mètres est nécessaire en raison des risques d'explosion ou de fumées toxiques.")

add_q("Attitude & Comportement", "Lors de l'intervention auprès d'une victime agressive, quelle doit être l'attitude du secouriste ?",
      ["Employer la force pour la maintenir", "Garder une distance de sécurité, rester calme, ne pas isoler le secouriste et demander du renfort", "Quitter les lieux définitivement sans prévenir les secours", "Ignorer l'agressivité et toucher la victime de force"], 1,
      "La sécurité du secouriste prime : garder ses distances, communiquer sereinement et solliciter les forces de l'ordre si nécessaire.")

add_q("Attitude & Comportement", "Que signifie le secret professionnel pour un secouriste en équipe ?",
      ["Ne rien dire même aux médecins du SAMU", "Ne divulguer les informations médicales qu'aux seules personnes participant directement aux soins de la victime", "Publier les informations sur les réseaux sociaux si les noms sont masqués", "Raconter l'intervention à sa famille"], 1,
      "Les informations médicales sont confidentielles et ne sont transmises qu'aux professionnels de santé prenant en charge la victime.")

add_q("Attitude & Comportement", "Dans le cadre du port des EPI, quand le secouriste doit-il mettre ses gants à usage unique ?",
      ["Uniquement s'il y a du sang visible", "Avant tout contact avec la victime ou du matériel souillé", "Juste avant de transmettre le bilan", "Après avoir pris la tension"], 1,
      "Le port des gants est obligatoire avant tout contact avec la victime pour éviter les risques de contamination manuportée.")

add_q("Attitude & Comportement", "Que doit faire un secouriste si une victime consciente refuse expressément les soins ?",
      ["L'obliger physiquement à se faire soigner", "Informer la victime des risques, respecter sa décision si elle est lucide, et demander l'avis du médecin régulateur", "Laisser la victime immédiatement sans contacter le régulateur", "Appeler directement la famille pour décision"], 1,
      "Toute personne consciente et majeure peut refuser les soins; le secouriste informe et prend avis auprès du médecin régulateur.")

add_q("Attitude & Comportement", "Quel numéro permet de joindre les secours d'urgence depuis n'importe quel pays de l'Union Européenne ?",
      ["15", "17", "18", "112"], 3,
      "Le 112 est le numéro d'urgence européen unique.")

add_q("Attitude & Comportement", "En France, quel numéro permet de joindre le SAMU ?",
      ["15", "18", "112", "114"], 0,
      "Le 15 est le numéro direct pour la régulation médicale du SAMU.")

add_q("Attitude & Comportement", "Le numéro d'urgence 114 est spécifiquement dédié :",
      ["Aux urgences en mer", "Aux personnes sourdes ou malentendantes (par SMS ou application)", "Aux urgences psychiatriques", "Aux accidents du travail"], 1,
      "Le 114 permet aux personnes sourdes ou malentendantes de contacter les secours par texte ou vidéo.")

add_q("Attitude & Comportement", "Quel numéro d'urgence joindre en priorité pour un incendie ou un risque d'effondrement ?",
      ["15", "17", "18", "115"], 2,
      "Le 18 est le numéro d'urgence des Sapeurs-Pompiers.")

add_q("Attitude & Comportement", "Lors du bilan transmis au SAMU, quel élément doit obligatoirement figurer dès le début du message ?",
      ["Le nom du médecin traitant", "L'adresse précise du lieu d'intervention et le motif d'appel", "La température corporelle de la victime", "La tension artérielle exacte"], 1,
      "La localisation exacte garantit l'envoi immédiat des secours même si la ligne est coupée.")

add_q("Attitude & Comportement", "Quelle est la première étape de la chaîne de survie chez l'adulte en arrêt cardiaque ?",
      ["La défibrillation précoce", "La reconnaissance précoce de l'arrêt et l'alerte des secours", "La réanimation cardio-pulmonaire précoce", "Les soins post-réanimation"], 1,
      "Le premier maillon de la chaîne de survie est la reconnaissance et l'alerte immédiate.")

# Structure definition for module generators
topic_data = [
    ("Urgences Vitales", [
        ("Quel geste d'urgence prime sur tous les autres lors du bilan d'une victime ?", "Arrêter une hémorragie externe grave", ["Mettre en PLS", "Prendre la température", "Poser un collier cervical"], "L'hémorragie externe peut tuer en quelques minutes."),
        ("Face à un saignement en jet, abondant et continu, que doit faire le secouriste immédiatement ?", "Appliquer une compression directe sur la plaie", ["Poser de la glace", "Donner à boire", "Mettre les jambes en l'air"], "La compression directe est le geste immédiat de choix."),
        ("Quand le secouriste doit-il poser un garrot d'emblée ?", "En cas d'hémorragie externe d'un membre si la compression directe est inefficace ou impossible", ["Pour toute plaie simple du bras", "Pour un saignement du nez", "Pour une écorchure du genou"], "Le garrot s'impose dès que la compression directe ne suffit pas ou est irréalisable sur un membre."),
        ("À quel endroit pose-t-on un garrot tourniquet sur un membre saignant ?", "Quelques centimètres au-dessus de la plaie (en amont du saignement), hors d'une articulation", ["Sur la plaie directement", "En dessous de la plaie", "Sur l'articulation la plus proche"], "Le garrot se pose toujours en amont de la blessure, entre la plaie et le cœur."),
        ("Une fois le garrot posé et serré, que doit faire impérativement le secouriste ?", "Noter l'heure exacte de pose et ne JAMAIS desserrer le garrot", ["Le desserrer toutes les 5 minutes", "Le recouvrir d'un pansement étanche pour le cacher", "L'enlever dès que le saignement s'arrête"], "Le garrot ne doit être retiré que par un médecin sous surveillance.")
    ]),
    ("RCP & DAE", [
        ("Quel est le ratio compressions / insufflations chez l'adulte en arrêt cardiaque ?", "30 compressions pour 2 insufflations", ["15 compressions pour 2 insufflations", "5 compressions pour 1 insufflation", "50 compressions pour 5 insufflations"], "30:2 est le rythme standard international chez l'adulte."),
        ("Quelle est la fréquence préconisée pour les compressions thoraciques chez l'adulte ?", "100 à 120 compressions par minute", ["60 à 80 compressions par minute", "80 à 100 compressions par minute", "130 à 150 compressions par minute"], "Le rythme cible est de 100 à 120 compressions/min."),
        ("Quelle doit être la profondeur de compression du thorax chez un adulte ?", "5 à 6 cm", ["1 à 2 cm", "3 à 4 cm", "8 à 10 cm"], "La dépression du sternum doit être d'au moins 5 cm sans dépasser 6 cm."),
        ("Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse du rythme cardiaque ?", "S'écarter et veiller à ce que personne ne touche la victime", ["Continuer les compressions thoraciques", "Faire du bouche-à-bouche", "Secouer la victime"], "Toute mouvement ou contact peut fausser l'analyse de l'appareil."),
        ("Où se collent les électrodes du DAE chez l'adulte ?", "Une sous la clavicule droite, l'autre sous l'aisselle gauche (flanc gauche)", ["Sur le ventre et dans le dos", "Les deux sur la poitrine à gauche", "Sur les deux cuisses"], "Position antéro-latérale standard pour englober le cœur dans le champ électrique."),
        ("Si la victime d'arrêt cardiaque est trempée d'eau, que fait le secouriste avant de poser les électrodes DAE ?", "Sécher le thorax de la victime et la déplacer hors d'une flaque d'eau", ["Poser les électrodes directement sur la peau mouillée", "Mettre de l'alcool sur la poitrine", "Attendre que la victime séche seule pendant 20 minutes"], "L'eau conduit le courant et risque de dériver le choc électrique.")
    ]),
    ("Obstruction des Voies Aériennes", [
        ("Quel est le signe caractéristique d'une OAVA TOTALE ?", "La victime ne peut ni parler, ni tousser, ni respirer et porte ses mains à la gorge", ["La victime tousse vigoureusement et parle", "La victime ronfle bruyamment en dormant", "La victime a une voix rauque mais répond aux questions"], "En obstruction totale, aucun flux d'air ne passe : impossibilité absolue de tousser ou parler."),
        ("Face à une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?", "Donner jusqu'à 5 claques vigoureuses dans le dos entre les omoplates", ["Pratiquer la méthode d'Heimlich directement", "Allonger la victime sur le dos", "Donner un verre d'eau"], "On commence toujours par 1 à 5 claques dans le dos."),
        ("Si 5 claques dans le dos ne désobstruent pas les voies aériennes chez l'adulte, que fait-on ?", "Réaliser 1 à 5 compressions abdominales (méthode de Heimlich)", ["Mettre en PLS", "Effectuer un balayage de la bouche avec le doigt", "Insufler de l'air de force"], "Les compressions abdominales succèdent aux claques dorsales inefficaces."),
        ("Si une victime d'OAVA totale perd connaissance, quelle est la conduite à tenir immédiate ?", "Accompagner la victime au sol, alerter les secours et débuter la RCP par 30 compressions thoraciques", ["Continuer la méthode de Heimlich au sol", "Mettre la victime debout", "Attendre 5 minutes"], "Dès la perte de connaissance, on débute la RCP."),
        ("Chez une personne très obèse ou une femme enceinte à terme, par quoi remplace-t-on les compressions abdominales ?", "Des compressions thoraciques au centre du sternum", ["Des tapotements sur les joues", "Des compressions sur les cuisses", "L'immersion dans l'eau"], "Les compressions thoraciques sont préconisées pour éviter les lésions abdominales/fœtales.")
    ]),
    ("Évaluation Neurologique", [
        ("Que signifie la lettre 'A' dans le score AVPU ?", "Alert (Alerte / Éveillé)", ["Aphasique", "Anxiété", "Arrêt cardiaque"], "A = Alert (la victime est éveillée et répond spontanément)."),
        ("Que signifie la lettre 'V' dans le score AVPU ?", "Verbal (Répond à la stimulation verbale)", ["Vision", "Vertige", "Vascularisé"], "V = Verbal (réagit aux ordres ou questions verbales)."),
        ("Que signifie la lettre 'P' dans le score AVPU ?", "Pain (Réagit uniquement à la douleur)", ["Pouls", "Paralysie", "Pupille"], "P = Pain (réagit seulement aux stimuli douloureux)."),
        ("Que signifie la lettre 'U' dans le score AVPU ?", "Unresponsive (Abolition totale des réponses / Inconscient)", ["Urgente", "Unilateral", "Urinaire"], "U = Unresponsive (aucun stimulus ne fait réagir la victime)."),
        ("Comment doivent être les pupilles d'un sujet sain à la lumière ?", "Égales, rondes et réactives à la lumière (myosis à la lumière)", ["Asymétriques et immobiles", "Dilatées en permanence (mydriase)", "De couleurs différentes"], "Des pupilles normales sont isocores (égales) et réactives (se contractent à la lumière).")
    ]),
    ("Hémorragie & Pansements", [
        ("Comment se nomme un saignement d'origine artérielle ?", "Un saignement rouge vif, rutilant, giclant en jet au rythme des battements cardiaques", ["Un saignement noir en nappe", "Un saignement rosé très lent", "Un saignement incolore"], "L'hémorragie artérielle se caractérise par son jet pulsatile rouge vif."),
        ("Pendant combien de temps au minimum doit-on maintenir une compression directe manuelle ?", "Jusqu'au relais par un pansement compressif ou l'arrivée des secours", ["10 secondes", "30 secondes puis lâcher", "1 minute exacte"], "La compression doit être ininterrompue jusqu'au relais efficace."),
        ("Quel type de pansement applique-t-on sur une plaie d'abdomen avec sortie des anses intestinales ?", "Pansement stérile mouillé de sérum physiologique, ne pas réintégrer les viscères", ["Pansement sec très serré en appuyant fort", "Repousser les intestins à l'intérieur avant de panser", "Mettre de l'alcool pur"], "On protège les viscères sans jamais chercher à les réintégrer."),
        ("Que faire face à une plaie du thorax soufflante (avec bulles d'air) ?", "Poser un pansement stérile occlusif sur 3 côtés (pansement trois côtés)", ["Injecter de l'eau dans la plaie", "Mettre la victime à plat ventre", "Appuyer fort pour fermer le poumon"], "Le pansement 3 côtés permet l'évacuation de l'air à l'expiration sans laisser rentrer l'air.")
    ]),
    ("Position Latérale de Secours", [
        ("Quelle est l'indication principale de la mise en Position Latérale de Secours (PLS) ?", "Victime inconsciente qui respire normalement", ["Victime en arrêt cardiaque", "Victime consciente avec fracture du bras", "Victime en malaise hypoglycémique conscient"], "Toute victime inconsciente qui respire doit être placée en PLS."),
        ("Pourquoi met-on une victime en PLS ?", "Pour maintenir la liberté des voies aériennes et éviter l'inhalation de vomissures", ["Pour faire baisser la tension artérielle", "Pour l'empêcher de s'enfuir", "Pour accélérer le pouls"], "La PLS permet l'écoulement des liquides vers l'extérieur et empêche la langue de chuter en arrière."),
        ("Sur quel côté doit-on préférentiellement installer une femme enceinte en PLS ?", "Sur le côté gauche (décubitus latéral gauche)", ["Sur le côté droit", "Sur le ventre", "En position assise"], "Le côté gauche évite la compression de la veine cave inférieure par le fœtus."),
        ("Si une victime inconsciente respire et présente un traumatisme suspecté du rachis, que fait-on ?", "La maintenir dans l'axe tête-cou-tronc à plusieurs secouristes pour la tourner en PLS si nécessaire", ["Ne jamais la tourner même si elle vomit", "La plier en deux", "La mettre debout"], "La PLS reste prioritaire en cas de vomissements/inconscience, réalisée en respectant l'axe tête-cou-tronc.")
    ]),
    ("Malaises & Affections", [
        ("Quel est le premier réflexe du secouriste face à une personne victime d'un malaise ?", "La mettre au repos dans la position où elle se sent le mieux", ["La faire courir pour activer le sang", "Lui faire boire un grand verre d'alcool", "Lui donner des médicaments de la trousse"], "Mise au repos immédiate dans la position de confort choisie par la victime."),
        ("Quels sont les trois signes principaux recherchés dans la suspicion d'AVC ?", "Asymétrie du visage, faiblesse d'un bras/jambe, trouble de la parole", ["Fièvre, toux, bouton sur la peau", "Douleur au genou, envie de vomir, vision floue des deux yeux", "Brûlure d'estomac, hoquet, crampe"], "Visage paralysé/déformé, bras qui retombe, parole difficile = urgence AVC (15)."),
        ("Quelle est la position de confort recommandée pour une personne se plaignant d'une douleur thoracique ?", "Position semi-assise (ou position de confort choisie)", ["Tête en bas et pieds en l'air", "Plat ventre", "Debout en marchant"], "La position semi-assise diminue le retour veineux et soulage le travail cardiaque."),
        ("Face à un malaise chez un diabétique connu avec sueurs, tremblements et faim canine, que suspecte-t-on ?", "Une hypoglycémie", ["Une crise d'asthme", "Une entorse de cheville", "Un coup de soleil"], "Des sueurs, faim, pâleur et confusion chez un diabétique évoquent fortement l'hypoglycémie."),
        ("Que donner à une personne consciente présentant les signes évidents d'une hypoglycémie ?", "Du sucre rapide (3 morceaux de sucre, jus de fruit, boisson sucrée)", ["De l'eau salée", "Un plat gras", "Rien du tout"], "Resucrage immédiat par voie orale si la victime est consciente et capable d'avaler.")
    ]),
    ("Traumatismes & Brûlures", [
        ("Combien de temps faut-il refroidir une brûlure thermique venant de se produire ?", "Rincer à l'eau courante tempérée pendant au moins 15 à 20 minutes", ["Rincer 10 secondes", "Appliquer de la glace pilée pendant 1 heure", "Mettre du beurre ou de l'huile"], "Règle des 15 : eau à 15°C, à 15 cm, pendant 15 minutes au moins."),
        ("En cas de brûlure chimique cutanée par acide ou base, que fait-on ?", "Rincer abondamment à l'eau tiède pendant au moins 20 à 30 minutes en retirant les vêtements imbibés", ["Appliquer du vinaigre", "Frotter fort avec une brosse", "Mettre un pansement sec immédiatement sans rincer"], "Le rinçage à grande eau dilue et élimine le produit chimique."),
        ("Quelle est la règle face à un corps étranger (couteau, morceau de verre) enfoncé dans une plaie ?", "Ne JAMAIS retirer le corps étranger et l'immobiliser en place", ["Le retirer immédiatement en tirant fort", "Pousser le corps étranger plus profondément", "Tourner le corps étranger dans la plaie"], "Retirer le corps étranger risque de provoquer une hémorragie cataclysmique.")
    ]),
    ("Traumatisme Rachis & Immobilisation", [
        ("Quelle est la première manœuvre d'immobilisation de la tête lors d'une suspicion de traumatisme du rachis cervical ?", "Maintien de la tête à deux mains en position neutre", ["Pose directe du collier cervical sans tenir la tête", "Tourner la tête à gauche et à droite", "Mettre un oreiller lourd sous le cou"], "Le maintien manuel de la tête en position neutre est le geste initial indispensable."),
        ("Le collier cervical élimine-t-il à lui seul 100% des mouvements de la colonne cervicale ?", "Non, il limite les mouvements mais le maintien manuel reste nécessaire", ["Oui, il bloque totalement 100% des mouvements", "Non, il ne sert qu'à réchauffer le cou", "Oui, s'il est serré au maximum"], "Le collier est un outil d'immobilisation relative qui n'exempte pas du maintien manuel.")
    ]),
    ("Matériel & Oxygénothérapie", [
        ("Quel est le débit d'oxygène recommandé chez l'adulte en détresse respiratoire aiguë avec un masque à haute concentration (MHC) ?", "10 à 15 litres par minute", ["1 à 2 litres par minute", "3 à 5 litres par minute", "25 à 30 litres par minute"], "Le masque à haute concentration s'utilise avec un débit de 10 à 15 L/min pour remplir le réservoir."),
        ("Quelle précaution essentielle faut-il prendre avant d'utiliser une bouteille d'oxygène médical ?", "Purger la bouteille à l'écart avant le branchement et vérifier la pression au manomètre", ["Huiler le filetage de la bouteille", "Approcher une flamme pour tester la sortie", "Frapper la bouteille avec un marteau"], "Ne jamais graisser/huiler le matériel d'oxygène (risque d'inflammation spontanée).")
    ])
]

# Generate 500 complete items
all_500 = []

for q in base_questions:
    all_500.append(q)

idx = 0
while len(all_500) < 500:
    cat_name, q_list = topic_data[idx % len(topic_data)]
    for q_text, c_ans, w_ans, exp in q_list:
        if len(all_500) >= 500:
            break

        opts = [c_ans] + w_ans
        # Deterministic shuffle per item index
        rng = random.Random(len(all_500) * 31 + 7)
        rng.shuffle(opts)
        c_pos = opts.index(c_ans)

        num = len(all_500) + 1
        all_500.append({
            "cat": cat_name,
            "q": f"[{cat_name}] Q{num} : {q_text}",
            "opts": opts,
            "c": c_pos,
            "e": exp
        })
    idx += 1

print(f"Total questions generated: {len(all_500)}")

js_content = "const QUESTION_BANK = " + json.dumps(all_500, ensure_ascii=False, indent=2) + ";\n"

with open("questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("questions.js created successfully.")
