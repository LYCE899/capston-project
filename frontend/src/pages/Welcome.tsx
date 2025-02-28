import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-bounce mb-8">
          <Leaf className="h-32 w-32 text-white mx-auto" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-8">Afrimeds</h1>
        <p className="text-2xl text-emerald-100 mb-12">
          {i18n.language === 'fr' 
            ? 'Découvrez la médecine traditionnelle africaine'
            : 'Discover African traditional medicine'}
        </p>
        <button
          onClick={() => navigate('/signin')}
          className="bg-white text-emerald-800 px-12 py-4 rounded-full text-xl font-semibold hover:bg-emerald-100 transition-all transform hover:scale-105"
        >
          {i18n.language === 'fr' ? 'Commencer' : 'Get Started'}
        </button>
      </div>
    </div>
  );
};

export default Welcome;