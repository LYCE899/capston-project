// src/scripts/migrateToFirestore.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { plants } from '../data/plants';

// Suppression de la signature de type Promise<void>
const migrateToFirestore = async () => {
  console.log('Début de la migration des plantes vers Firestore...');
  const plantsCollection = collection(db, 'plants');
  
  try {
    let successCount = 0;
    
    // Pour chaque plante, créez un document dans la collection plants
    for (const plant of plants) {
      // Évitez d'inclure l'ID, Firestore le générera
      const { id, ...plantData } = plant;
      
      // Ajoutez quelques métadonnées utiles
      const plantWithMetadata = {
        ...plantData,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // Ajoutez le document à Firestore
      const docRef = await addDoc(plantsCollection, plantWithMetadata);
      console.log(`Plante "${plantData.scientificName}" ajoutée avec l'ID: ${docRef.id}`);
      successCount++;
    }
    
    console.log(`Migration terminée avec succès! ${successCount} plantes migrées sur ${plants.length}.`);
  } catch (error) {
    console.error('Erreur lors de la migration:', error);
    throw error; // Re-throw l'erreur pour la gérer dans le composant
  }
};

export default migrateToFirestore;