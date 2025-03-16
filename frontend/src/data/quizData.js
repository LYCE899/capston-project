// src/data/quizData.js
export const quizzes = [
  {
    id: "plants-quiz",
    title: {
      en: "African Medicinal Plants",
      fr: "Plantes médicinales africaines"
    },
    description: {
      en: "Test your knowledge about medicinal plants used in Côte d'Ivoire",
      fr: "Testez vos connaissances sur les plantes médicinales utilisées en Côte d'Ivoire"
    },
    difficulty: "easy",
    category: "plants",
    timeInMinutes: 5,
    questions: [
      {
        id: "plants-q1",
        question: {
          en: "Which plant is known in Côte d'Ivoire for its effectiveness against malaria?",
          fr: "Quelle plante est connue en Côte d'Ivoire pour son efficacité contre le paludisme ?"
        },
        options: {
          en: [
            "Anthocleista nobilis (Cabbage tree)",
            "Baphia nitida (Camwood)",
            "Blighia unijugata (Bébi)",
            "Bridelia ferruginea (Séa)"
          ],
          fr: [
            "Anthocleista nobilis (Arbre chou)",
            "Baphia nitida (Okoué)",
            "Blighia unijugata (Bébi)",
            "Bridelia ferruginea (Séa)"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Anthocleista nobilis is traditionally used as an antimalarial thanks to its active compounds with antiparasitic activity. The leaves are boiled and consumed as a decoction to prevent and treat malaria.",
          fr: "L'Anthocleista nobilis est utilisée traditionnellement comme antipaludéen grâce à ses composés actifs ayant une activité antiparasitaire. Les feuilles sont bouillies et consommées en décoction pour prévenir et traiter le paludisme."
        }
      },
      {
        id: "plants-q2",
        question: {
          en: "Which plant is used to treat cough as a decoction?",
          fr: "Quelle plante est utilisée pour traiter la toux en décoction ?"
        },
        options: {
          en: [
            "Guava leaf",
            "Djeka leaf",
            "Honey and lemon",
            "Hibiscus flower"
          ],
          fr: [
            "Feuille de goyave",
            "Feuille de djeka",
            "Miel et citron",
            "Fleur d'hibiscus"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Guava leaves are recognized for their antiseptic and anti-inflammatory properties. A decoction of the leaves in hot water effectively relieves cough.",
          fr: "Les feuilles de goyave sont reconnues pour leurs propriétés antiseptiques et anti-inflammatoires. Une décoction des feuilles dans de l'eau chaude permet de soulager efficacement la toux."
        }
      },
      {
        id: "plants-q3",
        question: {
          en: "Which plant is used for muscle pain?",
          fr: "Quelle plante est utilisée pour les douleurs musculaires ?"
        },
        options: {
          en: [
            "Alstonia boonei (Stoolwood)",
            "Blighia unijugata (Bébi)",
            "Bridelia ferruginea (Séa)",
            "Anthocleista nobilis (Cabbage tree)"
          ],
          fr: [
            "Alstonia boonei (Soula fusain)",
            "Blighia unijugata (Bébi)",
            "Bridelia ferruginea (Séa)",
            "Anthocleista nobilis (Arbre chou)"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Stoolwood is known for its anti-inflammatory and analgesic properties. A decoction of the leaves or bark is often used as a massage to relieve muscle pain.",
          fr: "Le Soula fusain est connu pour ses propriétés anti-inflammatoires et analgésiques. Une décoction des feuilles ou de l'écorce est souvent utilisée en massage pour soulager les douleurs musculaires."
        }
      },
      {
        id: "plants-q4",
        question: {
          en: "Which plant is used to relieve headaches?",
          fr: "Quelle plante est utilisée pour soulager les maux de tête ?"
        },
        options: {
          en: [
            "Baphia nitida (Camwood)",
            "Bridelia ferruginea (Séa)",
            "Anthocleista nobilis (Cabbage tree)",
            "Djeka leaf"
          ],
          fr: [
            "Baphia nitida (Okoué)",
            "Bridelia ferruginea (Séa)",
            "Anthocleista nobilis (Arbre chou)",
            "Feuille de djeka"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Baphia nitida leaves are crushed and applied as a poultice on the forehead to relieve headaches.",
          fr: "Les feuilles de Baphia nitida sont écrasées et appliquées en cataplasme sur le front pour soulager les maux de tête."
        }
      }
    ]
  },
  {
    id: "treatments-quiz",
    title: {
      en: "Traditional African Treatments",
      fr: "Traitements traditionnels africains"
    },
    description: {
      en: "Learn about traditional treatments and preparation methods in Côte d'Ivoire",
      fr: "Découvrez les traitements traditionnels et méthodes de préparation en Côte d'Ivoire"
    },
    difficulty: "medium",
    category: "treatments",
    timeInMinutes: 4,
    questions: [
      {
        id: "treatments-q1",
        question: {
          en: "What is the recommended duration for boiling a decoction of guava leaves?",
          fr: "Quelle est la durée recommandée pour faire bouillir une décoction de feuilles de goyave ?"
        },
        options: {
          en: [
            "5 minutes",
            "10 minutes",
            "20 minutes",
            "30 minutes"
          ],
          fr: [
            "5 minutes",
            "10 minutes",
            "20 minutes",
            "30 minutes"
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "A decoction of guava leaves should be boiled for about 10 minutes to release the active principles of the plant.",
          fr: "Une décoction de feuilles de goyave doit être bouillie pendant environ 10 minutes pour libérer les principes actifs de la plante."
        }
      },
      {
        id: "treatments-q2",
        question: {
          en: "Which plant is often used as an infusion to calm indigestion?",
          fr: "Quelle plante est souvent utilisée en infusion pour calmer une indigestion ?"
        },
        options: {
          en: [
            "Anthocleista nobilis (Cabbage tree)",
            "Djeka leaf",
            "Ginger root",
            "Neem leaf"
          ],
          fr: [
            "Anthocleista nobilis (Arbre chou)",
            "Feuille de djeka",
            "Racine de gingembre",
            "Feuille de neem"
          ]
        },
        correctAnswerIndex: 2,
        explanation: {
          en: "Ginger is recognized for its digestive and soothing properties. An infusion of ginger root helps relieve digestive disorders.",
          fr: "Le gingembre est reconnu pour ses propriétés digestives et apaisantes. Une infusion de racine de gingembre aide à soulager les troubles digestifs."
        }
      },
      {
        id: "treatments-q3",
        question: {
          en: "How is a clay poultice prepared?",
          fr: "Comment est préparé un cataplasme d'argile ?"
        },
        options: {
          en: [
            "Mix with cold water and apply directly.",
            "Mix with hot water, add essential oils and let dry completely.",
            "Mix with honey and salt.",
            "Crush and boil."
          ],
          fr: [
            "Mélanger avec de l'eau froide et appliquer directement.",
            "Mélanger avec de l'eau chaude, ajouter des huiles essentielles et laisser sécher complètement.",
            "Mélanger avec du miel et du sel.",
            "Écraser et faire bouillir."
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "The poultice should be mixed with hot water for better absorption of the active ingredients. Let it dry partially to avoid excessive dehydration of the skin.",
          fr: "Le cataplasme doit être mélangé avec de l'eau chaude pour une meilleure absorption des principes actifs. Laisser sécher partiellement pour éviter une déshydratation excessive de la peau."
        }
      }
    ]
  },
  {
    id: "precautions-quiz",
    title: {
      en: "Precautions with Medicinal Plants",
      fr: "Précautions d'usage des plantes"
    },
    description: {
      en: "Learn about important precautions when using traditional medicinal plants",
      fr: "Apprenez les précautions importantes lors de l'utilisation des plantes médicinales traditionnelles"
    },
    difficulty: "easy",
    category: "safety",
    timeInMinutes: 3,
    questions: [
      {
        id: "precautions-q1",
        question: {
          en: "Which plant is not recommended for pregnant women?",
          fr: "Quelle plante est déconseillée pour les femmes enceintes ?"
        },
        options: {
          en: [
            "Neem leaf",
            "Guava leaf",
            "Alstonia boonei (Stoolwood)",
            "Hibiscus flower"
          ],
          fr: [
            "Feuille de neem",
            "Feuille de goyave",
            "Alstonia boonei (Soula fusain)",
            "Fleur d'hibiscus"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Neem leaf contains active compounds that can cause uterine contractions, which is dangerous during pregnancy.",
          fr: "La feuille de neem contient des composés actifs pouvant provoquer des contractions utérines, ce qui est dangereux pendant la grossesse."
        }
      },
      {
        id: "precautions-q2",
        question: {
          en: "What is the main precaution when taking ginger decoction?",
          fr: "Quelle est la principale précaution lors de la prise de décoction de gingembre ?"
        },
        options: {
          en: [
            "Do not take on an empty stomach.",
            "Drink it with lemon.",
            "Mix it with honey.",
            "Take it before sleeping."
          ],
          fr: [
            "Ne pas le prendre à jeun.",
            "Le boire avec du citron.",
            "Le mélanger avec du miel.",
            "Le prendre avant de dormir."
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Ginger can cause stomach irritation if consumed on an empty stomach.",
          fr: "Le gingembre peut provoquer une irritation de l'estomac s'il est consommé à jeun."
        }
      }
    ]
  },
  {
    id: "true-false-quiz",
    title: {
      en: "General Knowledge on Remedies",
      fr: "Connaissances générales sur les remèdes"
    },
    description: {
      en: "Test your knowledge with these true or false questions about traditional remedies",
      fr: "Testez vos connaissances avec ces questions vrai ou faux sur les remèdes traditionnels"
    },
    difficulty: "easy",
    category: "general",
    timeInMinutes: 2,
    questions: [
      {
        id: "true-false-q1",
        question: {
          en: "Ginger is used to treat digestive disorders.",
          fr: "Le gingembre est utilisé pour soigner les troubles digestifs."
        },
        options: {
          en: [
            "True",
            "False"
          ],
          fr: [
            "Vrai",
            "Faux"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Ginger stimulates digestion and soothes nausea.",
          fr: "Le gingembre stimule la digestion et apaise les nausées."
        }
      },
      {
        id: "true-false-q2",
        question: {
          en: "Clay should always be allowed to dry completely on the skin.",
          fr: "L'argile doit toujours être laissée sécher complètement sur la peau."
        },
        options: {
          en: [
            "True",
            "False"
          ],
          fr: [
            "Vrai",
            "Faux"
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "Completely dry clay can cause skin dehydration.",
          fr: "Une argile complètement sèche peut provoquer une déshydratation cutanée."
        }
      }
    ]
  }
];