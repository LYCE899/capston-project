import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Leaf, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">Afrimeds</span>
            </div>
            <p className="text-emerald-200">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/plants')} className="text-emerald-200 hover:text-white">{t('nav.plants')}</button></li>
              <li><button onClick={() => navigate('/tips')} className="text-emerald-200 hover:text-white">{t('nav.tips')}</button></li>
              <li><button onClick={() => navigate('/remedies')} className="text-emerald-200 hover:text-white">{t('nav.remedies')}</button></li>
              <li><button onClick={() => navigate('/about')} className="text-emerald-200 hover:text-white">{t('nav.about')}</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@afrimeds.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};