import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Leaf, LogIn, LogOut, BookOpen, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useAuth } from "../contexts/AuthContext";

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-emerald-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            
            <Link
              to="/home"
              onClick={(e) => {
                e.preventDefault();
                handleHomeClick(e);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-bold">Afrimeds</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            
            <Link
              to="/home"
              onClick={(e) => {
                e.preventDefault();
                handleHomeClick(e);
              }}
              className={`hover:text-emerald-200 transition-colors ${
                isActive("/home") ? "text-emerald-200" : ""
              }`}
            >
              {t("nav.home")}
            </Link>
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
                <span className="hidden sm:inline">{t("nav.signOut")}</span>
              </button>
            ) : (
              <Link
                to="/signin"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span className="hidden sm:inline">{t("nav.signIn")}</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-emerald-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            
            <Link
              to="/home"
              onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                handleHomeClick(e);
                closeMenu();
              }}
              className={`block px-3 py-2 rounded-md ${
                isActive("/home")
                  ? "bg-emerald-600 text-white"
                  : "text-white hover:bg-emerald-600"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/plants"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md ${
                isActive("/plants")
                  ? "bg-emerald-600 text-white"
                  : "text-white hover:bg-emerald-600"
              }`}
            >
              {t("nav.plants")}
            </Link>
            <Link
              to="/tips"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md ${
                isActive("/tips")
                  ? "bg-emerald-600 text-white"
                  : "text-white hover:bg-emerald-600"
              }`}
            >
              {t("nav.tips")}
            </Link>
            <Link
              to="/remedies"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md ${
                isActive("/remedies")
                  ? "bg-emerald-600 text-white"
                  : "text-white hover:bg-emerald-600"
              }`}
            >
              {t("nav.remedies")}
            </Link>
            <Link
              to="/quizzes"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md ${
                isActive("/quizzes")
                  ? "bg-emerald-600 text-white"
                  : "text-white hover:bg-emerald-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {i18n.language === 'en' ? 'Quizzes' : 'Quiz'}
              </div>
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-emerald-600 text-white"
                  : "text-white hover:bg-emerald-600"
              }`}
            >
              {t("nav.about")}
            </Link>
            
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            
            <div className="px-3 py-2">
              {user ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    closeMenu();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>{t("nav.signOut")}</span>
                </button>
              ) : (
                <Link
                  to="/signin"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  <span>{t("nav.signIn")}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};