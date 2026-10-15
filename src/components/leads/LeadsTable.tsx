'use client';

import { useState } from 'react';
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
  [LeadStatus.NEW]: 'bg-blue-100 text-blue-800 border border-blue-200',
  [LeadStatus.CONTACTED]: 'bg-amber-100 text-amber-800 border border-amber-200',
  [LeadStatus.DEVIS_ENVOYE]: 'bg-purple-100 text-purple-800 border border-purple-200',
  [LeadStatus.COMPLETED]: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  [LeadStatus.INSTALLATION]: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  [LeadStatus.RDV_SCHEDULED]: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
  [LeadStatus.SECOND_RDV]: 'bg-blue-100 text-blue-800 border border-blue-200',
  [LeadStatus.TECHNICAL_VISIT]: 'bg-gray-100 text-gray-800 border border-gray-200',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'bg-orange-100 text-orange-800 border border-orange-200',
  [LeadStatus.CONSUAL]: 'bg-pink-100 text-pink-800 border border-pink-200',
  [LeadStatus.RACORDEMENT_EDF]: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
  [LeadStatus.NOT_INTERESTED]: 'bg-rose-100 text-rose-800 border border-rose-200',
};

const formatDate = (date: string | undefined | null) => {
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
  const [leadsPerPage, setLeadsPerPage] = useState(10);

  // Calcul pour la pagination
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  const pageSizeOptions = [10, 25, 50, 100];
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
      <div className="overflow-x-auto">
        <table className="w-full table-fixed divide-y divide-gray-200">
          <colgroup>
            <col className="w-[15%]" />
            <col className="w-[15%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
            <col className="w-[15%]" />
            {showNextFollowUp ? (
              <>
                <col className="w-[15%]" />
                <col className="w-[8%]" />
                <col className="w-[8%]" />
              </>
            ) : (
              <>
                <col className="w-[23%]" />
                <col className="w-[8%]" />
              </>
            )}
          </colgroup>
          <thead className="bg-gradient-to-r from-[#0B6291]/10 to-[#d7f0fc]/10 rounded-t-xl">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#0B6291] uppercase tracking-wider">
                Client
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#0B6291] uppercase tracking-wider">
                Ville
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#0B6291] uppercase tracking-wider">
                Téléphone
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#0B6291] uppercase tracking-wider">
                Statut
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#0B6291] uppercase tracking-wider">
                Commercial
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#0B6291] uppercase tracking-wider">
                {showNextFollowUp ? 'Dernière Action' : 'Prochaine Action'}
              </th>
              {showNextFollowUp && (
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#0B6291] uppercase tracking-wider">
                  Prochain Suivi
                </th>
              )}
              <th scope="col" className="relative px-6 py-4">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {leads.map((lead, index) => (
              <tr key={lead._id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 truncate" title={lead.name}>
                    {lead.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 truncate" title={lead.city}>
                    {lead.city || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{lead.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1.5 inline-flex text-xs leading-5 font-medium rounded-xl ${STATUS_COLORS[lead.status]}`}>
                    {STATUS_LABELS[lead.status]}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {lead.status === LeadStatus.RDV_SCHEDULED && lead.nextAction && 'commercialName' in lead.nextAction ? (
                    <div className="text-sm font-medium text-[#0B6291]">
                      {(lead.nextAction as any).commercialName || '-'}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-400">-</div>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {showNextFollowUp 
                        ? (
                          formatDate(lead.updatedAt || lead.createdAt)
                        ) 
                        : (lead.status === LeadStatus.NEW 
                          ? (
                            <>
                              <span className="text-xs text-blue-600 block">Date de simulation :</span>
                              {formatDate(lead.createdAt)}
                            </>
                          )
                          : lead.status === LeadStatus.CONTACTED
                          ? (
                            <>
                              <span className="text-xs text-amber-600 block">Contacté le :</span>
                              {formatDate((lead.nextAction as any)?.plannedDate || lead.lastAction?.date || lead.updatedAt)}
                            </>
                          )
                          : lead.status === LeadStatus.DEVIS_ENVOYE
                          ? (
                            <>
                              <span className="text-xs text-purple-600 block">Devis envoyé le :</span>
                              {formatDate((lead.nextAction as any)?.plannedDate || lead.lastAction?.date || lead.updatedAt)}
                              {lead.devisPrice && (
                                <span className="inline-block mt-1 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">
                                  💶 {typeof lead.devisPrice === 'number' ? lead.devisPrice.toLocaleString('fr-FR') : lead.devisPrice} €
                                  {lead.devisNumber ? ` (${lead.devisNumber})` : ''}
                                </span>
                              )}
                            </>
                          )
                          : (lead.status === LeadStatus.COMPLETED || lead.status === LeadStatus.INSTALLATION)
                          ? (
                            <>
                              <span className="text-xs text-emerald-600 block">Installé le :</span>
                              {formatDate((lead.nextAction as any)?.plannedDate || lead.lastAction?.date || lead.updatedAt)}
                            </>
                          )
                          : (lead.nextAction && 'plannedDate' in lead.nextAction 
                            ? formatDate((lead.nextAction as any).plannedDate) 
                            : formatDate(lead.updatedAt || lead.createdAt)))}
                    </span>
                    {lead.notes && (
                      <span className="text-xs text-gray-400 truncate max-w-[200px] mt-0.5" title={lead.notes}>
                        📝 {lead.notes}
                      </span>
                    )}
                  </div>
                </td>
                {showNextFollowUp && (
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {lead.nextFollowUpDate 
                          ? formatDate(lead.nextFollowUpDate)
                          : '-'}
                      </span>
                    </div>
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="p-2 hover:bg-[#0B6291]/10 rounded-full transition-colors">
                      <EllipsisVerticalIcon className="h-5 w-5 text-[#0B6291]" />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Précédent
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Suivant
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Affichage de <span className="font-medium">{indexOfFirstLead + 1}</span> à{' '}
              <span className="font-medium">{Math.min(indexOfLastLead, leads.length)}</span> sur{' '}
              <span className="font-medium">{leads.length}</span> résultats
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {[
                {
                  id: 'first-page',
                  label: 'Première page',
                  icon: '««',
                  onClick: () => setCurrentPage(1),
                  disabled: currentPage === 1,
                  className: 'relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                },
                {
                  id: 'previous-page',
                  label: 'Précédent',
                  icon: '«',
                  onClick: () => setCurrentPage(p => Math.max(1, p - 1)),
                  disabled: currentPage === 1,
                  className: 'relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                },
                {
                  id: 'current-page',
                  content: `Page ${currentPage} sur ${totalPages}`,
                  className: 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-offset-0',
                  isSpan: true
                },
                {
                  id: 'next-page',
                  label: 'Suivant',
                  icon: '»',
                  onClick: () => setCurrentPage(p => Math.min(totalPages, p + 1)),
                  disabled: currentPage === totalPages,
                  className: 'relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                },
                {
                  id: 'last-page',
                  label: 'Dernière page',
                  icon: '»»',
                  onClick: () => setCurrentPage(totalPages),
                  disabled: currentPage === totalPages,
                  className: 'relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }
              ].map(item => (
                item.isSpan ? (
                  <span key={item.id} className={item.className}>
                    {item.content}
                  </span>
                ) : (
                  <button
                    key={item.id}
                    onClick={item.onClick}
                    disabled={item.disabled}
                    className={item.className}
                  >
                    <span className="sr-only">{item.label}</span>
                    {item.icon}
                  </button>
                )
              ))}
            </nav>
          </div>
        </div>
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
