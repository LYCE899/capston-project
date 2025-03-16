// src/components/QuizForm.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quiz } from '../types/Quiz';

interface QuizFormProps {
  quiz: Quiz;
  onSubmit: (selectedAnswers: number[]) => void;
  isSubmitting?: boolean; // Added to handle submission state
}

const QuizForm: React.FC<QuizFormProps> = ({ quiz, onSubmit, isSubmitting = false }) => {
  const { i18n, t } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(quiz.questions.length).fill(-1));
  
  const currentLanguage = i18n.language === 'fr' ? 'fr' : 'en';
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  // Handle answer selection
  const handleAnswerSelection = (answerIndex: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };
  
  // Navigate to the next question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  // Navigate to the previous question
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Check if all questions have been answered
  const allQuestionsAnswered = () => {
    return selectedAnswers.every(answer => answer !== -1);
  };
  
  // Submit the quiz
  const handleSubmit = () => {
    // Prevent submission if already submitting or not all questions answered
    if (isSubmitting || !allQuestionsAnswered()) {
      return;
    }
    
    console.log("QuizForm: Submitting answers:", selectedAnswers);
    onSubmit(selectedAnswers);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Quiz progress */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-emerald-600 h-2.5 rounded-full"
            style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{t('quiz.questionCount', 'Question {{current}}/{{total}}', { current: currentQuestionIndex + 1, total: quiz.questions.length })}</span>
          <span>{Math.round(((currentQuestionIndex + 1) / quiz.questions.length) * 100)}%</span>
        </div>
      </div>
      
      {/* Current question */}
      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          {currentQuestion.question[currentLanguage]}
        </h2>
        
        {/* Answer options */}
        <div className="space-y-3">
          {currentQuestion.options[currentLanguage].map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(index)}
              className={`w-full p-3 rounded text-left ${
                selectedAnswers[currentQuestionIndex] === index
                  ? 'bg-emerald-100 border-2 border-emerald-600 text-emerald-900'
                  : 'bg-gray-50 border border-gray-300 hover:bg-gray-100'
              }`}
              disabled={isSubmitting}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {/* Navigation between questions */}
      <div className="flex justify-between">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0 || isSubmitting}
          className="px-4 py-2 border border-gray-300 rounded text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          {t('quiz.previous', 'Previous')}
        </button>
        
        {currentQuestionIndex === quiz.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered() || isSubmitting}
            className={`px-4 py-2 rounded text-white ${
              isSubmitting 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-emerald-600 hover:bg-emerald-700'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting 
              ? t('quiz.submitting', 'Submitting...') 
              : t('quiz.submit', 'Submit Quiz')}
          </button>
        ) : (
          <button
            onClick={goToNextQuestion}
            disabled={isSubmitting}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('quiz.next', 'Next')}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizForm;