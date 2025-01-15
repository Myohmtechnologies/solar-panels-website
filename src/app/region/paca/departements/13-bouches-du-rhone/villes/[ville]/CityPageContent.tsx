'use client';

import CityHero from '@/components/sections/CityHero';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import CityRegulations from '@/components/sections/CityRegulations';
import ContactCTASection from '@/components/sections/ContactCTASection';
import ElectricityPriceChart from '@/components/ElectricityPriceChart';
import SolarSimulator from '@/components/sections/SolarSimulator';
import CityRealisations from '@/components/CityRealisations';
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

      {/* Realisations Section */}
      {cityData.realisations && (
        <CityRealisations realisations={cityData.realisations} />
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

      {/* Simulateur Section */}
      <SolarSimulator 
        cityName={cityData.name}
        sunshineHours={cityData.sunshineHours || 2750}
        defaultOrientation="sud"
      />

      {/* Contact Section */}
      <ContactCTASection />
    </main>
  );
}
