// src/services/remediesService.js
import { allRemedies, remedies, compositeRemedies } from "../data/remedies";

// Simuler un délai pour imiter le comportement asynchrone
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Récupérer les notes depuis localStorage
const getRatingsFromStorage = () => {
  try {
    const stored = localStorage.getItem('remedy_ratings');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Erreur lors de la récupération des notes:', error);
    return {};
  }
};

// Sauvegarder les notes dans localStorage
const saveRatingsToStorage = (ratings) => {
  localStorage.setItem('remedy_ratings', JSON.stringify(ratings));
};

// Récupérer tous les remèdes
export const getAllRemedies = async () => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    
    // Appliquer les notes aux remèdes
    const remediesWithRatings = allRemedies.map(remedy => {
      const storedRating = ratings[remedy.id];
      if (storedRating) {
        return {
          ...remedy,
          rating: storedRating.averageRating,
          reviews: storedRating.totalReviews
        };
      }
      return remedy;
    });
    
    return remediesWithRatings;
  } catch (error) {
    console.error('Erreur lors de la récupération des remèdes:', error);
    throw error;
  }
};

// Récupérer un remède par son ID
export const getRemedyById = async (remedyId) => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    const remedy = allRemedies.find(r => r.id === remedyId);
    
    if (!remedy) {
      throw new Error(`Remède avec l'ID ${remedyId} non trouvé`);
    }
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    const storedRating = ratings[remedyId];
    
    if (storedRating) {
      return {
        ...remedy,
        rating: storedRating.averageRating,
        reviews: storedRating.totalReviews
      };
    }
    
    return remedy;
  } catch (error) {
    console.error(`Erreur lors de la récupération du remède ${remedyId}:`, error);
    throw error;
  }
};

// Récupérer les remèdes par catégorie
export const getRemediesByCategory = async (category) => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    const filteredRemedies = allRemedies.filter(remedy => remedy.category === category);
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    
    // Appliquer les notes aux remèdes
    return filteredRemedies.map(remedy => {
      const storedRating = ratings[remedy.id];
      if (storedRating) {
        return {
          ...remedy,
          rating: storedRating.averageRating,
          reviews: storedRating.totalReviews
        };
      }
      return remedy;
    });
  } catch (error) {
    console.error(`Erreur lors de la récupération des remèdes de la catégorie ${category}:`, error);
    throw error;
  }
};

// Récupérer les remèdes populaires
export const getPopularRemedies = async (count = 5) => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    
    // Appliquer les notes aux remèdes et les trier par note
    const remediesWithRatings = allRemedies.map(remedy => {
      const storedRating = ratings[remedy.id];
      if (storedRating) {
        return {
          ...remedy,
          rating: storedRating.averageRating,
          reviews: storedRating.totalReviews
        };
      }
      return {
        ...remedy,
        rating: 0,
        reviews: 0
      };
    });
    
    // Trier par nombre d'évaluations, puis par note moyenne
    const sortedRemedies = remediesWithRatings.sort((a, b) => {
      if (b.reviews !== a.reviews) {
        return b.reviews - a.reviews;
      }
      return b.rating - a.rating;
    });
    
    return sortedRemedies.slice(0, count);
  } catch (error) {
    console.error('Erreur lors de la récupération des remèdes populaires:', error);
    throw error;
  }
};

// Récupérer les remèdes récents
export const getRecentRemedies = async (count = 5) => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    
    // Appliquer les notes aux remèdes
    const remediesWithRatings = [...allRemedies].reverse().map(remedy => {
      const storedRating = ratings[remedy.id];
      if (storedRating) {
        return {
          ...remedy,
          rating: storedRating.averageRating,
          reviews: storedRating.totalReviews
        };
      }
      return remedy;
    });
    
    return remediesWithRatings.slice(0, count);
  } catch (error) {
    console.error('Erreur lors de la récupération des remèdes récents:', error);
    throw error;
  }
};

// Rechercher des remèdes
export const searchRemedies = async (searchTerm) => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    const term = searchTerm.toLowerCase();
    
    const filteredRemedies = allRemedies.filter(remedy => {
      const titleEn = remedy.title?.en?.toLowerCase() || '';
      const titleFr = remedy.title?.fr?.toLowerCase() || '';
      const descEn = remedy.description?.en?.toLowerCase() || '';
      const descFr = remedy.description?.fr?.toLowerCase() || '';
      const plantsEn = remedy.plants?.en?.join(' ').toLowerCase() || '';
      const plantsFr = remedy.plants?.fr?.join(' ').toLowerCase() || '';
      const conditionsEn = remedy.conditions?.en?.toLowerCase() || '';
      const conditionsFr = remedy.conditions?.fr?.toLowerCase() || '';
      
      return (
        titleEn.includes(term) ||
        titleFr.includes(term) ||
        descEn.includes(term) ||
        descFr.includes(term) ||
        plantsEn.includes(term) ||
        plantsFr.includes(term) ||
        conditionsEn.includes(term) ||
        conditionsFr.includes(term)
      );
    });
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    
    // Appliquer les notes aux remèdes
    return filteredRemedies.map(remedy => {
      const storedRating = ratings[remedy.id];
      if (storedRating) {
        return {
          ...remedy,
          rating: storedRating.averageRating,
          reviews: storedRating.totalReviews
        };
      }
      return remedy;
    });
  } catch (error) {
    console.error(`Erreur lors de la recherche de remèdes avec le terme "${searchTerm}":`, error);
    throw error;
  }
};

// Incrémenter la popularité d'un remède
export const incrementRemedyPopularity = async (remedyId) => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    const remedy = allRemedies.find(r => r.id === remedyId);
    
    if (!remedy) {
      throw new Error(`Remède avec l'ID ${remedyId} non trouvé`);
    }
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    const storedRating = ratings[remedyId];
    
    if (storedRating) {
      return {
        ...remedy,
        rating: storedRating.averageRating,
        reviews: storedRating.totalReviews
      };
    }
    
    return remedy;
  } catch (error) {
    console.error(`Erreur lors de l'incrémentation de la popularité du remède ${remedyId}:`, error);
    throw error;
  }
};

// Ajouter ou mettre à jour une note pour un remède
export const rateRemedy = async (remedyId, rating, userId) => {
  try {
    if (rating < 1 || rating > 5) {
      throw new Error('La note doit être comprise entre 1 et 5');
    }
    
    // Simuler une latence réseau
    await delay(300);
    
    const remedy = allRemedies.find(r => r.id === remedyId);
    
    if (!remedy) {
      throw new Error(`Remède avec l'ID ${remedyId} non trouvé`);
    }
    
    // Récupérer les notes actuelles
    const allRatings = getRatingsFromStorage();
    const remedyRatings = allRatings[remedyId] || { 
      totalRating: 0, 
      totalReviews: 0, 
      averageRating: 0,
      userRatings: {} 
    };
    
    // Vérifier si l'utilisateur a déjà noté ce remède
    const isUpdate = userId && remedyRatings.userRatings[userId] !== undefined;
    const oldRating = isUpdate ? remedyRatings.userRatings[userId] : 0;
    
    // Mettre à jour la note totale
    let newTotalRating;
    let newTotalReviews;
    
    if (isUpdate) {
      // Soustraire l'ancienne note et ajouter la nouvelle
      newTotalRating = remedyRatings.totalRating - oldRating + rating;
      newTotalReviews = remedyRatings.totalReviews;
    } else {
      // Ajouter une nouvelle note
      newTotalRating = remedyRatings.totalRating + rating;
      newTotalReviews = remedyRatings.totalReviews + 1;
    }
    
    // Calculer la nouvelle moyenne
    const newAverageRating = newTotalRating / newTotalReviews;
    
    // Mettre à jour les données
    const updatedRatings = {
      ...allRatings,
      [remedyId]: {
        totalRating: newTotalRating,
        totalReviews: newTotalReviews,
        averageRating: newAverageRating,
        userRatings: {
          ...remedyRatings.userRatings,
          [userId || 'anonymous']: rating
        }
      }
    };
    
    // Sauvegarder dans localStorage
    saveRatingsToStorage(updatedRatings);
    
    // Retourner le remède mis à jour
    return {
      ...remedy,
      rating: newAverageRating,
      reviews: newTotalReviews
    };
  } catch (error) {
    console.error(`Erreur lors de la notation du remède ${remedyId}:`, error);
    throw error;
  }
};

// Récupérer la note donnée par un utilisateur spécifique
export const getUserRating = async (remedyId, userId) => {
  try {
    // Récupérer les notes stockées
    const allRatings = getRatingsFromStorage();
    const remedyRatings = allRatings[remedyId];
    
    if (!remedyRatings || !remedyRatings.userRatings) {
      return 0;
    }
    
    return remedyRatings.userRatings[userId] || 0;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la note de l'utilisateur:`, error);
    return 0;
  }
};

// Pagination - Récupérer les remèdes par lots
export const getRemediesPaginated = async (lastIndex = 0, pageSize = 10) => {
  try {
    // Simuler une latence réseau
    await delay(300);
    
    const start = lastIndex || 0;
    const end = start + pageSize;
    
    // Récupérer les notes stockées
    const ratings = getRatingsFromStorage();
    
    // Appliquer les notes aux remèdes
    const remediesWithRatings = allRemedies.map(remedy => {
      const storedRating = ratings[remedy.id];
      if (storedRating) {
        return {
          ...remedy,
          rating: storedRating.averageRating,
          reviews: storedRating.totalReviews
        };
      }
      return remedy;
    });
    
    const remediesPage = remediesWithRatings.slice(start, end);
    
    return {
      remedies: remediesPage,
      lastVisible: end < remediesWithRatings.length ? end : null
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des remèdes paginés:', error);
    throw error;
  }
};

// Nous gardons ces fonctions mais elles ne font rien en local
export const addRemedy = async () => { 
  console.log("addRemedy n'est pas implémenté en mode local");
  return null; 
};

export const updateRemedy = async () => { 
  console.log("updateRemedy n'est pas implémenté en mode local");
  return null; 
};

export const deleteRemedy = async () => { 
  console.log("deleteRemedy n'est pas implémenté en mode local");
  return null; 
};

export default {
  getAllRemedies,
  getRemedyById,
  getRemediesByCategory,
  getPopularRemedies,
  getRecentRemedies,
  searchRemedies,
  addRemedy,
  updateRemedy,
  deleteRemedy,
  incrementRemedyPopularity,
  rateRemedy,
  getUserRating,
  getRemediesPaginated
};