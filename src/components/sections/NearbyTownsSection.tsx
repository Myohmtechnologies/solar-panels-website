'use client';

import React from 'react';
import Link from 'next/link';
import { City } from '@/app/data/types';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface NearbyTownsSectionProps {
  currentCity: string;
  cities: Record<string, City>;
  departmentSlug: string;
}

export default function NearbyTownsSection({ currentCity, cities, departmentSlug }: NearbyTownsSectionProps) {
  // Filtrer les villes pour exclure la ville actuelle et prendre les 3 premières
  const nearbyTowns = Object.entries(cities)
    .filter(([slug]) => slug.toLowerCase() !== currentCity.toLowerCase())
    .slice(0, 3)
    .map(([slug, city]) => ({
      slug: city.name.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      ...city
    }));

  if (nearbyTowns.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Découvrez les villes voisines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nearbyTowns.map((town) => (
            <Link
              key={town.slug}
              href={`/region/paca/departements/${departmentSlug}/villes/${town.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-yellow-700" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-yellow-600">
                    {town.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {town.population ? `Population : ${town.population.toLocaleString()} habitants` : ''}
                </p>
                <div className="flex items-center text-yellow-600">
                  <span className="text-sm font-medium">Découvrir</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
