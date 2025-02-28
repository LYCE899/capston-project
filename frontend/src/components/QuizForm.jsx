// src/components/QuizForm.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const QuizForm = ({ quiz, onSubmit }) => {
  const { i18n, t } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(quiz.questions.length).fill(-1));
  
  const currentLanguage = i18n.language === 'fr' ? 'fr' : 'en';
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  // Gérer la sélection d'une réponse
  const handleAnswerSelection = (answerIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };
  
  // Passer à la question suivante
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  // Revenir à la question précédente
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Vérifier si toutes les questions ont été répondues
  const allQuestionsAnswered = () => {
    return selectedAnswers.every(answer => answer !== -1);
  };
  
  // Soumettre le quiz
  const handleSubmit = () => {
    onSubmit(selectedAnswers);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Progression du quiz */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-emerald-600 h-2.5 rounded-full"
            style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Question {currentQuestionIndex + 1}/{quiz.questions.length}</span>
          <span>{Math.round(((currentQuestionIndex + 1) / quiz.questions.length) * 100)}%</span>
        </div>
      </div>
      
      {/* Question actuelle */}
      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          {currentQuestion.question[currentLanguage]}
        </h2>
        
        {/* Options de réponse */}
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
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {/* Navigation entre questions */}
      <div className="flex justify-between">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 border border-gray-300 rounded text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('quiz.previous', 'Précédent')}
        </button>
        
        {currentQuestionIndex === quiz.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered()}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('quiz.submit', 'Terminer le quiz')}
          </button>
        ) : (
          <button
            onClick={goToNextQuestion}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
          >
            {t('quiz.next', 'Suivant')}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizForm;