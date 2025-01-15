'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface LeadAction {
  _id: string;
  status: string;
  notes: string;
  createdAt: string;
  nextAction?: {
    date: string;
    address?: {
      street: string;
      postalCode: string;
      city: string;
      additionalInfo?: string;
    };
  };
}

interface LeadHistoryProps {
  leadId: string;
}

const ACTION_LABELS = {
  NEW: 'Nouveau',
  CONTACTED: 'Contacté',
  MEETING_SCHEDULED: 'RDV Fixé',
  TECHNICAL_VISIT: 'Visite Technique',
  CONTRACT_SIGNED: 'Contrat Signé',
  INSTALLATION: 'Installation',
  COMPLETED: 'Terminé',
  NOT_INTERESTED: 'Pas Intéressé',
};

export default function LeadHistory({ leadId }: LeadHistoryProps) {
  const [actions, setActions] = useState<LeadAction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(`/api/leads/${leadId}/actions`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'historique');
        }
        const data = await response.json();
        setActions(data.actions);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [leadId]);

  if (isLoading) {
    return (
      <div className="py-4 text-center text-gray-500">
        Chargement de l&apos;historique...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-4 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (actions.length === 0) {
    return (
      <div className="py-4 text-center text-gray-500">
        Aucun historique disponible
      </div>
    );
  }

  return (
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
                  <span
                    className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white
                      ${action.status === 'COMPLETED' ? 'bg-green-500' :
                        action.status === 'NOT_INTERESTED' ? 'bg-red-500' :
                        'bg-blue-500'}`}
                  >
                    <span className="text-white text-sm font-medium">
                      {ACTION_LABELS[action.status as keyof typeof ACTION_LABELS]?.charAt(0)}
                    </span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Statut changé à{' '}
                      <span className="font-medium text-gray-900">
                        {ACTION_LABELS[action.status as keyof typeof ACTION_LABELS]}
                      </span>
                    </p>
                    {action.notes && (
                      <p className="mt-1 text-sm text-gray-500">
                        {action.notes}
                      </p>
                    )}
                    {action.nextAction && (
                      <p className="mt-1 text-sm text-gray-500">
                        Prochain rendez-vous le{' '}
                        {format(new Date(action.nextAction.date), 'PPP à HH:mm', { locale: fr })}
                        {action.nextAction.address && (
                          <>
                            <br />
                            Adresse : {action.nextAction.address.street},{' '}
                            {action.nextAction.address.postalCode} {action.nextAction.address.city}
                            {action.nextAction.address.additionalInfo && (
                              <> - {action.nextAction.address.additionalInfo}</>
                            )}
                          </>
                        )}
                      </p>
                    )}
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={action.createdAt}>
                      {format(new Date(action.createdAt), 'PPP', { locale: fr })}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
