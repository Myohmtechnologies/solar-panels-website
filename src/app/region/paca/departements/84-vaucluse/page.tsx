import { Metadata } from 'next';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import PrixInstallation from '@/components/PrixInstallation';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Vaucluse (84) | My Ohm Technologies',
  description: 'Découvrez nos solutions d\'installation de panneaux solaires dans le Vaucluse. Profitez du climat méditerranéen idéal et des aides départementales.',
  keywords: [
    'panneaux solaires Vaucluse',
    'installation solaire 84',
    'énergie solaire Avignon',
    'aide installation solaire 84',
    'photovoltaïque Vaucluse',
  ],
};

const departementData = {
  name: 'Vaucluse',
  code: '84',
  heroImage: '/images/regions/vaucluse-hero.webp',
  ensoleillement: '2800 heures/an',
  potentielSolaire: '1610 kWh/m²/an',
  stats: [
    {
      value: '2800',
      label: 'Heures d\'ensoleillement par an',
      description: 'Un des plus ensoleillés de France'
    },
    {
      value: '1610',
      label: 'kWh/m²/an',
      description: 'Excellent potentiel solaire'
    },
    {
      value: '45%',
      label: 'D\'économies moyennes',
      description: 'Sur votre facture d\'électricité'
    }
  ],
  advantages: [
    {
      title: 'Climat Provençal Idéal',
      description: 'Le Vaucluse bénéficie d\'un ensoleillement exceptionnel et du mistral qui optimise la production.'
    },
    {
      title: 'Aides Départementales',
      description: 'Le département propose des aides attractives pour l\'installation de panneaux solaires.'
    },
    {
      title: 'Expertise Locale',
      description: 'Notre équipe connaît parfaitement le territoire et ses spécificités climatiques.'
    }
  ],
  faqs: [
    {
      question: 'Pourquoi installer des panneaux solaires dans le Vaucluse ?',
      answer: 'Le Vaucluse bénéficie d\'un ensoleillement exceptionnel avec 2800 heures par an. Le mistral, en refroidissant les panneaux, optimise leur rendement.'
    },
    {
      question: 'Le mistral a-t-il un impact sur les panneaux solaires ?',
      answer: 'Le mistral est en réalité un avantage ! En refroidissant les panneaux, il améliore leur rendement. Nos installations sont bien sûr conçues pour résister aux rafales.'
    },
    {
      question: 'Quelles sont les aides disponibles dans le 84 ?',
      answer: 'Le département du Vaucluse propose des aides spécifiques pour l\'installation de panneaux solaires, en complément des aides nationales comme MaPrimeRénov\'.'
    }
  ]
};

export default function VauclusePage() {
  return (
    <main className="overflow-x-hidden">
      <RegionHero 
        region={departementData.name}
        imagePath={departementData.heroImage}
        ensoleillement={departementData.ensoleillement}
        potentielSolaire={departementData.potentielSolaire}
      />
      <RegionStats stats={departementData.stats} />
      <RegionSolarInstallationSection region={departementData.name} />
      <PrixInstallation />
      <RegionAids region={departementData.name} advantages={departementData.advantages} />
      <LocalReviews region={departementData.name} />
      <RegionFAQ faqs={departementData.faqs} />
      <ContactCTASection />
    </main>
  );
}
