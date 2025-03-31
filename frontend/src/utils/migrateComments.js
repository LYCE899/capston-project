// src/utils/migrateComments.js
import { collection, getDocs, doc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, getUser } from "firebase/auth";
import { migrateExistingComments } from "../services/commentService";

/**
 * Utilitaire pour mettre à jour les commentaires existants
 * Ajout du champ userName dans les commentaires existants
 */
export const runCommentsMigration = async () => {
  console.log("Démarrage de la migration des commentaires...");
  
  try {
    // Utiliser la fonction de migration du service
    const result = await migrateExistingComments();
    
    if (result) {
      console.log("Migration des commentaires terminée avec succès!");
      return true;
    } else {
      console.error("La migration des commentaires a échoué.");
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de la migration des commentaires:", error);
    return false;
  }
};

/**
 * Comment exécuter cette migration:
 * 
 * 1. Importez cette fonction dans un composant administrateur
 * 2. Appelez-la lors d'un clic sur un bouton ou au chargement du composant
 * 
 * Exemple:
 * 
 * import { runCommentsMigration } from '../utils/migrateComments';
 * 
 * const AdminPanel = () => {
 *   const handleMigration = async () => {
 *     const success = await runCommentsMigration();
 *     if (success) {
 *       alert("Migration terminée!");
 *     } else {
 *       alert("Erreur lors de la migration");
 *     }
 *   };
 * 
 *   return (
 *     <div>
 *       <h1>Panneau d'administration</h1>
 *       <button onClick={handleMigration}>
 *         Migrer les commentaires
 *       </button>
 *     </div>
 *   );
 * };
 */

export default runCommentsMigration;