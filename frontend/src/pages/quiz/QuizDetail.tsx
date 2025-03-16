import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { getQuizById, saveQuizResult } from '../../services/quizService';
import { Quiz, QuizQuestion } from '../../types/Quiz';
import QuizProgress from './components/QuizProgress';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Award, Home } from 'lucide-react';

interface AuthContextType {
  user: { uid: string } | null;
}

const QuizDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth() as AuthContextType;
  const { t, i18n } = useTranslation();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startTime] = useState<Date>(new Date());
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentLanguage = i18n.language === 'fr' ? 'fr' : 'en';
  
  // Load the quiz
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        if (id) {
          const fetchedQuiz = await getQuizById(id);
          setQuiz(fetchedQuiz);
          // Initialize answers array with -1 (no answer selected)
          setAnswers(new Array(fetchedQuiz.questions.length).fill(-1));
        } else {
          throw new Error('Quiz ID is undefined');
        }
      } catch (err) {
        console.error('Error loading quiz:', err);
        setError(t('quiz.errorLoading', 'Unable to load the quiz. Please try again later.'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuiz();
    
    // Start timer
    timerRef.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Clean up timer
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [id, t]);
  
  // Current question
  const currentQuestion: QuizQuestion | null = quiz && quiz.questions[currentQuestionIndex] 
    ? quiz.questions[currentQuestionIndex] 
    : null;
  
  // Time elapsed in seconds
  const timeElapsed = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);
  
  // Select an answer
  const handleSelectAnswer = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after explanation is shown
    
    setSelectedAnswer(answerIndex);
    
    // Update answers array
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
  };
  
  // Check answer and show explanation
  const handleCheckAnswer = () => {
    if (selectedAnswer === null || !currentQuestion) return;
    
    // Check if answer is correct
    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;
    
    // Update score if correct
    if (isCorrect) {
      setScore(prevScore => prevScore + 10); // Add 10 points for correct answer
    }
    
    // Show explanation
    setShowExplanation(true);
  };
  
  // Navigate to next question
  const handleNextQuestion = () => {
    if (!quiz) return;
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1]);
      setShowExplanation(false);
    } else {
      // Quiz completed
      handleCompleteQuiz();
    }
  };
  
  // Navigate to previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1]);
      setShowExplanation(answers[currentQuestionIndex - 1] !== -1); // Show explanation if question was answered
    }
  };
  
  // Complete quiz and save results
  const handleCompleteQuiz = async () => {
    if (!quiz || !user) return;
    
    try {
      // Calculate final score and correct answers
      const answersWithResults = quiz.questions.map((question, index) => {
        const selectedAnswerIndex = answers[index];
        const isCorrect = selectedAnswerIndex === question.correctAnswerIndex;
        
        return {
          questionId: question.id,
          selectedAnswerIndex,
          isCorrect
        };
      });
      
      const finalScore = score; // Use accumulated score
      
      // Save results
      const quizResult = {
        userId: user.uid,
        quizId: quiz.id,
        score: finalScore,
        totalQuestions: quiz.questions.length,
        completedAt: new Date(),
        timeSpentInSeconds: timeElapsed,
        answers: answersWithResults
      };
      
      await saveQuizResult(quizResult);
      
      // Mark as completed
      setIsCompleted(true);
      
    } catch (err) {
      console.error('Error saving results:', err);
      setError(t('quiz.errorSavingResults', 'Unable to save results. Please try again.'));
    }
  };
  
  // -------- Render different views based on state --------
  
  // Loading state
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
        <button 
          onClick={() => navigate('/quizzes')}
          className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded"
        >
          {t('quiz.backToQuizzes', 'Back to Quizzes')}
        </button>
      </div>
    );
  }
  
  // Quiz not found
  if (!quiz) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('quiz.notFound', 'Quiz not found')}</h1>
        <button 
          onClick={() => navigate('/quizzes')}
          className="bg-emerald-600 text-white px-4 py-2 rounded"
        >
          {t('quiz.backToQuizzes', 'Back to Quizzes')}
        </button>
      </div>
    );
  }
  
  // Quiz completed - show results
  if (isCompleted) {
    // Calculate results
    const correctAnswersCount = answers.filter((answer, index) => 
      answer === quiz.questions[index].correctAnswerIndex
    ).length;
    
    const percentage = Math.round((correctAnswersCount / quiz.questions.length) * 100);
    
    // Determine badge based on score
    let badge = {
      title: '',
      color: '',
      icon: null as JSX.Element | null
    };
    
    if (percentage >= 90) {
      badge = {
        title: t('quiz.expertBadge', 'Expert'),
        color: 'text-purple-600 bg-purple-100',
        icon: <Award className="w-8 h-8" />
      };
    } else if (percentage >= 70) {
      badge = {
        title: t('quiz.apprenticeBadge', 'Apprentice'),
        color: 'text-blue-600 bg-blue-100',
        icon: <Award className="w-8 h-8" />
      };
    } else {
      badge = {
        title: t('quiz.beginnerBadge', 'Beginner'),
        color: 'text-green-600 bg-green-100',
        icon: <Award className="w-8 h-8" />
      };
    }
    
    // Format time
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-6 text-center">
            <h1 className="text-2xl font-bold mb-2">{t('quiz.resultsTitle', 'Quiz Results')}</h1>
            <p>{quiz.title[currentLanguage]}</p>
          </div>
          
          {/* Results summary */}
          <div className="p-6">
            <div className="text-center mb-8">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-4 rounded-full mb-2 text-5xl font-bold text-emerald-600">
                  {percentage}%
                </div>
                <p className="text-lg">
                  {t('quiz.correctAnswers', '{{correct}} correct answers out of {{total}} questions', {
                    correct: correctAnswersCount,
                    total: quiz.questions.length
                  })}
                </p>
              </div>
              
              {/* Badge earned */}
              <div className="bg-gray-50 p-4 rounded-lg inline-block">
                <div className={`inline-flex items-center justify-center p-3 rounded-full ${badge.color} mb-2`}>
                  {badge.icon}
                </div>
                <p className="font-medium text-lg">{badge.title}</p>
                <p className="text-gray-600 text-sm">
                  {t('quiz.badgeEarned', 'Badge earned')}
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 text-sm mb-1">{t('quiz.score', 'Score')}</p>
                <p className="text-xl font-bold">{score} {t('quiz.points', 'points')}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 text-sm mb-1">{t('quiz.timeTaken', 'Time taken')}</p>
                <p className="text-xl font-bold">{formattedTime}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 text-sm mb-1">{t('quiz.difficulty', 'Difficulty')}</p>
                <p className="text-xl font-bold capitalize">{t(`quiz.difficulty${quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}`, quiz.difficulty)}</p>
              </div>
            </div>
            
            {/* Question review */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">{t('quiz.reviewAnswers', 'Review Your Answers')}</h2>
              
              <div className="space-y-4">
                {quiz.questions.map((question, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correctAnswerIndex;
                  
                  return (
                    <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className={`mt-1 mr-3 flex-shrink-0 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                          {isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
                        </div>
                        <div>
                          <p className="font-medium mb-2">
                            {t('quiz.questionNumber', 'Question {{number}}', { number: index + 1 })}:
                            {' '}{question.question[currentLanguage]}
                          </p>
                          
                          <div className="pl-2 border-l-2 border-gray-300 mb-2">
                            <p className="text-sm mb-1">
                              <span className="font-medium">{t('quiz.yourAnswer', 'Your answer')}:</span>{' '}
                              {userAnswer >= 0 && userAnswer < question.options[currentLanguage].length
                                ? question.options[currentLanguage][userAnswer]
                                : t('quiz.noAnswer', 'No answer')}
                            </p>
                            
                            {!isCorrect && (
                              <p className="text-sm text-green-600">
                                <span className="font-medium">{t('quiz.correctAnswer', 'Correct answer')}:</span>{' '}
                                {question.options[currentLanguage][question.correctAnswerIndex]}
                              </p>
                            )}
                          </div>
                          
                          <p className="text-sm text-gray-600 italic">
                            {question.explanation?.[currentLanguage]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/quizzes')}
                className="flex-1 bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                {t('quiz.backToQuizzes', 'Back to Quizzes')}
              </button>
              
              <button 
                onClick={() => {
                  setIsCompleted(false);
                  setCurrentQuestionIndex(0);
                  setSelectedAnswer(null);
                  setAnswers(new Array(quiz.questions.length).fill(-1));
                  setScore(0);
                  setShowExplanation(false);
                }}
                className="flex-1 bg-white border border-emerald-600 text-emerald-600 px-4 py-3 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t('quiz.retakeQuiz', 'Retake Quiz')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Render quiz question
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Quiz header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{quiz.title[currentLanguage]}</h1>
        <p className="text-gray-600">{quiz.description[currentLanguage]}</p>
      </div>
      
      {/* Progress bar */}
      <QuizProgress 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={quiz.questions.length}
        score={score}
        maxScore={quiz.questions.length * 10}
      />
      
      {/* Current question */}
      {currentQuestion && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {currentQuestion.question[currentLanguage]}
          </h2>
          
          {/* Answer options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options[currentLanguage].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showExplanation}
                className={`w-full p-4 rounded-lg text-left transition-colors ${
                  showExplanation && index === currentQuestion.correctAnswerIndex
                    ? 'bg-green-100 border-2 border-green-500 text-green-900'  // Correct answer
                    : showExplanation && selectedAnswer === index
                      ? 'bg-red-100 border-2 border-red-500 text-red-900'  // Wrong answer
                      : selectedAnswer === index
                        ? 'bg-emerald-100 border-2 border-emerald-600 text-emerald-900'  // Selected answer
                        : 'bg-gray-50 border border-gray-300 hover:bg-gray-100'  // Normal state
                }`}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 border border-current flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                  
                  {showExplanation && index === currentQuestion.correctAnswerIndex && (
                    <CheckCircle className="ml-auto text-green-600" size={20} />
                  )}
                  
                  {showExplanation && selectedAnswer === index && selectedAnswer !== currentQuestion.correctAnswerIndex && (
                    <XCircle className="ml-auto text-red-600" size={20} />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {/* Explanation */}
          {showExplanation && currentQuestion.explanation && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-medium text-blue-900 mb-1">
                {t('quiz.explanation', 'Explanation')}:
              </h3>
              <p className="text-blue-800">
                {currentQuestion.explanation[currentLanguage]}
              </p>
            </div>
          )}
          
          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('quiz.previous', 'Previous')}
            </button>
            
            {!showExplanation ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('quiz.checkAnswer', 'Check Answer')}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 flex items-center"
              >
                {currentQuestionIndex < quiz.questions.length - 1 
                  ? t('quiz.next', 'Next') 
                  : t('quiz.finish', 'Finish Quiz')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizDetail;