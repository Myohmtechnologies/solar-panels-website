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
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <div className="space-y-4 max-w-full">
            <div className="flex flex-wrap gap-2 items-center">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => onTabChange(tab.value)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    activeTab === tab.value
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200'
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
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Rechercher un lead..."
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Menu de tri */}
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <span className="hidden sm:inline">Trier par date de RDV</span>
                <span className="sm:hidden">Trier</span>
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
