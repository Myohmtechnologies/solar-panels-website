'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { 
  SparklesIcon, 
  PhoneIcon, 
  DocumentTextIcon, 
  CheckBadgeIcon, 
  Squares2X2Icon 
} from '@heroicons/react/24/outline';
import { Lead, LeadStatus } from '@/types';

interface LeadsFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { name: string; value: string }[];
  leads?: Lead[];
  sortOrder?: string;
  onSortChange?: (value: string) => void;
}

const SORT_OPTIONS = [
  { value: 'most-recent', label: 'Dernier en date en haut (recommandé)' },
  { value: 'oldest', label: 'Plus ancien en premier' },
  { value: 'creation-date', label: 'Date de création (simulation)' }
];

export default function LeadsFilters({
  searchTerm,
  onSearchChange,
  activeTab,
  onTabChange,
  tabs,
  leads = [],
  sortOrder = 'most-recent',
  onSortChange = () => {},
}: LeadsFiltersProps) {
  // Calcul dynamique des compteurs pour chaque statut
  const countAll = leads.length;
  const countNew = leads.filter(l => l.status === LeadStatus.NEW).length;
  const countContacted = leads.filter(l => l.status === LeadStatus.CONTACTED).length;
  const countDevis = leads.filter(l => l.status === LeadStatus.DEVIS_ENVOYE).length;
  const countInstalled = leads.filter(l => l.status === LeadStatus.COMPLETED || l.status === LeadStatus.INSTALLATION).length;

  // 4 gros filtres simplifiés — toujours colorés
  const primaryFilters = [
    {
      id: LeadStatus.NEW,
      title: 'Nouveaux',
      subtitle: 'À traiter',
      count: countNew,
      icon: SparklesIcon,
      activeStyle: 'bg-blue-600 text-white ring-4 ring-blue-300 shadow-xl scale-[1.03]',
      inactiveStyle: 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02]',
      activeBadge: 'bg-white/25 text-white',
      inactiveBadge: 'bg-white/20 text-white',
      activeSubtitle: 'text-blue-100',
      inactiveSubtitle: 'text-blue-100',
    },
    {
      id: LeadStatus.CONTACTED,
      title: 'Contactés',
      subtitle: 'Au téléphone',
      count: countContacted,
      icon: PhoneIcon,
      activeStyle: 'bg-orange-500 text-white ring-4 ring-orange-300 shadow-xl scale-[1.03]',
      inactiveStyle: 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-md hover:shadow-lg hover:scale-[1.02]',
      activeBadge: 'bg-white/25 text-white',
      inactiveBadge: 'bg-white/20 text-white',
      activeSubtitle: 'text-orange-100',
      inactiveSubtitle: 'text-orange-100',
    },
    {
      id: LeadStatus.DEVIS_ENVOYE,
      title: 'Devis envoyé',
      subtitle: 'En attente',
      count: countDevis,
      icon: DocumentTextIcon,
      activeStyle: 'bg-violet-600 text-white ring-4 ring-violet-300 shadow-xl scale-[1.03]',
      inactiveStyle: 'bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02]',
      activeBadge: 'bg-white/25 text-white',
      inactiveBadge: 'bg-white/20 text-white',
      activeSubtitle: 'text-violet-100',
      inactiveSubtitle: 'text-violet-100',
    },
    {
      id: LeadStatus.COMPLETED,
      title: 'Installés',
      subtitle: 'Terminés',
      count: countInstalled,
      icon: CheckBadgeIcon,
      activeStyle: 'bg-emerald-600 text-white ring-4 ring-emerald-300 shadow-xl scale-[1.03]',
      inactiveStyle: 'bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02]',
      activeBadge: 'bg-white/25 text-white',
      inactiveBadge: 'bg-white/20 text-white',
      activeSubtitle: 'text-emerald-100',
      inactiveSubtitle: 'text-emerald-100',
    }
  ];

  return (
    <div className="space-y-6">
      {/* En-tête des filtres avec bouton "Tous les prospects" */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-100 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#0B6291]">
            Filtrer par statut
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Sélectionnez une étape du parcours pour filtrer vos prospects
          </p>
        </div>

        {/* Bouton pour afficher Tous les prospects */}
        <button
          onClick={() => onTabChange('ALL')}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'ALL'
              ? 'bg-[#0B6291] text-white shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          <Squares2X2Icon className="h-4 w-4" />
          <span>Tous les prospects</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
            activeTab === 'ALL' ? 'bg-white/20 text-white' : 'bg-white text-gray-700'
          }`}>
            {countAll}
          </span>
        </button>
      </div>

      {/* LES 4 GROS FILTRES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {primaryFilters.map((filter) => {
          const isActive = activeTab === filter.id;
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => onTabChange(filter.id)}
              className={`text-left p-4 rounded-2xl border-0 transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 ${
                isActive ? filter.activeStyle : filter.inactiveStyle
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6 text-white/90" />
                  <span className="text-sm font-bold tracking-tight text-white leading-tight">
                    {filter.title}
                  </span>
                </div>
                <span className="text-xl font-black text-white">
                  {filter.count}
                </span>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-white/70 font-medium">
                  {filter.subtitle}
                </span>
                {isActive && (
                  <span className="text-[9px] font-bold tracking-widest uppercase bg-white/25 px-2 py-0.5 rounded-full text-white">
                    ● Actif
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Barre de recherche et tri */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
        {/* Recherche */}
        <div className="relative flex-1 w-full max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-4 w-4 text-[#0B6291]" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher par nom, téléphone, email..."
            className="block w-full rounded-xl border border-gray-200 py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#0B6291] focus:ring-1 focus:ring-[#0B6291] outline-none shadow-2xs"
          />
        </div>

        {/* Menu de tri */}
        <Menu as="div" className="relative w-full sm:w-auto">
          <Menu.Button className="inline-flex w-full sm:w-auto items-center justify-between gap-x-2 rounded-xl bg-amber-50/80 border border-amber-200/60 px-4 py-2 text-sm font-medium text-amber-900 shadow-2xs hover:bg-amber-100/60 transition-colors">
            <span>
              {sortOrder === 'oldest' 
                ? 'Plus ancien en premier' 
                : sortOrder === 'creation-date' 
                ? 'Date de création' 
                : 'Dernier en date (en haut)'}
            </span>
            <ChevronDownIcon className="h-4 w-4 text-amber-800" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-1">
              {SORT_OPTIONS.map((option) => (
                <Menu.Item key={option.value}>
                  {({ active }) => (
                    <button
                      onClick={() => onSortChange(option.value)}
                      className={`${
                        active ? 'bg-[#0B6291]/10 text-[#0B6291]' : 'text-gray-700'
                      } block px-3 py-2 text-xs font-medium rounded-lg w-full text-left transition-colors`}
                    >
                      {option.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
