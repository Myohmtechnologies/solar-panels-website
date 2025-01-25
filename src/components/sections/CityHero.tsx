'use client';

import { useState } from 'react';
import { MapPinIcon, UserIcon, ChartBarIcon, PhoneIcon, CalculatorIcon, SunIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import ContactModal from '../modals/ContactModal';

interface CityHeroProps {
  cityName: string;
  departmentName: string;
  population: number;
  sunshineHours?: number;
  description?: string;
  heroImage?: {
    url: string;
    alt: string;
  };
}

export default function CityHero({ cityName, departmentName, description, population, sunshineHours, heroImage }: CityHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSimulator = () => {
    const simulator = document.querySelector('#simulator-section');
    if (simulator) {
      simulator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section data-section="city-hero" className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background with gradient and optional hero image */}
        <div className="absolute inset-0">
          {heroImage ? (
            <>
              <div className="absolute inset-0">
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </>
          ) : (
            <div className="bg-gradient-to-br from-white to-ffeb99/20" />
          )}
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            {/* Prix Flash Banner */}
            <div className="bg-red-600 text-white py-2 px-4 rounded-full inline-block mb-6 animate-pulse">
              <span className="font-semibold">🔥 Prix Flash -10% jusqu'au 31/01</span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${heroImage ? 'text-white' : 'text-black'} mb-4`}>
              Installation Panneaux Solaires<br className="hidden sm:block" /> à {cityName}
            </h1>

            <p className={`text-lg md:text-xl ${heroImage ? 'text-white' : 'text-black/80'} font-medium mb-6`}>
              Économisez jusqu'à 70% sur vos factures d'électricité
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className={`flex flex-col items-center p-3 rounded-lg ${heroImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-ffeb99/10'}`}>
                <MapPinIcon className={`w-6 h-6 ${heroImage ? 'text-ffeb99' : 'text-ffb700'} mb-1`} />
                <span className={`text-sm md:text-base ${heroImage ? 'text-white' : 'text-black'}`}>{population.toLocaleString()} habitants</span>
              </div>
              {sunshineHours && (
                <div className={`flex flex-col items-center p-3 rounded-lg ${heroImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-ffeb99/10'}`}>
                  <SunIcon className={`w-6 h-6 ${heroImage ? 'text-ffeb99' : 'text-ffb700'} mb-1`} />
                  <span className={`text-sm md:text-base ${heroImage ? 'text-white' : 'text-black'}`}>{sunshineHours}h soleil/an</span>
                </div>
              )}
              <div className={`flex flex-col items-center p-3 rounded-lg ${heroImage ? 'bg-white/10 backdrop-blur-sm' : 'bg-ffeb99/10'}`}>
                <CalculatorIcon className={`w-6 h-6 ${heroImage ? 'text-ffeb99' : 'text-ffb700'} mb-1`} />
                <span className={`text-sm md:text-base ${heroImage ? 'text-white' : 'text-black'}`}>Devis gratuit</span>
              </div>
            </div>

            {description && (
              <p className={`text-base md:text-lg ${heroImage ? 'text-white/90' : 'text-black/80'} max-w-3xl mx-auto mb-8 hidden md:block`}>
                {description}
              </p>
            )}

            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center space-x-2 shine-effect text-black font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                <UserIcon className="w-5 h-5" />
                <span>Obtenir un devis gratuit</span>
              </button>

              <button
                onClick={scrollToSimulator}
                className="flex items-center justify-center space-x-2 bg-[#10618F] text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                <ChartBarIcon className="w-5 h-5" />
                <span>Simuler vos Économie </span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Image src="/images/rge1.png" alt="Certification RGE" width={60} height={60} className="" />
              <Image src="/images/qualipv1.png" alt="Certification QualiPV" width={60} height={60} className="" />
              <Image src="/images/garantie-decennale-p2a-construction.webp" alt="Partenaire SolarEdge" width={60} height={60} className="" />
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityName={cityName}
      />
    </>
  );
}
