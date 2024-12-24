'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Lead, LeadAction } from '@/types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

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

interface LeadDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead;
}

export default function LeadDetailsModal({ isOpen, onClose, lead }: LeadDetailsModalProps) {
  const [actions, setActions] = useState<LeadAction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActions = async () => {
      if (!lead._id) return;
      
      try {
        const response = await fetch(`/api/leads/${lead._id}/actions`);
        if (!response.ok) throw new Error('Failed to fetch actions');
        
        const data = await response.json();
        setActions(data.actions);
      } catch (error) {
        console.error('Error fetching actions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchActions();
    }
  }, [lead._id, isOpen]);

  const formatDate = (date: string) => {
    return format(new Date(date), 'PPP à HH:mm', { locale: fr });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <span className="sr-only">Fermer</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div>
                  <div className="mt-3 sm:mt-0">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Détails du lead
                    </Dialog.Title>

                    <div className="mt-6 border-t border-gray-100">
                      <dl className="divide-y divide-gray-100">
                        {/* Informations personnelles */}
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Nom complet</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{lead.name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{lead.email}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Téléphone</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{lead.phone}</dd>
                        </div>

                        {/* Adresse */}
                        {(lead.address || lead.postalCode || lead.city) && (
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Adresse</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {lead.address && <div>{lead.address}</div>}
                              {(lead.postalCode || lead.city) && (
                                <div>{`${lead.postalCode || ''} ${lead.city || ''}`}</div>
                              )}
                            </dd>
                          </div>
                        )}

                        {/* Informations projet */}
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Type de logement</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {lead.logementType === 'HOUSE' ? 'Maison' : 'Appartement'}
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Facture énergétique</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {lead.energyBill}€ / mois
                          </dd>
                        </div>

                        {/* Statut actuel */}
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Statut actuel</dt>
                          <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[lead.status]}">
                              {STATUS_LABELS[lead.status]}
                            </span>
                          </dd>
                        </div>

                        {/* Prochaine action */}
                        {lead.nextAction && (
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Prochaine action</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <div className="font-medium">{formatDate(lead.nextAction.date)}</div>
                              {lead.nextAction.description && (
                                <div className="mt-1 text-gray-500">{lead.nextAction.description}</div>
                              )}
                              {lead.nextAction.address && (
                                <div className="mt-2 text-gray-500">
                                  <div>{lead.nextAction.address.street}</div>
                                  <div>{`${lead.nextAction.address.postalCode} ${lead.nextAction.address.city}`}</div>
                                  {lead.nextAction.address.additionalInfo && (
                                    <div>{lead.nextAction.address.additionalInfo}</div>
                                  )}
                                </div>
                              )}
                            </dd>
                          </div>
                        )}

                        {/* Historique des actions */}
                        <div className="px-4 py-6 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900 mb-4">Historique des actions</dt>
                          <dd className="mt-2">
                            {isLoading ? (
                              <div className="text-center py-4">
                                <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-green-500 border-r-transparent"></div>
                                <div className="mt-2 text-sm text-gray-500">Chargement de l&apos;historique...</div>
                              </div>
                            ) : actions.length > 0 ? (
                              <div className="flow-root">
                                <ul role="list" className="-mb-8">
                                  {actions.map((action, actionIdx) => (
                                    <li key={action._id}>
                                      <div className="relative pb-8">
                                        {actionIdx !== actions.length - 1 ? (
                                          <span
                                            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                                            aria-hidden="true"
                                          />
                                        ) : null}
                                        <div className="relative flex space-x-3">
                                          <div>
                                            <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${STATUS_COLORS[action.status]}">
                                              <span className="text-xs font-medium">{action.status.charAt(0)}</span>
                                            </span>
                                          </div>
                                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                              <p className="text-sm text-gray-500">
                                                Statut changé à{' '}
                                                <span className="font-medium text-gray-900">
                                                  {STATUS_LABELS[action.status]}
                                                </span>
                                              </p>
                                              {action.notes && (
                                                <p className="mt-1 text-sm text-gray-500">{action.notes}</p>
                                              )}
                                              {action.nextAction && (
                                                <div className="mt-2">
                                                  <p className="text-sm font-medium text-gray-900">
                                                    Action prévue : {formatDate(action.nextAction.date)}
                                                  </p>
                                                  {action.nextAction.description && (
                                                    <p className="mt-1 text-sm text-gray-500">
                                                      {action.nextAction.description}
                                                    </p>
                                                  )}
                                                  {action.nextAction.address && (
                                                    <div className="mt-1 text-sm text-gray-500">
                                                      <p>{action.nextAction.address.street}</p>
                                                      <p>
                                                        {action.nextAction.address.postalCode}{' '}
                                                        {action.nextAction.address.city}
                                                      </p>
                                                      {action.nextAction.address.additionalInfo && (
                                                        <p>{action.nextAction.address.additionalInfo}</p>
                                                      )}
                                                    </div>
                                                  )}
                                                </div>
                                              )}
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                              <time dateTime={action.date}>
                                                {formatDate(action.date)}
                                              </time>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500 text-center py-4">
                                Aucune action enregistrée
                              </p>
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
