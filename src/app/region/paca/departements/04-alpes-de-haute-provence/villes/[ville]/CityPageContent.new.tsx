'use client';

import CityHero from '@/components/sections/CityHero';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import ContactCTASection from '@/components/sections/ContactCTASection';

interface CityData {
  name: string;
  code: string;
  population: number;
  description: string;
  advantages: {
    solar: string[];
  };
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

interface CityPageContentProps {
  cityData: CityData;
  departmentName: string;
}

export default function CityPageContent({ cityData, departmentName }: CityPageContentProps) {
  return (
    <main className="overflow-x-hidden">
      <CityHero 
        cityName={cityData.name}
        departmentName={departmentName}
        description={cityData.description}
        population={cityData.population}
        sunshineHours={2750}
      />
      <CitySolarAdvantages advantages={cityData.advantages.solar} />
      <ContactCTASection />
    </main>
  );
}
