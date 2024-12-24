export const defaultMetadata = {
  title: {
    default: 'MY OHM Technologies | Installation de Panneaux Solaires',
    template: '%s | MY OHM Technologies'
  },
  description: 'Expert en installation de panneaux solaires en France. Solutions photovoltaïques sur-mesure, devis gratuit et accompagnement personnalisé.',
  keywords: ['panneaux solaires', 'installation photovoltaïque', 'énergie solaire', 'MY OHM Technologies', 'énergie renouvelable'],
  authors: [{ name: 'MY OHM Technologies' }],
  creator: 'MY OHM Technologies',
  publisher: 'MY OHM Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://myohm-technologies.fr',
    siteName: 'MY OHM Technologies',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MY OHM Technologies - Installation de Panneaux Solaires',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MY OHM Technologies | Installation de Panneaux Solaires',
    description: 'Expert en installation de panneaux solaires en France. Solutions photovoltaïques sur-mesure.',
    images: '/images/twitter-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface Department {
  name: string;
  code: string;
  population: number;
  sunshineHours?: number;
}

export interface RegionData {
  name: string;
  slug: string;
  mapImage: string;
  sunshineHours: number;
  sunshineRank: string;
  departments: Department[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  stats: {
    population: number;
    solarPotential: number;
    installedCapacity: number;
    averageConsumption: number;
  };
  aids: {
    regional: {
      title: string;
      description: string;
      amount: string;
      conditions: string[];
    }[];
    local: {
      title: string;
      description: string;
      amount: string;
      conditions: string[];
    }[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    name: string;
    city: string;
    rating: number;
    installationType: string;
    text: string;
    date: string;
  }[];
}

export const defaultRegion: RegionData = {
  name: 'France',
  slug: 'france',
  mapImage: '/images/regions/map-default.jpg',
  sunshineHours: 1800,
  sunshineRank: '1er',
  departments: [
    {
      name: 'Bouches-du-Rhône',
      code: '13',
      population: 2034469
    },
    {
      name: 'Var',
      code: '83',
      population: 1076711
    },
    {
      name: 'Alpes-Maritimes',
      code: '06',
      population: 1094283
    },
    {
      name: 'Alpes-de-Haute-Provence',
      code: '04',
      population: 163915
    }
  ],
  meta: {
    title: 'Installation de Panneaux Solaires en France | MyOhm Technologies',
    description: 'Découvrez les solutions d\'installation de panneaux solaires en France. Profitez d\'une énergie propre et économique avec MyOhm Technologies.',
    keywords: ['panneaux solaires', 'installation solaire', 'énergie solaire', 'France']
  },
  stats: {
    population: 67390000,
    solarPotential: 11000,
    installedCapacity: 13200,
    averageConsumption: 4679
  },
  aids: {
    regional: [],
    local: []
  },
  faq: [],
  testimonials: []
};

export const regions: RegionData[] = [
  {
    name: 'Provence-Alpes-Côte d\'Azur',
    slug: 'provence-alpes-cote-d-azur',
    mapImage: '/images/regions/paca.png',
    sunshineHours: 2855,
    sunshineRank: 'deuxième',
    departments: [
      { name: 'Bouches-du-Rhône', code: '13', population: 2043110 },
      { name: 'Alpes-de-Haute-Provence', code: '04', population: 165197 },
      { name: 'Var', code: '83', population: 1076711 },
      { name: 'Vaucluse', code: '84', population: 561469 },
      { name: 'Alpes-Maritimes', code: '06', population: 1094283 },
      { name: 'Hautes-Alpes', code: '05', population: 141756 }
    ],
    meta: {
      title: 'Installation Panneaux Solaires en PACA | MY OHM Technologies',
      description: 'Expert en installation de panneaux solaires en région PACA. Profitez du fort ensoleillement et des aides régionales. Devis gratuit et accompagnement personnalisé.',
      keywords: ['panneaux solaires PACA', 'installation photovoltaïque PACA', 'énergie solaire Provence', 'aide panneau solaire PACA']
    },
    stats: {
      population: 5081101,
      solarPotential: 1800,
      installedCapacity: 1500,
      averageConsumption: 6500
    },
    aids: {
      regional: [
        {
          title: 'Aide régionale à l\'installation solaire',
          description: 'La région PACA propose une aide pour l\'installation de panneaux solaires photovoltaïques.',
          amount: 'Jusqu\'à 3000€',
          conditions: [
            'Être propriétaire occupant',
            'Installation réalisée par un professionnel RGE',
            'Puissance minimale de 3 kWc'
          ]
        }
      ],
      local: [
        {
          title: 'Aide départementale des Bouches-du-Rhône',
          description: 'Le département des Bouches-du-Rhône propose une aide complémentaire.',
          amount: 'Jusqu\'à 2000€',
          conditions: [
            'Résider dans les Bouches-du-Rhône',
            'Revenus modestes selon les plafonds de l\'Anah'
          ]
        }
      ]
    },
    faq: [],
    testimonials: []
  },
  {
    name: 'Bouches-du-Rhône',
    slug: 'bouches-du-rhone',
    mapImage: '/images/regions/bouches-du-rhone.png',
    sunshineHours: 2800,
    sunshineRank: 'troisième',
    departments: [
      { name: 'Bouches-du-Rhône', code: '13', population: 2043110 },
    ],
    meta: {
      title: 'Installation Panneaux Solaires Bouches-du-Rhône (13) | MY OHM Technologies',
      description: 'Expert en installation de panneaux solaires dans les Bouches-du-Rhône. Profitez de 2800h d\'ensoleillement par an. Devis gratuit et aides régionales disponibles.',
      keywords: ['panneaux solaires Bouches-du-Rhône', 'installation photovoltaïque Bouches-du-Rhône', 'énergie solaire Marseille', 'aide panneau solaire Bouches-du-Rhône']
    },
    stats: {
      population: 2043110,
      solarPotential: 1700,
      installedCapacity: 1200,
      averageConsumption: 6000
    },
    aids: {
      regional: [
        {
          title: 'Aide régionale à l\'installation solaire',
          description: 'La région PACA propose une aide pour l\'installation de panneaux solaires photovoltaïques.',
          amount: 'Jusqu\'à 3000€',
          conditions: [
            'Être propriétaire occupant',
            'Installation réalisée par un professionnel RGE',
            'Puissance minimale de 3 kWc'
          ]
        }
      ],
      local: [
        {
          title: 'Aide départementale des Bouches-du-Rhône',
          description: 'Le département des Bouches-du-Rhône propose une aide complémentaire.',
          amount: 'Jusqu\'à 2000€',
          conditions: [
            'Résider dans les Bouches-du-Rhône',
            'Revenus modestes selon les plafonds de l\'Anah'
          ]
        }
      ]
    },
    faq: [
      {
        question: 'Quel est le potentiel solaire dans les Bouches-du-Rhône ?',
        answer: 'Les Bouches-du-Rhône bénéficient d\'un ensoleillement important avec plus de 2800 heures de soleil par an, ce qui en fait un département propice à l\'installation de panneaux solaires.'
      },
      {
        question: 'Quelles sont les aides disponibles dans les Bouches-du-Rhône ?',
        answer: 'En plus des aides nationales (MaPrimeRénov\', CEE), le département des Bouches-du-Rhône propose des aides spécifiques pouvant aller jusqu\'à 2000€.'
      }
    ],
    testimonials: []
  },
  {
    name: 'Alpes-de-Haute-Provence',
    slug: 'alpes-de-haute-provence',
    mapImage: '/images/regions/alpes-de-haute-provence.png',
    sunshineHours: 2750,
    sunshineRank: 'quatrième',
    departments: [
      { name: 'Alpes-de-Haute-Provence', code: '04', population: 165197 },
    ],
    meta: {
      title: 'Installation Panneaux Solaires Alpes-de-Haute-Provence (04) | MY OHM Technologies',
      description: 'Installation de panneaux solaires dans les Alpes-de-Haute-Provence. Profitez d\'un ensoleillement exceptionnel en altitude. Solutions adaptées au climat montagnard.',
      keywords: ['panneaux solaires Alpes-de-Haute-Provence', 'installation photovoltaïque Alpes-de-Haute-Provence', 'énergie solaire Digne', 'aide panneau solaire Alpes-de-Haute-Provence']
    },
    stats: {
      population: 165197,
      solarPotential: 1600,
      installedCapacity: 1000,
      averageConsumption: 5500
    },
    aids: {
      regional: [
        {
          title: 'Aide régionale à l\'installation solaire',
          description: 'La région PACA propose une aide pour l\'installation de panneaux solaires photovoltaïques.',
          amount: 'Jusqu\'à 3000€',
          conditions: [
            'Être propriétaire occupant',
            'Installation réalisée par un professionnel RGE',
            'Puissance minimale de 3 kWc'
          ]
        }
      ],
      local: [
        {
          title: 'Aide départementale des Alpes-de-Haute-Provence',
          description: 'Le département des Alpes-de-Haute-Provence propose une aide complémentaire.',
          amount: 'Jusqu\'à 1500€',
          conditions: [
            'Résider dans les Alpes-de-Haute-Provence',
            'Revenus modestes selon les plafonds de l\'Anah'
          ]
        }
      ]
    },
    faq: [
      {
        question: 'Quel est le potentiel solaire dans les Alpes-de-Haute-Provence ?',
        answer: 'Les Alpes-de-Haute-Provence bénéficient d\'un ensoleillement important en altitude, ce qui en fait un département propice à l\'installation de panneaux solaires.'
      },
      {
        question: 'Quelles sont les aides disponibles dans les Alpes-de-Haute-Provence ?',
        answer: 'En plus des aides nationales (MaPrimeRénov\', CEE), le département des Alpes-de-Haute-Provence propose des aides spécifiques pouvant aller jusqu\'à 1500€.'
      }
    ],
    testimonials: []
  },
  {
    name: 'Var',
    slug: 'var',
    mapImage: '/images/regions/var.png',
    sunshineHours: 2700,
    sunshineRank: 'cinquième',
    departments: [
      { name: 'Var', code: '83', population: 1076711 },
    ],
    meta: {
      title: 'Installation Panneaux Solaires Var (83) | MY OHM Technologies',
      description: 'Expert en installation de panneaux solaires dans le Var. Profitez du climat méditerranéen idéal pour le photovoltaïque. Installation professionnelle et service premium.',
      keywords: ['panneaux solaires Var', 'installation photovoltaïque Var', 'énergie solaire Toulon', 'aide panneau solaire Var']
    },
    stats: {
      population: 1076711,
      solarPotential: 1550,
      installedCapacity: 900,
      averageConsumption: 5000
    },
    aids: {
      regional: [
        {
          title: 'Aide régionale à l\'installation solaire',
          description: 'La région PACA propose une aide pour l\'installation de panneaux solaires photovoltaïques.',
          amount: 'Jusqu\'à 3000€',
          conditions: [
            'Être propriétaire occupant',
            'Installation réalisée par un professionnel RGE',
            'Puissance minimale de 3 kWc'
          ]
        }
      ],
      local: [
        {
          title: 'Aide départementale du Var',
          description: 'Le département du Var propose une aide complémentaire.',
          amount: 'Jusqu\'à 1200€',
          conditions: [
            'Résider dans le Var',
            'Revenus modestes selon les plafonds de l\'Anah'
          ]
        }
      ]
    },
    faq: [
      {
        question: 'Quel est le potentiel solaire dans le Var ?',
        answer: 'Le Var bénéficie d\'un climat méditerranéen idéal pour le photovoltaïque, ce qui en fait un département propice à l\'installation de panneaux solaires.'
      },
      {
        question: 'Quelles sont les aides disponibles dans le Var ?',
        answer: 'En plus des aides nationales (MaPrimeRénov\', CEE), le département du Var propose des aides spécifiques pouvant aller jusqu\'à 1200€.'
      }
    ],
    testimonials: []
  },
  {
    name: 'Vaucluse',
    slug: 'vaucluse',
    mapImage: '/images/regions/vaucluse.png',
    sunshineHours: 2650,
    sunshineRank: 'sixième',
    departments: [
      { name: 'Vaucluse', code: '84', population: 561469 },
    ],
    meta: {
      title: 'Installation Panneaux Solaires Vaucluse (84) | MY OHM Technologies',
      description: 'Installation de panneaux solaires dans le Vaucluse. Bénéficiez du climat provençal idéal pour maximiser votre production solaire. Expertise locale et accompagnement personnalisé.',
      keywords: ['panneaux solaires Vaucluse', 'installation photovoltaïque Vaucluse', 'énergie solaire Avignon', 'aide panneau solaire Vaucluse']
    },
    stats: {
      population: 561469,
      solarPotential: 1500,
      installedCapacity: 800,
      averageConsumption: 4500
    },
    aids: {
      regional: [
        {
          title: 'Aide régionale à l\'installation solaire',
          description: 'La région PACA propose une aide pour l\'installation de panneaux solaires photovoltaïques.',
          amount: 'Jusqu\'à 3000€',
          conditions: [
            'Être propriétaire occupant',
            'Installation réalisée par un professionnel RGE',
            'Puissance minimale de 3 kWc'
          ]
        }
      ],
      local: [
        {
          title: 'Aide départementale du Vaucluse',
          description: 'Le département du Vaucluse propose une aide complémentaire.',
          amount: 'Jusqu\'à 1000€',
          conditions: [
            'Résider dans le Vaucluse',
            'Revenus modestes selon les plafonds de l\'Anah'
          ]
        }
      ]
    },
    faq: [
      {
        question: 'Quel est le potentiel solaire dans le Vaucluse ?',
        answer: 'Le Vaucluse bénéficie d\'un climat provençal idéal pour maximiser votre production solaire, ce qui en fait un département propice à l\'installation de panneaux solaires.'
      },
      {
        question: 'Quelles sont les aides disponibles dans le Vaucluse ?',
        answer: 'En plus des aides nationales (MaPrimeRénov\', CEE), le département du Vaucluse propose des aides spécifiques pouvant aller jusqu\'à 1000€.'
      }
    ],
    testimonials: []
  }
];
