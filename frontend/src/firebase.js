// Initialiser Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// src/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDSt9a_1HF6NBrDX_JlAjbl-7hCCk6K1iM",
  authDomain: "projectafrimeds.firebaseapp.com",
  projectId: "projectafrimeds",
  storageBucket: "projectafrimeds.firebasestorage.app",
  messagingSenderId: "500792560306",
  appId: "1:500792560306:web:6721e04b0ae380e74697ab",
  measurementId: "G-3J3BH7P2JS"
};

// Initialiser Firebase
export const app = initializeApp(firebaseConfig);

// Initialiser Firestore
export const db = getFirestore(app);

// Initialiser Auth
export const auth = getAuth(app);