import { Metadata } from 'next';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Var (83) | My Ohm Technologies',
  description: 'Découvrez nos solutions d\'installation de panneaux solaires dans le Var. Profitez du climat méditerranéen idéal et des aides départementales.',
  keywords: [
    'panneaux solaires Var',
    'installation solaire 83',
    'énergie solaire Toulon',
    'aide installation solaire 83',
    'photovoltaïque Var',
  ],
};

const departementData = {
  name: 'Var',
  code: '83',
  heroImage: '/images/regions/var-hero.webp',
  ensoleillement: '2800 heures/an',
  potentielSolaire: '1620 kWh/m²/an',
  stats: [
    {
      value: '2800',
      label: 'Heures d\'ensoleillement par an',
      description: 'Parmi les plus ensoleillés de France'
    },
    {
      value: '1620',
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
      title: 'Climat Méditerranéen Optimal',
      description: 'Le Var bénéficie d\'un ensoleillement exceptionnel toute l\'année.'
    },
    {
      title: 'Aides Départementales',
      description: 'Le département propose des aides attractives pour la transition énergétique.'
    },
    {
      title: 'Expertise Locale',
      description: 'Notre équipe connaît parfaitement le territoire varois et ses spécificités.'
    }
  ],
  faqs: [
    {
      question: 'Pourquoi installer des panneaux solaires dans le Var ?',
      answer: 'Le Var bénéficie d\'un ensoleillement exceptionnel avec 2800 heures par an. Le climat méditerranéen est idéal pour optimiser la production d\'énergie solaire.'
    },
    {
      question: 'Les panneaux résistent-ils au climat méditerranéen ?',
      answer: 'Oui, nos panneaux sont parfaitement adaptés au climat méditerranéen. Ils sont conçus pour résister à la chaleur, au sel marin et aux conditions climatiques locales.'
    },
    {
      question: 'Quelles sont les aides disponibles dans le 83 ?',
      answer: 'Le département du Var propose des aides spécifiques pour l\'installation de panneaux solaires, en complément des aides nationales comme MaPrimeRénov\'.'
    }
  ]
};

export default function VarPage() {
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
      <RegionAids region={departementData.name} advantages={departementData.advantages} />
      <LocalReviews region={departementData.name} />
      <RegionFAQ faqs={departementData.faqs} />
      <ContactCTASection />
    </main>
  );
}
