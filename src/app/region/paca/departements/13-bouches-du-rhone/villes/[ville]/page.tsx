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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof bouchesdurhone.cities;
  const cityData = bouchesdurhone.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return generateCityMetadata({
    cityName: cityData.name,
    department: "Bouches-du-Rhône",
    region: "PACA",
    sunshineHours: cityData.sunshineHours || 2850,
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
      `solaire ${cityData.code || '13'}`,
      'énergie solaire PACA'
    ]
  });
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
