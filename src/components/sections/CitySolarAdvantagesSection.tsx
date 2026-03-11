'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface CitySolarAdvantagesSectionProps {
  cityName: string;
  advantages: string[];
}

export default function CitySolarAdvantagesSection({ cityName, advantages }: CitySolarAdvantagesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pourquoi choisir le solaire à {cityName} ?
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les avantages uniques de l'installation de panneaux solaires à {cityName}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{advantage}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Profitez d'une expertise locale et d'un accompagnement personnalisé pour votre projet solaire à {cityName}
            </p>
            <button className="bg-yellow-600 text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition-colors duration-200">
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
