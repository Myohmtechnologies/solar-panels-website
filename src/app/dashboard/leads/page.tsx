'use client';

import { useEffect, useState } from 'react';
import { Lead } from '@/types';
import LeadsStats from '@/components/leads/LeadsStats';
import LeadsFilters from '@/components/leads/LeadsFilters';
import LeadsTable from '@/components/leads/LeadsTable';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const TABS = [
  { name: 'Tous les prospects', value: 'ALL' },
  { name: 'Nouveaux', value: 'NEW' },
  { name: 'RDV Client', value: 'MEETING_SCHEDULED' },
  { name: 'Visites techniques', value: 'TECHNICAL_VISIT' },
  { name: 'Démarche Administrative ', value: 'CONTRACT_SIGNED' },
  { name: 'Pose', value: 'Pose' },
  { name: 'Consual', value: 'Consual' },
  { name: 'Raccordement EDF', value: 'Contract' },

];

export default function LeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }
      const data = await response.json();
      setLeads(data.leads);
      setFilteredLeads(data.leads);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    let filtered = [...leads];

    // Filtrer par statut
    if (activeTab !== 'ALL') {
      filtered = filtered.filter(lead => lead.status === activeTab);
    }

    // Filtrer par recherche
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchLower) ||
        lead.email.toLowerCase().includes(searchLower) ||
        lead.phone.toLowerCase().includes(searchLower)
      );
    }

    setFilteredLeads(filtered);
  }, [leads, activeTab, searchTerm]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* En-tête avec titre et bouton */}
      <div className="mb-8 sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Gestion des prospects
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Gérez vos prospects et suivez leur progression
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            onClick={() => router.push('/dashboard/leads/create')}
            className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Nouveau prospect
          </button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="mb-8">
        <LeadsStats leads={leads} />
      </div>

      {/* Filtres et recherche */}
      <div className="mb-8 space-y-4">
        {/* Tabs de filtrage */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`
                  whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                  ${activeTab === tab.value
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

      </div>

      {/* Tableau des prospects */}
      <div className="bg-white rounded-lg shadow">
        <LeadsTable 
          leads={filteredLeads} 
          onLeadUpdate={fetchLeads} 
        />
      </div>

      {/* Message si aucun résultat */}
      {filteredLeads.length === 0 && (
        <div className="text-center mt-8">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">Aucun prospect trouvé</h3>
          <p className="mt-1 text-sm text-gray-500">
            Commencez par créer un nouveau prospect ou modifiez vos filtres de recherche.
          </p>
        </div>
      )}
    </div>
  );
}
