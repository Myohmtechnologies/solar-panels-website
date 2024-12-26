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
