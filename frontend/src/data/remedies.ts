import { Remedy } from '../types/Remedy';

// Remèdes traditionnels existants
export const remedies: Remedy[] = [
  {
    id: '1',
    title: {
      en: 'Traditional cough syrup ',
      fr: 'Sirop contre la toux traditionnel '
    },
    description: {
      en: 'A natural syrup made from honey, ginger, and local herbs that helps soothe coughs and sore throats.',
      fr: 'Un sirop naturel à base de miel, de gingembre et d\'herbes locales qui aide à soulager la toux et les maux de gorge.'
    },
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiffNAdoJANC954POSZzZlSsEw7CQTZn__Gdz4zvPCxvHfSKGA8gPGsESHWWXRyJK_uSrTgkYy8ZVBeMAURfspbseqRqo0qfuxx1MKv3Lo0LvmHW5EzVMGOC3QWRkl4SJ7HbAE-PBi1U98/s1600/Miel+pr+toux.jpg',
    plants: {
      en: ['Honey', 'Ginger', 'Local herbs'],
      fr: ['Miel', 'Gingembre', 'Herbes locales']
    },
    preparation: {
      en: 'Mix ingredients together and heat gently. Take one tablespoon as needed.',
      fr: 'Mélanger les ingrédients et chauffer doucement. Prendre une cuillère à soupe selon les besoins.'
    },
    advice: {
      en: 'Cough, Sore throat, Cold symptoms',
      fr: 'Toux, Maux de gorge, Symptômes du rhume'
    }
  },
  {
    id: '2',
    title: {
      en: 'Healing Clay Poultice',
      fr: 'Cataplasme d\'argile curatif'
    },
    description: {
      en: 'A traditional healing poultice made with medicinal clay and herbs for treating skin conditions and inflammation.',
      fr: 'Un cataplasme traditionnel fait d\'argile médicinale et d\'herbes pour traiter les affections cutanées et l\'inflammation.'
    },
    imageUrl: 'https://i-sam.unimedias.fr/2020/08/18/a-quoi-sert-un-cataplasme.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=501&w=890',
    plants: {
      en: ['Medicinal clay', 'Healing herbs', 'Essential oils'],
      fr: ['Argile médicinale', 'Herbes cicatrisantes', 'Huiles essentielles']
    },
    preparation: {
      en: 'Mix clay with water to form a paste. Add herbs and oils. Apply directly to affected areas and let dry.',
      fr: 'Mélanger l\'argile avec de l\'eau pour former une pâte. Ajouter les herbes et les huiles. Appliquer directement sur les zones affectées et laisser sécher.'
    },
    advice: {
      en: 'Skin conditions, Inflammation, Minor wounds',
      fr: 'Affections cutanées, Inflammation, Petites plaies'
    }
  },
  {
    id: '3',
    title: {
      en: 'Digestive Herbal Blend',
      fr: 'Mélange d\'herbes digestives'
    },
    description: {
      en: 'A carefully balanced blend of herbs known for their digestive properties and stomach-soothing effects.',
      fr: 'Un mélange équilibré d\'herbes connues pour leurs propriétés digestives et leurs effets apaisants sur l\'estomac.'
    },
    imageUrl: 'https://restaurantduchateau42.fr/wp-content/uploads/2024/09/melange-dherbes-de-provence-fait-maison-768x440.png',
    plants: {
      en: ['Mint', 'Chamomile', 'Fennel', 'Ginger'],
      fr: ['Menthe', 'Camomille', 'Fenouil', 'Gingembre']
    },
    preparation: {
      en: 'Steep herbs in hot water for 5-10 minutes. Drink after meals or when experiencing digestive discomfort.',
      fr: 'Infuser les herbes dans de l\'eau chaude pendant 5 à 10 minutes. Boire après les repas ou en cas d\'inconfort digestif.'
    },
    advice: {
      en: 'Indigestion, Bloating, Stomach ache, Nausea',
      fr: 'Indigestion, Ballonnements, Maux d\'estomac, Nausées'
    }
  },
  {
    id: '4',
    title: {
      en: 'Joint Pain Relief Oil',
      fr: 'Huile de soulagement des douleurs articulaires'
    },
    description: {
      en: 'A therapeutic oil blend incorporating traditional African herbs known for their anti-inflammatory properties.',
      fr: 'Un mélange d\'huiles thérapeutiques incorporant des herbes africaines traditionnelles connues pour leurs propriétés anti-inflammatoires.'
    },
    imageUrl: 'https://ileauxepices.com/blog/wp-content/uploads/2017/04/miel-au-curcuma.jpg',
    plants: {
      en: ['Turmeric', 'Ginger', 'Pepper', 'Carrier oils'],
      fr: ['Curcuma', 'Gingembre', 'Poivre', 'Huiles de support']
    },
    preparation: {
      en: 'Infuse herbs in warm oil for several hours. Strain and apply to painful joints with gentle massage.',
      fr: 'Infuser les herbes dans de l\'huile tiède pendant plusieurs heures. Filtrer et appliquer sur les articulations douloureuses avec un massage doux.'
    },
    advice: {
      en: 'Joint pain, Arthritis, Muscle stiffness',
      fr: 'Douleurs articulaires, Arthrite, Raideurs musculaires'
    }
  },
  {
    id: '5',
    title: {
      en: 'Calming Sleep Blend',
      fr: 'Mélange apaisant pour le sommeil'
    },
    description: {
      en: 'A gentle blend of traditional herbs known for their calming properties and ability to promote restful sleep.',
      fr: 'Un doux mélange d\'herbes traditionnelles connues pour leurs propriétés apaisantes et leur capacité à favoriser un sommeil réparateur.'
    },
    imageUrl: 'https://img.freepik.com/vecteurs-libre/garcon-africain-dormant-reve-bulle-vide_1308-134829.jpg',
    plants: {
      en: ['Lavender', 'Valerian', 'Chamomile', 'Passionflower'],
      fr: ['Lavande', 'Valériane', 'Camomille', 'Passiflore']
    },
    preparation: {
      en: 'Brew herbs in hot water for 10 minutes. Drink one cup 30 minutes before bedtime.',
      fr: 'Infuser les herbes dans de l\'eau chaude pendant 10 minutes. Boire une tasse 30 minutes avant le coucher.'
    },
    advice: {
      en: 'Insomnia, Anxiety, Restlessness, Stress',
      fr: 'Insomnie, Anxiété, Agitation, Stress'
    }
  },
];

// Nouveaux remèdes composés (basés sur les informations du guérisseur)
export const compositeRemedies: Remedy[] = [
  {
    id: 'comp1',
    title: {
      en: 'Infection Treatment',
      fr: 'Traitement des infections'
    },
    description: {
      en: 'A powerful blend of guava leaves and Djeka to treat all types of infections including skin and urinary infections.',
      fr: 'Un mélange puissant de feuilles de goyave et de Djeka pour traiter tous types d\'infections notamment cutanées et urinaires.'
    },
    imageUrl: 'https://res.cloudinary.com/void-elsan/image/upload/f_auto/q_90/v1/inline-images/infection%20urinaire%20%281%29.jpg?_a=BAAAV6Bs',
    plants: {
      en: ['Guava leaves', 'Djeka'],
      fr: ['Feuilles de goyave', 'Djeka']
    },
    preparation: {
      en: 'Boil together and drink.',
      fr: 'Faire bouillir ensemble et boire.'
    },
    advice: {
      en: 'Skin infections, Urinary infections',
      fr: 'Infections cutanées, Infections urinaires'
    },
    isComposite: true
  },
 
    {
      id: 'comp2',
      title: {
        en: 'Koko Treatment (Hemorrhoids)',
        fr: 'Traitement du Koko (Hémorroïdes)'
      },
      description: {
        en: 'A traditional remedy combining Alchornea cordifolia, Rauvolfia vomitoria, and Fagara zanthoxyloides to relieve pain, reduce inflammation, and promote healing of Koko (hemorrhoids).',
        fr: 'Un remède traditionnel combinant Alchornea cordifolia, Rauvolfia vomitoria et Fagara zanthoxyloides pour soulager la douleur, réduire l\'inflammation et favoriser la guérison du Koko (hémorroïdes).'
      },
      imageUrl: 'https://www.pharma-gdd.com/cache/advice_original/fotolia-178102195-xs.jpg',
      plants: {
        en: [
          'Alchornea cordifolia (Djalé) – Leaves – Anti-inflammatory and healing properties.',
          'Rauvolfia vomitoria (Akougnan) – Root bark – Reduces swelling and calms the tissues.',
          'Fagara zanthoxyloides (Fagara) – Roots – Natural antiseptic that accelerates healing.'
        ],
        fr: [
          'Alchornea cordifolia (Djalé) – Feuilles – Propriétés anti-inflammatoires et cicatrisantes.',
          'Rauvolfia vomitoria (Akougnan) – Écorce de racine – Réduit le gonflement et calme les tissus.',
          'Fagara zanthoxyloides (Fagara) – Racines – Antiseptique naturel qui accélère la guérison.'
        ]
      },
      preparation: {
        en: 
  `Preparation:  
  Wash all the plants thoroughly. Cut them into small pieces to help extract the active ingredients. Boil the mixture in 1 liter of water for 30 minutes. Strain the liquid to remove plant residues. Let it cool before use.
  
  Usage:  
  Drink one cup (about 250 ml) twice a day (morning and evening) for 7 days. Sit bath: Use the warm decoction for a sit bath for 15 minutes each day to reduce pain and inflammation.`,
  
        fr: 
  `Préparation :  
  Laver soigneusement toutes les plantes. Les couper en petits morceaux pour faciliter l'extraction des principes actifs. Faire bouillir le mélange dans 1 litre d'eau pendant 30 minutes. Filtrer le liquide pour retirer les résidus de plantes. Laisser refroidir avant utilisation.
  
  Utilisation :  
  Boire une tasse (environ 250 ml) deux fois par jour (matin et soir) pendant 7 jours. Bain de siège : Utiliser la décoction tiède pour un bain de siège pendant 15 minutes chaque jour pour calmer la douleur et réduire l'inflammation.`
      },
      advice: {
        en: 
  `- Avoid spicy foods, coffee, and alcohol during treatment.  
  - Drink plenty of water to improve digestion and reduce pressure on the affected area.  
  - If symptoms persist after 7 days, consult a healthcare professional.`,
  
        fr: 
  `- Éviter les aliments épicés, le café et l’alcool pendant le traitement.  
  - Boire beaucoup d’eau pour améliorer la digestion et réduire la pression sur la zone affectée.  
  - Si les symptômes persistent après 7 jours, consulter un professionnel de santé.`
      },
      isComposite: true,
      rating: 4.7,
      reviews: 34,
      popularity: 90
    },

  {
    id: 'comp3',
    title: {
      en: 'Stomach Wound Treatment',
      fr: 'Traitement des plaies de ventre'
    },
    description: {
      en: 'A complex mixture of five plants specifically designed to treat stomach wounds and internal pains.',
      fr: 'Un mélange complexe de cinq plantes spécifiquement conçu pour traiter les plaies de ventre et les douleurs internes.'
    },
    imageUrl: 'https://media.istockphoto.com/id/1462664398/fr/photo/menstruations-maux-destomac-et-mains-de-la-femme-dans-la-chambre-%C3%A0-coucher-pour.jpg?s=612x612&w=0&k=20&c=tJESkG9ZNWftXPXaW47t-9qpdgfh6LZkdx2zKmUG2WE=',
    plants: {
      en: ['Djara', 'Nairai', 'Djeka', 'African pepper', 'Ginger'],
      fr: ['Djara', 'Nairai', 'Djéka', 'Poivre africain', 'Gingembre']
    },
    preparation: {
      en: 'Boil together and drink.',
      fr: 'Faire bouillir ensemble et boire.'
    },
    advice: {
      en: 'Stomach wounds, Abdominal pain',
      fr: 'Plaies de ventre, Douleurs abdominales'
    },
    isComposite: true
  },
  {
    id: 'comp4',
    title: {
      en: 'Hernia Treatment',
      fr: 'Traitement de la hernie'
    },
    description: {
      en: 'A traditional blend specifically formulated to treat hernias using natural medicinal plants.',
      fr: 'Un mélange traditionnel spécifiquement formulé pour traiter les hernies en utilisant des plantes médicinales naturelles.'
    },
    imageUrl: 'https://info.medadom.com/hubfs/La%20hernie%20inguinale%20se%20manifeste%20au%20niveau%20de%20l%E2%80%99aine%2C%20principalement%20chez%20les%20hommes.jpg',
    plants: {
      en: ['Signant', 'African pepper', 'Ginger', 'Lemon root'],
      fr: ['Signant', 'Poivre africain', 'Gingembre', 'Racine de citron']
    },
    preparation: {
      en: 'Boil together and drink.',
      fr: 'Faire bouillir ensemble et boire.'
    },
    advice: {
      en: 'Hernia',
      fr: 'Hernie'
    },
    isComposite: true
  }
];

// Combinaison de tous les remèdes pour l'affichage
export const allRemedies: Remedy[] = [...remedies, ...compositeRemedies];