import React from 'react';
import { BuildingLibraryIcon, DocumentCheckIcon, ShieldCheckIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface Regulation {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CityRegulationsProps {
  cityName: string;
  regulations: Regulation[];
}

export default function CityRegulations({ cityName, regulations }: CityRegulationsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Réglementations solaires à {cityName}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les spécificités réglementaires pour l'installation de panneaux solaires à {cityName}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {regulations.map((regulation, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                    {regulation.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {regulation.title}
                  </h3>
                  <p className="text-gray-600">
                    {regulation.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
