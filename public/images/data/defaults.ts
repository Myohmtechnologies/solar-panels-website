export const defaultSolarInstallation = {
  installationCostsTable: {
    title: "Coûts d'installation de panneaux solaires",
    headers: ["Puissance de l'installation", "Prix de l'installation"],
    rows: [
      {
        power: "3 kWc",
        price: "8 900 €",
        type: "Petit foyer",
        badge: "Économique",
        highlight: false,
        description: "Idéal pour un appartement ou une petite maison"
      },
      {
        power: "6 kWc",
        price: "13 600 €",
        type: "Maison moyenne",
        badge: "Populaire",
        highlight: true,
        description: "Solution optimale pour une famille"
      },
      {
        power: "9 kWc",
        price: "18 200 €",
        type: "Grande maison",
        badge: "Premium",
        highlight: false,
        description: "Pour les grandes propriétés"
      }
    ],
    notes: [
      "Prix TTC après aides",
      "Installation complète incluse",
      "Garantie 20 ans"
    ],
    ctaText: "Obtenir un devis personnalisé"
  },
  costs: [
    { power: "3 kWc", price: 8900 },
    { power: "6 kWc", price: 13600 },
    { power: "9 kWc", price: 18200 }
  ],
  installers: [
    {
      name: "Solaire PACA",
      certifications: ["RGE", "QualiPV"],
      description: "Expert en installation solaire en région PACA",
      experience: "Plus de 1000 installations"
    }
  ],
  subsidies: {
    autoconsumption: {
      description: "Prime à l'autoconsommation",
      rates: [
        { power: "3 kWc", amount: 380 },
        { power: "6 kWc", amount: 760 },
        { power: "9 kWc", amount: 1140 }
      ]
    },
    buyback: {
      description: "Tarif de rachat avantageux",
      details: [
        "Contrat sur 20 ans",
        "Tarif réglementé",
        "Revenus garantis"
      ]
    },
    vat: {
      description: "TVA réduite pour les installations",
      rate: 10,
      normalRate: 20
    },
    taxExemption: {
      description: "Avantages fiscaux pour le solaire",
      details: [
        "Réduction d'impôts possible",
        "Cumul avec d'autres aides"
      ]
    }
  }
};
