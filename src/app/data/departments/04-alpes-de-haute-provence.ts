import { Department } from "../types";
import { defaultSolarInstallation } from "../default-solar-installation";

export const alpesDeHauteProvence: Department = {
  name: "Alpes-de-Haute-Provence",
  code: "04",
  cities: {
    manosque: {
      name: "Manosque",
      code: "04100",
      population: 22801,
      sunshineHours: 2800,
      heroImage: {
        url: '/images/hero-section-manosque.jpeg',
        alt: 'Vue panoramique de Manosque, ville idéale pour l\'installation de panneaux solaires'
      },
      neighborhoods: [
        "Centre-ville",
        "Les Plantiers",
        "Saint-Lazare",
        "La Rochette",
        "Les Serrets"
      ],
      localStatistics: {
        averageElectricityConsumption: "6500 kWh/an",
        solarPotential: "1350 kWh/kWc/an",
        co2Savings: "1.2 tonnes/an/installation"
      },
      solarAdvantages: [
        "Ensoleillement exceptionnel avec plus de 2800 heures par an",
        "Climat méditerranéen idéal pour le solaire",
        "Forte politique locale en faveur des énergies renouvelables",
        "Zone géographique optimale pour la production solaire",
        "Territoire engagé dans la transition énergétique",
        "Subventions locales attractives",
        "Réseau d'installateurs certifiés"
      ],
      reviews: [
        {
          author: "Jean-Pierre M.",
          location: "Centre-ville",
          comment: "Installation impeccable par l'équipe de MyOhm. Production supérieure aux estimations après 6 mois d'utilisation. Je recommande !",
          rating: 5
        },
        {
          author: "Marie L.",
          location: "Les Plantiers",
          comment: "Très satisfaite du service et du suivi. L'équipe est professionnelle et à l'écoute. Installation réalisée dans les délais.",
          rating: 5
        },
        {
          author: "Robert D.",
          location: "Saint-Lazare",
          comment: "Excellent rapport qualité/prix. Les panneaux sont discrets et performants. Un vrai plus pour réduire ma facture d'électricité.",
          rating: 4
        }
      ],
      description: `Située au cœur de la Provence, Manosque bénéficie d'un ensoleillement exceptionnel avec plus de 300 jours de soleil par an. Cette ville dynamique de 22 801 habitants combine parfaitement le charme provençal avec une approche moderne de la transition énergétique. Avec une altitude moyenne de 420m et un climat méditerranéen privilégié, Manosque offre des conditions optimales pour l'installation de panneaux solaires, avec une attention particulière portée à l'intégration paysagère.`,
      seoTitle: 'Installation Panneaux Solaires Manosque (04100) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation de panneaux solaires à Manosque. Profitez d\'un ensoleillement exceptionnel de 2800h/an, d\'aides locales et d\'une expertise technique certifiée. Devis gratuit et personnalisé.',
      seoKeywords: [
        'panneaux solaires Manosque',
        'installation photovoltaïque 04100',
        'énergie solaire Manosque',
        'installateur solaire Alpes-de-Haute-Provence',
        'aide panneaux solaires Manosque',
        'devis solaire Manosque',
        'MyOhm Technologies Manosque'
      ],
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
      seo: {
        title: "Installation Panneaux Solaires Manosque (04112) | Expert Solaire Altitude",
        metaDescription: "Expert en installation solaire à Manosque. Profitez d'un ensoleillement exceptionnel de 2750h/an et d'aides locales. Installation adaptée au climat alpin-méditerranéen. Devis gratuit.",
        keywords: [
          "panneaux solaires Manosque",
          "installation solaire 04112",
          "photovoltaïque Manosque",
          "énergie solaire altitude",
          "aide panneaux solaires Manosque",
          "installateur solaire Alpes-de-Haute-Provence"
        ],
        images: [
          {
            url: "/images/hero-section-manosque.webp",
            width: 800,
            height: 600,
            alt: "Vue aérienne de Manosque - Ville idéale pour l'énergie solaire",
            title: "Manosque vue du ciel - Potentiel solaire exceptionnel"
          },
          {
            url: "/images/installation-de-panneau-solaire-a-manosque.webp",
            width: 800,
            height: 600,
            alt: "Installation de panneaux solaires sur toiture traditionnelle à Manosque",
            title: "Installation photovoltaïque résidentielle à Manosque"
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
        city: '/images/hero-section-manosque.webp',
        installation: '/images/installation-de-panneau-solaire-a-manosque.webp'
      },
      installation: {
        customerName: "Jean-Marc P.",
        city: "Manosque",
        monthlySavings: 120,
        systemSize: 6,
        panelsCount: 12,
        invertersCount: 1,
        testimonial: "Installation impeccable, équipe professionnelle et réactive. Production solaire au-delà de nos attentes.",
        rating: 5,
        imageUrl: "/images/installation-de-panneau-solaire-a-manosque.webp"
      },
      faq: [
        {
          question: "Quel est le potentiel solaire de Manosque ?",
          answer: "Manosque bénéficie d'un ensoleillement exceptionnel avec plus de 300 jours de soleil par an et 2750 heures d'ensoleillement annuel, ce qui en fait un lieu idéal pour l'installation de panneaux solaires.",
          keywords: ["ensoleillement Manosque", "potentiel solaire Manosque"],
          category: "technique"
        },
        {
          question: "Quelles sont les aides disponibles à Manosque pour l'installation de panneaux solaires ?",
          answer: "À Manosque, vous pouvez bénéficier de plusieurs aides : la prime communale Manosque Énergie+, les aides départementales des Alpes-de-Haute-Provence, ainsi que les dispositifs nationaux comme MaPrimeRénov' et la prime à l'autoconsommation.",
          keywords: ["aides solaires Manosque", "subventions panneaux solaires"],
          category: "aides"
        },
        {
          question: "Combien coûte une installation solaire à Manosque ?",
          answer: "Le coût d'une installation solaire à Manosque varie entre 8000€ et 15000€ pour une installation résidentielle standard, avant aides et subventions. Le retour sur investissement moyen est de 6 à 8 ans grâce à l'excellent ensoleillement local.",
          keywords: ["prix panneaux solaires Manosque", "coût installation solaire"],
          category: "general"
        },
        {
          question: "Quelles sont les spécificités techniques pour une installation à Manosque ?",
          answer: "À Manosque, les installations doivent tenir compte du climat méditerranéen et du Mistral. Nous recommandons des panneaux résistants aux vents forts et un angle d'inclinaison optimal de 30-35° pour maximiser la production tout au long de l'année.",
          keywords: ["installation solaire Manosque", "spécifications techniques"],
          category: "technique"
        }
      ],
      solarInstallation: defaultSolarInstallation
    },
    castellane: {
      name: "Castellane",
      code: "04039",
      population: 1500,
      neighborhoods: [
        "Centre Historique",
        "Le Roc",
        "Saint-Michel",
        "Les Angles",
        "Le Plan"
      ],
      localStatistics: {
        averageElectricityConsumption: "5800 kWh/an",
        solarPotential: "1320 kWh/kWc/an",
        co2Savings: "1.1 tonnes/an/installation"
      },
      solarAdvantages: [
        "Position géographique privilégiée à 724m d'altitude",
        "Ensoleillement optimal toute l'année",
        "Zone climatique favorable aux installations solaires",
        "Territoire labellisé Petites Cités de Caractère",
        "Aides spécifiques aux monuments historiques",
        "Expertise locale en intégration paysagère"
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
      description: `Castellane, cité historique de 1500 habitants perchée à 724 mètres d'altitude au cœur du Parc naturel régional du Verdon, bénéficie d'une situation géographique exceptionnelle pour l'énergie solaire. Cette ville dynamique allie préservation du patrimoine et transition énergétique. Son climat privilégié et son engagement dans le développement durable en font un territoire idéal pour l'installation de panneaux solaires, avec une attention particulière portée à l'intégration paysagère.`,
      seoTitle: 'Installation Panneaux Solaires Castellane (04120) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation de panneaux solaires à Castellane. Profitez d\'une situation géographique optimale et d\'une expertise en intégration paysagère. Devis gratuit personnalisé.',
      seoKeywords: [
        'panneaux solaires Castellane',
        'installation photovoltaïque 04120',
        'énergie solaire Verdon',
        'installation solaire patrimoine',
        'aide panneaux solaires Castellane',
        'devis solaire Castellane',
        'MyOhm Technologies Castellane'
      ],
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
      neighborhoods: [
        "Village",
        "Les Granges",
        "Le Plan",
        "Les Adrets"
      ],
      localStatistics: {
        averageElectricityConsumption: "4900 kWh/an",
        solarPotential: "1340 kWh/kWc/an",
        co2Savings: "1.0 tonnes/an/installation"
      },
      solarAdvantages: [
        "Exposition sud optimale",
        "Climat méditerranéen favorable",
        "Faible densité urbaine idéale pour les installations",
        "Zone rurale sans contraintes architecturales majeures",
        "Accompagnement personnalisé pour chaque projet",
        "Forte sensibilité écologique locale"
      ],
      description: `Saint-Laurent-du-Verdon, petit village authentique de 100 habitants, offre un cadre idéal pour l'installation de panneaux solaires. Sa situation privilégiée en Haute-Provence et sa faible densité urbaine permettent une optimisation maximale des installations solaires. Le village s'inscrit dans une démarche de développement durable, encourageant activement la transition énergétique de ses habitants.`,
      seoTitle: 'Installation Panneaux Solaires Saint-Laurent-du-Verdon (04500) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Saint-Laurent-du-Verdon. Bénéficiez d\'une exposition optimale et d\'un accompagnement personnalisé pour votre projet solaire. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Saint-Laurent-du-Verdon',
        'installation photovoltaïque 04500',
        'énergie solaire Verdon',
        'installation solaire rurale',
        'aide panneaux solaires Saint-Laurent',
        'devis solaire Saint-Laurent-du-Verdon',
        'MyOhm Technologies Verdon'
      ],
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
          comment: "Très satisfait de l'installation. L'équipe a su s'adapter au terrain.",
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
      neighborhoods: [
        "Centre Village",
        "Les Orgues",
        "Le Forest",
        "Les Tourettes",
        "Saint-Pons"
      ],
      localStatistics: {
        averageElectricityConsumption: "5200 kWh/an",
        solarPotential: "1310 kWh/kWc/an",
        co2Savings: "1.1 tonnes/an/installation"
      },
      solarAdvantages: [
        "Situation au pied de la montagne de Lure",
        "Ensoleillement exceptionnel",
        "Climat montagnard favorable",
        "Engagement communal fort dans les énergies renouvelables",
        "Accompagnement technique spécialisé",
        "Solutions adaptées au climat montagnard"
      ],
      description: `Saint-Étienne-les-Orgues, village de 1200 habitants niché au pied de la montagne de Lure, bénéficie d'un ensoleillement remarquable. Sa position géographique unique et son climat montagnard offrent des conditions idéales pour l'installation de panneaux solaires. La commune s'engage activement dans la transition énergétique, proposant des solutions adaptées aux spécificités de son territoire.`,
      seoTitle: 'Installation Panneaux Solaires Saint-Étienne-les-Orgues (04230) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Saint-Étienne-les-Orgues. Solutions adaptées au climat montagnard, accompagnement personnalisé. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Saint-Étienne-les-Orgues',
        'installation photovoltaïque 04230',
        'énergie solaire montagne de Lure',
        'installation solaire montagne',
        'aide panneaux solaires Saint-Étienne',
        'devis solaire Saint-Étienne-les-Orgues',
        'MyOhm Technologies montagne'
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
      neighborhoods: [
        "Village Historique",
        "La Rotonde",
        "Les Chalps",
        "Le Plan",
        "Les Crottes"
      ],
      localStatistics: {
        averageElectricityConsumption: "5100 kWh/an",
        solarPotential: "1330 kWh/kWc/an",
        co2Savings: "1.1 tonnes/an/installation"
      },
      solarAdvantages: [
        "Village perché avec exposition optimale",
        "Architecture médiévale adaptée au solaire",
        "Expertise en intégration patrimoniale",
        "Accompagnement spécialisé monuments historiques",
        "Solutions sur-mesure pour bâtiments anciens",
        "Forte sensibilité écologique"
      ],
      description: `Simiane-la-Rotonde, village médiéval de 600 habitants, allie patrimoine historique et innovation énergétique. Son architecture unique et sa position dominante offrent des opportunités exceptionnelles pour l'installation de panneaux solaires. La commune s'engage dans une transition énergétique respectueuse de son patrimoine, avec des solutions adaptées aux contraintes architecturales.`,
      seoTitle: 'Installation Panneaux Solaires Simiane-la-Rotonde (04150) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Simiane-la-Rotonde. Solutions adaptées au patrimoine historique, intégration architecturale soignée. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Simiane-la-Rotonde',
        'installation photovoltaïque 04150',
        'énergie solaire patrimoine',
        'installation solaire village historique',
        'aide panneaux solaires Simiane',
        'devis solaire Simiane-la-Rotonde',
        'MyOhm Technologies patrimoine'
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
      sunshineHours: 2700,
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
      neighborhoods: [
        "Centre Village",
        "Les Granges",
        "Le Plan d'Eau",
        "Les Jardins",
        "La Durance"
      ],
      localStatistics: {
        averageElectricityConsumption: "5300 kWh/an",
        solarPotential: "1345 kWh/kWc/an",
        co2Savings: "1.15 tonnes/an/installation"
      },
      solarAdvantages: [
        "Situation privilégiée dans la vallée de la Durance",
        "Ensoleillement optimal toute l'année",
        "Terrain plat facilitant l'installation",
        "Proximité des services techniques",
        "Accompagnement administratif renforcé",
        "Solutions adaptées aux maisons individuelles"
      ],
      description: `La Brillanne, commune de 900 habitants située dans la vallée de la Durance, bénéficie d'une exposition solaire exceptionnelle. Sa topographie favorable et son climat méditerranéen en font un lieu idéal pour l'installation de panneaux solaires. La commune encourage activement la transition énergétique avec des solutions adaptées à son territoire.`,
      seoTitle: 'Installation Panneaux Solaires La Brillanne (04700) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à La Brillanne. Profitez d\'une situation géographique optimale et d\'un accompagnement personnalisé. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires La Brillanne',
        'installation photovoltaïque 04700',
        'énergie solaire Durance',
        'installation solaire vallée',
        'aide panneaux solaires La Brillanne',
        'devis solaire La Brillanne',
        'MyOhm Technologies Durance'
      ],
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
      neighborhoods: [
        "Centre Village",
        "Les Clues",
        "Saint-Jean",
        "Le Plan",
        "Les Graves"
      ],
      localStatistics: {
        averageElectricityConsumption: "5100 kWh/an",
        solarPotential: "1315 kWh/kWc/an",
        co2Savings: "1.05 tonnes/an/installation"
      },
      solarAdvantages: [
        "Village de moyenne montagne bien exposé",
        "Climat favorable aux installations solaires",
        "Expertise en solutions adaptées à l'altitude",
        "Accompagnement technique personnalisé",
        "Support pour les démarches administratives",
        "Solutions résistantes aux conditions climatiques"
      ],
      description: `Barrême, village de 800 habitants niché dans la vallée de l'Asse, offre un cadre idéal pour l'énergie solaire. Son altitude moyenne et son exposition privilégiée permettent une production solaire optimale. La commune s'engage dans la transition énergétique avec des solutions adaptées aux spécificités de son territoire montagnard.`,
      seoTitle: 'Installation Panneaux Solaires Barrême (04330) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Barrême. Solutions adaptées au climat de moyenne montagne, accompagnement personnalisé. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Barrême',
        'installation photovoltaïque 04330',
        'énergie solaire moyenne montagne',
        'installation solaire Barrême',
        'aide panneaux solaires Barrême',
        'devis solaire Barrême',
        'MyOhm Technologies montagne'
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
      sunshineHours: 2700,
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
      neighborhoods: [
        "Chef-Lieu",
        "Chabanon",
        "Les Agneliers",
        "Le Forest",
        "Les Martels"
      ],
      localStatistics: {
        averageElectricityConsumption: "5000 kWh/an",
        solarPotential: "1300 kWh/kWc/an",
        co2Savings: "1.0 tonnes/an/installation"
      },
      solarAdvantages: [
        "Station de montagne bien exposée",
        "Expertise en installations haute altitude",
        "Solutions adaptées aux conditions hivernales",
        "Accompagnement technique spécialisé montagne",
        "Support pour les aides spécifiques altitude",
        "Technologies résistantes au climat alpin"
      ],
      description: `Selonnet, station de montagne de 500 habitants, combine tourisme hivernal et engagement environnemental. Son altitude et son exposition offrent un potentiel solaire remarquable malgré les conditions climatiques alpines. La commune propose des solutions adaptées aux contraintes de la haute montagne, avec une expertise particulière en installations résistantes au climat rigoureux.`,
      seoTitle: 'Installation Panneaux Solaires Selonnet (04140) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Selonnet. Solutions haute altitude, technologies adaptées aux conditions alpines. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Selonnet',
        'installation photovoltaïque 04140',
        'énergie solaire haute montagne',
        'installation solaire station ski',
        'aide panneaux solaires Selonnet',
        'devis solaire Selonnet',
        'MyOhm Technologies alpin'
      ],
      solarInstallation: defaultSolarInstallation
    },
    sisteron: {
      name: "Sisteron",
      code: "04209",
      population: 7500,
      sunshineHours: 2650,
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
