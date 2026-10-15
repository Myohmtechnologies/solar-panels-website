'use client';

import { Lead, LeadStatus } from '@/types';

interface LeadsStatsProps {
  leads: Lead[];
}

export default function LeadsStats({ leads }: LeadsStatsProps) {
  const stats = {
    total: leads.length,
    new: leads.filter(lead => lead.status === LeadStatus.NEW).length,
    contacted: leads.filter(lead => lead.status === LeadStatus.CONTACTED).length,
    devisEnvoye: leads.filter(lead => lead.status === LeadStatus.DEVIS_ENVOYE).length,
    installed: leads.filter(lead => lead.status === LeadStatus.COMPLETED || lead.status === LeadStatus.INSTALLATION).length,
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* 1. Nouveaux */}
      <div className="bg-gradient-to-br from-white to-blue-50/40 overflow-hidden shadow-sm rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 w-0 flex-1">
              <dl>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Nouveaux prospects
                </dt>
                <dd className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-blue-700">
                    {stats.new}
                  </div>
                  <span className="ml-2 text-xs text-gray-400">à traiter</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Contactés */}
      <div className="bg-gradient-to-br from-white to-amber-50/40 overflow-hidden shadow-sm rounded-xl border border-amber-100 hover:shadow-md transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-100 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 w-0 flex-1">
              <dl>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Contactés
                </dt>
                <dd className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-amber-700">
                    {stats.contacted}
                  </div>
                  <span className="ml-2 text-xs text-gray-400">en discussion</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Devis envoyé */}
      <div className="bg-gradient-to-br from-white to-purple-50/40 overflow-hidden shadow-sm rounded-xl border border-purple-100 hover:shadow-md transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-100 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 w-0 flex-1">
              <dl>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Devis envoyés
                </dt>
                <dd className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-purple-700">
                    {stats.devisEnvoye}
                  </div>
                  <span className="ml-2 text-xs text-gray-400">en attente signature</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Installés */}
      <div className="bg-gradient-to-br from-white to-emerald-50/40 overflow-hidden shadow-sm rounded-xl border border-emerald-100 hover:shadow-md transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4 w-0 flex-1">
              <dl>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Installés
                </dt>
                <dd className="flex items-baseline mt-1">
                  <div className="text-2xl font-bold text-emerald-700">
                    {stats.installed}
                  </div>
                  <span className="ml-2 text-xs text-gray-400">projets concrétisés</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
