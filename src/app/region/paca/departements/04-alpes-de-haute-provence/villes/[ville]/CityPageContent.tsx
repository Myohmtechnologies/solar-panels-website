'use client';

import CityHero from '@/components/sections/CityHero';
import CitySolarAdvantages from '@/components/sections/CitySolarAdvantages';
import ContactCTASection from '@/components/sections/ContactCTASection';
import CityFAQ from '@/components/sections/CityFAQ';
import CityNeighborhoods from '@/components/sections/CityNeighborhoods';
import CityReviews from '@/components/sections/CityReviews';
import Breadcrumbs from '@/components/Breadcrumbs';
import SolarInstallationSchema from '@/components/SolarInstallationSchema';
import LocalStatistics from '@/components/sections/LocalStatistics';
import ElectricityPriceChart from '@/components/ElectricityPriceChart';
import { CheckIcon } from '@heroicons/react/24/outline';
import { BanknotesIcon, HomeIcon, DocumentCheckIcon, PhoneIcon } from '@heroicons/react/24/outline';

import { City } from '@/app/data/types';
import { useState } from 'react';

interface CityPageContentProps {
  cityData: City;
  departmentName: string;
}

export default function CityPageContent({ cityData, departmentName }: CityPageContentProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <SolarInstallationSchema
        cityName={cityData.name}
        cityCode={cityData.code}
        description={cityData.description || ''}
        reviews={cityData.reviews}
      />
      <main className="overflow-x-hidden">
        <Breadcrumbs
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'PACA', href: '/region/paca' },
            { label: 'Alpes-de-Haute-Provence', href: '/region/paca/departements/04-alpes-de-haute-provence' },
            { label: cityData.name, href: `/region/paca/departements/04-alpes-de-haute-provence/villes/${cityData.slug}` }
          ]}
        />
        <CityHero 
          cityName={cityData.name}
          departmentName={departmentName}
          description={cityData.description || `Découvrez le potentiel solaire de ${cityData.name}, une ville du département ${departmentName}`}
          population={cityData.population}
          sunshineHours={2750}
          heroImage={
            cityData.slug === 'cereste' 
              ? {
                  url: '/images/bg-ville-cereste.webp',
                  alt: 'Vue aérienne de Céreste'
                }
              : undefined
          }
        />
        
        {/* Local Statistics Section */}
        {cityData.localStatistics && (
          <LocalStatistics 
            statistics={cityData.localStatistics}
            cityName={cityData.name}
          />
        )}

        {/* Neighborhoods Section */}
        {cityData.neighborhoods && cityData.neighborhoods.length > 0 && (
          <CityNeighborhoods
            neighborhoods={cityData.neighborhoods}
            cityName={cityData.name}
          />
        )}
        
        {/* Solar Advantages Section */}
        {cityData.solarAdvantages && (
          <CitySolarAdvantages advantages={cityData.solarAdvantages} />
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
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center border-b-4 border-black/20 pb-4">
            Aides Financières de l'État pour Panneaux Solaires
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Prime à l'Autoconsommation */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-FFDF64/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                  <BanknotesIcon className="w-6 h-6 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">Prime à l'Autoconsommation</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  6 kWc : 1 140 €
                </li>
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  9 kWc : 1 710 €
                </li>
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  12 kWc : 2 280 €
                </li>
              </ul>
              <p className="text-sm text-black/70 italic border-l-4 border-FFDF64 pl-4 mt-4">
                Valable jusqu'au 31 octobre 2024
              </p>
            </div>

            {/* TVA Réduite */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-FFDF64/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">TVA Réduite</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  Taux réduit à 5,5%
                </li>
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  Applicable aux résidences principales
                </li>
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  Économies substantielles
                </li>
              </ul>
              <p className="text-sm text-black/70 italic border-l-4 border-FFDF64 pl-4 mt-4">
                Conditions selon résidence
              </p>
            </div>

            {/* Exonération Fiscale */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-FFDF64/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                  <DocumentCheckIcon className="w-6 h-6 text-black" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">Exonération Fiscale</h3>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  Exonération de taxe foncière
                </li>
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  Durée : 5 à 15 ans
                </li>
                <li className="text-black flex items-center">
                  <span className="mr-2 text-FFDF64 font-bold">•</span>
                  Selon collectivités locales
                </li>
              </ul>
              <p className="text-sm text-black/70 italic border-l-4 border-FFDF64 pl-4 mt-4">
                Avantage fiscal supplémentaire
              </p>
            </div>
          </div>
          {/* Bouton CTA Contacter un Spécialiste */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-4 px-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto space-x-3"
            >
              <PhoneIcon className="h-6 w-6" />
              <span>Contacter un Spécialiste pour vous accompagner</span>
            </button>
          </div>
        </section>

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

        {/* Reviews Section */}
        {cityData.reviews && cityData.reviews.length > 0 && (
          <CityReviews
            reviews={cityData.reviews}
            cityName={cityData.name}
          />
        )}

        {/* FAQ Section */}
        {cityData.faq && cityData.faq.length > 0 && (
          <CityFAQ faqItems={cityData.faq} cityName={cityData.name} />
        )}

        <ContactCTASection />
      </main>
    </>
  );
}
