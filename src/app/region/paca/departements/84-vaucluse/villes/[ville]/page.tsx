import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateCityMetadata } from '@/utils/seo';
import vaucluse from '@/app/data/departments/84-vaucluse';
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
  const cityKey = slugToCityKey(villeSlug) as keyof typeof vaucluse.cities;
  const cityData = vaucluse.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return generateCityMetadata({
    cityName: cityData.name,
    department: "Vaucluse",
    region: "PACA",
    sunshineHours: cityData.sunshineHours || 2750,
    description: `Installation de panneaux solaires à ${cityData.name}. Profitez d'une expertise locale et d'un service personnalisé pour votre transition énergétique dans le Vaucluse.`,
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
      'solaire Vaucluse',
      'énergie solaire PACA'
    ]
  });
}

export default function CityPage({ params }: Props) {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof vaucluse.cities;
  const cityData = vaucluse.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return <CityPageContent ville={villeSlug} cityData={cityData} />;
}

export function generateStaticParams() {
  return Object.keys(vaucluse.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}
