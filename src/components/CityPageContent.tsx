'use client';

import Image from 'next/image';
import { City } from '@/app/data/types';
import CityHero from '@/components/sections/CityHero';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import ContactCTASection from '@/components/sections/ContactCTASection';
import CityFAQ from '@/components/sections/CityFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import SolarInstallationSchema from '@/components/SolarInstallationSchema';
import LocalStatistics from '@/components/sections/LocalStatistics';
import TestimonialsSection from './sections/TestimonialsSection';
import SocialMediaSection from './sections/SocialMediaSection';
import InstallationsSection from './sections/InstallationsSection';
import FinancialAidsSection from './sections/FinancialAidsSection';
import SolarBenefitsSection from './sections/SolarBenefitsSection';
import SolarSimulator from './sections/SolarSimulator';
import { Department } from '@/app/data/types';

interface CityPageContentProps {
  cityData: City;
  departmentName: string;
  cities: Record<string, City>;
}

export default function CityPageContent({ cityData, departmentName, cities }: CityPageContentProps) {
  return (
    <main className="bg-white">
      {/* Section Hero */}
      <CityHero 
        cityName={cityData.name}
        departmentName={departmentName}
        description={cityData.description || `Découvrez le potentiel solaire de ${cityData.name}, une ville du département ${departmentName}`}
        population={cityData.population}
        sunshineHours={2750}
        heroImage={cityData.heroImage}
      />

      {/* Section Bénéfices Solaires */}
      <SolarBenefitsSection
        title={`Pourquoi installer des panneaux solaires à ${cityData.name} ?`}
        cityName={cityData.name}
        advantages={cityData.solarAdvantages}
      />

      {/* Simulateur d'économies solaires */}
      <SolarSimulator 
        cityName={cityData.name}
        sunshineHours={cityData.sunshineHours}
      />

      {/* Section Aides Financières */}
      <FinancialAidsSection cityName={cityData.name} />

      {/* Section Témoignages */}
      <TestimonialsSection 
        cityName={cityData.name}
        reviews={cityData.reviews}
      />

      {/* Section Installations */}
      <InstallationsSection
        cityName={cityData.name}
        installation={cityData.installation}
      />

      {/* Section FAQ */}
      {cityData.faq && cityData.faq.length > 0 && (
        <CityFAQ faqItems={cityData.faq} cityName={cityData.name} />
      )}
      {/* Section Statistiques */}
      {cityData.localStatistics && (
        <LocalStatistics 
          statistics={cityData.localStatistics}
          cityName={cityData.name}
        />
      )}

      {/* Section Avantages */}
      {cityData.solarAdvantages && (
        <CitySolarAdvantages advantages={cityData.solarAdvantages} />
      )}

      {/* Section Réseaux Sociaux */}
      <SocialMediaSection />

      {/* Section CTA Contact */}
      <ContactCTASection />
    </main>
  );
}
