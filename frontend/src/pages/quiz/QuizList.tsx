// src/pages/QuizList.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAllQuizzes } from "../../services/quizService";
import { Quiz } from "../../types/Quiz";
import { BrainCircuit, Award, Clock } from "lucide-react";

const QuizList: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Current language
  const currentLanguage = i18n.language === "fr" ? "fr" : "en";

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
            "Unable to load quizzes. Please try again later."
          )
        );
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [t]);

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Translate difficulty
  const translateDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return t("quiz.difficultyEasy", "Easy");
      case "medium":
        return t("quiz.difficultyMedium", "Medium");
      case "hard":
        return t("quiz.difficultyHard", "Hard");
      case "mixed":
        return t("quiz.difficultyMixed", "Mixed");
      default:
        return difficulty;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t("quiz.pageTitle", "Knowledge Quizzes")}
        </h1>
        <p className="text-xl text-gray-600">
          {t(
            "quiz.pageDescription",
            "Test your knowledge about Cote d'Ivoire medicinal plants"
          )}
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 text-emerald-600 animate-spin">
            {t("common.loading", "Loading...")}
          </div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      ) : quizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/quizzes/${quiz.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {quiz.title[currentLanguage]}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {quiz.description[currentLanguage]}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(
                      quiz.difficulty
                    )}`}
                  >
                    {translateDifficulty(quiz.difficulty)}
                  </span>
                  <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    {quiz.questions.length} {t("quiz.questions", "questions")}
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {quiz.timeInMinutes} {t("quiz.minutes", "minutes")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-600">
          {t("quiz.noQuizzes", "No quizzes available at the moment")}
        </div>
      )}
    </div>
  );
};

export default QuizList;
