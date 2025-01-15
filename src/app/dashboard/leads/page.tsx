'use client';

import { useEffect, useState } from 'react';
import { Lead, LeadStatus } from '@/types';
import LeadsStats from '@/components/leads/LeadsStats';
import LeadsFilters from '@/components/leads/LeadsFilters';
import LeadsTable from '@/components/leads/LeadsTable';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const TABS = [
  { name: 'Tous les prospects', value: 'ALL' },
  { name: 'Nouveaux', value: LeadStatus.NEW },
  { name: 'RDV Client', value: 'RDV_SCHEDULED' },
  { name: 'Signature en cours', value: LeadStatus.SECOND_RDV },
  { name: 'Visites techniques', value: LeadStatus.TECHNICAL_VISIT },
  { name: 'Démarche Administrative', value: LeadStatus.DEMARCHE_ADMINISTRATIF },
  { name: 'Installation', value: LeadStatus.INSTALLATION },
  { name: 'Consuel', value: LeadStatus.CONSUAL },
  { name: 'Raccordement EDF', value: LeadStatus.RACORDEMENT_EDF },
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* En-tête avec titre et bouton */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Prospects</h1>
            <p className="mt-2 text-sm text-gray-700">
              Liste et suivi de tous vos prospects
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => router.push('/dashboard/leads/create')}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Nouveau prospect
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <LeadsStats leads={leads} />
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-lg shadow p-6">
          <LeadsFilters
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        {/* Tableau des prospects */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {isLoading ? (
            <div className="p-6 text-center">Chargement...</div>
          ) : error ? (
            <div className="p-6 text-center text-red-600">{error}</div>
          ) : (
            <LeadsTable leads={filteredLeads} onLeadUpdate={fetchLeads} />
          )}
        </div>
      </div>
    </div>
  );
}
