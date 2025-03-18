import { Metadata } from 'next';
import DepartmentCitiesList from '@/components/sections/DepartmentCitiesList';
import alpesmaritimes from '@/app/data/departments/06-alpes-maritimes';
import RegionHero from '@/components/sections/RegionHero';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import PrixInstallation from '@/components/PrixInstallation';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import { RegionData } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-Maritimes (06) | Prix et Devis',
  description: 'Installation de panneaux solaires dans les Alpes-Maritimes. Profitez de l\'excellent ensoleillement du 06 pour votre transition énergétique. Devis gratuit et aides disponibles.',
  keywords: [
    'panneaux solaires Alpes-Maritimes',
    'installation solaire 06',
    'photovoltaïque Alpes-Maritimes',
    'prix panneaux solaires 06',
    'aides panneaux solaires Alpes-Maritimes'
  ],
};

const departementData = {
  name: "Alpes-Maritimes",
  code: "06",
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
      question: "Quel est le coût d'une installation solaire dans les Alpes-Maritimes ?",
      answer: "Le coût varie selon la taille de l'installation. Pour une installation standard de 3kWc, comptez entre 7890€ et 10 000€ avant aides. Les aides peuvent réduire ce montant de 640€ à 1440€."
    },
    {
      question: "Quelles sont les aides disponibles dans le 06 ?",
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
  slug: '06-alpes-maritimes',
  mapImage: '/images/departments/alpes-maritimes-map.jpg',
  sunshineHours: 2900,
  sunshineRank: 'Excellent',
  departments: [],
  meta: {
    title: metadata.title as string,
    description: metadata.description as string,
    keywords: metadata.keywords as string[],
  },
  stats: {
    population: 1094000,
    solarPotential: 1500,
    installedCapacity: 150,
    averageConsumption: 4900,
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
        description: "Soutien du département des Alpes-Maritimes",
        amount: "Jusqu'à 1200€",
        conditions: ["Résidence principale", "Installation par un professionnel RGE"]
      }
    ]
  },
  faq: departementData.faqs,
  testimonials: [
    {
      name: "Michel Blanc",
      city: "Nice",
      rating: 5,
      installationType: "6kWc en autoconsommation",
      text: "Installation parfaite et production exceptionnelle grâce à l'ensoleillement de la Côte d'Azur.",
      date: "05/01/2025"
    },
    {
      name: "Céline Durand",
      city: "Cannes",
      rating: 5,
      installationType: "9kWc avec batteries",
      text: "Service impeccable et résultats au-delà de mes attentes. Installation réalisée en 1 journée seulement.",
      date: "18/01/2025"
    }
  ]
};

export default function DepartmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <RegionHero 
        region={departementData.name}
        ensoleillement="2900 heures/an"
        potentielSolaire="Excellent (1500 kWh/kWc)"
      />
      
      <DepartmentCitiesList 
        departmentCode={departementData.code}
        departmentName={departementData.name}
        cities={alpesmaritimes.cities}
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
