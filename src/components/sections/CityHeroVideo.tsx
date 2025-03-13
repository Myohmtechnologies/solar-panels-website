'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import QuoteModal from '@/components/modals/QuoteModal';
import Image from 'next/image';
import { 
  ArrowLeftIcon, 
  MapPinIcon, 
  HomeIcon, 
  KeyIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  ChartBarIcon,
  CalculatorIcon,
  SunIcon,
  BoltIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

interface CityHeroVideoProps {
  cityName: string;
  departmentCode: string;
  departmentName: string;
  description: string;
  population: number;
  sunshineHours: number;
  heroImage?: {
    url: string;
    alt: string;
  };
}

const CityHeroVideo = ({ 
  cityName, 
  departmentCode, 
  departmentName, 
  description, 
  population, 
  sunshineHours, 
  heroImage 
}: CityHeroVideoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const handleSimulatorClick = () => {
    window.location.href = '/simulator';
  };

  const handleDevisClick = () => {
    setIsModalOpen(true);
  };

  // Données spécifiques par département
  const getDepartmentSpecifics = () => {
    switch(departmentCode) {
      case "06":
        return {
          region: "de la Côte d'Azur",
          climate: "méditerranéen de la Côte d'Azur",
          advantage: "proximité de la mer et exposition optimale"
        };
      case "83":
        return {
          region: "du Var",
          climate: "ensoleillé du Var",
          advantage: "ensoleillement exceptionnel toute l'année"
        };
      case "13":
        return {
          region: "des Bouches-du-Rhône",
          climate: "méditerranéen provençal",
          advantage: "région la plus ensoleillée de France"
        };
      default:
        return {
          region: "de la région PACA",
          climate: "méditerranéen",
          advantage: "fort ensoleillement annuel"
        };
    }
  };

  const departmentSpecifics = getDepartmentSpecifics();
  
  // Calcul des économies moyennes basé sur la population et l'ensoleillement
  const averageAnnualSavings = Math.round((sunshineHours / 2800) * 1200);

  return (
    <>
      <QuoteModal 
        isOpen={isModalOpen} 
        closeModal={() => setIsModalOpen(false)}
        cityName={cityName}
        estimations={{
          production: 8500, // Production moyenne pour une installation standard
          totalAnnualSavings: averageAnnualSavings, // Économies moyennes annuelles
          systemSize: 6 // Taille moyenne du système en kWc
        }}
      />

      {/* Contenu principal */}
      <section ref={heroRef} data-section="city-hero" className="relative w-full bg-gradient-to-br from-white via-[#FFF9E5] to-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Fil d'Ariane */}
          <div className="mb-6">
            <Link href={`/region/paca/departements/${departmentCode}-${departmentName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')}`}
                  className="text-gray-600 hover:text-primary flex items-center gap-2">
              <ArrowLeftIcon className="w-4 h-4" />
              Installer des panneaux solaires dans {departmentName}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Colonne de gauche - Contenu */}
            <div className="space-y-6">
              {/* Badge Ville */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                <MapPinIcon className="w-4 h-4 mr-2" />
                {cityName}
              </div>

              {/* Titre et Description */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Installation de Panneaux Solaires à {cityName} - Votre Expert Photovoltaïque
                </h1>
               
                <div className="mt-3 text-gray-700">
                  <p>
                    <strong>MY OHM Technologies</strong>, votre installateur de panneaux solaires à {cityName} certifié RGE, 
                    vous propose des solutions photovoltaïques adaptées au climat {departmentSpecifics.climate}. 
                    Nos installations solaires garantissent une production optimale et des économies substantielles 
                    sur vos factures d'électricité grâce à {departmentSpecifics.advantage}.
                  </p>
                </div>
              </div>

              {/* Statistiques locales */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <SunIcon className="w-5 h-5 text-yellow-500" />
                  <span><strong>{sunshineHours}h</strong> d'ensoleillement/an</span>
                </div>
                <div className="flex items-center gap-2">
                  <BoltIcon className="w-5 h-5 text-blue-500" />
                  <span>Jusqu'à <strong>70%</strong> d'économies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CurrencyEuroIcon className="w-5 h-5 text-green-500" />
                  <span><strong>{averageAnnualSavings}€</strong>/an d'économies</span>
                </div>
              </div>

              {/* Prix Attractif */}
              <div 
                onClick={handleSimulatorClick}
                className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <div className="flex items-center gap-6">
                  {/* Image et Badge Promo */}
                  <div className="relative">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/panneaux-solaire.jpg"
                        alt="Panneau solaire"
                        fill
                        className="object-cover"
                      />
                    </div>
                  
                  </div>

                  {/* Contenu Prix */}
                  <div className="flex-1">
                    <div className="space-y-1">
                      <p className="text-black/90 font-medium text-lg">Installation  compléte</p>
                      <div className="flex items-baseline gap-3">
                        <p className="text-4xl font-bold text-black">À partir de 7 890€</p>
                    
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-black/80">Après aides de l'État: économisez jusqu'à 870€/an</p>
                      </div>
                    </div>
                  </div>

                  {/* Flèche */}
                  <div className="hidden md:flex items-center">
                    <svg className="w-8 h-8 text-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium text-black/70 hover:text-black">
                  Cliquez pour simuler vos économies
                </div>
              </div>

              {/* Boutons CTA */}
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={handleSimulatorClick}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-black rounded-2xl hover:bg-primary/90 transition-all text-lg font-semibold"
                >
                  <ChartBarIcon className="w-6 h-6" />
                  Simuler mes économies
                </button>
                <button
                  onClick={handleDevisClick}
                  className="flex items-center justify-center gap-3 px-6 py-4 border-2 bg-black text-primary rounded-2xl transition-all text-lg font-semibold"
                >
                  <CalculatorIcon className="w-6 h-6" />
                  Devis gratuit
                </button>
              </div>

              {/* Badges d'information */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ClockIcon className="w-4 h-4 text-primary" />
                  Estimation en 2 min
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircleIcon className="w-4 h-4 text-primary" />
                  Gratuit et sans engagement
                </div>
              </div>

              {/* Note Google */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(5.0) sur Google</span>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4 items-center pt-4">
                <Image src="/images/rge1.png" alt="RGE" width={80} height={40} className="h-8 w-auto object-contain" />
                <Image src="/images/qualipv1.png" alt="Qualibat" width={80} height={40} className="h-11 w-auto object-contain" />
                <Image src="/images/garantie-decennale-p2a-construction.webp" alt="garantie-decennale-p2a-construction" width={180} height={40} className="h-12 w-auto object-contain" />
                {/* Ajoutez d'autres certifications selon besoin */}
              </div>
            </div>

            {/* Colonne de droite - Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              {heroImage ? (
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src="/images/my-ohm-technologies-entreprise-d'installation-de-panneaux-solaires.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityHeroVideo;
