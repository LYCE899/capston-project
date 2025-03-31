import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Configuration du détecteur de langue
const languageDetectorOptions = {
  order: ['localStorage', 'navigator'],
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage']
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            plants: 'Plants',
            tips: 'Tips',
            remedies: 'Remedies',
            about: 'About',
            signIn: 'Sign In',
            signOut: 'Sign Out',
            quizzes: 'Quizzes'
          },
          footer: {
            tagline: 'Preserving and sharing the wisdom of ivorian traditional medicine.',
            navigation: 'Navigation',
            contact: 'Contact',
            followUs: 'Follow Us',
            copyright: '© {{year}} Afrimeds. All rights reserved.',
            privacyLink: 'Politique de confidentialité',
          },
          home: {
            title: 'Afrimeds',
            subtitle: 'Discover Traditional Medicine in Cote d\'Ivoire',
            exploreButton: 'Explore Plants',
            getStarted: 'Get Started',
            features: {
              title: 'Discover the ivorian Medicinal Plants Most commonly use in traditional medecinal',
              subtitle: 'Explore the rich heritage of traditional Ivorian medicine',
              database: {
                title: 'Extensive Plant Database',
                description: 'Access detailed information about hundreds of medicinal plants used in traditional medicine in Cote d\'Ivoire.'
              },
              remedies: {
                title: 'Traditional Remedies',
                description: 'Learn about traditional remedies and their applications.'
              },
              knowledge: {
                title: 'Expert Knowledge',
                description: 'Benefit from the wisdom of traditional healers and modern botanical research.'
              }
            },
            cta: {
              title: 'Ready to Explore Ivorian Medicine with Afrimeds?',
              subtitle: 'Join our community and discover the healing power of traditional plants.',
              button: 'Start Your Journey'
            }
          },
          search: {
            placeholder: 'Search medicinal plants...',
            noResults: 'No plants found',
            button: 'Search'
          },
          // Ajout des nouvelles traductions pour la section tips
          tips: {
            pageTitle: "Traditional Tips and Techniques",
            pageSubtitle: "Discover ancestral methods for using medicinal plants",
            readMore: "Read more",
            backToTips: "Back to tips",
            notFound: "Tip not found",
            description: "Description",
            additionalInfo: "Additional Information",
            bestPractices: "Best Practices",
            bestPractice1: "Ensure you follow sustainable harvesting guidelines",
            bestPractice2: "Consult with a traditional practitioner for appropriate dosages",
            bestPractice3: "Store preparations in a cool, dry place",
            relatedPlants: "Related Plants",
            relatedPlant1: "Aloe Vera",
            relatedPlant2: "Moringa",
            relatedPlant3: "Neem",
            previous: "Previous tip",
            next: "Next tip"
          },
          about: {
            title: 'About Afrimeds',
            description: 'We are dedicated to preserving and sharing knowledge about Ivorian medicinal plants, bridging traditional healing wisdom with modern understanding.',
            team: {
              title: 'Our Team',
              description: 'Our team consists of Ivorian traditional healers, botanists, and researchers working together to document and preserve medicinal plant knowledge.'
            },
            mission: {
              title: 'Our Mission',
              description: 'We strive to preserve and promote Ivorian  traditional medicine while making this valuable knowledge accessible to the world.'
            },
            contact: {
              title: 'Contact Us',
              description: 'Connect with us to share your knowledge of Ivorianmedicinal plants or to learn more about our mission.'
            },
            commitment: {
              title: 'Our Commitment to African Traditional Medicine',
              description: 'Afrimeds is committed to accurately representing Ivorian traditional medicine while respecting its cultural heritage. Our information is verified by traditional healers and botanical experts to ensure authenticity and reliability.'
            }
          },
          auth: {
            signIn: 'Sign in to your account',
            signInButton: 'Sign in',
            signInLink: 'Sign in',
            createAccount: 'Create a new account',
            signUpButton: 'Sign up',
            signUpLink: 'Sign up',
            email: 'Email address',
            password: 'Password',
            noAccount: "Don't have an account?",
            alreadyHaveAccount: 'Already have an account',
            acceptPolicy: "By creating an account, you accept our",
            privacyPolicy: "privacy policy"
          },
          privacy: {
            backToSignUp: "← Back to Sign Up"

          },
          plants: {
            details: {
              description: 'Description',
              distribution: 'Distribution',
              medicinalUses: 'Medicinal Uses',
              preparation: 'Preparation',
              dosage: 'Dosage',
              precautions: 'Precautions',
              sources: 'Sources',
              back: 'Back'
            }
          },
          quiz: {
            pageTitle: "Knowledge Quizzes",
            pageDescription: "Test your knowledge about medicinal plants",
            difficultyEasy: "Easy",
            difficultyMedium: "Medium",
            difficultyHard: "Hard",
            difficultyMixed: "Mixed",
            questions: "questions",
            minutes: "minutes",
            noQuizzes: "No quizzes available at the moment",
            errorLoading: "Unable to load quizzes. Please try again later.",
            notFound: "Quiz not found",
            previous: "Previous",
            next: "Next",
            submit: "Submit Quiz",
            questionCount: "Question {{current}}/{{total}}",
            results: "Quiz Results",
            correctAnswers: "{{correct}} correct answers out of {{total}} questions",
            backToQuizzes: "Back to Quizzes",
            errorSavingResults: "Unable to save results. Please try again.",
            // Nouvelles traductions pour l'interface améliorée
            homeTitle: "Test Your Knowledge of Ivorian Traditional Medicine",
            homeSubtitle: "Discover the secrets of medicinal plants and ancestral remedies from Côte d'Ivoire",
            randomQuiz: "Start a Random Quiz",
            viewHistory: "View My Results",
            selectCategory: "Select a Category",
            allCategories: "All Categories",
            categoryPlants: "Medicinal Plants",
            categoryTreatments: "Treatments",
            categorySafety: "Precautions",
            categoryGeneral: "General Knowledge",
            noQuizzesInCategory: "No quizzes available in this category",
            tryDifferentCategory: "Try selecting a different category",
            achievements: "Achievements & Rewards",
            earnBadges: "Complete quizzes to earn badges and unlock rewards",
            beginnerBadge: "Beginner",
            beginnerDescription: "Complete your first quiz",
            apprenticeBadge: "Apprentice",
            apprenticeDescription: "Score at least 70% on 5 different quizzes",
            expertBadge: "Expert",
            expertDescription: "Score 100% on 3 different quizzes",
            startQuiz: "Start Quiz",
            score: "Score: ",
            checkAnswer: "Check Answer",
            explanation: "Explanation",
            finish: "Finish Quiz",
            resultsTitle: "Quiz Results",
            badgeEarned: "Badge earned",
            timeTaken: "Time taken",
            difficulty: "Difficulty",
            reviewAnswers: "Review Your Answers",
            questionNumber: "Question {{number}}",
            yourAnswer: "Your answer",
            correctAnswer: "Correct answer",
            incorrectAnswer: "Incorrect answer",
            noAnswer: "No answer",
            points: "points",
            retakeQuiz: "Retake Quiz",
            submitting: "Submitting..."
          },
          quizResults: {
            pageTitle: "My Quiz Results",
            pageDescription: "See how well you've done on previous quizzes",
            noResults: "You haven't completed any quizzes yet",
            quizTaken: "Quiz Taken",
            score: "Score",
            date: "Date",
            viewDetails: "View Details",
            errorLoading: "Unable to load your quiz results. Please try again later."
          },
          common: {
            loading: "Loading..."
          },
          remedies: {
            backToRemedies: 'Back to remedies',
            traditionalRemedy: 'Traditional remedy',
            rateThisRemedy: 'Rate this remedy:',
            description: 'Description',
            usedPlants: 'Plants used',
            preparation: 'Preparation',
            treats: 'Treats',
            comments: 'Comments',
            shareExperience: 'Share your experience or ask a question...',
            publish: 'Publish',
            hoursAgo: '{{time}} hours ago',
            iLike: 'I like',
            rating: {
              outOf5: '({{count}} review)',
              outOf5_plural: '({{count}} reviews)'
            }
          }
        }
      },
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            plants: 'Plantes',
            tips: 'Conseils',
            remedies: 'Remèdes',
            about: 'À propos',
            signIn: 'Connexion',
            signOut: 'Déconnexion',
            quizzes: 'Quiz'
          },
          footer: {
            tagline: 'Préserver et partager la sagesse de la médecine traditionnelle en Cote d\'Ivoire.',
            navigation: 'Navigation',
            contact: 'Contact',
            followUs: 'Suivez-nous',
            copyright: '© {{year}} Afrimeds. Tous droits réservés.',
            privacyLink: "Politique de confidentialité"
          },
          home: {
            title: 'Afrimeds',
            subtitle: 'Découvrez la Médecine Traditionnelle in Cote d\'Ivoire',
            exploreButton: 'Explorer les Plantes',
            getStarted: 'Commencer',
            features: {
              title: 'Découvrez les Plantes Médicinales Ivoiriennes les plus couramment utilisees en medecines traditionnelles',
              subtitle: 'Explorez le riche patrimoine de la médecine traditionnelle Ivoirienne.',
              database: {
                title: 'Base de Données Extensive',
                description: 'Accédez à des informations détaillées sur des centaines de plantes médicinales utilisées dans la médecine traditionnelle ivoirienne.'
              },
              remedies: {
                title: 'Remèdes Traditionnels',
                description: 'Découvrez les remèdes traditionnels et leurs applications.'
              },
              knowledge: {
                title: 'Expertise',
                description: 'Bénéficiez de la sagesse des guérisseurs traditionnels et de la recherche botanique moderne.'
              }
            },
            cta: {
              title: 'Prêt à Explorer la Médecine Traditionnelle Ivoiriennes avec Afrimeds ?',
              subtitle: 'Rejoignez notre communauté et découvrez le pouvoir guérisseur des plantes traditionnelles.',
              button: 'Commencez Votre Voyage'
            }
          },
          search: {
            placeholder: 'Rechercher des plantes médicinales...',
            noResults: 'Aucune plante trouvée',
            button: 'Rechercher'
          },
          // Ajout des nouvelles traductions pour la section tips en français
          tips: {
            pageTitle: "Conseils et techniques traditionnels",
            pageSubtitle: "Découvrez des méthodes ancestrales pour utiliser les plantes médicinales",
            readMore: "Lire plus",
            backToTips: "Retour aux conseils",
            notFound: "Conseil non trouvé",
            description: "Description",
            additionalInfo: "Informations complémentaires",
            bestPractices: "Meilleures pratiques",
            bestPractice1: "Assurez-vous de suivre les directives de récolte durable",
            bestPractice2: "Consultez un praticien traditionnel pour les dosages appropriés",
            bestPractice3: "Conservez les préparations dans un endroit frais et sec",
            relatedPlants: "Plantes associées",
            relatedPlant1: "Aloe Vera",
            relatedPlant2: "Moringa",
            relatedPlant3: "Neem",
            previous: "Conseil précédent",
            next: "Conseil suivant"
          },
          about: {
            title: 'À Propos d\'Afrimeds',
            description: 'Nous nous consacrons à la préservation et au partage des connaissances sur les plantes médicinales Ivoiriennes, établissant un pont entre la sagesse traditionnelle et la compréhension moderne.',
            team: {
              title: 'Notre Équipe',
              description: 'Notre équipe est composée de guérisseurs traditionnels Ivoiriennes, de botanistes et de chercheurs travaillant ensemble pour documenter et préserver les connaissances sur les plantes médicinales.'
            },
            mission: {
              title: 'Notre Mission',
              description: 'Nous nous efforçons de préserver et de promouvoir la médecine traditionnelle Ivoirienne tout en rendant ces précieuses connaissances accessibles au monde entier.'
            },
            contact: {
              title: 'Contactez-nous',
              description: 'Connectez-vous avec nous pour partager vos connaissances sur les plantes médicinales ou pour en savoir plus sur notre mission.'
            },
            commitment: {
              title: 'Notre Engagement envers la Médecine Traditionnelle Ivoiriennes',
              description: 'Afrimeds s\'engage à représenter fidèlement la médecine traditionnelle ivoiriennes tout en respectant son héritage culturel. Nos informations sont vérifiées par des guérisseurs traditionnels et des experts en botanique pour garantir leur authenticité et leur fiabilité.'
            }
          },
          auth: {
            signIn: 'Connectez-vous à votre compte',
            signInButton: 'Se connecter',
            signInLink: 'Se connecter',
            createAccount: 'Créer un nouveau compte',
            signUpButton: "S'inscrire",
            signUpLink: "S'inscrire",
            email: 'Adresse e-mail',
            password: 'Mot de passe',
            noAccount: "Vous n'avez pas de compte ?",
            alreadyHaveAccount: 'Vous avez déjà un compte ?',
            acceptPolicy: "En créant un compte, vous acceptez notre",
            privacyPolicy: "politique de confidentialité"
          },
          privacy: {
            backToSignUp: "← Retour à l'inscription"
          
          },
          plants: {
            details: {
              description: 'Description',
              distribution: 'Distribution',
              medicinalUses: 'Utilisations Médicinales',
              preparation: 'Préparation',
              dosage: 'Posologie',
              precautions: 'Précautions',
              sources: 'Sources',
              back: 'Retour'
            }
          },
          quiz: {
            pageTitle: "Quiz de connaissances",
            pageDescription: "Testez vos connaissances sur les plantes médicinales",
            difficultyEasy: "Facile",
            difficultyMedium: "Moyen",
            difficultyHard: "Difficile",
            difficultyMixed: "Mixte",
            questions: "questions",
            minutes: "minutes",
            noQuizzes: "Aucun quiz disponible pour le moment",
            errorLoading: "Impossible de charger les quiz. Veuillez réessayer plus tard.",
            notFound: "Quiz non trouvé",
            previous: "Précédent",
            next: "Suivant",
            submit: "Terminer le quiz",
            questionCount: "Question {{current}}/{{total}}",
            results: "Résultats du quiz",
            correctAnswers: "{{correct}} réponses correctes sur {{total}} questions",
            backToQuizzes: "Retour aux quiz",
            errorSavingResults: "Impossible d'enregistrer les résultats. Veuillez réessayer.",
            // Nouvelles traductions pour l'interface améliorée
            homeTitle: "Testez vos connaissances sur la médecine traditionnelle ivoirienne",
            homeSubtitle: "Découvrez les secrets des plantes médicinales et des remèdes ancestraux de Côte d'Ivoire",
            randomQuiz: "Commencer un quiz aléatoire",
            viewHistory: "Voir mes résultats",
            selectCategory: "Sélectionner une catégorie",
            allCategories: "Toutes les catégories",
            categoryPlants: "Plantes médicinales",
            categoryTreatments: "Traitements",
            categorySafety: "Précautions",
            categoryGeneral: "Connaissances générales",
            noQuizzesInCategory: "Aucun quiz disponible dans cette catégorie",
            tryDifferentCategory: "Essayez de sélectionner une autre catégorie",
            achievements: "Réalisations et récompenses",
            earnBadges: "Complétez des quiz pour gagner des badges et débloquer des récompenses",
            beginnerBadge: "Débutant",
            beginnerDescription: "Complétez votre premier quiz",
            apprenticeBadge: "Apprenti",
            apprenticeDescription: "Obtenez au moins 70% sur 5 quiz différents",
            expertBadge: "Expert",
            expertDescription: "Obtenez 100% sur 3 quiz différents",
            startQuiz: "Commencer le quiz",
            score: "Score : ",
            checkAnswer: "Vérifier la réponse",
            explanation: "Explication",
            finish: "Terminer le quiz",
            resultsTitle: "Résultats du quiz",
            badgeEarned: "Badge obtenu",
            timeTaken: "Temps utilisé",
            difficulty: "Difficulté",
            reviewAnswers: "Révisez vos réponses",
            questionNumber: "Question {{number}}",
            yourAnswer: "Votre réponse",
            correctAnswer: "Réponse correcte",
            incorrectAnswer: "Réponse incorrecte",
            noAnswer: "Pas de réponse",
            points: "points",
            retakeQuiz: "Refaire le quiz",
            submitting: "Soumission en cours..."
          },
          quizResults: {
            pageTitle: "Mes résultats de quiz",
            pageDescription: "Consultez vos performances sur les quiz précédents",
            noResults: "Vous n'avez pas encore complété de quiz",
            quizTaken: "Quiz réalisé",
            score: "Score",
            date: "Date",
            viewDetails: "Voir les détails",
            errorLoading: "Impossible de charger vos résultats de quiz. Veuillez réessayer plus tard."
          },
          common: {
            loading: "Chargement..."
          },
          remedies: {
            backToRemedies: 'Retour aux remèdes',
            traditionalRemedy: 'Remède traditionnel',
            rateThisRemedy: 'Évaluez ce remède :',
            description: 'Description',
            usedPlants: 'Plantes utilisées',
            preparation: 'Préparation',
            treats: 'Traite',
            comments: 'Commentaires',
            shareExperience: 'Partagez votre expérience ou posez une question...',
            publish: 'Publier',
            hoursAgo: 'il y a environ {{time}} heures',
            iLike: 'j\'aime',
            rating: {
              outOf5: '({{count}} avis)',
              outOf5_plural: '({{count}} avis)'
            }
          }
        }
      }
    },
    // Définir explicitement la langue par défaut
    lng: localStorage.getItem('i18nextLng') || 'fr',
    fallbackLng: 'en',
    detection: languageDetectorOptions,
    interpolation: {
      escapeValue: false
    },
    // Désactiver le suspense pour éviter les problèmes de rendu
    react: {
      useSuspense: false
    }
  });

// Assurez-vous que la langue est définie sur l'élément HTML
document.documentElement.lang = i18n.language || 'fr';

// Force l'initialisation de la langue au chargement
const savedLanguage = localStorage.getItem('i18nextLng');
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
} else {
  localStorage.setItem('i18nextLng', 'fr');
  i18n.changeLanguage('fr');
}

export default i18n;