import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
            signOut: 'Sign Out'
          },
          footer: {
            tagline: 'Preserving and sharing the wisdom of African traditional medicine.',
            navigation: 'Navigation',
            contact: 'Contact',
            followUs: 'Follow Us',
            copyright: '© {{year}} Afrimeds. All rights reserved.'
          },
          home: {
            title: 'Afrimeds',
            subtitle: 'Discover African Traditional Medicine',
            exploreButton: 'Explore Plants',
            getStarted: 'Get Started',
            features: {
              title: 'Discover African Medicinal Plants',
              subtitle: 'Explore the rich heritage of traditional African medicine',
              database: {
                title: 'Extensive Plant Database',
                description: 'Access detailed information about hundreds of medicinal plants used in traditional African medicine.'
              },
              remedies: {
                title: 'Traditional Remedies',
                description: 'Learn about traditional remedies and their applications in modern healthcare practices.'
              },
              knowledge: {
                title: 'Expert Knowledge',
                description: 'Benefit from the wisdom of traditional healers and modern botanical research.'
              }
            },
            cta: {
              title: 'Ready to Explore African Medicine?',
              subtitle: 'Join our community and discover the healing power of traditional plants.',
              button: 'Start Your Journey'
            }
          },
          search: {
            placeholder: 'Search medicinal plants...',
            noResults: 'No plants found',
            button: 'Search'
          },
          about: {
            title: 'About Afrimeds',
            description: 'We are dedicated to preserving and sharing knowledge about African medicinal plants, bridging traditional healing wisdom with modern understanding.',
            team: {
              title: 'Our Team',
              description: 'Our team consists of African traditional healers, botanists, and researchers working together to document and preserve medicinal plant knowledge.'
            },
            mission: {
              title: 'Our Mission',
              description: 'We strive to preserve and promote African traditional medicine while making this valuable knowledge accessible to the world.'
            },
            contact: {
              title: 'Contact Us',
              description: 'Connect with us to share your knowledge of African medicinal plants or to learn more about our mission.'
            },
            commitment: {
              title: 'Our Commitment to African Traditional Medicine',
              description: 'Afrimeds is committed to accurately representing African traditional medicine while respecting its cultural heritage. Our information is verified by traditional healers and botanical experts to ensure authenticity and reliability.'
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
            alreadyHaveAccount: 'Already have an account?'
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
            signOut: 'Déconnexion'
          },
          footer: {
            tagline: 'Préserver et partager la sagesse de la médecine traditionnelle africaine.',
            navigation: 'Navigation',
            contact: 'Contact',
            followUs: 'Suivez-nous',
            copyright: '© {{year}} Afrimeds. Tous droits réservés.'
          },
          home: {
            title: 'Afrimeds',
            subtitle: 'Découvrez la Médecine Traditionnelle Africaine',
            exploreButton: 'Explorer les Plantes',
            getStarted: 'Commencer',
            features: {
              title: 'Découvrez les Plantes Médicinales Africaines',
              subtitle: 'Explorez le riche patrimoine de la médecine traditionnelle africaine',
              database: {
                title: 'Base de Données Extensive',
                description: 'Accédez à des informations détaillées sur des centaines de plantes médicinales utilisées dans la médecine traditionnelle africaine.'
              },
              remedies: {
                title: 'Remèdes Traditionnels',
                description: 'Découvrez les remèdes traditionnels et leurs applications dans les pratiques de santé modernes.'
              },
              knowledge: {
                title: 'Expertise',
                description: 'Bénéficiez de la sagesse des guérisseurs traditionnels et de la recherche botanique moderne.'
              }
            },
            cta: {
              title: 'Prêt à Explorer la Médecine Africaine ?',
              subtitle: 'Rejoignez notre communauté et découvrez le pouvoir guérisseur des plantes traditionnelles.',
              button: 'Commencez Votre Voyage'
            }
          },
          search: {
            placeholder: 'Rechercher des plantes médicinales...',
            noResults: 'Aucune plante trouvée',
            button: 'Rechercher'
          },
          about: {
            title: 'À Propos d\'Afrimeds',
            description: 'Nous nous consacrons à la préservation et au partage des connaissances sur les plantes médicinales africaines, établissant un pont entre la sagesse traditionnelle et la compréhension moderne.',
            team: {
              title: 'Notre Équipe',
              description: 'Notre équipe est composée de guérisseurs traditionnels africains, de botanistes et de chercheurs travaillant ensemble pour documenter et préserver les connaissances sur les plantes médicinales.'
            },
            mission: {
              title: 'Notre Mission',
              description: 'Nous nous efforçons de préserver et de promouvoir la médecine traditionnelle africaine tout en rendant ces précieuses connaissances accessibles au monde entier.'
            },
            contact: {
              title: 'Contactez-nous',
              description: 'Connectez-vous avec nous pour partager vos connaissances sur les plantes médicinales africaines ou pour en savoir plus sur notre mission.'
            },
            commitment: {
              title: 'Notre Engagement envers la Médecine Traditionnelle Africaine',
              description: 'Afrimeds s\'engage à représenter fidèlement la médecine traditionnelle africaine tout en respectant son héritage culturel. Nos informations sont vérifiées par des guérisseurs traditionnels et des experts en botanique pour garantir leur authenticité et leur fiabilité.'
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
            alreadyHaveAccount: 'Vous avez déjà un compte ?'
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
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;