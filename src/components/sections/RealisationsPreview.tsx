'use client';

import Image from 'next/image';
import { ArrowRightIcon, MapPinIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function RealisationsPreview() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Données statiques pour les réalisations
  const realisations = [
    {
      id: '1',
      title: 'Installation de panneaux solaires à Manosque',
      image: '/images/installation-panneaux-solaire-a-manosque.jpg',
      city: 'Manosque',
      power: '6 kWc',
      savings: '70%'
    },
    {
      id: '2',
      title: 'Installation de panneaux solaires à Aix-en-Provence',
      image: '/images/installateur-de-panneaux-photovoltaiques-aix-en-provence.jpeg',
      city: 'Aix-en-Provence',
      power: '9 kWc',
      savings: '80%'
    },
    {
      id: '3',
      title: 'Installation de panneaux solaires à Toulon',
      image: '/images/recent-installation/instal-sol.jpg',
      city: 'Toulon',
      power: '4.5 kWc',
      savings: '65%'
    },
    {
      id: '4',
      title: 'Installation de panneaux solaires à Nice',
      image: '/images/recent-installation/instal.jpeg',
      city: 'Nice',
      power: '7.2 kWc',
      savings: '75%'
    },
    {
      id: '5',
      title: 'Installation de panneaux solaires à Carpentras',
      image: '/images/recent-installation/insall-5.jpeg',
      city: 'Carpentras',
      power: '5.4 kWc',
      savings: '68%'
    },
    {
      id: '6',
      title: 'Installation de panneaux solaires à Gap',
      image: '/images/recent-installation/install-6.jpg',
      city: 'Gap',
      power: '3.6 kWc',
      savings: '60%'
    }
  ];

  return (
    <>
      {realisations.slice(0, 3).map((realisation) => (
        <div 
          key={realisation.id}
          className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setHoveredId(realisation.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative h-52 overflow-hidden">
            <Image
              src={realisation.image}
              alt={realisation.title}
              fill
              className={`object-cover transition-transform duration-700 ${hoveredId === realisation.id ? 'scale-110' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            
            {/* Badge de localisation */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0a3d5c] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <MapPinIcon className="h-3 w-3" />
              <span>{realisation.city}</span>
            </div>
            
            {/* Badge de puissance */}
            <div className="absolute top-3 right-3 bg-[#ffb700]/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <SunIcon className="h-3 w-3" />
              <span>{realisation.power}</span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 translate-y-0 group-hover:translate-y-0">
              <h3 className="font-semibold text-lg">{realisation.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Économies : {realisation.savings}</span>
                <span className="text-xs text-white/80 italic">Réalisation récente</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
