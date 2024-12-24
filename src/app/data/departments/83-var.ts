import { Department } from "../types";
import { defaultSolarInstallation } from "../default-solar-installation";

export const varDepartement: Department = {
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
      individualHouses: 19734,
      solarAdvantages: [
        "Ensoleillement méditerranéen exceptionnel",
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
        title: "Toulon : Installation de panneaux solaires en bord de mer",
        metaDescription: "Installation solaire à Toulon. Profitez du climat méditerranéen pour optimiser votre production d'énergie solaire.",
        keywords: ["installation solaire", "Toulon", "méditerranée", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/toulon-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Toulon"
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
          comment: "Service excellent et production optimale.",
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
      individualHouses: 6500,
      solarAdvantages: [
        "Climat méditerranéen idéal",
        "Exposition optimale",
        "Performance maximale",
        "Rentabilité élevée"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Équipements premium",
        "Suivi production",
        "Service expert"
      ],
      reviews: [
        {
          author: "Jean-Paul R.",
          rating: 5,
          comment: "Installation parfaite et rendement excellent.",
          date: "2023-12-11",
          location: "Saint-Aygulf"
        },
        {
          author: "Isabelle M.",
          rating: 5,
          comment: "Très satisfaite du service et des économies réalisées.",
          date: "2023-11-26",
          location: "Port-Fréjus"
        }
      ],
      seo: {
        title: "Fréjus : Installation solaire sur la Côte d'Azur",
        metaDescription: "Installation solaire à Fréjus. Optimisez votre production d'énergie solaire.",
        keywords: ["installation solaire", "Fréjus", "Côte d'Azur", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/frejus-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Fréjus"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    hyeres: {
      name: "Hyères",
      code: "83069",
      population: 57635,
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
    draguignan: {
      name: "Draguignan",
      code: "83050",
      population: 40963,
      individualHouses: 4900,
      solarAdvantages: [
        "Climat provençal idéal",
        "Exposition favorable",
        "Rentabilité attractive",
        "Solution durable"
      ],
      keyPoints: [
        "Installation adaptée",
        "Équipements certifiés",
        "Suivi production",
        "Service client"
      ],
      reviews: [
        {
          author: "Michel B.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi.",
          date: "2023-12-09",
          location: "Centre-ville"
        },
        {
          author: "Anne-Marie L.",
          rating: 5,
          comment: "Service professionnel et résultats au rendez-vous.",
          date: "2023-11-24",
          location: "Les Collettes"
        }
      ],
      seo: {
        title: "Draguignan : Installation solaire en Provence Verte",
        metaDescription: "Installation solaire à Draguignan. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "Draguignan", "Provence Verte", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/draguignan-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Draguignan"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    sixFoursLesPlages: {
      name: "Six-Fours-les-Plages",
      code: "83129",
      population: 33652,
      individualHouses: 4200,
      solarAdvantages: [
        "Exposition maritime idéale",
        "Ensoleillement optimal",
        "Performance maximale",
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
          author: "Philippe R.",
          rating: 5,
          comment: "Installation parfaite, très bien adaptée au climat marin.",
          date: "2023-12-08",
          location: "Le Brusc"
        },
        {
          author: "Martine L.",
          rating: 5,
          comment: "Excellent service et rendement optimal.",
          date: "2023-11-23",
          location: "Les Lônes"
        }
      ],
      seo: {
        title: "Six-Fours-les-Plages : Installation solaire en bord de mer",
        metaDescription: "Installation solaire à Six-Fours-les-Plages. Profitez d'une exposition maritime exceptionnelle.",
        keywords: ["installation solaire", "Six-Fours-les-Plages", "maritime", "énergie solaire"],
        images: [
          {
            url: "https://example.com/six-fours-les-plages-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Six-Fours-les-Plages"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintRaphael: {
      name: "Saint-Raphaël",
      code: "83118",
      population: 35042,
      individualHouses: 4300,
      solarAdvantages: [
        "Exposition Côte d'Azur",
        "Ensoleillement maximal",
        "Rentabilité attractive",
        "Solution durable"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements premium",
        "Suivi production",
        "Service expert"
      ],
      reviews: [
        {
          author: "Jean-Marc B.",
          rating: 5,
          comment: "Installation impeccable et rendement excellent.",
          date: "2023-12-07",
          location: "Valescure"
        },
        {
          author: "Christine D.",
          rating: 5,
          comment: "Service professionnel et résultats au rendez-vous.",
          date: "2023-11-22",
          location: "Boulouris"
        }
      ],
      seo: {
        title: "Saint-Raphaël : Installation solaire sur la Côte d'Azur",
        metaDescription: "Installation solaire à Saint-Raphaël. Optimisez votre production d'énergie solaire.",
        keywords: ["installation solaire", "Saint-Raphaël", "Côte d'Azur", "énergie renouvelable"],
        images: [
          {
            url: "https://example.com/saint-raphael-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Raphaël"
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
        title: "Brignoles : Installation solaire en Provence Verte",
        metaDescription: "Installation solaire à Brignoles. Profitez d'un ensoleillement optimal toute l'année.",
        keywords: ["installation solaire", "Brignoles", "Provence Verte", "énergie solaire"],
        images: [
          {
            url: "https://example.com/brignoles-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Brignoles"
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
    }
  }
};
