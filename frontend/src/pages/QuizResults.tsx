// src/pages/QuizResults.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { getUserQuizResults } from '../services/quizService';
import { QuizResult } from '../types/Quiz';
import { Award } from 'lucide-react';

interface AuthContextType {
  user: { uid: string } | null;
}

const QuizResults: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth() as AuthContextType;
  
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchResults = async () => {
      if (!user) {
        navigate('/login');
        return;
      }
      
      try {
        setLoading(true);
        const fetchedResults = await getUserQuizResults(user.uid);
        setResults(fetchedResults);
      } catch (err) {
        console.error('Error loading quiz results:', err);
        setError(t('quizResults.errorLoading', 'Unable to load your quiz results. Please try again later.'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [user, navigate, t]);
  
  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(navigator.language, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  if (loading) {
    return <div className="text-center py-8">{t('common.loading', 'Loading...')}</div>;
  }
  
  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('quizResults.pageTitle', 'My Quiz Results')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('quizResults.pageDescription', 'See how well you\'ve done on previous quizzes')}
        </p>
      </div>
      
      {results.length > 0 ? (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('quizResults.quizTaken', 'Quiz Taken')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('quizResults.score', 'Score')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('quizResults.date', 'Date')}
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">{t('quizResults.viewDetails', 'View Details')}</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((result) => (
                <tr key={result.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Quiz #{result.quizId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-bold ${getScoreColor(result.score)}`}>
                      {result.score}%
                    </div>
                    <div className="text-sm text-gray-500">
                      {t('quiz.correctAnswers', '{{correct}} correct out of {{total}}', {
                        correct: result.answers.filter(a => a.isCorrect).length,
                        total: result.totalQuestions
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(result.completedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => navigate(`/quizzes/${result.quizId}`)}
                      className="text-emerald-600 hover:text-emerald-900"
                    >
                      {t('quizResults.viewDetails', 'View Details')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-10 bg-white shadow rounded-lg">
          <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t('quizResults.noResults', 'You haven\'t completed any quizzes yet')}
          </h3>
          <p className="text-gray-500 mb-6">
            {t('quiz.pageDescription', 'Take a quiz to test your knowledge about African medicinal plants')}
          </p>
          <button
            onClick={() => navigate('/quizzes')}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
          >
            {t('quiz.backToQuizzes', 'Back to Quizzes')}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizResults;