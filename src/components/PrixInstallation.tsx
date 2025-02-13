'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CurrencyEuroIcon, SunIcon, SparklesIcon, HomeIcon, BoltIcon, ChartBarIcon, ShieldCheckIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import ContactModal from './modals/ContactModal';

interface InstallationType {
  capacite: string;
  image: string;
  surface: string;
  production: string;
  economiesAnnuelles: string;
  avantages: string[];
}

const installations: InstallationType[] = [
  {
    capacite: '3kW',
    image: '/images/3kwh.png',

    production: '6 400 kWh/an',
    economiesAnnuelles: '≈800€',
    avantages: [
      'Idéal pour les petites maisons',
      'Retour sur investissement rapide',
      'Installation simple et rapide'
    ]
  },
  {
    capacite: '6kW',
    image: '/images/6kwh.png',

    production: '12 800 kWh/an',
    economiesAnnuelles: '≈1600€',
    avantages: [
      'Solution la plus populaire',
      'Excellent rapport qualité/prix',
      'Autoconsommation optimale'
    ]
  },
  {
    capacite: '9kW',
    image: '/images/9kwh.png',

    production: '21 600 kWh/an',
    economiesAnnuelles: '≈2700€',
    avantages: [
      'Production maximale',
      'Idéal pour les grandes maisons',
      'Rentabilité optimisée'
    ]
  },
];

const features = [
  {
    icon: SunIcon,
    text: 'Panneaux solaires Made in France'
  },
  {
    icon: BoltIcon,
    text: 'Micro-onduleurs américains haut de gamme'
  },
  {
    icon: HomeIcon,
    text: 'Installation sur-mesure'
  },
  {
    icon: ChartBarIcon,
    text: 'Suivi de production'
  },
  {
    icon: ShieldCheckIcon,
    text: 'Garantie 25 ans'
  },
  {
    icon: BanknotesIcon,
    text: 'Aides financières'
  }
];

export const PrixInstallation: React.FC<{ cityName?: string }> = ({ cityName = "votre ville" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center py-12 md:py-24 bg-white">
        <div className="absolute inset-0 bg-white" />
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="inline-block bg-gradient-to-br from-ffeb99 to-ffb700 text-black px-4 py-2 rounded-full font-bold mb-6"
            >
              🎯 Offre Spéciale 2025
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Réalisez jusqu'à <span className="text-FFDF64">3600€</span> d'économies par an à {cityName}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Profitez des meilleurs composants du marché avec nos panneaux solaires français et micro-onduleurs américains
            </p>
          </motion.div>

          {/* Grid des installations */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {installations.map((install, index) => (
              <motion.div
                key={install.capacite}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-FFDF64"
              >
                <div className="relative h-48 mb-6">
                  <Image
                    src={install.image}
                    alt={`Installation ${install.capacite}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack {install.capacite}</h3>
                <div className="bg-green-100 p-3 rounded-lg mb-4">
                  <p className="text-green-700 font-medium text-lg">Production: {install.production}</p>
                  <p className="text-green-600">Économies: {install.economiesAnnuelles}/an</p>
                </div>
                <ul className="space-y-2">
                  {install.avantages.map((avantage, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      {avantage}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Obtenir un devis gratuit
                </button>
              </motion.div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 backdrop-blur-sm p-4 rounded-xl text-center"
              >
                <feature.icon className="h-8 w-8 text-FFDF64 mx-auto mb-2" />
                <p className="text-white text-sm">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} cityName={cityName} />
    </>
  );
};

export default PrixInstallation;
