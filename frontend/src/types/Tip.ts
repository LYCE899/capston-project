export interface Tip {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  type: 'video' | 'image';
  mediaUrl: string;
}