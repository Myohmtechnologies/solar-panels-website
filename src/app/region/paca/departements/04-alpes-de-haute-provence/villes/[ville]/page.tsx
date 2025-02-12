import alpesDeHauteProvence from '@/app/data/departments/04-alpes-de-haute-provence';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPageContent from '@/components/CityPageContent';

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

  return (
    <CityPageContent 
      cityData={{
        ...cityData,
        slug: params.ville
      }}
      departmentName="04-alpes-de-haute-provence"
      cities={alpesDeHauteProvence.cities}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(alpesDeHauteProvence.cities).map((citySlug) => ({
    ville: citySlug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cityData = alpesDeHauteProvence.cities[params.ville];
  
  if (!cityData) {
    return {
      title: 'Ville non trouvée',
      description: 'Cette ville n\'existe pas dans notre base de données.'
    };
  }

  return {
    title: cityData.seoTitle || `Installation Panneaux Solaires ${cityData.name} | Expert Photovoltaïque`,
    description: cityData.seoDescription || `Expert en installation de panneaux solaires à ${cityData.name}. Profitez d'un service premium, certifié RGE, et d'une garantie décennale. Devis gratuit et personnalisé.`,
    keywords: cityData.seoKeywords || [`panneaux solaires ${cityData.name}`, `installation photovoltaïque ${cityData.name}`, 'énergie solaire Provence', 'MyOhm Technologies'],
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
