// pages/TipDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tips } from '../data/tips';
import { Tip } from '../types/Tip';

export const TipDetailPage: React.FC = () => {
  const { tipId } = useParams<{ tipId: string }>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'fr';
  
  const [tip, setTip] = useState<Tip | null>(null);
  
  useEffect(() => {
    // Find the tip with the matching ID
    const foundTip = tips.find(t => t.id === tipId);
    
    if (foundTip) {
      setTip(foundTip);
    }
  }, [tipId]);
  
  if (!tip) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
          {t('tips.notFound')}
        </div>
        <Link
          to="/tips"
          className="mt-4 inline-block px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        >
          {t('tips.backToTips')}
        </Link>
      </div>
    );
  }
  
  // Function to render the media based on its type
  const renderMedia = () => {
    if (tip.type === 'video') {
      // Extract YouTube video ID if it's a YouTube URL
      let videoId = '';
      if (tip.mediaUrl.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(tip.mediaUrl).search);
        videoId = urlParams.get('v') || '';
      } else if (tip.mediaUrl.includes('youtube.com/embed')) {
        videoId = tip.mediaUrl.split('/').pop() || '';
      } else if (tip.mediaUrl.includes('youtu.be')) {
        videoId = tip.mediaUrl.split('/').pop() || '';
      }
      
      if (videoId) {
        return (
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={tip.title[currentLanguage as keyof typeof tip.title] || tip.title.fr}
              allowFullScreen
              className="w-full h-96 rounded-lg"
            ></iframe>
          </div>
        );
      }
      
      // Fallback for other video sources
      return (
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src={tip.mediaUrl}
            title={tip.title[currentLanguage as keyof typeof tip.title] || tip.title.fr}
            allowFullScreen
            className="w-full h-96 rounded-lg"
          ></iframe>
        </div>
      );
    } else if (tip.type === 'image') {
      return (
        <img
          src={tip.mediaUrl}
          alt={tip.title[currentLanguage as keyof typeof tip.title] || tip.title.fr}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
        />
      );
    }
    
    return null;
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-6">
        <Link
          to="/tips"
          className="text-emerald-600 hover:text-emerald-800 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          {t('tips.backToTips')}
        </Link>
      </nav>
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            {tip.title[currentLanguage as keyof typeof tip.title] || tip.title.fr}
          </h1>
          
          {/* Media (Video or Image) */}
          {renderMedia()}
          
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t('tips.description')}</h2>
            <p className="text-gray-700">
              {tip.description[currentLanguage as keyof typeof tip.description] || tip.description.fr}
            </p>
          </div>
          
          {/* Additional Content Section - can be expanded with more details */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">{t('tips.additionalInfo')}</h2>
            
            {/* This is placeholder content that you can replace with actual data if available */}
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-medium mb-2">{t('tips.bestPractices')}</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t('tips.bestPractice1')}</li>
                <li>{t('tips.bestPractice2')}</li>
                <li>{t('tips.bestPractice3')}</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">{t('tips.relatedPlants')}</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t('tips.relatedPlant1')}</li>
                <li>{t('tips.relatedPlant2')}</li>
                <li>{t('tips.relatedPlant3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      
      {/* Navigation between tips */}
      <div className="mt-8 flex justify-between">
        {parseInt(tip.id) > 1 && (
          <Link
            to={`/tips/${parseInt(tip.id) - 1}`}
            className="flex items-center text-emerald-600 hover:text-emerald-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {t('tips.previous')}
          </Link>
        )}
        
        {parseInt(tip.id) < tips.length && (
          <Link
            to={`/tips/${parseInt(tip.id) + 1}`}
            className="ml-auto flex items-center text-emerald-600 hover:text-emerald-800"
          >
            {t('tips.next')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 16.707a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-6-6a1 1 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-4.293 4.293a1 1 0 000 1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TipDetailPage;