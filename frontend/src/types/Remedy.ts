// src/types/Remedy.ts
export interface Remedy {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  imageUrl: string;
  // Nouvelles propriétés
  plants?: {
    en: string[];
    fr: string[];
  };
  preparation?: {
    en: string;
    fr: string;
  };
  // Pour les remèdes composés
  isComposite?: boolean;
  advice?: {
    en: string;
    fr: string;
  };
  // Ajouts pour les propriétés manquantes
  rating?: number;
  reviews?: number;
  popularity?: number;
}