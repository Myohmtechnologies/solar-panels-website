'use client';

import Image from 'next/image';
import { City } from '@/app/data/types';
import CityHero from '@/components/sections/CityHero';
import SolarBenefitsSection from '@/components/sections/SolarBenefitsSection';
import ContactCTASection from '@/components/sections/ContactCTASection';
import SolarSimulator from '@/components/sections/SolarSimulator';
import SolarPackagesSection from '@/components/sections/SolarPackagesSection';
import NeighboringCitiesSection from './sections/NeighboringCitiesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import SocialMediaSection from './sections/SocialMediaSection';
import InstallationsSection from './sections/InstallationsSection';
import { Department } from '@/app/data/types';

interface CityPageContentProps {
  cityData: City;
  departmentName: string;
  cities: Record<string, City>;
}

export default function CityPageContent({ cityData, departmentName, cities }: CityPageContentProps) {
  return (
    <main className="overflow-x-hidden">
      <CityHero 
        cityName={cityData.name}
        population={cityData.population}
        sunshineHours={cityData.sunshineHours}
        description={cityData.description}
      />

      <SolarBenefitsSection
        title="Pourquoi installer des panneaux solaires à {cityName} ?"
        cityName={cityData.name}
        advantages={cityData.solarAdvantages}
      />

      <SolarSimulator 
        cityName={cityData.name}
        sunshineHours={cityData.sunshineHours}
      />

      <InstallationsSection
        cityName={cityData.name}
        installation={cityData.installation}
      />

      <SolarPackagesSection />
      
      {/* Section des témoignages */}
      <TestimonialsSection 
        cityName={cityData.name}
        reviews={cityData.reviews}
      />
      
      {/* Section des villes voisines */}
      {cities && (
        <NeighboringCitiesSection 
          cities={Object.entries(cities)
            .filter(([slug]) => slug !== cityData.slug)
            .map(([slug, city]) => ({
              ...city,
              slug
            }))
            .slice(0, 3)} 
          departmentSlug={departmentName} 
        />
      )}
      
      {/* Section des réseaux sociaux */}
      <SocialMediaSection />
      
      <ContactCTASection />
    </main>
  );
}
