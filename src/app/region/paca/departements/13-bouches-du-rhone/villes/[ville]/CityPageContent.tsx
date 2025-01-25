'use client';

import CityHero from '@/components/sections/CityHero';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import CityRegulations from '@/components/sections/CityRegulations';
import ContactCTASection from '@/components/sections/ContactCTASection';
import ElectricityPriceChart from '@/components/ElectricityPriceChart';
import SolarSimulator from '@/components/sections/SolarSimulator';
import { CheckIcon } from '@heroicons/react/24/outline';
import { BuildingLibraryIcon, DocumentCheckIcon, ShieldCheckIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { City } from '@/types';

interface CityPageContentProps {
  cityData: City;
  departmentName: string;
}

export default function CityPageContent({ cityData, departmentName }: CityPageContentProps) {
  return (
    <main className="overflow-x-hidden">
      <CityHero 
        cityName={cityData.name}
        departmentName={departmentName}
        description={cityData.description || `Découvrez le potentiel solaire de ${cityData.name}, une ville du département ${departmentName}`}
        population={cityData.population}
        sunshineHours={cityData.sunshineHours || 2750}
        heroImage={cityData.heroImage}
      />
      
      {/* Solar Advantages Section */}
      {cityData.solarAdvantages && (
        <CitySolarAdvantages advantages={cityData.solarAdvantages} />
      )}

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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Évolution du prix de l'électricité à {cityData.name}
          </h2>
          <ElectricityPriceChart />
        </div>
      </section>

      {/* Solar Simulator Section */}
      <SolarSimulator cityName={cityData.name} />

      {/* Contact CTA Section */}
      <ContactCTASection cityName={cityData.name} />
    </main>
  );
}
