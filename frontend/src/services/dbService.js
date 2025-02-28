// src/services/dbService.js
import { 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../firebase';

// Collection des plantes médicinales
const PLANTS_COLLECTION = 'plants';

// Ajouter une nouvelle plante
export const addPlant = async (plantData) => {
  try {
    const docRef = await addDoc(collection(db, PLANTS_COLLECTION), {
      ...plantData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return { id: docRef.id, ...plantData };
  } catch (error) {
    console.error("Erreur lors de l'ajout de la plante:", error);
    throw error;
  }
};

// Récupérer toutes les plantes
export const getAllPlants = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, PLANTS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des plantes:", error);
    throw error;
  }
};

// Récupérer une plante par son ID
export const getPlantById = async (plantId) => {
  try {
    const docRef = doc(db, PLANTS_COLLECTION, plantId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Plante non trouvée");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la plante:", error);
    throw error;
  }
};

// Mettre à jour une plante
export const updatePlant = async (plantId, plantData) => {
  try {
    const docRef = doc(db, PLANTS_COLLECTION, plantId);
    await updateDoc(docRef, {
      ...plantData,
      updatedAt: new Date()
    });
    return { id: plantId, ...plantData };
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la plante:", error);
    throw error;
  }
};

// Supprimer une plante
export const deletePlant = async (plantId) => {
  try {
    const docRef = doc(db, PLANTS_COLLECTION, plantId);
    await deleteDoc(docRef);
    return plantId;
  } catch (error) {
    console.error("Erreur lors de la suppression de la plante:", error);
    throw error;
  }
};

// Rechercher des plantes par un terme
export const searchPlants = async (searchTerm) => {
  try {
    // Note: Firestore ne prend pas en charge les recherches de texte intégral nativement
    // Cette approche est simplifiée et limite la recherche aux champs spécifiques
    const plantsRef = collection(db, PLANTS_COLLECTION);
    const q = query(
      plantsRef,
      where("name", ">=", searchTerm),
      where("name", "<=", searchTerm + '\uf8ff')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Erreur lors de la recherche de plantes:", error);
    throw error;
  }
};

// Récupérer les plantes récemment ajoutées
export const getRecentPlants = async (limit = 5) => {
  try {
    const plantsRef = collection(db, PLANTS_COLLECTION);
    const q = query(
      plantsRef,
      orderBy("createdAt", "desc"),
      limit(limit)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des plantes récentes:", error);
    throw error;
  }
};