// src/pages/RemedyDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaBookmark, FaRegBookmark, FaLeaf, FaFlask } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
import { getRemedyById, incrementRemedyPopularity, rateRemedy, getUserRating } from '../services/remediesService';
import { getCommentsByRemedyId, addComment, likeComment, deleteComment } from '../services/commentsService';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { addToFavorites, removeFromFavorites, checkIsFavorite } from '../services/userservices';
import CommentForm from '../components/commentForm.tsx';
import CommentList from '../components/commentList.tsx';
import RemedyRating from '../components/RemedyRating';
import RatingInput from '../components/RatingInput';
import Loader from '../components/Loader';
import { Remedy } from '../types/Remedy';
import { Comment } from '../types/comment.ts';

const RemedyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const [user] = useAuthState(auth);
  const [remedy, setRemedy] = useState<Remedy | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [showComments, setShowComments] = useState<boolean>(true);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userRating, setUserRating] = useState<number>(0);

  useEffect(() => {
    const fetchRemedyDetails = async () => {
      try {
        if (!id) return;
        
        setLoading(true);
        const remedyData = await getRemedyById(id);
        setRemedy(remedyData as Remedy);
        
        // Incrémenter la popularité du remède
        try {
          await incrementRemedyPopularity(id);
        } catch (error) {
          console.error("Erreur lors de l'incrémentation de la popularité:", error);
          // Non critique, on continue
        }
        
        // Récupérer les commentaires
        try {
          const commentsData = await getCommentsByRemedyId(id);
          setComments(commentsData as Comment[]);
        } catch (error) {
          console.error("Erreur lors de la récupération des commentaires:", error);
          // Non critique, on continue avec une liste vide
          setComments([]);
        }
        
        // Vérifier si le remède est un favori
        if (user) {
          try {
            const favoriteStatus = await checkIsFavorite(user.uid, id);
            setIsFavorite(favoriteStatus);
            
            // Récupérer la note de l'utilisateur
            const userRatingValue = await getUserRating(id, user.uid);
            setUserRating(userRatingValue);
          } catch (error) {
            console.error("Erreur lors de la vérification des favoris:", error);
            // Non critique
          }
        }
        
        setError(null);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du remède:', error);
        setError("Erreur lors du chargement des détails du remède");
      } finally {
        setLoading(false);
      }
    };

    fetchRemedyDetails();
  }, [id, user]);

  const handleAddComment = async (commentData: { content: string }) => {
    try {
      if (!user || !id) return;
      
      const newComment = await addComment({
        ...commentData,
        remedyId: id,
        userId: user.uid,
        userName: user.displayName || user.email || 'Utilisateur'
      });
      
      setComments(prevComments => [newComment as Comment, ...prevComments]);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
    }
  };

  const handleLikeComment = async (commentId: string) => {
    try {
      if (!user) return;
      
      const updatedComment = await likeComment(commentId, user.uid);
      
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === commentId ? updatedComment as Comment : comment
        )
      );
    } catch (error) {
      console.error('Erreur lors du like/unlike du commentaire:', error);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(commentId);
      setComments(prevComments => 
        prevComments.filter(comment => comment.id !== commentId)
      );
    } catch (error) {
      console.error('Erreur lors de la suppression du commentaire:', error);
    }
  };

  const toggleFavorite = async () => {
    try {
      if (!user || !id || !remedy) return;
      
      if (isFavorite) {
        await removeFromFavorites(user.uid, id);
        setIsFavorite(false);
      } else {
        await addToFavorites(user.uid, id, remedy);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Erreur lors de la modification des favoris:', error);
    }
  };

  const handleRating = async (value: number) => {
    try {
      if (!user || !id) return;
      
      // Mettre à jour la note localement
      setUserRating(value);
      
      // Envoyer la note au service
      const updatedRemedy = await rateRemedy(id, value, user.uid);
      
      // Mettre à jour l'état du remède avec les nouvelles données
      setRemedy(updatedRemedy as Remedy);
      
    } catch (error) {
      console.error('Erreur lors de l\'évaluation:', error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error || !remedy) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-xl font-bold mb-4">
          {t('remedy.notFound', 'Remède non trouvé')}
        </h2>
        <Link to="/remedies" className="text-emerald-600 hover:text-emerald-800 flex items-center">
          <FaArrowLeft className="mr-2" /> 
          {t('remedy.backToList', 'Retour aux remèdes')}
        </Link>
      </div>
    );
  }

  // Obtenir les textes selon la langue actuelle
  const currentLang = i18n.language as 'en' | 'fr';
  const remedyTitle = remedy.title[currentLang];
  const remedyDescription = remedy.description[currentLang];
  const remedyPlants = remedy.plants?.[currentLang] || [];
  const remedyPreparation = remedy.preparation?.[currentLang] || '';
  const remedyConditions = remedy.advice?.[currentLang] || '';

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header avec navigation */}
      <div className="mb-6">
        <Link 
          to="/remedies" 
          className="text-emerald-600 hover:text-emerald-800 flex items-center mb-4"
        >
          <FaArrowLeft className="mr-2" /> 
          {t('remedy.backToList', 'Retour aux remèdes')}
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">{remedyTitle}</h1>
        <div className="flex items-center mt-2">
          <RemedyRating rating={remedy.rating || 4.5} />
          <span className="ml-2 text-gray-600">
            ({remedy.reviews || 0} {t('remedy.reviews', 'avis')})
          </span>
        </div>
        
        {/* Système d'évaluation */}
        <div className="mt-4 mb-6">
          {user ? (
            <div>
              <p className="text-sm text-gray-600 mb-1">
                {t('remedy.rateThis', 'Évaluez ce remède:')}
              </p>
              <RatingInput initialRating={userRating} onChange={handleRating} />
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              <Link to="/signin" className="text-emerald-600 hover:text-emerald-800">
                {t('remedy.signInToRate', 'Connectez-vous')}
              </Link> {t('remedy.toRate', 'pour évaluer ce remède.')}
            </p>
          )}
        </div>
      </div>

      {/* Image et informations principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={remedy.imageUrl} 
            alt={remedyTitle} 
            className="w-full h-80 object-cover"
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-emerald-700">
              {remedy.isComposite 
                ? t('remedy.compositeRemedy', 'Remède composé') 
                : t('remedy.traditionalRemedy', 'Remède traditionnel')}
            </span>
            <div className="flex space-x-4">
              <button 
                onClick={toggleFavorite} 
                className="flex items-center text-gray-700 hover:text-emerald-700"
              >
                {isFavorite ? (
                  <FaBookmark className="text-emerald-600 text-xl" />
                ) : (
                  <FaRegBookmark className="text-xl" />
                )}
              </button>
              <button 
                onClick={() => setShowComments(!showComments)} 
                className="flex items-center text-gray-700 hover:text-emerald-700"
              >
                <BsChat className="text-xl" />
                <span className="ml-1">{comments.length}</span>
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t('remedy.description', 'Description')}
            </h2>
            <p className="text-gray-700">
              {showFullDescription 
                ? remedyDescription 
                : (remedyDescription?.length > 200 
                  ? remedyDescription.substring(0, 200) + '...' 
                  : remedyDescription)}
            </p>
            {remedyDescription?.length > 200 && (
              <button 
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-emerald-600 hover:text-emerald-800 mt-2"
              >
                {showFullDescription 
                  ? t('remedy.showLess', 'Voir moins') 
                  : t('remedy.showMore', 'Voir plus')}
              </button>
            )}
          </div>
          
          {remedyPlants.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <FaLeaf className="mr-2 text-emerald-600" />
                {t('remedy.plants', 'Plantes utilisées')}
              </h2>
              <ul className="list-disc list-inside text-gray-700 pl-2">
                {remedyPlants.map((plant, index) => (
                  <li key={index} className="mb-1">{plant}</li>
                ))}
              </ul>
            </div>
          )}
          
          {remedyPreparation && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <FaFlask className="mr-2 text-emerald-600" />
                {t('remedy.preparation', 'Préparation')}
              </h2>
              <p className="text-gray-700">{remedyPreparation}</p>
            </div>
          )}
          
          {remedyConditions && (
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('remedy.treats', 'Traite')}
              </h2>
              <p className="text-gray-700">{remedyConditions}</p>
            </div>
          )}
        </div>
      </div>

      {/* Section Commentaires */}
      <div className={`mt-8 ${showComments ? 'block' : 'hidden'}`}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <BsChat className="mr-2" /> 
          {t('comments.title', 'Commentaires')} ({comments.length})
        </h2>
        
        {user ? (
          <CommentForm onSubmit={handleAddComment} />
        ) : (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <Link to="/signin" className="text-emerald-600 hover:text-emerald-800">
                {t('comments.signIn', 'Connectez-vous')}
              </Link> {t('comments.toLeave', 'pour laisser un commentaire.')}
            </p>
          </div>
        )}
        
        <CommentList 
          comments={comments}
          currentUser={user ? { uid: user.uid } : null}
          onLikeComment={handleLikeComment}
          onDeleteComment={handleDeleteComment}
        />
      </div>
    </div>
  );
};

export default RemedyDetail;