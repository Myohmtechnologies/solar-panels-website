import { Metadata } from 'next';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import RegionDepartments from '@/components/sections/RegionDepartments';
import PrixInstallation from '@/components/PrixInstallation';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires PACA | My Ohm Technologies',
  description: 'Découvrez nos solutions d\'installation de panneaux solaires en région PACA. Profitez du climat méditerranéen idéal et des aides régionales pour votre transition énergétique.',
  keywords: [
    'panneaux solaires PACA',
    'installation solaire Provence-Alpes-Côte d\'Azur',
    'énergie solaire PACA',
    'aide installation solaire PACA',
    'photovoltaïque région sud',
    'installateur solaire PACA'
  ],
};

const regionData = {
  name: 'PACA',
  fullName: 'Provence-Alpes-Côte d\'Azur',
  heroImage: '/images/regions/paca-region.webp', // Image existante du dossier public/images
  ensoleillement: '2800 heures/an',
  potentielSolaire: '1600 kWh/m²/an',
  stats: [
    {
      value: '2800',
      label: 'Heures d\'ensoleillement par an',
      description: 'Une des régions les plus ensoleillées de France'
    },
    {
      value: '1600',
      label: 'kWh/m²/an',
      description: 'Potentiel solaire exceptionnel'
    },
    {
      value: '30%',
      label: 'D\'économies moyennes',
      description: 'Sur votre facture d\'électricité'
    }
  ],
  advantages: [
    {
      title: 'Climat Méditerranéen Idéal',
      description: 'La région PACA bénéficie d\'un ensoleillement exceptionnel, optimisant la production d\'énergie solaire.'
    },
    {
      title: 'Aides Régionales Spécifiques',
      description: 'Profitez des subventions locales en plus des aides nationales pour votre installation.'
    },
    {
      title: 'Expertise Locale',
      description: 'Notre équipe connaît parfaitement les spécificités techniques et administratives de la région.'
    }
  ],
  faqs: [
    {
      question: 'Quelles sont les aides disponibles en région PACA pour l\'installation de panneaux solaires ?',
      answer: 'En PACA, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov\', l\'éco-prêt à taux zéro, la prime à l\'autoconsommation, et des aides régionales spécifiques. Le montant total peut couvrir jusqu\'à 75% de votre installation.'
    },
    {
      question: 'Combien de temps faut-il pour installer des panneaux solaires en PACA ?',
      answer: 'Le délai moyen d\'installation est de 2 à 3 jours. Cependant, le processus complet, incluant les démarches administratives et les études techniques, prend généralement 2 à 3 mois.'
    },
    {
      question: 'Quelle est la durée de vie des panneaux solaires dans le climat méditerranéen ?',
      answer: 'Dans le climat méditerranéen de la région PACA, les panneaux solaires ont une durée de vie moyenne de 25 à 30 ans, avec une garantie de performance de 25 ans sur nos produits.'
    }
  ]
};

export default function PACASolarPage() {
  return (
    <main className="overflow-x-hidden">
      <RegionHero 
        region={regionData.fullName}
        imagePath={regionData.heroImage}
        ensoleillement={regionData.ensoleillement}
        potentielSolaire={regionData.potentielSolaire}
      />
      <RegionStats stats={regionData.stats} />
      <RegionSolarInstallationSection region={regionData.name} />
      <PrixInstallation />
      <RegionAids region={regionData.name} advantages={regionData.advantages} />
      <RegionDepartments region={regionData.fullName} />
      <LocalReviews region={regionData.fullName} />
      <RegionFAQ faqs={regionData.faqs} />
      <ContactCTASection />
    </main>
  );
}
