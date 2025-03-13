import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateCityMetadata } from '@/utils/seo';
import alpesMaritimes from '@/app/data/departments/06-alpes-maritimes';
import CityPageContent from './CityPageContent';

interface Props {
  params: {
    ville: string;
  };
}

const slugToCityKey = (slug: string): string => {
  // Convertit les slugs en camelCase pour correspondre aux clés des villes
  return slug
    .split('-')
    .map((word, index) => 
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof alpesMaritimes.cities;
  const cityData = alpesMaritimes.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  // Obtenir le prix moyen de l'électricité (valeur fictive pour l'exemple)
  const electricityPrice = "0,25";

  return {
    title: `Installation de Panneaux Solaires à ${cityData.name} ☀️ | Prix, Aides, Devis Gratuit`,
    description: `Installez des panneaux solaires à ${cityData.name} et économisez jusqu'à 70% sur vos factures. Prix moyen de l'électricité à ${cityData.name}: ${electricityPrice}€/kWh. Profitez de 2900h d'ensoleillement/an sur la Côte d'Azur. Devis gratuit et sans engagement.`,
    keywords: [
      `panneaux solaires ${cityData.name}`,
      `installation  solaires ${cityData.name}`,
      `énergie solaire ${cityData.name}`,
      `photovoltaïque ${cityData.name}`,
      'autoconsommation solaire',
      'installation panneaux solaires',
      'devis panneaux solaires',
      'aide installation solaire',
      'prix panneaux solaires',
      'solaire Côte d\'Azur',
      'énergie solaire PACA'
    ],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true
      }
    }
  };
}

export default function CityPage({ params }: Props) {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof alpesMaritimes.cities;
  const cityData = alpesMaritimes.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return <CityPageContent ville={villeSlug} cityData={cityData} />;
}

export function generateStaticParams() {
  return Object.keys(alpesMaritimes.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}
