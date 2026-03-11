import { Metadata } from 'next';
import DepartmentCitiesList from '@/components/sections/DepartmentCitiesList';
import alpesDeHauteProvence from '@/app/data/departments/04-alpes-de-haute-provence';
import RegionHero from '@/components/sections/RegionHero';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import PrixInstallation from '@/components/PrixInstallation';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import { RegionData } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-de-Haute-Provence (04) | Prix et Devis',
  description: 'Installation de panneaux solaires dans les Alpes-de-Haute-Provence. Profitez de l\'excellent ensoleillement du 04 pour votre transition énergétique. Devis gratuit et aides disponibles.',
  keywords: [
    'panneaux solaires Alpes-de-Haute-Provence',
    'installation solaire 04',
    'photovoltaïque Alpes-de-Haute-Provence',
    'prix panneaux solaires 04',
    'aides panneaux solaires Alpes-de-Haute-Provence'
  ],
};

const departementData = {
  name: "Alpes-de-Haute-Provence",
  code: "04",
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
      question: "Quel est le coût d'une installation solaire dans les Alpes-de-Haute-Provence ?",
      answer: "Le coût varie selon la taille de l'installation. Pour une installation standard de 3kWc, comptez entre 7890€ et 10 000€ avant aides. Les aides peuvent réduire ce montant de 640€ à 1440€."
    },
    {
      question: "Quelles sont les aides disponibles dans le 04 ?",
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
  slug: '04-alpes-de-haute-provence',
  mapImage: '/images/departments/alpes-de-haute-provence-map.jpg',
  sunshineHours: 2750,
  sunshineRank: 'Très bon',
  departments: [],
  meta: {
    title: metadata.title as string,
    description: metadata.description as string,
    keywords: metadata.keywords as string[],
  },
  stats: {
    population: 164000,
    solarPotential: 1400,
    installedCapacity: 35,
    averageConsumption: 4600,
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
        description: "Soutien du département des Alpes-de-Haute-Provence",
        amount: "Jusqu'à 600€",
        conditions: ["Résidence principale", "Installation par un professionnel RGE"]
      }
    ]
  },
  faq: departementData.faqs,
  testimonials: [
    {
      name: "Pierre Moreau",
      city: "Digne-les-Bains",
      rating: 5,
      installationType: "3kWc en autoconsommation",
      text: "Installation impeccable, équipe professionnelle et réactive. Très satisfait de ma production d'énergie.",
      date: "12/01/2025"
    },
    {
      name: "Sylvie Laurent",
      city: "Manosque",
      rating: 5,
      installationType: "6kWc avec batteries",
      text: "Excellente prestation de A à Z. Les panneaux produisent plus que prévu grâce à l'excellent ensoleillement.",
      date: "28/01/2025"
    }
  ]
};

export default function DepartmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <RegionHero 
        region={departementData.name}
        ensoleillement="2750 heures/an"
        potentielSolaire="Très bon (1400 kWh/kWc)"
      />
      
      <DepartmentCitiesList 
        departmentCode={departementData.code}
        departmentName={departementData.name}
        cities={alpesDeHauteProvence.cities}
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
