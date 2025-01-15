export type City = {
  name: string;
  code: string;
  population: number;
  solarAdvantages: string[];
  keyPoints: string[];
  reviews: {
    author: string;
    rating: number;
    text: string;
    date: string;
    city: string;
    installation: any;  // We'll type this properly later
  }[];
  altitude: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  seo?: {
    title: string;
    metaDescription: string;
    keywords: string[];
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  solarInstallation: {
    installationCostsTable: {
      title: string;
      headers: string[];
      rows: {
        power: string;
        price: string;
        type: string;
        badge: string;
        highlight: boolean;
        description: string;
      }[];
      notes: string[];
      ctaText: string;
    };
    costs: {
      power: string;
      price: number;
    }[];
    installers: {
      name: string;
      certifications: string[];
      description: string;
      experience: string;
    }[];
    subsidies: {
      autoconsumption: {
        description: string;
        rates: {
          power: string;
          amount: number;
        }[];
      };
      buyback: {
        description: string;
        details: string[];
      };
      vat: {
        description: string;
        rate: number;
        normalRate: number;
      };
      taxExemption: {
        description: string;
        details: string[];
      };
    };
  };
};

export type Department = {
  name: string;
  code: string;
  coverImage: {
    url: string;
    alt: string;
  };
  cities: Record<string, City>;
};

export type Region = {
  name: string;
  code: string;
  departments: Record<string, Department>;
};
