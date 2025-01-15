interface SolarInstallation {
  title: string;
  description: string;
  advantages: string[];
  features: {
    power: string;
    production: string;
    surface: string;
    co2Saved: string;
    savings: string;
  };
}

interface DefaultSolarInstallation {
  cost: {
    base: number;
    withAids: number;
    monthlyPayment: number;
    roi: number;
  };
  power: {
    min: number;
    max: number;
    recommended: number;
  };
  surface: {
    min: number;
    max: number;
    recommended: number;
  };
  production: {
    annual: number;
    daily: number;
  };
  savings: {
    annual: number;
    monthly: number;
  };
  installer: {
    name: string;
    certification: string;
    experience: string;
    installations: string;
    warranty: {
      installation: number;
      panels: number;
      inverter: number;
    };
  };
}

export const defaultSolarInstallation: SolarInstallation = {
  title: "Installation Solaire Standard",
  description: "Une installation solaire adaptée aux besoins d'une maison individuelle",
  advantages: [
    "Réduction significative de votre facture d'électricité",
    "Production d'énergie verte et renouvelable",
    "Installation durable avec garantie 25 ans",
    "Valorisation de votre bien immobilier"
  ],
  features: {
    power: "6 kWc",
    production: "7500 kWh/an",
    surface: "30 m²",
    co2Saved: "1.5 tonnes/an",
    savings: "1000€/an"
  }
};

export const defaultSolarInstallationData: DefaultSolarInstallation = {
  cost: {
    base: 15000,
    withAids: 7500,
    monthlyPayment: 125,
    roi: 6
  },
  power: {
    min: 3,
    max: 9,
    recommended: 6
  },
  surface: {
    min: 15,
    max: 45,
    recommended: 30
  },
  production: {
    annual: 8400,
    daily: 23
  },
  savings: {
    annual: 1400,
    monthly: 117
  },
  installer: {
    name: "Installation Panneaux Solaires PACA",
    certification: "RGE Qualibat",
    experience: "15+ ans",
    installations: "1000+",
    warranty: {
      installation: 10,
      panels: 25,
      inverter: 12
    }
  }
};
