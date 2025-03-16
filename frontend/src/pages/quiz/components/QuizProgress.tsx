import React from 'react';
import { useTranslation } from 'react-i18next';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  maxScore: number;
  timeRemaining?: number;
  showTimer?: boolean;
}

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  score,
  maxScore,
  timeRemaining,
  showTimer = false
}) => {
  const { t } = useTranslation();
  
  // Calculate progress percentage
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  // Format remaining time (if provided)
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">
            {t('quiz.questionCount', 'Question {{current}}/{{total}}', {
              current: currentQuestion,
              total: totalQuestions
            })}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          {showTimer && timeRemaining !== undefined && (
            <span className="text-sm font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatTime(timeRemaining)}
            </span>
          )}
          
          <span className="text-sm font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('quiz.score', 'Score: {{score}}/{{maxScore}}', { score, maxScore })}
          </span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className="h-full bg-emerald-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgress;