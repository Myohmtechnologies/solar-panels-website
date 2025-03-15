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
  const sunshineHours = cityData.sunshineHours || 2800;
  
  return {
    title: `Installation Panneaux Solaires à ${cityName} ☀️ | Prix, Aides, Devis Gratuit`,
    description: `Installation de panneaux solaires à ${cityName} à partir de 7890€. Profitez de ${sunshineHours}h d'ensoleillement/an dans le ${department}. Certification RGE, économisez jusqu'à 870€/an grâce aux aides de l'État. Devis gratuit et sans engagement.`,
    keywords: cityData.keywords || [
      `panneaux solaires ${cityName}`,
      `installation photovoltaïque ${cityName}`,
      `énergie solaire ${region}`,
      `installateur RGE ${cityName}`,
      `prix panneaux solaires ${cityName}`,
      `devis gratuit solaire ${cityName}`,
      `autoconsommation solaire ${department}`,
      `économies énergie ${cityName}`,
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
