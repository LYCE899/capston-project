import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivacyPolicyProps {
  fromSignUp?: boolean;
}
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ fromSignUp = false }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Privacy Policy / Politique de Confidentialité – Afrimeds
      </h1>
      <p className="text-center text-sm text-gray-600 mb-10">
        Effective date / Date d'entrée en vigueur : 27 March 2025
      </p>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
          <p className="mb-2 whitespace-pre-line">{section.contentEN}</p>
          <p className="whitespace-pre-line">{section.contentFR}</p>
        </div>
      ))}
       {fromSignUp && (
          <button
            onClick={() => navigate('/signup')}
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
          >
            ← Back to Sign Up / Retour à l'inscription
          </button>
       )}
    </div>
  );
};

const sections = [
  {
    title: '1. Purpose of this policy / Objectif de cette politique',
    contentEN:
      "This privacy policy informs users of the Afrimeds application about the personal data collected, the reasons for collecting it, users' legal rights, and the ways the data is protected. The policy complies with the GDPR (EU), Côte d’Ivoire Law No. 2013-450, Firebase Privacy rules, and ethical frameworks such as the UNESCO 2003 Convention and the International Society of Ethnobiology Code of Ethics.",
    contentFR:
      "Cette politique de confidentialité informe les utilisateurs de l'application Afrimeds des données personnelles collectées, des raisons de leur collecte, des droits légaux des utilisateurs et des moyens mis en œuvre pour les protéger. Elle respecte le RGPD (UE), la loi ivoirienne n°2013-450, les règles de confidentialité de Firebase, et les cadres éthiques comme la Convention UNESCO 2003 et le Code d'éthique de la Société Internationale d'Ethnobiologie.",
  },
  {
    title: '2. Why do users need to log in? / Pourquoi les utilisateurs doivent-ils se connecter ?',
    contentEN:
      'User authentication secures access to Afrimeds and ensures contributions are made in a respectful and verified manner. It protects content integrity and helps prevent misuse.',
    contentFR:
      'L’authentification protège l’accès à Afrimeds et garantit que les contributions sont faites de manière respectueuse et vérifiée. Elle protège l’intégrité des contenus et limite les abus.',
  },
  {
    title: '3. Data Controller / Responsable du traitement',
    contentEN:
      'The data controller is Amani Coulibaly, administrator of Afrimeds. Contact: macoulibaly2000@gmail.com',
    contentFR:
      'Le responsable du traitement est Amani Coulibaly, administrateur d’Afrimeds. Contact : macoulibaly2000@gmail.com',
  },
  {
    title: '4. Data Collected / Données collectées',
    contentEN:
      'The app collects email addresses, encrypted passwords (via Firebase), and user comments in the remedies section. No sensitive health, financial, or biometric data is collected.',
    contentFR:
      'L’application collecte les adresses e-mail, les mots de passe chiffrés (via Firebase), et les commentaires des utilisateurs dans la section remèdes. Aucune donnée sensible de santé, financière ou biométrique n’est collectée.',
  },
  {
    title: '5. Purpose of Data Use / Finalités de l’utilisation des données',
    contentEN:
      'Data is used to authenticate users, display and manage comments, ensure app integrity, and improve functionality.',
    contentFR:
      'Les données sont utilisées pour authentifier les utilisateurs, afficher et gérer les commentaires, assurer l’intégrité de l’application et améliorer ses fonctionnalités.',
  },
  {
    title: '6. Legal Basis / Base légale',
    contentEN:
      'Data processing is based on user consent and legitimate interest in maintaining a secure, educational platform.',
    contentFR:
      'Le traitement des données repose sur le consentement de l’utilisateur et l’intérêt légitime de maintenir une plateforme éducative et sécurisée.',
  },
  {
    title: '7. Who Has Access? / Qui a accès aux données ?',
    contentEN:
      'Comments are public. Email addresses are private and visible only to the administrator. No third-party access is granted.',
    contentFR:
      'Les commentaires sont publics. Les adresses e-mail sont privées et visibles uniquement par l’administrateur. Aucun accès n’est donné à des tiers.',
  },
  {
    title: '8. Data Retention / Durée de conservation',
    contentEN:
      'Accounts are retained indefinitely unless deletion is requested. Users may delete their own comments at any time.',
    contentFR:
      'Les comptes sont conservés indéfiniment sauf demande de suppression. Les utilisateurs peuvent supprimer leurs commentaires à tout moment.',
  },
  {
    title: '9. Your Rights / Vos droits',
    contentEN:
      'Users may access, correct, or delete their data by contacting the administrator. Comments may be deleted directly by the user.',
    contentFR:
      'Les utilisateurs peuvent accéder à leurs données, les corriger ou les supprimer en contactant l’administrateur. Les commentaires peuvent être supprimés directement par l’utilisateur.',
  },
  {
    title: '10. Data Security / Sécurité des données',
    contentEN:
      'All data is protected through Firebase Authentication, HTTPS encryption, and strict Firestore security rules.',
    contentFR:
      'Toutes les données sont protégées par Firebase Authentication, le chiffrement HTTPS et des règles de sécurité Firestore strictes.',
  },
  {
    title: '11. Cultural and Ethical Commitments / Engagements culturels et éthiques',
    contentEN:
      'Afrimeds respects traditional knowledge, healer consent, and promotes responsible knowledge-sharing without commercialization.',
    contentFR:
      'Afrimeds respecte les savoirs traditionnels, le consentement des guérisseurs et promeut le partage responsable des connaissances sans but commercial.',
  },
  {
    title: '12. Changes to This Policy / Modifications de la politique',
    contentEN:
      'This policy may be updated. Users will be informed in case of major changes.',
    contentFR:
      'Cette politique peut être mise à jour. Les utilisateurs seront informés en cas de modifications importantes.',
  },
  {
    title: '13. Contact',
    contentEN:
      'For privacy-related questions, please contact: contactAfrimeds@gmail.com',
    contentFR:
      'Pour toute question liée à la confidentialité, veuillez contacter : contactAfrimeds@gmail.com',
  },
];

export default PrivacyPolicy;
