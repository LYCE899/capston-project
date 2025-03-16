// src/services/userservices.js
// Version locale utilisant localStorage pour les favoris

// Simuler un délai pour imiter le comportement asynchrone
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Obtenir les favoris d'un utilisateur
export const getUserFavorites = async (userId) => {
  try {
    // Simuler latence réseau
    await delay(300);
    
    // Récupérer depuis localStorage
    const storedFavorites = localStorage.getItem(`favorites_${userId}`);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    console.error('Erreur lors de la récupération des favoris:', error);
    return [];
  }
};

// Ajouter un remède aux favoris
export const addToFavorites = async (userId, remedyId, remedyData) => {
  try {
    // Simuler latence réseau
    await delay(300);
    
    // Récupérer les favoris actuels
    const favorites = await getUserFavorites(userId);
    
    // Vérifier si déjà dans les favoris
    if (!favorites.some(fav => fav.remedyId === remedyId)) {
      // Créer un nouvel objet favori
      const newFavorite = {
        id: `fav_${Date.now()}`, // Générer un ID unique
        remedyId,
        userId,
        addedAt: new Date(),
        remedyData
      };
      
      // Ajouter aux favoris existants
      favorites.push(newFavorite);
      
      // Sauvegarder dans localStorage
      localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites));
      
      return newFavorite;
    }
    return null;
  } catch (error) {
    console.error('Erreur lors de l\'ajout aux favoris:', error);
    throw error;
  }
};

// Supprimer un remède des favoris
export const removeFromFavorites = async (userId, remedyId) => {
  try {
    // Simuler latence réseau
    await delay(300);
    
    // Récupérer les favoris actuels
    const favorites = await getUserFavorites(userId);
    
    // Filtrer pour enlever le remède
    const updatedFavorites = favorites.filter(fav => fav.remedyId !== remedyId);
    
    // Sauvegarder dans localStorage
    localStorage.setItem(`favorites_${userId}`, JSON.stringify(updatedFavorites));
    
    return remedyId;
  } catch (error) {
    console.error('Erreur lors de la suppression des favoris:', error);
    throw error;
  }
};

// Vérifier si un remède est dans les favoris
export const checkIsFavorite = async (userId, remedyId) => {
  try {
    // Simuler latence réseau
    await delay(300);
    
    const favorites = await getUserFavorites(userId);
    return favorites.some(fav => fav.remedyId === remedyId);
  } catch (error) {
    console.error('Erreur lors de la vérification des favoris:', error);
    return false;
  }
};

// Obtenir tous les utilisateurs (non implémenté en local)
export const getAllUsers = async () => {
  console.log("getAllUsers n'est pas implémenté en mode local");
  return [];
};

// Mettre à jour le profil utilisateur (non implémenté en local)
export const updateUserProfile = async (userId, userData) => {
  console.log("updateUserProfile n'est pas implémenté en mode local");
  return null;
};

export default {
  getUserFavorites,
  addToFavorites,
  removeFromFavorites,
  checkIsFavorite,
  getAllUsers,
  updateUserProfile
};