import { alpesDeHauteProvence } from '@/app/data/departments/04-alpes-de-haute-provence';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPageContent from './CityPageContent';

interface Props {
  params: {
    ville: string;
  };
}

export default function VillePage({ params }: Props) {
  const cityData = alpesDeHauteProvence.cities[params.ville];

  if (!cityData) {
    notFound();
  }

  return <CityPageContent cityData={cityData} departmentName={alpesDeHauteProvence.name} />;
}

export function generateStaticParams() {
  return Object.keys(alpesDeHauteProvence.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cityData = alpesDeHauteProvence.cities[params.ville];
  
  if (!cityData) {
    return {};
  }

  return {
    title: cityData.seoTitle,
    description: cityData.seoDescription,
    keywords: cityData.seoKeywords,
  };
}
