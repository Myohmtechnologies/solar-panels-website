'use client';

import CityHero from '@/components/sections/CityHero';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import CityRegulations from '@/components/sections/CityRegulations';
import ContactCTASection from '@/components/sections/ContactCTASection';
import ElectricityPriceChart from '@/components/ElectricityPriceChart';
import SolarSimulator from '@/components/sections/SolarSimulator';
import CityFAQ from '@/components/sections/CityFAQ';
import { CheckIcon } from '@heroicons/react/24/outline';
import { BuildingLibraryIcon, DocumentCheckIcon, ShieldCheckIcon, MapPinIcon } from '@heroicons/react/24/outline';
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
        sunshineHours={cityData.sunshineHours || 2800}
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

      {/* Key Points Section */}
      {cityData.keyPoints && cityData.keyPoints.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pourquoi choisir {cityData.name} pour votre installation solaire ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityData.keyPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-lg text-gray-800">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
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

      {/* Reviews Section */}
      {cityData.reviews && cityData.reviews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Avis de nos clients à {cityData.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {cityData.reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-semibold text-gray-900">{review.author}</span>
                    <span className="ml-4 text-yellow-500">{"★".repeat(review.rating)}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  <div className="text-sm text-gray-500">
                    <p>{review.location}</p>
                    <p>{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solar Simulator Section */}
      <SolarSimulator cityName={cityData.name} />

      {/* FAQ Section */}
      {cityData.seo?.faqSchema && (
        <CityFAQ
          faqItems={cityData.seo.faqSchema}
          cityName={cityData.name}
        />
      )}

      {/* Contact CTA Section */}
      <ContactCTASection cityName={cityData.name} />
    </main>
  );
}
