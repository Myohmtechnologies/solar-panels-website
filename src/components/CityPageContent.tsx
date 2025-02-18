'use client';

import Image from 'next/image';
import { City, Department } from '@/types';
import CityHeroVideo from '@/components/sections/CityHeroVideo';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import ContactCTASection from '@/components/sections/ContactCTASection';
import CityFAQ from '@/components/sections/CityFAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import SolarInstallationSchema from '@/components/SolarInstallationSchema';
import LocalStatistics from '@/components/sections/LocalStatistics';
import SolarBenefitsSection from '@/components/sections/SolarBenefitsSection';
import ElectricityPriceChart from '@/components/ElectricityPriceChart';
import NearbyTownsSection from '@/components/sections/NearbyTownsSection';
import PrixInstallation from '@/components/PrixInstallation';
import { CheckIcon } from '@heroicons/react/24/outline';
import CityActionButtons from '@/components/sections/CityActionButtons';
import CityRegulations from '@/components/sections/CityRegulations';
import { BuildingLibraryIcon, DocumentCheckIcon, ShieldCheckIcon, MapPinIcon } from '@heroicons/react/24/outline';
import CitySeoContent from '@/components/sections/CitySeoContent';
import FinancialAids from '@/components/sections/FinancialAids';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import { useState, useEffect } from 'react';

interface CityPageContentProps {
  cityData: City;
  departmentName: string;
  cities: Record<string, City>;
}

export default function CityPageContent({ cityData, departmentName, cities }: CityPageContentProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();

    // Event listeners
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <main className="bg-white">
      <SolarInstallationSchema 
        cityName={cityData.name}
        cityCode={cityData.postalCode}
        description={cityData.description || `Installation de panneaux solaires à ${cityData.name}`}
        reviews={cityData.reviews}
      />
      <CityActionButtons />
      
      {/* Section Hero */}
      <CityHeroVideo 
        cityName={cityData.name}
        departmentName={departmentName}
        description={cityData.description || `Découvrez le potentiel solaire de ${cityData.name}, une ville du département ${departmentName}`}
        population={cityData.population}
        sunshineHours={cityData.sunshineHours || 2750}
        heroImage={cityData.heroImage}
      />

     

      {/* Section Bénéfices Solaires */}
      <SolarBenefitsSection
        title={`Pourquoi installer des panneaux solaires à ${cityData.name} ?`}
        cityName={cityData.name}
        advantages={cityData.solarAdvantages}
      />

      {/* Section Prix des Installations */}
      <PrixInstallation cityName={cityData.name} />

      {/* Regulations Section */}
      {cityData.regulations && (
        <CityRegulations 
          cityName={cityData.name}
          regulations={cityData.regulations.map(reg => ({
            ...reg,
            icon: {
              'BuildingLibraryIcon': <BuildingLibraryIcon className="w-6 h-6 text-yellow-600" />,
              'DocumentCheckIcon': <DocumentCheckIcon className="w-6 h-6 text-yellow-600" />,
              'ShieldCheckIcon': <ShieldCheckIcon className="w-6 h-6 text-yellow-600" />,
              'MapPinIcon': <MapPinIcon className="w-6 h-6 text-yellow-600" />
            }[reg.icon]
          }))}
        />
      )}

      {/* Electricity Price Chart Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-black">
                Pourquoi investir dans le solaire maintenant ?
              </h2>
              <p className="text-black/70">
                Le prix de l'électricité ne cesse d'augmenter en France.
                Investir dans des panneaux solaires aujourd'hui vous permet de :
              </p>
              <ul className="space-y-3 text-black/80">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  Réduire votre facture énergétique
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  Protéger contre la hausse des prix
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  Valoriser votre patrimoine
                </li>
              </ul>
            </div>
            <ElectricityPriceChart />
          </div>
        </div>
      </section>

      {/* Section Aides Financières */}
      <FinancialAids cityName={cityData.name} />

      {/* Section Témoignages */}
      <ClientTestimonialsSection 
        cityName={cityData.name}
        reviews={cityData.reviews}
      />

      {/* Section Réalisations */}
      <RegionSolarInstallationSection
        cityName={cityData.name}
        installations={cityData.installation}
      />

      {/* Section FAQ */}
      {(cityData.seo?.faqSchema || cityData.faq) && (
        <CityFAQ 
          faqItems={cityData.seo?.faqSchema || cityData.faq || []} 
          cityName={cityData.name} 
        />
      )}

      {/* Section SEO Content */}
      <CitySeoContent 
        cityName={cityData.name}
        seoContent={cityData.seoContent}
      />

      {/* Section Contact */}
      <ContactCTASection />

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
      <NearbyTownsSection
        currentCity={cityData.slug}
        cities={cities}
        departmentSlug={departmentName}
      />
    </main>
  );
}
