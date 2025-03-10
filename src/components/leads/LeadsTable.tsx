'use client';

import { useState } from 'react';
import { Lead, LeadStatus } from '@/types';

// Définition explicite du type NextAction pour résoudre les erreurs de type
interface NextAction {
  type: LeadStatus;
  plannedDate: string;
  location?: string;
  description?: string;
}
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
  })[];
  onLeadUpdate: () => void;
}

const STATUS_LABELS = {
  [LeadStatus.NEW]: 'Nouveau',
  [LeadStatus.CONTACTED]: 'Contacté',
  [LeadStatus.RDV_SCHEDULED]: 'RDV Fixé',
  [LeadStatus.SECOND_RDV]: 'Signature en cours',
  [LeadStatus.TECHNICAL_VISIT]: 'Visite Technique',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'Démarche Administrative',
  [LeadStatus.INSTALLATION]: 'Installation',
  [LeadStatus.CONSUAL]: 'Consuel',
  [LeadStatus.RACORDEMENT_EDF]: 'Raccordement EDF',
  [LeadStatus.COMPLETED]: 'Terminé',
  [LeadStatus.NOT_INTERESTED]: 'À Suivre',
};

const STATUS_COLORS = {
  [LeadStatus.NEW]: 'bg-blue-100 text-blue-800',
  [LeadStatus.CONTACTED]: 'bg-yellow-100 text-yellow-800',
  [LeadStatus.RDV_SCHEDULED]: 'bg-purple-100 text-purple-800',
  [LeadStatus.SECOND_RDV]: 'bg-blue-100 text-blue-800',
  [LeadStatus.TECHNICAL_VISIT]: 'bg-gray-100 text-gray-800',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'bg-yellow-100 text-yellow-800',
  [LeadStatus.INSTALLATION]: 'bg-blue-100 text-blue-800',
  [LeadStatus.CONSUAL]: 'bg-gray-100 text-gray-800',
  [LeadStatus.RACORDEMENT_EDF]: 'bg-yellow-100 text-yellow-800',
  [LeadStatus.COMPLETED]: 'bg-green-100 text-green-800',
  [LeadStatus.NOT_INTERESTED]: 'bg-orange-100 text-orange-800',
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

export default function LeadsTable({ leads, onLeadUpdate }: LeadsTableProps) {
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

  const handleActionClick = (lead: Lead) => {
    setSelectedLead(lead);
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
            <col className="w-[20%]" />
            <col className="w-[25%]" />
            <col className="w-[15%]" />
            <col className="w-[12%]" />
            <col className="w-[20%]" />
            <col className="w-[8%]" />
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ville
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Téléphone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prochaine Action
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead._id} className="hover:bg-gray-50">
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
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${STATUS_COLORS[lead.status]}`}>
                    {STATUS_LABELS[lead.status]}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {lead.nextAction?.plannedDate ? formatDate(lead.nextAction.plannedDate) : '-'}
                    </span>
                    
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="p-1.5 hover:bg-gray-50 rounded-full">
                      <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" />
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
