'use client';

import { RegionData } from '@/config/seo';
import { MapPinIcon, SunIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  region: RegionData;
}

const RegionHero = ({ region }: Props) => {
  const departmentsList = region.departments.length > 0
    ? region.departments.map(dept => dept.name).join(', ')
    : region.name;

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/region-sud.webp"
          alt="Installation de panneaux solaires"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Location Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
            <MapPinIcon className="w-5 h-5 mr-2" />
            <span>{departmentsList}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Installation de Panneaux Solaires<br />
            en {region.name}
          </h1>

          {/* Description */}
          <p className="text-xl mb-8 max-w-2xl">
            Profitez de {region.sunshineHours} heures d&apos;ensoleillement par an pour produire votre propre énergie.
            {region.sunshineRank && ` ${region.name} est ${region.sunshineRank} en termes d'ensoleillement.`}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <SunIcon className="w-6 h-6 mr-2" />
                <span className="font-semibold">Ensoleillement</span>
              </div>
              <p className="text-3xl font-bold">{region.sunshineHours}h</p>
              <p className="text-sm opacity-80">par an en moyenne</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-semibold">Production</span>
              </div>
              <p className="text-3xl font-bold">{region.stats.solarPotential}</p>
              <p className="text-sm opacity-80">kWh/kWc/an</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-semibold">Installations</span>
              </div>
              <p className="text-3xl font-bold">{region.stats.installedCapacity}</p>
              <p className="text-sm opacity-80">MW installés</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-semibold">Population</span>
              </div>
              <p className="text-3xl font-bold">{(region.stats.population / 1000000).toFixed(1)}M</p>
              <p className="text-sm opacity-80">habitants</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionHero;
