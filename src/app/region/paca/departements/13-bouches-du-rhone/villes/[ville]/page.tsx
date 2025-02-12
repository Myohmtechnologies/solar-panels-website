import bouchesdurhone from '@/app/data/departments/13-bouches-du-rhone';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPageContent from '@/components/CityPageContent';
import { generateCityMetadata } from '@/utils/seo';

interface Props {
  params: {
    ville: string;
  };
}

export default function VillePage({ params }: Props) {
  const cityData = bouchesdurhone.cities[params.ville];

  if (!cityData) {
    notFound();
  }

  return (
    <CityPageContent 
      cityData={{
        ...cityData,
        slug: params.ville
      }}
      departmentName="13-bouches-du-rhone"
      cities={bouchesdurhone.cities}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(bouchesdurhone.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cityData = bouchesdurhone.cities[params.ville];
  
  if (!cityData) {
    return {
      title: 'Ville non trouvée',
      description: 'Cette ville n\'existe pas dans notre base de données.'
    };
  }

  return generateCityMetadata(cityData);
}
