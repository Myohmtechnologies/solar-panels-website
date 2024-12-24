'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function LeadsFilters() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Recherche */}
        <div className="md:col-span-2">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Rechercher un client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Filtres */}
        <div>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">Étape</option>
            <option value="contact">Premier Contact</option>
            <option value="rdv">RDV Commercial</option>
            <option value="technique">Visite Technique</option>
            <option value="admin">Démarches Admin</option>
            <option value="installation">Installation</option>
          </select>
        </div>

        <div>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">Commercial</option>
            <option value="sophie">Sophie D.</option>
            <option value="thomas">Thomas R.</option>
            <option value="julie">Julie M.</option>
          </select>
        </div>

        <div>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">Statut</option>
            <option value="pending">En attente</option>
            <option value="scheduled">RDV Planifié</option>
            <option value="completed">Terminé</option>
            <option value="archived">Archivé</option>
          </select>
        </div>
      </div>
    </div>
  );
}
