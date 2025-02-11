interface City {
  name: string;
  slug: string;
  population: number;
  sunshineHours: number;
  description: string;
}

export const citiesByDepartment: { [key: string]: City[] } = {
  '13': [
    {
      name: 'Marseille',
      slug: 'marseille',
      population: 850726,
      sunshineHours: 2850,
      description: 'Plus grande ville de la région PACA, située sur la côte méditerranéenne'
    },
    {
      name: 'Aix-en-Provence',
      slug: 'aix-en-provence',
      population: 143097,
      sunshineHours: 2800,
      description: 'Ville universitaire et culturelle majeure de la région'
    },
    {
      name: 'Martigues',
      slug: 'martigues',
      population: 49021,
      sunshineHours: 2800,
      description: 'Ville portuaire surnommée la Venise provençale'
    }
  ],
  '84': [
    {
      name: 'Avignon',
      slug: 'avignon',
      population: 94203,
      sunshineHours: 2800,
      description: 'Ville historique, célèbre pour son festival et son palais des Papes'
    },
    {
      name: 'Orange',
      slug: 'orange',
      population: 29648,
      sunshineHours: 2750,
      description: 'Ville historique romaine avec son théâtre antique'
    },
    {
      name: 'Carpentras',
      slug: 'carpentras',
      population: 28447,
      sunshineHours: 2750,
      description: 'Sous-préfecture du Vaucluse au pied du Mont Ventoux'
    }
  ],
  '83': [
    {
      name: 'Toulon',
      slug: 'toulon',
      population: 171953,
      sunshineHours: 2900,
      description: 'Préfecture du Var et port militaire majeur'
    },
    {
      name: 'Fréjus',
      slug: 'frejus',
      population: 54023,
      sunshineHours: 2850,
      description: 'Station balnéaire avec un riche patrimoine romain'
    },
    {
      name: 'Draguignan',
      slug: 'draguignan',
      population: 40054,
      sunshineHours: 2800,
      description: 'Sous-préfecture du Var au cœur de la Provence'
    }
  ],
  '06': [
    {
      name: 'Nice',
      slug: 'nice',
      population: 342669,
      sunshineHours: 2850,
      description: 'Capitale de la Côte d\'Azur, ville touristique majeure'
    },
    {
      name: 'Cannes',
      slug: 'cannes',
      population: 74285,
      sunshineHours: 2850,
      description: 'Ville célèbre pour son festival de cinéma'
    },
    {
      name: 'Antibes',
      slug: 'antibes',
      population: 73798,
      sunshineHours: 2850,
      description: 'Station balnéaire entre Nice et Cannes'
    }
  ],
  '05': [
    {
      name: 'Gap',
      slug: 'gap',
      population: 40225,
      sunshineHours: 2700,
      description: 'Préfecture des Hautes-Alpes, ville la plus haute de France'
    },
    {
      name: 'Briançon',
      slug: 'briancon',
      population: 12385,
      sunshineHours: 2650,
      description: 'Plus haute ville d\'Europe, station de ski réputée'
    },
    {
      name: 'Embrun',
      slug: 'embrun',
      population: 6255,
      sunshineHours: 2700,
      description: 'Ville historique surplombant le lac de Serre-Ponçon'
    }
  ],
  '04': [
    {
      name: 'Digne-les-Bains',
      slug: 'digne-les-bains',
      population: 16184,
      sunshineHours: 2750,
      description: 'Préfecture des Alpes-de-Haute-Provence, station thermale'
    },
    {
      name: 'Manosque',
      slug: 'manosque',
      population: 22105,
      sunshineHours: 2800,
      description: 'Plus grande ville du département, centre économique'
    },
    {
      name: 'Sisteron',
      slug: 'sisteron',
      population: 7375,
      sunshineHours: 2750,
      description: 'Ville historique avec sa citadelle, porte de la Provence'
    }
  ]
};
