// src/components/RemedyComments.js
import React, { useState, useEffect } from 'react';
import { addComment, likeComment, deleteComment } from '../services/commentsService.js';
import { getAuth } from 'firebase/auth'; // Importation correcte pour Firebase v9+
import firebase from 'firebase/compat/app'; // Importation de firebase pour compatibilité

interface Comment {
  id: string;
  userName?: string;
  createdAt?: firebase.firestore.Timestamp;
  content: string;
  likes?: number;
  userId?: string;
}

const RemedyComments = ({ remedyId }: { remedyId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth(); // Obtenir l'instance d'authentification

  // Récupérer les commentaires au chargement du composant
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const commentsData = await getCommentsByRemedy(remedyId);
        setComments(commentsData);
        setError(null);
      } catch (err) {
        setError('Impossible de charger les commentaires');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [remedyId]);

  // Ajouter un nouveau commentaire
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const addedComment = await addComment(newComment, remedyId);
      setComments([addedComment, ...comments]);
      setNewComment('');
    } catch (err) {
      setError('Impossible d\'ajouter le commentaire');
      console.error(err);
    }
  };

  // Liker un commentaire
  const handleLike = async (commentId) => {
    try {
      await likeComment(commentId);
      // Recharger les commentaires pour avoir les données à jour
      const updatedComments = await getCommentsByRemedy(remedyId);
      setComments(updatedComments);
    } catch (err) {
      setError('Impossible d\'ajouter un like');
      console.error(err);
    }
  };

  // Supprimer un commentaire
  const handleDelete = async (commentId) => {
    try {
      await deleteComment(commentId);
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (err) {
      setError('Impossible de supprimer le commentaire');
      console.error(err);
    }
  };

  if (loading) return <p>Chargement des commentaires...</p>;

  return (
    <div className="comments-section">
      <h3>Commentaires</h3>
      
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleAddComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
          rows={3}
        />
        <button type="submit">Publier</button>
      </form>
      
      <div className="comments-list">
        {comments.length === 0 ? (
          <p>Aucun commentaire pour le moment. Soyez le premier à commenter !</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <span className="comment-author">{comment.userName || 'Utilisateur anonyme'}</span>
                <span className="comment-date">
                  {/* Gestion correcte des timestamps Firestore */}
                  {comment.createdAt 
                    ? new Date(comment.createdAt.toDate()).toLocaleString() 
                    : 'À l\'instant'}
                </span>
              </div>
              <p className="comment-content">{comment.content}</p>
              <div className="comment-actions">
                <button onClick={() => handleLike(comment.id)}>
                  {comment.likes || 0} J'aime
                </button>
                {/* Vérification correcte de l'utilisateur actuel */}
                {auth.currentUser?.uid === comment.userId && (
                  <button onClick={() => handleDelete(comment.id)}>Supprimer</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RemedyComments;

import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

async function getCommentsByRemedy(remedyId: string) {
  const db = getFirestore();
  const commentsQuery = query(collection(db, 'comments'), where('remedyId', '==', remedyId));
  const querySnapshot = await getDocs(commentsQuery);
  const commentsData = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      userName: data.userName || 'Utilisateur anonyme',
      createdAt: data.createdAt || new Date(),
      content: data.content || '',
      likes: data.likes || 0,
      userId: data.userId || ''
    };
  });
  return commentsData;
}
