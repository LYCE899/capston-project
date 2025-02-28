// src/data/quizData.js
export const quizzes = [
  {
    id: "quiz1",
    title: {
      en: "Discovering African Medicinal Plants",
      fr: "À la découverte des plantes médicinales africaines"
    },
    description: {
      en: "Test your knowledge about traditional African medicinal plants and their uses",
      fr: "Testez vos connaissances sur les plantes médicinales traditionnelles africaines et leurs utilisations"
    },
    difficulty: "mixed",
    category: "general",
    timeInMinutes: 10,
    questions: [
      {
        id: "q1",
        question: {
          en: "Which plant is traditionally called 'Djeka' in Côte d'Ivoire?",
          fr: "Quelle plante est traditionnellement appelée 'Djéka' en Côte d'Ivoire ?"
        },
        options: {
          en: [
            "Alchornea cordifolia",
            "Anthocleista nobilis",
            "Antidesma venosum",
            "Baphia nitida"
          ],
          fr: [
            "Alchornea cordifolia",
            "Anthocleista nobilis",
            "Antidesma venosum",
            "Baphia nitida"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Alchornea cordifolia is known as 'Djeka' and is widely used in traditional medicine for intimate hygiene and post-partum care.",
          fr: "Alchornea cordifolia est connue sous le nom de 'Djéka' et est largement utilisée en médecine traditionnelle pour l'hygiène intime et les soins post-partum."
        }
      },
      {
        id: "q2",
        question: {
          en: "Which of these medicinal uses is NOT associated with Alchornea cordifolia (Djeka)?",
          fr: "Laquelle de ces utilisations médicinales n'est PAS associée à Alchornea cordifolia (Djéka) ?"
        },
        options: {
          en: [
            "Treatment for diabetes",
            "Intimate hygiene",
            "Post-partum care",
            "Iron deficiency"
          ],
          fr: [
            "Traitement du diabète",
            "Hygiène intime",
            "Soins post-partum",
            "Carence en fer"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "While Djeka (Alchornea cordifolia) has many medicinal uses including intimate hygiene, post-partum care, and treating iron deficiency, it is not traditionally used to treat diabetes.",
          fr: "Bien que le Djéka (Alchornea cordifolia) ait de nombreux usages médicinaux, notamment l'hygiène intime, les soins post-partum et le traitement des carences en fer, il n'est pas traditionnellement utilisé pour traiter le diabète."
        }
      },
      {
        id: "q3",
        question: {
          en: "Which plant is used to treat asthma, yellow fever, and snake bites in traditional African medicine?",
          fr: "Quelle plante est utilisée pour traiter l'asthme, la fièvre jaune et les morsures de serpent dans la médecine traditionnelle africaine ?"
        },
        options: {
          en: [
            "Bridelia ferruginea",
            "Baphia nitida",
            "Antidesma venosum",
            "Aristolochia ringens"
          ],
          fr: [
            "Bridelia ferruginea",
            "Baphia nitida",
            "Antidesma venosum",
            "Aristolochia ringens"
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "Baphia nitida (Okoue) is used in traditional medicine to treat asthma, yellow fever, diabetes, and snake bites.",
          fr: "Baphia nitida (Okoué) est utilisée en médecine traditionnelle pour traiter l'asthme, la fièvre jaune, le diabète et les morsures de serpent."
        }
      },
      {
        id: "q4",
        question: {
          en: "What is the correct method for preparing Djeka (Alchornea cordifolia) for medicinal use?",
          fr: "Quelle est la méthode correcte pour préparer le Djéka (Alchornea cordifolia) à usage médicinal ?"
        },
        options: {
          en: [
            "Crush the leaves and apply directly to the skin",
            "Boil the leaves for 15 minutes and let infuse for at least 30 minutes",
            "Dry the leaves and smoke them",
            "Mix the roots with honey and consume immediately"
          ],
          fr: [
            "Écraser les feuilles et les appliquer directement sur la peau",
            "Faire bouillir les feuilles 15 minutes et laisser infuser au moins 30 minutes",
            "Sécher les feuilles et les fumer",
            "Mélanger les racines avec du miel et consommer immédiatement"
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "The traditional method for preparing Djeka involves boiling the leaves for about 15 minutes, then removing from heat and letting it infuse for at least 30 minutes before filtering.",
          fr: "La méthode traditionnelle de préparation du Djéka consiste à faire bouillir les feuilles pendant environ 15 minutes, puis à retirer du feu et à laisser infuser pendant au moins 30 minutes avant de filtrer."
        }
      },
      {
        id: "q5",
        question: {
          en: "Which of these plants is primarily found in the savanna regions of Côte d'Ivoire?",
          fr: "Laquelle de ces plantes se trouve principalement dans les régions de savane de Côte d'Ivoire ?"
        },
        options: {
          en: [
            "Anthocleista nobilis",
            "Bridelia ferruginea",
            "Baphia nitida",
            "Alchornea cordifolia"
          ],
          fr: [
            "Anthocleista nobilis",
            "Bridelia ferruginea",
            "Baphia nitida",
            "Alchornea cordifolia"
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "Bridelia ferruginea (Sea) is a characteristic species of savannas in Côte d'Ivoire.",
          fr: "Bridelia ferruginea (Séa) est une espèce caractéristique des savanes en Côte d'Ivoire."
        }
      },
      {
        id: "q6",
        question: {
          en: "Which precaution should NOT be taken when using Djeka (Alchornea cordifolia)?",
          fr: "Quelle précaution ne doit PAS être prise lors de l'utilisation du Djéka (Alchornea cordifolia) ?"
        },
        options: {
          en: [
            "Avoid using for children under 15 years",
            "Store in a cool, dry place away from light",
            "Use daily for extended periods",
            "Avoid using during pregnancy"
          ],
          fr: [
            "Éviter d'utiliser pour les enfants de moins de 15 ans",
            "Conserver dans un endroit frais et sec, à l'abri de la lumière",
            "Utiliser quotidiennement pendant de longues périodes",
            "Éviter d'utiliser pendant la grossesse"
          ]
        },
        correctAnswerIndex: 2,
        explanation: {
          en: "Using Djeka daily for extended periods is not recommended. It should be used with moderation, and you should consult a doctor for any prolonged use.",
          fr: "L'utilisation quotidienne du Djéka pendant de longues périodes n'est pas recommandée. Il doit être utilisé avec modération, et vous devriez consulter un médecin pour tout usage prolongé."
        }
      },
      {
        id: "q7",
        question: {
          en: "Which family does Alchornea cordifolia (Djeka) belong to?",
          fr: "À quelle famille appartient Alchornea cordifolia (Djéka) ?"
        },
        options: {
          en: [
            "Euphorbiaceae",
            "Gentianaceae",
            "Phyllanthaceae",
            "Fabaceae"
          ],
          fr: [
            "Euphorbiaceae",
            "Gentianaceae",
            "Phyllanthaceae",
            "Fabaceae"
          ]
        },
        correctAnswerIndex: 0,
        explanation: {
          en: "Alchornea cordifolia (Djeka) belongs to the Euphorbiaceae family, which includes many other medicinal plants.",
          fr: "Alchornea cordifolia (Djéka) appartient à la famille des Euphorbiaceae, qui comprend de nombreuses autres plantes médicinales."
        }
      },
      {
        id: "q8",
        question: {
          en: "Which plant is used for treating diarrhea, fever, and chickenpox in traditional medicine?",
          fr: "Quelle plante est utilisée pour traiter la diarrhée, la fièvre et la varicelle en médecine traditionnelle ?"
        },
        options: {
          en: [
            "Berlinia grandiflora",
            "Bridelia ferruginea",
            "Blighia unijugata",
            "Antidesma venosum"
          ],
          fr: [
            "Berlinia grandiflora",
            "Bridelia ferruginea",
            "Blighia unijugata",
            "Antidesma venosum"
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "Bridelia ferruginea (Sea) is traditionally used to treat diarrhea, fever, chickenpox, and jaundice.",
          fr: "Bridelia ferruginea (Séa) est traditionnellement utilisée pour traiter la diarrhée, la fièvre, la varicelle et l'ictère."
        }
      },
      {
        id: "q9",
        question: {
          en: "In which part of Côte d'Ivoire is Alchornea cordifolia (Djeka) most commonly found?",
          fr: "Dans quelle partie de la Côte d'Ivoire trouve-t-on le plus communément Alchornea cordifolia (Djéka) ?"
        },
        options: {
          en: [
            "Only in the northern savanna",
            "Only along the coastal regions",
            "Only in the western mountains",
            "Throughout all regions of Côte d'Ivoire"
          ],
          fr: [
            "Uniquement dans la savane du nord",
            "Uniquement le long des régions côtières",
            "Uniquement dans les montagnes de l'ouest",
            "Dans toutes les régions de la Côte d'Ivoire"
          ]
        },
        correctAnswerIndex: 3,
        explanation: {
          en: "Alchornea cordifolia (Djeka) is widespread and can be found throughout all regions of Côte d'Ivoire.",
          fr: "Alchornea cordifolia (Djéka) est très répandu et peut être trouvé dans toutes les régions de la Côte d'Ivoire."
        }
      },
      {
        id: "q10",
        question: {
          en: "Which plant is known for its healing properties for joint pain and body swelling?",
          fr: "Quelle plante est connue pour ses propriétés curatives contre les douleurs articulaires et les gonflements du corps ?"
        },
        options: {
          en: [
            "Antidesma venosum",
            "Aristolochia ringens",
            "Berlinia grandiflora",
            "Blighia unijugata"
          ],
          fr: [
            "Antidesma venosum",
            "Aristolochia ringens",
            "Berlinia grandiflora",
            "Blighia unijugata"
          ]
        },
        correctAnswerIndex: 1,
        explanation: {
          en: "Aristolochia ringens (Gaping Dutchman's Pipe) is used in traditional medicine to treat body swelling and joint pain.",
          fr: "Aristolochia ringens (Aristoloche en gueule) est utilisée en médecine traditionnelle pour traiter les gonflements du corps et les douleurs articulaires."
        }
      }
    ]
  }
];