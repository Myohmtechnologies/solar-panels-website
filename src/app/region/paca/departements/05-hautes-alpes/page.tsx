import { Metadata } from 'next';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import PrixInstallation from '@/components/PrixInstallation';
import TransactionalHero from '@/components/sections/TransactionalHero';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Hautes-Alpes (05) | My Ohm Technologies',
  description: 'Découvrez nos solutions d\'installation de panneaux solaires dans les Hautes-Alpes. Profitez d\'un ensoleillement optimal en altitude et des aides départementales.',
  keywords: [
    'panneaux solaires Hautes-Alpes',
    'installation solaire 05',
    'énergie solaire Gap',
    'aide installation solaire 05',
    'photovoltaïque Hautes-Alpes',
  ],
};

const departementData = {
  name: 'Hautes-Alpes',
  code: '05',
  heroImage: '/images/regions/hautes-alpes-hero.webp',
  ensoleillement: '2700 heures/an',
  potentielSolaire: '1550 kWh/m²/an',
  stats: [
    {
      value: '2700',
      label: 'Heures d\'ensoleillement par an',
      description: 'Ensoleillement exceptionnel en altitude'
    },
    {
      value: '1550',
      label: 'kWh/m²/an',
      description: 'Fort potentiel solaire montagnard'
    },
    {
      value: '40%',
      label: 'D\'économies moyennes',
      description: 'Sur votre facture d\'électricité'
    }
  ],
  advantages: [
    {
      title: 'Climat Montagnard Favorable',
      description: 'Les Hautes-Alpes bénéficient d\'un air pur et d\'un excellent taux d\'ensoleillement en altitude.'
    },
    {
      title: 'Aides Spécifiques Montagne',
      description: 'Des aides adaptées aux contraintes d\'installation en zone montagneuse.'
    },
    {
      title: 'Expertise Haute Montagne',
      description: 'Notre équipe est spécialisée dans les installations en conditions alpines.'
    }
  ],
  faqs: [
    {
      question: 'Les panneaux solaires sont-ils efficaces en haute montagne ?',
      answer: 'Oui, l\'altitude est même un avantage ! L\'air plus pur et les températures plus fraîches améliorent le rendement des panneaux solaires. De plus, la réverbération sur la neige peut augmenter la production.'
    },
    {
      question: 'Comment les panneaux résistent-ils à la neige ?',
      answer: 'Nos panneaux sont spécialement conçus pour supporter le poids de la neige et les conditions climatiques extrêmes. Leur inclinaison facilite également le glissement de la neige.'
    },
    {
      question: 'Quelles sont les aides spécifiques aux Hautes-Alpes ?',
      answer: 'Le département des Hautes-Alpes propose des aides adaptées aux contraintes d\'installation en zone montagneuse, en plus des aides nationales comme MaPrimeRénov\'.'
    }
  ]
};

export default function HautesAlpesPage() {
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
      <RegionSolarInstallationSection region={departementData.name} />
      <PrixInstallation />
      <RegionAids region={departementData.name} advantages={departementData.advantages} />
      <LocalReviews region={departementData.name} />
      <RegionFAQ faqs={departementData.faqs} />
      <ContactCTASection />
    </main>
  );
}
