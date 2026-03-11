export const defaultSolarInstallation = {
  installationCostsTable: {
    title: "Coûts d'installation solaire",
    headers: ["Puissance", "Prix", "Type d'installation"],
    rows: [
      {
        power: "3 kWc",
        price: "7 900 €",
        type: "Résidentiel"
      },
      {
        power: "6 kWc",
        price: "15 200 €",
        type: "Résidentiel+",
        highlight: true
      },
      {
        power: "9 kWc",
        price: "22 500 €",
        type: "Premium"
      }
    ],
    notes: [
      "Installation complète incluse",
      "Garanties fabricant",
      "Accompagnement administratif"
    ],
    ctaText: "Demander un devis"
  },
  installers: [
    {
      name: "Expert Solar",
      certifications: ["RGE", "QualiPV"],
      description: "Expert en énergie solaire",
      experience: "10+ ans d'expérience"
    }
  ]
};
