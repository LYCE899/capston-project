import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { getQuizById, saveQuizResult } from '../services/quizService';
import QuizForm from '../components/QuizForm';
import { Quiz } from '../types/Quiz';

const QuizDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth() as { user: { uid: string } | null };
  useTranslation();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    answers: {
      questionId: string;
      selectedAnswerIndex: number;
      isCorrect: boolean;
    }[];
  } | null>(null);
  
  // Chargement du quiz
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        if (id) {
          const fetchedQuiz = await getQuizById(id);
          setQuiz(fetchedQuiz);
        } else {
          throw new Error('Quiz ID is undefined');
        }
      } catch (err) {
        console.error('Erreur lors du chargement du quiz:', err);
        setError('Impossible de charger le quiz. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuiz();
  }, [id]);
  
  // Traiter la soumission du quiz
  const handleQuizSubmit = async (selectedAnswers) => {
    if (!quiz || !user) return;
    
    try {
      // Calculer les résultats
      let correctAnswers = 0;
      const answers = quiz.questions.map((question, index) => {
        const isCorrect = selectedAnswers[index] === question.correctAnswerIndex;
        if (isCorrect) correctAnswers++;
        
        return {
          questionId: question.id,
          selectedAnswerIndex: selectedAnswers[index],
          isCorrect
        };
      });
      
      const score = Math.round((correctAnswers / quiz.questions.length) * 100);
      
      // Sauvegarder les résultats
      const quizResult = {
        userId: user.uid,
        quizId: quiz.id,
        score,
        totalQuestions: quiz.questions.length,
        completedAt: new Date(),
        timeSpentInSeconds: 0, // Add the actual time spent calculation here
        answers
      };
      
      await saveQuizResult(quizResult);
      
      // Mettre à jour l'interface
      setResults({
        score,
        correctAnswers,
        totalQuestions: quiz.questions.length,
        answers
      });
      
      setIsCompleted(true);
      
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement des résultats:', err);
      setError('Impossible d\'enregistrer les résultats. Veuillez réessayer.');
    }
  };
  
  if (loading) {
    return <div className="text-center py-8">Chargement...</div>;
  }
  
  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }
  
  if (!quiz) {
    return <div className="text-center py-8">Quiz non trouvé</div>;
  }
  
  if (isCompleted && results) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Résultats du quiz</h1>
        <div className="text-center py-6">
          <div className="text-5xl font-bold text-emerald-600 mb-2">{results.score}%</div>
          <p>{results.correctAnswers} réponses correctes sur {results.totalQuestions} questions</p>
        </div>
        <button 
          onClick={() => navigate('/quizzes')}
          className="bg-emerald-600 text-white px-4 py-2 rounded mt-4 w-full"
        >
          Retour aux quiz
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{quiz.title.fr}</h1>
      <QuizForm quiz={quiz} onSubmit={handleQuizSubmit} />
    </div>
  );
};

export default QuizDetail;