import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateCityMetadata } from '@/utils/seo';
import hautesAlpes from '@/app/data/departments/05-hautes-alpes';
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
  const cityKey = slugToCityKey(villeSlug) as keyof typeof hautesAlpes.cities;
  const cityData = hautesAlpes.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return generateCityMetadata({
    cityName: cityData.name,
    department: "Hautes-Alpes",
    region: "PACA",
    sunshineHours: cityData.sunshineHours || 2700,
    keywords: [
      `panneaux solaires ${cityData.name}`,
      `installation solaire ${cityData.name}`,
      `énergie solaire ${cityData.name}`,
      `photovoltaïque ${cityData.name}`,
      'autoconsommation solaire',
      'installation panneaux solaires',
      'devis gratuit solaire',
      'aide installation solaire',
      'prix panneaux solaires',
      'solaire montagne',
      'énergie solaire PACA'
    ]
  });
}

export default function CityPage({ params }: Props) {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof hautesAlpes.cities;
  const cityData = hautesAlpes.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return <CityPageContent ville={villeSlug} cityData={cityData} />;
}

export function generateStaticParams() {
  return Object.keys(hautesAlpes.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}
