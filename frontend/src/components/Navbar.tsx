import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Leaf, LogIn, LogOut, BookOpen } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useAuth } from "../contexts/AuthContext";

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <nav className="bg-emerald-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            
            <a
              onClick={handleHomeClick}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-bold">Afrimeds</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            
            <a
              href="/home"
              onClick={handleHomeClick}
              className={`hover:text-emerald-200 transition-colors ${
                isActive("/home") ? "text-emerald-200" : ""
              }`}
            >
              {t("nav.home")}
            </a>
            <Link
              to="/plants"
              className={`hover:text-emerald-200 transition-colors ${
                isActive("/plants") ? "text-emerald-200" : ""
              }`}
            >
              {t("nav.plants")}
            </Link>
            <Link
              to="/tips"
              className={`hover:text-emerald-200 transition-colors ${
                isActive("/tips") ? "text-emerald-200" : ""
              }`}
            >
              {t("nav.tips")}
            </Link>
            <Link
              to="/remedies"
              className={`hover:text-emerald-200 transition-colors ${
                isActive("/remedies") ? "text-emerald-200" : ""
              }`}
            >
              {t("nav.remedies")}
            </Link>
            <Link
              to="/quizzes"
              className={`hover:text-emerald-200 transition-colors flex items-center gap-1 ${
                isActive("/quizzes") ? "text-emerald-200" : ""
              }`}
            >
              <BookOpen className="h-4 w-4" />
              {i18n.language === 'en' ? 'Quizzes' : 'Quiz'}
            </Link>
            <Link
              to="/about"
              className={`hover:text-emerald-200 transition-colors ${
                isActive("/about") ? "text-emerald-200" : ""
              }`}
            >
              {t("nav.about")}
            </Link>
            <LanguageSwitcher />
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>{t("nav.signOut")}</span>
              </button>
            ) : (
              <Link
                to="/signin"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>{t("nav.signIn")}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};