import { Department } from "../types";
import { defaultSolarInstallation } from "../default-solar-installation";

export const vaucluse: Department = {
  name: "Vaucluse",
  code: "84",
  coverImage: {
    url: "/images/departments/vaucluse-cover.jpg",
    alt: "Paysages du Vaucluse avec installations solaires",
  },
  cities: {
    "avignon": {
      name: "Avignon",
      code: "84007",
      population: 94200,
      solarAdvantages: [
        "Plus de 2800 heures d'ensoleillement par an",
        "Climat méditerranéen idéal",
        "Fort potentiel d'économies",
        "Rendement solaire optimal"
      ],
      keyPoints: [
        "Préfecture du Vaucluse",
        "Ville historique UNESCO",
        "Réseau d'installateurs certifiés",
        "Aides locales disponibles"
      ],
      reviews: [
        {
          author: "Marie L.",
          rating: 5,
          text: "Installation impeccable, équipe professionnelle. Très satisfaite des économies réalisées.",
          date: "2023-09-15",
          city: "Avignon",
          installation: defaultSolarInstallation
        },
        {
          author: "Jean-Pierre M.",
          rating: 4,
          text: "Bon investissement, l'installation s'est bien passée. Service après-vente réactif.",
          date: "2023-08-22",
          city: "Avignon",
          installation: defaultSolarInstallation
        }
      ],
      altitude: 23,
      coordinates: { lat: 43.9493, lng: 4.8055 }
    },
    "carpentras": {
      name: "Carpentras",
      code: "84031",
      population: 28500,
      solarAdvantages: [
        "Excellent taux d'ensoleillement",
        "Zone climatique favorable",
        "Économies d'énergie significatives",
        "Retour sur investissement rapide"
      ],
      keyPoints: [
        "Sous-préfecture du Vaucluse",
        "Ville engagée écologiquement",
        "Installateurs qualifiés",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Sophie D.",
          rating: 5,
          text: "Très contente de mon installation. Production conforme aux prévisions.",
          date: "2023-10-05",
          city: "Carpentras",
          installation: defaultSolarInstallation
        }
      ],
      altitude: 99,
      coordinates: { lat: 44.0567, lng: 5.0478 }
    },
    "orange": {
      name: "Orange",
      code: "84087",
      population: 29000,
      solarAdvantages: [
        "Ensoleillement optimal",
        "Conditions météo favorables",
        "Rentabilité assurée",
        "Production solaire élevée"
      ],
      keyPoints: [
        "Ville historique romaine",
        "Engagement écologique fort",
        "Professionnels expérimentés",
        "Suivi personnalisé"
      ],
      reviews: [
        {
          author: "Michel P.",
          rating: 4,
          text: "Installation rapide et propre. Bon suivi de production.",
          date: "2023-09-30",
          city: "Orange",
          installation: defaultSolarInstallation
        }
      ],
      altitude: 50,
      coordinates: { lat: 44.1389, lng: 4.8076 }
    },
    "pernes-les-fontaines": {
      name: "Pernes-les-Fontaines",
      code: "84088",
      population: 10000,
      solarAdvantages: [
        "Exposition solaire privilégiée",
        "Climat méditerranéen idéal",
        "Économies substantielles",
        "Performance énergétique"
      ],
      keyPoints: [
        "Ville historique et moderne",
        "Transition énergétique active",
        "Experts certifiés",
        "Support technique local"
      ],
      reviews: [
        {
          author: "Claire B.",
          rating: 5,
          text: "Excellent accompagnement du début à la fin. Installation parfaite.",
          date: "2023-10-15",
          city: "Pernes-les-Fontaines",
          installation: defaultSolarInstallation
        }
      ],
      altitude: 55,
      coordinates: { lat: 44.0167, lng: 5.0667 }
    }
  }
};
