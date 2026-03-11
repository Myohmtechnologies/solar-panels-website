'use client';

import { useState, useEffect } from 'react';
import { Lead, LeadStatus } from '@/types';
import LeadsTable from '@/components/leads/LeadsTable';
import { useRouter } from 'next/navigation';

export default function ArchivesPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArchivedLeads = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/leads');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des leads archivés');
      }
      const data = await response.json();
      
      // Vérifier la structure des données
      if (!data || !data.leads || !Array.isArray(data.leads)) {
        console.error('Structure de données inattendue:', data);
        throw new Error('Format de données incorrect');
      }

      // Filtrer pour ne garder que les leads "pas intéressés"
      const archivedLeads = data.leads.filter((lead: Lead) => lead.status === LeadStatus.NOT_INTERESTED);
      setLeads(archivedLeads);
    } catch (err) {
      console.error('Erreur détaillée:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setLeads([]); // Réinitialiser les leads en cas d'erreur
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArchivedLeads();
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

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* En-tête */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Leads à Suivre</h1>
          <span className="text-sm text-gray-500">
            {leads.length} lead{leads.length > 1 ? 's' : ''} à suivre
          </span>
        </div>

        {/* Tableau des leads archivés */}
        <div className="bg-white rounded-lg shadow">
          <LeadsTable leads={leads} onLeadUpdate={fetchArchivedLeads} />
        </div>
      </div>
    </div>
  );
}
