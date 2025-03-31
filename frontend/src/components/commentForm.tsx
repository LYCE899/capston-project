import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

// Définition de l'interface pour les props
interface CommentFormProps {
  onSubmit: (data: { content: string; userName?: string }) => Promise<void>;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  // Générer un nom d'utilisateur à partir de l'email
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user && user.email) {
      // Extraire la partie avant le @ dans l'email
      const emailName = user.email.split('@')[0];
      
      // Formater le nom (remplacer les points/underscores par des espaces, capitaliser les mots)
      const formattedName = emailName
        .split(/[._-]/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
      
      setUserName(formattedName);
    } else {
      setUserName('Utilisateur');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) return;
    
    try {
      setIsSubmitting(true);
      await onSubmit({ 
        content: comment,
        userName: userName // Ajouter le nom d'utilisateur
      });
      setComment('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du commentaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Afficher qui commente (facultatif) */}
      {userName && (
        <div className="text-sm text-gray-600 mb-2">
          You comment as <span className="font-medium">{userName}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <textarea
            value={comment}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
            placeholder="Share your experience "
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            rows={4}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !comment.trim()}
            className="bg-emerald-600 text-white py-2 px-6 rounded-lg hover:bg-emerald-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Publish'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;