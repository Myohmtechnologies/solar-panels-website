// Suppression de l'import qui cause l'erreur

// Interface pour les données de devis
export interface QuoteData {
  _id?: string;
  client: {
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    address?: string;
    postalCode?: string;
    city?: string;
  };
  config: {
    configurationType: 'dualsun_enphase' | 'bourgeois_global';
    installationPower: number;
    batteryType: 'none' | 'physical' | 'virtual';
    batteryCapacityIndex: number;
    discount: number;
    exceptionalService?: {
      description: string;
      price: number;
    };
  };
  totalPrice: number;
  pdfUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

// Fonction pour récupérer tous les devis depuis l'API
export const getAllQuotes = async (): Promise<QuoteData[]> => {
  try {
    const response = await fetch('/api/quotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Désactiver le cache pour toujours obtenir les données les plus récentes
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Erreur lors de la récupération des devis:', error);
    return [];
  }
};

// Fonction pour sauvegarder un nouveau devis via l'API
export const saveQuote = async (quoteData: Omit<QuoteData, '_id' | 'createdAt'>): Promise<QuoteData | null> => {
  try {
    const response = await fetch('/api/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du devis:', error);
    return null;
  }
};

// Fonction pour récupérer un devis spécifique par son ID
export const getQuoteById = async (quoteId: string): Promise<QuoteData | null> => {
  try {
    const response = await fetch(`/api/quotes/${quoteId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error(`Erreur lors de la récupération du devis ${quoteId}:`, error);
    return null;
  }
};
