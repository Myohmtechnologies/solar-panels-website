import { PowerOption, ConfigurationType } from '@/types/quote';

// Interface pour les données du devis
export interface QuoteData {
  id: string;
  createdAt: string;
  client: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    city: string;
  };
  config: {
    configurationType: ConfigurationType;
    installationPower: PowerOption;
    batteryType: 'none' | 'physical' | 'virtual';
    batteryCapacityIndex: number;
    discount: number;
  };
  totalPrice: number;
  pdfUrl?: string; // Optionnel - pour stocker l'URL du PDF si on l'enregistre
}

// Clé pour le stockage local
const QUOTES_STORAGE_KEY = 'myohm_quotes_history';

// Fonction pour récupérer tous les devis
export const getAllQuotes = (): QuoteData[] => {
  if (typeof window === 'undefined') return [];
  
  const storedQuotes = localStorage.getItem(QUOTES_STORAGE_KEY);
  if (!storedQuotes) return [];
  
  try {
    return JSON.parse(storedQuotes);
  } catch (error) {
    console.error('Erreur lors de la récupération des devis:', error);
    return [];
  }
};

// Fonction pour sauvegarder un nouveau devis
export const saveQuote = (quoteData: Omit<QuoteData, 'id' | 'createdAt'>): QuoteData => {
  const quotes = getAllQuotes();
  
  // Créer un nouvel ID unique basé sur la date et un nombre aléatoire
  const newQuote: QuoteData = {
    ...quoteData,
    id: `DEVIS-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString()
  };
  
  // Ajouter le nouveau devis au début de la liste
  quotes.unshift(newQuote);
  
  // Sauvegarder dans le localStorage
  localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(quotes));
  
  return newQuote;
};

// Fonction pour supprimer un devis
export const deleteQuote = (quoteId: string): boolean => {
  const quotes = getAllQuotes();
  const filteredQuotes = quotes.filter(quote => quote.id !== quoteId);
  
  if (filteredQuotes.length === quotes.length) {
    return false; // Aucun devis n'a été supprimé
  }
  
  localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(filteredQuotes));
  return true;
};

// Fonction pour récupérer un devis spécifique
export const getQuoteById = (quoteId: string): QuoteData | null => {
  const quotes = getAllQuotes();
  const quote = quotes.find(q => q.id === quoteId);
  return quote || null;
};

// Fonction pour mettre à jour un devis existant
export const updateQuote = (quoteId: string, updatedData: Partial<QuoteData>): boolean => {
  const quotes = getAllQuotes();
  const quoteIndex = quotes.findIndex(q => q.id === quoteId);
  
  if (quoteIndex === -1) {
    return false;
  }
  
  quotes[quoteIndex] = { ...quotes[quoteIndex], ...updatedData };
  localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(quotes));
  
  return true;
};
