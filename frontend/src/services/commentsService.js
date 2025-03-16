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

const COMMENTS_COLLECTION = 'comments';

// Ajouter un nouveau commentaire
export const addComment = async (commentData) => {
  try {
    const commentsCollection = collection(db, COMMENTS_COLLECTION);
    
    // Préparer les données du commentaire
    const comment = {
      ...commentData,
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
      createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
      updatedAt: data.updatedAt ? data.updatedAt.toDate() : new Date()
    };
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du commentaire ${commentId}:`, error);
    throw error;
  }
};

export default {
  addComment,
  getCommentsByRemedyId,
  deleteComment,
  likeComment,
  getCommentById,
  getCommentsByUserId,
  updateComment
};