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
      population: 94203,
      sunshineHours: 2800,
      solarAdvantages: [
        "Climat méditerranéen optimal",
        "Position géographique privilégiée",
        "Fort ensoleillement annuel",
        "Zone propice aux installations"
      ],
      keyPoints: [
        "Préfecture du Vaucluse",
        "Ville historique UNESCO",
        "Réseau d'installateurs certifiés",
        "Aides locales disponibles"
      ],
      installation: {
        customerName: "Jean-Marc P.",
        city: "Avignon",
        monthlySavings: 103,
        systemSize: 3,
        panelsCount: 6,
        invertersCount: 6,
        testimonial: "Installation impeccable, équipe professionnelle et réactive. Production solaire au-delà de nos attentes.",
        rating: 5,
        imageUrl: "/images/installations/83-installation.jpg"
      },
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
      population: 29386,
      sunshineHours: 2750,
      solarAdvantages: [
        "Situation géographique favorable",
        "Ensoleillement important",
        "Climat provençal idéal",
        "Fort potentiel solaire"
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
      population: 29907,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position stratégique",
        "Ensoleillement optimal",
        "Climat favorable",
        "Nombreux projets solaires"
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
    "cavaillon": {
      name: "Cavaillon",
      code: "84035",
      population: 26689,
      sunshineHours: 2800,
      solarAdvantages: [
        "Exposition sud dominante",
        "Climat méditerranéen",
        "Zone propice au solaire",
        "Fort potentiel d'installation"
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
          city: "Cavaillon",
          installation: defaultSolarInstallation
        }
      ],
      altitude: 55,
      coordinates: { lat: 43.8333, lng: 5.0667 }
    },
    "apt": {
      name: "Apt",
      code: "84003",
      population: 11885,
      sunshineHours: 2750,
      solarAdvantages: [
        "Position au cœur du Luberon",
        "Ensoleillement exceptionnel",
        "Climat favorable",
        "Zone peu urbanisée"
      ],
      keyPoints: [
        "Ville historique et touristique",
        "Engagement écologique fort",
        "Professionnels expérimentés",
        "Suivi personnalisé"
      ],
      reviews: [],
      altitude: 170,
      coordinates: { lat: 43.8767, lng: 5.3978 }
    }
  }
};
