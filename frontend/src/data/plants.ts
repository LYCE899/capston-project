import { Plant } from '../types/Plant';

export const plants: Plant[] = [
  {
    id: '1',
    scientificName: 'Alchornea cordifolia',
    commonName: {
      en: 'Djeka',
      fr: 'Djéka'
    },
    family: 'Euphorbiaceae',
    description: {
      en: 'A medicinal plant widely used in traditional African medicine, particularly known for its intimate hygiene and internal health benefits.',
      fr: 'Une plante médicinale largement utilisée dans la médecine traditionnelle africaine, particulièrement connue pour ses bienfaits en hygiène intime et santé interne.'
    },
    medicinalUses: {
      en: [
        'Intimate hygiene',
        'Post-partum care',
        'Menstrual pain',
        'Oral problems',
        'Gastrointestinal issues',
        'Iron deficiency'
      ],
      fr: [
        'Hygiène intime',
        'Soins post-partum',
        'Douleurs menstruelles',
        'Problèmes buccaux',
        'Problèmes gastro-intestinaux',
        'Manque de fer'
      ]
    },
    remedies: {
      en: {
        preparation: 'Decoction method: Pour 1.5L of water into a pot and add a good handful of Djeka leaves (3-4 leaves). Boil for about 15 minutes, remove from heat and let infuse and cool for at least 30 minutes. Filter before use. The leaves can be reused 2-3 times.',
        dosage: 'For internal use: One glass per day\nFor intimate hygiene: Use as intimate washing water or sitz bath (with moderation and precautions)\nFor menstrual pain: Two glasses per day',
        precautions: [
          'Do not use during pregnancy',
          'Not suitable for children under 15 years',
          'Sitz baths should be done with caution to avoid burns',
          'Use with moderation',
          'Consult your doctor for any prolonged use or combination with other active ingredients',
          'Store in a cool, dry place away from light',
          'Always rinse leaves before use'
        ]
      },
      fr: {
        preparation: 'Méthode de décoction : Verser dans une casserole 1,5 l d\'eau et rajouter une bonne poignée de feuilles de Djeka (3 à 4 feuilles). Faire bouillir une quinzaine de minutes, enlever du foyer puis laisser infuser et tiédir au moins 1/2 h. Filtrer avant de consommer.',
        dosage: 'Pour usage interne : Un verre par jour\nPour l\'hygiène intime : Utiliser comme eau de toilette intime ou en bain de siège (avec modération et précautions)\nPour les douleurs menstruelles : Deux verres par jour',
        precautions: [
          'Ne pas utiliser chez la femme enceinte',
          'Ne pas utiliser chez les enfants de moins de 15 ans',
          'Les bains de siège sont à effectuer avec précaution, sous risque de brûlures',
          'Utiliser avec modération',
          'Demandez l\'avis de votre médecin pour tout usage, prolongé ou combiné à d\'autres actifs',
          'À conserver dans un endroit frais et sec et à l\'abri de la lumière',
          'Pensez à bien rincer vos feuilles avant toute utilisation'
        ]
      }
    },
    distribution: {
      en: 'Widespread in all regions of Côte d\'Ivoire',
      fr: 'Répandue dans toutes les régions de la Côte d\'Ivoire'
    },
    imageUrl: 'https://naturegiftsbynd.fr/cdn/shop/products/djekafrais.jpg?v=1660348975&width=713',
    thumbnailUrl: 'https://i.ebayimg.com/images/g/d-kAAOSwRD1fTQ7s/s-l960.webp',
    sources: []
  },

  {
    id: '2',
    scientificName: 'Anthocleista nobilis',
    commonName: {
      en: 'Cabbage Tree',
      fr: 'Arbre chou'
    },
    family: 'Gentianaceae',
    description: {
      en: '🌿 Welcome to the fascinating world of Anthocleista nobilis, also known as the Cabbage Tree! This plant is highly respected in traditional African medicine and has been used for generations to treat a multitude of ailments. Whether it\'s calming a fever, relieving muscle pain, or even treating malaria, the Cabbage Tree is a true natural treasure. It\'s an impressive and elegant tree that can reach between 4 and 30 meters in height, easily recognized by its straight and robust trunk (often hollow with dark brown, slightly rough bark), enormous leaves (up to 40 cm long hence the name "cabbage tree"), white tubular flowers that grow in clusters, and oval fruits that are yellowish when ripe and contain numerous small seeds. It\'s a robust tree that grows easily in tropical climates, often found in humid areas, near villages, or even along roads.',
      fr: '🌿 Bienvenue dans le monde fascinant de l\'Anthocleista nobilis, plus connu sous le nom d\'arbre chou ! Cette plante, très respectée dans la médecine traditionnelle africaine, est utilisée depuis des générations pour soigner une multitude de maux. Que ce soit pour calmer une fièvre, soulager des douleurs musculaires ou même traiter le paludisme, l\'arbre chou est un véritable trésor naturel. C\'est un arbre imposant et élégant qui peut atteindre entre 4 et 30 mètres de hauteur. On le reconnaît facilement grâce à son tronc (droit et robuste, souvent creux, avec une écorce brun foncé un peu rugueuse), ses feuilles énormes (elles peuvent mesurer jusqu\'à 40 cm de long d\'où le nom d\'arbre chou car elles ressemblent vraiment à des feuilles de chou), ses fleurs (blanches, en forme de tube, et poussent en grappes), et ses fruits ovoïdes, jaunâtres à maturité, contenant de nombreuses petites graines. C\'est un arbre robuste qui pousse facilement dans des climats tropicaux, souvent dans les zones humides, près des villages ou même le long des routes.'
    },
    medicinalUses: {
      en: ['🦴 Rheumatism', '🤕 Headache', '💛 Jaundice (hepatitis)', '🌡️ Malaria', '🩸 Menstrual pain'],
      fr: ['🦴 Rhumatisme', '🤕 Maux de tête', '💛 Jaunisse (hépatite)', '🌡️ Paludisme', '🩸 Douleurs menstruelles']
    },
    remedies: {
      en: {
        preparation: [
          '🍵 Decoction: Boil the bark or root in water for 15-20 minutes. Let cool and drink a cup.',
          '🫖 Infusion: Let the leaves or bark steep in hot water for 10 minutes. Drink the warm infusion.',
          '💧 Maceration: Let the bark or root soak in cold water or palm wine for 12 hours. Drink a small amount.',
          '🌡️ Poultice: Crush the leaves or bark. Apply directly to a wound or painful area.'
        ],
        dosage: [
          '💊 Leaf infusion: One cup (about 150-200 ml), 1-2 times a day.',
          '💊 Root or bark decoction: One cup morning and evening for 3-7 days.',
          '💊 Maceration: One cup a day for a maximum of 5 days.',
          '💊 Poultice: Apply directly to the skin, 1-2 times a day.'
        ],
        precautions: [
          '⚠️ Toxicity: Too strong a dose can cause digestive problems (diarrhea, nausea).',
          '⚠️ Pregnancy: Not recommended during pregnancy risk of miscarriage!',
          '⚠️ Hypotension: If you already have low blood pressure, avoid this plant as it can make it worse.',
          '⚠️ Diabetes: The cabbage tree can lower blood sugar monitor your levels if you are on treatment.',
          '⚠️ Allergies: If you experience an unusual reaction (skin rash, nausea), stop using immediately.',
          '⚠️ As with any natural remedy, it\'s better to consult a professional before trying!'
        ]
      },
      fr: {
        preparation: [
          '🍵 Décoction: Fais bouillir l\'écorce ou la racine dans de l\'eau pendant 15 à 20 minutes. Laisse tiédir et bois en une tasse.',
          '🫖 Infusion: Laisse tremper les feuilles ou l\'écorce dans de l\'eau chaude pendant 10 minutes. Bois l\'infusion tiède.',
          '💧 Macération: Laisse l\'écorce ou la racine tremper dans de l\'eau froide ou du vin de palme pendant 12 heures. Bois en une petite quantité.',
          '🌡️ Cataplasme: Écrase les feuilles ou l\'écorce. Applique directement sur une plaie ou une zone douloureuse.'
        ],
        dosage: [
          '💊 Infusion de feuilles: Une tasse (environ 150-200 ml), 1 à 2 fois par jour.',
          '💊 Décoction de racine ou d\'écorce: Une tasse matin et soir pendant 3 à 7 jours.',
          '💊 Macération: Une tasse par jour pendant 5 jours maximum.',
          '💊 Cataplasme: Appliquer directement sur la peau, 1 à 2 fois par jour.'
        ],
        precautions: [
          '⚠️ Toxicité: Une dose trop forte peut provoquer des troubles digestifs (diarrhée, nausées).',
          '⚠️ Grossesse: Déconseillé pendant la grossesse risque de fausse couche!',
          '⚠️ Hypotension: Si tu as déjà une tension basse, évite cette plante car elle peut l\'aggraver.',
          '⚠️ Diabète: L\'arbre chou peut abaisser la glycémie surveille tes niveaux si tu es sous traitement.',
          '⚠️ Allergies: Si tu ressens une réaction inhabituelle (éruption cutanée, nausées), arrête immédiatement l\'utilisation.',
          '⚠️ Comme pour tout remède naturel, il vaut mieux consulter un professionnel avant d\'essayer!'
        ]
      }
    },
    distribution: {
      en: '📍 In Côte d\'Ivoire, you can find the cabbage tree naturally growing in several regions: in tropical forests of the South (like in the South Comoé region), along watercourses and swampy areas, in reforestation areas or along roads, and sometimes near rural dwellings it is often cultivated for its medicinal properties.',
      fr: '📍 En Côte d\'Ivoire, l\'arbre chou pousse naturellement dans plusieurs régions: dans les forêts tropicales du Sud (comme dans la région du Sud Comoé), aux abords des cours d\'eau et zones marécageuses, dans les zones de reforestation ou le long des routes, et parfois près des habitations rurales il est souvent cultivé pour ses vertus médicinales.'
    },
    imageUrl: 'https://inaturalist-open-data.s3.amazonaws.com/photos/77952144/original.jpeg',
    thumbnailUrl: 'https://inaturalist-open-data.s3.amazonaws.com/photos/77952144/original.jpeg',
    sources: []
  },
  
  {
    id: '3',
    scientificName: 'Antidesma venosum',
    commonName: {
      en: 'Keri',
      fr: 'Kéri'
    },
    family: 'Phyllanthaceae',
    description: {
      en: 'Welcome to the world of Keri (Antidesma venosum)! This plant is highly respected in traditional African medicine and is known for its powerful healing properties. Ivorian healers have been using it for centuries to treat a wide variety of ailments, from joint pain to infections. Antidesma venosum is a small tree or shrub belonging to the Phyllanthaceae family. It is distinguished by its dense foliage, fragrant flowers, and clusters of small colorful fruits. It stands between 5 and 15 meters tall, with a gray-brown, fissured, sometimes scaly bark. The leaves are alternate, oval-shaped, measuring between 6 and 15 cm long, green and shiny on top, but covered with small reddish hairs underneath. The flowers are small, yellowish-green, organized in hanging catkins (5 to 10 cm long), with male and female trees being separate (dioecious). The fruits are small round berries (8 mm in diameter), changing from green to bright red then to purplish-black when ripe, slightly acidic and edible. It\'s a robust plant, capable of withstanding difficult climatic conditions.',
      fr: 'Bienvenue dans le monde du Kéri (Antidesma venosum) ! Cette plante, très respectée dans la médecine traditionnelle africaine, est connue pour ses propriétés curatives puissantes. Les guérisseurs ivoiriens l\'utilisent depuis des siècles pour traiter une grande variété de maux, allant des douleurs articulaires aux infections. Antidesma venosum est un petit arbre ou arbuste appartenant à la famille des Phyllanthacées. Il se distingue par son feuillage dense, ses fleurs odorantes et ses grappes de petits fruits colorés. Il mesure entre 5 et 15 mètres de haut, avec une écorce gris-brun, fissurée, parfois écailleuse. Les feuilles sont alternes, de forme ovale, mesurant entre 6 et 15 cm de long, vertes et brillantes sur le dessus, mais couvertes de petits poils roux sur le dessous. Les fleurs sont petites, jaune-verdâtre, organisées en chatons pendants (longs de 5 à 10 cm), avec des arbres mâles et femelles séparés (dioïque). Les fruits sont de petites baies rondes (8 mm de diamètre), passant du vert au rouge vif puis au noir violacé une fois mûres, légèrement acidulés et comestibles. C\'est une plante robuste, capable de résister à des conditions climatiques difficiles.'
    },
    medicinalUses: {
      en: ['Rheumatism', 'Headache', 'Jaundice', 'Malaria', 'Menstrual Pain', 'Blennorrhagia', 'Syphilis', 'Bilharzia'],
      fr: ['Rhumatisme', 'Maux de tête', 'Jaunisse', 'Paludisme', 'Douleurs menstruelles', 'Blénnorragie', 'Syphilis', 'Bilharziose']
    },
    remedies: {
      en: {
        preparation: 'Decoction: Boil the bark or root in water for 15-20 minutes. Let cool and drink a cup morning and evening.\nInfusion: Let the leaves steep in hot water for 10 minutes. Drink the infusion once or twice a day.\nMaceration: Soak the seeds or root in cold water or palm wine for 12 hours. Drink the resulting liquid once a day.\nPoultice: Crush the fresh leaves or bark. Apply directly to the painful area (joints, wound, skin rash).',
        dosage: 'Leaf infusion: One cup (150-200 ml) once or twice a day.\nBark or root decoction: One cup morning and evening for 3-7 days.\nMaceration: One cup per day, for a maximum of 5 days.\nPoultice: Apply once or twice a day to the affected area.',
        precautions: [
          'Toxicity: Too high a dose can cause nausea, vomiting and muscle weakness.',
          'Pregnancy: Not recommended during pregnancy (risk of miscarriage).',
          'Breastfeeding: Not recommended for breastfeeding women.',
          'Hypotension: People with low blood pressure should avoid Keri.',
          'Diabetes: May lower blood sugar - avoid if you are on treatment for diabetes.',
          'Allergic reaction: If itching or a rash appears, stop use immediately.'
        ]
      },
      fr: {
        preparation: 'Décoction: Faire bouillir l\'écorce ou la racine dans de l\'eau pendant 15 à 20 minutes. Laisser tiédir et boire une tasse matin et soir.\nInfusion: Laisser tremper les feuilles dans de l\'eau chaude pendant 10 minutes. Boire l\'infusion une à deux fois par jour.\nMacération: Tremper les graines ou la racine dans de l\'eau froide ou du vin de palme pendant 12 heures. Boire le liquide obtenu une fois par jour.\nCataplasme: Écraser les feuilles ou l\'écorce fraîche. Appliquer directement sur la zone douloureuse (articulations, plaie, éruption cutanée).',
        dosage: 'Infusion de feuilles : Une tasse (150–200 ml) une à deux fois par jour.\nDécoction d\'écorce ou de racine : Une tasse matin et soir pendant 3 à 7 jours.\nMacération : Une tasse par jour, pendant 5 jours maximum.\nCataplasme : Appliquer une à deux fois par jour sur la zone concernée.',
        precautions: [
          'Toxicité : Une dose trop élevée peut provoquer des nausées, des vomissements et une faiblesse musculaire.',
          'Grossesse : Déconseillé pendant la grossesse (risque de fausse couche).',
          'Allaitement : Déconseillé pour les femmes allaitantes.',
          'Hypotension : Les personnes ayant une tension basse doivent éviter le Kéri.',
          'Diabète : Peut faire baisser la glycémie – à éviter si vous êtes sous traitement pour le diabète.',
          'Réaction allergique : Si des démangeaisons ou une éruption cutanée apparaissent, arrêter immédiatement l\'usage.'
        ]
      }
    },
    distribution: {
      en: 'Antidesma venosum grows naturally in several regions of Africa, including Côte d\'Ivoire. It is mainly found in wooded savannas of the North of Côte d\'Ivoire (regions of Korhogo, Ferkessédougou, Boundiali), at the edges of open forests, in reforestation areas, and in humid areas near rivers and water courses. The plant prefers well-drained soils and is resistant to drought. It is often found near villages, as it is cultivated for its medicinal benefits.',
      fr: 'Antidesma venosum pousse naturellement dans plusieurs régions d\'Afrique, y compris en Côte d\'Ivoire. On la trouve principalement dans les savanes boisées du Nord de la Côte d\'Ivoire (régions de Korhogo, Ferkessédougou, Boundiali), les lisières de forêts claires, les zones de reforestation, et les zones humides près des rivières et des cours d\'eau. La plante préfère les sols bien drainés et résiste bien à la sécheresse. On la trouve souvent près des villages, car elle est cultivée pour ses bienfaits médicinaux.'
    },
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5luLrQBUiRQe958mtbHooHizyosAfkChfDw&s',
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5luLrQBUiRQe958mtbHooHizyosAfkChfDw&s',
    sources: []
  },

 {
   id: '4',
   scientificName: 'Alstonia boonei',
   commonName: {
     en: 'Emien',
     fr: 'Émien'
   },
   family: 'Apocynaceae',
   description: {
     en: 'Alstonia boonei, also called Emien in Côte d\'Ivoire, is a highly prized medicinal tree in traditional African medicine. Known for its antimalarial, anti-inflammatory, and analgesic properties, it has been used for centuries by healers to treat fever, pain, and many other diseases. Alstonia boonei is a large deciduous tree of the Apocynaceae family. It is easily recognizable by its imposing stature, rough bark, and abundant white latex that flows when injured. It can reach 35 to 45 meters in height, with a straight trunk, gray-brown, rough, cracked bark. The leaves are arranged in whorls of 5 to 8 per node, oval-shaped, 6 to 30 cm long, with the upper side being dark green and the lower side being lighter, with well-marked veining. It has small whitish flowers in cymes, very fragrant, and hanging pods of 16 to 60 cm long, containing numerous flat seeds with silky hairs. The white latex that flows from the bark is used for the treatment of certain skin conditions. Alstonia boonei is a resistant tree, capable of growing rapidly in difficult conditions.',
     fr: 'L\'Alstonia boonei, aussi appelé Émien en Côte d\'Ivoire, est un arbre médicinal très prisé dans la médecine traditionnelle africaine. Connu pour ses propriétés antipaludiques, anti-inflammatoires et analgésiques, il est utilisé depuis des siècles par les guérisseurs pour traiter la fièvre, les douleurs et de nombreuses autres maladies. Alstonia boonei est un grand arbre à feuilles caduques de la famille des Apocynacées. Il est facilement reconnaissable par sa stature imposante, son écorce rugueuse et son latex blanc abondant qui s\'écoule lorsqu\'on le blesse. Il peut atteindre 35 à 45 mètres de haut, avec un tronc droit, une écorce gris-brun, rugueuse, fissurée. Les feuilles sont disposées en verticilles de 5 à 8 par nœud, de forme ovale, longues de 6 à 30 cm, avec une face supérieure vert foncé et une face inférieure plus claire, avec une nervation bien marquée. Il possède de petites fleurs blanchâtres en cymes, très parfumées, et des gousses pendantes de 16 à 60 cm de long, contenant de nombreuses graines plates munies de soies. Le latex blanc qui s\'écoule de l\'écorce est utilisé pour le traitement de certaines affections cutanées. Alstonia boonei est un arbre résistant, capable de pousser rapidement dans des conditions difficiles.'
   },
   medicinalUses: {
     en: ['Rheumatism', 'Headache', 'Jaundice', 'Malaria', 'Menstrual Pain'],
     fr: ['Rhumatisme', 'Maux de tête', 'Jaunisse', 'Paludisme', 'Douleurs menstruelles']
   },
   remedies: {
     en: {
       preparation: 'Decoction: Boil 50 to 100g of bark in 1 liter of water for 15-20 minutes. Let cool and drink a cup morning and evening.\nInfusion: Let the leaves steep in hot water for 10 minutes. Drink the infusion once or twice a day.\nMaceration: Let the bark soak in cold water for 12 hours. Drink a small cup per day.\nPoultice: Crush the leaves or bark. Apply directly to the painful or infected area.',
       dosage: 'Leaf infusion: One cup (150-200 ml), once or twice a day.\nBark or root decoction: One cup morning and evening for 3-7 days.\nMaceration: A small cup per day for a maximum of 5 days.\nPoultice: Apply once or twice a day to the affected area.',
       precautions: [
         'Toxicity: In high doses, Alstonia boonei can cause nausea, vomiting, and a drop in blood pressure.',
         'Pregnancy: Not recommended during pregnancy (risk of miscarriage).',
         'Breastfeeding: Not recommended during breastfeeding.',
         'Hypotension: People suffering from low blood pressure should avoid this plant.',
         'Diabetes: May lower blood sugar levels - exercise caution if diabetic.',
         'Interactions: Do not combine with other hypotensive or antimalarial medications without medical advice.',
         'Allergic reaction: If redness or itching appears, stop use immediately.'
       ]
     },
     fr: {
       preparation: 'Décoction: Faire bouillir 50 à 100 g d\'écorce dans 1 litre d\'eau pendant 15 à 20 minutes. Laisser tiédir et boire une tasse matin et soir.\nInfusion: Laisser tremper les feuilles dans de l\'eau chaude pendant 10 minutes. Boire l\'infusion une à deux fois par jour.\nMacération: Laisser tremper l\'écorce dans de l\'eau froide pendant 12 heures. Boire une petite tasse par jour.\nCataplasme: Écraser les feuilles ou l\'écorce. Appliquer directement sur la zone douloureuse ou infectée.',
       dosage: 'Infusion de feuilles : Une tasse (150–200 ml), une à deux fois par jour.\nDécoction d\'écorce ou de racine : Une tasse matin et soir pendant 3 à 7 jours.\nMacération : Une petite tasse par jour pendant 5 jours maximum.\nCataplasme : Appliquer une à deux fois par jour sur la zone concernée.',
       precautions: [
         'Toxicité : À forte dose, l\'Alstonia boonei peut provoquer des nausées, des vomissements et une baisse de la tension artérielle.',
         'Grossesse : Déconseillé pendant la grossesse (risque de fausse couche).',
         'Allaitement : Déconseillé pendant l\'allaitement.',
         'Hypotension : Les personnes souffrant de basse tension doivent éviter cette plante.',
         'Diabète : Peut faire baisser le taux de sucre dans le sang – prudence chez les diabétiques.',
         'Interactions : Ne pas combiner avec d\'autres médicaments hypotenseurs ou antipaludiques sans avis médical.',
         'Réaction allergique : Si des rougeurs ou démangeaisons apparaissent, arrêter immédiatement l\'utilisation.'
       ]
     }
   },
   distribution: {
     en: 'Alstonia boonei is native to West and Central Africa. In Côte d\'Ivoire, it is found mainly in semi-deciduous moist forests, marshy areas (where the soil is temporarily flooded), edges of open forests, and reforestation areas. It grows from sea level up to 1200 m in altitude. The tree prefers rich, well-drained soils and an annual rainfall of at least 1200 mm.',
     fr: 'Alstonia boonei est originaire d\'Afrique de l\'Ouest et centrale. En Côte d\'Ivoire, on le trouve principalement dans les forêts humides semi-décidues, les zones marécageuses (où le sol est temporairement inondé), les bordures de forêts claires, et les zones de reboisement. Il pousse du niveau de la mer jusqu\'à 1200 m d\'altitude. L\'arbre préfère les sols riches, bien drainés et une pluviométrie annuelle d\'au moins 1200 mm.'
   },
   imageUrl: 'https://images.squarespace-cdn.com/content/v1/5324bf63e4b05fc1fc6ea99d/1543223061401-X0K5T13PQ4E4821UFQB4/boonei.jpg',
   thumbnailUrl: 'https://images.squarespace-cdn.com/content/v1/5324bf63e4b05fc1fc6ea99d/1543223061401-X0K5T13PQ4E4821UFQB4/boonei.jpg',
   sources: []
 },

    {
      id: '5',
      scientificName: 'Aristolochia ringens',
      commonName: {
        en: 'Gaping Dutchman\'s Pipe',
        fr: 'Aristoloche en gueule'
      },
      family: 'Aristolochiaceae',
      description: {
        en: 'Aristolochia ringens, also called Gaping Dutchman\'s Pipe in English, is an impressive tropical vine. It has been used for centuries in traditional medicine for its antivenom, anti-inflammatory, and digestive properties. While it has strong therapeutic potential, it also contains toxic substances that require careful use. Aristolochia ringens is a vigorous climbing vine belonging to the Aristolochiaceae family. It can reach up to 10 meters in length, with heart-shaped leaves (upper side dark green and lower side lighter), large flowers (about 12 cm long) shaped like a pipe, purple with yellowish-cream marbling, and a green fruit capsule that turns brown when mature, containing numerous flat seeds with silky hairs. The stems are woody and robust, coiling around supports to climb, and the plant produces white latex when cut. The flowers emit a strong odor that attracts pollinating insects. Once inside the flower, insects remain temporarily trapped, facilitating pollination.',
        fr: 'L\'Aristolochia ringens, aussi appelée Aristoloche en gueule ou "Gaping Dutchman\'s Pipe" en anglais, est une liane tropicale impressionnante. Elle est utilisée depuis des siècles en médecine traditionnelle pour ses propriétés antivenimeuses, anti-inflammatoires et digestives. Bien qu\'elle possède un fort potentiel thérapeutique, elle contient aussi des substances toxiques qui nécessitent une utilisation prudente. Aristolochia ringens est une liane grimpante vigoureuse appartenant à la famille des Aristolochiacées. Elle peut atteindre jusqu\'à 10 mètres de long, avec des feuilles de forme cordée (en forme de cœur), avec une face supérieure vert foncé et une face inférieure plus claire, des fleurs grandes (environ 12 cm de long), en forme de pipe, de couleur pourpre avec des marbrures jaune-crème, et un fruit en forme de capsule verdâtre qui devient brune à maturité, contenant de nombreuses graines plates munies de soies. Les tiges sont ligneuses et robustes, s\'enroulant autour des supports pour grimper, et la plante produit un latex blanc lorsqu\'elle est coupée. Les fleurs dégagent une odeur forte qui attire les insectes pollinisateurs. Une fois à l\'intérieur de la fleur, les insectes restent temporairement piégés, facilitant la pollinisation.'
      },
      medicinalUses: {
        en: ['Rheumatism', 'Headache', 'Jaundice', 'Snake bite', 'Digestive disorders'],
        fr: ['Rhumatisme', 'Maux de tête', 'Jaunisse', 'Morsure de serpent', 'Troubles digestifs']
      },
      remedies: {
        en: {
          preparation: 'Decoction: Boil 50g of root in 1 liter of water for 15-20 minutes. Drink a cup morning and evening.\nInfusion: Let the leaves steep in hot water for 10-15 minutes. Drink a cup after meals.\nMaceration: Let the root soak in cold water for 12 hours. Drink a small cup morning and evening.\nPoultice: Crush the fresh leaves or root. Apply directly to a bite or wound.',
          dosage: 'Infusion: One cup (150-200 ml) after meals.\nRoot decoction: One cup morning and evening for 3-7 days.\nMaceration: A small cup per day, for 3-5 days maximum.\nPoultice: Apply once or twice a day to the affected area.',
          precautions: [
            'Kidney toxicity: Aristolochia ringens contains aristolochic acids, which can cause chronic kidney failure and urinary tract cancer.',
            'Pregnancy: Not recommended during pregnancy (risk of abortion).',
            'Breastfeeding: Not recommended during breastfeeding due to risk of toxicity.',
            'Digestive disorders: May cause nausea and vomiting in high doses.',
            'Kidney disease: Not recommended for those with kidney problems or hypertension.',
            'Drug interaction: Avoid with hypotensive and nephrotoxic medications.',
            'Always consult a healthcare professional before consuming this plant.'
          ]
        },
        fr: {
          preparation: 'Décoction: Faire bouillir 50 g de racine dans 1 litre d\'eau pendant 15 à 20 minutes. Boire une tasse matin et soir.\nInfusion: Faire tremper les feuilles dans de l\'eau chaude pendant 10 à 15 minutes. Boire une tasse après le repas.\nMacération: Laisser tremper la racine dans de l\'eau froide pendant 12 heures. Boire une petite tasse matin et soir.\nCataplasme: Écraser les feuilles fraîches ou la racine. Appliquer directement sur une morsure ou une plaie.',
          dosage: 'Infusion : Une tasse (150–200 ml) après les repas.\nDécoction de racine : Une tasse matin et soir pendant 3 à 7 jours.\nMacération : Une petite tasse par jour, pendant 3 à 5 jours maximum.\nCataplasme : Appliquer une à deux fois par jour sur la zone concernée.',
          precautions: [
            'Toxicité rénale : Aristolochia ringens contient des acides aristolochiques, qui peuvent provoquer une insuffisance rénale chronique et un cancer des voies urinaires.',
            'Grossesse : Déconseillé pendant la grossesse (risque d\'avortement).',
            'Allaitement : Déconseillé pendant l\'allaitement en raison du risque de toxicité.',
            'Troubles digestifs : Peut causer des nausées et des vomissements à forte dose.',
            'Maladies rénales : Déconseillé en cas de problèmes rénaux ou d\'hypertension.',
            'Interaction médicamenteuse : Éviter avec les médicaments hypotenseurs et néphrotoxiques.',
            'Consulte toujours un professionnel de santé avant de consommer cette plante.'
          ]
        }
      },
      distribution: {
        en: 'Aristolochia ringens is native to Central and South America (Panama, Venezuela, Colombia, Brazil). It was introduced to West Africa as an ornamental plant. In Côte d\'Ivoire, it is found mainly in humid tropical forests, along roads, forest edges, and in marshy areas. It grows well in rich, well-drained soils, with high humidity and warm temperature (between 25 and 30°C). It easily naturalizes in semi-shaded forest environments.',
        fr: 'Aristolochia ringens est originaire d\'Amérique centrale et du Sud (Panama, Venezuela, Colombie, Brésil). Elle a été introduite en Afrique de l\'Ouest comme plante ornementale. En Côte d\'Ivoire, on la trouve principalement dans les forêts tropicales humides, le long des routes, des lisières de forêts et dans les zones marécageuses. Elle pousse bien dans les sols riches, bien drainés, avec une forte humidité et une température chaude (entre 25 et 30 °C). Elle se naturalise facilement dans les milieux forestiers semi-ombragés.'
      },
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Aristolochia_sp.jpg/640px-Aristolochia_sp.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Aristolochia_sp.jpg/640px-Aristolochia_sp.jpg',
      sources: []
    },

  {
    id: '6',
    scientificName: 'Bridelia ferruginea',
    commonName: {
      en: 'Sea',
      fr: 'Séa'
    },
    family: 'Phyllanthaceae',
    description: {
      en: 'Bridelia ferruginea (called Séa in Côte d\'Ivoire) is a shrub or small tropical tree of the Phyllanthaceae family, highly appreciated in traditional African medicine. Renowned for its versatile medicinal properties, the plant is used to treat gastrointestinal disorders, fever, inflammatory pain, and various skin infections. Ivorian healers consider it a protective plant, capable of restoring the balance of body and spirit. It is a robust plant that easily adapts to tropical climates. It is recognizable by its dark gray bark, elliptical leaves, and small greenish flowers. It stands between 8 and 15 meters tall, with a twisted, rough, dark brown to gray trunk. The leaves are simple, alternate, oval, dark shiny green, with a slightly pubescent underside. The flowers are greenish or yellowish, grouped in clusters, discrete but fragrant. The fruits are small ovoid drupes (6-8 mm), green then bluish-black when ripe. The roots form a deep root system, adapted to the dry season. The bark produces a red sap when cut, which explains its use in traditional dyeing. The plant is particularly resistant to fire and drought, allowing it to survive in savannas and arid plains.',
      fr: 'Bridelia ferruginea (appelée Séa en Côte d\'Ivoire) est un arbuste ou petit arbre tropical de la famille des Phyllanthaceae, très apprécié en médecine traditionnelle africaine. Réputée pour ses propriétés médicinales polyvalentes, la plante est utilisée pour traiter les troubles gastro-intestinaux, la fièvre, les douleurs inflammatoires, et diverses infections cutanées. Les guérisseurs ivoiriens la considèrent comme une plante protectrice, capable de rétablir l\'équilibre du corps et de l\'esprit. C\'est une plante robuste qui s\'adapte facilement aux climats tropicaux. Elle est reconnaissable par son écorce gris foncé, ses feuilles elliptiques et ses petites fleurs verdâtres. Elle mesure entre 8 et 15 mètres de hauteur, avec un tronc torsadé, rugueux, de couleur brun foncé à gris. Les feuilles sont simples, alternes, ovales, de couleur vert foncé brillant, avec une face inférieure légèrement pubescente. Les fleurs sont verdâtres ou jaunâtres, regroupées en grappes, discrètes mais parfumées. Les fruits sont de petites drupes ovoïdes (6–8 mm), vertes puis noir-bleutées à maturité. Les racines forment un système racinaire profond, adapté à la saison sèche. L\'écorce produit une sève rouge lorsqu\'elle est entaillée, ce qui explique son usage dans la teinture traditionnelle. La plante est particulièrement résistante au feu et à la sécheresse, ce qui lui permet de survivre dans les savanes et les plaines arides.'
    },
    medicinalUses: {
      en: ['Rheumatism', 'Headache', 'Jaundice', 'Malaria', 'Diabetes', 'Wounds', 'Diarrhea', 'Fever', 'Chickenpox'],
      fr: ['Rhumatisme', 'Maux de tête', 'Jaunisse', 'Paludisme', 'Diabète', 'Plaies', 'Diarrhée', 'Fièvre', 'Varicelle']
    },
    remedies: {
      en: {
        preparation: 'Decoction: Boil 30 to 50g of bark or leaves in 1 liter of water for 10-15 minutes. Let cool and drink a cup morning and evening.\nInfusion: Let the leaves steep in hot water for 10 minutes. Drink a cup after meals.\nPoultice: Crush the fresh leaves or bark. Apply directly to the skin.\nMaceration: Let the bark or leaves soak in cold water for 12 hours. Drink a small cup morning and evening.',
        dosage: 'Infusion: One cup after meals, three times a day.\nBark decoction: One cup morning and evening for 3-7 days.\nPoultice: Apply twice a day until completely healed.\nMaceration: A small cup per day, for 3-5 days maximum.',
        precautions: [
          'Low toxicity: No notable toxicity reported at therapeutic doses.',
          'Pregnancy: Not recommended during pregnancy due to its potential effects on the hormonal system.',
          'Breastfeeding: Not recommended without medical advice.',
          'Allergies: Some people may experience skin sensitivity.',
          'Drug interactions: Use caution with antidiabetic or hypotensive treatments.',
          'Consult a healthcare professional before prolonged use.'
        ]
      },
      fr: {
        preparation: 'Décoction: Faire bouillir 30 à 50 g d\'écorce ou de feuilles dans 1 litre d\'eau pendant 10 à 15 minutes. Laisser refroidir et boire une tasse matin et soir.\nInfusion: Faire tremper les feuilles dans de l\'eau chaude pendant 10 minutes. Boire une tasse après le repas.\nCataplasme: Écraser les feuilles ou l\'écorce fraîche. Appliquer directement sur la peau.\nMacération: Laisser tremper l\'écorce ou les feuilles dans de l\'eau froide pendant 12 heures. Boire une petite tasse matin et soir.',
        dosage: 'Infusion : Une tasse après le repas, trois fois par jour.\nDécoction d\'écorce : Une tasse matin et soir pendant 3 à 7 jours.\nCataplasme : Appliquer deux fois par jour jusqu\'à guérison complète.\nMacération : Une petite tasse par jour, pendant 3 à 5 jours maximum.',
        precautions: [
          'Toxicité faible : Aucune toxicité notable signalée aux doses thérapeutiques.',
          'Grossesse : Déconseillée pendant la grossesse en raison de ses effets potentiels sur le système hormonal.',
          'Allaitement : Déconseillée sans avis médical.',
          'Allergies : Certaines personnes peuvent présenter une sensibilité cutanée.',
          'Interactions médicamenteuses : Prudence avec les traitements antidiabétiques ou hypotenseurs.',
          'Consulter un professionnel de santé avant une utilisation prolongée.'
        ]
      }
    },
    distribution: {
      en: 'Bridelia ferruginea is widely distributed in West and Central Africa. In Côte d\'Ivoire, it is found in wooded savannas and open forests of the north and center of the country. It also grows along rivers, in wetlands, and at the edge of forests. Resistant to fire and drought, it easily adapts to different types of soils. In some regions, it is cultivated near dwellings for its medicinal properties and shade.',
      fr: 'Bridelia ferruginea est largement répandue en Afrique de l\'Ouest et en Afrique centrale. En Côte d\'Ivoire, on la trouve dans les savanes boisées et les forêts claires du nord et du centre du pays. Elle pousse également le long des rivières, dans les zones humides et à la lisière des forêts. Résistante au feu et à la sécheresse, elle s\'adapte facilement à différents types de sols. Dans certaines régions, elle est cultivée près des habitations pour ses propriétés médicinales et son ombrage.'
    },
    imageUrl: 'https://api.tela-botanica.org/img:000676763O.jpg',
    thumbnailUrl: 'https://api.tela-botanica.org/img:000676763O.jpg',
    sources: []
  },

{
  id: '7',
  scientificName: 'Berlinia grandiflora',
  commonName: {
    en: 'Gallery Melegba',
    fr: 'Mélégba des galeries'
  },
  family: 'Fabaceae',
  description: {
    en: 'The Gallery Melegba (Berlinia grandiflora) is a majestic tree of humid tropical forests. Renowned for its multiple benefits in traditional African medicine, it is used to treat digestive disorders, fever, parasitic infections, and much more. In Côte d\'Ivoire, healers consider it a versatile plant that heals both body and mind. Berlinia grandiflora is a tropical tree belonging to the Fabaceae family (subfamily Caesalpinioideae). It mainly grows in humid forests and swampy areas. It can reach between 15 and 30 meters in height, with a straight trunk up to 70 cm in diameter, with rough gray-brown bark. The leaves are paripinnate, composed of 3 to 4 pairs of oblong leaflets, about 7 to 22 cm long. It has large white or greenish, fragrant flowers, grouped in panicles, and flattened pods containing several hard brown seeds, which open abruptly when mature to project the seeds. The tree is particularly resistant and can survive in flooded soils, but it grows better in well-drained soil rich in nutrients.',
    fr: 'Le Mélégba des galeries (Berlinia grandiflora) est un arbre majestueux des forêts tropicales humides. Réputé pour ses multiples bienfaits en médecine traditionnelle africaine, il est utilisé pour traiter les troubles digestifs, la fièvre, les infections parasitaires, et bien plus encore. En Côte d\'Ivoire, les guérisseurs le considèrent comme une plante polyvalente qui soigne le corps et l\'esprit. Berlinia grandiflora est un arbre tropical appartenant à la famille des Fabacées (sous-famille des Caesalpinioideae). Il pousse principalement dans les forêts humides et les zones marécageuses. Il peut atteindre entre 15 et 30 mètres de hauteur, avec un tronc droit pouvant faire jusqu\'à 70 cm de diamètre, avec une écorce gris-brun rugueuse. Les feuilles sont paripennées, composées de 3 à 4 paires de folioles oblongues, d\'environ 7 à 22 cm de long. Il possède de grandes fleurs blanches ou verdâtres, parfumées, regroupées en panicules, et des gousses aplaties contenant plusieurs graines brunes dures, qui s\'ouvrent brutalement à maturité pour projeter les graines. L\'arbre est particulièrement résistant et peut survivre dans des sols inondés, mais il pousse mieux dans un sol bien drainé et riche en nutriments.'
  },
  medicinalUses: {
    en: ['Rheumatism', 'Headache', 'Jaundice', 'Malaria', 'Menstrual Pain', 'Edema', 'Healing', 'Cholagogue'],
    fr: ['Rhumatisme', 'Maux de tête', 'Jaunisse', 'Paludisme', 'Douleurs menstruelles', 'Œdème', 'Cicatrisante', 'Cholagogue']
  },
  remedies: {
    en: {
      preparation: 'Decoction: Boil 50 to 100g of bark in 1 liter of water for 15-20 minutes. Let cool and drink a cup morning and evening.\nInfusion: Let the leaves steep in hot water for 10-15 minutes. Drink a cup after meals.\nMaceration: Let the bark or leaves soak in cold water for 12 hours. Drink a small cup morning and evening.\nPoultice: Crush the fresh leaves or bark. Apply directly to a wound or swollen area.',
      dosage: 'Infusion: One cup (150-200 ml) after meals.\nBark decoction: One cup morning and evening for 3-7 days.\nMaceration: A small cup per day, for 3-5 days maximum.\nPoultice: Apply once or twice a day to the affected area.',
      precautions: [
        'Toxicity: In high doses, Berlinia grandiflora can cause gastrointestinal disorders (nausea, diarrhea).',
        'Pregnancy: Not recommended during pregnancy.',
        'Breastfeeding: Do not use without medical advice.',
        'Kidney disease: Not recommended for those with kidney failure.',
        'Drug interactions: May interact with hypoglycemic or hypotensive treatments.',
        'Allergies: Some people may be sensitive to the sap or bark.',
        'Consult a healthcare professional before prolonged use.'
      ]
    },
    fr: {
      preparation: 'Décoction: Faire bouillir 50 à 100 g d\'écorce dans 1 litre d\'eau pendant 15 à 20 minutes. Laisser tiédir et boire une tasse matin et soir.\nInfusion: Faire tremper les feuilles dans de l\'eau chaude pendant 10 à 15 minutes. Boire une tasse après le repas.\nMacération: Laisser tremper l\'écorce ou les feuilles dans de l\'eau froide pendant 12 heures. Boire une petite tasse matin et soir.\nCataplasme: Écraser les feuilles ou l\'écorce fraîche. Appliquer directement sur une plaie ou une zone enflée.',
      dosage: 'Infusion : Une tasse (150–200 ml) après les repas.\nDécoction de racine : Une tasse matin et soir pendant 3 à 7 jours.\nMacération : Une petite tasse par jour, pendant 3 à 5 jours maximum.\nCataplasme : Appliquer une à deux fois par jour sur la zone concernée.',
      precautions: [
        'Toxicité : À forte dose, Berlinia grandiflora peut provoquer des troubles gastro-intestinaux (nausées, diarrhée).',
        'Grossesse : Déconseillé pendant la grossesse.',
        'Allaitement : Ne pas utiliser sans avis médical.',
        'Maladies rénales : Déconseillé en cas d\'insuffisance rénale.',
        'Interactions médicamenteuses : Peut interagir avec les traitements hypoglycémiants ou hypotenseurs.',
        'Allergies : Certaines personnes peuvent être sensibles à la sève ou à l\'écorce.',
        'Consulter un professionnel de santé avant utilisation prolongée.'
      ]
    }
  },
  distribution: {
    en: 'Berlinia grandiflora is present in a large part of tropical Africa, but it is particularly abundant in West and Central Africa. In Côte d\'Ivoire, it is found along rivers, in gallery forests and swampy areas. It also grows in secondary forests and degraded areas with constant humidity. It prefers rich soils and annual rainfall above 1200 mm. It tolerates partial shade but flowers better in full sun. The Gallery Melegba plays a key ecological role in bank stabilization and biodiversity conservation.',
    fr: 'Berlinia grandiflora est présente dans une large partie de l\'Afrique tropicale, mais elle est particulièrement abondante en Afrique de l\'Ouest et en Afrique centrale. En Côte d\'Ivoire, on le trouve le long des rivières, dans les forêts-galeries et les zones marécageuses. Il pousse également dans les forêts secondaires et les zones dégradées à humidité constante. Il préfère les sols riches et une pluviométrie annuelle supérieure à 1200 mm. Il tolère l\'ombre partielle mais fleurit mieux en plein soleil. Le Mélégba des galeries joue un rôle écologique clé dans la stabilisation des berges et la conservation de la biodiversité.'
  },
  imageUrl: 'http://www.westafricanplants.senckenberg.de/images/pictures/wamc1250363-berlinia_grandiflora_190_f2e280.jpg',
  thumbnailUrl: 'http://www.westafricanplants.senckenberg.de/images/pictures/wamc1250363-berlinia_grandiflora_190_f2e280.jpg',
  sources: []
},

{
  id: '8',
  scientificName: 'Baphia nitida',
  commonName: {
    en: 'Okoue',
    fr: 'Okoué'
  },
  family: 'Fabaceae',
  description: {
    en: 'Baphia nitida, also known as Okoue or Camwood in English, is a valuable medicinal plant in West Africa, particularly in Côte d\'Ivoire. This tropical tree or shrub is famous for its red wood that serves as a natural dye, but also for its numerous medicinal properties. It is used in traditional medicine to treat diarrhea, jaundice, asthma, joint pain, and much more. Okoue is an essential plant in the traditional Ivorian pharmacopoeia, both for treating diseases of the body and as spiritual protection in certain rituals. It is a small tree or shrub belonging to the Fabaceae family (subfamily Papilionoideae). It generally reaches between 2.5 and 10 meters in height. The bark is rough, reddish-brown, and produces a red exudate used as a natural dye. The leaves are simple, entire, oval, dark green and slightly glossy, measuring 8 to 12 cm long. It has small fragrant white papilionaceous (butterfly-shaped) flowers, and flat woody pods 6 to 9 cm long containing one or two hard seeds. The deep roots allow good resistance to drought. Okoue grows quickly and can adapt to different soil types, even in slightly dry climates.',
    fr: 'Le Baphia nitida, également connu sous le nom d\'Okoué ou Camwood en anglais, est une plante médicinale précieuse en Afrique de l\'Ouest, notamment en Côte d\'Ivoire. Cet arbre ou arbuste tropical est célèbre pour son bois rouge qui sert de colorant naturel, mais aussi pour ses nombreuses propriétés médicinales. Il est utilisé en médecine traditionnelle pour traiter la diarrhée, la jaunisse, l\'asthme, les douleurs articulaires, et bien plus encore. L\'Okoué est une plante essentielle dans la pharmacopée traditionnelle ivoirienne, à la fois pour soigner les maladies du corps et comme protection spirituelle dans certains rituels. C\'est un petit arbre ou arbuste appartenant à la famille des Fabacées (sous-famille des Papilionoideae). Il atteint généralement entre 2,5 et 10 mètres de hauteur. L\'écorce est rugueuse, brun-rougeâtre, et produit un exsudat rouge utilisé comme colorant naturel. Les feuilles sont simples, entières, ovales, de couleur vert foncé et légèrement lustrées, mesurant 8 à 12 cm de long. Il possède de petites fleurs blanches parfumées de type papilionacé (forme de papillon), et des gousses ligneuses aplaties de 6 à 9 cm de long contenant une ou deux graines dures. Les racines profondes permettent une bonne résistance à la sécheresse. L\'Okoué pousse rapidement et peut s\'adapter à différents types de sols, même en climat légèrement sec.'
  },
  medicinalUses: {
    en: ['Rheumatism', 'Headache', 'Jaundice', 'Malaria', 'Menstrual Pain', 'Wounds', 'Asthma', 'Yellow Fever', 'Diabetes', 'Snake Bite', 'Respiratory Ailment'],
    fr: ['Rhumatisme', 'Maux de tête', 'Jaunisse', 'Paludisme', 'Douleurs menstruelles', 'Plaies', 'Asthme', 'Fièvre jaune', 'Diabète', 'Morsure de serpent', 'Affection respiratoire']
  },
  remedies: {
    en: {
      preparation: 'Decoction: Boil 30g of bark or leaves in 500ml of water for 10-15 minutes. Let cool and drink a cup morning and evening.\nInfusion: Let the leaves steep in hot water for 10 minutes. Drink a cup after meals.\nPoultice: Crush the leaves or red wood. Apply directly to the skin in case of injury or inflammation.\nMaceration: Let the bark soak in cold water for 12 hours. Drink a small cup morning and evening.',
      dosage: 'Infusion: One cup after meals, twice a day.\nRoot decoction: One cup morning and evening for 3-7 days.\nMaceration: A small cup per day, for 3-5 days maximum.\nPoultice: Apply twice a day until completely healed.',
      precautions: [
        'Low toxicity: No significant toxicity reported at normal doses.',
        'Pregnancy: Not recommended for pregnant women due to possible effect on the hormonal system.',
        'Breastfeeding: Not recommended without medical advice.',
        'Allergies: Some people may show skin sensitivity to red wood.',
        'Drug interactions: Use caution with antidiabetic or hypotensive treatments.',
        'Consult a healthcare professional before using this plant regularly.'
      ]
    },
    fr: {
      preparation: 'Décoction: Faire bouillir 30 g d\'écorce ou de feuilles dans 500 ml d\'eau pendant 10 à 15 minutes. Laisser refroidir et boire une tasse matin et soir.\nInfusion: Faire tremper les feuilles dans de l\'eau chaude pendant 10 minutes. Boire une tasse après le repas.\nCataplasme: Écraser les feuilles ou le bois rouge. Appliquer directement sur la peau en cas de blessure ou d\'inflammation.\nMacération: Laisser tremper l\'écorce dans de l\'eau froide pendant 12 heures. Boire une petite tasse matin et soir.',
      dosage: 'Infusion : Une tasse après le repas, deux fois par jour.\nDécoction de racine : Une tasse matin et soir pendant 3 à 7 jours.\nMacération : Une petite tasse par jour, pendant 3 à 5 jours maximum.\nCataplasme : Appliquer deux fois par jour jusqu\'à guérison complète.',
      precautions: [
        'Toxicité faible : Aucune toxicité significative signalée à doses normales.',
        'Grossesse : Déconseillé aux femmes enceintes en raison de l\'effet possible sur le système hormonal.',
        'Allaitement : Déconseillé sans avis médical.',
        'Allergies : Certaines personnes peuvent présenter une sensibilité cutanée au bois rouge.',
        'Interactions médicamenteuses : Prudence avec les traitements antidiabétiques ou hypotenseurs.',
        'Consulter un professionnel de santé avant d\'utiliser cette plante régulièrement.'
      ]
    }
  },
  distribution: {
    en: 'Baphia nitida is an indigenous plant of West and Central Africa. In Côte d\'Ivoire, it is found mainly in the humid forests of the south of the country. It grows in gallery forests, forest edges, and marshy areas. It is often planted near dwellings for its shade and medicinal use. It prefers rich, well-drained soils, and constant humidity. It is also found in wooded savannas where humidity is sufficient. Okoue is also cultivated in botanical gardens and natural parks for its ecological and medicinal value.',
    fr: 'Baphia nitida est une plante indigène d\'Afrique de l\'Ouest et d\'Afrique centrale. En Côte d\'Ivoire, on le trouve principalement dans les forêts humides du sud du pays. Il pousse dans les forêts-galeries, les lisières forestières et les zones marécageuses. Il est souvent planté près des habitations pour son ombrage et son usage médicinal. Il préfère les sols riches, bien drainés, et une humidité constante. On le retrouve également dans les savanes arborées où l\'humidité est suffisante. L\'Okoué est également cultivé dans les jardins botaniques et les parcs naturels pour sa valeur écologique et médicinale.'
  },
  imageUrl: 'https://pharmanewsonline.com/wp-content/uploads/2023/08/African_sandalwood_Baphia_nitida-scaled-e1692465994977.jpg',
  thumbnailUrl: 'https://pharmanewsonline.com/wp-content/uploads/2023/08/African_sandalwood_Baphia_nitida-scaled-e1692465994977.jpg',
  sources: []
},
]