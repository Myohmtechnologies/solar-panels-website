'use client';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { 
  XMarkIcon, 
  PhoneIcon, 
  SparklesIcon, 
  DocumentTextIcon, 
  CheckBadgeIcon, 
  XCircleIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import { Lead, LeadStatus } from '@/types';

interface LeadActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead;
  initialStatus?: LeadStatus;
  onStatusChange: (leadId: string, newStatus: LeadStatus) => void;
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
  [LeadStatus.NOT_INTERESTED]: 'Pas intéressé / Sans suite',
};

const getLocalCurrentDateTimeString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const COMMON_NOT_INTERESTED_REASONS = [
  'Tarif hors budget',
  'A choisi un concurrent',
  'Projet annulé ou reporté',
  'Logement non éligible',
  'Ne répond plus aux appels',
  'Simple renseignement'
];

export default function LeadActionModal({ 
  isOpen, 
  onClose, 
  lead, 
  initialStatus,
  onStatusChange 
}: LeadActionModalProps) {
  const getDefaultNextStatus = (currentStatus: LeadStatus): LeadStatus => {
    if (initialStatus) return initialStatus;
    switch (currentStatus) {
      case LeadStatus.NEW:
        return LeadStatus.CONTACTED;
      case LeadStatus.CONTACTED:
        return LeadStatus.DEVIS_ENVOYE;
      case LeadStatus.DEVIS_ENVOYE:
        return LeadStatus.COMPLETED;
      default:
        return LeadStatus.CONTACTED;
    }
  };

  const [selectedStatus, setSelectedStatus] = useState<LeadStatus>(getDefaultNextStatus(lead.status));
  const [actionDate, setActionDate] = useState<string>(getLocalCurrentDateTimeString());
  const [notes, setNotes] = useState<string>('');
  const [devisPrice, setDevisPrice] = useState<string>('');
  const [devisNumber, setDevisNumber] = useState<string>('');
  const [notInterestedReason, setNotInterestedReason] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedStatus(initialStatus || getDefaultNextStatus(lead.status));
      setActionDate(getLocalCurrentDateTimeString());
      setNotes('');
      setDevisPrice(lead.devisPrice ? String(lead.devisPrice) : '');
      setDevisNumber(lead.devisNumber || '');
      setNotInterestedReason('');
      setError(null);
    }
  }, [isOpen, lead.status, initialStatus]);

  const handleSelectStatus = (status: LeadStatus) => {
    setSelectedStatus(status);
    setActionDate(getLocalCurrentDateTimeString());
  };

  const statusOptions = [
    {
      value: LeadStatus.NEW,
      label: 'Nouveau',
      description: 'Prospect brut',
      icon: SparklesIcon,
      activeColor: 'bg-blue-600 text-white ring-2 ring-blue-600 shadow-md',
      inactiveColor: 'bg-blue-50/70 text-blue-900 border border-blue-200 hover:bg-blue-100/60'
    },
    {
      value: LeadStatus.CONTACTED,
      label: 'Contacté',
      description: 'Échange au téléphone',
      icon: PhoneIcon,
      activeColor: 'bg-amber-500 text-white ring-2 ring-amber-500 shadow-md',
      inactiveColor: 'bg-amber-50/70 text-amber-900 border border-amber-200 hover:bg-amber-100/60'
    },
    {
      value: LeadStatus.DEVIS_ENVOYE,
      label: 'Devis envoyé',
      description: 'Prix & n° devis',
      icon: DocumentTextIcon,
      activeColor: 'bg-purple-600 text-white ring-2 ring-purple-600 shadow-md',
      inactiveColor: 'bg-purple-50/70 text-purple-900 border border-purple-200 hover:bg-purple-100/60'
    },
    {
      value: LeadStatus.COMPLETED,
      label: 'Installé',
      description: 'Chantier réalisé',
      icon: CheckBadgeIcon,
      activeColor: 'bg-emerald-600 text-white ring-2 ring-emerald-600 shadow-md',
      inactiveColor: 'bg-emerald-50/70 text-emerald-900 border border-emerald-200 hover:bg-emerald-100/60'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const finalDate = actionDate ? new Date(actionDate) : new Date();
      const isoDate = isNaN(finalDate.getTime()) ? new Date().toISOString() : finalDate.toISOString();

      let actionType = 'STATUS_CHANGE';
      if (selectedStatus === LeadStatus.CONTACTED) actionType = 'CALL';
      else if (selectedStatus === LeadStatus.DEVIS_ENVOYE) actionType = 'EMAIL';
      else if (selectedStatus === LeadStatus.COMPLETED) actionType = 'INSTALLATION';
      else if (selectedStatus === LeadStatus.NOT_INTERESTED) actionType = 'STATUS_CHANGE';

      let finalNotes = notes.trim();
      let descriptionText = `Statut passé à : ${STATUS_LABELS[selectedStatus] || selectedStatus}`;

      if (selectedStatus === LeadStatus.DEVIS_ENVOYE) {
        if (!devisPrice) {
          setError('Veuillez renseigner le prix du devis.');
          setIsLoading(false);
          return;
        }
        const devisDetails = `Devis envoyé : ${devisPrice} € TTC${devisNumber ? ` (N° ${devisNumber})` : ''}`;
        finalNotes = finalNotes ? `${devisDetails} - ${finalNotes}` : devisDetails;
        descriptionText = devisDetails;
      } else if (selectedStatus === LeadStatus.NOT_INTERESTED) {
        finalNotes = notInterestedReason.trim() || finalNotes || 'Classé sans suite / Pas intéressé';
        descriptionText = `Non intéressé : ${finalNotes}`;
      }

      const actionPayload = {
        status: selectedStatus,
        type: actionType,
        notes: finalNotes,
        date: isoDate,
        ...(selectedStatus === LeadStatus.DEVIS_ENVOYE ? {
          devisPrice: devisPrice ? Number(devisPrice) || devisPrice : undefined,
          devisNumber: devisNumber ? devisNumber.trim() : undefined,
        } : {}),
        nextAction: {
          type: selectedStatus,
          plannedDate: isoDate,
          description: descriptionText
        }
      };

      const response = await fetch(`/api/leads/${lead._id}/actions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(actionPayload),
      });

      if (!response.ok) throw new Error('Erreur lors de la mise à jour du statut');
      onStatusChange(lead._id, selectedStatus);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de la sauvegarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotInterested = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const isoDate = new Date().toISOString();
      await fetch(`/api/leads/${lead._id}/actions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: LeadStatus.NOT_INTERESTED,
          type: 'STATUS_CHANGE',
          notes: 'Classé sans suite / Pas intéressé',
          date: isoDate,
          nextAction: {
            type: LeadStatus.NOT_INTERESTED,
            plannedDate: isoDate,
            description: 'Non intéressé : Classé sans suite'
          }
        }),
      });
      onStatusChange(lead._id, LeadStatus.NOT_INTERESTED);
      onClose();
    } catch {
      setError('Erreur lors du classement sans suite.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-xs transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white px-5 pb-6 pt-5 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-7">
                {/* Bouton de fermeture */}
                <div className="absolute right-4 top-4">
                  <button type="button"
                    className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    onClick={onClose}>
                    <span className="sr-only">Fermer</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* En-tête */}
                <div>
                  <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900">
                    Modifier le statut
                  </Dialog.Title>
                  
                  <div className="mt-3 bg-gradient-to-r from-blue-50/60 to-slate-50 border border-blue-100/80 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-base font-bold text-gray-900 flex items-center gap-2">
                        <span>{lead.name}</span>
                        {lead.city && (
                          <span className="text-xs font-normal text-gray-500">• {lead.city}</span>
                        )}
                      </div>
                      <div className="text-sm text-[#0B6291] font-semibold mt-0.5 flex items-center gap-1.5">
                        <PhoneIcon className="h-4 w-4" />
                        <a href={`tel:${lead.phone}`} className="hover:underline">{lead.phone}</a>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-medium text-gray-400 block uppercase">Statut actuel</span>
                      <span className="inline-block mt-0.5 text-xs font-bold px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-2xs">
                        {STATUS_LABELS[lead.status] || lead.status}
                      </span>
                    </div>
                  </div>
                </div>

                <form id="lead-action-form" onSubmit={handleSubmit} className="mt-5 space-y-5">
                  {/* LES 4 ÉTAPES */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Sélectionner le statut
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {statusOptions.map((option) => {
                        const isSelected = selectedStatus === option.value;
                        const Icon = option.icon;
                        return (
                          <button key={option.value} type="button"
                            onClick={() => handleSelectStatus(option.value)}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-150 cursor-pointer text-center ${
                              isSelected ? option.activeColor : option.inactiveColor
                            }`}>
                            <Icon className={`h-6 w-6 mb-1 ${isSelected ? 'text-white' : ''}`} />
                            <span className="text-sm font-bold tracking-tight">{option.label}</span>
                            <span className={`text-[11px] mt-0.5 ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                              {option.description}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* DATE ET HEURE */}
                  <div className="bg-gray-50/80 border border-gray-200/80 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="actionDate" className="text-xs font-semibold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4 text-[#0B6291]" />
                        <span>Date et heure de l&apos;action</span>
                      </label>
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        ✓ Remplie automatiquement
                      </span>
                    </div>
                    <input id="actionDate" type="datetime-local" value={actionDate}
                      onChange={(e) => setActionDate(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-2xs focus:border-[#0B6291] focus:ring-1 focus:ring-[#0B6291] outline-none" />
                  </div>

                  {/* DEVIS ENVOYÉ */}
                  {selectedStatus === LeadStatus.DEVIS_ENVOYE && (
                    <div className="bg-purple-50/50 border border-purple-200/80 rounded-xl p-4 space-y-4">
                      <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
                        <DocumentTextIcon className="h-5 w-5 text-purple-600" />
                        <span>Informations du devis envoyé</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label htmlFor="devisPrice" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1">
                            <BanknotesIcon className="h-4 w-4 text-purple-600" />
                            <span>Prix du devis (€ TTC) *</span>
                          </label>
                          <div className="relative">
                            <input id="devisPrice" type="number" step="any" required value={devisPrice}
                              onChange={(e) => setDevisPrice(e.target.value)} placeholder="Ex: 14500"
                              className="block w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-3 pr-14 text-sm font-bold text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none shadow-2xs" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 font-bold text-xs">€ TTC</div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="devisNumber" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <DocumentTextIcon className="h-4 w-4 text-purple-600" />
                              Numéro de devis
                            </span>
                            <span className="text-[11px] font-normal text-gray-400">Facultatif</span>
                          </label>
                          <input id="devisNumber" type="text" value={devisNumber}
                            onChange={(e) => setDevisNumber(e.target.value)} placeholder="Ex: DEV-2026-0042"
                            className="block w-full rounded-xl border border-gray-300 bg-white py-2.5 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none shadow-2xs" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="notes" className="block text-xs font-medium text-gray-600 mb-1">
                          Remarques complémentaires (facultatif)
                        </label>
                        <textarea id="notes" rows={2} value={notes} onChange={(e) => setNotes(e.target.value)}
                          placeholder="Options incluses, garantie, délai de pose..."
                          className="block w-full rounded-xl border border-gray-300 bg-white p-2.5 text-xs text-gray-900 placeholder:text-gray-400 focus:border-purple-600 focus:ring-1 focus:ring-purple-200 outline-none shadow-2xs" />
                      </div>
                    </div>
                  )}

                  {/* CONTACTÉ */}
                  {selectedStatus === LeadStatus.CONTACTED && (
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="notes" className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                          <ChatBubbleBottomCenterTextIcon className="h-4 w-4 text-amber-600" />
                          <span>Détails de l&apos;appel avec le prospect</span>
                        </label>
                        <span className="text-xs text-gray-400">Pendant ou après l&apos;appel</span>
                      </div>
                      <textarea id="notes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)}
                        placeholder="Prenez vos notes en direct pendant l'appel : besoins, toiture, consommation annuelle, budget, questions du client..."
                        className="block w-full rounded-xl border border-gray-300 p-3.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-2xs focus:border-[#0B6291] focus:ring-2 focus:ring-[#0B6291]/20 outline-none resize-y" />
                    </div>
                  )}

                  {/* PAS INTÉRESSÉ */}
                  {selectedStatus === LeadStatus.NOT_INTERESTED && (
                    <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 space-y-3">
                      <div className="text-sm font-bold text-rose-900 flex items-center gap-1.5">
                        <XCircleIcon className="h-5 w-5 text-rose-600" />
                        <span>Motif du classement sans suite</span>
                      </div>
                      <p className="text-xs text-rose-700">
                        Ce prospect sera immédiatement déplacé dans la liste des <strong>Prospects non intéressés</strong>.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {COMMON_NOT_INTERESTED_REASONS.map((reason) => (
                          <button key={reason} type="button" onClick={() => setNotInterestedReason(reason)}
                            className={`text-xs px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                              notInterestedReason === reason
                                ? 'bg-rose-600 text-white border-rose-600 font-semibold'
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-rose-100 hover:border-rose-300'
                            }`}>
                            {reason}
                          </button>
                        ))}
                      </div>
                      <textarea rows={2} value={notInterestedReason} onChange={(e) => setNotInterestedReason(e.target.value)}
                        placeholder="Raison détaillée ou commentaire..."
                        className="block w-full rounded-xl border border-rose-200 bg-white p-2.5 text-xs text-gray-900 placeholder:text-gray-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200 outline-none" />
                    </div>
                  )}

                  {/* NOUVEAU ou INSTALLÉ */}
                  {(selectedStatus === LeadStatus.NEW || selectedStatus === LeadStatus.COMPLETED) && (
                    <div>
                      <label htmlFor="notes" className="block text-sm font-semibold text-gray-800 mb-1.5">
                        {selectedStatus === LeadStatus.COMPLETED ? "Notes sur l'installation" : 'Notes / Remarques'}
                      </label>
                      <textarea id="notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)}
                        placeholder={selectedStatus === LeadStatus.COMPLETED ? "Date d'intervention, remarques techniques..." : 'Notes complémentaires...'}
                        className="block w-full rounded-xl border border-gray-300 p-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-2xs focus:border-[#0B6291] focus:ring-2 focus:ring-[#0B6291]/20 outline-none" />
                    </div>
                  )}

                  {/* Notes précédentes */}
                  {lead.notes && (
                    <div className="p-3 bg-amber-50/60 border border-amber-200/70 rounded-xl">
                      <span className="text-xs font-semibold text-amber-900 block mb-1">Notes précédentes enregistrées :</span>
                      <p className="text-xs text-gray-700 whitespace-pre-wrap">{lead.notes}</p>
                    </div>
                  )}

                  {/* Erreur */}
                  {error && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">{error}</div>
                  )}

                  {/* BOUTONS */}
                  <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-2">
                    {/* Pas intéressé — à gauche en rouge */}
                    <button type="button" disabled={isLoading} onClick={handleNotInterested}
                      className="w-full sm:w-auto sm:mr-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                      <XCircleIcon className="h-4 w-4" />
                      Pas intéressé
                    </button>

                    {/* Annuler */}
                    <button type="button" onClick={onClose}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-2xs">
                      Annuler
                    </button>

                    {/* Confirmer */}
                    <button type="submit" disabled={isLoading}
                      className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                        selectedStatus === LeadStatus.DEVIS_ENVOYE
                          ? 'bg-purple-600 hover:bg-purple-700'
                          : 'bg-[#0B6291] hover:bg-[#094d73]'
                      }`}>
                      {isLoading ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Enregistrement...</span>
                        </>
                      ) : selectedStatus === LeadStatus.DEVIS_ENVOYE ? (
                        <span>Enregistrer le devis</span>
                      ) : (
                        <span>Mettre à jour le statut</span>
                      )}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
