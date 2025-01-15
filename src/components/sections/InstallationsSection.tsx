'use client';

import Image from 'next/image';
import { BoltIcon, SunIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';

interface Installation {
  customerName: string;
  city: string;
  monthlySavings: number;
  systemSize: number;
  panelsCount: number;
  invertersCount: number;
  testimonial: string;
  rating: number;
  imageUrl: string;
}

interface InstallationsSectionProps {
  cityName: string;
  installation?: Installation;
}

const defaultInstallation: Installation = {
  customerName: "Jean-Marc P.",
  city: "",
  monthlySavings: 103,
  systemSize: 3,
  panelsCount: 6,
  invertersCount: 6,
  testimonial: "Installation impeccable, équipe professionnelle et réactive. Production solaire au-delà de nos attentes.",
  rating: 5,
  imageUrl: "/images/installations/83-installation.jpg"
};

export default function InstallationsSection({ cityName, installation = defaultInstallation }: InstallationsSectionProps) {
  const currentInstallation = {
    ...defaultInstallation,
    city: cityName,
    ...installation
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-black font-extrabold mb-8 border-b-4 border-black/20 pb-4">
          Nos installations à {cityName}
        </h2>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-black">{currentInstallation.customerName}</h3>
                <span className="text-gray-600 ml-2">• {currentInstallation.city}</span>
              </div>

              <div className="bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-black font-semibold py-2 px-4 rounded-full inline-block mb-6">
                {currentInstallation.monthlySavings} € d'économies mensuelles
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BoltIcon className="h-6 w-6 text-FFDF64" />
                  <span className="font-semibold text-black">
                    Installation {currentInstallation.systemSize}kWc
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <SunIcon className="h-6 w-6 text-FFDF64" />
                    <img src="/images/fr-flag.svg" alt="Drapeau français" className="w-6 h-4 mr-2" />
                    <span className="text-black">
                      {currentInstallation.panelsCount} panneaux solaires 500W
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPinIcon className="h-6 w-6 text-FFDF64" />
                    <img src="/images/us-flag.svg" alt="Drapeau américain" className="w-6 h-4 mr-2" />
                    <span className="text-black">
                      {currentInstallation.invertersCount} micro-onduleurs
                    </span>
                  </div>
                </div>
              </div>

              <blockquote className="mt-6 italic text-gray-700 border-l-4 border-FFDF64 pl-4">
                "{currentInstallation.testimonial}"
              </blockquote>

              <div className="flex gap-1 mt-4">
                {[...Array(currentInstallation.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-FFDF64"
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-105">
                <Image
                  src={currentInstallation.imageUrl}
                  alt="Installation solaire"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
