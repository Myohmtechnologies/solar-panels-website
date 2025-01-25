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
  avantages: string[];
}

const installations: InstallationType[] = [
  {
    capacite: '3kW',
    image: '/images/3kwh.png',
    surface: '13m²',
    production: '6 400 kWh/an',
    avantages: [
      'Idéal pour les petites maisons',
      'Retour sur investissement rapide',
      'Installation simple et rapide'
    ]
  },
  {
    capacite: '6kW',
    image: '/images/6kwh.png',
    surface: '26m²',
    production: '12 800 kWh/an',
    avantages: [
      'Solution la plus populaire',
      'Excellent rapport qualité/prix',
      'Autoconsommation optimale'
    ]
  },
  {
    capacite: '9kW',
    image: '/images/9kwh.png',
    surface: '39m²',
    production: '21 600 kWh/an',
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
    text: 'Production garantie'
  },
  {
    icon: HomeIcon,
    text: 'Installation sur-mesure'
  },
  {
    icon: BoltIcon,
    text: 'Garantie 25 ans'
  },
  {
    icon: ChartBarIcon,
    text: 'Suivi de production'
  },
  {
    icon: ShieldCheckIcon,
    text: 'Maintenance incluse'
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
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions photovoltaïques à {cityName}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des installations solaires adaptées à tous les besoins, avec un accompagnement personnalisé et des aides financières attractives
            </p>
          </motion.div>

          {/* Grille des avantages */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center shadow-md"
              >
                <feature.icon className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
                <p className="text-sm font-medium text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Grille des installations */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {installations.map((installation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={installation.image}
                    alt={`Installation solaire ${installation.capacite}`}
                    fill
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Installation {installation.capacite}
                    </h3>
                    <p className="text-gray-600">Surface requise : {installation.surface}</p>
                    <p className="text-gray-600">Production : {installation.production}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {installation.avantages.map((avantage, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <SparklesIcon className="w-5 h-5 text-yellow-600 mr-2" />
                        <span>{avantage}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-gradient-solar text-black font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                  >
                    Obtenir un devis gratuit
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg mb-8">
              Nos experts sont à votre disposition pour étudier votre projet et vous proposer une solution adaptée à vos besoins.
              Bénéficiez des dernières aides de l'État et optimisez votre investissement.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-solar text-black font-semibold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              Demander une étude gratuite
            </button>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityName={cityName}
      />
    </>
  );
};

export default PrixInstallation;
