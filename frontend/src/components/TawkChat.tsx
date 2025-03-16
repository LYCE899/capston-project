// components/TawkChat.tsx
import React, { useEffect } from 'react';

export const TawkChat: React.FC = () => {
  useEffect(() => {
    // Créer le script Tawk.to
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67ce0227c7388b190b5310e9/1ilubgqpl';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    // Insérer le script dans le DOM
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    // Configuration de l'API Tawk
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Nettoyage lors du démontage du composant
    return () => {
      // Optionnel: vous pouvez essayer de nettoyer le script si nécessaire
      // Cependant, une fois chargé, le chat Tawk persiste généralement
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
};