'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BrandCarouselProps {
  cityName: string;
}

const brands = [
  {
    name: 'Tesla',
    logo: '/images/marque-voiture/tesla-removebg-preview.png',
    description: 'Véhicules électriques premium'
  },
  {
    name: 'BMW',
    logo: '/images/marque-voiture/BMW.svg.png',
    description: 'Performance électrique'
  },
  {
    name: 'Mercedes-Benz',
    logo: '/images/marque-voiture/Mercedes-Benz_Star_2022.svg.png',
    description: 'Luxe électrique'
  },
  {
    name: 'Volkswagen',
    logo: '/images/marque-voiture/Volkswagen_logo_2019.svg.png',
    description: 'Mobilité électrique accessible'
  },
  {
    name: 'Toyota',
    logo: '/images/marque-voiture/Toyota_logo_(Red).svg.png',
    description: 'Innovation japonaise'
  },
  {
    name: 'Renault',
    logo: '/images/marque-voiture/images-removebg-preview.png',
    description: 'Leader européen de l\'électrique'
  },
  {
    name: 'Peugeot',
    logo: '/images/marque-voiture/Peugeot-Logo-2021-removebg-preview.png',
    description: 'Innovation électrique française'
  },
  {
    name: 'Porsche',
    logo: '/images/marque-voiture/porsche-logo-5.png',
    description: 'Performance premium'
  }
];

export default function BrandCarousel({ cityName }: BrandCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3248] mb-6">
            Nous installons des bornes pour toutes les marques
          </h2>
          <p className="text-[#0c3248]/90 text-lg">
            Des solutions de recharge adaptées à votre véhicule, quelle que soit sa marque
          </p>
        </div>

        {/* Grille de logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="bg-white rounded-xl p-6 border border-[#0c3248]/10 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#0c3248] mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-[#0c3248]/80">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#0c3248]/90 mb-6">
            Votre marque n'est pas listée ? Contactez-nous pour une solution personnalisée
          </p>
          <button className="group bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0c3248] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="flex items-center gap-2">
              Demander un devis personnalisé
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 