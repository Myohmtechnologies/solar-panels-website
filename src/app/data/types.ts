export interface City {
  name: string;
  code: string;
  population: number;
  sunshineHours?: number;
  description?: string;
  solarAdvantages?: string[];
  localIncentives?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  slug?: string;
  reviews?: Review[];
  installation?: Installation;
  heroImage?: {
    url: string;
    alt: string;
  };
  videoTestimonial?: {
    videoUrl: string;
    clientName: string;
    savings: string;
  };
  faq?: FAQItem[];
  regulations?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface Installation {
  customerName: string;
  city: string;
  monthlySavings: number;
  systemSize: number;
  panelsCount: number;
  invertersCount: number;
  testimonial: string;
  rating: number;
  imageUrl: string;
}

export interface Review {
  author: string;
  location: string;
  comment: string;
  rating: number;
}

export interface Department {
  name: string;
  code: string;
  coverImage: {
    url: string;
    alt: string;
  };
  cities: Record<string, City>;
}

export interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
  category?: 'technique' | 'aides' | 'local' | 'general';
}

export interface DepartmentFAQ {
  commonQuestions: FAQItem[];
  citySpecificQuestions: {
    [cityCode: string]: FAQItem[];
  };
}

export interface ChargingStationCity {
  name: string;
  slug: string;
  population: number;
  region: string;
  department: string;
  departmentCode: string;
  chargingStations: {
    totalCount: number;
    publicCount: number;
    privateCount: number;
    chargingPoints: {
      fast: number;      // > 50kW
      ultraFast: number; // > 150kW
      normal: number;    // < 50kW
    };
    operators: Array<{
      name: string;
      stationCount: number;
    }>;
  };
  keyLocations: Array<{
    name: string;
    stationCount: number;
    description: string;
  }>;
  localIncentives: string[];
  statistics: {
    evCount: number;           // Nombre de véhicules électriques
    stationDensity: number;    // Bornes par 10 000 habitants
    averageOccupancy: number;  // Taux d'occupation moyen en %
    averageWaitTime: number;   // Temps d'attente moyen en minutes
  };
  content: {
    mainDescription: string;
    advantages: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
