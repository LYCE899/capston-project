export interface Tip {
  type: string;
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  content: {
    en: string;
    fr: string;
  };
  imageUrl: string;
  category: {
    en: string;
    fr: string;
  };
}

// src/data/tips.ts
export const tips = [
  {
    id: 'tip1',
    title: {
      en: 'Clean Plants Before Use',
      fr: 'Nettoyer les plantes avant utilisation'
    },
    description: {
      en: 'Always clean medicinal plants thoroughly before use to remove dirt, pesticides, and bacteria. This helps improve the effectiveness of the remedy.',
      fr: 'Nettoyez toujours soigneusement les plantes médicinales avant utilisation pour éliminer la saleté, les pesticides et les bactéries. Cela permet d\'améliorer l\'efficacité du remède.'
    },
    advice: {
      en: 'Use clean water and a soft brush to remove impurities without damaging the plant.',
      fr: 'Utilisez de l\'eau propre et une brosse douce pour éliminer les impuretés sans abîmer la plante.'
    },
    mediaUrl: 'https://maison.20minutes.fr/wp-content/uploads/2020/11/nettoyer-plantes.jpg',
    type: 'image'
  },
  {
    id: 'tip2',
    title: {
      en: 'Mixing Plants Safely',
      fr: 'Mélanger les plantes en toute sécurité'
    },
    description: {
      en: 'Avoid mixing plants you are not familiar with, as some combinations can cause adverse effects.',
      fr: 'Évitez de mélanger des plantes que vous ne connaissez pas, car certaines combinaisons peuvent provoquer des effets indésirables.'
    },
    advice: {
      en: 'If you experience any side effects, stop immediately and consult a healthcare professional.',
      fr: 'Si vous ressentez des effets secondaires, arrêtez immédiatement et consultez un professionnel de santé.'
    },
    mediaUrl: 'https://images.squarespace-cdn.com/content/v1/5dce958ed647dc2422475bc3/1613380465332-7IUYPF6LRE2RTMB2PQ3Y/plantes-pour-tisane.jpg',
    type: 'image'
  },
  {
    id: 'tip3',
    title: {
      en: 'Consult a Traditional Healer',
      fr: 'Consultez un guérisseur traditionnel'
    },
    description: {
      en: 'If you have persistent health issues, consider consulting a traditional healer for a natural remedy.',
      fr: 'Si vous avez des problèmes de santé persistants, envisagez de consulter un guérisseur traditionnel pour un remède naturel.'
    },
    advice: {
      en: 'Combine modern and traditional medicine for a more effective approach.',
      fr: 'Combinez la médecine moderne et traditionnelle pour une approche plus efficace.'
    },
    mediaUrl: 'https://carnetsdevoyages.jeanlou.fr/Le_Village_de_Medecine_Traditionnelle_MBOKA_A_NZAMBE/files/village-traditionnel-mboka-a-nzambe-02-le-temple-principal-le-pretre-guerisseur-21e80dimg_210522146700_dxowtmk-131k-web.jpg',
    type: 'image'
  },
  {
    id: 'tip4',
    title: {
      en: 'Avoid Harmful Substances During Treatment',
      fr: 'Évitez les substances nocives pendant le traitement'
    },
    description: {
      en: 'Avoid alcohol, coffee, and spicy foods while using medicinal plants to avoid interactions.',
      fr: 'Évitez l\'alcool, le café et les aliments épicés lors de l\'utilisation de plantes médicinales pour éviter les interactions.'
    },
    advice: {
      en: 'Drink plenty of water and maintain a balanced diet.',
      fr: 'Buvez beaucoup d\'eau et maintenez une alimentation équilibrée.'
    },
    mediaUrl: 'https://sante-pratique-paris.fr/wp-content/uploads/2020/06/alcool-jeunes-adobestock-330661669-d0-b2-d1-8f-d1-87-d0-b5-d1-81-d0-bb-d0-b0-d0-b2-d0-b4-d1-83-d0-bc-d1-87-d0-b5-d0-b2.jpeg',
    type: 'image'
  },
  {
    id: 'tip5',
    title: {
      en: 'Boost Immunity with Natural Remedies',
      fr: 'Renforcez l\'immunité avec des remèdes naturels'
    },
    description: {
      en: 'Boost your immune system using natural herbs like ginger, garlic, and honey.',
      fr: 'Renforcez votre système immunitaire avec des herbes naturelles comme le gingembre, l\'ail et le miel.'
    },
    advice: {
      en: 'Prepare herbal teas and consume regularly for better health.',
      fr: 'Préparez des tisanes et consommez-les régulièrement pour une meilleure santé.'
    },
    mediaUrl: 'https://i-sam.unimedias.fr/2021/05/05/alimentation-systeme-immunitaire.jpeg?auto=format,compress&cs=tinysrgb&w=1200',
    type: 'image'
  }
];
