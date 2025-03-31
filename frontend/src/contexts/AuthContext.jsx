// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { app } from '../firebase';

// Création du contexte avec une valeur par défaut
const AuthContext = createContext({
  user: null,
  signUp: async (email, password) => {},
  signIn: async (email, password) => {},
  signOut: async () => {},
  loading: true
});

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  return useContext(AuthContext);
};

// Composant Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  // Inscription
  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // L'utilisateur est créé
        console.log('User created:', userCredential.user);
      });
  };

  // Connexion
  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // L'utilisateur est connecté
        console.log('User signed in:', userCredential.user);
      });
  };

  // Déconnexion
  const signOut = async () => {
    return firebaseSignOut(auth);
  };

  // Observer les changements d'état d'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Nettoyage lors du démontage
    return unsubscribe;
  }, [auth]);

  // Valeur du contexte
  const value = {
    user,
    signUp,
    signIn,
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};