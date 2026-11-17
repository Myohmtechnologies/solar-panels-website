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
  BoltIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import RelatedCitiesSection from '@/components/sections/RelatedCitiesSection';

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
    return matchesFilter && matchesRegion;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-FFDF64"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-4 pt-12 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8 lg:pt-16 lg:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-10 h-80 w-80 rounded-full bg-[#ffdf64]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-40 h-80 w-80 rounded-full bg-[#116290]/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badges */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-4 py-2 text-sm font-bold text-[#0a3d5c] shadow-sm">
                <SunIcon className="h-4 w-4" /> Nos chantiers en région PACA
              </span>
              <div className="flex items-center space-x-1 bg-gray-100/80 px-4 py-2 rounded-full">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#116290] text-sm font-semibold">4.9/5 Google</span>
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#111827] mb-4">
              <span className="block text-[#116290]">Nos Réalisations</span>
              <span className="block">dans toute la région PACA</span>
            </h1>

            {/* Ligne rouge signature */}
            <div className="w-12 h-1 bg-red-600 mb-5"></div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Découvrez en images nos installations de panneaux solaires photovoltaïques, bornes de recharge IRVE et batteries de stockage réalisées par nos techniciens certifiés RGE.
            </p>

            {/* Points clés avec coches orange */}
            <div className="space-y-3.5 mb-8">
              {[
                "+500 installations solaires et bornes en région PACA",
                "Chantiers réalisés par nos artisans qualifiés RGE QualiPV",
                "Équipements garantis jusqu'à 30 ans & garantie décennale"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 text-base sm:text-lg text-gray-700">
                  <svg className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/simulator"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#116290] to-[#0a3d5c] px-7 py-4 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Simuler votre projet <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+33492766858"
                className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#116290]/30 bg-white px-7 py-4 text-base font-semibold text-[#116290] transition hover:bg-[#116290]/5"
              >
                <PhoneIcon className="mr-2 h-5 w-5" /> 04 92 76 68 58
              </a>
            </div>
          </motion.div>

          {/* Visuel chantier à droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-[#eaf2f6] shadow-2xl shadow-[#082f49]/15">
              <Image
                src="/images/realisation-panneaux-solaire-aix-en-provence.jpeg"
                alt="Installation de panneaux solaires réalisée par MY OHM Technologies en région PACA"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#082f49]/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-4 py-2 text-xs sm:text-sm font-bold text-[#116290] shadow-lg backdrop-blur">
                  <MapPinIcon className="h-4 w-4 text-[#ffb700]" /> Chantier à Aix-en-Provence · 6 kWc
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#116290]/90 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
                  <BoltIcon className="h-4 w-4 text-[#ffdf64]" /> 100% Autoconsommation
                </span>
              </div>
            </div>

            {/* Badge flottant haut droit */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl border border-gray-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffdf64] to-[#ffb700] text-[#0a3d5c] font-black text-lg shadow-sm">
                ★
              </div>
              <div>
                <div className="text-sm font-extrabold text-[#0a3d5c]">Qualité certifiée RGE</div>
                <div className="text-xs text-gray-500">Pose soignée & garantie</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">Filtrer par :</span>
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:text-[#116290] hover:bg-white/80 border border-gray-200/80 shadow-sm'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="text-sm font-semibold text-gray-500">
              {filteredRealisations.length} réalisation{filteredRealisations.length > 1 ? 's' : ''} trouvée{filteredRealisations.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredRealisations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRealisations.map((realisation) => (
                <motion.article
                  key={realisation._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
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
                        <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {new Date(realisation.date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="h-4 w-4 mr-1 text-[#ffb700]" />
                        {realisation.city}
                      </div>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#116290]">
                        {realisation.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#116290] transition-colors">
                      {realisation.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {realisation.description}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href={`/nos-realisation/${realisation._id}`}
                        className="inline-flex items-center text-sm font-bold text-[#116290] hover:text-[#0a3d5c] transition-colors"
                      >
                        Voir le projet
                        <ArrowRightIcon className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
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
              className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100 p-8 mx-auto max-w-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Aucune réalisation trouvée</h2>
              <p className="text-gray-600 mb-6">
                Essayez de modifier votre recherche ou de réinitialiser les filtres.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setActiveRegion('all');
                }}
                className="bg-gradient-to-r from-[#ffdf64] to-[#ffb700] text-[#0a3d5c] font-bold py-3 px-7 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
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

      {/* Section des villes liées */}
      <RelatedCitiesSection />
    </div>
  );
}
