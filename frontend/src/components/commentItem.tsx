import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';

// Interface pour représenter un commentaire
interface Comment {
  id: string;
  userId: string;
  userName?: string; // Nom d'utilisateur (peut ne pas être défini dans les anciens commentaires)
  content: string;
  createdAt: Date;
  likes: number;
  likedBy?: string[];
}

interface CommentItemProps {
  comment: Comment;
  onLike?: (commentId: string) => Promise<void>;
  onDelete?: (commentId: string) => Promise<void>;
}

const CommentItem: React.FC<CommentItemProps> = ({ 
  comment, 
  onLike, 
  onDelete 
}) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const isOwner = currentUser && currentUser.uid === comment.userId;
  
  // Vérifier si l'utilisateur actuel a déjà liké ce commentaire
  const hasLiked = currentUser && comment.likedBy?.includes(currentUser.uid);
  
  // Générer les initiales du nom d'utilisateur pour l'avatar
  const getUserInitials = () => {
    if (!comment.userName) return '?';
    return comment.userName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Formater la date relative (ex: "il y a 2 heures")
  const formattedDate = formatDistanceToNow(new Date(comment.createdAt), { 
    addSuffix: true,
    locale: fr
  });

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-start">
        {/* Avatar avec initiales */}
        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-3">
          {getUserInitials()}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <div>
              {/* Nom d'utilisateur */}
              <span className="font-medium text-gray-900">
                {comment.userName || "Utilisateur"}
              </span>
              
              {/* Badge "Vous" si c'est le commentaire de l'utilisateur actuel */}
              {isOwner && (
                <span className="ml-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  You
                </span>
              )}
              
              {/* Date du commentaire */}
              <span className="text-sm text-gray-500 ml-2">{formattedDate}</span>
            </div>
            
            {/* Bouton de suppression (visible uniquement par l'auteur) */}
            {isOwner && onDelete && (
              <button 
                onClick={() => onDelete(comment.id)}
                className="text-gray-400 hover:text-red-500"
                aria-label="Supprimer le commentaire"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Contenu du commentaire */}
          <p className="text-gray-700">{comment.content}</p>
          
          {/* Bouton "J'aime" */}
          {onLike && (
            <button 
              onClick={() => onLike(comment.id)}
              className={`flex items-center mt-2 text-sm ${
                hasLiked ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1" 
                fill={hasLiked ? "currentColor" : "none"} 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span>{comment.likes || 0}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;