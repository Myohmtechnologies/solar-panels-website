import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import var83 from '@/app/data/departments/83-var';
import CityPageContent from './CityPageContent';

interface Props {
  params: {
    ville: string;
  };
}

// Pas de conversion, utilise directement la clé
const slugToCityKey = (slug: string): string => slug;

// Fonction pour obtenir le code postal à partir du nom de la ville
const getCityPostalCode = (cityName: string): string => {
  // Codes postaux pour les principales villes du Var
  const postalCodes: Record<string, string> = {
    'Toulon': '83000',
    'Draguignan': '83300',
    'Fréjus': '83600',
    'Hyères': '83400',
    'La Seyne-sur-Mer': '83500',
    'Saint-Raphaël': '83700',
    'Saint-Tropez': '83990',
    'Brignoles': '83170',
    'Six-Fours-les-Plages': '83140'
  };
  
  return postalCodes[cityName] || '83'; // Retourne le code postal ou '83' par défaut
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const villeSlug = params.ville;
  const cityKey = slugToCityKey(villeSlug) as keyof typeof var83.cities;
  const cityData = var83.cities[cityKey];

  if (!cityData) {
    notFound();
  }
  
  // Obtenir le code postal pour cette ville
  const postalCode = getCityPostalCode(cityData.name);
  
  // Prix moyen d'une installation (valeurs à titre d'exemple)
  const priceRange = {

    max: 7890,
    afterAid: 870
  };

  return {
    title: `Installation Panneaux Solaires à ${cityData.name} ☀️ | Prix, Aides, Devis Gratuit`,
    description: `Installation de panneaux solaires à ${cityData.name} à partir de 7890€. Pack Essentiel 3kWc: ${priceRange.max}€, après aides de l'état: ${priceRange.afterAid}€/an d'économies. Profitez de 2800h d'ensoleillement/an dans le Var. Devis gratuit.`,
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
      `solaire ${postalCode}`,
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
