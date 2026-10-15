export interface Realisation {
  _id?: string;
  title: string;
  description: string;
  mainImage: string | null;
  secondaryImage?: string | null;
  date: string | Date;
  region: string;
  city: string;
  type: string;
  year: number;
  specifications?: {
    puissance: number;
    pannels: number;
    surface: number;
    orientation?: string;
    economie: number;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  images: string[];
  publishDate: Date;
  author: string;
  details: {
    metaDescription: string;
    tags: string[];
    readTime: number;
  };
}

export enum StageType {
  NOUVEAU_CLIENT = 1,
  RDV_COMMERCIAL = 2,
  VISITE_TECHNIQUE = 3,
  DEMARCHES_ADMIN = 4,
  INSTALLATION = 5,
  VALIDATION_CONSUEL = 6,
  RACCORDEMENT = 7
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export enum ResidentialStatus {
  OWNER = 'OWNER',
  TENANT = 'TENANT'
}

export enum LogementType {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT'
}

export enum LeadStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  DEVIS_ENVOYE = 'DEVIS_ENVOYE',
  COMPLETED = 'COMPLETED',
  INSTALLATION = 'INSTALLATION',
  RDV_SCHEDULED = 'RDV_SCHEDULED',
  SECOND_RDV = 'SECOND_RDV',
  TECHNICAL_VISIT = 'TECHNICAL_VISIT',
  DEMARCHE_ADMINISTRATIF = 'DEMARCHE_ADMINISTRATIF',
  CONSUAL = 'CONSUAL',
  RACORDEMENT_EDF = 'RACORDEMENT_EDF',
  NOT_INTERESTED = 'NOT_INTERESTED'
}

export interface NextAction {
  type?: LeadStatus;
  plannedDate?: string | Date;
  endDate?: string | Date;
  location?: string;
  description?: string;
  commercialId?: string;
  commercialName?: string;
  duration?: number;
  assignedTo?: {
    commercialId: string;
    name: string;
    email: string;
    phone?: string;
  };
}

export interface LeadAction {
  _id?: string;
  leadId: string;
  type: 'CALL' | 'EMAIL' | 'MEETING' | 'TECHNICAL_VISIT' | 'CONTRACT' | 'INSTALLATION' | 'RDV' | 'STATUS_CHANGE';
  status: LeadStatus | 'PLANNED' | 'COMPLETED' | 'CANCELLED';
  date: string;
  notes: string;
  devisPrice?: number | string;
  devisNumber?: string;
  nextAction?: NextAction;
}

export interface Installation {
  type: string;
  date?: string;
  power?: number;
  panels?: number;
  area?: number;
  orientation?: string;
  savings?: number;
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  residentialStatus: ResidentialStatus;
  logementType: LogementType;
  energyBill: string;
  status: LeadStatus;
  createdAt: string;
  notes?: string;
  devisPrice?: number | string;
  devisNumber?: string;
  lastAction?: LeadAction;
  nextAction?: NextAction;
}

// Mapping des statuts aux étapes suivantes possibles
export const STATUS_TRANSITIONS: Record<LeadStatus, LeadStatus[]> = {
  [LeadStatus.NEW]: [LeadStatus.CONTACTED, LeadStatus.DEVIS_ENVOYE, LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.CONTACTED]: [LeadStatus.DEVIS_ENVOYE, LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.DEVIS_ENVOYE]: [LeadStatus.COMPLETED, LeadStatus.CONTACTED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.COMPLETED]: [LeadStatus.DEVIS_ENVOYE, LeadStatus.CONTACTED],
  [LeadStatus.INSTALLATION]: [LeadStatus.COMPLETED, LeadStatus.DEVIS_ENVOYE],
  [LeadStatus.RDV_SCHEDULED]: [LeadStatus.DEVIS_ENVOYE, LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.SECOND_RDV]: [LeadStatus.DEVIS_ENVOYE, LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.TECHNICAL_VISIT]: [LeadStatus.DEVIS_ENVOYE, LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: [LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.CONSUAL]: [LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.RACORDEMENT_EDF]: [LeadStatus.COMPLETED, LeadStatus.NOT_INTERESTED],
  [LeadStatus.NOT_INTERESTED]: [LeadStatus.CONTACTED, LeadStatus.DEVIS_ENVOYE, LeadStatus.NEW]
};

// Configuration des actions requises pour chaque transition
export const REQUIRED_ACTIONS: Record<LeadStatus, string[]> = {
  [LeadStatus.NEW]: ['CALL', 'EMAIL'],
  [LeadStatus.CONTACTED]: ['CALL', 'EMAIL'],
  [LeadStatus.DEVIS_ENVOYE]: ['EMAIL', 'CALL'],
  [LeadStatus.COMPLETED]: [],
  [LeadStatus.RDV_SCHEDULED]: ['TECHNICAL_VISIT'],
  [LeadStatus.SECOND_RDV]: ['CONTRACT'],
  [LeadStatus.TECHNICAL_VISIT]: ['CONTRACT'],
  [LeadStatus.DEMARCHE_ADMINISTRATIF]: ['INSTALLATION'],
  [LeadStatus.INSTALLATION]: ['INSTALLATION_COMPLETE'],
  [LeadStatus.CONSUAL]: [],
  [LeadStatus.RACORDEMENT_EDF]: [],
  [LeadStatus.NOT_INTERESTED]: []
};

export interface StageAction {
  id: string;
  stageId: StageType;
  type: 'rdv_fixe' | 'rappel' | 'non_interesse' | 'devis_signe' | 'second_rdv' | 'custom';
  date?: Date;
  note?: string;
  nextStage?: StageType;
}

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
  reviews?: {
    author: string;
    location: string;
    comment: string;
    rating: number;
    date?: string;
  }[];
  installation?: Installation;
  heroImage?: {
    url: string;
    alt: string;
  };
  faq?: {
    question: string;
    answer: string;
  }[];
  regulations?: {
    title: string;
    description: string;
    icon: string;
  }[];
  realisations?: {
    title: string;
    description?: string;
    images: {
      url: string;
      alt: string;
    }[];
  };
  realisationsNew?: Realisation[];
  seoContent?: {
    title: string;
    paragraphs: string[];
  };
}

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  installationType: string;
  text: string;
  date: string;
}
