import bouchesdurhone from '@/app/data/departments/13-bouches-du-rhone';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPageContent from '@/components/CityPageContent';

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

  return {
    title: cityData.seoTitle || `Entreprise en Installation de Panneaux Solaires ${cityData.name} | Installateurs Photovoltaïques RGE`,
    description: cityData.seoDescription || `Expert en installation de panneaux solaires à ${cityData.name}. Profitez d'un service premium, certifié RGE, et d'une garantie décennale. Devis gratuit et personnalisé.`,
    keywords: cityData.seoKeywords || [`panneaux solaires ${cityData.name}`, `installation photovoltaïque ${cityData.name}`, `installateur de panneaux photovoltaïques ${cityData.name}`,'énergie solaire Provence', 'MyOhm Technologies', `Installateurs Photovoltaïques RGE a ${cityData.name}`,`Entreprise Spécialisée en Installation de Panneaux Solaires à ${cityData.name}`]
  };
}
