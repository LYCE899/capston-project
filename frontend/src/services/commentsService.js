// src/services/commentService.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

const COMMENTS_COLLECTION = 'comments';

// Fonction utilitaire pour générer un nom d'utilisateur à partir d'un email
const generateUsernameFromEmail = (email) => {
  if (!email) return "Utilisateur";
  
  // Extraire la partie avant le @ dans l'email
  const emailName = email.split('@')[0];
  
  // Formater le nom (remplacer les points/underscores par des espaces, capitaliser les mots)
  return emailName
    .split(/[._-]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

// Ajouter un nouveau commentaire
export const addComment = async (commentData, remedyId) => {
  try {
    const commentsCollection = collection(db, COMMENTS_COLLECTION);
    const auth = getAuth();
    const currentUser = auth.currentUser;

    // Générer un nom d'utilisateur à partir de l'email
    const userName = currentUser && currentUser.email 
      ? generateUsernameFromEmail(currentUser.email) 
      : "Utilisateur";
    
    // Préparer les données du commentaire avec le nom d'utilisateur
    const comment = {
      ...commentData,
      userName, // Ajouter le nom d'utilisateur
      createdAt: serverTimestamp(),
      likes: 0,
      likedBy: []
    };
    
    // Ajouter le commentaire à Firestore
    const docRef = await addDoc(commentsCollection, comment);
    
    // Retourner le commentaire avec son ID
    return {
      id: docRef.id,
      ...comment,
      createdAt: new Date() // Pour l'affichage immédiat
    };
  } catch (error) {
    console.error('Erreur lors de l\'ajout du commentaire:', error);
    throw error;
  }
};

// Récupérer les commentaires par ID de remède
export const getCommentsByRemedyId = async (remedyId) => {
  try {
    const commentsCollection = collection(db, COMMENTS_COLLECTION);
    const q = query(
      commentsCollection,
      where('remedyId', '==', remedyId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // Si le commentaire n'a pas de userName, utiliser "Utilisateur" 
        userName: data.userName || "Utilisateur",
        createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
      };
    });
  } catch (error) {
    console.error(`Erreur lors de la récupération des commentaires pour le remède ${remedyId}:`, error);
    throw error;
  }
};

// Supprimer un commentaire
export const deleteComment = async (commentId) => {
  try {
    const commentRef = doc(db, COMMENTS_COLLECTION, commentId);
    await deleteDoc(commentRef);
    return commentId;
  } catch (error) {
    console.error(`Erreur lors de la suppression du commentaire ${commentId}:`, error);
    throw error;
  }
};

// Liker/Unliker un commentaire
export const likeComment = async (commentId, userId) => {
  try {
    const commentRef = doc(db, COMMENTS_COLLECTION, commentId);
    const commentDoc = await getDoc(commentRef);
    
    if (!commentDoc.exists()) {
      throw new Error(`Commentaire ${commentId} non trouvé`);
    }
    
    const comment = commentDoc.data();
    const isLiked = comment.likedBy && comment.likedBy.includes(userId);
    
    // Si déjà liké, retirer le like, sinon ajouter le like
    if (isLiked) {
      await updateDoc(commentRef, {
        likes: comment.likes - 1,
        likedBy: arrayRemove(userId)
      });
      
      return {
        id: commentId,
        ...comment,
        likes: comment.likes - 1,
        likedBy: comment.likedBy.filter(id => id !== userId),
        createdAt: comment.createdAt.toDate()
      };
    } else {
      await updateDoc(commentRef, {
        likes: (comment.likes || 0) + 1,
        likedBy: arrayUnion(userId)
      });
      
      return {
        id: commentId,
        ...comment,
        likes: (comment.likes || 0) + 1,
        likedBy: [...(comment.likedBy || []), userId],
        createdAt: comment.createdAt.toDate()
      };
    }
  } catch (error) {
    console.error(`Erreur lors du like/unlike du commentaire ${commentId}:`, error);
    throw error;
  }
};

// Récupérer un commentaire par son ID
export const getCommentById = async (commentId) => {
  try {
    const commentRef = doc(db, COMMENTS_COLLECTION, commentId);
    const commentDoc = await getDoc(commentRef);
    
    if (!commentDoc.exists()) {
      throw new Error(`Commentaire ${commentId} non trouvé`);
    }
    
    const data = commentDoc.data();
    return {
      id: commentDoc.id,
      ...data,
      userName: data.userName || "Utilisateur", // Assurer qu'un userName est présent
      createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération du commentaire ${commentId}:`, error);
    throw error;
  }
};

// Récupérer les commentaires d'un utilisateur
export const getCommentsByUserId = async (userId) => {
  try {
    const commentsCollection = collection(db, COMMENTS_COLLECTION);
    const q = query(
      commentsCollection,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        userName: data.userName || "Utilisateur", // Assurer qu'un userName est présent
        createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
      };
    });
  } catch (error) {
    console.error(`Erreur lors de la récupération des commentaires de l'utilisateur ${userId}:`, error);
    throw error;
  }
};

// Mettre à jour un commentaire
export const updateComment = async (commentId, newContent) => {
  try {
    const commentRef = doc(db, COMMENTS_COLLECTION, commentId);
    const commentDoc = await getDoc(commentRef);
    
    if (!commentDoc.exists()) {
      throw new Error(`Commentaire ${commentId} non trouvé`);
    }
    
    await updateDoc(commentRef, {
      content: newContent,
      updatedAt: serverTimestamp()
    });
    
    const updatedDoc = await getDoc(commentRef);
    const data = updatedDoc.data();
    
    return {
      id: commentId,
      ...data,
      userName: data.userName || "Utilisateur", // Assurer qu'un userName est présent
      createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
      updatedAt: data.updatedAt ? data.updatedAt.toDate() : new Date()
    };
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du commentaire ${commentId}:`, error);
    throw error;
  }
};

// Migrer les commentaires existants pour ajouter le nom d'utilisateur
export const migrateExistingComments = async () => {
  try {
    const commentsCollection = collection(db, COMMENTS_COLLECTION);
    const q = query(commentsCollection);
    const querySnapshot = await getDocs(q);
    
    const updatePromises = [];
    
    querySnapshot.docs.forEach(document => {
      const commentData = document.data();
      // Si le commentaire n'a pas de userName et a un userId
      if (!commentData.userName && commentData.userId) {
        const commentRef = doc(db, COMMENTS_COLLECTION, document.id);
        
        // Créer une promesse pour mettre à jour le commentaire
        const updatePromise = (async () => {
          try {
            // On peut essayer de récupérer l'utilisateur depuis une collection "users" si elle existe
            // Sinon, on utilise une valeur par défaut
            await updateDoc(commentRef, { 
              userName: "Utilisateur" 
            });
          } catch (innerError) {
            console.error(`Erreur lors de la mise à jour du commentaire ${document.id}:`, innerError);
          }
        })();
        
        updatePromises.push(updatePromise);
      }
    });
    
    // Attendre que toutes les mises à jour soient terminées
    await Promise.all(updatePromises);
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la migration des commentaires:', error);
    return false;
  }
};

export default {
  addComment,
  getCommentsByRemedyId,
  deleteComment,
  likeComment,
  getCommentById,
  getCommentsByUserId,
  updateComment,
  migrateExistingComments // Exporter la fonction de migration
};