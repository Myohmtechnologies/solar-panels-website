'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Realisation } from '@/types';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
  ChartBarIcon,
  UsersIcon,
  SunIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const filterOptions = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'photovoltaique', name: 'Panneaux Solaires' },
  { id: 'irve', name: 'Bornes IRVE' },
  { id: 'batterie', name: 'Batteries' },
];

const regions = [
  { id: 'all', name: 'Toutes les régions' },
  { id: 'paca', name: 'PACA' },
  { id: 'occitanie', name: 'Occitanie' },
  { id: 'rhone-alpes', name: 'Rhône-Alpes' },
];

export default function RealisationsPage() {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredProject, ...otherProjects] = realisations;

  useEffect(() => {
    async function fetchRealisations() {
      try {
        const response = await fetch('/api/realisations');
        const data = await response.json();
        setRealisations(data.realisations || []);
      } catch (error) {
        console.error('Error fetching realisations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRealisations();
  }, []);

  const filteredRealisations = realisations.filter(realisation => {
    const matchesFilter = activeFilter === 'all' || realisation.type.toLowerCase().includes(activeFilter);
    const matchesRegion = activeRegion === 'all' || realisation.region?.toLowerCase() === activeRegion;
    const matchesSearch = !searchTerm ||
      realisation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      realisation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      realisation.city.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesRegion && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-FFDF64"></div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ffeb99 to-ffb700" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Découvrez nos installations de panneaux solaires et bornes de recharge
              réalisées dans toute la région PACA.
            </p>
            <div className="relative max-w-lg">
              <input
                type="text"
                placeholder="Rechercher une réalisation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white shadow-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-FFDF64"
              />
              <ArrowRightIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>



      {/* Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <h3 className="text-lg font-semibold text-gray-900 mr-4">Type de projet :</h3>
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === filter.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {filteredRealisations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRealisations.map((realisation) => (
                    <motion.article
                      key={realisation._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="relative h-64">
                        <Image
                          src={realisation.mainImage}
                          alt={realisation.title}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {new Date(realisation.date).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long'
                            })}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {realisation.city}
                          </div>
                          <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-800">
                            {realisation.type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {realisation.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {realisation.description}
                        </p>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <Link
                            href={`/nos-realisation/${realisation._id}`}
                            className="inline-flex items-center text-sm font-semibold text-gray-900 group/link hover:text-FFDF64 transition-colors"
                          >
                            Voir le projet
                            <ArrowRightIcon className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12 bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-xl"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucune réalisation trouvée</h2>
                  <p className="text-gray-700 mb-6">
                    Essayez de modifier vos critères de recherche ou consultez d'autres régions.
                  </p>
                  <button
                    onClick={() => {
                      setActiveFilter('all');
                      setActiveRegion('all');
                      setSearchTerm('');
                    }}
                    className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Voir tous les projets
                  </button>
                </motion.div>
              )}
            </div>

          </div>
        </div>

      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">

      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" style={{ backgroundSize: '30px 30px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Vous aussi, passez à l'énergie solaire
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Rejoignez nos clients satisfaits et commencez votre transition énergétique.
                Nos experts sont là pour vous accompagner à chaque étape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/simulator"
                  className="inline-flex items-center justify-center px-8 py-4 bg-FFDF64 text-gray-900 rounded-full font-medium text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl"
                >
                  Simuler mon projet
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/solar-panel-installation.jpg"
                alt="Installation panneau solaire"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-50 rounded-full">
                    <SunIcon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.5 MWc</div>
                    <div className="text-sm text-gray-600">Puissance totale installée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
