'use client';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Lead, LeadStatus } from '@/types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { createCalendarEvent } from '@/utils/calendar';
import AppointmentSlotGrid from '../calendar/AppointmentSlotGrid';

interface LeadActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead;
  onStatusChange: (leadId: string, newStatus: LeadStatus) => void;
}

interface Commercial {
  _id: string;
  name: string;
  email: string;
  phone?: string;
}

const STATUS_LABELS: Record<LeadStatus, string> = {
  [LeadStatus.NEW]: 'Nouveau',
  [LeadStatus.CONTACTED]: 'Contacté',
  [LeadStatus.RDV_SCHEDULED]: 'RDV Fixé',
  [LeadStatus.SECOND_RDV]: '2ème RDV',
  [LeadStatus.TECHNICAL_VISIT]: 'Visite Technique',
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: 'Démarche Administrative',
  [LeadStatus.INSTALLATION]: 'Installation',
  [LeadStatus.CONSUAL]: 'Consuel',
  [LeadStatus.RACORDEMENT_EDF]: 'Raccordement EDF',
  [LeadStatus.COMPLETED]: 'Terminé - suivi annuel',
  [LeadStatus.NOT_INTERESTED]: 'À Suivre',
};

const STATUS_COLORS: Record<LeadStatus, string> = {
  [LeadStatus.NEW]: 'bg-blue-100 text-blue-800',
  [LeadStatus.CONTACTED]: 'bg-yellow-100 text-yellow-800',
  [LeadStatus.RDV_SCHEDULED]: 'bg-purple-100 text-purple-800',
  [LeadStatus.SECOND_RDV]: 'bg-teal-100 text-teal-800',
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
  [LeadStatus.RDV_SCHEDULED]: [LeadStatus.SECOND_RDV, LeadStatus.TECHNICAL_VISIT, LeadStatus.NOT_INTERESTED],
  [LeadStatus.SECOND_RDV]: [LeadStatus.TECHNICAL_VISIT, LeadStatus.NOT_INTERESTED],
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
const REQUIRES_FOLLOWUP = [LeadStatus.CONTACTED, LeadStatus.SECOND_RDV, LeadStatus.DEMARCHE_ADMINISTRATIF, LeadStatus.INSTALLATION, LeadStatus.CONSUAL, LeadStatus.RACORDEMENT_EDF];

export default function LeadActionModal({ isOpen, onClose, lead, onStatusChange }: LeadActionModalProps) {
  const [selectedStatus, setSelectedStatus] = useState<LeadStatus | null>(null);
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextActionDate, setNextActionDate] = useState('');
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [selectedCommercial, setSelectedCommercial] = useState<Commercial | null>(null);
  const [appointmentDuration, setAppointmentDuration] = useState<number>(3); // Durée par défaut: 3 heures
  const [selectedSlot, setSelectedSlot] = useState<{ start: string; end: string } | null>(null);

  // Extraire les informations d'adresse du lead si disponibles
  const extractAddressInfo = () => {
    // Vérifier d'abord si le lead a des propriétés d'adresse directes
    let street = '';
    let postalCode = '';
    let city = lead.city || '';
    let additionalInfo = '';
    
    // Vérifier si le lead a une propriété address directe (comme dans types.ts)
    if ((lead as any).address) {
      if (typeof (lead as any).address === 'string') {
        street = (lead as any).address;
      }
    }
    
    // Vérifier si le lead a une propriété postalCode directe
    if ((lead as any).postalCode) {
      postalCode = (lead as any).postalCode;
    }
    
    // Si le lead a une propriété address qui est un objet (comme dans l'interface Address)
    if (typeof (lead as any).address === 'object' && (lead as any).address !== null) {
      const addressObj = (lead as any).address;
      street = addressObj.street || street;
      postalCode = addressObj.postalCode || postalCode;
      city = addressObj.city || city;
      additionalInfo = addressObj.additionalInfo || '';
    }
    
    return {
      street,
      postalCode,
      city,
      additionalInfo
    };
  };
  
  const addressInfo = extractAddressInfo();
  const [address, setAddress] = useState(addressInfo);
  const [nextAction, setNextAction] = useState({
    description: '',
    date: ''
  });

  // Charger la liste des commerciaux
  useEffect(() => {
    const fetchCommercials = async () => {
      try {
        const response = await fetch('/api/commercials');
        if (response.ok) {
          const data = await response.json();
          setCommercials(data.commercials || []);
          
          // Si nous n'avons pas de commerciaux dans l'API, utiliser des valeurs par défaut
          if (!data.commercials || data.commercials.length === 0) {
            setCommercials([
              { _id: '1', name: 'Rudy Salatnia', email: 'rudy@myohm.fr', phone: '0601020304' },
              { _id: '2', name: 'Ali Abed', email: 'ali@myohm.fr', phone: '0601020305' }
            ]);
          }
        } else {
          // Utiliser des valeurs par défaut en cas d'erreur
          setCommercials([
            { _id: '1', name: 'Rudy Salatnia', email: 'rudy@myohm.fr', phone: '0601020304' },
            { _id: '2', name: 'Ali Abed', email: 'ali@myohm.fr', phone: '0601020305' }
          ]);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des commerciaux:', error);
        // Utiliser des valeurs par défaut en cas d'erreur
        setCommercials([
          { _id: '1', name: 'Rudy Salatnia', email: 'rudy@myohm.fr', phone: '0601020304' },
          { _id: '2', name: 'Ali Abed', email: 'ali@myohm.fr', phone: '0601020305' }
        ]);
      }
    };

    if (isOpen) {
      fetchCommercials();
    }
  }, [isOpen]);

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
      if (!selectedCommercial) {
        setError('Veuillez sélectionner un commercial pour le rendez-vous');
        return false;
      }
      if (!nextActionDate) {
        setError('Veuillez sélectionner une date pour le rendez-vous');
        return false;
      }
      if (!address.street || !address.postalCode || !address.city) {
        setError('Veuillez remplir l\'adresse complète pour le rendez-vous');
        return false;
      }
    }

    if (selectedStatus && REQUIRES_FOLLOWUP.includes(selectedStatus) && !nextAction.date) {
      setError(`Veuillez indiquer la date de suivi pour ${STATUS_LABELS[selectedStatus]}`);
      return false;
    }

    if (selectedStatus === LeadStatus.NOT_INTERESTED && !notes.trim()) {
      setError('Veuillez indiquer la raison du suivi');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!validateForm()) {
        setIsLoading(false);
        return;
      }

      // Préparation des données pour l'API
      const actionData: any = {
        type: selectedStatus === LeadStatus.RDV_SCHEDULED ? 'MEETING' : 'TECHNICAL_VISIT',
        status: 'PLANNED',
        notes,
        date: new Date().toISOString()
      };

      // Ajout des informations de rendez-vous si nécessaire
      if (selectedStatus && REQUIRES_APPOINTMENT.includes(selectedStatus) && selectedCommercial) {
        const fullAddress = `${address.street}, ${address.postalCode} ${address.city}${
          address.additionalInfo ? `, ${address.additionalInfo}` : ''
        }`;
        
        // Préserver l'heure exacte sélectionnée
        const exactDate = new Date(nextActionDate);
        
        // Calculer la date de fin en fonction de la durée
        const endDate = new Date(exactDate);
        endDate.setHours(endDate.getHours() + appointmentDuration);
        
        // Création de l'événement dans le calendrier
        const calendarResult = await createCalendarEvent(
          selectedStatus === LeadStatus.RDV_SCHEDULED ? 'MEETING_SCHEDULED' : 'TECHNICAL_VISIT',
          exactDate,
          lead.email,
          fullAddress
        );

        // Ajout des informations de rendez-vous avec attribution explicite au commercial
        actionData.nextAction = {
          type: selectedStatus,
          plannedDate: exactDate.toISOString(),
          endDate: endDate.toISOString(),
          location: fullAddress,
          description: notes || `Rendez-vous ${
            selectedStatus === LeadStatus.RDV_SCHEDULED ? 'commercial' : 'technique'
          } avec ${selectedCommercial.name}`,
          commercialId: selectedCommercial._id,
          commercialName: selectedCommercial.name,
          calendarEventId: calendarResult.eventId,
          duration: appointmentDuration,
          assignedTo: {
            commercialId: selectedCommercial._id,
            name: selectedCommercial.name,
            email: selectedCommercial.email,
            phone: selectedCommercial.phone || ''
          }
        };

        // Afficher un message de succès ou d'avertissement pour le calendrier
        if (calendarResult.warning) {
          console.warn('Calendar warning:', calendarResult.warning);
        }
      } else if (selectedStatus && REQUIRES_FOLLOWUP.includes(selectedStatus) && nextAction.date) {
        // Préserver l'heure exacte pour les suivis
        const exactDate = new Date(nextAction.date);

        actionData.nextAction = {
          type: selectedStatus,
          plannedDate: exactDate.toISOString(),
          description: nextAction.description || (selectedStatus ? getStatusDescription(selectedStatus) : '')
        };
      }

      // Appel à l'API pour mettre à jour le statut
      if (selectedStatus) {
        console.log('Sending to API:', {
          ...actionData,
          status: selectedStatus,
        });
        
        const response = await fetch(`/api/leads/${lead._id}/actions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...actionData,
            status: selectedStatus, // Ajouter le nouveau statut du lead
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update lead status');
        }

        const responseData = await response.json();
        console.log('API Response:', responseData);

        // Mise à jour du state local via le callback
        onStatusChange(lead._id, selectedStatus);
      }

      onClose();
    } catch (err) {
      setError('Une erreur est survenue lors de la mise à jour du statut');
      console.error('Error updating lead status:', err);
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6">
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
                      {/* Statut actuel supprimé comme demandé */}

                      <div>
                        <label className="text-sm font-medium text-gray-700">Nouveau statut</label>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {availableStatuses.map((status) => (
                            <button
                              key={status}
                              type="button"
                              onClick={() => setSelectedStatus(status)}
                              className={`flex justify-center items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${selectedStatus === status 
                                ? `bg-[#0B6291] text-white shadow-md` 
                                : `bg-gradient-to-r from-[#ffeb99]/80 to-[#ffb700]/80 text-[#0B6291] font-semibold hover:from-[#ffeb99] hover:to-[#ffb700]`
                              }`}
                            >
                              {STATUS_LABELS[status]}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Champs pour les rendez-vous */}
                      {selectedStatus && REQUIRES_APPOINTMENT.includes(selectedStatus) && (
                        <>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-[#0B6291] mb-2">
                              Sélectionner un commercial
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              {commercials.map((commercial) => (
                                <button
                                  key={commercial._id}
                                  type="button"
                                  onClick={() => setSelectedCommercial(commercial)}
                                  className={`flex justify-center items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${selectedCommercial?._id === commercial._id 
                                    ? `bg-[#0B6291] text-white shadow-md` 
                                    : `bg-white border border-gray-300 text-gray-700 hover:bg-gray-50`
                                  }`}
                                >
                                  {commercial.name}
                                </button>
                              ))}
                            </div>
                          </div>



                          {selectedCommercial && (
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-[#0B6291] mb-2">
                                Disponibilités de {selectedCommercial.name}
                              </label>
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2 border rounded-lg overflow-hidden shadow-md">
                                  <AppointmentSlotGrid 
                                    commercialId={selectedCommercial._id}
                                    commercialName={selectedCommercial.name}
                                    onSlotSelect={(slotInfo) => {
                                      // Construire la date et l'heure du rendez-vous
                                      const dateTime = `${slotInfo.date}T${slotInfo.time}`;
                                      setNextActionDate(dateTime);
                                      setAppointmentDuration(slotInfo.duration);
                                    }}
                                    className="p-4"
                                  />
                                </div>
                                <div className="lg:col-span-1 p-4 bg-white rounded-lg border border-gray-200 shadow-md">
                                  <h3 className="text-md font-semibold text-[#0B6291] mb-4">Sélection manuelle</h3>
                                  
                                  <div className="mb-4">
                                    <label className="block text-sm font-medium text-[#0B6291] mb-2">
                                      Date et heure du rendez-vous
                                    </label>
                                    <input
                                      type="datetime-local"
                                      className="block w-full rounded-lg border border-gray-300 py-3 px-4 bg-white text-gray-800 focus:ring-2 focus:ring-[#0B6291] focus:outline-none transition-all duration-200 ease-in-out"
                                      value={nextActionDate}
                                      onChange={(e) => setNextActionDate(e.target.value)}
                                      required
                                    />
                                  </div>
                                  
                                  <div className="mb-4">
                                    <label className="block text-sm font-medium text-[#0B6291] mb-2">
                                      Durée du rendez-vous
                                    </label>
                                    <select
                                      value={appointmentDuration}
                                      onChange={(e) => setAppointmentDuration(Number(e.target.value))}
                                      className="block w-full rounded-lg border border-gray-300 py-3 px-4 bg-white text-gray-800 focus:ring-2 focus:ring-[#0B6291] focus:outline-none transition-all duration-200 ease-in-out"
                                    >
                                      <option value={1}>1 heure</option>
                                      <option value={2}>2 heures</option>
                                      <option value={3}>3 heures</option>
                                      <option value={4}>4 heures</option>
                                    </select>
                                  </div>
                                  
                                  {nextActionDate && (
                                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mt-4">
                                      <div className="flex items-center space-x-2 text-blue-700 mb-1">
                                        <span className="font-medium text-sm">Rendez-vous sélectionné</span>
                                      </div>
                                      <div className="text-sm text-blue-800">
                                        {new Date(nextActionDate).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' })}
                                      </div>
                                      <div className="text-sm text-blue-800 mt-1">
                                        Durée: {appointmentDuration} heure{appointmentDuration > 1 ? 's' : ''}
                                      </div>
                                      <div className="flex items-center mt-2 pt-2 border-t border-blue-200">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-2">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                          </svg>
                                        </div>
                                        <div className="text-sm text-blue-800">
                                          <span className="font-medium">Commercial attribué:</span> {selectedCommercial.name}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="space-y-4 mb-4">
                            <label className="block text-sm font-medium text-[#0B6291] mb-2">
                              Adresse du rendez-vous
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Rue"
                                className="block w-full rounded-lg border-0 py-3 px-4 bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-[#0B6291] focus:outline-none transition-all duration-200 ease-in-out"
                                value={address.street}
                                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                                required
                              />
                              <div className="absolute right-3 top-3 text-[#0B6291]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="relative">
                                <input
                                  type="text"
                                  placeholder="Code postal"
                                  className="block w-full rounded-lg border-0 py-3 px-4 bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-[#0B6291] focus:outline-none transition-all duration-200 ease-in-out"
                                  value={address.postalCode}
                                  onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                                  required
                                />
                              </div>
                              <div className="relative">
                                <input
                                  type="text"
                                  placeholder="Ville"
                                  name="city"
                                  id="city"
                                  value={address.city}
                                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                  className="block w-full rounded-lg border-0 py-3 px-4 bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-[#0B6291] focus:outline-none transition-all duration-200 ease-in-out"
                                  required
                                />
                              </div>
                            </div>
                            
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Complément d'adresse (optionnel)"
                                className="block w-full rounded-lg border-0 py-3 px-4 bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-[#0B6291] focus:outline-none transition-all duration-200 ease-in-out"
                                value={address.additionalInfo}
                                onChange={(e) => setAddress({ ...address, additionalInfo: e.target.value })}
                              />
                            </div>
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

                      <div className="mb-4">
                        <label htmlFor="notes" className="block text-sm font-medium text-[#0B6291] mb-2">
                          {selectedStatus === LeadStatus.NOT_INTERESTED ? 'Raison du suivi' : 'Notes'}
                        </label>
                        <div className="relative">
                          <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="block w-full rounded-lg border-0 py-3 px-4 bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-[#0B6291] focus:outline-none transition-all duration-200 ease-in-out resize-none"
                            placeholder={selectedStatus === LeadStatus.NOT_INTERESTED ? 'Notez les raisons du suivi et la date de relance prévue' : 'Notes additionnelles...'}
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
                          className="inline-flex w-full justify-center rounded-md bg-[#0B6291] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0B6291]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6291] sm:ml-3 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Mise à jour...' : 'Mettre à jour le statut'}
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-gradient-to-r from-[#ffeb99]/80 to-[#ffb700]/80 px-3 py-2 text-sm font-semibold text-[#0B6291] shadow-sm hover:from-[#ffeb99] hover:to-[#ffb700] sm:mt-0 sm:w-auto"
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
