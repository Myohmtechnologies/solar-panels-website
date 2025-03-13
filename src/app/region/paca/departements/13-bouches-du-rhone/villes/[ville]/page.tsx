import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateCityMetadata } from '@/utils/seo';
import bouchesdurhone from '@/app/data/departments/13-bouches-du-rhone';
import CityPageContent from './CityPageContent';

interface Props {
  params: {
    ville: string;
  };
}

const slugToCityKey = (slug: string): string => {
  // On retourne le slug tel quel car les clés sont déjà en kebab-case
  console.log('Input slug:', slug);
  console.log('Available city keys:', Object.keys(bouchesdurhone.cities));
  return slug;
};

// Fonction pour obtenir le code postal à partir du nom de la ville
const getCityPostalCode = (cityName: string): string => {
  // Codes postaux pour les principales villes des Bouches-du-Rhône
  const postalCodes: Record<string, string> = {
    'Marseille': '13000',
    'Aix-en-Provence': '13100',
    'Martigues': '13500',
    'Aubagne': '13400',
    'Salon-de-Provence': '13300',
    'Arles': '13200',
    'Istres': '13800',
    'Vitrolles': '13127',
    'La Ciotat': '13600'
  };
  
  return postalCodes[cityName] || '13'; // Retourne le code postal ou '13' par défaut
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof bouchesdurhone.cities;
  const cityData = bouchesdurhone.cities[cityKey];

  if (!cityData) {
    notFound();
  }
  
  // Prix moyen d'une installation (valeurs à titre d'exemple)
  const priceRange = {
    max: 7890,
    afterAid: 870
  };

  return {
    title: `Installation Panneaux Solaires à ${cityData.name} ☀️ | Prix, Aides, Devis Gratuit`,
    description: `Installation de panneaux solaires à ${cityData.name} à partir de 7890€. Pack Essentiel 3kWc: ${priceRange.max}€, après aides de l'état: ${priceRange.afterAid}€/an d'économies. Profitez de 2850h d'ensoleillement/an dans les Bouches-du-Rhône. Devis gratuit.`,
    keywords: [
      `panneaux solaires ${cityData.name}`,
      `installation solaire ${cityData.name}`,
      `énergie solaire ${cityData.name}`,
      `photovoltaïque ${cityData.name}`,
      'autoconsommation solaire',
      'installation panneaux solaires',
      'devis panneaux solaires',
      'aide installation solaire',
      'prix panneaux solaires',
      `solaire ${getCityPostalCode(cityData.name)}`,
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
  const cityKey = slugToCityKey(villeSlug) as keyof typeof bouchesdurhone.cities;
  const cityData = bouchesdurhone.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return <CityPageContent ville={villeSlug} cityData={cityData} />;
}

export function generateStaticParams() {
  return Object.keys(bouchesdurhone.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}
