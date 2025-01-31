'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import ContactModal from '@/components/modals/ContactModal';
import Image from 'next/image';
import { 
  ArrowLeftIcon, 
  MapPinIcon, 
  HomeIcon, 
  KeyIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  StarIcon,
  ChartBarIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';

interface CityHeroVideoProps {
  cityName: string;
  departmentName: string;
  description: string;
  population: number;
  sunshineHours: number;
  heroImage?: {
    url: string;
    alt: string;
  };
}

const CityHeroVideo = ({ cityName, departmentName, description, population, sunshineHours, heroImage }: CityHeroVideoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const handleSimulatorClick = () => {
    window.location.href = '/simulator';
  };

  const handleDevisClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Contenu principal */}
      <section ref={heroRef} data-section="city-hero" className="relative w-full bg-gradient-to-br from-white via-[#FFF9E5] to-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Fil d'Ariane */}
          <div className="mb-6">
            <Link href={`/region/paca/departements/${departmentName.toLowerCase().replace(/ /g, '-')}`} 
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
                  Installation de panneaux solaires à {cityName} | Votre entrepriseInstallateur photovoltaïque RGE
                </h1>
                <p className="text-gray-600 text-lg">
                  {description}
                </p>
              </div>

              {/* Boutons CTA */}
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={handleSimulatorClick}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-white rounded-2xl hover:bg-primary/90 transition-all text-lg font-semibold"
                >
                  <ChartBarIcon className="w-6 h-6" />
                  Simuler mes économies
                </button>
                <button
                  onClick={handleDevisClick}
                  className="flex items-center justify-center gap-3 px-6 py-4 border-2 bg-black text-primary rounded-2xl hover:bg-primary/10 transition-all text-lg font-semibold"
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
                    <StarIcon key={star} className="w-5 h-5 text-[#FFDF64]" />
                  ))}
                </div>
                <span className="text-gray-600">(5.0) sur Google</span>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4 items-center pt-4">
                <Image src="/images/rge1.png" alt="RGE" width={80} height={40} className="h-8 w-auto object-contain" />
                <Image src="/images/qualipv1.png" alt="Qualibat" width={80} height={40} className="h-8 w-auto object-contain" />
                <Image src="/images/garantie-decennale-p2a-construction.webp" alt="garantie-decennale-p2a-construction" width={80} height={40} className="h-8 w-auto object-contain" />
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
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="https://res.cloudinary.com/dz5sry4jz/video/upload/q_auto:eco,f_auto,c_scale,w_1280/societe-installation-de-panneaux-solaires" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
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
