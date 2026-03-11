'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Realisation } from '@/types';
import { MapPinIcon, CalendarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function LastInstallationsSection() {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRealisations() {
      try {
        const response = await fetch('/api/realisations?limit=3');
        const data = await response.json();
        // Prendre seulement les 3 premières réalisations
        setRealisations((data.realisations || []).slice(0, 3));
      } catch (error) {
        console.error('Error fetching realisations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRealisations();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse flex justify-between space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1/3 h-[400px] bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos dernières installations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos réalisations récentes d'installations de panneaux solaires dans votre région
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {realisations.map((realisation) => (
            <div
              key={realisation._id}
              className="md:w-1/3 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={realisation.mainImage}
                  alt={realisation.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="eager"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4" />
                    {realisation.city}
                  </div>
                  <div className="flex items-center gap-1">
                    <ChartBarIcon className="w-4 h-4" />
                    {realisation.specifications.puissance} kWc
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{realisation.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{realisation.description}</p>
                <Link
                  href={`/nos-realisation/${realisation._id}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80"
                >
                  Voir le projet
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/nos-realisation"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg hover:bg-primary/90 transition-colors"
          >
            Voir toutes nos réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
