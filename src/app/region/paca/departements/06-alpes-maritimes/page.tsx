import { Metadata } from 'next';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-Maritimes (06) | My Ohm Technologies',
  description: 'Découvrez nos solutions d\'installation de panneaux solaires dans les Alpes-Maritimes. Profitez du climat méditerranéen idéal et des aides départementales.',
  keywords: [
    'panneaux solaires Alpes-Maritimes',
    'installation solaire 06',
    'énergie solaire Nice',
    'aide installation solaire 06',
    'photovoltaïque Côte d\'Azur',
  ],
};

const departementData = {
  name: 'Alpes-Maritimes',
  code: '06',
  heroImage: '/images/regions/06-alpes-maritimes.webp',
  ensoleillement: '2850 heures/an',
  potentielSolaire: '1600 kWh/m²/an',
  stats: [
    {
      value: '2850',
      label: 'Heures d\'ensoleillement par an',
      description: 'Un des meilleurs taux de France'
    },
    {
      value: '1600',
      label: 'kWh/m²/an',
      description: 'Potentiel solaire exceptionnel'
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
      description: 'Les Alpes-Maritimes bénéficient d\'un ensoleillement exceptionnel toute l\'année.'
    },
    {
      title: 'Aides Départementales',
      description: 'Le département propose des aides attractives pour la transition énergétique.'
    },
    {
      title: 'Expertise Côte d\'Azur',
      description: 'Notre équipe connaît parfaitement les spécificités du territoire azuréen.'
    }
  ],
  faqs: [
    {
      question: 'Pourquoi installer des panneaux solaires dans les Alpes-Maritimes ?',
      answer: 'Les Alpes-Maritimes bénéficient d\'un des meilleurs taux d\'ensoleillement de France avec 2850 heures par an. Le climat méditerranéen est idéal pour optimiser la production d\'énergie solaire.'
    },
    {
      question: 'Les panneaux résistent-ils au climat méditerranéen ?',
      answer: 'Oui, nos panneaux sont parfaitement adaptés au climat méditerranéen. Ils sont conçus pour résister à la chaleur, au sel marin et aux conditions climatiques locales.'
    },
    {
      question: 'Quelles sont les aides disponibles dans le 06 ?',
      answer: 'Le département des Alpes-Maritimes propose des aides spécifiques pour l\'installation de panneaux solaires, en complément des aides nationales comme MaPrimeRénov\'.'
    }
  ]
};

export default function AlpesMaritimesPage() {
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
