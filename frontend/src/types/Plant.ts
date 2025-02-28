export interface Plant {
  id: string;
  scientificName: string;
  commonName: {
    en: string;
    fr: string;
  };
  family: string;
  description: {
    en: string;
    fr: string;
  };
  medicinalUses: {
    en: string[];
    fr: string[];
  };
  remedies: {
    en: {
      preparation: string;
      dosage: string;
      precautions: string[];
    };
    fr: {
      preparation: string;
      dosage: string;
      precautions: string[];
    };
  };
  distribution: {
    en: string;
    fr: string;
  };
  imageUrl: string;
  thumbnailUrl: string;
  sources: string[];
}