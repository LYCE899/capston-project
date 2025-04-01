import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FlaskConical, Search, BookmarkPlus, Bookmark } from 'lucide-react';
import { remedies } from '../data/remedies';
import { useAuth } from '../contexts/AuthContext';
import { getAllRemedies } from '../services/remediesService';
import { User } from 'firebase/auth';
import { addToFavorites, removeFromFavorites, getUserFavorites } from '../services/userservices.js';

// Type pour les remèdes
interface Remedy {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  imageUrl: string;
  category?: string;
  tags?: string[];
}

// Type modifié pour correspondre à ce que retourne réellement getUserFavorites
interface FavoriteItem {
  id: string;
  // Rendre les autres propriétés optionnelles
  remedyId?: string;
  userId?: string;
  addedAt?: Date;
  remedyData?: Remedy | null;
}

export function Remedies(): JSX.Element {
  const { i18n } = useTranslation();
  const { user } = useAuth() as { user: User | null; };
  const [allRemedies, setAllRemedies] = useState<Remedy[]>(remedies);
  const [filteredRemedies, setFilteredRemedies] = useState<Remedy[]>(remedies);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);

  // Récupérer les remèdes de Firestore
  useEffect(() => {
    const fetchRemedies = async (): Promise<void> => {
      try {
        setLoading(true);
        const fetchedRemedies = await getAllRemedies();
        
        // Si des remèdes ont été récupérés de Firestore, utilisez-les
        if (fetchedRemedies && fetchedRemedies.length > 0) {
          setAllRemedies(fetchedRemedies as Remedy[]);
          setFilteredRemedies(fetchedRemedies as Remedy[]);
        } else {
          // Sinon utilisez les données locales
          setAllRemedies(remedies);
          setFilteredRemedies(remedies);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des remèdes:", err);
        setError("Impossible de charger les remèdes. Utilisation des données locales.");
        // Utiliser les données locales en cas d'erreur
        setAllRemedies(remedies);
        setFilteredRemedies(remedies);
      } finally {
        setLoading(false);
      }
    };

    fetchRemedies();
  }, []);

  // Récupérer les favoris de l'utilisateur
  useEffect(() => {
    const fetchFavorites = async (): Promise<void> => {
      if (user) {
        try {
          // Utiliser comme FavoriteItem[] avec une conversion explicite
          const userFavorites = await getUserFavorites(user.uid) as FavoriteItem[];
          const favMap: { [key: string]: boolean } = {};
          
          userFavorites.forEach((fav) => {
            // Utiliser fav.id si remedyId n'est pas disponible
            const key = fav.remedyId || fav.id;
            favMap[key] = true;
          });
          
          setFavorites(favMap);
        } catch (err) {
          console.error("Erreur lors de la récupération des favoris:", err);
        }
      } else {
        setFavorites({});
      }
    };

    fetchFavorites();
  }, [user]);

  // Filtrer les remèdes en fonction du terme de recherche
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredRemedies(allRemedies);
    } else {
      const searchTermLower = searchTerm.toLowerCase();
      const filtered = allRemedies.filter(remedy => 
        remedy.title[i18n.language as 'en' | 'fr'].toLowerCase().includes(searchTermLower) ||
        remedy.description[i18n.language as 'en' | 'fr'].toLowerCase().includes(searchTermLower) ||
        (remedy.tags && remedy.tags.some(tag => tag.toLowerCase().includes(searchTermLower)))
      );
      setFilteredRemedies(filtered);
    }
  }, [searchTerm, allRemedies, i18n.language]);

  // Gérer l'ajout/suppression des favoris
  const toggleFavorite = async (e: React.MouseEvent, remedyId: string): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) return;

    try {
      if (favorites[remedyId]) {
        await removeFromFavorites(user.uid, remedyId);
        setFavorites(prev => {
          const newFavorites = { ...prev };
          delete newFavorites[remedyId];
          return newFavorites;
        });
      } else {
        const remedy = allRemedies.find(r => r.id === remedyId);
        if (remedy) {
          await addToFavorites(user.uid, remedyId, remedy);
          setFavorites(prev => ({
            ...prev,
            [remedyId]: true
          }));
        }
      }
    } catch (err) {
      console.error("Erreur lors de la mise à jour des favoris:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {i18n.language === 'en' ? 'Traditional Remedies' : 'Remèdes Traditionnels'}
        </h1>
        <p className="text-xl text-gray-600">
          {i18n.language === 'en'
            ? 'Discover the simple and practical remedies of our traditional healers'
            : 'Découvrez les remèdes simples et pratiques de nos guérisseurs traditionnels'}
        </p>
      </div>

      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Barre de recherche */}
      <div className="relative max-w-xl mx-auto mb-10">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
          placeholder={i18n.language === 'en' ? 'Search remedies...' : 'Rechercher des remèdes...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Liste des remèdes */}
      {filteredRemedies.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            {i18n.language === 'en' 
              ? 'No remedies found matching your search.' 
              : 'Aucun remède ne correspond à votre recherche.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRemedies.map((remedy) => (
            <Link
              key={remedy.id}
              to={`/remedy/${remedy.id}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={remedy.imageUrl}
                  alt={remedy.title[i18n.language as 'en' | 'fr']}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {user && (
                  <button
                    onClick={(e) => toggleFavorite(e, remedy.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition duration-200 hover:bg-gray-100"
                    aria-label={favorites[remedy.id] ? "Retirer des favoris" : "Ajouter aux favoris"}
                  >
                    {favorites[remedy.id] ? (
                      <Bookmark className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <BookmarkPlus className="h-5 w-5 text-gray-700" />
                    )}
                  </button>
                )}
                {remedy.category && (
                  <div className="absolute bottom-3 left-3 bg-emerald-700 text-white text-xs px-2 py-1 rounded-full">
                    {remedy.category}
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="h-5 w-5 text-emerald-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {remedy.title[i18n.language as 'en' | 'fr']}
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {remedy.description[i18n.language as 'en' | 'fr']}
                </p>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-emerald-600 text-sm font-medium">
                    {i18n.language === 'en' ? 'View details' : 'Voir détails'}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}