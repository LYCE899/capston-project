import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, MapPin, Book, Heart, FlaskConical, AlertTriangle, Leaf } from 'lucide-react';
import { plants } from '../data/plants';

export const PlantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  
  const plant = plants.find(p => p.id === id);
  
  if (!plant) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Plant not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        {t('plants.details.back')}
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={plant.imageUrl}
          alt={plant.commonName[i18n.language as 'en' | 'fr']}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {plant.commonName[i18n.language as 'en' | 'fr']}
          </h1>
          <p className="text-xl text-gray-600 italic mb-2">{plant.scientificName}</p>
          <p className="text-md text-gray-500 mb-6">
            <Leaf className="inline w-4 h-4 mr-1" />
            {plant.family}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <Book className="w-5 h-5" />
                <h2 className="text-xl font-semibold">{t('plants.details.description')}</h2>
              </div>
              <p className="text-gray-700 mb-6">
                {plant.description[i18n.language as 'en' | 'fr']}
              </p>
              
              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <MapPin className="w-5 h-5" />
                <h2 className="text-xl font-semibold">{t('plants.details.distribution')}</h2>
              </div>
              <p className="text-gray-700 mb-6">
                {plant.distribution[i18n.language as 'en' | 'fr']}
              </p>

              <div className="flex items-center gap-2 text-emerald-600 mb-4">
                <Heart className="w-5 h-5" />
                <h2 className="text-xl font-semibold">{t('plants.details.medicinalUses')}</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 mb-6 list-none">
                {plant.medicinalUses[i18n.language as 'en' | 'fr'].map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-emerald-50 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-2 text-emerald-600 mb-4">
                  <FlaskConical className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Traditional Remedy</h2>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('plants.details.preparation')}</h3>
                  <p className="text-gray-700">
                    {plant.remedies[i18n.language as 'en' | 'fr'].preparation}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('plants.details.dosage')}</h3>
                  <p className="text-gray-700">
                    {plant.remedies[i18n.language as 'en' | 'fr'].dosage}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="font-semibold text-gray-900">{t('plants.details.precautions')}</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 list-none">
                    {plant.remedies[i18n.language as 'en' | 'fr'].precautions.map((precaution, index) => (
                      <li key={index}>{precaution}</li>
                    ))}
                  </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
};