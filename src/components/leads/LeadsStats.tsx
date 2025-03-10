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
    meetingScheduled: leads.filter(lead => lead.status === LeadStatus.RDV_SCHEDULED).length,
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-gradient-to-br from-white to-[#f8f9fa] overflow-hidden shadow-md rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[#0B6291]/10 to-[#d7f0fc]/30 text-[#0B6291]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Prospects
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-[#0B6291]">
                    {stats.total}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#f8f9fa] overflow-hidden shadow-md rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[#ffeb99]/30 to-[#ffb700]/10 text-[#ffb700]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Nouveaux
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-[#0B6291]">
                    {stats.new}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#f8f9fa] overflow-hidden shadow-md rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[#0B6291]/10 to-[#d7f0fc]/30 text-[#0B6291]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Contactés
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-[#0B6291]">
                    {stats.contacted}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#f8f9fa] overflow-hidden shadow-md rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[#ffeb99]/30 to-[#ffb700]/10 text-[#ffb700]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  RDV Planifiés
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stats.meetingScheduled}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
