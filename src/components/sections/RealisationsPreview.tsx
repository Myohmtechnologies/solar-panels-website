'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function RealisationsPreview() {
  // Données statiques pour les réalisations
  const realisations = [
    {
      id: '1',
      title: 'Installation de panneaux solaires à Manosque',
      image: '/images/installation-panneaux-solaire-a-manosque.jpg',
      city: 'Manosque'
    },
    {
      id: '2',
      title: 'Installation de panneaux solaires à Aix-en-Provence',
      image: '/images/installateur-de-panneaux-photovoltaiques-aix-en-provence.jpeg',
      city: 'Aix-en-Provence'
    },
    {
      id: '3',
      title: 'Installation de panneaux solaires à Toulon',
      image: '/images/recent-installation/instal-sol.jpg',
      city: 'Toulon'
    },
    {
      id: '4',
      title: 'Installation de panneaux solaires à Nice',
      image: '/images/recent-installation/instal.jpeg',
      city: 'Nice'
    },
    {
      id: '5',
      title: 'Installation de panneaux solaires à Carpentras',
      image: '/images/recent-installation/insall-5.jpeg',
      city: 'Carpentras'
    },
    {
      id: '6',
      title: 'Installation de panneaux solaires à gap',
      image: '/images/recent-installation/install-6.jpg',
      city: 'Gap'
    }
  ];

  return (
    <>
      {realisations.map((realisation) => (
        <div 
          key={realisation.id}
          className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={realisation.image}
              alt={realisation.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-semibold text-lg mb-1">{realisation.title}</h3>
              <p className="text-sm text-white/80">{realisation.city}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
