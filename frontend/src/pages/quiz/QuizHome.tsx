import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAllQuizzes } from '../../services/quizService';
import { Quiz } from '../../types/Quiz';
import { Leaf, BookOpen, ShieldAlert, AlertTriangle, Award, Clock, Brain } from 'lucide-react';

const QuizHome: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Current language
  const currentLanguage = i18n.language === 'fr' ? 'fr' : 'en';

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const fetchedQuizzes = await getAllQuizzes();
        setQuizzes(fetchedQuizzes);
        setError(null);
      } catch (err) {
        console.error("Error loading quizzes:", err);
        setError(
          t(
            "quiz.errorLoading",
            "Impossible de charger les quiz. Veuillez réessayer plus tard."
          )
        );
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [t]);

  // Group quizzes by category
  const quizzesByCategory = quizzes.reduce((acc, quiz) => {
    if (!acc[quiz.category]) {
      acc[quiz.category] = [];
    }
    acc[quiz.category].push(quiz);
    return acc;
  }, {} as Record<string, Quiz[]>);

  // Get category icon and color
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'plants':
        return {
          icon: <Leaf className="w-6 h-6" />,
          color: 'from-green-500 to-emerald-600',
          bgColor: 'bg-green-50',
          textColor: 'text-green-700',
          name: t('quiz.categoryPlants', 'Plantes médicinales')
        };
      case 'treatments':
        return {
          icon: <BookOpen className="w-6 h-6" />,
          color: 'from-blue-500 to-indigo-600',
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-700',
          name: t('quiz.categoryTreatments', 'Traitements')
        };
      case 'safety':
        return {
          icon: <ShieldAlert className="w-6 h-6" />,
          color: 'from-orange-500 to-amber-600',
          bgColor: 'bg-orange-50',
          textColor: 'text-orange-700',
          name: t('quiz.categorySafety', 'Précautions')
        };
      case 'general':
        return {
          icon: <AlertTriangle className="w-6 h-6" />,
          color: 'from-purple-500 to-violet-600',
          bgColor: 'bg-purple-50',
          textColor: 'text-purple-700',
          name: t('quiz.categoryGeneral', 'Connaissances générales')
        };
      default:
        return {
          icon: <Brain className="w-6 h-6" />,
          color: 'from-gray-500 to-gray-600',
          bgColor: 'bg-gray-50',
          textColor: 'text-gray-700',
          name: category
        };
    }
  };

  // Translate difficulty
  const getDifficultyInfo = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return {
          name: t('quiz.difficultyEasy', 'Facile'),
          color: 'bg-green-100 text-green-800'
        };
      case 'medium':
        return {
          name: t('quiz.difficultyMedium', 'Moyen'),
          color: 'bg-yellow-100 text-yellow-800'
        };
      case 'hard':
        return {
          name: t('quiz.difficultyHard', 'Difficile'),
          color: 'bg-red-100 text-red-800'
        };
      default:
        return {
          name: t('quiz.difficultyMixed', 'Mixte'),
          color: 'bg-gray-100 text-gray-800'
        };
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-emerald-200 h-16 w-16 flex items-center justify-center mb-4">
            <Brain className="text-emerald-600 h-8 w-8 animate-bounce" />
          </div>
          <div className="h-4 bg-emerald-200 rounded w-32 mb-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-1/3">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-emerald-800 opacity-40"></div>
            <div className="absolute inset-0 bg-[url('/assets/images/plants-pattern.svg')] bg-repeat opacity-10"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              {t('quiz.homeTitle', 'Testez vos connaissances sur la médecine traditionnelle ivoirienne')}
            </h1>
            <p className="mt-3 text-lg text-emerald-100 max-w-3xl">
              {t('quiz.homeSubtitle', 'Découvrez les secrets des plantes médicinales et des remèdes ancestraux de Côte d\'Ivoire')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievement Cards */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-600 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-emerald-900">
                  {t('quiz.achievements', 'Récompenses et réalisations')}
                </h2>
              </div>
              <p className="text-emerald-700 mb-4">
                {t('quiz.earnBadges', 'Complétez des quiz pour gagner des badges et débloquer des récompenses')}
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 rounded-full mr-2">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-800">
                    {t('quiz.beginnerBadge', 'Débutant')}
                  </span>
                </div>
                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-100 rounded-full mr-2">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-blue-800">
                    {t('quiz.apprenticeBadge', 'Apprenti')}
                  </span>
                </div>
                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-purple-100 rounded-full mr-2">
                    <Award className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-purple-800">
                    {t('quiz.expertBadge', 'Expert')}
                  </span>
                </div>
              </div>
            </div>

            {/* Random Quiz Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-full mr-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-blue-900">
                  {t('quiz.startLearning', 'Commencez à apprendre')}
                </h2>
              </div>
              <p className="text-blue-700 mb-6">
                {t('quiz.randomQuizDescription', 'Sélectionnez une catégorie ou commencez un quiz aléatoire pour tester vos connaissances')}
              </p>
              <Link 
                to={quizzes.length > 0 ? `/quizzes/${quizzes[Math.floor(Math.random() * quizzes.length)].id}` : '#'} 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-medium shadow-md transition-all flex items-center justify-center"
              >
                <Brain className="h-5 w-5 mr-2" />
                {t('quiz.randomQuiz', 'Commencer un quiz aléatoire')}
              </Link>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('quiz.allQuizzes', 'Tous les quiz disponibles')}
          </h2>
          
          {Object.entries(quizzesByCategory).map(([category, categoryQuizzes]) => {
            const categoryInfo = getCategoryInfo(category);
            
            return (
              <div key={category} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full mr-3 bg-gradient-to-r ${categoryInfo.color} text-white`}>
                    {categoryInfo.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {categoryInfo.name}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryQuizzes.map(quiz => {
                    const difficultyInfo = getDifficultyInfo(quiz.difficulty);
                    
                    return (
                      <Link
                        key={quiz.id}
                        to={`/quizzes/${quiz.id}`}
                        className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className={`h-2 bg-gradient-to-r ${categoryInfo.color}`}></div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                            {quiz.title[currentLanguage]}
                          </h3>
                          <p className="text-gray-600 mb-6 h-12 overflow-hidden">
                            {quiz.description[currentLanguage]}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            <span className={`px-3 py-1 text-xs rounded-full ${difficultyInfo.color}`}>
                              {difficultyInfo.name}
                            </span>
                            
                            <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full flex items-center">
                              <Award className="w-3 h-3 mr-1" />
                              {quiz.questions.length} {t('quiz.questions', 'questions')}
                            </span>
                            
                            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {quiz.timeInMinutes} {t('quiz.minutes', 'minutes')}
                            </span>
                          </div>
                          
                          <button className={`w-full py-2 px-4 rounded-lg font-medium text-white bg-gradient-to-r ${categoryInfo.color} hover:opacity-90 transition-opacity flex items-center justify-center`}>
                            <Brain className="w-4 h-4 mr-2" />
                            {t('quiz.startQuiz', 'Commencer le quiz')}
                          </button>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizHome;