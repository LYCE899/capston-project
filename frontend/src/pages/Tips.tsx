import React from 'react';
import { useTranslation } from 'react-i18next';
import { Video, Image } from 'lucide-react';
import { tips } from '../data/tips';

export const Tips: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {i18n.language === 'en' ? 'Medicinal Plant Tips' : 'Conseils sur les Plantes Médicinales'}
        </h1>
        <p className="text-xl text-gray-600">
          {i18n.language === 'en' 
            ? 'Learn essential techniques for working with medicinal plants'
            : 'Apprenez les techniques essentielles pour travailler avec les plantes médicinales'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {tip.type === 'video' ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={tip.mediaUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={tip.mediaUrl}
                  alt={tip.title[i18n.language as 'en' | 'fr']}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {tip.type === 'video' ? (
                  <Video className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Image className="w-5 h-5 text-emerald-600" />
                )}
                <h2 className="text-xl font-semibold text-gray-900">
                  {tip.title[i18n.language as 'en' | 'fr']}
                </h2>
              </div>
              <p className="text-gray-600">
                {tip.description[i18n.language as 'en' | 'fr']}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};