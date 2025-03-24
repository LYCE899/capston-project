import React from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Search, BookOpen, Brain, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Fonction pour changer de langue
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-6 px-8 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-4">
          <Leaf className="h-12 w-12 text-white" />
          <h1 className="text-3xl font-bold">Afrimeds</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* BOUTON DE TRADUCTION */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-emerald-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-600 transition duration-300"
          >
            {/* Icône de traduction */}
            <span className="text-xl"></span>
            <span className="text-sm font-semibold">
              {i18n.language === "fr" ? "FR" : "EN"}
            </span>
          </button>
        </div>
      </header>

      {/* SECTION PRINCIPALE */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl">
        {/* TEXTE INTRODUCTIF */}
        <div className="max-w-xl text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fadeInUp">
            {i18n.language === "fr"
              ? "Découvrez la richesse de la médecine traditionnelle Ivoirienne"
              : "Discover the richness of traditional Ivorian medicine"}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed animate-fadeInUp delay-100">
            {i18n.language === "fr"
              ? "Afrimeds est une plateforme dédiée à la documentation et à la diffusion des savoirs traditionnels sur les plantes médicinales en Côte d'Ivoire."
              : "Afrimeds is a platform dedicated to documenting and sharing traditional knowledge about medicinal plants in Côte d’Ivoire."}
          </p>
          <button
            onClick={() => navigate("/signin")}
            className="mt-8 bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-500 transition-all transform hover:scale-105 animate-fadeInUp delay-200"
          >
            {i18n.language === "fr" ? "Rejoindre maintenant" : "Join Now"}
          </button>
        </div>

        {/* IMAGE PRINCIPALE */}
        <div className="w-full md:w-1/2">
          <img
            src="https://jardinage.lemonde.fr/images/dossiers/2024-03/plantes-medicinales-(2)-113710.jpg"
            alt="Medicinal Plants"
            className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fadeInRight"
          />
        </div>
      </main>

      {/* SECTION DES FONCTIONNALITÉS */}
      <section className="w-full bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {i18n.language === "fr" ? "Fonctionnalités clés" : "Key Features"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* FICHE PLANTE */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate-fadeInUp">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {i18n.language === "fr"
                  ? "Fiches détaillées des plantes"
                  : "Detailed Plant Sheets"}
              </h4>
              <p className="text-gray-600 mt-2">
                {i18n.language === "fr"
                  ? "Découvrez les propriétés, la préparation et le dosage des plantes médicinales."
                  : "Discover the properties, preparation, and dosage of medicinal plants."}
              </p>
            </div>

            {/* RECHERCHE AVANCÉE */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate-fadeInUp delay-100">
              <div className="flex items-center justify-center mb-4">
                <Search className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {i18n.language === "fr"
                  ? "Recherche avancée"
                  : "Advanced Search"}
              </h4>
              <p className="text-gray-600 mt-2">
                {i18n.language === "fr"
                  ? "Recherchez des plantes et des remèdes facilement grâce à notre moteur de recherche avancé."
                  : "Easily search for plants and remedies using our advanced search engine."}
              </p>
            </div>

            {/* QUIZ INTERACTIF */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate-fadeInUp delay-200">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {i18n.language === "fr"
                  ? "Quiz interactif"
                  : "Interactive Quiz"}
              </h4>
              <p className="text-gray-600 mt-2">
                {i18n.language === "fr"
                  ? "Testez vos connaissances et améliorez votre compréhension des plantes."
                  : "Test your knowledge and improve your understanding of plants."}
              </p>
            </div>

            {/* SÉCURITÉ DES DONNÉES */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate-fadeInUp delay-300">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {i18n.language === "fr"
                  ? "Sécurité des données"
                  : "Data Security"}
              </h4>
              <p className="text-gray-600 mt-2">
                {i18n.language === "fr"
                  ? "Vos données sont protégées par Firebase et des protocoles de sécurité avancés."
                  : "Your data is secured by Firebase and advanced security protocols."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
