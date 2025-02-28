// src/services/plantService.ts
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Type de plante qui correspond à votre structure actuelle
export interface Plant {
  id: string;
  scientificName: string;
  commonName: {
    en: string;
    fr: string;
  };
  thumbnailUrl: string;
  imageUrl: string;
  medicinalUses: {
    en: string[];
    fr: string[];
  };
  description: {
    en: string;
    fr: string;
  };
  preparation: {
    en: string;
    fr: string;
  };
}

const PLANTS_COLLECTION = 'plants';

// Récupérer toutes les plantes
export const getAllPlants = async (): Promise<Plant[]> => {
  try {
    const plantsCollection = collection(db, PLANTS_COLLECTION);
    const querySnapshot = await getDocs(plantsCollection);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Plant));
  } catch (error) {
    console.error('Erreur lors de la récupération des plantes:', error);
    throw error;
  }
};

// Récupérer une plante par son ID
export const getPlantById = async (id: string): Promise<Plant> => {
  try {
    const plantDoc = doc(db, PLANTS_COLLECTION, id);
    const docSnapshot = await getDoc(plantDoc);
    
    if (!docSnapshot.exists()) {
      throw new Error(`Plante avec l'ID ${id} non trouvée`);
    }
    
    return {
      id: docSnapshot.id,
      ...docSnapshot.data()
    } as Plant;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la plante avec l'ID ${id}:`, error);
    throw error;
  }
};

// Rechercher des plantes
export const searchPlants = async (searchQuery: string, language: 'en' | 'fr'): Promise<Plant[]> => {
  try {
    // Note: La recherche dans Firestore est limitée
    // Cette approche simplifiée récupère toutes les plantes et filtre côté client
    const plants = await getAllPlants();
    const searchLower = searchQuery.toLowerCase();
    
    return plants.filter(plant => 
      plant.scientificName.toLowerCase().includes(searchLower) ||
      plant.commonName[language].toLowerCase().includes(searchLower) ||
      plant.medicinalUses[language].some(use => use.toLowerCase().includes(searchLower))
    );
  } catch (error) {
    console.error('Erreur lors de la recherche des plantes:', error);
    throw error;
  }
};

// Ajouter une nouvelle plante
export const addPlant = async (plantData: Omit<Plant, 'id'>): Promise<Plant> => {
  try {
    const plantsCollection = collection(db, PLANTS_COLLECTION);
    const docRef = await addDoc(plantsCollection, plantData);
    
    return {
      id: docRef.id,
      ...plantData
    };
  } catch (error) {
    console.error('Erreur lors de l\'ajout d\'une plante:', error);
    throw error;
  }
};

// Mettre à jour une plante
export const updatePlant = async (id: string, plantData: Partial<Omit<Plant, 'id'>>): Promise<void> => {
  try {
    const plantDoc = doc(db, PLANTS_COLLECTION, id);
    await updateDoc(plantDoc, plantData);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la plante avec l'ID ${id}:`, error);
    throw error;
  }
};

// Supprimer une plante
export const deletePlant = async (id: string): Promise<void> => {
  try {
    const plantDoc = doc(db, PLANTS_COLLECTION, id);
    await deleteDoc(plantDoc);
  } catch (error) {
    console.error(`Erreur lors de la suppression de la plante avec l'ID ${id}:`, error);
    throw error;
  }
};