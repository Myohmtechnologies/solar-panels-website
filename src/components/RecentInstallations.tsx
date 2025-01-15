'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Installation {
  id: number;
  city: string;
  power: number;
  date: string;
  imagePath: string;
  savings: string;
}

const recentInstallations: Installation[] = [
  {
    id: 1,
    city: 'Aix-en-Provence',
    power: 9,
    date: '10 janvier 2025',
    imagePath: '/images/recent-installation/insall-5.jpeg',
    savings: '1200€/an'
  },
  {
    id: 2,
    city: 'Marseille',
    power: 6,
    date: '5 janvier 2025',
    imagePath: '/images/recent-installation/instal.jpeg',
    savings: '800€/an'
  },
  {
    id: 3,
    city: 'Nice',
    power: 3,
    date: '8 Décembre 2024',
    imagePath: '/images/recent-installation/install-6.jpg',
    savings: '890€/an'
  },
  {
    id: 4,
    city: 'Toulon',
    power: 4.5,
    date: '5 novembre 2024',
    imagePath: '/images/recent-installation/install-panneau.jpeg',
    savings: '600€/an'
  },
  {
    id: 5,
    city: 'Fréjus',
    power: 7.5,
    date: '2 octobre 2024',
    imagePath: '/images/recent-installation/install-2.jpeg',
    savings: '1000€/an'
  },
  {
    id: 6,
    city: 'Manosque',
    power: 6,
    date: '28 septembre 2024',
    imagePath: '/images/recent-installation/instal-sol.jpg',
    savings: '800€/an'
  }
];

export default function RecentInstallations() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentInstallation, setCurrentInstallation] = useState(0);

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInstallation((current) => 
        current === recentInstallations.length - 1 ? 0 : current + 1
      );
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  // Pause le carrousel quand la souris est sur le composant
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentInstallation((current) => 
        current === recentInstallations.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 bottom-4 w-10 h-10 bg-gradient-solar rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 z-40"
      >
        <Image
          src="/images/icon-pv.png"
          alt="Installations récentes"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      </button>
    );
  }

  const installation = recentInstallations[currentInstallation];

  return (
    <div 
      className="fixed left-4 bottom-4 w-72 bg-white rounded-lg shadow-xl z-40 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="bg-gradient-solar p-2 text-white flex justify-between items-center">
        <h3 className="font-semibold text-sm">Installations Récentes</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Content avec transition */}
      <div className="p-3">
        <div 
          className="flex gap-3 transition-opacity duration-300"
          style={{ opacity: isPaused ? 1 : 0.95 }}
        >
          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm text-gray-900 mb-1">{installation.city}</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Puissance</span>
                <span className="font-semibold">{installation.power} kWc</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Économies</span>
                <span className="font-semibold text-green-600">{installation.savings}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">{installation.date}</span>
              </div>
            </div>
          </div>

          {/* Image avec transition */}
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={installation.imagePath}
              alt={`Installation à ${installation.city}`}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-2 gap-1.5">
          {recentInstallations.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentInstallation(index);
                setIsPaused(true);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentInstallation ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
