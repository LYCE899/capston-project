import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa';

// Définition des interfaces
interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
  likes: number;
  likedBy: string[];
}

interface CommentListProps {
  comments: Comment[];
  currentUser: { uid: string } | null; // Utilisez un type plus précis pour currentUser
  onLikeComment: (commentId: string) => void;
  onDeleteComment: (commentId: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, currentUser, onLikeComment, onDeleteComment }) => {
  if (comments.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Soyez le premier à partager votre expérience ou à poser une question.
      </div>
    );
  }

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    
    try {
      return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: fr
      });
    } catch (error) {
      console.error('Erreur lors du formatage de la date:', error);
      return '';
    }
  };

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold">
                {comment.userName?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="ml-2">
                <span className="font-medium">{comment.userName || 'Utilisateur'}</span>
                <span className="text-xs text-gray-500 ml-2">
                  {formatDate(comment.createdAt)}
                </span>
              </div>
            </div>
            
            {currentUser && currentUser.uid === comment.userId && (
              <button
                onClick={() => onDeleteComment(comment.id)}
                className="text-red-500 hover:text-red-700"
                aria-label="Supprimer le commentaire"
              >
                <FaTrash size={14} />
              </button>
            )}
          </div>
          
          <p className="text-gray-700 mt-2">{comment.content}</p>
          
          <div className="mt-4 flex items-center">
            <button
              onClick={() => onLikeComment(comment.id)}
              className="flex items-center text-gray-500 hover:text-emerald-600"
              disabled={!currentUser}
            >
              {currentUser && comment.likedBy?.includes(currentUser.uid) ? (
                <FaHeart className="text-emerald-600" />
              ) : (
                <FaRegHeart />
              )}
              <span className="ml-1">{comment.likes || 0}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;