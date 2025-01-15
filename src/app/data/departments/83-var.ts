import { Department } from "@/types/departments";
import { defaultSolarInstallationData as defaultSolarInstallation } from "../default-solar-installation";

const var83: Department = {
  name: "Var",
  code: "83",
  population: 1058014,
  solarAdvantages: [
    "Plus de 2800 heures d'ensoleillement par an",
    "Climat méditerranéen idéal pour le solaire",
    "Rendement solaire parmi les plus élevés de France",
    "Économies significatives sur la facture d'électricité",
    "Valorisation immobilière importante",
    "Contribution à la transition énergétique"
  ],
  faq: [
    {
      question: "Pourquoi installer des panneaux solaires dans le Var ?",
      answer: "Le Var bénéficie d'un ensoleillement exceptionnel avec plus de 2800 heures de soleil par an, ce qui en fait l'un des départements les plus propices à l'installation de panneaux solaires en France. Cette exposition optimale garantit une production d'énergie maximale et un retour sur investissement rapide."
    },
    {
      question: "Quelles sont les aides disponibles dans le Var ?",
      answer: "Les habitants du Var peuvent bénéficier de plusieurs aides : la prime à l'autoconsommation, MaPrimeRénov', l'éco-PTZ, la TVA à 10%, ainsi que des aides locales spécifiques. My Ohm Technologies vous accompagne dans l'obtention de ces aides pour optimiser votre investissement."
    },
    {
      question: "Quelle est la durée d'installation des panneaux solaires ?",
      answer: "L'installation complète des panneaux solaires prend généralement 1 à 2 jours pour une maison individuelle. Ce délai peut varier selon la complexité du projet et la configuration de votre toiture. Notre équipe s'engage à minimiser les perturbations pendant les travaux."
    },
    {
      question: "Quelle est la durée de vie des panneaux solaires ?",
      answer: "Les panneaux solaires que nous installons ont une durée de vie moyenne de 25 à 30 ans, avec une garantie de performance de 25 ans. Leur rendement reste supérieur à 80% même après 25 ans d'utilisation, assurant un investissement durable."
    },
    {
      question: "L'installation nécessite-t-elle une autorisation dans le Var ?",
      answer: "Oui, une déclaration préalable de travaux est généralement nécessaire. Dans certaines zones (sites classés, proximité de monuments historiques), des autorisations supplémentaires peuvent être requises. My Ohm Technologies vous accompagne dans toutes les démarches administratives."
    },
    {
      question: "Quel est le retour sur investissement dans le Var ?",
      answer: "Grâce à l'excellent ensoleillement du Var et aux différentes aides disponibles, le retour sur investissement moyen est de 6 à 8 ans. Cette période peut varier selon votre consommation, la puissance installée et votre mode de financement."
    }
  ],
  cities: {
    toulon: {
      name: "Toulon",
      code: "83137",
      population: 171953,
      sunshineHours: 2800,
      heroImage: {
        url: '/images/regions/bg-toulon.webp',
        alt: 'Vue panoramique de Toulon et de sa rade'
      },
      solarAdvantages: [
        "Plus de 300 jours de soleil par an",
        "Fort potentiel d'économies",
        "Climat idéal toute l'année",
        "Impact écologique positif"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements haute performance",
        "Suivi production optimisé",
        "Service client premium"
      ],
      reviews: [
        {
          author: "Marc D.",
          rating: 5,
          comment: "Installation impeccable et rendement au-delà de mes attentes.",
          date: "2023-12-13",
          location: "Le Mourillon"
        },
        {
          author: "Sophie L.",
          rating: 5,
          comment: "Équipe professionnelle et résultats excellents.",
          date: "2023-11-28",
          location: "Haute-Ville"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Toulon (83) | Expert Certifié RGE",
        metaDescription: "✓ Expert en installation de panneaux solaires à Toulon. 2800h d'ensoleillement/an, équipe certifiée RGE. Devis gratuit et aides régionales disponibles.",
        keywords: [
          "panneau solaire toulon",
          "panneaux solaires toulon",
          "installation panneau solaire toulon",
          "installateur panneau solaire toulon",
          "entreprise panneaux solaires toulon",
          "prix panneaux solaires toulon",
          "installation photovoltaique toulon",
          "aide panneau solaire toulon"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Toulon",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toulon",
            "postalCode": "83000",
            "addressRegion": "Var",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Toulon ?",
            answer: "Le coût d'une installation solaire à Toulon varie entre 8000€ et 15000€, selon la puissance installée. Les aides régionales et nationales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Combien d'heures d'ensoleillement à Toulon ?",
            answer: "Toulon bénéficie d'environ 2800 heures d'ensoleillement par an, ce qui en fait une ville idéale pour l'installation de panneaux solaires avec un excellent rendement énergétique."
          }
        ],
        images: [
          {
            url: "/images/cities/toulon/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Toulon"
          },
          {
            url: "/images/cities/toulon/realisations-toulon.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Toulon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laSeyneSurMer: {
      name: "La Seyne-sur-Mer",
      code: "83126",
      population: 65374,
      individualHouses: 7850,
      solarAdvantages: [
        "Exposition maritime optimale",
        "Ensoleillement maximal",
        "Rentabilité attractive",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation marine adaptée",
        "Matériel anticorrosion",
        "Suivi personnalisé",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          comment: "Très satisfait de l'installation, parfaitement adaptée au climat marin.",
          date: "2023-12-12",
          location: "Les Sablettes"
        },
        {
          author: "Marie-Claire B.",
          rating: 5,
          comment: "Service excellent et résultats excellents.",
          date: "2023-11-27",
          location: "Tamaris"
        }
      ],
      seo: {
        title: "La Seyne-sur-Mer : Installation solaire en zone côtière",
        metaDescription: "Installation solaire à La Seyne-sur-Mer. Profitez d'une exposition maritime idéale.",
        keywords: ["installation solaire", "La Seyne-sur-Mer", "maritime", "énergie solaire"],
        images: [
          {
            url: "https://example.com/la-seyne-sur-mer-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Seyne-sur-Mer"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    frejus: {
      name: "Fréjus",
      code: "83061",
      population: 54023,
      sunshineHours: 2800,
      individualHouses: 6500,
      heroImage: {
        url: '/images/regions/bg-frejus.jpg',
        alt: 'Vue panoramique de Fréjus et de son port'
      },
      solarAdvantages: [
        "Ensoleillement exceptionnel méditerranéen",
        "Position côtière idéale pour l'énergie solaire",
        "Climat favorable toute l'année",
        "Forte rentabilité des installations"
      ],
      keyPoints: [
        "Ville engagée dans la transition énergétique",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Installation sur mesure"
      ],
      reviews: [
        {
          author: "Philippe R.",
          rating: 5,
          date: "2023-12-18",
          comment: "Installation parfaite, équipe très professionnelle. Excellent suivi du projet.",
          location: "Fréjus Plage"
        },
        {
          author: "Catherine M.",
          rating: 5,
          date: "2023-11-30",
          comment: "Très satisfaite de mon installation. Production optimale grâce à l'excellent ensoleillement.",
          location: "Fréjus Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Fréjus (83) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert en installation de panneaux solaires à Fréjus. 2800h d'ensoleillement/an, équipe certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire frejus",
          "installation panneau solaire frejus",
          "photovoltaique frejus",
          "installation photovoltaique frejus",
          "installateur photovoltaique frejus",
          "panneau photovoltaique frejus",
          "entreprise panneau solaire frejus",
          "prix installation panneaux solaires frejus"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Fréjus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Fréjus",
            "postalCode": "83600",
            "addressRegion": "Var",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Fréjus ?",
            answer: "Le coût moyen d'une installation solaire à Fréjus varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quel est le potentiel solaire à Fréjus ?",
            answer: "Fréjus bénéficie d'un ensoleillement exceptionnel avec 2800 heures de soleil par an, ce qui en fait un lieu idéal pour l'installation de panneaux solaires avec un excellent rendement énergétique."
          },
          {
            question: "Quelles sont les aides disponibles à Fréjus ?",
            answer: "À Fréjus, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, et départementales du Var. Les économies peuvent atteindre jusqu'à 8000€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/frejus/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Fréjus"
          },
          {
            url: "/images/cities/frejus/realisations-frejus.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Fréjus"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    draguignan: {
      name: "Draguignan",
      code: "83050",
      population: 40054,
      sunshineHours: 2800,
      heroImage: {
        url: '/images/regions/bg-draguinan.webp',
        alt: 'Vue panoramique de Draguignan'
      },
      solarAdvantages: [
        "Ensoleillement méditerranéen optimal",
        "Position géographique privilégiée",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Installation sur mesure adaptée à Draguignan",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Service après-vente réactif"
      ],
      reviews: [
        {
          author: "Patrick M.",
          rating: 5,
          date: "2023-12-12",
          comment: "Installation de panneaux solaires parfaite. L'équipe a été très professionnelle, je recommande !",
          location: "Draguignan Centre"
        },
        {
          author: "Sylvie R.",
          rating: 5,
          date: "2023-11-25",
          comment: "Très satisfaite de mon installateur de panneaux solaires. Service impeccable du début à la fin.",
          location: "Draguignan Nord"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Draguignan (83) | Expert Certifié RGE 2025",
        metaDescription: "✓ Installation de panneaux solaires à Draguignan par un installateur certifié RGE. 2800h d'ensoleillement/an, devis gratuit !",
        keywords: [
          // Variations panneaux solaires (pluriel)
          "panneaux solaires draguignan",
          "installation panneaux solaires draguignan",
          "installateur panneaux solaires draguignan",
          "aide panneaux solaires draguignan",
          
          // Variations panneau solaire (singulier)
          "panneau solaire draguignan",
          "installation panneau solaire draguignan",
          "installateur panneau solaire draguignan",
          
          // Variations photovoltaïque
          "installateur panneaux photovoltaïques draguignan",
          "installation panneaux photovoltaiques draguignan",
          "panneau photovoltaique draguignan",
          
          // Variations avec "de"
          "installation de panneaux solaires draguignan",
          "installation de panneau solaire draguignan",
          "installateur de panneaux solaires draguignan",
          "installateur de panneau solaire draguignan",
          
          // Variations prix/devis
          "prix panneaux solaires draguignan",
          "prix panneau solaire draguignan",
          "devis panneaux solaires draguignan",
          
          // Variations locales
          "energie solaire draguignan",
          "pose panneaux solaires draguignan",
          "entreprise solaire draguignan"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Draguignan",
          "description": "Expert en installation de panneaux solaires à Draguignan. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Draguignan",
            "postalCode": "83300",
            "addressRegion": "Var",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.5368",
            "longitude": "6.4627"
          },
          "url": "https://votresite.fr/draguignan",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00"
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Draguignan ?",
            answer: "Le coût d'une installation de panneaux solaires à Draguignan varie entre 8000€ et 15000€ selon la surface et la puissance. En tant qu'installateur certifié, nous vous aidons à obtenir toutes les aides disponibles qui peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Comment choisir son installateur de panneaux solaires à Draguignan ?",
            answer: "Un bon installateur de panneaux solaires à Draguignan doit être certifié RGE, avoir une expérience prouvée et proposer un service complet : étude personnalisée, installation professionnelle et suivi après-vente. Notre équipe répond à tous ces critères avec plus de 500 installations réussies dans la région."
          },
          {
            question: "Quel est le délai pour installer des panneaux solaires à Draguignan ?",
            answer: "En tant qu'installateur local à Draguignan, nous réalisons l'installation complète en 2 à 3 jours après validation du projet. Le délai total, incluant l'étude et les démarches administratives, est d'environ 2-3 mois."
          },
          {
            question: "Quelles sont les aides disponibles pour l'installation de panneaux solaires à Draguignan ?",
            answer: "À Draguignan, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov', la prime à l'autoconsommation, l'éco-PTZ, et les aides régionales PACA. Le montant total des aides peut atteindre jusqu'à 7500€ selon votre situation."
          }
        ]
      }
    },
    hyeres: {
      name: "Hyères",
      code: "83069",
      population: 57635,
      sunshineHours: 2850,
      individualHouses: 7200,
      coordinates: {
        lat: 43.1206,
        lng: 6.1286
      },
      solarAdvantages: [
        "Ensoleillement exceptionnel avec 2900 heures/an",
        "Zone climatique H3 idéale pour le photovoltaïque",
        "Subventions locales spécifiques à Hyères",
        "Forte valorisation immobilière grâce au solaire",
        "Réseau d'installateurs certifiés RGE"
      ],
      cityDescription: "Hyères, située dans le Var, bénéficie d'un climat méditerranéen parfait pour l'installation de panneaux solaires. Avec ses 57 635 habitants et plus de 7 200 maisons individuelles, la ville représente un potentiel solaire considérable. Les toitures des villas hyéroises, souvent bien orientées et dégagées, sont particulièrement adaptées aux installations photovoltaïques.",
      seoKeywords: [
        "panneaux solaires Hyères",
        "installation solaire 83400",
        "photovoltaïque Hyères",
        "aide panneaux solaires Hyères",
        "prix installation solaire Hyères",
        "devis panneaux solaires 83400"
      ],
      metaDescription: "Installation de panneaux solaires à Hyères (83400). Profitez d'un ensoleillement exceptionnel et d'aides locales pour votre projet solaire. Devis gratuit et installation par des experts certifiés.",
      keyPoints: [
        "Installation sur mesure",
        "Équipements haute performance",
        "Suivi production optimisé",
        "Service client premium"
      ],
      reviews: [
        {
          author: "Laurent D.",
          rating: 5,
          comment: "Installation impeccable et service au top.",
          date: "2023-12-10",
          location: "Presqu'île de Giens"
        },
        {
          author: "Catherine P.",
          rating: 5,
          comment: "Excellent suivi et rendement conforme aux prévisions.",
          date: "2023-11-25",
          location: "L'Ayguade"
        }
      ],
      seo: {
        title: "Hyères : Installation solaire entre mer et soleil",
        metaDescription: "Installation solaire à Hyères. Profitez d'un ensoleillement optimal toute l'année.",
        keywords: ["installation solaire", "Hyères", "îles d'Or", "énergie solaire"],
        images: [
          {
            url: "https://example.com/hyeres-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Hyères"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laGarde: {
      name: "La Garde",
      code: "83062",
      population: 25336,
      individualHouses: 3100,
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement optimal",
        "Rentabilité élevée",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation adaptée",
        "Matériel certifié",
        "Suivi technique",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Patrick M.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi.",
          date: "2023-12-06",
          location: "Centre-ville"
        },
        {
          author: "Sylvie R.",
          rating: 5,
          comment: "Excellent service et production optimale.",
          date: "2023-11-21",
          location: "La Planquette"
        }
      ],
      seo: {
        title: "La Garde : Installation solaire en Provence",
        metaDescription: "Installation solaire à La Garde. Profitez d'un ensoleillement optimal toute l'année.",
        keywords: ["installation solaire", "La Garde", "Provence", "énergie solaire"],
        images: [
          {
            url: "https://example.com/la-garde-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Garde"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laValetteDuVar: {
      name: "La Valette-du-Var",
      code: "83144",
      population: 23824,
      individualHouses: 2900,
      solarAdvantages: [
        "Exposition favorable",
        "Climat méditerranéen",
        "Performance optimale",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements certifiés",
        "Suivi production",
        "Service client"
      ],
      reviews: [
        {
          author: "Bernard L.",
          rating: 5,
          comment: "Installation parfaite et équipe professionnelle.",
          date: "2023-12-05",
          location: "Centre-ville"
        },
        {
          author: "Marie-Pierre D.",
          rating: 5,
          comment: "Très satisfaite du service et des résultats.",
          date: "2023-11-20",
          location: "La Coupiane"
        }
      ],
      seo: {
        title: "La Valette-du-Var : Installation solaire en Provence",
        metaDescription: "Installation solaire à La Valette-du-Var. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "La Valette-du-Var", "Provence", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/la-valette-du-var-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Valette-du-Var"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laCrau: {
      name: "La Crau",
      code: "83047",
      population: 18109,
      individualHouses: 2200,
      solarAdvantages: [
        "Exposition provençale",
        "Ensoleillement optimal",
        "Rentabilité attractive",
        "Impact écologique"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Matériel performant",
        "Suivi technique",
        "Service expert"
      ],
      reviews: [
        {
          author: "François M.",
          rating: 5,
          comment: "Installation impeccable et rendement excellent.",
          date: "2023-12-04",
          location: "Centre-ville"
        },
        {
          author: "Hélène B.",
          rating: 5,
          comment: "Service professionnel et résultats conformes.",
          date: "2023-11-19",
          location: "La Moutonne"
        }
      ],
      seo: {
        title: "La Crau : Installation solaire en Provence",
        metaDescription: "Installation solaire à La Crau. Profitez d'un ensoleillement optimal toute l'année.",
        keywords: ["installation solaire", "La Crau", "Provence", "énergie solaire"],
        images: [
          {
            url: "https://example.com/la-crau-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Crau"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    brignoles: {
      name: "Brignoles",
      code: "83023",
      population: 17834,
      individualHouses: 2150,
      solarAdvantages: [
        "Climat provençal idéal",
        "Exposition optimale",
        "Rentabilité attractive",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements certifiés",
        "Suivi production",
        "Service expert"
      ],
      reviews: [
        {
          author: "Robert D.",
          rating: 5,
          comment: "Installation parfaite et rendement excellent.",
          date: "2023-12-03",
          location: "Centre-ville"
        },
        {
          author: "Françoise M.",
          rating: 5,
          comment: "Très satisfaite du service et des résultats.",
          date: "2023-11-18",
          location: "Saint-Jean"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Brignoles (83) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Brignoles. 2750h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire brignoles",
          "installation panneau solaire brignoles",
          "photovoltaique brignoles",
          "installation photovoltaique brignoles",
          "installateur photovoltaique brignoles",
          "panneau photovoltaique brignoles",
          "entreprise panneau solaire brignoles",
          "prix installation panneaux solaires brignoles"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Brignoles",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Brignoles",
            "postalCode": "83170",
            "addressRegion": "Var",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Brignoles ?",
            answer: "Le coût moyen d'une installation solaire à Brignoles varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quel est le potentiel solaire à Brignoles ?",
            answer: "Brignoles bénéficie d'un excellent ensoleillement avec 2750 heures de soleil par an, ce qui en fait un lieu idéal pour l'installation de panneaux solaires avec un excellent rendement énergétique."
          },
          {
            question: "Quelles sont les aides disponibles à Brignoles ?",
            answer: "À Brignoles, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, et départementales du Var. Les économies peuvent atteindre jusqu'à 7500€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/brignoles/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Brignoles"
          },
          {
            url: "/images/cities/brignoles/realisations-brignoles.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Brignoles"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintMaximinLaSainteBaume: {
      name: "Saint-Maximin-la-Sainte-Baume",
      code: "83116",
      population: 17522,
      individualHouses: 2100,
      solarAdvantages: [
        "Position géographique favorable",
        "Ensoleillement maximal",
        "Performance optimale",
        "Solution durable"
      ],
      keyPoints: [
        "Installation adaptée",
        "Matériel performant",
        "Suivi technique",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Michel P.",
          rating: 5,
          comment: "Installation impeccable et service au top.",
          date: "2023-12-02",
          location: "Centre-ville"
        },
        {
          author: "Anne-Sophie L.",
          rating: 5,
          comment: "Service excellent et résultats probants.",
          date: "2023-11-17",
          location: "Les Anges"
        }
      ],
      seo: {
        title: "Saint-Maximin : Installation solaire en Provence Verte",
        metaDescription: "Installation solaire à Saint-Maximin-la-Sainte-Baume. Optimisez votre production d'énergie.",
        keywords: ["installation solaire", "Saint-Maximin", "Provence Verte", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/saint-maximin-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Maximin"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    sanarySurMer: {
      name: "Sanary-sur-Mer",
      code: "83123",
      population: 16582,
      individualHouses: 2000,
      solarAdvantages: [
        "Exposition maritime idéale",
        "Ensoleillement optimal",
        "Rentabilité élevée",
        "Impact écologique"
      ],
      keyPoints: [
        "Installation côtière",
        "Matériel anticorrosion",
        "Suivi personnalisé",
        "Service premium"
      ],
      reviews: [
        {
          author: "Jean-Pierre C.",
          rating: 5,
          comment: "Installation parfaite, adaptée au climat marin.",
          date: "2023-12-01",
          location: "Port"
        },
        {
          author: "Marie-Claire H.",
          rating: 5,
          comment: "Très satisfaite du rendement et du suivi.",
          date: "2023-11-16",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Sanary-sur-Mer : Installation solaire en bord de mer",
        metaDescription: "Installation solaire à Sanary-sur-Mer. Profitez d'une exposition maritime exceptionnelle.",
        keywords: ["installation solaire", "Sanary-sur-Mer", "maritime", "énergie solaire"],
        images: [
          {
            url: "https://example.com/sanary-sur-mer-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Sanary-sur-Mer"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    roquebruneSurArgens: {
      name: "Roquebrune-sur-Argens",
      code: "83107",
      population: 14924,
      individualHouses: 1800,
      solarAdvantages: [
        "Position privilégiée",
        "Ensoleillement maximal",
        "Performance optimale",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements certifiés",
        "Suivi production",
        "Service expert"
      ],
      reviews: [
        {
          author: "Laurent V.",
          rating: 5,
          comment: "Installation impeccable et rendement excellent.",
          date: "2023-11-30",
          location: "Les Issambres"
        },
        {
          author: "Catherine B.",
          rating: 5,
          comment: "Service professionnel et résultats conformes.",
          date: "2023-11-15",
          location: "Village"
        }
      ],
      seo: {
        title: "Roquebrune-sur-Argens : Installation solaire en Provence",
        metaDescription: "Installation solaire à Roquebrune-sur-Argens. Optimisez votre production d'énergie.",
        keywords: ["installation solaire", "Roquebrune-sur-Argens", "Provence", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/roquebrune-sur-argens-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Roquebrune-sur-Argens"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    sainteMaxime: {
      name: "Sainte-Maxime",
      code: "83115",
      population: 14284,
      individualHouses: 1700,
      solarAdvantages: [
        "Exposition Golfe de Saint-Tropez",
        "Ensoleillement optimal",
        "Rentabilité attractive",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation marine adaptée",
        "Matériel anticorrosion",
        "Suivi technique",
        "Service premium"
      ],
      reviews: [
        {
          author: "Pierre-Jean M.",
          rating: 5,
          comment: "Installation parfaite et service impeccable.",
          date: "2023-11-29",
          location: "Centre-ville"
        },
        {
          author: "Sophie D.",
          rating: 5,
          comment: "Très satisfaite du rendement et du suivi.",
          date: "2023-11-14",
          location: "Les Virgiles"
        }
      ],
      seo: {
        title: "Sainte-Maxime : Installation solaire sur le Golfe",
        metaDescription: "Installation solaire à Sainte-Maxime. Profitez d'une exposition maritime exceptionnelle.",
        keywords: ["installation solaire", "Sainte-Maxime", "Golfe de Saint-Tropez", "énergie solaire"],
        images: [
          {
            url: "https://example.com/sainte-maxime-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Sainte-Maxime"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    ollioules: {
      name: "Ollioules",
      code: "83090",
      population: 13856,
      individualHouses: 1650,
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement optimal",
        "Performance maximale",
        "Impact écologique"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements certifiés",
        "Suivi production",
        "Service expert"
      ],
      reviews: [
        {
          author: "Jacques R.",
          rating: 5,
          comment: "Installation impeccable et rendement excellent.",
          date: "2023-11-28",
          location: "Centre-ville"
        },
        {
          author: "Éliane M.",
          rating: 5,
          comment: "Service professionnel et résultats conformes.",
          date: "2023-11-13",
          location: "La Gare"
        }
      ],
      seo: {
        title: "Ollioules : Installation solaire en Provence",
        metaDescription: "Installation solaire à Ollioules. Optimisez votre production d'énergie solaire.",
        keywords: ["installation solaire", "Ollioules", "Provence", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/ollioules-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Ollioules"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    vidauban: {
      name: "Vidauban",
      code: "83148",
      population: 12341,
      individualHouses: 1500,
      solarAdvantages: [
        "Climat provençal idéal",
        "Exposition favorable",
        "Rentabilité attractive",
        "Solution durable"
      ],
      keyPoints: [
        "Installation adaptée",
        "Matériel performant",
        "Suivi technique",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Philippe L.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi.",
          date: "2023-11-27",
          location: "Centre-ville"
        },
        {
          author: "Marie-Thérèse B.",
          rating: 5,
          comment: "Service excellent et rendement optimal.",
          date: "2023-11-12",
          location: "Les Vallons"
        }
      ],
      seo: {
        title: "Vidauban : Installation solaire en Dracénie",
        metaDescription: "Installation solaire à Vidauban. Profitez d'un ensoleillement optimal toute l'année.",
        keywords: ["installation solaire", "Vidauban", "Dracénie", "énergie solaire"],
        images: [
          {
            url: "https://example.com/vidauban-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Vidauban"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    cuers: {
      name: "Cuers",
      code: "83049",
      population: 11724,
      individualHouses: 1400,
      solarAdvantages: [
        "Position provençale idéale",
        "Ensoleillement maximal",
        "Performance optimale",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Équipements certifiés",
        "Suivi production",
        "Service expert"
      ],
      reviews: [
        {
          author: "Jean-Claude P.",
          rating: 5,
          comment: "Installation parfaite et rendement excellent.",
          date: "2023-11-26",
          location: "Centre-ville"
        },
        {
          author: "Valérie D.",
          rating: 5,
          comment: "Très satisfaite du service et des résultats.",
          date: "2023-11-11",
          location: "Pas Redon"
        }
      ],
      seo: {
        title: "Cuers : Installation solaire en Provence",
        metaDescription: "Installation solaire à Cuers. Optimisez votre production d'énergie solaire.",
        keywords: ["installation solaire", "Cuers", "Provence", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/cuers-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Cuers"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintCyrSurMer: {
      name: "Saint-Cyr-sur-Mer",
      code: "83112",
      population: 11803,
      individualHouses: 1450,
      solarAdvantages: [
        "Exposition maritime idéale",
        "Ensoleillement optimal",
        "Rentabilité élevée",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation côtière",
        "Matériel anticorrosion",
        "Suivi personnalisé",
        "Service premium"
      ],
      reviews: [
        {
          author: "Marc B.",
          rating: 5,
          comment: "Installation impeccable, parfaitement adaptée au climat marin.",
          date: "2023-11-25",
          location: "Les Lecques"
        },
        {
          author: "Christine R.",
          rating: 5,
          comment: "Service excellent et production optimale.",
          date: "2023-11-10",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Saint-Cyr-sur-Mer : Installation solaire en bord de mer",
        metaDescription: "Installation solaire à Saint-Cyr-sur-Mer. Profitez d'une exposition maritime exceptionnelle.",
        keywords: ["installation solaire", "Saint-Cyr-sur-Mer", "maritime", "énergie solaire"],
        images: [
          {
            url: "https://example.com/saint-cyr-sur-mer-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Cyr-sur-Mer"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    solliesPont: {
      name: "Solliès-Pont",
      code: "83130",
      population: 11265,
      individualHouses: 1350,
      solarAdvantages: [
        "Position vallée du Gapeau",
        "Ensoleillement maximal",
        "Performance optimale",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements certifiés",
        "Suivi production",
        "Service expert"
      ],
      reviews: [
        {
          author: "Bernard V.",
          rating: 5,
          comment: "Installation parfaite et rendement excellent.",
          date: "2023-11-24",
          location: "Centre-ville"
        },
        {
          author: "Monique L.",
          rating: 5,
          comment: "Très satisfaite du service et des résultats.",
          date: "2023-11-09",
          location: "Les Sénès"
        }
      ],
      seo: {
        title: "Solliès-Pont : Installation solaire en vallée du Gapeau",
        metaDescription: "Installation solaire à Solliès-Pont. Optimisez votre production d'énergie solaire.",
        keywords: ["installation solaire", "Solliès-Pont", "vallée du Gapeau", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/sollies-pont-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Solliès-Pont"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "saint-raphael": {
      name: "Saint-Raphaël",
      code: "83118",
      population: 35042,
      sunshineHours: 2800,
      solarAdvantages: [
        "Ensoleillement exceptionnel méditerranéen",
        "Position côtière privilégiée",
        "Climat optimal toute l'année",
        "Rendement solaire maximal"
      ],
      keyPoints: [
        "Ville balnéaire adaptée au solaire",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Installation sur mesure"
      ],
      reviews: [
        {
          author: "Marc R.",
          rating: 5,
          date: "2023-12-15",
          comment: "Installation impeccable, équipe très professionnelle. Production optimale grâce à l'excellent ensoleillement.",
          location: "Saint-Raphaël Centre"
        },
        {
          author: "Sophie V.",
          rating: 5,
          date: "2023-11-28",
          comment: "Très satisfaite de l'installation. Service client au top et rendement excellent.",
          location: "Valescure"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Saint-Raphaël (83) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Saint-Raphaël. 2800h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire saint raphael",
          "installation panneau solaire saint raphael",
          "photovoltaique saint raphael",
          "installation photovoltaique saint raphael",
          "installateur photovoltaique saint raphael",
          "panneau photovoltaique saint raphael",
          "entreprise panneau solaire saint raphael",
          "prix installation panneaux solaires saint raphael"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Saint-Raphaël",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Saint-Raphaël",
            "postalCode": "83700",
            "addressRegion": "Var",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Saint-Raphaël ?",
            answer: "Le coût moyen d'une installation solaire à Saint-Raphaël varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quel est le potentiel solaire à Saint-Raphaël ?",
            answer: "Saint-Raphaël bénéficie d'un ensoleillement exceptionnel avec 2800 heures de soleil par an, ce qui en fait un lieu idéal pour l'installation de panneaux solaires avec un excellent rendement énergétique."
          },
          {
            question: "Quelles sont les aides disponibles à Saint-Raphaël ?",
            answer: "À Saint-Raphaël, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, et départementales du Var. Les économies peuvent atteindre jusqu'à 7500€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/saint-raphael/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Saint-Raphaël"
          },
          {
            url: "/images/cities/saint-raphael/realisations-saint-raphael.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Saint-Raphaël"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    esparronDeVerdon: {
      name: "Esparron-de-Verdon",
      code: "04080",
      population: 478,
      sunshineHours: 2750,
      solarAdvantages: [
        "Ensoleillement exceptionnel du Verdon",
        "Position géographique privilégiée",
        "Climat provençal favorable",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Village du Verdon adapté au solaire",
        "Expertise locale reconnue",
        "Aides régionales majorées",
        "Installation sur mesure"
      ],
      reviews: [
        {
          author: "Bernard M.",
          rating: 5,
          date: "2023-12-18",
          comment: "Installation parfaite, équipe professionnelle. Production solaire excellente dans notre région ensoleillée.",
          location: "Esparron Centre"
        },
        {
          author: "Sylvie P.",
          rating: 5,
          date: "2023-11-25",
          comment: "Très satisfaite de l'installation. Service impeccable et rendement optimal.",
          location: "Les Lacs"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Esparron-de-Verdon (04) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Esparron-de-Verdon. 2750h d'ensoleillement/an, installation certifiée RGE. Profitez des aides majorées ! Devis gratuit.",
        keywords: [
          "panneau solaire esparron de verdon",
          "installation panneau solaire esparron",
          "photovoltaique esparron de verdon",
          "installation photovoltaique esparron",
          "installateur photovoltaique verdon",
          "panneau photovoltaique esparron",
          "entreprise panneau solaire esparron",
          "prix installation panneaux solaires verdon"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Esparron-de-Verdon",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Esparron-de-Verdon",
            "postalCode": "04800",
            "addressRegion": "Alpes-de-Haute-Provence",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Esparron-de-Verdon ?",
            answer: "Le coût moyen d'une installation solaire à Esparron-de-Verdon varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 60% grâce au bonus rural."
          },
          {
            question: "Quel est le potentiel solaire à Esparron-de-Verdon ?",
            answer: "Esparron-de-Verdon bénéficie d'un excellent ensoleillement avec 2750 heures de soleil par an, ce qui en fait un lieu idéal pour l'installation de panneaux solaires avec un excellent rendement énergétique."
          },
          {
            question: "Quelles sont les aides disponibles à Esparron-de-Verdon ?",
            answer: "À Esparron-de-Verdon, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, du bonus rural et des aides départementales. Les économies peuvent atteindre jusqu'à 8000€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/esparron-de-verdon/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Esparron-de-Verdon"
          },
          {
            url: "/images/cities/esparron-de-verdon/realisations-esparron.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Esparron-de-Verdon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    }
  }
};

export default var83;
