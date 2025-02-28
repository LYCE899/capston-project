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
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
  },
  {
    id: '2',
    scientificName: 'Anthocleista nobilis',
    commonName: {
      en: 'African Tree',
      fr: 'Arbre chou'
    },
    family: 'Gentianaceae',
    description: {
      en: 'A medicinal tree used in traditional African medicine.',
      fr: 'Un arbre médicinal utilisé dans la médecine traditionnelle africaine.'
    },
    medicinalUses: {
      en: ['Rheumatism', 'Headache', 'Jaundice'],
      fr: ['Rhumatisme', 'Maux de tête', 'Ictère']
    },
    remedies: {
      en: {
        preparation: 'Traditional preparation methods vary by use',
        dosage: 'Dosage depends on specific condition',
        precautions: ['Consult a traditional healer before use']
      },
      fr: {
        preparation: 'Les méthodes de préparation traditionnelles varient selon l\'utilisation',
        dosage: 'La posologie dépend de la condition spécifique',
        precautions: ['Consulter un guérisseur traditionnel avant utilisation']
      }
    },
    distribution: {
      en: 'Secondary formations, from south to center of Côte d\'Ivoire',
      fr: 'Formations secondaires, du sud au centre de la Côte d\'Ivoire'
    },
    imageUrl: 'https://inaturalist-open-data.s3.amazonaws.com/photos/77952144/original.jpeg',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
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
      en: 'A medicinal plant used in traditional African medicine.',
      fr: 'Une plante médicinale utilisée dans la médecine traditionnelle africaine.'
    },
    medicinalUses: {
      en: ['Blennorrhagia', 'Syphilis', 'Bilharzia'],
      fr: ['Blénnorragie', 'Syphilis', 'Bilharziose']
    },
    remedies: {
      en: {
        preparation: 'Traditional preparation methods vary by use',
        dosage: 'Dosage depends on specific condition',
        precautions: ['Consult a traditional healer before use']
      },
      fr: {
        preparation: 'Les méthodes de préparation traditionnelles varient selon l\'utilisation',
        dosage: 'La posologie dépend de la condition spécifique',
        precautions: ['Consulter un guérisseur traditionnel avant utilisation']
      }
    },
    distribution: {
      en: 'Natural forest, marginal forest, and wooded savanna',
      fr: 'Forêt naturelle, forêt marginale et dans la savane boisée'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
  },
  {
    id: '4',
    scientificName: 'Aristolochia ringens',
    commonName: {
      en: 'Gaping Dutchman\'s Pipe',
      fr: 'Aristoloche en gueule'
    },
    family: 'Aristolochiaceae',
    description: {
      en: 'A medicinal plant used in traditional African medicine.',
      fr: 'Une plante médicinale utilisée dans la médecine traditionnelle africaine.'
    },
    medicinalUses: {
      en: ['Body swelling', 'Joint pain'],
      fr: ['Gonflement du corps', 'Douleurs articulaires']
    },
    remedies: {
      en: {
        preparation: 'Traditional preparation methods vary by use',
        dosage: 'Dosage depends on specific condition',
        precautions: ['Consult a traditional healer before use']
      },
      fr: {
        preparation: 'Les méthodes de préparation traditionnelles varient selon l\'utilisation',
        dosage: 'La posologie dépend de la condition spécifique',
        precautions: ['Consulter un guérisseur traditionnel avant utilisation']
      }
    },
    distribution: {
      en: 'Cultivated as an ornamental plant in the south of Côte d\'Ivoire',
      fr: 'Cultivée comme plante ornementale au sud de la Côte d\'Ivoire'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
  },
  {
    id: '5',
    scientificName: 'Baphia nitida',
    commonName: {
      en: 'Okoue',
      fr: 'Okoué'
    },
    family: 'Fabaceae',
    description: {
      en: 'A medicinal plant used in traditional African medicine.',
      fr: 'Une plante médicinale utilisée dans la médecine traditionnelle africaine.'
    },
    medicinalUses: {
      en: ['Asthma', 'Yellow fever', 'Diabetes', 'Snake bite', 'Respiratory ailment'],
      fr: ['Asthme', 'Fièvre jaune', 'Diabète', 'Morsure de serpent', 'Affection respiratoire']
    },
    remedies: {
      en: {
        preparation: 'Traditional preparation methods vary by use',
        dosage: 'Dosage depends on specific condition',
        precautions: ['Consult a traditional healer before use']
      },
      fr: {
        preparation: 'Les méthodes de préparation traditionnelles varient selon l\'utilisation',
        dosage: 'La posologie dépend de la condition spécifique',
        precautions: ['Consulter un guérisseur traditionnel avant utilisation']
      }
    },
    distribution: {
      en: 'Understory in the wettest parts of coastal regions',
      fr: 'Sous-étage dans les parties les plus humides des régions côtières'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
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
      en: 'A medicinal plant used in traditional African medicine.',
      fr: 'Une plante médicinale utilisée dans la médecine traditionnelle africaine.'
    },
    medicinalUses: {
      en: ['Diarrhea', 'Fever', 'Chickenpox', 'Jaundice'],
      fr: ['Diarrhée', 'Fièvre', 'Varicelle', 'Ictère']
    },
    remedies: {
      en: {
        preparation: 'Traditional preparation methods vary by use',
        dosage: 'Dosage depends on specific condition',
        precautions: ['Consult a traditional healer before use']
      },
      fr: {
        preparation: 'Les méthodes de préparation traditionnelles varient selon l\'utilisation',
        dosage: 'La posologie dépend de la condition spécifique',
        precautions: ['Consulter un guérisseur traditionnel avant utilisation']
      }
    },
    distribution: {
      en: 'Characteristic species of savannas',
      fr: 'Espèce caractéristique des savanes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
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
      en: 'A medicinal plant used in traditional African medicine.',
      fr: 'Une plante médicinale utilisée dans la médecine traditionnelle africaine.'
    },
    medicinalUses: {
      en: ['Edema', 'Healing', 'Cholagogue'],
      fr: ['Œdème', 'Cicatrisante', 'Cholagogue']
    },
    remedies: {
      en: {
        preparation: 'Traditional preparation methods vary by use',
        dosage: 'Dosage depends on specific condition',
        precautions: ['Consult a traditional healer before use']
      },
      fr: {
        preparation: 'Les méthodes de préparation traditionnelles varient selon l\'utilisation',
        dosage: 'La posologie dépend de la condition spécifique',
        precautions: ['Consulter un guérisseur traditionnel avant utilisation']
      }
    },
    distribution: {
      en: 'Gallery forest in savanna regions',
      fr: 'Forêt-galerie dans les régions de savane'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
  },
  {
    id: '8',
    scientificName: 'Blighia unijugata',
    commonName: {
      en: 'Bebi',
      fr: 'Bébi'
    },
    family: 'Sapindaceae',
    description: {
      en: 'A medicinal plant used in traditional African medicine.',
      fr: 'Une plante médicinale utilisée dans la médecine traditionnelle africaine.'
    },
    medicinalUses: {
      en: ['Oxytocic', 'Fever', 'Rheumatism'],
      fr: ['Ocytocique', 'Fièvre', 'Rhumatisme']
    },
    remedies: {
      en: {
        preparation: 'Traditional preparation methods vary by use',
        dosage: 'Dosage depends on specific condition',
        precautions: ['Consult a traditional healer before use']
      },
      fr: {
        preparation: 'Les méthodes de préparation traditionnelles varient selon l\'utilisation',
        dosage: 'La posologie dépend de la condition spécifique',
        precautions: ['Consulter un guérisseur traditionnel avant utilisation']
      }
    },
    distribution: {
      en: 'Plant of forest zone',
      fr: 'Plante de zone forestière'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300',
    sources: ['PLANTES ET OUTILS DE LA MEDECINE TRADITIONNELLE EN CÔTE D\'IVOIRE, Programme National de la Promotion de la Médecine Traditionnelle, Côte d\'Ivoire']
  }
];