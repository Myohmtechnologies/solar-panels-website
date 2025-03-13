import { Metadata } from 'next';

interface CityData {
  cityName: string;
  department: string;
  region: string;
  sunshineHours?: number;
  description?: string;
  keywords?: string[];
}

export function generateCityMetadata(cityData: CityData): Metadata {
  const cityName = cityData.cityName;
  const department = cityData.department;
  const region = cityData.region;

  return {
    title: `Installation Panneaux Solaires à ${cityName} | Prix, Aides, Devis Gratuit`,
    description: cityData.description || `Expert en installation de panneaux solaires à ${cityName}. Maximisez votre autoconsommation et rentabilité énergétique. Profitez d'un service premium, certifié RGE, et d'une garantie décennale. Devis gratuit et personnalisé.`,
    keywords: cityData.keywords || [
      `panneaux solaires ${cityName}`,
      `installation photovoltaïque ${cityName}`,
      `énergie solaire ${region}`,
      'MyOhm Technologies'
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
