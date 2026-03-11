'use client';

import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { City } from '@/app/data/types';

interface NeighboringCitiesSectionProps {
  cities: City[];
  departmentSlug: string;
}

export default function NeighboringCitiesSection({ cities, departmentSlug }: NeighboringCitiesSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-black font-extrabold mb-8 border-b-4 border-black/20 pb-4 text-center">
          Découvrez nos installations dans les villes voisines
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cities.slice(0, 3).map((city, index) => (
            <Link
              key={index}
              href={`/region/paca/departements/${departmentSlug}/villes/${city.slug}`}
              className="block"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-black">{city.name}</h3>
                  <div className="p-2 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-black/70">Population</span>
                    <span className="text-black font-semibold">{city.population.toLocaleString()} hab.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/70">Code postal</span>
                    <span className="text-black font-semibold">{city.code}</span>
                  </div>
                  {city.solarAdvantages && (
                    <div className="mt-4">
                      <span className="text-black/70 block mb-2">Points forts :</span>
                      <ul className="text-sm text-black space-y-1">
                        {city.solarAdvantages.slice(0, 2).map((advantage, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-ffb700">•</span>
                            <span className="flex-1">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
