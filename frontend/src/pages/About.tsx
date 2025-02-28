import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Heart, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('about.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.team.title')}</h2>
          <p className="text-gray-600">{t('about.team.description')}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.mission.title')}</h2>
          <p className="text-gray-600">{t('about.mission.description')}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.contact.title')}</h2>
          <p className="text-gray-600">{t('about.contact.description')}</p>
        </div>
      </div>

      <div className="mt-16 bg-emerald-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          {t('about.commitment.title')}
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          {t('about.commitment.description')}
        </p>
      </div>
    </div>
  );
};

export default About;