import { Department } from './types';
import { alpesDeHauteProvence } from './departments/04-alpes-de-haute-provence';
import { hautesAlpes } from './departments/05-hautes-alpes';
import { alpesMaritimes } from './departments/06-alpes-maritimes';
import { bouchesdurhone } from './departments/13-bouches-du-rhone';
import { varDepartement } from './departments/83-var';
import { vaucluse } from './departments/84-vaucluse';

export type City = {
  name: string;
  slug?: string;
  description?: string;
  latitude: number;
  longitude: number;
  population: number;
  solarPotential: number;
  averageSunHours: number;
  averageAnnualTemperature: number;
  averageElectricityCost: number;
  solarInstallationCost: number;
  solarInstallationSavings: number;
  solarPanelTypes: string[];
  roofTypes: string[];
  energyConsumptionProfile: string;
  carbonEmissionReduction: number;
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
    images?: {
      url: string;
      width: number;
      height: number;
      alt?: string;
    }[];
  };
  localFAQ?: {
    question: string;
    answer: string;
  }[];
};

export const allDepartments = [
  alpesDeHauteProvence,
  hautesAlpes,
  alpesMaritimes,
  bouchesdurhone,
  varDepartement,
  vaucluse,
];

export function getCityData(citySlug: string) {
  if (!citySlug) {
    console.error('citySlug is undefined');
    return null;
  }

  const department = allDepartments.find(d => {
    if (!d) return false;
    if (!d.cities) {
      console.error(`Department ${d.name} has no cities property`);
      return false;
    }
    return citySlug in d.cities;
  });

  if (!department) {
    console.error(`No department found for city: ${citySlug}`);
    return null;
  }

  const city = department.cities[citySlug];
  if (!city) {
    console.error(`City ${citySlug} not found in department ${department.name}`);
    return null;
  }

  const localFAQ = [
    {
      question: `Pourquoi installer des panneaux solaires à ${city.name} ?`,
      answer: `Avec un ensoleillement de ${city.averageSunHours} heures par an et un potentiel solaire de ${city.solarPotential}, ${city.name} offre des conditions exceptionnelles pour l'énergie solaire.`
    },
    {
      question: `Quel est le coût moyen d'installation à ${city.name} ?`,
      answer: `Le coût moyen d'installation à ${city.name} varie entre 8 990 € et 18 990 € selon la puissance, avec des aides et subventions disponibles pour réduire ce coût.`
    },
    {
      question: `Quelles économies puis-je réaliser à ${city.name} ?`,
      answer: `À ${city.name}, vous pouvez économiser jusqu'à ${city.solarInstallationSavings}% sur vos factures d'électricité grâce à une installation solaire adaptée.`
    }
  ];

  console.log('Generated localFAQ:', localFAQ);

  return {
    ...city,
    slug: citySlug,
    localFAQ,
    engagement: {
      title: `Notre Engagement pour ${city.name}`,
      description: `En tant qu'expert en énergie solaire à ${city.name}, My Ohm Technologies s'engage à fournir des solutions photovoltaïques de haute qualité, adaptées aux besoins spécifiques de chaque client.`,
      points: [
        {
          title: "Expertise Locale",
          description: `Notre équipe connaît parfaitement les spécificités de ${city.name} et vous garantit une installation adaptée à votre environnement.`,
          icon: "map"
        },
        {
          title: "Qualité Premium",
          description: "Nous sélectionnons uniquement des équipements de haute qualité pour une performance optimale et durable.",
          icon: "star"
        },
        {
          title: "Service Complet",
          description: "De l'étude à la maintenance, nous vous accompagnons à chaque étape de votre projet solaire.",
          icon: "check"
        }
      ],
      guarantees: [
        "Garantie décennale",
        "Garantie de performance",
        "Maintenance préventive",
        "Support technique 7j/7"
      ]
    },
    solarInstallation: {
      installationCostsTable: {
        title: "Coûts d'Installation Panneaux Solaires",
        headers: ["Puissance", "Prix TTC", "Type", "Badge", "Description"],
        rows: [
          {
            power: "3 kWc",
            price: "8 990 €",
            type: "Résidentiel",
            badge: "ÉCONOMIQUE",
            highlight: false,
            description: "Installation basique idéale pour petit foyer"
          },
          {
            power: "6 kWc",
            price: "13 990 €",
            type: "Résidentiel+",
            badge: "POPULAIRE",
            highlight: true,
            description: "Meilleur rapport qualité/prix"
          },
          {
            power: "9 kWc",
            price: "18 990 €",
            type: "Premium",
            badge: "PERFORMANCE",
            highlight: false,
            description: "Installation haute performance"
          }
        ],
        notes: [
          "Prix incluant pose et matériel",
          "TVA 10% incluse",
          "Aides déduites"
        ],
        ctaText: "Obtenir un devis gratuit"
      },
      costs: [
        { power: "3kWc", price: 8990 },
        { power: "6kWc", price: 13990 },
        { power: "9kWc", price: 18990 }
      ],
      installers: [
        {
          name: "My Ohm Expert",
          certifications: ["RGE QualiPV", "ISO 9001"],
          description: "Installateur certifié avec plus de 10 ans d'expérience",
          experience: "10+ ans"
        }
      ],
      subsidies: {
        autoconsumption: {
          description: "Prime à l'autoconsommation",
          rates: [
            { power: "≤ 3kWc", amount: 380 },
            { power: "3-9kWc", amount: 280 },
            { power: "> 9kWc", amount: 160 }
          ]
        },
        buyback: {
          description: "Tarif de rachat",
          details: [
            "Surplus : 10c€/kWh",
            "Total : 20c€/kWh"
          ]
        },
        vat: {
          description: "TVA Réduite",
          rate: 10,
          normalRate: 20
        },
        taxExemption: {
          description: "Exonération de taxe foncière",
          details: [
            "Jusqu'à 5 ans",
            "Sur délibération"
          ]
        }
      }
    }
  };
}
