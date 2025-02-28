import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Leaf, Sprout, Heart, BookOpen } from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-24" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://www.miye.care/wp-content/uploads/2023/05/Visus-blog-9-1024x512.jpg")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Leaf className="h-20 w-20 mx-auto mb-8 text-white" />
            <h1 className="text-5xl font-bold mb-4 text-white">{t('home.title')}</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t('home.subtitle')}
            </p>
            <button
              onClick={scrollToFeatures}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t('home.exploreButton')}
            </button>
          </div>
        </div>
      </div>

      {/* Features Section with Images */}
      <div ref={featuresRef} className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('home.features.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Plants Database Feature */}
            <button 
              onClick={() => navigate('/plants')}
              className="text-center group focus:outline-none"
            >
              <div className="mb-6 overflow-hidden rounded-lg transform transition-all duration-300 group-hover:shadow-xl">
                <img 
                  src="https://www.rural21.com/fileadmin/_processed_/5/9/csm_Science_4_22_70d052f605.jpg"
                  alt="Medicinal plants database"
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <Sprout className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {t('home.features.database.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.database.description')}
              </p>
            </button>

            {/* Remedies Feature */}
            <button 
              onClick={() => navigate('/remedies')}
              className="text-center group focus:outline-none"
            >
              <div className="mb-6 overflow-hidden rounded-lg transform transition-all duration-300 group-hover:shadow-xl">
                <img 
                  src="https://naturalpoland.com/wp-content/uploads/african-traditional-healing-plants.jpg"
                  alt="Traditional remedies"
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {t('home.features.remedies.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.remedies.description')}
              </p>
            </button>

            {/* Tips Feature */}
            <button 
              onClick={() => navigate('/tips')}
              className="text-center group focus:outline-none"
            >
              <div className="mb-6 overflow-hidden rounded-lg transform transition-all duration-300 group-hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=800&q=80"
                  alt="Expert knowledge"
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {t('home.features.knowledge.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.knowledge.description')}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};