import { Metadata } from 'next';
import DepartmentCitiesList from '@/components/sections/DepartmentCitiesList';
import vaucluse from '@/app/data/departments/84-vaucluse';
import RegionHero from '@/components/sections/RegionHero';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import PrixInstallation from '@/components/PrixInstallation';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import { RegionData } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Vaucluse (84) | Prix et Devis',
  description: 'Installation de panneaux solaires dans le Vaucluse. Profitez de l\'excellent ensoleillement du 84 pour votre transition énergétique. Devis gratuit et aides disponibles.',
  keywords: [
    'panneaux solaires Vaucluse',
    'installation solaire 84',
    'photovoltaïque Vaucluse',
    'prix panneaux solaires 84',
    'aides panneaux solaires Vaucluse'
  ],
};

const departementData = {
  name: "Vaucluse",
  code: "84",
  advantages: [
    {
      title: "Ensoleillement Exceptionnel",
      description: "Plus de 2800 heures d'ensoleillement par an, idéal pour le photovoltaïque"
    },
    {
      title: "Aides Régionales",
      description: "Bénéficiez des aides spécifiques à la région PACA et au département"
    },
    {
      title: "Expertise Locale",
      description: "Une équipe d'installateurs certifiés connaissant parfaitement le territoire"
    }
  ],
  faqs: [
    {
      question: "Quel est le coût d'une installation solaire dans le Vaucluse ?",
      answer: "Le coût varie selon la taille de l'installation. Pour une installation standard de 3kWc, comptez entre 7890€ et 10 000€ avant aides. Les aides peuvent réduire ce montant de 640€ à 1440€."
    },
    {
      question: "Quelles sont les aides disponibles dans le 84 ?",
      answer: "Vous pouvez bénéficier de plusieurs aides : la prime à l'autoconsommation, les aides régionales PACA, et la TVA réduite à 10%. De plus, le département offre parfois des bonus supplémentaires."
    },
    {
      question: "Combien de temps faut-il pour installer des panneaux solaires ?",
      answer: "L'installation elle-même prend généralement 1 à 2 jours. Le processus complet, incluant les démarches administratives, peut prendre 2 à 3 mois."
    }
  ]
};

// Création d'un objet RegionData pour le département
const regionData: RegionData = {
  name: departementData.name,
  slug: '84-vaucluse',
  mapImage: '/images/departments/vaucluse-map.jpg',
  sunshineHours: 2800,
  sunshineRank: 'Excellent',
  departments: [],
  meta: {
    title: metadata.title as string,
    description: metadata.description as string,
    keywords: metadata.keywords as string[],
  },
  stats: {
    population: 560000,
    solarPotential: 1450,
    installedCapacity: 95,
    averageConsumption: 4800,
  },
  aids: {
    regional: [
      {
        title: "Prime à l'autoconsommation",
        description: "Aide de l'État pour les installations en autoconsommation",
        amount: "Jusqu'à 380€/kWc",
        conditions: ["Installation ≤ 100 kWc", "Autoconsommation avec vente de surplus"]
      }
    ],
    local: [
      {
        title: "Aide départementale",
        description: "Soutien du département du Vaucluse",
        amount: "Jusqu'à 800€",
        conditions: ["Résidence principale", "Installation par un professionnel RGE"]
      }
    ]
  },
  faq: departementData.faqs,
  testimonials: [
    {
      name: "Julien Dubois",
      city: "Avignon",
      rating: 5,
      installationType: "4kWc en autoconsommation",
      text: "Installation rapide et soignée. Production conforme aux prévisions grâce à l'ensoleillement exceptionnel du Vaucluse.",
      date: "15/01/2025"
    },
    {
      name: "Marie Lecomte",
      city: "Orange",
      rating: 5,
      installationType: "6kWc avec batteries",
      text: "Très satisfaite de mon installation. L'équipe a été professionnelle et à l'écoute de mes besoins.",
      date: "22/01/2025"
    }
  ]
};

export default function DepartmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <RegionHero 
        region={departementData.name}
        ensoleillement="2800 heures/an"
        potentielSolaire="Excellent (1450 kWh/kWc)"
      />
      
      <DepartmentCitiesList 
        departmentCode={departementData.code}
        departmentName={departementData.name}
        cities={vaucluse.cities}
      />

      <PrixInstallation />
      
      <RegionAids 
        region={regionData}
        advantages={departementData.advantages} 
      />
      
      <LocalReviews 
        region={regionData}
      />
      
      <ClientTestimonialsSection />
      
      <RegionFAQ 
        faqs={departementData.faqs}
      />
      
      <ContactCTASection />
    </main>
  );
}
