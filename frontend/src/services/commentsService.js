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
} from 'firebase/firestore';
import { db } from '../firebase';

const COMMENTS_COLLECTION = 'comments';

// Ajouter un nouveau commentaire
export async function addComment(commentData, _remedyId) {
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
}

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
    const isLiked = comment.likedBy.includes(userId);
    
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
        likes: comment.likes + 1,
        likedBy: arrayUnion(userId)
      });
      
      return {
        id: commentId,
        ...comment,
        likes: comment.likes + 1,
        likedBy: [...comment.likedBy, userId],
        createdAt: comment.createdAt.toDate()
      };
    }
  } catch (error) {
    console.error(`Erreur lors du like/unlike du commentaire ${commentId}:`, error);
    throw error;
  }
};