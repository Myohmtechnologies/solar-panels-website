import { ChargingStationCity } from '../types';

export const chargingStationCities: Record<string, ChargingStationCity> = {
  "marseille": {
    name: "Marseille",
    slug: "marseille",
    population: 863310,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 185,
      publicCount: 145,
      privateCount: 40,
      chargingPoints: {
        fast: 45,
        ultraFast: 15,
        normal: 125
      },
      operators: [
        { name: "IZIVIA", stationCount: 45 },
        { name: "TotalEnergies", stationCount: 35 },
        { name: "Tesla", stationCount: 12 }
      ]
    },
    keyLocations: [
      {
        name: "Vieux-Port",
        stationCount: 20,
        description: "Bornes situées autour du Vieux-Port, accès facile aux restaurants et commerces"
      },
      {
        name: "La Joliette",
        stationCount: 15,
        description: "Zone d'affaires avec bornes rapides"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h pendant la charge",
      "Réduction de 30% sur l'abonnement annuel pour les résidents",
      "Prime à l'installation de bornes pour les copropriétés"
    ],
    statistics: {
      evCount: 12000,
      stationDensity: 21.4,
      averageOccupancy: 75,
      averageWaitTime: 15
    },
    content: {
      mainDescription: "Marseille, première ville de la région PACA, dispose d'un réseau étendu de bornes de recharge couvrant aussi bien le centre-ville que les quartiers périphériques. La ville poursuit activement le développement de son infrastructure de recharge pour accompagner la transition vers la mobilité électrique.",
      advantages: [
        "Couverture complète de la ville",
        "Nombreuses bornes rapides",
        "Proximité des points d'intérêt"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Marseille ⚡| Installation, Prix, Devis",
      description: "Trouvez les 185 bornes de recharge pour voiture électrique à Marseille. ⚡ Installation à domicile | Devis gratuit | Prix compétitifs",
      keywords: [
        "devis borne de recharge Marseille",
        "prix borne de recharge voiture électrique Marseille",
        "installation borne de recharge Marseille",
        "entreprise borne de recharge Marseille",
        "installateur borne de recharge Marseille",
        "borne de recharge maison Marseille",
        "borne recharge voiture électrique prix Marseille",
        "installation wallbox Marseille",
        "devis installation borne électrique Marseille",
        "borne de recharge entreprise Marseille"
      ]
    }
  },
  "nice": {
    name: "Nice",
    slug: "nice",
    population: 342669,
    region: "PACA",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    chargingStations: {
      totalCount: 120,
      publicCount: 95,
      privateCount: 25,
      chargingPoints: {
        fast: 35,
        ultraFast: 10,
        normal: 75
      },
      operators: [
        { name: "IZIVIA", stationCount: 30 },
        { name: "TotalEnergies", stationCount: 25 },
        { name: "Tesla", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Promenade des Anglais",
        stationCount: 15,
        description: "Bornes le long de la Promenade, idéal pour les touristes"
      },
      {
        name: "Zone Arénas",
        stationCount: 12,
        description: "Quartier d'affaires avec bornes rapides"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant la charge",
      "Tarifs préférentiels pour les résidents",
      "Aide à l'installation de bornes privées"
    ],
    statistics: {
      evCount: 8000,
      stationDensity: 35.0,
      averageOccupancy: 70,
      averageWaitTime: 10
    },
    content: {
      mainDescription: "Nice, deuxième ville de PACA, offre un réseau de bornes de recharge moderne et efficace. La ville touristique mise sur l'accessibilité avec des bornes stratégiquement placées près des points d'intérêt majeurs.",
      advantages: [
        "Réseau dense en centre-ville",
        "Bornes rapides sur les axes principaux",
        "Couverture des zones touristiques"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Nice ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Nice. ⚡ Devis gratuit | Installation professionnelle | Service clé en main",
      keywords: [
        "devis borne de recharge Nice",
        "prix borne de recharge voiture électrique Nice",
        "installation borne de recharge Nice",
        "entreprise borne de recharge Nice",
        "installateur borne de recharge Nice",
        "borne de recharge maison Nice",
        "borne recharge voiture électrique prix Nice",
        "installation wallbox Nice",
        "devis installation borne électrique Nice",
        "borne de recharge entreprise Nice"
      ]
    }
  },
  "aix-en-provence": {
    name: "Aix-en-Provence",
    slug: "aix-en-provence",
    population: 143097,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 45,
      publicCount: 32,
      privateCount: 13,
      chargingPoints: {
        fast: 15,
        ultraFast: 5,
        normal: 25
      },
      operators: [
        { name: "IZIVIA", stationCount: 12 },
        { name: "TotalEnergies", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville - Rotonde",
        stationCount: 8,
        description: "Bornes situées au cœur d'Aix, proche des commerces"
      },
      {
        name: "Zone d'activité Les Milles",
        stationCount: 10,
        description: "Zone industrielle avec plusieurs points de charge rapide"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant la charge",
      "Réduction de 50% sur l'abonnement mensuel pour les résidents",
      "Aide municipale de 500€ pour l'installation d'une borne à domicile"
    ],
    statistics: {
      evCount: 3200,
      stationDensity: 31.4,
      averageOccupancy: 65,
      averageWaitTime: 12
    },
    content: {
      mainDescription: "Aix-en-Provence, ville historique et dynamique, s'engage pleinement dans la transition énergétique avec un réseau dense de bornes de recharge. Située stratégiquement entre Marseille et le Luberon, la ville offre une solution de recharge idéale pour les résidents et les visiteurs.",
      advantages: [
        "Position stratégique sur l'axe Marseille-Nice",
        "Réseau de bornes en constante expansion",
        "Couverture complète du centre-ville"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Aix-en-Provence ⚡| Devis & Installation",
      description: "Installation de bornes de recharge à Aix-en-Provence. ⚡ Devis personnalisé | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge Aix-en-Provence",
        "prix borne de recharge voiture électrique Aix",
        "installation borne de recharge Aix-en-Provence",
        "entreprise borne de recharge Aix",
        "installateur borne de recharge Aix-en-Provence",
        "borne de recharge maison Aix",
        "borne recharge voiture électrique prix Aix",
        "installation wallbox Aix-en-Provence",
        "devis installation borne électrique Aix",
        "borne de recharge entreprise Aix-en-Provence"
      ]
    }
  },
  "toulon": {
    name: "Toulon",
    slug: "toulon",
    population: 171953,
    region: "PACA",
    department: "Var",
    departmentCode: "83",
    chargingStations: {
      totalCount: 65,
      publicCount: 50,
      privateCount: 15,
      chargingPoints: {
        fast: 20,
        ultraFast: 8,
        normal: 37
      },
      operators: [
        { name: "IZIVIA", stationCount: 18 },
        { name: "TotalEnergies", stationCount: 15 }
      ]
    },
    keyLocations: [
      {
        name: "Port de Toulon",
        stationCount: 12,
        description: "Bornes près du port et du centre-ville"
      },
      {
        name: "Mayol",
        stationCount: 8,
        description: "Zone commerciale avec bornes rapides"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 3h pendant la charge",
      "Tarif préférentiel pour les résidents",
      "Prime écologique locale"
    ],
    statistics: {
      evCount: 4500,
      stationDensity: 37.8,
      averageOccupancy: 60,
      averageWaitTime: 8
    },
    content: {
      mainDescription: "Toulon, ville maritime majeure de PACA, développe activement son infrastructure de recharge électrique. Le réseau de bornes couvre stratégiquement le port, le centre-ville et les zones commerciales.",
      advantages: [
        "Couverture optimale du centre-ville",
        "Accès facile depuis l'autoroute",
        "Proximité des zones touristiques"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Toulon ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Toulon. ⚡ Devis gratuit | Installation professionnelle | Service clé en main",
      keywords: [
        "devis borne de recharge Toulon",
        "prix borne de recharge voiture électrique Toulon",
        "installation borne de recharge Toulon",
        "entreprise borne de recharge Toulon",
        "installateur borne de recharge Toulon",
        "borne de recharge maison Toulon",
        "borne recharge voiture électrique prix Toulon",
        "installation wallbox Toulon",
        "devis installation borne électrique Toulon",
        "borne de recharge entreprise Toulon"
      ]
    }
  },
  "avignon": {
    name: "Avignon",
    slug: "avignon",
    population: 91729,
    region: "PACA",
    department: "Vaucluse",
    departmentCode: "84",
    chargingStations: {
      totalCount: 35,
      publicCount: 28,
      privateCount: 7,
      chargingPoints: {
        fast: 12,
        ultraFast: 4,
        normal: 19
      },
      operators: [
        { name: "IZIVIA", stationCount: 10 },
        { name: "TotalEnergies", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Intra-muros",
        stationCount: 10,
        description: "Bornes au cœur de la cité des Papes"
      },
      {
        name: "Zone Courtine",
        stationCount: 8,
        description: "Zone d'activités avec bornes rapides"
      }
    ],
    localIncentives: [
      "Gratuité du stationnement pendant la charge",
      "Réduction pour les professionnels",
      "Aide à l'installation privée"
    ],
    statistics: {
      evCount: 2200,
      stationDensity: 38.2,
      averageOccupancy: 55,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "Avignon, ville historique du Vaucluse, propose un réseau de bornes de recharge adapté à sa configuration unique. Les installations respectent le patrimoine tout en offrant un service moderne aux utilisateurs.",
      advantages: [
        "Accès facilité au centre historique",
        "Bornes rapides en périphérie",
        "Compatibilité avec le patrimoine"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Avignon ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Avignon. ⚡ Devis personnalisé | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge Avignon",
        "prix borne de recharge voiture électrique Avignon",
        "installation borne de recharge Avignon",
        "entreprise borne de recharge Avignon",
        "installateur borne de recharge Avignon",
        "borne de recharge maison Avignon",
        "borne recharge voiture électrique prix Avignon",
        "installation wallbox Avignon",
        "devis installation borne électrique Avignon",
        "borne de recharge entreprise Avignon"
      ]
    }
  },
  "antibes": {
    name: "Antibes",
    slug: "antibes",
    population: 74982,
    region: "PACA",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    chargingStations: {
      totalCount: 30,
      publicCount: 25,
      privateCount: 5,
      chargingPoints: {
        fast: 8,
        ultraFast: 2,
        normal: 20
      },
      operators: [
        { name: "IZIVIA", stationCount: 12 },
        { name: "TotalEnergies", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Port Vauban",
        stationCount: 6,
        description: "Bornes près du plus grand port de plaisance d'Europe"
      },
      {
        name: "Vieil Antibes",
        stationCount: 4,
        description: "Bornes au cœur historique"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h pendant la charge",
      "Tarif résident avantageux",
      "Programme fidélité municipal"
    ],
    statistics: {
      evCount: 1800,
      stationDensity: 40.0,
      averageOccupancy: 50,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "Antibes, ville côtière des Alpes-Maritimes, développe son réseau de bornes de recharge en harmonie avec son patrimoine historique et maritime.",
      advantages: [
        "Proximité des zones touristiques",
        "Accès facile au port",
        "Couverture du centre historique"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Antibes ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Antibes. ⚡ Devis gratuit | Installation certifiée | Service premium",
      keywords: [
        "devis borne de recharge Antibes",
        "prix borne de recharge voiture électrique Antibes",
        "installation borne de recharge Antibes",
        "entreprise borne de recharge Antibes",
        "installateur borne de recharge Antibes",
        "borne de recharge maison Antibes",
        "borne recharge voiture électrique prix Antibes",
        "installation wallbox Antibes",
        "devis installation borne électrique Antibes",
        "borne de recharge entreprise Antibes"
      ]
    }
  },
  "cannes": {
    name: "Cannes",
    slug: "cannes",
    population: 74545,
    region: "PACA",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    chargingStations: {
      totalCount: 40,
      publicCount: 32,
      privateCount: 8,
      chargingPoints: {
        fast: 12,
        ultraFast: 4,
        normal: 24
      },
      operators: [
        { name: "IZIVIA", stationCount: 15 },
        { name: "TotalEnergies", stationCount: 12 }
      ]
    },
    keyLocations: [
      {
        name: "La Croisette",
        stationCount: 10,
        description: "Bornes le long de la célèbre promenade"
      },
      {
        name: "Palais des Festivals",
        stationCount: 8,
        description: "Stations près du centre des congrès"
      }
    ],
    localIncentives: [
      "Gratuité du stationnement pendant la charge",
      "Tarifs préférentiels événements",
      "Programme fidélité local"
    ],
    statistics: {
      evCount: 2000,
      stationDensity: 53.7,
      averageOccupancy: 65,
      averageWaitTime: 8
    },
    content: {
      mainDescription: "Cannes, ville de prestige de la Côte d'Azur, offre un réseau de bornes de recharge adapté à sa clientèle internationale et aux grands événements.",
      advantages: [
        "Couverture des zones touristiques",
        "Proximité des hôtels de luxe",
        "Accessibilité pendant les festivals"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Cannes ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Cannes. ⚡ Devis sur mesure | Installation premium | Service haut de gamme",
      keywords: [
        "devis borne de recharge Cannes",
        "prix borne de recharge voiture électrique Cannes",
        "installation borne de recharge Cannes",
        "entreprise borne de recharge Cannes",
        "installateur borne de recharge Cannes",
        "borne de recharge maison Cannes",
        "borne recharge voiture électrique prix Cannes",
        "installation wallbox Cannes",
        "devis installation borne électrique Cannes",
        "borne de recharge entreprise Cannes"
      ]
    }
  },
  "la-seyne-sur-mer": {
    name: "La Seyne-sur-Mer",
    slug: "la-seyne-sur-mer",
    population: 65374,
    region: "PACA",
    department: "Var",
    departmentCode: "83",
    chargingStations: {
      totalCount: 25,
      publicCount: 20,
      privateCount: 5,
      chargingPoints: {
        fast: 8,
        ultraFast: 2,
        normal: 15
      },
      operators: [
        { name: "IZIVIA", stationCount: 10 },
        { name: "TotalEnergies", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Port de plaisance",
        stationCount: 6,
        description: "Bornes près des activités nautiques"
      },
      {
        name: "Centre-ville",
        stationCount: 8,
        description: "Stations au cœur de la ville"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h",
      "Réduction résidents",
      "Aide à l'installation"
    ],
    statistics: {
      evCount: 1500,
      stationDensity: 38.2,
      averageOccupancy: 45,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "La Seyne-sur-Mer, ville portuaire du Var, développe son infrastructure de recharge pour accompagner sa transition écologique.",
      advantages: [
        "Proximité des zones maritimes",
        "Accès facile au centre-ville",
        "Réseau en expansion"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à La Seyne-sur-Mer ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à La Seyne-sur-Mer. ⚡ Devis gratuit | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge La Seyne-sur-Mer",
        "prix borne de recharge voiture électrique La Seyne",
        "installation borne de recharge La Seyne-sur-Mer",
        "entreprise borne de recharge La Seyne",
        "installateur borne de recharge La Seyne-sur-Mer",
        "borne de recharge maison La Seyne",
        "borne recharge voiture électrique prix La Seyne",
        "installation wallbox La Seyne-sur-Mer",
        "devis installation borne électrique La Seyne",
        "borne de recharge entreprise La Seyne-sur-Mer"
      ]
    }
  },
  "hyeres": {
    name: "Hyères",
    slug: "hyeres",
    population: 57635,
    region: "PACA",
    department: "Var",
    departmentCode: "83",
    chargingStations: {
      totalCount: 28,
      publicCount: 22,
      privateCount: 6,
      chargingPoints: {
        fast: 8,
        ultraFast: 2,
        normal: 18
      },
      operators: [
        { name: "IZIVIA", stationCount: 12 },
        { name: "TotalEnergies", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Port Saint-Pierre",
        stationCount: 6,
        description: "Bornes près du port de plaisance"
      },
      {
        name: "Centre historique",
        stationCount: 8,
        description: "Stations dans la vieille ville"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant la charge",
      "Tarif préférentiel résidents",
      "Aide à l'installation privée"
    ],
    statistics: {
      evCount: 1400,
      stationDensity: 48.6,
      averageOccupancy: 55,
      averageWaitTime: 6
    },
    content: {
      mainDescription: "Hyères, station balnéaire réputée du Var, propose un réseau de bornes de recharge adapté à sa configuration touristique et résidentielle.",
      advantages: [
        "Couverture des zones touristiques",
        "Accès facile aux plages",
        "Réseau en centre-ville"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Hyères ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Hyères. ⚡ Devis personnalisé | Installation professionnelle | Service de qualité",
      keywords: [
        "devis borne de recharge Hyères",
        "prix borne de recharge voiture électrique Hyères",
        "installation borne de recharge Hyères",
        "entreprise borne de recharge Hyères",
        "installateur borne de recharge Hyères",
        "borne de recharge maison Hyères",
        "borne recharge voiture électrique prix Hyères",
        "installation wallbox Hyères",
        "devis installation borne électrique Hyères",
        "borne de recharge entreprise Hyères"
      ]
    }
  },
  "frejus": {
    name: "Fréjus",
    slug: "frejus",
    population: 54023,
    region: "PACA",
    department: "Var",
    departmentCode: "83",
    chargingStations: {
      totalCount: 25,
      publicCount: 20,
      privateCount: 5,
      chargingPoints: {
        fast: 7,
        ultraFast: 3,
        normal: 15
      },
      operators: [
        { name: "IZIVIA", stationCount: 10 },
        { name: "TotalEnergies", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Port-Fréjus",
        stationCount: 8,
        description: "Bornes près du port de plaisance"
      },
      {
        name: "Centre historique",
        stationCount: 6,
        description: "Stations près des monuments romains"
      }
    ],
    localIncentives: [
      "Gratuité du stationnement 3h",
      "Tarif préférentiel résidents",
      "Programme fidélité local"
    ],
    statistics: {
      evCount: 1200,
      stationDensity: 46.3,
      averageOccupancy: 50,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "Fréjus, ville d'histoire et station balnéaire du Var, développe son réseau de bornes de recharge en respectant son patrimoine antique tout en répondant aux besoins modernes.",
      advantages: [
        "Proximité des sites historiques",
        "Accès aux plages",
        "Couverture du centre-ville"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Fréjus ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Fréjus. ⚡ Devis gratuit | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge Fréjus",
        "prix borne de recharge voiture électrique Fréjus",
        "installation borne de recharge Fréjus",
        "entreprise borne de recharge Fréjus",
        "installateur borne de recharge Fréjus",
        "borne de recharge maison Fréjus",
        "borne recharge voiture électrique prix Fréjus",
        "installation wallbox Fréjus",
        "devis installation borne électrique Fréjus",
        "borne de recharge entreprise Fréjus"
      ]
    }
  },
  "cagnes-sur-mer": {
    name: "Cagnes-sur-Mer",
    slug: "cagnes-sur-mer",
    population: 51947,
    region: "PACA",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    chargingStations: {
      totalCount: 22,
      publicCount: 18,
      privateCount: 4,
      chargingPoints: {
        fast: 6,
        ultraFast: 2,
        normal: 14
      },
      operators: [
        { name: "IZIVIA", stationCount: 8 },
        { name: "TotalEnergies", stationCount: 6 }
      ]
    },
    keyLocations: [
      {
        name: "Hippodrome",
        stationCount: 6,
        description: "Bornes près de l'hippodrome de la Côte d'Azur"
      },
      {
        name: "Cros-de-Cagnes",
        stationCount: 8,
        description: "Stations près du bord de mer"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h",
      "Réduction résidents",
      "Aide à l'installation"
    ],
    statistics: {
      evCount: 1100,
      stationDensity: 42.3,
      averageOccupancy: 45,
      averageWaitTime: 4
    },
    content: {
      mainDescription: "Cagnes-sur-Mer, ville balnéaire des Alpes-Maritimes, offre un réseau de bornes de recharge adapté à sa configuration côtière et résidentielle.",
      advantages: [
        "Proximité des plages",
        "Accès à l'hippodrome",
        "Couverture du Cros-de-Cagnes"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Cagnes-sur-Mer ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Cagnes-sur-Mer. ⚡ Devis personnalisé | Installation certifiée | Service premium",
      keywords: [
        "devis borne de recharge Cagnes-sur-Mer",
        "prix borne de recharge voiture électrique Cagnes",
        "installation borne de recharge Cagnes-sur-Mer",
        "entreprise borne de recharge Cagnes",
        "installateur borne de recharge Cagnes-sur-Mer",
        "borne de recharge maison Cagnes",
        "borne recharge voiture électrique prix Cagnes",
        "installation wallbox Cagnes-sur-Mer",
        "devis installation borne électrique Cagnes",
        "borne de recharge entreprise Cagnes-sur-Mer"
      ]
    }
  },
  "arles": {
    name: "Arles",
    slug: "arles",
    population: 52729,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 20,
      publicCount: 16,
      privateCount: 4,
      chargingPoints: {
        fast: 6,
        ultraFast: 2,
        normal: 12
      },
      operators: [
        { name: "IZIVIA", stationCount: 8 },
        { name: "TotalEnergies", stationCount: 6 }
      ]
    },
    keyLocations: [
      {
        name: "Centre historique",
        stationCount: 8,
        description: "Bornes près des monuments romains"
      },
      {
        name: "Zone commerciale Fourchon",
        stationCount: 6,
        description: "Stations dans la zone commerciale"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h",
      "Tarif préférentiel résidents",
      "Aide à l'installation"
    ],
    statistics: {
      evCount: 1000,
      stationDensity: 37.9,
      averageOccupancy: 40,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "Arles, ville d'art et d'histoire, développe son infrastructure de recharge en harmonie avec son patrimoine UNESCO tout en répondant aux besoins modernes de mobilité.",
      advantages: [
        "Proximité des sites historiques",
        "Accès facile aux commerces",
        "Réseau en expansion"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Arles ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Arles. ⚡ Devis gratuit | Installation professionnelle | Service de qualité",
      keywords: [
        "devis borne de recharge Arles",
        "prix borne de recharge voiture électrique Arles",
        "installation borne de recharge Arles",
        "entreprise borne de recharge Arles",
        "installateur borne de recharge Arles",
        "borne de recharge maison Arles",
        "borne recharge voiture électrique prix Arles",
        "installation wallbox Arles",
        "devis installation borne électrique Arles",
        "borne de recharge entreprise Arles"
      ]
    }
  },
  "grasse": {
    name: "Grasse",
    slug: "grasse",
    population: 50409,
    region: "PACA",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    chargingStations: {
      totalCount: 18,
      publicCount: 15,
      privateCount: 3,
      chargingPoints: {
        fast: 5,
        ultraFast: 2,
        normal: 11
      },
      operators: [
        { name: "IZIVIA", stationCount: 8 },
        { name: "TotalEnergies", stationCount: 5 }
      ]
    },
    keyLocations: [
      {
        name: "Centre historique",
        stationCount: 6,
        description: "Bornes dans la ville des parfums"
      },
      {
        name: "Zone industrielle",
        stationCount: 5,
        description: "Stations près des usines de parfum"
      }
    ],
    localIncentives: [
      "Gratuité du stationnement 2h",
      "Réduction résidents",
      "Programme local d'aide"
    ],
    statistics: {
      evCount: 900,
      stationDensity: 35.7,
      averageOccupancy: 45,
      averageWaitTime: 4
    },
    content: {
      mainDescription: "Grasse, capitale mondiale du parfum, propose un réseau de bornes de recharge adapté à sa topographie unique et à son attrait touristique.",
      advantages: [
        "Proximité des sites touristiques",
        "Accès aux usines de parfum",
        "Couverture du centre historique"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Grasse ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Grasse. ⚡ Devis personnalisé | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge Grasse",
        "prix borne de recharge voiture électrique Grasse",
        "installation borne de recharge Grasse",
        "entreprise borne de recharge Grasse",
        "installateur borne de recharge Grasse",
        "borne de recharge maison Grasse",
        "borne recharge voiture électrique prix Grasse",
        "installation wallbox Grasse",
        "devis installation borne électrique Grasse",
        "borne de recharge entreprise Grasse"
      ]
    }
  },
  "martigues": {
    name: "Martigues",
    slug: "martigues",
    population: 49318,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 25,
      publicCount: 20,
      privateCount: 5,
      chargingPoints: {
        fast: 8,
        ultraFast: 2,
        normal: 15
      },
      operators: [
        { name: "IZIVIA", stationCount: 10 },
        { name: "TotalEnergies", stationCount: 8 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville",
        stationCount: 8,
        description: "Bornes dans la Venise provençale"
      },
      {
        name: "Zone Industrielle",
        stationCount: 10,
        description: "Stations près du complexe pétrochimique"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 3h",
      "Tarif préférentiel résidents",
      "Aide à l'installation privée"
    ],
    statistics: {
      evCount: 1100,
      stationDensity: 50.7,
      averageOccupancy: 55,
      averageWaitTime: 6
    },
    content: {
      mainDescription: "Martigues, la Venise provençale, développe son réseau de bornes de recharge en tenant compte de sa double identité : ville touristique et industrielle.",
      advantages: [
        "Couverture du centre historique",
        "Proximité des zones industrielles",
        "Accès aux plages"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Martigues ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Martigues. ⚡ Devis gratuit | Installation certifiée | Service professionnel",
      keywords: [
        "devis borne de recharge Martigues",
        "prix borne de recharge voiture électrique Martigues",
        "installation borne de recharge Martigues",
        "entreprise borne de recharge Martigues",
        "installateur borne de recharge Martigues",
        "borne de recharge maison Martigues",
        "borne recharge voiture électrique prix Martigues",
        "installation wallbox Martigues",
        "devis installation borne électrique Martigues",
        "borne de recharge entreprise Martigues"
      ]
    }
  },
  "aubagne": {
    name: "Aubagne",
    slug: "aubagne",
    population: 46124,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 20,
      publicCount: 16,
      privateCount: 4,
      chargingPoints: {
        fast: 6,
        ultraFast: 2,
        normal: 12
      },
      operators: [
        { name: "IZIVIA", stationCount: 8 },
        { name: "TotalEnergies", stationCount: 6 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville",
        stationCount: 8,
        description: "Bornes près du cours Foch"
      },
      {
        name: "Zone commerciale",
        stationCount: 6,
        description: "Stations près des centres commerciaux"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h",
      "Tarif préférentiel résidents",
      "Aide à l'installation"
    ],
    statistics: {
      evCount: 950,
      stationDensity: 43.4,
      averageOccupancy: 50,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "Aubagne, ville natale de Marcel Pagnol, développe son infrastructure de recharge en tenant compte de sa position stratégique entre Marseille et la Sainte-Baume.",
      advantages: [
        "Proximité de Marseille",
        "Accès aux zones commerciales",
        "Réseau en développement"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Aubagne ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Aubagne. ⚡ Devis personnalisé | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge Aubagne",
        "prix borne de recharge voiture électrique Aubagne",
        "installation borne de recharge Aubagne",
        "entreprise borne de recharge Aubagne",
        "installateur borne de recharge Aubagne",
        "borne de recharge maison Aubagne",
        "borne recharge voiture électrique prix Aubagne",
        "installation wallbox Aubagne",
        "devis installation borne électrique Aubagne",
        "borne de recharge entreprise Aubagne"
      ]
    }
  },
  "gap": {
    name: "Gap",
    slug: "gap",
    population: 40225,
    region: "PACA",
    department: "Hautes-Alpes",
    departmentCode: "05",
    chargingStations: {
      totalCount: 15,
      publicCount: 12,
      privateCount: 3,
      chargingPoints: {
        fast: 5,
        ultraFast: 2,
        normal: 8
      },
      operators: [
        { name: "IZIVIA", stationCount: 6 },
        { name: "TotalEnergies", stationCount: 4 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville",
        stationCount: 6,
        description: "Bornes dans le cœur de Gap"
      },
      {
        name: "Zone Tokoro",
        stationCount: 4,
        description: "Stations près de la zone commerciale"
      }
    ],
    localIncentives: [
      "Gratuité du stationnement 2h",
      "Réduction montagnards",
      "Aide à l'installation altitude"
    ],
    statistics: {
      evCount: 800,
      stationDensity: 37.3,
      averageOccupancy: 45,
      averageWaitTime: 4
    },
    content: {
      mainDescription: "Gap, préfecture des Hautes-Alpes, propose un réseau de bornes de recharge adapté à sa situation de ville de montagne et à son climat particulier.",
      advantages: [
        "Adaptation climat montagnard",
        "Proximité stations de ski",
        "Couverture centre-ville"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Gap ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Gap. ⚡ Devis gratuit | Installation adaptée montagne | Service professionnel",
      keywords: [
        "devis borne de recharge Gap",
        "prix borne de recharge voiture électrique Gap",
        "installation borne de recharge Gap",
        "entreprise borne de recharge Gap",
        "installateur borne de recharge Gap",
        "borne de recharge maison Gap",
        "borne recharge voiture électrique prix Gap",
        "installation wallbox Gap",
        "devis installation borne électrique Gap",
        "borne de recharge entreprise Gap"
      ]
    }
  },
  "salon-de-provence": {
    name: "Salon-de-Provence",
    slug: "salon-de-provence",
    population: 45528,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 18,
      publicCount: 15,
      privateCount: 3,
      chargingPoints: {
        fast: 6,
        ultraFast: 2,
        normal: 10
      },
      operators: [
        { name: "IZIVIA", stationCount: 8 },
        { name: "TotalEnergies", stationCount: 5 }
      ]
    },
    keyLocations: [
      {
        name: "Centre historique",
        stationCount: 6,
        description: "Bornes près du château de l'Empéri"
      },
      {
        name: "Zone commerciale",
        stationCount: 8,
        description: "Stations dans les zones d'activité"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h30",
      "Tarif préférentiel résidents",
      "Programme local d'aide"
    ],
    statistics: {
      evCount: 900,
      stationDensity: 39.5,
      averageOccupancy: 48,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "Salon-de-Provence, ville historique des Bouches-du-Rhône, développe son réseau de bornes de recharge en harmonie avec son patrimoine et son dynamisme économique.",
      advantages: [
        "Proximité autoroute A7",
        "Accès centre historique",
        "Couverture zones commerciales"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Salon-de-Provence ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Salon-de-Provence. ⚡ Devis personnalisé | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge Salon-de-Provence",
        "prix borne de recharge voiture électrique Salon",
        "installation borne de recharge Salon-de-Provence",
        "entreprise borne de recharge Salon",
        "installateur borne de recharge Salon-de-Provence",
        "borne de recharge maison Salon",
        "borne recharge voiture électrique prix Salon",
        "installation wallbox Salon-de-Provence",
        "devis installation borne électrique Salon",
        "borne de recharge entreprise Salon-de-Provence"
      ]
    }
  },
  "istres": {
    name: "Istres",
    slug: "istres",
    population: 43463,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 16,
      publicCount: 13,
      privateCount: 3,
      chargingPoints: {
        fast: 5,
        ultraFast: 2,
        normal: 9
      },
      operators: [
        { name: "IZIVIA", stationCount: 7 },
        { name: "TotalEnergies", stationCount: 5 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville",
        stationCount: 6,
        description: "Bornes près de l'étang de l'Olivier"
      },
      {
        name: "Zone Industrielle",
        stationCount: 5,
        description: "Stations près du pôle aéronautique"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h",
      "Réduction résidents",
      "Aide à l'installation"
    ],
    statistics: {
      evCount: 850,
      stationDensity: 36.8,
      averageOccupancy: 42,
      averageWaitTime: 4
    },
    content: {
      mainDescription: "Istres, ville dynamique des Bouches-du-Rhône, développe son réseau de bornes de recharge en tenant compte de sa double identité : ville résidentielle et pôle industriel aéronautique.",
      advantages: [
        "Proximité étang de Berre",
        "Accès zones industrielles",
        "Couverture centre-ville"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Istres ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Istres. ⚡ Devis gratuit | Installation professionnelle | Service de qualité",
      keywords: [
        "devis borne de recharge Istres",
        "prix borne de recharge voiture électrique Istres",
        "installation borne de recharge Istres",
        "entreprise borne de recharge Istres",
        "installateur borne de recharge Istres",
        "borne de recharge maison Istres",
        "borne recharge voiture électrique prix Istres",
        "installation wallbox Istres",
        "devis installation borne électrique Istres",
        "borne de recharge entreprise Istres"
      ]
    }
  },
  "vitrolles": {
    name: "Vitrolles",
    slug: "vitrolles",
    population: 35000,
    region: "PACA",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    chargingStations: {
      totalCount: 10,
      publicCount: 8,
      privateCount: 2,
      chargingPoints: {
        fast: 3,
        ultraFast: 1,
        normal: 6
      },
      operators: [
        { name: "IZIVIA", stationCount: 4 },
        { name: "TotalEnergies", stationCount: 3 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville",
        stationCount: 4,
        description: "Bornes près de la zone commerciale"
      },
      {
        name: "Zone industrielle",
        stationCount: 3,
        description: "Stations près des usines de parfum"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h",
      "Réduction résidents",
      "Aide à l'installation"
    ],
    statistics: {
      evCount: 850,
      stationDensity: 28.6,
      averageOccupancy: 45,
      averageWaitTime: 4
    },
    content: {
      mainDescription: "Vitrolles, ville dynamique des Bouches-du-Rhône, développe son réseau de bornes de recharge en tenant compte de sa double identité : ville résidentielle et pôle commercial.",
      advantages: [
        "Proximité autoroute",
        "Accès zones commerciales",
        "Couverture centre-ville"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Vitrolles ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Vitrolles. ⚡ Devis personnalisé | Installation rapide | Service professionnel",
      keywords: [
        "devis borne de recharge Vitrolles",
        "prix borne de recharge voiture électrique Vitrolles",
        "installation borne de recharge Vitrolles",
        "entreprise borne de recharge Vitrolles",
        "installateur borne de recharge Vitrolles",
        "borne de recharge maison Vitrolles",
        "borne recharge voiture électrique prix Vitrolles",
        "borne recharge Vitrolles",
        "recharge voiture électrique Vitrolles",
        "station recharge centre Vitrolles",
        "borne rapide Vitrolles"
      ]
    }
  },
  "manosque": {
    name: "Manosque",
    slug: "manosque",
    population: 22801,
    region: "PACA",
    department: "Alpes-de-Haute-Provence",
    departmentCode: "04",
    chargingStations: {
      totalCount: 8,
      publicCount: 6,
      privateCount: 2,
      chargingPoints: {
        fast: 2,
        ultraFast: 1,
        normal: 5
      },
      operators: [
        { name: "IZIVIA", stationCount: 3 },
        { name: "TotalEnergies", stationCount: 2 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville",
        stationCount: 3,
        description: "Bornes situées près des commerces du centre historique"
      },
      {
        name: "Zone commerciale",
        stationCount: 2,
        description: "Stations accessibles près des grandes surfaces"
      }
    ],
    localIncentives: [
      "Stationnement gratuit 2h pendant la charge",
      "Réduction de 20% sur l'abonnement annuel pour les résidents",
      "Aide à l'installation pour les particuliers"
    ],
    statistics: {
      evCount: 450,
      stationDensity: 35.1,
      averageOccupancy: 40,
      averageWaitTime: 5
    },
    content: {
      mainDescription: "Manosque, principale ville des Alpes-de-Haute-Provence, développe progressivement son infrastructure de recharge pour véhicules électriques. Située au cœur de la Provence, la ville combine patrimoine historique et modernité avec un réseau de bornes stratégiquement placées pour faciliter la mobilité électrique des résidents et visiteurs.",
      advantages: [
        "Couverture du centre historique",
        "Bornes rapides sur les axes principaux",
        "Accessibilité pour les touristes"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Manosque ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Manosque. ⚡ Devis personnalisé | Installation rapide | Service professionnel dans les Alpes-de-Haute-Provence",
      keywords: [
        "devis borne de recharge Manosque",
        "prix borne de recharge voiture électrique Manosque",
        "installation borne de recharge Manosque",
        "entreprise borne de recharge Manosque",
        "installateur borne de recharge Manosque",
        "borne de recharge maison Manosque",
        "borne recharge voiture électrique prix Manosque",
        "installation wallbox Manosque",
        "devis installation borne électrique Manosque",
        "borne de recharge entreprise Manosque",
        "recharge voiture électrique Alpes-de-Haute-Provence"
      ]
    }
  },
  "sisteron": {
    name: "Sisteron",
    slug: "sisteron",
    population: 7672,
    region: "PACA",
    department: "Alpes-de-Haute-Provence",
    departmentCode: "04",
    chargingStations: {
      totalCount: 5,
      publicCount: 4,
      privateCount: 1,
      chargingPoints: {
        fast: 1,
        ultraFast: 0,
        normal: 4
      },
      operators: [
        { name: "IZIVIA", stationCount: 2 },
        { name: "TotalEnergies", stationCount: 1 }
      ]
    },
    keyLocations: [
      {
        name: "Centre historique",
        stationCount: 2,
        description: "Bornes situées près de la Citadelle et du centre-ville"
      },
      {
        name: "Zone commerciale",
        stationCount: 1,
        description: "Station accessible près des commerces"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant la charge",
      "Tarifs préférentiels pour les résidents",
      "Programme d'aide à l'installation"
    ],
    statistics: {
      evCount: 180,
      stationDensity: 65.2,
      averageOccupancy: 30,
      averageWaitTime: 3
    },
    content: {
      mainDescription: "Sisteron, ville historique des Alpes-de-Haute-Provence située sur l'axe Marseille-Grenoble, développe son réseau de bornes de recharge pour répondre aux besoins des habitants et des nombreux touristes. Sa position stratégique en fait un point de recharge important pour les trajets longue distance entre la Méditerranée et les Alpes.",
      advantages: [
        "Position stratégique sur l'axe Marseille-Grenoble",
        "Bornes accessibles près des sites touristiques",
        "Facilité d'accès depuis l'autoroute A51"
      ]
    },
    seo: {
      title: "Bornes de Recharge Voiture Électrique à Sisteron ⚡| Installation & Devis",
      description: "Installation de bornes de recharge à Sisteron. ⚡ Devis personnalisé | Installation rapide | Service professionnel pour particuliers et professionnels dans les Alpes-de-Haute-Provence",
      keywords: [
        "devis borne de recharge Sisteron",
        "prix borne de recharge voiture électrique Sisteron",
        "installation borne de recharge Sisteron",
        "entreprise borne de recharge Sisteron",
        "installateur borne de recharge Sisteron",
        "borne de recharge maison Sisteron",
        "borne recharge voiture électrique prix Sisteron",
        "installation wallbox Sisteron",
        "devis installation borne électrique Sisteron",
        "borne de recharge entreprise Sisteron",
        "recharge voiture électrique Alpes-de-Haute-Provence"
      ]
    }
  },
  "brignoles": {
    name: "Brignoles",
    slug: "brignoles",
    population: 17429,
    region: "PACA",
    department: "Var",
    departmentCode: "83",
    chargingStations: {
      totalCount: 14,
      publicCount: 11,
      privateCount: 3,
      chargingPoints: {
        fast: 4,
        ultraFast: 1,
        normal: 9
      },
      operators: [
        { name: "IZIVIA", stationCount: 5 },
        { name: "TotalEnergies", stationCount: 3 },
        { name: "Enedis", stationCount: 2 },
        { name: "EDF", stationCount: 1 }
      ]
    },
    keyLocations: [
      {
        name: "Centre-ville",
        stationCount: 6,
        description: "Bornes situées dans le centre historique, à proximité des commerces et restaurants"
      },
      {
        name: "Zone d'activités",
        stationCount: 5,
        description: "Bornes accessibles 24h/24 dans la zone commerciale"
      },
      {
        name: "Parking municipal",
        stationCount: 3,
        description: "Bornes gratuites pendant les 2 premières heures de charge"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant 2h lors de la recharge",
      "Tarifs préférentiels pour les résidents",
      "Subvention municipale pour l'installation de bornes privées"
    ],
    statistics: {
      evCount: 780,
      stationDensity: 8.0,
      averageOccupancy: 60,
      averageWaitTime: 10
    },
    content: {
      mainDescription: "Brignoles, ville dynamique du Var, développe activement son infrastructure de recharge pour véhicules électriques. Située au cœur de la Provence Verte, la ville offre un réseau de bornes stratégiquement placées pour faciliter la mobilité électrique des résidents et visiteurs.",
      advantages: [
        "Position centrale dans le Var, idéale pour les trajets régionaux",
        "Réseau en expansion avec l'ajout régulier de nouvelles bornes",
        "Bornes situées à proximité des principaux points d'intérêt"
      ]
    },
    seo: {
      title: "Bornes de recharge pour véhicules électriques à Brignoles | Carte et disponibilité",
      description: "Localisez toutes les bornes de recharge pour votre véhicule électrique à Brignoles. Informations en temps réel, puissance disponible et tarifs.",
      keywords: ["borne recharge Brignoles", "véhicule électrique Var", "station recharge Provence Verte", "recharge VE Brignoles"]
    }
  },
  "saint-maximin": {
    name: "Saint-Maximin-la-Sainte-Baume",
    slug: "saint-maximin",
    population: 16000,
    region: "PACA",
    department: "Var",
    departmentCode: "83",
    chargingStations: {
      totalCount: 12,
      publicCount: 9,
      privateCount: 3,
      chargingPoints: {
        fast: 3,
        ultraFast: 1,
        normal: 8
      },
      operators: [
        { name: "IZIVIA", stationCount: 4 },
        { name: "TotalEnergies", stationCount: 2 },
        { name: "Enedis", stationCount: 2 },
        { name: "Freshmile", stationCount: 1 }
      ]
    },
    keyLocations: [
      {
        name: "Basilique Sainte-Marie-Madeleine",
        stationCount: 4,
        description: "Bornes situées à proximité du centre historique et de la basilique"
      },
      {
        name: "Zone commerciale",
        stationCount: 5,
        description: "Bornes rapides accessibles pendant les heures d'ouverture des commerces"
      },
      {
        name: "Aire d'autoroute A8",
        stationCount: 3,
        description: "Bornes ultrarapides pour les voyageurs sur l'axe Aix-Nice"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant la recharge",
      "Réduction sur l'abonnement annuel pour les résidents",
      "Accès prioritaire aux zones à faibles émissions"
    ],
    statistics: {
      evCount: 650,
      stationDensity: 7.5,
      averageOccupancy: 55,
      averageWaitTime: 8
    },
    content: {
      mainDescription: "Saint-Maximin-la-Sainte-Baume, ville historique du Var, offre un réseau de bornes de recharge stratégiquement placées pour les conducteurs de véhicules électriques. Sa position sur l'axe Aix-Nice en fait un point de recharge essentiel pour les trajets longue distance.",
      advantages: [
        "Emplacement stratégique sur l'axe Aix-Nice",
        "Bornes à proximité des sites touristiques majeurs",
        "Infrastructure en développement constant"
      ]
    },
    seo: {
      title: "Bornes de recharge VE à Saint-Maximin-la-Sainte-Baume | Guide complet",
      description: "Découvrez toutes les bornes de recharge pour véhicules électriques à Saint-Maximin. Carte interactive, disponibilité et conseils pratiques.",
      keywords: ["borne recharge Saint-Maximin", "véhicule électrique Var", "station recharge Sainte-Baume", "recharge VE Saint-Maximin"]
    }
  },
  "le-pontet": {
    name: "Le Pontet",
    slug: "le-pontet",
    population: 17200,
    region: "PACA",
    department: "Vaucluse",
    departmentCode: "84",
    chargingStations: {
      totalCount: 16,
      publicCount: 13,
      privateCount: 3,
      chargingPoints: {
        fast: 5,
        ultraFast: 2,
        normal: 9
      },
      operators: [
        { name: "IZIVIA", stationCount: 6 },
        { name: "TotalEnergies", stationCount: 4 },
        { name: "Enedis", stationCount: 2 },
        { name: "Freshmile", stationCount: 1 }
      ]
    },
    keyLocations: [
      {
        name: "Centre commercial Avignon Nord",
        stationCount: 8,
        description: "Bornes rapides dans la plus grande zone commerciale de la région"
      },
      {
        name: "Centre-ville",
        stationCount: 4,
        description: "Bornes situées à proximité des services municipaux"
      },
      {
        name: "Zone d'activités",
        stationCount: 4,
        description: "Bornes accessibles 24h/24 pour les professionnels et visiteurs"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant la recharge",
      "Tarifs préférentiels dans les parkings municipaux",
      "Subvention pour l'installation de bornes en copropriété"
    ],
    statistics: {
      evCount: 820,
      stationDensity: 9.3,
      averageOccupancy: 70,
      averageWaitTime: 12
    },
    content: {
      mainDescription: "Le Pontet, commune limitrophe d'Avignon, dispose d'un réseau de bornes de recharge en pleine expansion. Sa position stratégique et ses zones commerciales importantes en font un point de recharge privilégié pour les habitants et visiteurs de l'agglomération avignonnaise.",
      advantages: [
        "Proximité immédiate d'Avignon",
        "Concentration de bornes dans les zones commerciales très fréquentées",
        "Accessibilité depuis les grands axes routiers"
      ]
    },
    seo: {
      title: "Bornes de recharge pour véhicules électriques au Pontet | Carte et infos",
      description: "Trouvez facilement les bornes de recharge pour votre véhicule électrique au Pontet. Carte interactive, disponibilité en temps réel et conseils pratiques.",
      keywords: ["borne recharge Le Pontet", "véhicule électrique Vaucluse", "station recharge Avignon Nord", "recharge VE Le Pontet"]
    }
  },
  "carpentras": {
    name: "Carpentras",
    slug: "carpentras",
    population: 29891,
    region: "PACA",
    department: "Vaucluse",
    departmentCode: "84",
    chargingStations: {
      totalCount: 18,
      publicCount: 14,
      privateCount: 4,
      chargingPoints: {
        fast: 6,
        ultraFast: 2,
        normal: 10
      },
      operators: [
        { name: "IZIVIA", stationCount: 7 },
        { name: "TotalEnergies", stationCount: 4 },
        { name: "Enedis", stationCount: 3 },
        { name: "EDF", stationCount: 2 },
        { name: "Tesla", stationCount: 2 }
      ]
    },
    keyLocations: [
      {
        name: "Centre historique",
        stationCount: 6,
        description: "Bornes situées à proximité de la cathédrale et des principaux monuments"
      },
      {
        name: "Zone commerciale",
        stationCount: 8,
        description: "Bornes rapides accessibles pendant les heures d'ouverture des commerces"
      },
      {
        name: "Gare SNCF",
        stationCount: 4,
        description: "Bornes pour faciliter l'intermodalité train-voiture électrique"
      }
    ],
    localIncentives: [
      "Stationnement gratuit pendant 3h lors de la recharge",
      "Tarifs préférentiels pour les résidents",
      "Aide municipale pour l'installation de bornes privées",
      "Accès prioritaire au centre-ville"
    ],
    statistics: {
      evCount: 1200,
      stationDensity: 6.0,
      averageOccupancy: 65,
      averageWaitTime: 10
    },
    content: {
      mainDescription: "Carpentras, ville historique du Vaucluse au pied du Mont Ventoux, développe activement son réseau de bornes de recharge pour véhicules électriques. Capitale du Comtat Venaissin, elle offre aux conducteurs électriques un maillage de points de recharge couvrant aussi bien le centre historique que les zones commerciales périphériques.",
      advantages: [
        "Position centrale dans le Vaucluse",
        "Réseau en expansion constante",
        "Bornes stratégiquement placées près des sites touristiques et commerciaux",
        "Point de départ idéal pour explorer le Mont Ventoux en véhicule électrique"
      ]
    },
    seo: {
      title: "Bornes de recharge pour véhicules électriques à Carpentras | Guide complet",
      description: "Localisez toutes les bornes de recharge pour votre véhicule électrique à Carpentras. Informations en temps réel, disponibilité et conseils pratiques.",
      keywords: ["borne recharge Carpentras", "véhicule électrique Vaucluse", "station recharge Mont Ventoux", "recharge VE Carpentras", "mobilité électrique Comtat Venaissin"]
    }
  }
};

export default chargingStationCities;