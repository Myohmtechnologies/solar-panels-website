'use client';

import { useEffect, useState } from 'react';
import { Lead, LeadStatus, NextAction } from '@/types';
import LeadActionModal from './LeadActionModal';
import LeadDetailsModal from './LeadDetailsModal';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { classNames } from '@/lib/utils';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface LeadsTableProps {
  leads: (Lead & {
    nextAction?: NextAction;
    nextFollowUpDate?: string; // Ajouter cette propriété pour les projets terminés
  })[];
  onLeadUpdate: () => void;
  showNextFollowUp?: boolean; // Propriété optionnelle pour afficher la date du prochain suivi
}

const STATUS_LABELS: Record<LeadStatus, string> = {
  [LeadStatus.NEW]: 'Nouveau',
  [LeadStatus.CONTACTED]: 'Contacté',
  [LeadStatus.DEVIS_ENVOYE]: 'Devis envoyé',
  [LeadStatus.COMPLETED]: 'Installé',
  [LeadStatus.INSTALLATION]: 'Installé',
  [LeadStatus.RDV_SCHEDULED]: 'RDV Fixé',
  [LeadStatus.SECOND_RDV]: 'Signature en cours',
  [LeadStatus.TECHNICAL_VISIT]: 'Visite Technique',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'Démarche Administrative',
  [LeadStatus.CONSUAL]: 'Consuel',
  [LeadStatus.RACORDEMENT_EDF]: 'Raccordement EDF',
  [LeadStatus.NOT_INTERESTED]: 'Sans suite',
};

const STATUS_COLORS: Record<LeadStatus, string> = {
  [LeadStatus.NEW]: 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200',
  [LeadStatus.CONTACTED]: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200',
  [LeadStatus.DEVIS_ENVOYE]: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200',
  [LeadStatus.COMPLETED]: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200',
  [LeadStatus.INSTALLATION]: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200',
  [LeadStatus.RDV_SCHEDULED]: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200',
  [LeadStatus.SECOND_RDV]: 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200',
  [LeadStatus.TECHNICAL_VISIT]: 'bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-200',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-200',
  [LeadStatus.CONSUAL]: 'bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-200',
  [LeadStatus.RACORDEMENT_EDF]: 'bg-cyan-50 text-cyan-700 ring-1 ring-inset ring-cyan-200',
  [LeadStatus.NOT_INTERESTED]: 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200',
};

const SERVICE_LABELS: Record<string, string> = {
  SOLAR_PANELS: 'Panneaux solaires',
  CHARGING_STATION: 'Borne de recharge',
  AIR_CONDITIONING: 'Climatisation',
  WATER_HEATER: 'Ballon d’eau chaude',
  ELECTRICAL_WORK: 'Électricité générale',
};

function getServiceLabel(lead: Lead) {
  return lead.simulatorData?.prestationLabel || SERVICE_LABELS[lead.projectType || ''] || lead.projectType || 'Service à préciser';
}

function getActionInfo(lead: Lead, showNextFollowUp: boolean) {
  if (showNextFollowUp) {
    return {
      label: 'Dernière action',
      date: formatDate(lead.updatedAt || lead.createdAt),
      detail: lead.notes || lead.nextAction?.description,
    };
  }

  if (lead.status === LeadStatus.NEW) {
    return { label: 'Date de simulation', date: formatDate(lead.createdAt), detail: lead.notes || lead.nextAction?.description };
  }
  if (lead.status === LeadStatus.CONTACTED) {
    return {
      label: 'Contacté le',
      date: formatDate(lead.nextAction?.plannedDate || lead.lastAction?.date || lead.updatedAt),
      detail: lead.nextAction?.description || lead.notes,
    };
  }
  if (lead.status === LeadStatus.DEVIS_ENVOYE) {
    const price = lead.devisPrice
      ? `${typeof lead.devisPrice === 'number' ? lead.devisPrice.toLocaleString('fr-FR') : lead.devisPrice} €${lead.devisNumber ? ` · ${lead.devisNumber}` : ''}`
      : undefined;
    return {
      label: 'Devis envoyé le',
      date: formatDate(lead.nextAction?.plannedDate || lead.lastAction?.date || lead.updatedAt),
      detail: price || lead.nextAction?.description || lead.notes,
    };
  }
  if (lead.status === LeadStatus.COMPLETED || lead.status === LeadStatus.INSTALLATION) {
    return {
      label: 'Installé le',
      date: formatDate(lead.nextAction?.plannedDate || lead.lastAction?.date || lead.updatedAt),
      detail: lead.nextAction?.description || lead.notes,
    };
  }
  return {
    label: lead.nextAction?.plannedDate ? 'Prochaine action' : 'Dernière mise à jour',
    date: formatDate(lead.nextAction?.plannedDate || lead.updatedAt || lead.createdAt),
    detail: lead.nextAction?.description || lead.notes,
  };
}

const formatDate = (date: string | Date | undefined | null) => {
  if (!date) return '-';

  try {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return '-';
    }
    return format(parsedDate, 'PPP à HH:mm', { locale: fr });
  } catch (error) {
    console.error('Error formatting date:', error);
    return '-';
  }
};

export default function LeadsTable({ leads, onLeadUpdate, showNextFollowUp = false }: LeadsTableProps) {
  const router = useRouter();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [leads]);

  // Calcul pour la pagination
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.max(1, Math.ceil(leads.length / leadsPerPage));
  const firstVisiblePage = Math.max(1, currentPage - 2);
  const lastVisiblePage = Math.min(totalPages, currentPage + 2);
  const pageItems: (number | 'ellipsis-start' | 'ellipsis-end')[] = [
    ...(firstVisiblePage > 1
      ? [1, ...(firstVisiblePage > 2 ? ['ellipsis-start' as const] : [])]
      : []),
    ...Array.from(
      { length: lastVisiblePage - firstVisiblePage + 1 },
      (_, index) => firstVisiblePage + index
    ),
    ...(lastVisiblePage < totalPages
      ? [...(lastVisiblePage < totalPages - 1 ? ['ellipsis-end' as const] : []), totalPages]
      : []),
  ];

  const [initialModalStatus, setInitialModalStatus] = useState<LeadStatus | undefined>(undefined);

  const handleActionClick = (lead: Lead) => {
    setSelectedLead(lead);
    setInitialModalStatus(undefined);
    setIsActionModalOpen(true);
  };

  const handleNotInterestedClick = (lead: Lead) => {
    setSelectedLead(lead);
    setInitialModalStatus(LeadStatus.NOT_INTERESTED);
    setIsActionModalOpen(true);
  };

  const handleDetailsClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsDetailsModalOpen(true);
  };

  const handleStatusChange = async (_id: string, newStatus: LeadStatus) => {
    try {
      await onLeadUpdate();
      router.refresh();
    } catch (error) {
      console.error('Error updating lead status:', error);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[1040px] w-full divide-y divide-slate-100">
            <thead className="bg-[#f3f7f9]">
              <tr>
                {['Client', 'Ville', 'Téléphone', 'Statut', 'Commercial', showNextFollowUp ? 'Dernière action' : 'Prochaine action'].map((label) => (
                  <th key={label} scope="col" className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-[#17618b]">
                    {label}
                  </th>
                ))}
                {showNextFollowUp && <th scope="col" className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-[#17618b]">Prochain suivi</th>}
                <th scope="col" className="w-12 px-3 py-4"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {currentLeads.map((lead) => {
                const action = getActionInfo(lead, showNextFollowUp);
                const commercialName = lead.nextAction?.commercialName;
                return (
                  <tr key={lead._id} className="transition-colors hover:bg-[#f8fbfc]">
                    <td className="max-w-[250px] px-5 py-4">
                      <div className="truncate text-sm font-semibold text-slate-800" title={lead.name}>{lead.name}</div>
                      <span className="mt-1 inline-flex max-w-full truncate rounded-full bg-[#eaf3f7] px-2.5 py-1 text-[10px] font-semibold text-[#17618b]" title={getServiceLabel(lead)}>
                        {getServiceLabel(lead)}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">{lead.city || '—'}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-700">
                      {lead.phone ? <a href={`tel:${lead.phone.replace(/[^\d+]/g, '')}`} className="hover:text-[#0b6291]">{lead.phone}</a> : '—'}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-medium ${STATUS_COLORS[lead.status] || 'bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-200'}`}>
                        {STATUS_LABELS[lead.status] || lead.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">{commercialName || '—'}</td>
                    <td className="max-w-[280px] px-5 py-4">
                      <div className="text-[11px] font-medium text-[#17618b]">{action.label}</div>
                      <div className="mt-0.5 text-sm text-slate-600">{action.date}</div>
                      {action.detail && <div className="mt-1 truncate text-xs text-slate-400" title={action.detail}>📝 {action.detail}</div>}
                    </td>
                    {showNextFollowUp && (
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                        {lead.nextFollowUpDate ? formatDate(lead.nextFollowUpDate) : '—'}
                      </td>
                    )}
                    <td className="px-3 py-4 text-right">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button aria-label={`Actions pour ${lead.name}`} className="rounded-lg p-2 text-[#0b6291] transition-colors hover:bg-[#eaf3f7]">
                      <EllipsisVerticalIcon className="h-5 w-5" />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-slate-200 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleDetailsClick(lead)}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Voir les détails
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleActionClick(lead)}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Modifier le statut
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col gap-4 border-t border-gray-100 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-center text-sm text-gray-500 sm:text-left">
          Affichage de <span className="font-semibold text-gray-800">{leads.length === 0 ? 0 : indexOfFirstLead + 1}</span> à{' '}
          <span className="font-semibold text-gray-800">{Math.min(indexOfLastLead, leads.length)}</span> sur{' '}
          <span className="font-semibold text-gray-800">{leads.length}</span> prospects
        </p>

        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-1.5" aria-label="Pagination des prospects">
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              aria-label="Page précédente"
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg border border-gray-200 px-2 text-sm font-medium text-gray-600 transition hover:border-[#0B6291]/30 hover:bg-[#0B6291]/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ‹
            </button>
            {pageItems.map(page =>
              typeof page === 'number' ? (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Aller à la page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                  className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-semibold transition ${
                    currentPage === page
                      ? 'bg-[#0B6291] text-white shadow-sm'
                      : 'border border-gray-200 text-gray-600 hover:border-[#0B6291]/30 hover:bg-[#0B6291]/5 hover:text-[#0B6291]'
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={page} className="px-1 text-sm text-gray-400" aria-hidden="true">…</span>
              )
            )}
            <button
              type="button"
              onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              aria-label="Page suivante"
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg border border-gray-200 px-2 text-sm font-medium text-gray-600 transition hover:border-[#0B6291]/30 hover:bg-[#0B6291]/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ›
            </button>
          </nav>
        )}
      </div>

      {/* Modals */}
      {selectedLead && (
        <>
          <LeadActionModal
            isOpen={isActionModalOpen}
            onClose={() => {
              setIsActionModalOpen(false);
              setSelectedLead(null);
            }}
            lead={selectedLead}
            onStatusChange={handleStatusChange}
          />
          <LeadDetailsModal
            isOpen={isDetailsModalOpen}
            onClose={() => {
              setIsDetailsModalOpen(false);
              setSelectedLead(null);
            }}
            lead={selectedLead}
          />
        </>
      )}
    </>
  );
}
