import { Metadata } from 'next';
import RegionStats from '@/components/sections/RegionStats';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import PrixInstallation from '@/components/PrixInstallation';
import TransactionalHero from '@/components/sections/TransactionalHero';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Bouches-du-Rhône (13) | My Ohm Technologies',
  description: 'Découvrez nos solutions d\'installation de panneaux solaires dans les Bouches-du-Rhône. Profitez du climat méditerranéen idéal et des aides départementales.',
  keywords: [
    'panneaux solaires Bouches-du-Rhône',
    'installation solaire 13',
    'énergie solaire Marseille',
    'aide installation solaire 13',
    'photovoltaïque Aix-en-Provence',
  ],
};

const departementData = {
  name: 'Bouches-du-Rhône',
  code: '13',
  heroImage: '/images/regions/bouches-du-rhone-hero.webp',
  ensoleillement: '2900 heures/an',
  potentielSolaire: '1650 kWh/m²/an',
  stats: [
    {
      value: '2900',
      label: 'Heures d\'ensoleillement par an',
      description: 'Record d\'ensoleillement en France'
    },
    {
      value: '1650',
      label: 'kWh/m²/an',
      description: 'Potentiel solaire maximal'
    },
    {
      value: '50%',
      label: 'D\'économies moyennes',
      description: 'Sur votre facture d\'électricité'
    }
  ],
  advantages: [
    {
      title: 'Climat Provençal Idéal',
      description: 'Les Bouches-du-Rhône bénéficient d\'un ensoleillement exceptionnel et du mistral qui optimise la production.'
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
      question: 'Pourquoi installer des panneaux solaires dans les Bouches-du-Rhône ?',
      answer: 'Les Bouches-du-Rhône détiennent le record d\'ensoleillement en France avec 2900 heures par an. Le mistral, en refroidissant les panneaux, optimise leur rendement.'
    },
    {
      question: 'Le mistral a-t-il un impact sur les panneaux solaires ?',
      answer: 'Le mistral est en réalité un avantage ! En refroidissant les panneaux, il améliore leur rendement. Nos installations sont bien sûr conçues pour résister aux rafales.'
    },
    {
      question: 'Quelles sont les aides disponibles dans le 13 ?',
      answer: 'Le département des Bouches-du-Rhône propose des aides spécifiques pour l\'installation de panneaux solaires, en complément des aides nationales comme MaPrimeRénov\'.'
    }
  ]
};

export default function BouchesduRhonePage() {
  return (
    <main className="overflow-x-hidden">
      <TransactionalHero
        region="PACA"
        departement={departementData.name}
        code={departementData.code}
        ensoleillement={departementData.ensoleillement}
        potentielSolaire={departementData.potentielSolaire}
      />
      <ClientTestimonialsSection />
      <RegionStats stats={departementData.stats} />
      <RegionSolarInstallationSection region={departementData.name} advantages={departementData.advantages} />
      <PrixInstallation />
      <RegionAids region={departementData.name} advantages={departementData.advantages} />
      <LocalReviews region={departementData.name} />
      <RegionFAQ faqs={departementData.faqs} />
      <ContactCTASection />
    </main>
  );
}
