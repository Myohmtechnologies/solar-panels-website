'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { LeadStatus } from '@/types';

interface LeadsFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { name: string; value: string }[];
  onSortChange?: (value: string) => void;
}

const STATUS_OPTIONS = [
  { value: LeadStatus.NEW, label: 'Nouveau' },
  { value: LeadStatus.CONTACTED, label: 'Contacté' },
  { value: LeadStatus.RDV_SCHEDULED, label: 'RDV Fixé' },
  { value: LeadStatus.SECOND_RDV, label: 'Signature en cours' },
  { value: LeadStatus.TECHNICAL_VISIT, label: 'Visite Technique' },
  { value: LeadStatus.DEMARCHE_ADMINISTRATIF, label: 'Démarche Administrative' },
  { value: LeadStatus.INSTALLATION, label: 'Installation' },
  { value: LeadStatus.CONSUAL, label: 'Consuel' },
  { value: LeadStatus.RACORDEMENT_EDF, label: 'Raccordement EDF' },
  { value: LeadStatus.COMPLETED, label: 'Terminé' },
  { value: LeadStatus.NOT_INTERESTED, label: 'Pas Intéressé' }
];

const SORT_OPTIONS = [
  { value: 'next-action-asc', label: 'Prochaine action (plus proche)' },
  { value: 'next-action-desc', label: 'Prochaine action (plus loin)' }
];

export default function LeadsFilters({
  searchTerm,
  onSearchChange,
  activeTab,
  onTabChange,
  tabs,
  onSortChange = () => {},
}: LeadsFiltersProps) {
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('next-action-desc');

  return (
    <div>
      {/* Tabs en haut */}
      <div className="border-b border-gray-200 pb-4">
        <div className="mb-2 text-sm font-medium text-[#0B6291]">
          Filtrer par statut
        </div>
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <div className="space-y-4 max-w-full">
            <div className="flex flex-wrap gap-2 items-center">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => onTabChange(tab.value)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    activeTab === tab.value
                      ? 'bg-gradient-to-r from-[#0B6291] to-[#d7f0fc] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#0B6291] bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white">
        <div className="border-b border-gray-200 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#0B6291]" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Rechercher un prospect..."
                className="block w-full rounded-xl border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B6291] sm:text-sm sm:leading-6 shadow-sm"
              />
            </div>

            {/* Menu de tri */}
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center gap-x-1.5 rounded-xl bg-gradient-to-r from-[#ffeb99]/80 to-[#ffb700]/80 px-4 py-2.5 text-sm font-medium text-[#0B6291] shadow-sm hover:from-[#ffeb99] hover:to-[#ffb700] transition-colors">
                <span className="hidden sm:inline">Trier par date de RDV</span>
                <span className="sm:hidden">Trier</span>
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#0B6291]" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {SORT_OPTIONS.map((option) => (
                      <Menu.Item key={option.value}>
                        {({ active }) => (
                          <button
                            onClick={() => onSortChange(option.value)}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm w-full text-left`}
                          >
                            {option.label}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Statistiques rapides */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white overflow-hidden rounded-lg border border-gray-200 p-4">
              <dt className="text-sm font-medium text-gray-500 truncate">Nouveaux leads</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">12</dd>
            </div>
            <div className="bg-white overflow-hidden rounded-lg border border-gray-200 p-4">
              <dt className="text-sm font-medium text-gray-500 truncate">RDV cette semaine</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">8</dd>
            </div>
            <div className="bg-white overflow-hidden rounded-lg border border-gray-200 p-4">
              <dt className="text-sm font-medium text-gray-500 truncate">En attente de visite</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">5</dd>
            </div>
            <div className="bg-white overflow-hidden rounded-lg border border-gray-200 p-4">
              <dt className="text-sm font-medium text-gray-500 truncate">Taux de conversion</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">24%</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
