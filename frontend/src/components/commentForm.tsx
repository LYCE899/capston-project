import React, { useState } from 'react';

// Définition de l'interface pour les props
interface CommentFormProps {
  onSubmit: (data: { content: string }) => Promise<void>;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) return;
    
    try {
      setIsSubmitting(true);
      await onSubmit({ content: comment });
      setComment('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du commentaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <textarea
          value={comment}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
          placeholder="Partagez votre expérience ou posez une question..."
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
          {isSubmitting ? 'Envoi en cours...' : 'Publier'}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;