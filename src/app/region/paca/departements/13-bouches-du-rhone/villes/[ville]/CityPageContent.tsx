'use client';

import CityHero from '@/components/sections/CityHero';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import ContactCTASection from '@/components/sections/ContactCTASection';
import SolarSimulator from '@/components/sections/SolarSimulator';
import { City } from '@/app/data/types';

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
        sunshineHours={2750}
      />
      
      {/* Solar Advantages Section */}
      {cityData.solarAdvantages && (
        <CitySolarAdvantages advantages={cityData.solarAdvantages} />
      )}

      {/* Simulateur Section */}
      <SolarSimulator 
        cityName={cityData.name}
        sunshineHours={cityData.sunshineHours || 2750}
        defaultOrientation="sud"
      />

      {/* Technical Specifications Section */}
      {cityData.technicalSpecs && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Spécifications Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Rendement Moyen</h3>
                <p>{cityData.technicalSpecs.averageYield}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Angle Optimal</h3>
                <p>{cityData.technicalSpecs.optimalAngle}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Charge de Neige</h3>
                <p>{cityData.technicalSpecs.snowLoad}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Résistance au Vent</h3>
                <p>{cityData.technicalSpecs.windResistance}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Incentives Section */}
      {cityData.localIncentives && cityData.localIncentives.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Aides Locales</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cityData.localIncentives.map((incentive, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {incentive}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Key Points Section */}
      {cityData.keyPoints && cityData.keyPoints.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Points Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.keyPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <p className="text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTASection />
    </main>
  );
}