import { Department } from "@/types/departments";
import { defaultSolarInstallationData as defaultSolarInstallation } from "../default-solar-installation";

const vaucluse: Department = {
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
      population: 29648,
      sunshineHours: 2800,
      solarAdvantages: [
        "Ensoleillement méditerranéen optimal",
        "Position géographique privilégiée",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Ville historique adaptée au solaire",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Installation sur mesure"
      ],
      reviews: [
        {
          author: "Robert L.",
          rating: 5,
          date: "2023-12-08",
          comment: "Installation impeccable, équipe très professionnelle. Production optimale grâce à l'excellent ensoleillement.",
          location: "Orange Centre"
        },
        {
          author: "Isabelle M.",
          rating: 5,
          date: "2023-11-20",
          comment: "Très satisfaite de l'installation. Service client au top et rendement excellent.",
          location: "L'Argensol"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Orange (84) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Orange. 2800h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire orange",
          "installation panneau solaire orange",
          "photovoltaique orange",
          "installation photovoltaique orange",
          "installateur photovoltaique orange",
          "panneau photovoltaique orange",
          "entreprise panneau solaire orange",
          "prix installation panneaux solaires orange"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Orange",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Orange",
            "postalCode": "84100",
            "addressRegion": "Vaucluse",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Orange ?",
            answer: "Le coût moyen d'une installation solaire à Orange varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quel est le potentiel solaire à Orange ?",
            answer: "Orange bénéficie d'un ensoleillement exceptionnel avec 2800 heures de soleil par an, ce qui en fait un lieu idéal pour l'installation de panneaux solaires avec un excellent rendement énergétique."
          },
          {
            question: "Quelles sont les aides disponibles à Orange ?",
            answer: "À Orange, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, et départementales du Vaucluse. Les économies peuvent atteindre jusqu'à 7500€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/orange/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Orange"
          },
          {
            url: "/images/cities/orange/realisations-orange.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Orange"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
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

export default vaucluse;
