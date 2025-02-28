// src/pages/QuizResults.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserQuizResults } from '../services/quizService';
import { User } from 'firebase/auth';
import { Award, Clock, Calendar, ChevronRight } from 'lucide-react';

// Type pour les résultats du quiz
interface QuizResult {
  id: string;
  userId: string;
  quizId: string;
  quizTitle?: string;
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

export const QuizResults: React.FC = () => {
  const { i18n, t } = useTranslation();
  const { user } = useAuth() as { user: User | null };
  
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const userResults = await getUserQuizResults(user.uid);
        setResults(userResults);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des résultats:', err);
        setError(t('quizResults.errorLoading', 'Impossible de charger les résultats. Veuillez réessayer plus tard.'));
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [user, t]);

  // Formater le temps passé
  const formatTimeSpent = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Formater la date
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Obtenir la couleur en fonction du score
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin h-8 w-8 text-emerald-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded mb-4">
          {t('quizResults.notLoggedIn', 'Vous devez être connecté pour voir vos résultats')}
        </div>
        <Link
          to="/signin"
          className="inline-block bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          {t('auth.signIn', 'Se connecter')}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t('quizResults.pageTitle', 'Mes résultats de quiz')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('quizResults.pageDescription', 'Consultez vos performances sur les différents quiz')}
        </p>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-emerald-600 p-4">
                <h2 className="text-xl font-semibold text-white truncate">
                  {result.quizTitle || t('quizResults.untitledQuiz', 'Quiz sans titre')}
                </h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-4xl font-bold ${getScoreColor(result.score)}`}>
                    {result.score}%
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Award className="w-5 h-5 mr-1" />
                    <span>
                      {result.answers.filter(a => a.isCorrect).length}/{result.totalQuestions}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(result.completedAt)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{formatTimeSpent(result.timeSpentInSeconds)}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    to={`/quizzes/${result.quizId}`}
                    className="flex items-center justify-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200 transition-colors"
                  >
                    {t('quizResults.retakeQuiz', 'Refaire ce quiz')}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-4">
            <Award className="w-16 h-16 mx-auto text-gray-300" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            {t('quizResults.noResults', 'Aucun résultat pour le moment')}
          </h3>
          <p className="text-gray-500 mb-6">
            {t('quizResults.startQuiz', "Vous n'avez pas encore complété de quiz. Commencez à en faire pour voir vos résultats ici.")}
          </p>
          <Link
            to="/quizzes"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            {t('quizResults.exploreQuizzes', 'Explorer les quiz disponibles')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuizResults;