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
  
  // Personnalisation par département
  let departmentSpecific = "";
  if (department === "Var") {
    departmentSpecific = "climat méditerranéen idéal";
  } else if (department === "Alpes-Maritimes") {
    departmentSpecific = "Côte d'Azur ensoleillée";
  } else if (department === "Bouches-du-Rhône") {
    departmentSpecific = "région la plus ensoleillée de France";
  } else if (department === "Vaucluse") {
    departmentSpecific = "patrimoine provençal unique";
  } else if (department === "Alpes-de-Haute-Provence") {
    departmentSpecific = "paysages alpins ensoleillés";
  } else if (department === "Hautes-Alpes") {
    departmentSpecific = "ensoleillement exceptionnel en altitude";
  } else {
    departmentSpecific = "région PACA ensoleillée";
  }
  
  // Variations de titres pour A/B testing
  const titleVariations = [
    `Installation Panneaux Solaires à ${cityName} ✓ Certifié RGE`,
    `Panneaux Solaires ${cityName} : Installateur RGE 2025 ☀️`,
    `Installateur Panneaux Solaires à ${cityName} | Économies Garanties`
  ];
  
  // Sélection d'une variation (basée sur le jour du mois)
  const dayOfMonth = new Date().getDate();
  const selectedTitleIndex = dayOfMonth % titleVariations.length;
  
  return {
    title: titleVariations[selectedTitleIndex],
    description: cityData.description || `Expert en panneaux solaires à ${cityName}. Profitez du ${departmentSpecific} avec ${sunshineHours}h d'ensoleillement/an. Certification RGE, garantie décennale. Économisez jusqu'à 50% sur vos factures ! Devis gratuit et sans engagement.`,
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
