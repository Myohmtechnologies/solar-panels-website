'use client';

import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Lead, LeadStatus } from '@/types';

interface LeadsFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onCreateLead: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { name: string; value: string }[];
  leads: Lead[];
}

export default function LeadsFilters({ searchTerm, onSearchChange, onCreateLead, activeTab, onTabChange, tabs, leads }: LeadsFiltersProps) {
  const countForTab = (value: string) => {
    if (value === 'ALL') return leads.length;
    if (value === LeadStatus.COMPLETED) {
      return leads.filter((lead) => lead.status === LeadStatus.COMPLETED || lead.status === LeadStatus.INSTALLATION).length;
    }
    return leads.filter((lead) => lead.status === value).length;
  };
  const cardDescription: Record<string, string> = {
    ALL: 'Tous les prospects',
    [LeadStatus.NEW]: 'À traiter',
    [LeadStatus.CONTACTED]: 'Au téléphone',
    [LeadStatus.DEVIS_ENVOYE]: 'En attente',
    [LeadStatus.COMPLETED]: 'Projets terminés',
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5" role="group" aria-label="Filtrer les prospects par statut">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onTabChange(tab.value)}
              className={`min-h-[86px] rounded-xl border bg-white px-4 py-3 text-left shadow-sm transition-all ${
                isActive
                  ? 'border-[#0B6291] ring-2 ring-[#0B6291]/15'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow'
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <span className={`truncate text-xs font-medium ${isActive ? 'text-[#0B6291]' : 'text-slate-500'}`}>{tab.name}</span>
                {isActive && <span className="h-2 w-2 shrink-0 rounded-full bg-[#0B6291]" aria-hidden="true" />}
              </span>
              <span className="mt-1 block text-2xl font-semibold leading-none tracking-tight text-slate-900">{countForTab(tab.value).toLocaleString('fr-FR')}</span>
              <span className="mt-1 block truncate text-[11px] text-slate-400">{cardDescription[tab.value] || 'Prospects'}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Rechercher un prospect</span>
          <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Rechercher un client, une prestation, une ville…"
            className="h-10 w-full rounded-lg border border-transparent bg-slate-50 pl-9 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0B6291]/30 focus:bg-white focus:ring-2 focus:ring-[#0B6291]/10"
          />
        </label>

        <button
          type="button"
          onClick={onCreateLead}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0B6291] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#084e75] focus:outline-none focus:ring-2 focus:ring-[#0B6291]/30"
        >
          <PlusIcon className="h-5 w-5" />
          Nouveau prospect
        </button>
      </div>
    </div>
  );
}
