import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlaskConical, MessageCircle, Send, ThumbsUp, Trash2 } from 'lucide-react';
import { remedies } from '../data/remedies';
import { useAuth } from '../contexts/AuthContext';
import { 
  addComment, 
  getCommentsByRemedyId, 
  deleteComment, 
  likeComment 
} from '../services/commentsService';
import { User } from 'firebase/auth';

// Type pour les commentaires
interface Comment {
  id: string;
  remedyId: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
  likes: number;
  likedBy: string[];
}

export function Remedies() {
  const { i18n, t } = useTranslation();
  const { user } = useAuth() as { user: User | null; };
  const [comments, setComments] = useState<{ [key: string]: Comment[]; }>({});
  const [newComments, setNewComments] = useState<{ [key: string]: string; }>({});
  const [expandedRemedy, setExpandedRemedy] = useState<string | null>(null);
  const [loading, setLoading] = useState<{ [key: string]: boolean; }>({});

  // Récupérer les commentaires lors du chargement initial
  useEffect(() => {
    const fetchComments = async () => {
      const commentsData: { [key: string]: Comment[]; } = {};
      const loadingStatus: { [key: string]: boolean; } = {};

      // Initialiser l'état de chargement pour chaque remède
      remedies.forEach(remedy => {
        loadingStatus[remedy.id] = true;
      });

      setLoading(loadingStatus);

      // Récupérer les commentaires pour chaque remède
      await Promise.all(
        remedies.map(async (remedy) => {
          try {
            const remedyComments = await getCommentsByRemedyId(remedy.id);
            commentsData[remedy.id] = remedyComments.map(comment => ({
              ...comment,
              remedyId: remedy.id,
              userId: (comment as Comment).userId || '',
              userName: (comment as Comment).userName || 'Anonymous',
              content: (comment as Comment).content || '',
              likes: (comment as Comment).likes || 0,
              likedBy: (comment as Comment).likedBy || []
            }));
          } catch (error) {
            console.error(`Erreur lors de la récupération des commentaires pour le remède ${remedy.id}:`, error);
            commentsData[remedy.id] = [];
          } finally {
            loadingStatus[remedy.id] = false;
          }
        })
      );

      setComments(commentsData);
      setLoading(loadingStatus);
    };

    fetchComments();
  }, []);

  // Initialiser les champs de commentaires vides pour chaque remède
  useEffect(() => {
    const initialComments: { [key: string]: string; } = {};
    remedies.forEach(remedy => {
      initialComments[remedy.id] = '';
    });
    setNewComments(initialComments);
  }, []);

  // Gérer la soumission d'un nouveau commentaire
  const handleCommentSubmit = async (remedyId: string) => {
    if (!user) return;
    if (!newComments[remedyId].trim()) return;

    try {
      const commentData = {
        remedyId,
        userId: user.uid,
        userName: user.displayName || user.email?.split('@')[0] || 'Utilisateur anonyme',
        content: newComments[remedyId],
        createdAt: new Date(),
        likes: 0,
        likedBy: []
      };

      const newComment = await addComment(commentData);

      // Mettre à jour l'état local des commentaires
      setComments(prev => ({
        ...prev,
        [remedyId]: [...(prev[remedyId] || []), newComment]
      }));

      // Réinitialiser le champ de commentaire
      setNewComments(prev => ({
        ...prev,
        [remedyId]: ''
      }));
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
    }
  };

  // Gérer la suppression d'un commentaire
  const handleDeleteComment = async (commentId: string, remedyId: string) => {
    if (!user) return;

    try {
      await deleteComment(commentId);

      // Mettre à jour l'état local des commentaires
      setComments(prev => ({
        ...prev,
        [remedyId]: prev[remedyId].filter(comment => comment.id !== commentId)
      }));
    } catch (error) {
      console.error('Erreur lors de la suppression du commentaire:', error);
    }
  };

  // Gérer le like d'un commentaire
  const handleLikeComment = async (commentId: string, remedyId: string) => {
    if (!user) return;

    try {
      const updatedCommentData = await likeComment(commentId, user.uid) as Comment;
      const updatedComment: Comment = {
        ...updatedCommentData,
        remedyId,
        userId: updatedCommentData.userId || '',
        userName: updatedCommentData.userName || 'Anonymous',
        content: updatedCommentData.content || ''
      };

      // Mettre à jour l'état local des commentaires
      setComments(prev => ({
        ...prev,
        [remedyId]: prev[remedyId].map(comment => comment.id === commentId ? updatedComment : comment
        )
      }));
    } catch (error) {
      console.error('Erreur lors du like du commentaire:', error);
    }
  };

  // Formater la date pour l'affichage
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Toggle l'expansion des commentaires d'un remède
  const toggleComments = (remedyId: string) => {
    setExpandedRemedy(expandedRemedy === remedyId ? null : remedyId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {i18n.language === 'en' ? 'Traditional Remedies' : 'Remèdes Traditionnels'}
        </h1>
        <p className="text-xl text-gray-600">
          {i18n.language === 'en'
            ? 'Discover traditional African healing remedies'
            : 'Découvrez les remèdes de guérison traditionnels africains'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {remedies.map((remedy) => (
          <div key={remedy.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={remedy.imageUrl}
              alt={remedy.title[i18n.language as 'en' | 'fr']}
              className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {remedy.title[i18n.language as 'en' | 'fr']}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                {remedy.description[i18n.language as 'en' | 'fr']}
              </p>

              {/* Section des commentaires */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => toggleComments(remedy.id)}
                  className="flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>
                    {comments[remedy.id]?.length || 0} {t('comments.title', 'Commentaires')}
                  </span>
                </button>

                {expandedRemedy === remedy.id && (
                  <div className="mt-4">
                    {/* Liste des commentaires */}
                    {loading[remedy.id] ? (
                      <p className="text-gray-500 text-center py-2">
                        {t('comments.loading', 'Chargement des commentaires...')}
                      </p>
                    ) : comments[remedy.id]?.length > 0 ? (
                      <div className="space-y-4">
                        {comments[remedy.id].map((comment) => (
                          <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{comment.userName}</p>
                                <p className="text-sm text-gray-500">
                                  {formatDate(comment.createdAt)}
                                </p>
                              </div>
                              {user && user.uid === comment.userId && (
                                <button
                                  onClick={() => handleDeleteComment(comment.id, remedy.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                            <p className="mt-2">{comment.content}</p>
                            <div className="mt-2 flex items-center">
                              <button
                                onClick={() => handleLikeComment(comment.id, remedy.id)}
                                className={`flex items-center text-sm ${user && comment.likedBy.includes(user.uid)
                                    ? 'text-emerald-600'
                                    : 'text-gray-500 hover:text-emerald-600'}`}
                                disabled={!user}
                              >
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                <span>{comment.likes}</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-2">
                        {t('comments.empty', 'Aucun commentaire pour le moment')}
                      </p>
                    )}

                    {/* Formulaire d'ajout de commentaire */}
                    {user ? (
                      <div className="mt-4 flex">
                        <input
                          type="text"
                          value={newComments[remedy.id] || ''}
                          onChange={(e) => setNewComments(prev => ({
                            ...prev,
                            [remedy.id]: e.target.value
                          }))}
                          placeholder={t('comments.placeholder', 'Ajouter un commentaire...')}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        <button
                          onClick={() => handleCommentSubmit(remedy.id)}
                          disabled={!newComments[remedy.id]?.trim()}
                          className="bg-emerald-600 text-white px-3 py-2 rounded-r-md hover:bg-emerald-700 disabled:bg-emerald-300"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-2">
                        {t('comments.login', 'Connectez-vous pour laisser un commentaire')}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}