import { Metadata } from 'next';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-de-Haute-Provence (04) | My Ohm Technologies',
  description: 'Découvrez nos solutions d\'installation de panneaux solaires dans les Alpes-de-Haute-Provence. Profitez d\'un ensoleillement exceptionnel et des aides départementales.',
  keywords: [
    'panneaux solaires Alpes-de-Haute-Provence',
    'installation solaire 04',
    'énergie solaire Digne-les-Bains',
    'aide installation solaire 04',
    'photovoltaïque Alpes-de-Haute-Provence',
  ],
};

const departementData = {
  name: 'Alpes-de-Haute-Provence',
  code: '04',
  heroImage: '/images/regions/alpes-de-haute-provence-hero.webp',
  ensoleillement: '2750 heures/an',
  potentielSolaire: '1580 kWh/m²/an',
  stats: [
    {
      value: '2750',
      label: 'Heures d\'ensoleillement par an',
      description: 'Un des départements les plus ensoleillés'
    },
    {
      value: '1580',
      label: 'kWh/m²/an',
      description: 'Excellent potentiel solaire'
    },
    {
      value: '35%',
      label: 'D\'économies moyennes',
      description: 'Sur votre facture d\'électricité'
    }
  ],
  advantages: [
    {
      title: 'Climat Alpin Ensoleillé',
      description: 'Les Alpes-de-Haute-Provence bénéficient d\'un ensoleillement exceptionnel, idéal pour le solaire.'
    },
    {
      title: 'Aides Départementales',
      description: 'Profitez des aides spécifiques du département en plus des aides nationales.'
    },
    {
      title: 'Expertise Locale',
      description: 'Notre équipe connaît parfaitement le territoire et ses spécificités.'
    }
  ],
  faqs: [
    {
      question: 'Pourquoi installer des panneaux solaires dans les Alpes-de-Haute-Provence ?',
      answer: 'Les Alpes-de-Haute-Provence bénéficient d\'un ensoleillement exceptionnel de 2750 heures par an, ce qui en fait un département idéal pour l\'installation de panneaux solaires. L\'altitude et le climat sec favorisent également une production optimale.'
    },
    {
      question: 'Quelles sont les aides disponibles dans le 04 ?',
      answer: 'Le département propose des aides spécifiques pour l\'installation de panneaux solaires, en complément des aides nationales comme MaPrimeRénov\'. Contactez-nous pour une estimation personnalisée.'
    },
    {
      question: 'Les panneaux solaires sont-ils adaptés au climat montagnard ?',
      answer: 'Oui, les panneaux solaires modernes sont parfaitement adaptés au climat montagnard. Ils sont conçus pour résister aux conditions climatiques extrêmes et peuvent même être plus efficaces en altitude grâce à un air plus pur et des températures plus fraîches.'
    }
  ]
};

export default function AlpesDeHauteProvencePage() {
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
