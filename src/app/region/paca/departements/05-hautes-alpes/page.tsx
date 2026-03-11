import { Metadata } from 'next';
import DepartmentCitiesList from '@/components/sections/DepartmentCitiesList';
import hautesalpes from '@/app/data/departments/05-hautes-alpes';
import RegionHero from '@/components/sections/RegionHero';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import PrixInstallation from '@/components/PrixInstallation';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import { RegionData } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Hautes-Alpes (05) | Prix et Devis',
  description: 'Installation de panneaux solaires dans les Hautes-Alpes. Profitez de l\'excellent ensoleillement du 05 pour votre transition énergétique. Devis gratuit et aides disponibles.',
  keywords: [
    'panneaux solaires Hautes-Alpes',
    'installation solaire 05',
    'photovoltaïque Hautes-Alpes',
    'prix panneaux solaires 05',
    'aides panneaux solaires Hautes-Alpes'
  ],
};

const departementData = {
  name: "Hautes-Alpes",
  code: "05",
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
      question: "Quel est le coût d'une installation solaire dans les Hautes-Alpes ?",
      answer: "Le coût varie selon la taille de l'installation. Pour une installation standard de 3kWc, comptez entre 7890€ et 10 000€ avant aides. Les aides peuvent réduire ce montant de 640€ à 1440€."
    },
    {
      question: "Quelles sont les aides disponibles dans le 05 ?",
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
  slug: '05-hautes-alpes',
  mapImage: '/images/departments/hautes-alpes-map.jpg',
  sunshineHours: 2700,
  sunshineRank: 'Très bon',
  departments: [],
  meta: {
    title: metadata.title as string,
    description: metadata.description as string,
    keywords: metadata.keywords as string[],
  },
  stats: {
    population: 141000,
    solarPotential: 1350,
    installedCapacity: 25,
    averageConsumption: 4500,
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
        description: "Soutien du département des Hautes-Alpes",
        amount: "Jusqu'à 500€",
        conditions: ["Résidence principale", "Installation par un professionnel RGE"]
      }
    ]
  },
  faq: departementData.faqs,
  testimonials: [
    {
      name: "Jean Dupont",
      city: "Gap",
      rating: 5,
      installationType: "3kWc en autoconsommation",
      text: "Installation impeccable, équipe professionnelle et réactive. Très satisfait de ma production d'énergie même en hiver.",
      date: "15/01/2025"
    },
    {
      name: "Marie Lambert",
      city: "Briançon",
      rating: 5,
      installationType: "6kWc avec batteries",
      text: "Excellente prestation de A à Z. Les panneaux résistent parfaitement aux conditions hivernales de montagne.",
      date: "03/02/2025"
    }
  ]
};

export default function DepartmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <RegionHero 
        region={departementData.name}
        ensoleillement="2700 heures/an"
        potentielSolaire="Très bon (1350 kWh/kWc)"
      />
      
      <DepartmentCitiesList 
        departmentCode={departementData.code}
        departmentName={departementData.name}
        cities={hautesalpes.cities}
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
