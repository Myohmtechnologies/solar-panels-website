export enum LeadStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  RDV_SCHEDULED = 'RDV_SCHEDULED',
  TECHNICAL_VISIT = 'TECHNICAL_VISIT',
  DEMARCHE_ADMINISTRATIF = 'DEMARCHE_ADMINISTRATIF',
  INSTALLATION = 'INSTALLATION',
  CONSUAL = 'CONSUAL',
  RACORDEMENT_EDF = 'RACORDEMENT_EDF',
  COMPLETED = 'COMPLETED',
  NOT_INTERESTED = 'NOT_INTERESTED'
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  additionalInfo?: string;
}

export interface NextAction {
  date: string;
  description: string;
  address?: Address;
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: LeadStatus;
  logementType: 'HOUSE' | 'APARTMENT';
  energyBill: number;
  address?: string;
  postalCode?: string;
  city?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  nextAction?: NextAction;
}

export interface LeadAction {
  _id: string;
  leadId: string;
  type: 'STATUS_CHANGE' | 'NOTE';
  status: LeadStatus;
  date: string;
  notes?: string;
  nextAction?: NextAction;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  tags: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Realisation {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  secondaryImage?: string;
  region: string;
  city: string;
  type: string;
  year: number;
  date: string;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum StageType {
  NOUVEAU_CLIENT = 'NOUVEAU_CLIENT',
  RDV_COMMERCIAL = 'RDV_COMMERCIAL',
  VISITE_TECHNIQUE = 'VISITE_TECHNIQUE',
  DEMARCHES_ADMIN = 'DEMARCHES_ADMIN',
  INSTALLATION = 'INSTALLATION',
  VALIDATION_CONSUEL = 'VALIDATION_CONSUEL',
  RACCORDEMENT = 'RACCORDEMENT'
}
