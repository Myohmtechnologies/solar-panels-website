'use client';

import { useEffect, useState } from 'react';
import { Lead, LeadStatus } from '@/types';
import LeadsFilters from '@/components/leads/LeadsFilters';
import LeadsTable from '@/components/leads/LeadsTable';
import { useRouter } from 'next/navigation';

const TABS = [
  { name: 'Total des leads', value: 'ALL' },
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
  const [activeTab, setActiveTab] = useState(LeadStatus.NEW);
  const [searchTerm, setSearchTerm] = useState('');

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

    if (activeTab !== 'ALL') {
      if (activeTab === LeadStatus.COMPLETED) {
        filtered = filtered.filter((lead) => lead.status === LeadStatus.COMPLETED || lead.status === LeadStatus.INSTALLATION);
      } else {
        filtered = filtered.filter((lead) => lead.status === activeTab);
      }
    }

    // Filtrer par recherche
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchLower) ||
        lead.email.toLowerCase().includes(searchLower) ||
        lead.phone.toLowerCase().includes(searchLower) ||
        (lead.city || '').toLowerCase().includes(searchLower) ||
        (lead.projectType || '').toLowerCase().includes(searchLower) ||
        (lead.simulatorData?.prestationLabel || '').toLowerCase().includes(searchLower) ||
        (lead.notes || '').toLowerCase().includes(searchLower)
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

    // Trier les prospects filtrés du plus récemment actif au plus ancien.
    filtered.sort((a, b) => getLeadTimestamp(b) - getLeadTimestamp(a));

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
    <div className="min-h-screen bg-[#f7f9fb]">
      <div className="mx-auto max-w-[1500px] space-y-4 px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Prospects</h1>
        </div>

        <LeadsFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onCreateLead={() => router.push('/dashboard/leads/create')}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={TABS}
          leads={leads}
        />

        <div>
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
