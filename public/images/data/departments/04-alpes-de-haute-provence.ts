import { Department } from "../types";
import { defaultSolarInstallation } from "../default-solar-installation";

export const alpesDeHauteProvence: Department = {
  name: "Alpes-de-Haute-Provence",
  code: "04",
  cities: {
    manosque: {
      name: "Manosque",
      code: "04100",
      population: 23550,
      slug: "manosque",
      description: `Située au cœur de la Provence, Manosque bénéficie d'un ensoleillement exceptionnel avec plus de 300 jours de soleil par an. Cette ville dynamique combine parfaitement le charme provençal avec une approche moderne de la transition énergétique.`,
      seoTitle: 'Installation Panneaux Solaires Manosque | Expert Photovoltaïque',
      seoDescription: 'Expert en installation de panneaux solaires à Manosque. Profitez d\'un service premium, certifié RGE, et d\'une garantie décennale. Devis gratuit et personnalisé.',
      seoKeywords: ['panneaux solaires Manosque', 'installation photovoltaïque Manosque', 'énergie solaire Provence', 'MyOhm Technologies Manosque'],
      advantages: {
        solar: [
          'Ensoleillement optimal avec plus de 300 jours de soleil par an',
          'Rendement énergétique supérieur grâce au climat méditerranéen',
          'Température idéale pour l\'efficacité des panneaux solaires'
        ],
      },
      solarAdvantages: [
        "Ensoleillement exceptionnel de 2750 heures/an",
        "Altitude de 420m optimale pour le rendement solaire",
        "Zone climatique H2d favorable aux installations solaires",
        "Subventions locales spécifiques à Manosque",
        "Réseau d'installateurs certifiés QualiPV"
      ],
      keyPoints: [
        "Installation solaireadaptée au Départementent des alpes de haute provence",
        "Expertise en toitures traditionnelles provençales",
        "Une pose de panneaux solaires adaptée au paysage local",
        "Maintenance préventive spécifique",
        "Garantie neige et vent fort"
      ],
      technicalSpecs: {
        averageYield: "1250 kWh/kWc/an",
        optimalAngle: "30-35°",
        snowLoad: "Zone C - 85kg/m²",
        windResistance: "Zone 3 - jusqu'à 170 km/h"
      },
      localIncentives: [
        "Aide régionale PACA pour le solaire",
        "Prime communale Manosque Énergie+",
        "Bonus altitude +400m",
        "Accompagnement ADEME renforcé"
      ],
      reviews: [
        {
          author: "Jean-Marc P.",
          rating: 5,
          date: "2023-11-15",
          comment: "Installation parfaitement adaptée aux conditions locales. L'équipe connaît très bien les spécificités de la région.",
          location: "Manosque Centre"
        },
        {
          author: "Sophie L.",
          rating: 4.5,
          date: "2023-10-20",
          comment: "Excellent suivi et production supérieure aux estimations grâce à l'altitude.",
          location: "Les Plantiers"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Manosque (04100) | Expert Solaire Altitude",
        metaDescription: "Expert en installation solaire à Manosque. Profitez d'un ensoleillement exceptionnel de 2750h/an et d'aides locales. Installation adaptée au climat alpin-méditerranéen. Devis gratuit.",
        keywords: [
          "panneaux solaires Manosque",
          "installation solaire 04100",
          "photovoltaïque Manosque",
          "énergie solaire altitude",
          "aide panneaux solaires Manosque",
          "installateur solaire Alpes-de-Haute-Provence"
        ],
        images: [
          {
            url: "/images/installations/04-manosque-installation.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire adaptée à l'altitude - Manosque"
          }
        ]
      },
      technical: [
        'Installation adaptée aux toitures traditionnelles provençales',
        'Systèmes de fixation spéciaux pour les tuiles canal',
        'Solutions d\'intégration esthétique préservant le cachet local'
      ],
      incentives: [
        'Aides régionales spécifiques à la région PACA',
        'Prime à l\'installation solaire de la ville de Manosque',
        'Éco-PTZ bonifié pour les travaux d\'amélioration énergétique'
      ],
      images: {
        city: '/images/cities/manosque.jpg',
        installation: '/images/installations/manosque-installation.jpg'
      },
      solarInstallation: defaultSolarInstallation
    },
    castellane: {
      name: "Castellane",
      code: "04039",
      population: 1500,
      solarAdvantages: [
        "Excellent taux d'ensoleillement annuel",
        "Position géographique favorable",
        "Économies substantielles sur la facture énergétique",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation rapide et professionnelle",
        "Garantie 25 ans sur les panneaux",
        "Suivi de production personnalisé",
        "Rentabilité assurée"
      ],
      reviews: [
        {
          author: "Sophie L.",
          rating: 5,
          comment: "Service impeccable et installation soignée. Les panneaux s'intègrent parfaitement au paysage de Castellane.",
          date: "2023-11-01",
          location: "Quartier des Lavandes"
        },
        {
          author: "Marc D.",
          rating: 5,
          comment: "Très professionnel, installation rapide et efficace. Je recommande !",
          date: "2023-12-01",
          location: "Centre Historique"
        }
      ],
      seo: {
        title: "Castellane : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Castellane. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Castellane", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/castellane-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Castellane"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    valensole: {
      name: "Valensole",
      code: "04230",
      population: 3300,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Terrain favorable aux installations solaires",
        "Réduction de l'empreinte carbone",
        "Autonomie énergétique accrue"
      ],
      keyPoints: [
        "Expertise technique reconnue",
        "Solutions personnalisées",
        "Accompagnement administratif complet",
        "Performance garantie"
      ],
      reviews: [
        {
          author: "Sophie L.",
          rating: 5,
          comment: "Service impeccable et installation soignée. Les panneaux s'intègrent parfaitement au paysage de Valensole.",
          date: "2023-11-01",
          location: "Quartier des Lavandes"
        },
        {
          author: "Pierre B.",
          rating: 5,
          comment: "Installation de qualité, équipe sérieuse et professionnelle.",
          date: "2023-10-01",
          location: "Route de Manosque"
        }
      ],
      seo: {
        title: "Valensole : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Valensole. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Valensole", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/valensole-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Valensole"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "saint-laurent-du-verdon": {
      name: "Saint-Laurent-du-Verdon",
      code: "04170",
      population: 100,
      solarAdvantages: [
        "Exposition solaire privilégiée",
        "Cadre naturel préservé",
        "Engagement écologique",
        "Rentabilité attractive"
      ],
      keyPoints: [
        "Installation sur-mesure",
        "Maintenance simplifiée",
        "Durabilité des équipements",
        "Service client réactif"
      ],
      reviews: [
        {
          author: "Jean-Marc B.",
          rating: 5,
          comment: "Excellent travail, équipe à l'écoute. Production solaire au-delà de nos attentes.",
          date: "2023-10-01",
          location: "Route du Verdon"
        }
      ],
      seo: {
        title: "Saint-Laurent-du-Verdon : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Saint-Laurent-du-Verdon. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Saint-Laurent-du-Verdon", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/saint-laurent-du-verdon-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Laurent-du-Verdon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "greoux-les-bains": {
      name: "Gréoux-les-Bains",
      code: "04119",
      population: 2600,
      solarAdvantages: [
        "Fort potentiel solaire",
        "Économies d'énergie significatives",
        "Solutions écologiques adaptées",
        "Valorisation immobilière"
      ],
      keyPoints: [
        "Installation professionnelle",
        "Suivi personnalisé",
        "Garanties étendues",
        "Rendement optimal"
      ],
      reviews: [
        {
          author: "Claire D.",
          rating: 5,
          comment: "Installation rapide et propre. Le suivi de production est très pratique.",
          date: "2023-12-01",
          location: "Avenue des Thermes"
        },
        {
          author: "Michel R.",
          rating: 5,
          comment: "Très satisfait du service et de la qualité de l'installation.",
          date: "2023-11-01",
          location: "Quartier Thermal"
        }
      ],
      seo: {
        title: "Gréoux-les-Bains : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Gréoux-les-Bains. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Gréoux-les-Bains", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/greoux-les-bains-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Gréoux-les-Bains"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "esparron-de-verdon": {
      name: "Esparron-de-Verdon",
      code: "04081",
      population: 450,
      solarAdvantages: [
        "Situation géographique avantageuse",
        "Fort potentiel solaire",
        "Réduction des coûts énergétiques",
        "Solution durable"
      ],
      keyPoints: [
        "Installation sur-mesure",
        "Équipements certifiés",
        "Suivi de production",
        "Service client dédié"
      ],
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          comment: "Très satisfait de l'installation. L'équipe a été professionnelle et efficace.",
          date: "2023-11-01",
          location: "Vue sur le Lac"
        },
        {
          author: "Isabelle K.",
          rating: 5,
          comment: "Installation parfaite, équipe à l'écoute et professionnelle.",
          date: "2023-12-01",
          location: "Bord du Lac"
        }
      ],
      seo: {
        title: "Esparron-de-Verdon : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Esparron-de-Verdon. Réduisez votre empreinte carbone et vos coûts énergétiques.",
        keywords: ["installation solaire", "Esparron-de-Verdon", "énergie renouvelable", "solaire"],
        images: [
          {
            url: "https://example.com/esparron-de-verdon-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Esparron-de-Verdon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "saint-etienne-les-orgues": {
      name: "Saint-Étienne-les-Orgues",
      code: "04178",
      population: 1200,
      solarAdvantages: [
        "Ensoleillement optimal",
        "Conditions climatiques favorables",
        "Économies durables",
        "Impact écologique positif"
      ],
      keyPoints: [
        "Installation rapide",
        "Équipements performants",
        "Suivi de production",
        "Service client réactif"
      ],
      reviews: [
        {
          author: "Antoine R.",
          rating: 5,
          comment: "Installation parfaite et service client au top. Je recommande vivement !",
          date: "2023-12-01",
          location: "Quartier des Orgues"
        },
        {
          author: "Sylvie M.",
          rating: 5,
          comment: "Très contente de mon installation, économies au rendez-vous.",
          date: "2023-11-01",
          location: "Route de Lure"
        }
      ],
      seo: {
        title: "Saint-Étienne-les-Orgues : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Saint-Étienne-les-Orgues. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Saint-Étienne-les-Orgues", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/saint-etienne-les-orgues-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Étienne-les-Orgues"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    banon: {
      name: "Banon",
      code: "04018",
      population: 1000,
      solarAdvantages: [
        "Excellent taux d'ensoleillement",
        "Orientation favorable",
        "Économies substantielles",
        "Démarche écologique"
      ],
      keyPoints: [
        "Installation professionnelle",
        "Matériel haute qualité",
        "Garanties constructeur",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Marie F.",
          rating: 5,
          comment: "Excellente expérience avec l'équipe. Installation soignée et résultats au rendez-vous.",
          date: "2023-11-01",
          location: "Vieille Ville"
        },
        {
          author: "Paul D.",
          rating: 5,
          comment: "Service impeccable, équipe professionnelle. Je recommande !",
          date: "2023-12-01",
          location: "Route de Forcalquier"
        }
      ],
      seo: {
        title: "Banon : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Banon. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Banon", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/banon-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Banon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    simianelarotonde: {
      name: "Simiane-la-Rotonde",
      code: "04209",
      population: 600,
      solarAdvantages: [
        "Excellent taux d'ensoleillement",
        "Cadre historique adapté",
        "Économies significatives",
        "Démarche écologique"
      ],
      keyPoints: [
        "Installation respectueuse du patrimoine",
        "Équipements performants",
        "Garantie décennale",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Philippe R.",
          rating: 5,
          comment: "Installation parfaitement intégrée au style architectural de la ville.",
          date: "2023-12-10",
          location: "Vieille ville"
        },
        {
          author: "Sophie D.",
          rating: 5,
          comment: "Service excellent et résultats au rendez-vous.",
          date: "2023-11-20",
          location: "Route de la Rotonde"
        }
      ],
      seo: {
        title: "Simiane-la-Rotonde : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Simiane-la-Rotonde. Alliance parfaite entre patrimoine historique et énergie moderne.",
        keywords: ["installation solaire", "Simiane-la-Rotonde", "énergie renouvelable", "patrimoine"],
        images: [
          {
            url: "https://example.com/simiane-la-rotonde-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Simiane-la-Rotonde"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintMichelObservatoire: {
      name: "Saint-Michel-l'Observatoire",
      code: "04192",
      population: 1200,
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement optimal",
        "Réduction empreinte carbone",
        "Rentabilité assurée"
      ],
      keyPoints: [
        "Installation discrète",
        "Respect des normes astronomiques",
        "Performance garantie",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Jean-Luc F.",
          rating: 5,
          comment: "Installation respectueuse du site astronomique. Excellent travail !",
          date: "2023-12-05",
          location: "Près de l'Observatoire"
        },
        {
          author: "Claire M.",
          rating: 5,
          comment: "Service professionnel et installation soignée.",
          date: "2023-11-25",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Saint-Michel-l'Observatoire : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Saint-Michel-l'Observatoire. Conjuguez astronomie et énergie solaire.",
        keywords: ["installation solaire", "Saint-Michel-l'Observatoire", "énergie renouvelable", "astronomie"],
        images: [
          {
            url: "https://example.com/saint-michel-observatoire-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Michel-l'Observatoire"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    oraison: {
      name: "Oraison",
      code: "04143",
      population: 5800,
      solarAdvantages: [
        "Climat méditerranéen favorable",
        "Fort potentiel solaire",
        "Économies importantes",
        "Valorisation immobilière"
      ],
      keyPoints: [
        "Installation rapide",
        "Équipements certifiés",
        "Suivi de production",
        "SAV réactif"
      ],
      reviews: [
        {
          author: "Michel B.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi. Production au top !",
          date: "2023-12-08",
          location: "Les Oliviers"
        },
        {
          author: "Anne S.",
          rating: 5,
          comment: "Équipe professionnelle et résultats conformes aux attentes.",
          date: "2023-11-28",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Oraison : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Oraison. Profitez du climat méditerranéen pour optimiser votre production d'énergie.",
        keywords: ["installation solaire", "Oraison", "énergie renouvelable", "méditerranée"],
        images: [
          {
            url: "https://example.com/oraison-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Oraison"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laBrillanne: {
      name: "La Brillanne",
      code: "04033",
      population: 900,
      solarAdvantages: [
        "Exposition solaire optimale",
        "Terrain favorable",
        "Rentabilité attractive",
        "Solution durable"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Matériel premium",
        "Garanties étendues",
        "Support technique"
      ],
      reviews: [
        {
          author: "Patrick L.",
          rating: 5,
          comment: "Installation parfaite et équipe très professionnelle.",
          date: "2023-12-12",
          location: "Route de Forcalquier"
        },
        {
          author: "Martine D.",
          rating: 5,
          comment: "Excellent service et bon suivi après installation.",
          date: "2023-11-30",
          location: "Les Jardins"
        }
      ],
      seo: {
        title: "La Brillanne : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à La Brillanne. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "La Brillanne", "énergie renouvelable", "économies"],
        images: [
          {
            url: "https://example.com/la-brillanne-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Brillanne"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    annot: {
      name: "Annot",
      code: "04008",
      population: 1100,
      solarAdvantages: [
        "Situation géographique favorable",
        "Ensoleillement important",
        "Économies substantielles",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation adaptée au terrain",
        "Équipements de qualité",
        "Maintenance préventive",
        "Assistance client"
      ],
      reviews: [
        {
          author: "François R.",
          rating: 5,
          comment: "Très satisfait de l'installation. L'équipe a su s'adapter au terrain.",
          date: "2023-12-07",
          location: "Vieux Village"
        },
        {
          author: "Catherine M.",
          rating: 5,
          comment: "Installation soignée et service client attentif.",
          date: "2023-11-27",
          location: "Les Grès"
        }
      ],
      seo: {
        title: "Annot : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Annot. Profitez d'une solution énergétique durable et économique.",
        keywords: ["installation solaire", "Annot", "énergie renouvelable", "montagne"],
        images: [
          {
            url: "https://example.com/annot-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Annot"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    chaudronNotreDame: {
      name: "Chaudon-Norante",
      code: "04058",
      population: 200,
      solarAdvantages: [
        "Exposition favorable",
        "Potentiel solaire élevé",
        "Réduction des coûts",
        "Solution durable"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements fiables",
        "Suivi personnalisé",
        "Service de proximité"
      ],
      reviews: [
        {
          author: "Robert D.",
          rating: 5,
          comment: "Installation parfaite malgré un terrain difficile. Bravo !",
          date: "2023-12-03",
          location: "Le Village"
        },
        {
          author: "Marie-Claire P.",
          rating: 5,
          comment: "Très contente du service et des résultats.",
          date: "2023-11-23",
          location: "Route de Digne"
        }
      ],
      seo: {
        title: "Chaudon-Norante : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Chaudon-Norante. Optez pour une énergie propre et économique.",
        keywords: ["installation solaire", "Chaudon-Norante", "énergie renouvelable", "rural"],
        images: [
          {
            url: "https://example.com/chaudon-norante-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Chaudon-Norante"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    barreme: {
      name: "Barrême",
      code: "04022",
      population: 800,
      solarAdvantages: [
        "Ensoleillement optimal",
        "Position géographique avantageuse",
        "Économies significatives",
        "Impact écologique positif"
      ],
      keyPoints: [
        "Installation professionnelle",
        "Matériel haute performance",
        "Suivi personnalisé",
        "Service après-vente réactif"
      ],
      reviews: [
        {
          author: "Bernard M.",
          rating: 5,
          comment: "Installation impeccable et équipe très professionnelle.",
          date: "2023-12-10",
          location: "Centre-ville"
        },
        {
          author: "Sylvie P.",
          rating: 5,
          comment: "Très satisfaite du service et des économies réalisées.",
          date: "2023-11-20",
          location: "Route de Digne"
        }
      ],
      seo: {
        title: "Barrême : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Barrême. Profitez d'un ensoleillement exceptionnel pour réduire vos factures d'énergie.",
        keywords: ["installation solaire", "Barrême", "énergie renouvelable", "panneaux solaires"],
        images: [
          {
            url: "https://example.com/barreme-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Barrême"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    digneLesBains: {
      name: "Digne-les-Bains",
      code: "04070",
      population: 16500,
      solarAdvantages: [
        "Climat favorable",
        "Fort potentiel solaire",
        "Réduction importante des coûts",
        "Démarche environnementale"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements premium",
        "Garantie décennale",
        "Support technique dédié"
      ],
      reviews: [
        {
          author: "Philippe D.",
          rating: 5,
          comment: "Excellent travail, équipe professionnelle et efficace.",
          date: "2023-12-12",
          location: "Les Thermes"
        },
        {
          author: "Marie-Claire L.",
          rating: 5,
          comment: "Installation parfaite et suivi de qualité.",
          date: "2023-11-25",
          location: "Centre historique"
        }
      ],
      seo: {
        title: "Digne-les-Bains : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Digne-les-Bains. Solutions adaptées pour une transition énergétique réussie.",
        keywords: ["installation solaire", "Digne-les-Bains", "énergie renouvelable", "thermes"],
        images: [
          {
            url: "https://example.com/digne-les-bains-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Digne-les-Bains"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    barcelonnette: {
      name: "Barcelonnette",
      code: "04019",
      population: 2800,
      solarAdvantages: [
        "Exposition montagnarde idéale",
        "Rendement optimisé en altitude",
        "Économies substantielles",
        "Performance énergétique"
      ],
      keyPoints: [
        "Installation adaptée au climat montagnard",
        "Matériel résistant",
        "Suivi régulier",
        "Maintenance préventive"
      ],
      reviews: [
        {
          author: "Jean-Paul M.",
          rating: 5,
          comment: "Installation parfaite malgré les conditions montagnardes.",
          date: "2023-12-08",
          location: "Centre-ville"
        },
        {
          author: "Hélène R.",
          rating: 5,
          comment: "Excellent service, équipe compétente et professionnelle.",
          date: "2023-11-18",
          location: "Les Alpes"
        }
      ],
      seo: {
        title: "Barcelonnette : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Barcelonnette. Profitez des avantages de l'altitude pour votre installation.",
        keywords: ["installation solaire", "Barcelonnette", "énergie renouvelable", "montagne"],
        images: [
          {
            url: "https://example.com/barcelonnette-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Barcelonnette"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    selonnet: {
      name: "Selonnet",
      code: "04205",
      population: 500,
      solarAdvantages: [
        "Position géographique favorable",
        "Ensoleillement de qualité",
        "Rentabilité assurée",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Équipements certifiés",
        "Suivi de production",
        "Assistance technique"
      ],
      reviews: [
        {
          author: "Laurent B.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi.",
          date: "2023-12-05",
          location: "Le Village"
        },
        {
          author: "Anne-Marie D.",
          rating: 5,
          comment: "Service professionnel et résultats au rendez-vous.",
          date: "2023-11-15",
          location: "Les Hauteurs"
        }
      ],
      seo: {
        title: "Selonnet : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Selonnet. Optimisez votre consommation énergétique en montagne.",
        keywords: ["installation solaire", "Selonnet", "énergie renouvelable", "montagne"],
        images: [
          {
            url: "https://example.com/selonnet-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Selonnet"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    sisteron: {
      name: "Sisteron",
      code: "04209",
      population: 7500,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Situation géographique idéale",
        "Économies importantes",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation rapide",
        "Matériel haut de gamme",
        "Garanties étendues",
        "Service client premium"
      ],
      reviews: [
        {
          author: "Michel R.",
          rating: 5,
          comment: "Installation parfaite, équipe professionnelle et efficace.",
          date: "2023-12-14",
          location: "La Citadelle"
        },
        {
          author: "Christine M.",
          rating: 5,
          comment: "Très satisfaite du service et des économies réalisées.",
          date: "2023-11-28",
          location: "Centre historique"
        }
      ],
      seo: {
        title: "Sisteron : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Sisteron. Profitez d'un ensoleillement optimal pour votre transition énergétique.",
        keywords: ["installation solaire", "Sisteron", "énergie renouvelable", "citadelle"],
        images: [
          {
            url: "https://example.com/sisteron-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Sisteron"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    villeneuve: {
      name: "Villeneuve",
      code: "04242",
      population: 4000,
      solarAdvantages: [
        "Exposition solaire optimale",
        "Terrain favorable",
        "Rentabilité attractive",
        "Démarche durable"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements performants",
        "Suivi personnalisé",
        "SAV réactif"
      ],
      reviews: [
        {
          author: "Pierre L.",
          rating: 5,
          comment: "Installation soignée et équipe très professionnelle.",
          date: "2023-12-11",
          location: "Centre-ville"
        },
        {
          author: "Sophie G.",
          rating: 5,
          comment: "Service impeccable et résultats conformes aux attentes.",
          date: "2023-11-22",
          location: "Les Jardins"
        }
      ],
      seo: {
        title: "Villeneuve : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Villeneuve. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "Villeneuve", "énergie renouvelable", "économies"],
        images: [
          {
            url: "https://example.com/villeneuve-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Villeneuve"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    pierrevert: {
      name: "Pierrevert",
      code: "04152",
      population: 3800,
      solarAdvantages: [
        "Climat méditerranéen favorable",
        "Ensoleillement optimal",
        "Économies significatives",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation professionnelle",
        "Matériel certifié",
        "Maintenance préventive",
        "Support technique"
      ],
      reviews: [
        {
          author: "François P.",
          rating: 5,
          comment: "Excellent travail, équipe sérieuse et efficace.",
          date: "2023-12-09",
          location: "Le Golf"
        },
        {
          author: "Marie-Anne B.",
          rating: 5,
          comment: "Installation rapide et soignée, très satisfaite.",
          date: "2023-11-19",
          location: "Les Vignes"
        }
      ],
      seo: {
        title: "Pierrevert : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Pierrevert. Profitez du climat méditerranéen pour optimiser votre production.",
        keywords: ["installation solaire", "Pierrevert", "énergie renouvelable", "golf"],
        images: [
          {
            url: "https://example.com/pierrevert-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Pierrevert"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    cereste: {
      name: "Céreste",
      code: "04045",
      population: 1300,
      solarAdvantages: [
        "Position géographique idéale",
        "Fort potentiel solaire",
        "Rentabilité optimale",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation adaptée",
        "Équipements fiables",
        "Suivi régulier",
        "Service client attentif"
      ],
      reviews: [
        {
          author: "Jacques R.",
          rating: 5,
          comment: "Installation parfaite et équipe très professionnelle.",
          date: "2023-12-13",
          location: "Vieux Village"
        },
        {
          author: "Isabelle M.",
          rating: 5,
          comment: "Très satisfaite du service et du suivi.",
          date: "2023-11-24",
          location: "Route de Apt"
        }
      ],
      seo: {
        title: "Céreste : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Céreste. Optez pour une énergie propre et économique.",
        keywords: ["installation solaire", "Céreste", "énergie renouvelable", "Luberon"],
        images: [
          {
            url: "https://example.com/cereste-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Céreste"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    volx: {
      name: "Volx",
      code: "04245",
      population: 3100,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Situation favorable",
        "Économies durables",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Matériel premium",
        "Suivi de production",
        "Assistance technique"
      ],
      reviews: [
        {
          author: "Robert L.",
          rating: 5,
          comment: "Service impeccable et installation soignée.",
          date: "2023-12-07",
          location: "Les Collines"
        },
        {
          author: "Martine P.",
          rating: 5,
          comment: "Très contente de l'installation et des économies réalisées.",
          date: "2023-11-17",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Volx : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Volx. Profitez d'un ensoleillement optimal pour réduire vos factures d'énergie.",
        keywords: ["installation solaire", "Volx", "énergie renouvelable", "économies"],
        images: [
          {
            url: "https://example.com/volx-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Volx"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    }
  }
};
