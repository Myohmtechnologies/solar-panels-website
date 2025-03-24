'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuoteModal from '@/components/modals/QuoteModal';
import { 
  ArrowLeftIcon, 
  MapPinIcon, 
  BoltIcon, 
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import BrandCarousel from './BrandCarousel';

interface ChargingStationHeroProps {
  cityName: string;
  department: string;
  departmentCode: string;
  description: string;
  totalStations: number;
  heroImage?: {
    url: string;
    alt: string;
  };
}

export default function ChargingStationHero({ 
  cityName, 
  department,
  departmentCode,
  description,
  totalStations,
  heroImage
}: ChargingStationHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <QuoteModal 
        isOpen={isModalOpen} 
        closeModal={() => setIsModalOpen(false)}
        cityName={cityName}
        estimations={{
          production: 0,
          totalAnnualSavings: 0
        }}
      />

      <section ref={heroRef} data-section="charging-station-hero" className="relative w-full bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Fil d'Ariane - toujours en haut */}
          <div className="mb-6">
            <Link 
              href="/borne-de-recharge"
              className="text-[#0c3248]/80 hover:text-[#0c3248] flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Retour à la liste des villes
            </Link>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start lg:items-center">
            {/* Titre et Description - Premier en mobile */}
            <div className="order-1 lg:order-1 w-full">
              {/* Badge Ville */}
              <div className="inline-flex items-center gap-2 bg-[#0f81ba] text-white px-3 py-1 rounded-full mb-4">
                <MapPinIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{cityName}</span>
              </div>

              <div className="max-w-xl">
                <h1 className="text-3xl md:text-5xl font-bold text-[#0c3248] mb-4">
                  Bornes de recharge à {cityName}
                </h1>
                <p className="text-base md:text-lg text-[#0c3248]/90 mb-8">
                  {description}
                </p>
              </div>

              {/* Boutons - Deuxième en mobile */}
              <div className="order-2 w-full mb-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex-1 bg-[#0f81ba] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#0c3248] transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">
                    Je suis une entreprise
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex-1 bg-white text-[#0f81ba] border-2 border-[#0f81ba] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#0f81ba] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">
                    Je suis un particulier
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>

              {/* Statistiques Locales - Troisième en mobile */}
              <div className="order-3 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 w-full">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#0c3248]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#0f81ba] rounded-lg">
                      <BoltIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#0c3248]">{totalStations} bornes</h3>
                  </div>
                  <p className="text-sm text-[#0c3248]/80">Points de recharge disponibles</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#0c3248]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#0f81ba] rounded-lg">
                      <ChartBarIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#0c3248]">98% disponibilité</h3>
                  </div>
                  <p className="text-sm text-[#0c3248]/80">Taux de disponibilité moyen</p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#0c3248]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-[#ffb700]" />
                      ))}
                    </div>
                    <h3 className="font-semibold text-[#0c3248]">4.8/5</h3>
                  </div>
                  <p className="text-sm text-[#0c3248]/80">Note moyenne des utilisateurs</p>
                </div>
              </div>
            </div>

            {/* Image - Quatrième en mobile */}
            <div className="order-4 lg:order-2 relative w-full h-[300px] md:h-[400px] lg:h-[700px]">
              <Image
                src="/images/installation-de-borne-de-recharge-my-ohm-technologies.png"
                alt="MY OHM Technologies - Bornes de recharge"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <BrandCarousel />
      </section>
    </>
  );
} 