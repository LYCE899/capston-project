// importSelectedData.js - Version CommonJS

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, writeBatch, doc } = require('firebase/firestore');

// Pour les fichiers TypeScript, vous aurez besoin d'une étape supplémentaire
// Option la plus simple : accéder directement aux fichiers JSON si disponibles
// ou créer des versions .js de vos fichiers de données
// Si vos données sont exportées avec export default, utilisez .default
const quizzes = require('../frontend/src/data/quizData.js');
let plants;
let remedies;

try {
  // Essayer de charger les fichiers TypeScript comme s'ils étaient des modules JavaScript
  // Cela peut fonctionner si ce sont des fichiers .ts qui ont été transpilés en .js
  plants = require('../frontend/src/data/plants.ts');
  remedies = require('../frontend/src/data/remedies.ts');
} catch (error) {
  console.error("Impossible de charger les fichiers TypeScript directement. Erreur:", error.message);
  console.log("Vous devrez peut-être transpiler ces fichiers en JavaScript d'abord ou utiliser ts-node.");
  console.log("Pour l'instant, nous allons continuer avec seulement les quizzes.");
  plants = { length: 0 };
  remedies = { length: 0 };
}

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDSt9a_1HF6NBrDX_JlAjbl-7hCCk6K1iM",
  authDomain: "projectafrimeds.firebaseapp.com",
  projectId: "projectafrimeds",
  storageBucket: "projectafrimeds.firebasestorage.app",
  messagingSenderId: "500792560306",
  appId: "1:500792560306:web:6721e04b0ae380e74697ab",
  measurementId: "G-3J3BH7P2JS"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction pour importer des données dans une collection spécifique
async function importDataToCollection(data, collectionName) {
  try {
    // Création d'un nouveau batch d'écriture
    let batch = writeBatch(db);
    let count = 0;
    
    // Firebase limite les batch à 500 documents
    const BATCH_LIMIT = 500;
    
    // Divise les données en lots si nécessaire
    for (let i = 0; i < data.length; i++) {
      // Crée une référence de document avec un ID auto-généré ou utilise l'ID existant
      const docRef = data[i].id 
        ? doc(db, collectionName, data[i].id) 
        : doc(collection(db, collectionName));
      
      batch.set(docRef, data[i]);
      count++;
      
      // Si on atteint la limite ou c'est le dernier élément, on commit le batch
      if (count === BATCH_LIMIT || i === data.length - 1) {
        await batch.commit();
        console.log(`Lot de ${count} documents ajoutés à la collection "${collectionName}"`);
        
        // Réinitialiser pour le prochain lot
        if (i < data.length - 1) {
          count = 0;
          batch = writeBatch(db);
        }
      }
    }
    
    console.log(`Importation terminée : ${data.length} documents ajoutés à la collection "${collectionName}"`);
  } catch (error) {
    console.error(`Erreur lors de l'importation dans la collection "${collectionName}":`, error);
  }
}

// Fonction principale pour importer seulement les données sélectionnées
async function importSelectedData() {
  try {
    console.log("Début de l'importation des données sélectionnées...");
    
    // Importer les quiz
    if (quizzes && quizzes.length > 0) {
      console.log(`Importation de ${quizzes.length} quiz...`);
      await importDataToCollection(quizzes, "quizzes");
    }
    
    // Importer les plantes
    if (plants && plants.length > 0) {
      console.log(`Importation de ${plants.length} plantes...`);
      await importDataToCollection(plants, "plants");
    }
    
    // Importer les remèdes
    if (remedies && remedies.length > 0) {
      console.log(`Importation de ${remedies.length} remèdes...`);
      await importDataToCollection(remedies, "remedies");
    }
    
    // La collection tips n'est pas importée pour le moment
    
    console.log("Importation des données sélectionnées terminée avec succès!");
  } catch (error) {
    console.error("Erreur lors de l'importation des données:", error);
  }
}

// Exécuter le script
importSelectedData();