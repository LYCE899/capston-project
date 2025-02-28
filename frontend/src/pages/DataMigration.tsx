// src/pages/DataMigration.tsx
import React, { useState } from 'react';
import migrateToFirestore from '../scripts/migrateToFirestore.js';

export const DataMigration: React.FC = () => {
  const [migrating, setMigrating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMigration = async () => {
    try {
      setMigrating(true);
      setResult(null);
      setError(null);
      
      // Exécutez la migration
      await migrateToFirestore();
      
      setResult('Migration terminée avec succès! Vos données ont été importées dans Firestore.');
    } catch (err) {
      console.error('Erreur lors de la migration:', err);
      setError('Une erreur est survenue pendant la migration. Vérifiez la console pour plus de détails.');
    } finally {
      setMigrating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Migration des données vers Firestore</h1>
      
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded mb-6">
        <p className="font-medium">Attention</p>
        <p>Cette page est destinée à être utilisée une seule fois pour initialiser votre base de données Firestore avec vos données existantes. L'exécution multiple peut créer des doublons.</p>
      </div>
      
      {result && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
          {result}
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <button
        onClick={handleMigration}
        disabled={migrating}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded disabled:bg-blue-400"
      >
        {migrating ? 'Migration en cours...' : 'Démarrer la migration'}
      </button>
    </div>
  );
};