'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import type { Realisation } from '@/types';

// État initial vide pour les réalisations
const initialRealisations: Realisation[] = [];

export default function RealisationsPage() {
  const [realisations, setRealisations] = useState<Realisation[]>(initialRealisations);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les réalisations depuis l'API au chargement du composant
  useEffect(() => {
    const fetchRealisations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/realisations');
        
        if (!response.ok) {
          throw new Error(`Erreur lors de la récupération des réalisations: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Données récupérées de l\'API:', data);
        
        // Vérifier si les données ont la structure attendue
        if (data && data.realisations) {
          setRealisations(data.realisations);
        } else {
          setRealisations(data || []);
        }
        
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des réalisations:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRealisations();
  }, []);

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réalisation ?')) {
      try {
        const response = await fetch(`/api/realisations/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setRealisations(realisations.filter(real => real._id !== id));
        } else {
          console.error('Failed to delete realisation');
        }
      } catch (error) {
        console.error('Error deleting realisation:', error);
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nos Réalisations</h1>
        <Link
          href="/dashboard/realisations/create"
          className="inline-flex items-center px-4 py-2 bg-AFC97E text-white rounded-lg hover:bg-AFC97E/90 transition-colors"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Nouvelle Réalisation
        </Link>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-AFC97E"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>Erreur: {error}</p>
          <p className="text-sm">Vérifiez la connexion à la base de données et réessayez.</p>
        </div>
      )}

      {!isLoading && !error && realisations.length === 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          <p>Aucune réalisation trouvée.</p>
          <p className="text-sm">Créez votre première réalisation en cliquant sur le bouton "Nouvelle Réalisation".</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {realisations.map((realisation) => {
          // Skip if no _id is present
          if (!realisation._id) return null;

          return (
            <div
              key={realisation._id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="relative h-48">
                <Image
                  src={realisation.mainImage || '/images/placeholder.jpg'}
                  alt={realisation.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {realisation.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {realisation.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Année:</span>
                    <span className="ml-2 text-gray-900">{realisation.year}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Région:</span>
                    <span className="ml-2 text-gray-900">{realisation.region}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end space-x-3">
                <Link
                  href={`/dashboard/realisations/edit/${realisation._id}`}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-6C8D2F bg-6C8D2F/10 hover:bg-6C8D2F/20"
                >
                  <PencilIcon className="-ml-0.5 mr-2 h-4 w-4" />
                  Modifier
                </Link>
                <button
                  onClick={() => handleDelete(realisation._id)}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                >
                  <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" />
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
