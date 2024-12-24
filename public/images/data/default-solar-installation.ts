export const defaultSolarInstallation = {
  installationCostsTable: {
    title: "Coûts d'installation de panneaux solaires",
    headers: ["Puissance", "Prix", "Type"],
    rows: [
      {
        power: "3 kWc",
        price: "8 900 €",
        type: "Résidentiel",
        badge: "POPULAIRE",
        highlight: true,
        description: "Installation idéale pour une maison de 2-3 personnes"
      },
      {
        power: "6 kWc",
        price: "15 900 €",
        type: "Résidentiel+",
        badge: "",
        highlight: false,
        description: "Pour une maison de 4-5 personnes avec forte consommation"
      },
      {
        power: "9 kWc",
        price: "22 900 €",
        type: "Premium",
        badge: "OPTIMAL",
        highlight: true,
        description: "Installation complète pour une autonomie maximale"
      }
    ],
    notes: [
      "Prix TTC avec pose incluse. TVA 10% pour les installations résidentielles de plus de 2 ans."
    ],
    ctaText: "Demander un devis gratuit"
  },
  costs: [
    { power: "3kWc", price: 8900 },
    { power: "6kWc", price: 15900 },
    { power: "9kWc", price: 22900 }
  ],
  installers: [
    {
      name: "My Ohm Technologies",
      certifications: ["RGE QualiPV", "Qualibat"],
      description: "Expert en installation solaire depuis plus de 10 ans",
      experience: "Plus de 1000 installations réalisées"
    }
  ],
  subsidies: {
    autoconsumption: {
      description: "Prime à l'autoconsommation",
      rates: [
        { power: "≤ 3 kWc", amount: 380 },
        { power: "3-9 kWc", amount: 290 },
        { power: "9-36 kWc", amount: 160 }
      ]
    },
    buyback: {
      description: "Tarif de rachat garanti sur 20 ans",
      details: [
        "Surplus d'électricité vendu à EDF OA",
        "Prix fixe pendant 20 ans",
        "Contrat sécurisé"
      ]
    },
    vat: {
      description: "TVA réduite pour les installations",
      rate: 10,
      normalRate: 20
    },
    taxExemption: {
      description: "Exonération de taxe foncière",
      details: [
        "Jusqu'à 5 ans selon la commune",
        "Sur la part départementale"
      ]
    }
  }
};
