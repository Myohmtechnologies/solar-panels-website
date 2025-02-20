import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateCityMetadata } from '@/utils/seo';
import var83 from '@/app/data/departments/83-var';
import CityPageContent from './CityPageContent';

interface Props {
  params: {
    ville: string;
  };
}

// Pas de conversion, utilise directement la clé
const slugToCityKey = (slug: string): string => slug;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof var83.cities;
  const cityData = var83.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return generateCityMetadata({
    cityName: cityData.name,
    department: "Var",
    region: "PACA",
    sunshineHours: cityData.sunshineHours || 2800,
    description: `Installation de panneaux solaires à ${cityData.name}. Profitez d'une expertise locale et d'un service personnalisé pour votre transition énergétique dans le Var.`,
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
      'solaire Var',
      'énergie solaire PACA'
    ]
  });
}

export default function CityPage({ params }: Props) {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof var83.cities;
  const cityData = var83.cities[cityKey];

  if (!cityData) {
    notFound();
  }

  return <CityPageContent ville={villeSlug} cityData={cityData} />;
}

export function generateStaticParams() {
  return Object.keys(var83.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}
