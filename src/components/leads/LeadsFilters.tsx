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
}

export default function LeadsFilters({
  searchTerm,
  onSearchChange,
  activeTab,
  onTabChange,
  tabs,
}: LeadsFiltersProps) {
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  return (
    <div>
      {/* Tabs en haut */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={`
                whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                ${
                  activeTab === tab.value
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

      {/* Filtres et recherche */}
      <div className="bg-white">
        <div className="border-b border-gray-200 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Barre de recherche */}
            <div className="flex-1 min-w-0">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  placeholder="Rechercher par nom, email ou téléphone..."
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Filtres avancés */}
            <div className="flex items-center space-x-4">
              {/* Filtre par date */}
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm"
              >
                <option value="all">Toutes les dates</option>
                <option value="today">Aujourd'hui</option>
                <option value="week">Cette semaine</option>
                <option value="month">Ce mois</option>
                <option value="quarter">Ce trimestre</option>
              </select>

              {/* Tri */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm"
              >
                <option value="date-desc">Plus récent</option>
                <option value="date-asc">Plus ancien</option>
                <option value="name-asc">Nom A-Z</option>
                <option value="name-desc">Nom Z-A</option>
                <option value="priority">Priorité</option>
              </select>
            </div>
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
