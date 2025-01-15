'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CurrencyEuroIcon, SunIcon, SparklesIcon, HomeIcon, BoltIcon } from '@heroicons/react/24/outline';
import QuoteModal from './modals/QuoteModal';

interface PrixInstallationType {
  capacite: string;
  prix: string;
  aide: string;
  image: string;
  surface: string;
  production: string;
}

const installations: PrixInstallationType[] = [
  {
    capacite: '3kW',
    prix: '9 890€',
    aide: '660€',
    image: '/images/3kwh.png',
    surface: '13m²',
    production: '6 400 kWh/an'
  },
  {
    capacite: '6kW',
    prix: '14 890€',
    aide: '960€',
    image: '/images/6kwh.png',
    surface: '26m²',
    production: '12 800 kWh/an'
  },
  {
    capacite: '9kW',
    prix: '19 890€',
    aide: '1 440€',
    image: '/images/9kwh.png',
    surface: '39m²',
    production: '21 600 kWh/an'
  },
];

const features = [
  {
    icon: SunIcon,
    text: 'Production optimale'
  },
  {
    icon: HomeIcon,
    text: 'Installation sur-mesure'
  },
  {
    icon: BoltIcon,
    text: 'Garantie 25 ans'
  }
];

export const PrixInstallation: React.FC<{ cityName?: string }> = ({ cityName = "votre ville" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInstallation, setSelectedInstallation] = useState<PrixInstallationType | null>(null);

  const openModal = (installation: PrixInstallationType) => {
    setSelectedInstallation(installation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInstallation(null);
  };

  return (
    <>
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prix d'installation de panneaux solaires à {cityName}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Découvrez nos offres d'installations solaires adaptées à vos besoins
            </p>
          </motion.div>

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
                <div className="relative">
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

                  {/* Content Container */}
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Installation {installation.capacite}
                      </h3>
                      <div className="p-2 bg-[#FFDF64] bg-opacity-20 rounded-full">
                        <SunIcon className="w-6 h-6 text-[#FFB800]" />
                      </div>
                    </div>

                    {/* Caractéristiques */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <HomeIcon className="w-5 h-5" />
                        <span>Surface : {installation.surface}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <BoltIcon className="w-5 h-5" />
                        <span>Production : {installation.production}</span>
                      </div>
                    </div>

                    {/* Prix et Aide */}
                    <div className="space-y-4">
                      {/* Prix */}
                      <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-[#FFB800]">
                        <div className="absolute top-0 right-0 bg-[#FFB800] px-4 py-1 rounded-bl-xl text-sm font-semibold">
                          Prix total
                        </div>
                        <div className="pt-8 pb-4 px-4 text-center">
                          <p className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
                            {installation.prix}
                            <CurrencyEuroIcon className="w-6 h-6 text-[#FFB800]" />
                          </p>
                        </div>
                      </div>
                      
                      {/* Aide */}
                      <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-[#4CAF50]">
                        <div className="absolute top-0 right-0 bg-[#4CAF50] px-4 py-1 rounded-bl-xl text-sm font-semibold text-white">
                          Aide disponible
                        </div>
                        <div className="pt-8 pb-4 px-4">
                          <div className="flex items-center justify-center gap-3">
                            <SparklesIcon className="w-6 h-6 text-[#4CAF50]" />
                            <p className="text-3xl font-bold text-[#4CAF50]">
                              {installation.aide}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bouton */}
                    <button 
                      onClick={() => openModal(installation)}
                      className="w-full mt-6 py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group"
                    >
                      <CurrencyEuroIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>Obtenir un devis gratuit</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4"
              >
                <feature.icon className="w-8 h-8 text-[#FFB800]" />
                <span className="text-gray-800 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
          >
            <h4 className="font-semibold text-gray-900 mb-4">Informations importantes</h4>
            <p className="mb-3">* Les prix indiqués sont à titre indicatif et peuvent varier selon votre situation</p>
            <p>* Les aides sont soumises à conditions et peuvent évoluer selon votre région</p>
          </motion.div>
        </div>
      </section>

      {/* Modal de devis */}
      {selectedInstallation && (
        <QuoteModal 
          isOpen={isModalOpen}
          closeModal={closeModal}
          cityName={cityName}
          estimations={{
            production: parseInt(selectedInstallation.production.replace(/[^\d]/g, '')),
            totalAnnualSavings: parseInt(selectedInstallation.prix.replace(/[^\d]/g, '')) * 0.15,
            systemSize: parseInt(selectedInstallation.capacite)
          }}
        />
      )}
    </>
  );
};

export default PrixInstallation;
