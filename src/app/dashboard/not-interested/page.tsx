'use client';

import { useState, useEffect } from 'react';
import { Lead, LeadStatus } from '@/types';
import LeadsTable from '@/components/leads/LeadsTable';
import { useRouter } from 'next/navigation';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface NotInterestedLead extends Lead {
  lastContactAttempt?: string;
  nextContactDate?: string;
}

export default function NotInterestedPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<NotInterestedLead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotInterestedLeads = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/leads');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des prospects non intéressés');
      }
      const data = await response.json();
      
      // Vérifier la structure des données
      if (!data || !data.success || !data.data || !Array.isArray(data.data)) {
        console.error('Structure de données inattendue:', data);
        throw new Error('Format de données incorrect');
      }

      // Filtrer pour ne garder que les prospects non intéressés
      const notInterestedLeads = data.data
        .filter((lead: Lead) => lead.status === LeadStatus.NOT_INTERESTED)
        .map((lead: Lead) => {
          // Calculer la date du prochain contact (3 mois après la dernière action)
          const lastAction = lead.updatedAt || lead.createdAt;
          const nextContactDate = new Date(lastAction);
          nextContactDate.setMonth(nextContactDate.getMonth() + 3);

          return {
            ...lead,
            lastContactAttempt: lastAction,
            nextContactDate: nextContactDate.toISOString(),
          };
        })
        .sort((a: NotInterestedLead, b: NotInterestedLead) => {
          // Trier par date de prochain contact (les plus urgents en premier)
          return new Date(a.nextContactDate!).getTime() - new Date(b.nextContactDate!).getTime();
        });

      setLeads(notInterestedLeads);
    } catch (err) {
      console.error('Erreur détaillée:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setLeads([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotInterestedLeads();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Erreur!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  // Calculer les statistiques de suivi
  const today = new Date();
  const needsFollowUp = leads.filter(
    lead => new Date(lead.nextContactDate!) <= today
  ).length;

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* En-tête avec statistiques */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Prospects Non Intéressés</h1>
          <div className="flex gap-4">
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-md">
              <span className="font-semibold">{needsFollowUp}</span> à recontacter
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">
              Total : <span className="font-semibold">{leads.length}</span> prospect{leads.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Conseils pour relancer les prospects */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100">
            <h2 className="text-lg font-medium text-orange-800">Conseils pour relancer les prospects</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Appel téléphonique</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Privilégiez un appel téléphonique pour comprendre les raisons du refus et proposer des solutions adaptées.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Email personnalisé</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Envoyez un email avec de nouvelles informations ou offres qui pourraient répondre aux objections initiales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau des prospects non intéressés */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b">
            <p className="text-sm text-gray-600">
              Les prospects sont listés par ordre de priorité de relance. Contactez-les pour comprendre leurs objections et proposer de nouvelles solutions.
            </p>
          </div>
          <LeadsTable 
            leads={leads} 
            onLeadUpdate={fetchNotInterestedLeads}
            showNextFollowUp={true}
          />
        </div>
      </div>
    </div>
  );
}
