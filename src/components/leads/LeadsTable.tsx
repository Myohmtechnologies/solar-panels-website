'use client';

import { useState } from 'react';
import { Lead, LeadStatus } from '@/types';
import LeadActionModal from './LeadActionModal';
import LeadDetailsModal from './LeadDetailsModal';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { classNames } from '@/lib/utils';

interface LeadsTableProps {
  leads: Lead[];
  onLeadUpdate: () => void;
}

const STATUS_LABELS = {
  NEW: 'Nouveau',
  CONTACTED: 'Contacté',
  RDV_SCHEDULED: 'RDV Fixé',
  TECHNICAL_VISIT: 'Visite Technique',
  DEMARCHE_ADMINISTRATIF: 'Démarche Administrative',
  INSTALLATION: 'Installation',
  CONSUAL: 'Consuel',
  RACORDEMENT_EDF: 'Raccordement EDF',
  COMPLETED: 'Terminé',
  NOT_INTERESTED: 'Pas Intéressé',
};

const STATUS_COLORS = {
  NEW: 'bg-blue-100 text-blue-800',
  CONTACTED: 'bg-yellow-100 text-yellow-800',
  RDV_SCHEDULED: 'bg-purple-100 text-purple-800',
  TECHNICAL_VISIT: 'bg-indigo-100 text-indigo-800',
  DEMARCHE_ADMINISTRATIF: 'bg-orange-100 text-orange-800',
  INSTALLATION: 'bg-green-100 text-green-800',
  CONSUAL: 'bg-pink-100 text-pink-800',
  RACORDEMENT_EDF: 'bg-cyan-100 text-cyan-800',
  COMPLETED: 'bg-gray-100 text-gray-800',
  NOT_INTERESTED: 'bg-red-100 text-red-800',
};

export default function LeadsTable({ leads, onLeadUpdate }: LeadsTableProps) {
  const router = useRouter();
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleActionClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsActionModalOpen(true);
  };

  const handleDetailsClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsDetailsModalOpen(true);
  };

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    try {
      await onLeadUpdate();
      router.refresh();
    } catch (error) {
      console.error('Error updating lead status:', error);
    }
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Nom
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Téléphone
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Statut
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Prochaine Action
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {lead.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lead.email}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lead.phone}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className={classNames(
                      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
                      STATUS_COLORS[lead.status as LeadStatus]
                    )}>
                      {STATUS_LABELS[lead.status as LeadStatus]}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {lead.nextAction ? (
                      <div>
                        <div>{new Date(lead.nextAction.date).toLocaleDateString('fr-FR')}</div>
                        <div className="text-xs text-gray-400">{lead.nextAction.description}</div>
                      </div>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="flex items-center text-gray-400 hover:text-gray-600">
                          <span className="sr-only">Options</span>
                          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
      </div>

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
    </div>
  );
}
