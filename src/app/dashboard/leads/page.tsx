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
  { name: 'Contactés', value: LeadStatus.CONTACTED },
  { name: 'Devis envoyé', value: LeadStatus.DEVIS_ENVOYE },
  { name: 'Installés', value: LeadStatus.COMPLETED },
];

export default function LeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('most-recent');

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }
      const data = await response.json();
      setLeads(data.data);
      setFilteredLeads(data.data);
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

    // Filtrer par statut (4 filtres principaux)
    if (activeTab !== 'ALL') {
      if (activeTab === LeadStatus.COMPLETED) {
        filtered = filtered.filter(lead => 
          lead.status === LeadStatus.COMPLETED || 
          lead.status === LeadStatus.INSTALLATION
        );
      } else {
        filtered = filtered.filter(lead => lead.status === activeTab);
      }
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

    // Fonction pour extraire le timestamp le plus pertinent du lead
    const getLeadTimestamp = (lead: Lead): number => {
      // 1. Prochaine action planifiée ou date d'action
      if (lead.nextAction && ('plannedDate' in lead.nextAction || 'date' in lead.nextAction)) {
        const d = (lead.nextAction as any).plannedDate || (lead.nextAction as any).date;
        if (d) {
          const t = new Date(d).getTime();
          if (!isNaN(t)) return t;
        }
      }
      // 2. Dernière action enregistrée
      if (lead.lastAction?.date) {
        const t = new Date(lead.lastAction.date).getTime();
        if (!isNaN(t)) return t;
      }
      // 3. Date de mise à jour
      if (lead.updatedAt) {
        const t = new Date(lead.updatedAt).getTime();
        if (!isNaN(t)) return t;
      }
      // 4. Date de simulation / création
      if (lead.createdAt) {
        const t = new Date(lead.createdAt).getTime();
        if (!isNaN(t)) return t;
      }
      return 0;
    };

    // Tri des leads : le dernier en date en haut de la liste par défaut
    filtered.sort((a, b) => {
      if (sortOrder === 'creation-date') {
        const dateCreatedA = new Date(a.createdAt).getTime();
        const dateCreatedB = new Date(b.createdAt).getTime();
        return dateCreatedB - dateCreatedA;
      }

      const timeA = getLeadTimestamp(a);
      const timeB = getLeadTimestamp(b);

      if (sortOrder === 'oldest' || sortOrder === 'next-action-asc') {
        return timeA - timeB; // Plus ancien en premier
      }

      // Par défaut : dernier en date en haut de la liste (ordre décroissant)
      return timeB - timeA;
    });

    setFilteredLeads(filtered);
  }, [leads, activeTab, searchTerm, sortOrder]);

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* En-tête avec titre et bouton */}
        <div className="bg-gradient-to-r from-[#0B6291] to-[#d7f0fc] rounded-xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white">
            <h1 className="text-2xl font-semibold">Prospects</h1>
            <p className="mt-2 text-sm text-white/80">
              Liste et suivi de tous vos prospects
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => router.push('/dashboard/leads/create')}
              className="inline-flex items-center px-5 py-2.5 border border-transparent shadow-md text-sm font-medium rounded-xl text-[#0B6291] bg-gradient-to-r from-ffb700 to-ffeb99 hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B6291]"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Nouveau prospect
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <LeadsStats leads={leads} />
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <LeadsFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={TABS}
            leads={leads}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
        </div>

        {/* Tableau des prospects */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0B6291] mb-4"></div>
              <p className="text-gray-600">Chargement des prospects...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-600 bg-red-50 rounded-lg">
              <p className="font-medium">{error}</p>
              <button 
                onClick={fetchLeads}
                className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                Réessayer
              </button>
            </div>
          ) : (
            <LeadsTable leads={filteredLeads} onLeadUpdate={fetchLeads} />
          )}
        </div>
      </div>
    </div>
  );
}
