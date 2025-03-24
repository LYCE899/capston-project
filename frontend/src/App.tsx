import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Welcome from "./pages/Welcome";
import { Home } from "./pages/Home";
import { PlantList } from "./pages/quiz/PlantList";
import { PlantDetail } from "./pages/PlantDetail";
import { Tips } from "./pages/Tips";
import { Remedies } from "./pages/Remedies";
import RemedyDetail from "./pages/RemedyDetail"; // Importation de RemedyDetail
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import About from "./pages/About";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import "./i18n/config";
import QuizList from "./pages/quiz/QuizList";
import QuizDetail from "./pages/quiz/QuizDetail";
import QuizResults from "./pages/QuizResults.tsx";
import { TawkChat } from "./components/TawkChat"; // Importez ici le composant TawkChat

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Déterminer si la page actuelle est une page publique (Welcome, SignIn, SignUp)
  const isPublicPage =
    location.pathname === "/" ||
    location.pathname === "/signin" ||
    location.pathname === "/signup";

  // Ne pas afficher Navbar/Footer sur les pages publiques
  const shouldShowNavbar = user && !isPublicPage;
  const shouldShowFooter = user && !isPublicPage;

  // Log pour déboguer l'état de l'authentification
  useEffect(() => {
    console.log("État utilisateur:", user);
    console.log("Page actuelle:", location.pathname);
    console.log("Afficher Navbar:", shouldShowNavbar);
  }, [user, location.pathname, shouldShowNavbar]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Chargement...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {shouldShowNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plants"
            element={
              <ProtectedRoute>
                <PlantList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plants/:id"
            element={
              <ProtectedRoute>
                <PlantDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tips"
            element={
              <ProtectedRoute>
                <Tips />
              </ProtectedRoute>
            }
          />
         
          <Route
            path="/remedies"
            element={
              <ProtectedRoute>
                <Remedies />
              </ProtectedRoute>
            }
          />
          {/* Nouvelle route pour les détails des remèdes */}
          <Route
            path="/remedy/:id"
            element={
              <ProtectedRoute>
                <RemedyDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes"
            element={
              <ProtectedRoute>
                <QuizList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizzes/:id"
            element={
              <ProtectedRoute>
                <QuizDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz-results"
            element={
              <ProtectedRoute>
                <QuizResults />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
        <TawkChat /> {/* Ajout du composant TawkChat ici */}
      </Router>
    </AuthProvider>
  );
}

export default App;
