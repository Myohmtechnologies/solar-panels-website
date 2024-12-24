'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Lead, LeadStatus } from '@/types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface LeadActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead;
  onStatusChange: (leadId: string, newStatus: LeadStatus) => void;
}

const STATUS_LABELS = {
  [LeadStatus.NEW]: 'Nouveau',
  [LeadStatus.CONTACTED]: 'Contacté',
  [LeadStatus.RDV_SCHEDULED]: 'RDV Fixé',
  [LeadStatus.TECHNICAL_VISIT]: 'Visite Technique',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'Démarche Administrative',
  [LeadStatus.INSTALLATION]: 'Installation',
  [LeadStatus.CONSUAL]: 'Consuel',
  [LeadStatus.RACORDEMENT_EDF]: 'Raccordement EDF',
  [LeadStatus.COMPLETED]: 'Terminé',
  [LeadStatus.NOT_INTERESTED]: 'Pas Intéressé',
};

const STATUS_COLORS = {
  [LeadStatus.NEW]: 'bg-blue-100 text-blue-800',
  [LeadStatus.CONTACTED]: 'bg-yellow-100 text-yellow-800',
  [LeadStatus.RDV_SCHEDULED]: 'bg-purple-100 text-purple-800',
  [LeadStatus.TECHNICAL_VISIT]: 'bg-indigo-100 text-indigo-800',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'bg-orange-100 text-orange-800',
  [LeadStatus.INSTALLATION]: 'bg-green-100 text-green-800',
  [LeadStatus.CONSUAL]: 'bg-pink-100 text-pink-800',
  [LeadStatus.RACORDEMENT_EDF]: 'bg-cyan-100 text-cyan-800',
  [LeadStatus.COMPLETED]: 'bg-gray-100 text-gray-800',
  [LeadStatus.NOT_INTERESTED]: 'bg-red-100 text-red-800',
};

const STATUS_TRANSITIONS: Record<LeadStatus, LeadStatus[]> = {
  [LeadStatus.NEW]: [LeadStatus.CONTACTED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.CONTACTED]: [LeadStatus.RDV_SCHEDULED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.RDV_SCHEDULED]: [LeadStatus.TECHNICAL_VISIT, LeadStatus.NOT_INTERESTED],
  [LeadStatus.TECHNICAL_VISIT]: [LeadStatus.DEMARCHE_ADMINISTRATIF, LeadStatus.NOT_INTERESTED],
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: [LeadStatus.INSTALLATION, LeadStatus.NOT_INTERESTED],
  [LeadStatus.INSTALLATION]: [LeadStatus.CONSUAL, LeadStatus.NOT_INTERESTED],
  [LeadStatus.CONSUAL]: [LeadStatus.RACORDEMENT_EDF, LeadStatus.NOT_INTERESTED],
  [LeadStatus.RACORDEMENT_EDF]: [LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.COMPLETED]: [],
  [LeadStatus.NOT_INTERESTED]: []
};

// Statuts qui nécessitent une date et une adresse
const REQUIRES_APPOINTMENT = [LeadStatus.RDV_SCHEDULED, LeadStatus.TECHNICAL_VISIT];

// Statuts qui nécessitent une date de suivi
const REQUIRES_FOLLOWUP = [LeadStatus.DEMARCHE_ADMINISTRATIF, LeadStatus.INSTALLATION, LeadStatus.CONSUAL, LeadStatus.RACORDEMENT_EDF];

export default function LeadActionModal({ isOpen, onClose, lead, onStatusChange }: LeadActionModalProps) {
  const [selectedStatus, setSelectedStatus] = useState<LeadStatus | null>(null);
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextActionDate, setNextActionDate] = useState('');
  const [address, setAddress] = useState({
    street: '',
    postalCode: '',
    city: '',
    additionalInfo: ''
  });
  const [nextAction, setNextAction] = useState({
    description: '',
    date: '',
  });

  const getStatusDescription = (status: LeadStatus) => {
    switch(status) {
      case LeadStatus.DEMARCHE_ADMINISTRATIF:
        return 'Démarche administrative en cours';
      case LeadStatus.INSTALLATION:
        return 'Installation planifiée';
      case LeadStatus.CONSUAL:
        return 'Demande Consuel en cours';
      case LeadStatus.RACORDEMENT_EDF:
        return 'Raccordement EDF en cours';
      default:
        return '';
    }
  };

  const validateForm = () => {
    if (!selectedStatus) {
      setError('Veuillez sélectionner un statut');
      return false;
    }

    if (REQUIRES_APPOINTMENT.includes(selectedStatus)) {
      if (!nextActionDate) {
        setError('Veuillez sélectionner une date pour le rendez-vous');
        return false;
      }
      if (!address.street || !address.postalCode || !address.city) {
        setError('Veuillez remplir l\'adresse complète pour le rendez-vous');
        return false;
      }
    }

    if (REQUIRES_FOLLOWUP.includes(selectedStatus) && !nextAction.date) {
      setError(`Veuillez indiquer la date de suivi pour ${STATUS_LABELS[selectedStatus]}`);
      return false;
    }

    if (selectedStatus === LeadStatus.NOT_INTERESTED && !notes.trim()) {
      setError('Veuillez indiquer la raison du désintérêt');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      const actionData = {
        type: 'STATUS_CHANGE',
        status: selectedStatus,
        notes: notes.trim(),
        nextAction: REQUIRES_APPOINTMENT.includes(selectedStatus as LeadStatus) ? {
          date: nextActionDate,
          description: getStatusDescription(selectedStatus as LeadStatus),
          address: {
            street: address.street,
            postalCode: address.postalCode,
            city: address.city,
            additionalInfo: address.additionalInfo
          }
        } : REQUIRES_FOLLOWUP.includes(selectedStatus as LeadStatus) ? {
          date: nextAction.date,
          description: nextAction.description || getStatusDescription(selectedStatus as LeadStatus)
        } : undefined
      };

      const response = await fetch(`/api/leads/${lead._id}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(actionData),
      });

      if (!response.ok) {
        throw new Error('Failed to update lead status');
      }

      onStatusChange(lead._id, selectedStatus as LeadStatus);
      onClose();
    } catch (error) {
      console.error('Error updating lead status:', error);
      setError('Une erreur est survenue lors de la mise à jour du statut');
    } finally {
      setIsLoading(false);
    }
  };

  const availableStatuses = STATUS_TRANSITIONS[lead.status] || [];

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Modifier le statut
                    </Dialog.Title>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Statut actuel</label>
                        <div className="mt-1">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${STATUS_COLORS[lead.status]}">
                            {STATUS_LABELS[lead.status]}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">Nouveau statut</label>
                        <div className="mt-2 space-y-2">
                          {availableStatuses.map((status) => (
                            <div key={status} className="flex items-center">
                              <input
                                type="radio"
                                name="status"
                                value={status}
                                checked={selectedStatus === status}
                                onChange={(e) => setSelectedStatus(e.target.value as LeadStatus)}
                                className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                              />
                              <label className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                {STATUS_LABELS[status]}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Champs pour les rendez-vous */}
                      {selectedStatus && REQUIRES_APPOINTMENT.includes(selectedStatus) && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Date et heure du rendez-vous
                            </label>
                            <input
                              type="datetime-local"
                              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                              value={nextActionDate}
                              onChange={(e) => setNextActionDate(e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Adresse du rendez-vous
                            </label>
                            <input
                              type="text"
                              placeholder="Rue"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                              value={address.street}
                              onChange={(e) => setAddress({ ...address, street: e.target.value })}
                              required
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                placeholder="Code postal"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                value={address.postalCode}
                                onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                                required
                              />
                              <input
                                type="text"
                                placeholder="Ville"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                value={address.city}
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                required
                              />
                            </div>
                            <input
                              type="text"
                              placeholder="Complément d'adresse (optionnel)"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                              value={address.additionalInfo}
                              onChange={(e) => setAddress({ ...address, additionalInfo: e.target.value })}
                            />
                          </div>
                        </>
                      )}

                      {/* Champs pour les suivis */}
                      {selectedStatus && REQUIRES_FOLLOWUP.includes(selectedStatus) && (
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            {`Date de suivi - ${STATUS_LABELS[selectedStatus]}`}
                          </label>
                          <input
                            type="datetime-local"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            value={nextAction.date}
                            onChange={(e) => setNextAction({ ...nextAction, date: e.target.value })}
                            required
                          />
                          <textarea
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            value={nextAction.description}
                            onChange={(e) => setNextAction({ ...nextAction, description: e.target.value })}
                            placeholder={`Détails sur ${STATUS_LABELS[selectedStatus].toLowerCase()}`}
                            rows={2}
                          />
                        </div>
                      )}

                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                          {selectedStatus === LeadStatus.NOT_INTERESTED ? 'Raison du désintérêt' : 'Notes'}
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            placeholder={selectedStatus === LeadStatus.NOT_INTERESTED ? 'Expliquez pourquoi le client n\'est pas intéressé' : 'Notes additionnelles...'}
                            required={selectedStatus === LeadStatus.NOT_INTERESTED}
                          />
                        </div>
                      </div>

                      {error && (
                        <div className="rounded-md bg-red-50 p-4">
                          <div className="text-sm text-red-700">{error}</div>
                        </div>
                      )}

                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          disabled={!selectedStatus || isLoading}
                          className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:ml-3 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Mise à jour...' : 'Mettre à jour le statut'}
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={onClose}
                        >
                          Annuler
                        </button>
                      </div>
                    </form>
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
