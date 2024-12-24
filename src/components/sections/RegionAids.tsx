'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CurrencyEuroIcon } from '@heroicons/react/24/outline';
import { RegionData } from '@/config/seo';

interface Advantage {
  title: string;
  description: string;
}

interface RegionAidsProps {
  region: RegionData;
  advantages: Advantage[];
}

const RegionAids = ({ region, advantages }: RegionAidsProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Les Aides en {region.name}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
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
                  <CurrencyEuroIcon className="w-12 h-12 text-FFDF64" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl"
        >
          <div className="flex items-center justify-center space-x-6">
            <CurrencyEuroIcon className="w-12 h-12 text-black" />
            <div>
              <h4 className="text-2xl font-bold text-black mb-3">
                Profitez des Aides Disponibles
              </h4>
              <ul className="text-black/80 list-disc list-inside text-lg">
                <li>MaPrimeRénov&apos; jusqu&apos;à 4000€</li>
                <li>Prime CEE selon votre installation</li>
                <li>TVA réduite à 10%</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionAids;
