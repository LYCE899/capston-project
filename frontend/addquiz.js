// addQuiz.js
// Importations ES module
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDSt9a_1HF6NBrDX_JlAjbl-7hCCk6K1iM",
  authDomain: "projectafrimeds.firebaseapp.com", 
  projectId: "projectafrimeds",
  storageBucket: "projectafrimeds.firebasestorage.app",
  messagingSenderId: "500792560306",
  appId: "1:500792560306:web:6721e04b0ae380e74697ab"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Données du quiz
const quizData = {
  title: {
    en: "Discovering African Medicinal Plants",
    fr: "À la découverte des plantes médicinales africaines"
  },
  description: {
    en: "Test your knowledge about traditional African medicinal plants and their uses",
    fr: "Testez vos connaissances sur les plantes médicinales traditionnelles africaines et leurs utilisations"
  },
  difficulty: "mixed",
  category: "general",
  timeInMinutes: 10,
  questions: [
    {
      id: "q1",
      question: {
        en: "Which plant is traditionally called 'Djeka' in Côte d'Ivoire?",
        fr: "Quelle plante est traditionnellement appelée 'Djéka' en Côte d'Ivoire ?"
      },
      options: {
        en: [
          "Alchornea cordifolia",
          "Anthocleista nobilis",
          "Antidesma venosum",
          "Baphia nitida"
        ],
        fr: [
          "Alchornea cordifolia",
          "Anthocleista nobilis",
          "Antidesma venosum",
          "Baphia nitida"
        ]
      },
      correctAnswerIndex: 0,
      explanation: {
        en: "Alchornea cordifolia is known as 'Djeka' and is widely used in traditional medicine for intimate hygiene and post-partum care.",
        fr: "Alchornea cordifolia est connue sous le nom de 'Djéka' et est largement utilisée en médecine traditionnelle pour l'hygiène intime et les soins post-partum."
      }
    },
    // Ajoutez les autres questions ici
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};

// Fonction pour ajouter le quiz
async function addQuiz() {
  try {
    const docRef = await addDoc(collection(db, "quizzes"), quizData);
    console.log("Quiz ajouté avec l'ID:", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout du quiz:", error);
  }
}

// Exécuter la fonction
addQuiz();