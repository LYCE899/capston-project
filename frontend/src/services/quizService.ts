// src/services/quizService.ts
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from '../firebase';
import { Quiz, QuizResult, QuizQuestion } from '../types/Quiz';
import { quizzes as mockQuizData } from '../data/quizData';

const QUIZZES_COLLECTION = 'quizzes';
const QUIZ_RESULTS_COLLECTION = 'quizResults';

// Define a safe type for the question data coming from Firestore
interface RawQuizQuestion {
  id?: string;
  question?: { en?: string; fr?: string };
  options?: { en?: string[]; fr?: string[] };
  correctAnswerIndex?: number;
  explanation?: { en?: string; fr?: string };
  plantId?: string;
}

// Function to validate difficulty is one of the allowed values
const validateDifficulty = (value: string): 'easy' | 'medium' | 'hard' | 'mixed' => {
  if (value === 'easy' || value === 'medium' || value === 'hard' || value === 'mixed') {
    return value;
  }
  return 'mixed'; // Default to mixed if invalid
};

// Type helper to convert Firestore data to our Quiz type
const convertToQuiz = (id: string, data: DocumentData): Quiz => {
  // Process the difficulty field
  const difficulty = validateDifficulty(data.difficulty || 'mixed');
  
  // Process questions
  const questions: QuizQuestion[] = [];
  
  if (Array.isArray(data.questions)) {
    for (const rawQuestion of data.questions) {
      // Safe access to question properties
      const q: RawQuizQuestion = rawQuestion || {};
      
      const questionId = q.id || `q-${Math.random().toString(36).substr(2, 9)}`;
      
      const questionObj = {
        en: q.question?.en || '',
        fr: q.question?.fr || ''
      };
      
      const optionsObj = {
        en: Array.isArray(q.options?.en) ? q.options.en : [],
        fr: Array.isArray(q.options?.fr) ? q.options.fr : []
      };
      
      const correctAnswerIndex = typeof q.correctAnswerIndex === 'number' ? q.correctAnswerIndex : 0;
      
      const explanationObj = {
        en: q.explanation?.en || '',
        fr: q.explanation?.fr || ''
      };
      
      questions.push({
        id: questionId,
        question: questionObj,
        options: optionsObj,
        correctAnswerIndex,
        explanation: explanationObj,
        plantId: q.plantId
      });
    }
  }
  
  // Create a valid Quiz object
  return {
    id,
    title: {
      en: data.title?.en || '',
      fr: data.title?.fr || ''
    },
    description: {
      en: data.description?.en || '',
      fr: data.description?.fr || ''
    },
    questions,
    difficulty,
    category: data.category || '',
    timeInMinutes: typeof data.timeInMinutes === 'number' ? data.timeInMinutes : 10
  };
};

// Create a validated copy of mock quizzes to avoid type issues
const mockQuizzes: Quiz[] = mockQuizData.map(quiz => {
  return {
    ...quiz,
    difficulty: validateDifficulty(quiz.difficulty),
    questions: quiz.questions.map(q => ({
      ...q,
      question: {
        en: q.question.en || '',
        fr: q.question.fr || ''
      },
      options: {
        en: Array.isArray(q.options.en) ? q.options.en : [],
        fr: Array.isArray(q.options.fr) ? q.options.fr : []
      },
      explanation: {
        en: q.explanation?.en || '',
        fr: q.explanation?.fr || ''
      }
    }))
  };
});

// Get all quizzes
export const getAllQuizzes = async (): Promise<Quiz[]> => {
  try {
    // First try to get quizzes from Firestore
    const quizzesCollection = collection(db, QUIZZES_COLLECTION);
    const querySnapshot = await getDocs(quizzesCollection);
    
    if (!querySnapshot.empty) {
      const quizzes: Quiz[] = [];
      
      querySnapshot.forEach(doc => {
        quizzes.push(convertToQuiz(doc.id, doc.data()));
      });
      
      return quizzes;
    } else {
      // If no quizzes in Firestore, return mock data
      console.log('No quizzes found in Firestore, using mock data');
      return [...mockQuizzes];
    }
  } catch (error) {
    console.error('Error retrieving quizzes from Firestore:', error);
    console.log('Using mock data instead');
    // Return mock data if there's an error
    return [...mockQuizzes];
  }
};

// Get a quiz by ID
export const getQuizById = async (quizId: string): Promise<Quiz> => {
  try {
    // First try to get the quiz from Firestore
    const quizDoc = doc(db, QUIZZES_COLLECTION, quizId);
    const docSnapshot = await getDoc(quizDoc);
    
    if (docSnapshot.exists()) {
      return convertToQuiz(docSnapshot.id, docSnapshot.data());
    } else {
      // If not found in Firestore, look in mock data
      const mockQuiz = mockQuizzes.find(quiz => quiz.id === quizId);
      if (mockQuiz) {
        return {...mockQuiz};
      }
      throw new Error(`Quiz with ID ${quizId} not found`);
    }
  } catch (error) {
    console.error(`Error retrieving quiz with ID ${quizId}:`, error);
    
    // Look in mock data if there's an error
    const mockQuiz = mockQuizzes.find(quiz => quiz.id === quizId);
    if (mockQuiz) {
      return {...mockQuiz};
    }
    
    throw error;
  }
};

// Define a safe type for answer data coming from Firestore
interface RawAnswer {
  questionId?: string;
  selectedAnswerIndex?: number;
  isCorrect?: boolean;
}

// Save a quiz result
export const saveQuizResult = async (quizResult: Omit<QuizResult, 'id'>): Promise<QuizResult> => {
  try {
    const resultsCollection = collection(db, QUIZ_RESULTS_COLLECTION);
    
    const result = {
      ...quizResult,
      completedAt: serverTimestamp()
    };
    
    const docRef = await addDoc(resultsCollection, result);
    
    return {
      id: docRef.id,
      userId: quizResult.userId,
      quizId: quizResult.quizId,
      score: quizResult.score,
      totalQuestions: quizResult.totalQuestions,
      completedAt: new Date(),
      timeSpentInSeconds: quizResult.timeSpentInSeconds,
      answers: quizResult.answers
    };
  } catch (error) {
    console.error('Error saving quiz result:', error);
    
    // Fallback if Firestore fails
    return {
      id: `local-${Date.now()}`,
      userId: quizResult.userId,
      quizId: quizResult.quizId,
      score: quizResult.score,
      totalQuestions: quizResult.totalQuestions,
      completedAt: new Date(),
      timeSpentInSeconds: quizResult.timeSpentInSeconds,
      answers: quizResult.answers
    };
  }
};

// Get quiz results for a user
export const getUserQuizResults = async (userId: string): Promise<QuizResult[]> => {
  try {
    const resultsCollection = collection(db, QUIZ_RESULTS_COLLECTION);
    const q = query(resultsCollection, where('userId', '==', userId));
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return [];
    }
    
    const results: QuizResult[] = [];
    
    querySnapshot.forEach(doc => {
      const data = doc.data();
      
      const answers = Array.isArray(data.answers) 
        ? data.answers.map((rawAnswer: unknown) => {
            const answer = rawAnswer as RawAnswer;
            return {
              questionId: answer.questionId || '',
              selectedAnswerIndex: typeof answer.selectedAnswerIndex === 'number' ? answer.selectedAnswerIndex : 0,
              isCorrect: Boolean(answer.isCorrect)
            };
          }) 
        : [];
      
      results.push({
        id: doc.id,
        userId: data.userId || userId,
        quizId: data.quizId || '',
        score: typeof data.score === 'number' ? data.score : 0,
        totalQuestions: typeof data.totalQuestions === 'number' ? data.totalQuestions : 0,
        completedAt: data.completedAt ? 
          (typeof data.completedAt.toDate === 'function' ? data.completedAt.toDate() : new Date(data.completedAt)) : 
          new Date(),
        timeSpentInSeconds: typeof data.timeSpentInSeconds === 'number' ? data.timeSpentInSeconds : 0,
        answers
      });
    });
    
    return results;
  } catch (error) {
    console.error(`Error retrieving quiz results for user ${userId}:`, error);
    return []; // Return empty array on error
  }
};