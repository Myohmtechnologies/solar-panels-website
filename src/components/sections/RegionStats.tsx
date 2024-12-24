'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, BoltIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline';

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface Props {
  stats: Stat[];
}

const RegionStats = ({ stats }: Props) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Le Potentiel Solaire en PACA
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-4">
                  {index === 0 ? (
                    <SunIcon className="w-12 h-12 text-FFDF64" />
                  ) : index === 1 ? (
                    <BoltIcon className="w-12 h-12 text-FFDF64" />
                  ) : (
                    <CurrencyEuroIcon className="w-12 h-12 text-FFDF64" />
                  )}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bonus */}
        <div className="mt-12 bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl">
          <div className="flex items-center justify-center space-x-6">
            <SunIcon className="w-12 h-12 text-black" />
            <div>
              <h4 className="text-2xl font-bold text-black mb-3">
                Région Idéale pour le Solaire
              </h4>
              <ul className="text-black/80 list-disc list-inside text-lg">
                <li>Une des régions les plus ensoleillées de France</li>
                <li>Production optimale toute l&apos;année</li>
                <li>Rentabilité maximale de votre installation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionStats;
