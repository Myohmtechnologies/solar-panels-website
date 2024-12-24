// src/types/department.ts
export interface PackageInstallation {
  nom: string;
  puissance: string;
  prix: number;
  nombrePanneaux: number;
  productionAnnuelle: number;
  surfaceRequise: number;
}

export interface Avis {
  auteur: string;
  localisation: string;
  note: number;
  date: string;
  commentaire: string;
}

export interface InstallationRécente {
  titre: string;
  puissance: string;
  date: string;
  description: string;
  localisation: string;
  détails: string[];
  images: { url: string; alt: string }[];
}

export interface Ville {
  nom: string;
  population: number;
  href: string;
}

export interface QuestionRéponse {
  icône: string;
  question: string;
  réponse: string;
}

export interface DonnéesDépartement {
  code: string;
  nom: string;
  imageHéros: string;
  seo: {
    descriptionMéta: string;
    motsCléfs: string[];
  };
  population: number;
  avantagesSolaires: string[];
  pointsCléfs: string[];
  packageInstallation: {
    essentiel: PackageInstallation;
    confort: PackageInstallation;
    premium: PackageInstallation;
  };
  avis: Avis[];
  installationsRécentes?: InstallationRécente[];
  villesPrincipales: Ville[];
  faq: QuestionRéponse[];
}