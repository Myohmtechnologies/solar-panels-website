'use client';

import { useState, useEffect } from 'react';
import { Lead, LeadStatus } from '@/types';
import LeadsTable from '@/components/leads/LeadsTable';
import { useRouter } from 'next/navigation';

interface CompletedLead extends Lead {
  lastFollowUp?: string;
  nextFollowUpDate?: string;
}

export default function CompletedProjectsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<CompletedLead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCompletedLeads = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/leads');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des projets terminés');
      }
      const data = await response.json();
      
      // Vérifier la structure des données
      if (!data || !data.leads || !Array.isArray(data.leads)) {
        console.error('Structure de données inattendue:', data);
        throw new Error('Format de données incorrect');
      }

      // Filtrer pour ne garder que les projets terminés
      const completedLeads = data.leads
        .filter((lead: Lead) => lead.status === LeadStatus.COMPLETED)
        .map((lead: Lead) => {
          // Calculer la date du prochain suivi (1 an après la dernière action)
          const lastAction = lead.nextAction?.date || lead.updatedAt;
          const nextFollowUpDate = new Date(lastAction);
          nextFollowUpDate.setFullYear(nextFollowUpDate.getFullYear() + 1);

          return {
            ...lead,
            nextFollowUpDate: nextFollowUpDate.toISOString(),
          };
        })
        .sort((a: CompletedLead, b: CompletedLead) => {
          // Trier par date de prochain suivi (les plus urgents en premier)
          return new Date(a.nextFollowUpDate!).getTime() - new Date(b.nextFollowUpDate!).getTime();
        });

      setLeads(completedLeads);
    } catch (err) {
      console.error('Erreur détaillée:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setLeads([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCompletedLeads();
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
    lead => new Date(lead.nextFollowUpDate!) <= today
  ).length;

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* En-tête avec statistiques */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Projets Terminés</h1>
          <div className="flex gap-4">
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md">
              <span className="font-semibold">{needsFollowUp}</span> suivi{needsFollowUp > 1 ? 's' : ''} à faire
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">
              Total : <span className="font-semibold">{leads.length}</span> projet{leads.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Tableau des projets terminés */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b">
            <p className="text-sm text-gray-600">
              Les clients sont listés par ordre de priorité de suivi. Contactez-les pour proposer de nouveaux produits ou services.
            </p>
          </div>
          <LeadsTable 
            leads={leads} 
            onLeadUpdate={fetchCompletedLeads}
            showNextFollowUp={true} // Vous devrez ajouter cette prop à LeadsTable
          />
        </div>
      </div>
    </div>
  );
}
