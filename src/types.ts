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

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  additionalInfo?: string;
}

export interface NextAction {
  type?: LeadStatus;
  date?: string;
  plannedDate?: string | Date;
  endDate?: string | Date;
  description?: string;
  address?: Address;
  location?: string;
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

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: LeadStatus;
  logementType?: 'HOUSE' | 'APARTMENT' | any;
  energyBill?: number | string;
  address?: string | Address;
  postalCode?: string;
  city?: string;
  notes?: string;
  devisPrice?: number | string;
  devisNumber?: string;
  createdAt: string;
  updatedAt?: string;
  lastAction?: LeadAction;
  nextAction?: NextAction;
}

export interface LeadAction {
  _id?: string;
  leadId: string;
  type: 'STATUS_CHANGE' | 'NOTE' | 'CALL' | 'EMAIL' | 'MEETING' | 'TECHNICAL_VISIT' | 'CONTRACT' | 'INSTALLATION' | 'RDV';
  status: LeadStatus | 'PLANNED' | 'COMPLETED' | 'CANCELLED';
  date: string;
  notes?: string;
  devisPrice?: number | string;
  devisNumber?: string;
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
