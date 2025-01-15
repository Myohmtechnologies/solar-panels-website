import { Metadata } from 'next';
import RegionHero from '@/components/sections/RegionHero';
import RegionStats from '@/components/sections/RegionStats';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import RegionAids from '@/components/sections/RegionAids';
import RegionFAQ from '@/components/sections/RegionFAQ';
import ContactCTASection from '@/components/sections/ContactCTASection';
import LocalReviews from '@/components/sections/LocalReviews';
import CityActionButtons from '@/components/sections/CityActionButtons';
import PrixInstallation from '@/components/PrixInstallation';

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires Alpes-Maritimes (06) | My Ohm Technologies',
  description: 'Expert en installation de panneaux solaires dans les Alpes-Maritimes. Plus de 2800h d\'ensoleillement/an, installation certifiée RGE. Devis gratuit !',
  keywords: [
    'panneaux solaires Alpes-Maritimes',
    'installation solaire 06',
    'énergie solaire Nice',
    'aide installation solaire 06',
    'photovoltaïque Alpes-Maritimes',
  ],
};

const departementData = {
  name: 'Alpes-Maritimes',
  code: '06',
  region: {
    name: 'Alpes-Maritimes',
    code: '06',
    testimonials: [
      {
        name: 'Sophie Martin',
        city: 'Nice',
        rating: 5,
        text: 'Installation impeccable de nos panneaux solaires. L\'équipe a été très professionnelle et efficace. Nous sommes ravis des économies réalisées sur notre facture d\'électricité.',
        date: '2024-12-15'
      },
      {
        name: 'Jean Dupont',
        city: 'Cannes',
        rating: 5,
        text: 'Un grand merci à toute l\'équipe pour leur expertise et leurs conseils. Le suivi du projet a été parfait du début à la fin.',
        date: '2024-11-20'
      },
      {
        name: 'Marie Lambert',
        city: 'Antibes',
        rating: 5,
        text: 'Très satisfaite de mon installation solaire. Le rendement est même supérieur à ce qui était prévu. Je recommande vivement !',
        date: '2024-12-01'
      }
    ]
  },
  heroImage: '/images/regions/06-alpes-maritimes.webp',
  ensoleillement: '2800 heures/an',
  potentielSolaire: '1600 kWh/m²/an',
  stats: [
    {
      value: '2800',
      label: 'Heures d\'ensoleillement par an',
      description: 'Un des départements les plus ensoleillés de France'
    },
    {
      value: '1600',
      label: 'kWh/m²/an',
      description: 'Excellent potentiel solaire'
    },
    {
      value: '40%',
      label: 'D\'économies moyennes',
      description: 'Sur votre facture d\'électricité'
    }
  ],
  advantages: [
    {
      title: 'Climat Méditerranéen Idéal',
      description: 'Les Alpes-Maritimes bénéficient d\'un ensoleillement exceptionnel et d\'un climat méditerranéen parfait pour le solaire.'
    },
    {
      title: 'Aides Départementales',
      description: 'Profitez des aides spécifiques du département des Alpes-Maritimes pour votre installation solaire.'
    },
    {
      title: 'Expertise Locale',
      description: 'Notre équipe connaît parfaitement les spécificités du territoire et les réglementations locales.'
    }
  ],
  cities: [
    'Nice',
    'Cannes',
    'Antibes',
    'Cagnes-sur-Mer',
    'Saint-Laurent-du-Var',
    'Menton',
    'Grasse'
  ]
};

export default function AlpesMaritimesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CityActionButtons />
      <RegionHero
        title={`Installation Panneaux Solaires ${departementData.name} (${departementData.code})`}
        description="Profitez d'un ensoleillement exceptionnel et d'aides avantageuses pour votre installation solaire"
        image={departementData.heroImage}
      />

      <RegionStats
        title="Le Potentiel Solaire des Alpes-Maritimes"
        description="Les Alpes-Maritimes bénéficient d'un ensoleillement exceptionnel, idéal pour l'installation de panneaux solaires"
        stats={departementData.stats}
      />

      <RegionSolarInstallationSection
        title="Installation de Panneaux Solaires dans les Alpes-Maritimes"
        advantages={departementData.advantages}
      />

      <PrixInstallation />

      <RegionAids
        title="Les Aides Disponibles dans les Alpes-Maritimes"
        description="Découvrez toutes les aides disponibles pour votre projet solaire"
        region={departementData.region}
        advantages={[
          {
            title: 'MaPrimeRénov\'',
            description: 'Jusqu\'à 4000€ d\'aide pour l\'installation de panneaux solaires'
          },
          {
            title: 'Aides Régionales',
            description: 'La région PACA propose des aides spécifiques pour la transition énergétique'
          },
          {
            title: 'TVA Réduite',
            description: 'Bénéficiez d\'une TVA à 5,5% sur votre installation solaire'
          }
        ]}
      />

      <LocalReviews
        region={departementData.region}
      />

      <RegionFAQ
        title="Questions Fréquentes sur l'Installation Solaire dans les Alpes-Maritimes"
        faqs={[
          {
            question: "Quel est le coût moyen d'une installation solaire dans les Alpes-Maritimes ?",
            answer: "Le coût moyen d'une installation solaire dans les Alpes-Maritimes varie entre 8 000€ et 15 000€, selon la taille et le type d'installation. Avec les aides disponibles et l'excellent ensoleillement de la région, le retour sur investissement est généralement atteint en 6 à 8 ans."
          },
          {
            question: "Quelles sont les aides disponibles dans les Alpes-Maritimes ?",
            answer: "Dans les Alpes-Maritimes, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov' (jusqu'à 4000€), la prime à l'autoconsommation, les aides régionales PACA, et une TVA réduite à 5,5%. Notre équipe vous accompagne dans l'obtention de ces aides."
          },
          {
            question: "Combien de temps dure l'installation des panneaux solaires ?",
            answer: "L'installation des panneaux solaires prend généralement 1 à 2 jours pour une maison individuelle. Cependant, le processus complet, incluant les démarches administratives et le raccordement au réseau, peut prendre 2 à 3 mois."
          },
          {
            question: "Quelle est la durée de vie des panneaux solaires ?",
            answer: "Les panneaux solaires que nous installons ont une durée de vie moyenne de 25 à 30 ans, avec une garantie de performance de 25 ans. Leur rendement diminue très légèrement (environ 0,5%) chaque année."
          },
          {
            question: "L'orientation de mon toit est-elle adaptée aux panneaux solaires ?",
            answer: "Dans les Alpes-Maritimes, grâce à l'excellent ensoleillement, même une orientation non optimale peut donner de bons résultats. L'idéal est une orientation sud, mais les orientations sud-est et sud-ouest sont également très performantes. Nous réalisons une étude personnalisée pour évaluer le potentiel de votre toiture."
          }
        ]}
      />

      <ContactCTASection
        title="Prêt à Passer au Solaire ?"
        description="Nos experts sont là pour vous accompagner dans votre projet"
      />
    </main>
  );
}
