'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeftIcon, 
  TrashIcon, 
  DocumentTextIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  UserIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { getAllQuotes, deleteQuote, QuoteData } from '@/utils/quoteStorage';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const HistoriquePage = () => {
  const router = useRouter();
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<QuoteData | null>(null);

  // Charger les devis au chargement de la page
  useEffect(() => {
    // Petit délai pour s'assurer que le localStorage est disponible
    const timer = setTimeout(() => {
      const loadedQuotes = getAllQuotes();
      setQuotes(loadedQuotes);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Filtrer les devis en fonction du terme de recherche
  const filteredQuotes = quotes.filter(quote => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      quote.client.firstName.toLowerCase().includes(searchTermLower) ||
      quote.client.lastName.toLowerCase().includes(searchTermLower) ||
      quote.client.email.toLowerCase().includes(searchTermLower) ||
      quote.client.phone.includes(searchTerm) ||
      quote.id.toLowerCase().includes(searchTermLower)
    );
  });

  // Supprimer un devis
  const handleDeleteQuote = (quoteId: string) => {
    if (deleteQuote(quoteId)) {
      setQuotes(quotes.filter(quote => quote.id !== quoteId));
      setDeleteConfirmId(null);
    }
  };

  // Formater la date
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd MMMM yyyy à HH:mm', { locale: fr });
    } catch (error) {
      return dateString;
    }
  };

  // Formater le prix
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' €';
  };

  // Afficher les détails d'un devis
  const showQuoteDetails = (quote: QuoteData) => {
    setSelectedQuote(quote);
  };

  // Fermer les détails du devis
  const closeQuoteDetails = () => {
    setSelectedQuote(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <button 
              onClick={() => router.push('/dashboard/devis')}
              className="flex items-center text-[#0B6291] mb-4 hover:underline"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              Retour à la création de devis
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              Historique des devis
            </h1>
            <p className="mt-2 text-gray-600">
              Consultez et gérez l'historique des devis générés
            </p>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher par nom, email, téléphone ou ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {isLoading ? (
          // Affichage pendant le chargement
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0B6291]"></div>
          </div>
        ) : filteredQuotes.length === 0 ? (
          // Aucun devis trouvé
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <DocumentTextIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Aucun devis trouvé</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm 
                ? "Aucun devis ne correspond à votre recherche. Essayez avec d'autres termes."
                : "Vous n'avez pas encore généré de devis. Créez votre premier devis pour le voir apparaître ici."}
            </p>
            <button
              onClick={() => router.push('/dashboard/devis')}
              className="px-4 py-2 bg-[#0B6291] text-white rounded-lg hover:bg-[#095275] transition-colors"
            >
              Créer un nouveau devis
            </button>
          </div>
        ) : (
          // Liste des devis
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Configuration
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredQuotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#0B6291]/10 rounded-full flex items-center justify-center">
                            <UserIcon className="h-5 w-5 text-[#0B6291]" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {quote.client.firstName} {quote.client.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {quote.client.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {quote.config.configurationType === 'dualsun_enphase' 
                            ? 'Pack Dualsun + Enphase' 
                            : 'Pack Full Bourgeois Global'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {quote.config.installationPower} kWc
                          {quote.config.batteryType !== 'none' && (
                            quote.config.batteryType === 'physical' 
                              ? ` + Batterie ${[5, 10, 15][quote.config.batteryCapacityIndex]}kW` 
                              : ' + Stockage virtuel'
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {formatDate(quote.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0B6291]">
                        {formatPrice(quote.totalPrice)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => showQuoteDetails(quote)}
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="Voir les détails"
                          >
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          {deleteConfirmId === quote.id ? (
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => handleDeleteQuote(quote.id)}
                                className="text-red-600 hover:text-red-900 p-1 font-medium"
                                title="Confirmer la suppression"
                              >
                                Confirmer
                              </button>
                              <button
                                onClick={() => setDeleteConfirmId(null)}
                                className="text-gray-500 hover:text-gray-700 p-1"
                                title="Annuler"
                              >
                                Annuler
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirmId(quote.id)}
                              className="text-red-600 hover:text-red-900 p-1"
                              title="Supprimer"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal de détails du devis */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Détails du devis
                </h2>
                <button
                  onClick={closeQuoteDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">ID du devis</div>
                <div className="text-lg font-medium">{selectedQuote.id}</div>
                <div className="text-sm text-gray-500 mt-2">
                  Généré le {formatDate(selectedQuote.createdAt)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Informations client</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-gray-500">Nom complet</div>
                      <div className="font-medium">{selectedQuote.client.firstName} {selectedQuote.client.lastName}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Téléphone</div>
                      <div>{selectedQuote.client.phone}</div>
                    </div>
                    {selectedQuote.client.email && (
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div>{selectedQuote.client.email}</div>
                      </div>
                    )}
                    {selectedQuote.client.address && (
                      <div>
                        <div className="text-sm text-gray-500">Adresse</div>
                        <div>{selectedQuote.client.address}</div>
                        <div>{selectedQuote.client.postalCode} {selectedQuote.client.city}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Configuration</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-gray-500">Type de configuration</div>
                      <div className="font-medium">
                        {selectedQuote.config.configurationType === 'dualsun_enphase' 
                          ? 'Pack Dualsun + Enphase' 
                          : 'Pack Full Bourgeois Global'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Puissance</div>
                      <div>{selectedQuote.config.installationPower} kWc</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Stockage</div>
                      <div>
                        {selectedQuote.config.batteryType === 'none' 
                          ? 'Sans batterie' 
                          : selectedQuote.config.batteryType === 'physical'
                            ? `Batterie physique ${[5, 10, 15][selectedQuote.config.batteryCapacityIndex]}kW`
                            : 'Stockage virtuel (Boîtier AC)'}
                      </div>
                    </div>
                    {selectedQuote.config.discount > 0 && (
                      <div>
                        <div className="text-sm text-gray-500">Réduction</div>
                        <div className="text-green-600">-{selectedQuote.config.discount.toLocaleString()} €</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <div className="text-lg font-medium">Prix total</div>
                  <div className="text-2xl font-bold text-[#0B6291]">{formatPrice(selectedQuote.totalPrice)}</div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeQuoteDetails}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Fermer
                </button>
                <button
                  onClick={() => router.push('/dashboard/devis')}
                  className="px-4 py-2 bg-[#0B6291] text-white rounded-lg hover:bg-[#095275] flex items-center"
                >
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Créer un devis similaire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoriquePage;
