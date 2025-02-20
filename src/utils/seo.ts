import { Metadata } from 'next';

interface CityData {
  name: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export function generateCityMetadata(cityData: CityData): Metadata {
  return {
    title: cityData.seoTitle || `Installation de Panneaux Solaires à ${cityData.name} | Prix , Aides, Devis Gratuit - Entreprise RGE`,
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
