import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Quiz } from '../../../types/Quiz';
import { BrainCircuit, Award, Clock, Leaf, Stethoscope, ShieldAlert, BookOpen } from 'lucide-react';

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language === 'fr' ? 'fr' : 'en';

  // Get difficulty color and label
  const getDifficultyInfo = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return {
          color: 'bg-green-100 text-green-800',
          label: t('quiz.difficultyEasy', 'Easy')
        };
      case 'medium':
        return {
          color: 'bg-yellow-100 text-yellow-800',
          label: t('quiz.difficultyMedium', 'Medium')
        };
      case 'hard':
        return {
          color: 'bg-red-100 text-red-800',
          label: t('quiz.difficultyHard', 'Hard')
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-800',
          label: t('quiz.difficultyMixed', 'Mixed')
        };
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'plants':
        return <Leaf className="w-5 h-5" />;
      case 'treatments':
        return <Stethoscope className="w-5 h-5" />;
      case 'safety':
        return <ShieldAlert className="w-5 h-5" />;
      case 'general':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <BrainCircuit className="w-5 h-5" />;
    }
  };

  // Translate category
  const translateCategory = (category: string) => {
    switch (category) {
      case 'plants':
        return t('quiz.categoryPlants', 'Medicinal Plants');
      case 'treatments':
        return t('quiz.categoryTreatments', 'Treatments');
      case 'safety':
        return t('quiz.categorySafety', 'Precautions');
      case 'general':
        return t('quiz.categoryGeneral', 'General Knowledge');
      default:
        return category;
    }
  };

  const difficultyInfo = getDifficultyInfo(quiz.difficulty);

  return (
    <Link
      to={`/quizzes/${quiz.id}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
    >
      {/* Top colored band based on category */}
      <div className={`h-2 ${
        quiz.category === 'plants' ? 'bg-green-500' :
        quiz.category === 'treatments' ? 'bg-blue-500' :
        quiz.category === 'safety' ? 'bg-orange-500' :
        'bg-purple-500'
      }`}></div>
      
      <div className="p-6">
        {/* Category and icon */}
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
          <span className="flex items-center">
            {getCategoryIcon(quiz.category)}
          </span>
          <span>{translateCategory(quiz.category)}</span>
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
          {quiz.title[currentLanguage]}
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-2">
          {quiz.description[currentLanguage]}
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className={`px-3 py-1 text-xs rounded-full ${difficultyInfo.color}`}>
            {difficultyInfo.label}
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

        {/* Start button */}
        <div className="mt-6">
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition-colors flex items-center justify-center">
            <BrainCircuit className="w-4 h-4 mr-2" />
            {t('quiz.startQuiz', 'Start Quiz')}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;