// src/types/Quiz.ts
export interface QuizQuestion {
  id: string;
  question: {
    en: string;
    fr: string;
  };
  options: {
    en: string[];
    fr: string[];
  };
  correctAnswerIndex: number;
  explanation?: {
    en: string;
    fr: string;
  };
  plantId?: string; // Référence à une plante (optionnel)
}

export interface Quiz {
  explanation: unknown;
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  questions: QuizQuestion[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  timeInMinutes: number;
}

export interface QuizResult {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
  timeSpentInSeconds: number;
  answers: {
    questionId: string;
    selectedAnswerIndex: number;
    isCorrect: boolean;
  }[];
}