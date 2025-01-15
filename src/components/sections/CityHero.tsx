'use client';

import { useState } from 'react';
import { MapPinIcon, UserIcon, ChartBarIcon } from '@heroicons/react/24/outline';
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
      <section data-section="city-hero" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
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
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </>
          ) : (
            <div className="bg-gradient-to-br from-white to-ffeb99/20" />
          )}
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className={`text-4xl sm:text-5xl font-extrabold ${heroImage ? 'text-white' : 'text-black'} mb-8`}>
              Installation Panneaux Solaires à {cityName}
            </h1>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <MapPinIcon className={`w-6 h-6 ${heroImage ? 'text-white' : 'text-black'}`} />
                <span className={heroImage ? 'text-white' : 'text-black'}>{population.toLocaleString()} habitants</span>
              </div>
              {sunshineHours && (
                <div className="flex items-center space-x-2">
                  <svg className={`w-6 h-6 ${heroImage ? 'text-white' : 'text-black'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className={heroImage ? 'text-white' : 'text-black'}>{sunshineHours}h d'ensoleillement/an</span>
                </div>
              )}
            </div>

            {description && (
              <p className={`text-lg ${heroImage ? 'text-white' : 'text-black/80'} max-w-3xl mx-auto mb-12`}>
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center space-x-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                <UserIcon className="w-5 h-5" />
                <span>Contacter un commercial</span>
              </button>

              <button
                onClick={scrollToSimulator}
                className="flex items-center justify-center space-x-2 bg-[#10618F] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                <ChartBarIcon className="w-5 h-5" />
                <span>Simulation des économies</span>
              </button>
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
