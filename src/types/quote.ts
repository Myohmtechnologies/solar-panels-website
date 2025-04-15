// Types de configuration disponibles
export type ConfigurationType = 'dualsun_enphase' | 'bourgeois_global';
export type PowerOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type BatteryType = 'none' | 'physical' | 'virtual';

// Interface pour les données du client
export interface ClientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
}

// Interface pour la configuration du devis
export interface QuoteConfig {
  configurationType: ConfigurationType;
  installationPower: PowerOption;
  batteryType: BatteryType;
  batteryCapacityIndex: number;
  discount: number;
  exceptionalService?: {
    description: string;
    price: number;
  };
}

// Interface complète pour un devis
export interface Quote {
  id: string;
  createdAt: string;
  client: ClientData;
  config: QuoteConfig;
  totalPrice: number;
  pdfUrl?: string;
}
