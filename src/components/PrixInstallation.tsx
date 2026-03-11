'use client';

import { useState } from 'react';
import OptimizedImage from '@/components/OptimizedImage';

interface InstallationOption {
  id: string;
  title: string;
  power: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

const installationOptions: InstallationOption[] = [
  {
    id: '3kwh',
    title: 'Installation 3 kWh',
    power: '3 kWh',
    price: 'À partir de 8 990€',
    description: 'Installation idéale pour une petite maison ou un appartement',
    image: '/images/3kwh.png',
    features: [
      '8-10 panneaux solaires',
      'Production annuelle : ~3000 kWh',
      'Surface nécessaire : ~16m²',
      'Économies : jusqu\'à 500€/an'
    ]
  },
  {
    id: '6kwh',
    title: 'Installation 6 kWh',
    power: '6 kWh',
    price: 'À partir de 11 990€',
    description: 'Solution optimale pour une maison moyenne',
    image: '/images/6kwh.png',
    features: [
      '16-20 panneaux solaires',
      'Production annuelle : ~6000 kWh',
      'Surface nécessaire : ~32m²',
      'Économies : jusqu\'à 1000€/an'
    ]
  },
  {
    id: '9kwh',
    title: 'Installation 9 kWh',
    power: '9 kWh',
    price: 'À partir de 14 990€',
    description: 'Installation performante pour une grande maison',
    image: '/images/9kwh.png',
    features: [
      '24-30 panneaux solaires',
      'Production annuelle : ~9000 kWh',
      'Surface nécessaire : ~48m²',
      'Économies : jusqu\'à 1500€/an'
    ]
  }
];

export default function PrixInstallation() {
  const [selectedOption, setSelectedOption] = useState<string>('6kwh');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Prix des installations photovoltaïques
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {installationOptions.map((option) => (
            <div
              key={option.id}
              className={`rounded-lg shadow-lg p-6 transition-all duration-300 ${
                selectedOption === option.id
                  ? 'border-2 border-primary-500 transform scale-105'
                  : 'border border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="relative h-48 mb-4">
                <OptimizedImage
                  src={option.image}
                  alt={option.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                  priority={option.id === '6kwh'}
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-2xl font-bold text-primary-500 mb-2">
                {option.price}
              </p>
              <p className="text-gray-600 mb-4">{option.description}</p>
              
              <ul className="space-y-2">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            * Les prix indiqués sont TTC et incluent l'installation. Les aides de l'État peuvent réduire significativement ces montants.
          </p>
        </div>
      </div>
    </section>
  );
}
