// src/services/quizService.ts
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { Quiz, QuizResult } from '../types/Quiz';

const QUIZZES_COLLECTION = 'quizzes';
const QUIZ_RESULTS_COLLECTION = 'quizResults';

// Récupérer tous les quiz
export const getAllQuizzes = async (): Promise<Quiz[]> => {
  try {
    const quizzesCollection = collection(db, QUIZZES_COLLECTION);
    const querySnapshot = await getDocs(quizzesCollection);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Quiz));
  } catch (error) {
    console.error('Erreur lors de la récupération des quiz:', error);
    throw error;
  }
};

// Récupérer un quiz par ID
export const getQuizById = async (quizId: string): Promise<Quiz> => {
  try {
    const quizDoc = doc(db, QUIZZES_COLLECTION, quizId);
    const docSnapshot = await getDoc(quizDoc);
    
    if (!docSnapshot.exists()) {
      throw new Error(`Quiz avec l'ID ${quizId} non trouvé`);
    }
    
    return {
      id: docSnapshot.id,
      ...docSnapshot.data()
    } as Quiz;
  } catch (error) {
    console.error(`Erreur lors de la récupération du quiz avec l'ID ${quizId}:`, error);
    throw error;
  }
};

// Enregistrer un résultat de quiz
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
      ...quizResult,
      completedAt: new Date()
    };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du résultat du quiz:', error);
    throw error;
  }
};

// Récupérer les résultats des quiz pour un utilisateur
export const getUserQuizResults = async (userId: string): Promise<QuizResult[]> => {
  try {
    const resultsCollection = collection(db, QUIZ_RESULTS_COLLECTION);
    const q = query(resultsCollection, where('userId', '==', userId));
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        completedAt: data.completedAt ? data.completedAt.toDate() : new Date()
      } as QuizResult;
    });
  } catch (error) {
    console.error(`Erreur lors de la récupération des résultats de quiz pour l'utilisateur ${userId}:`, error);
    throw error;
  }
};