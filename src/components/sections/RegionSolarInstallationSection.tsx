'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SunIcon, BoltIcon, HomeIcon } from '@heroicons/react/24/outline';

interface Props {
  region: string;
  description: string;
}

const RegionSolarInstallationSection = ({ region, description }: Props) => {
  const features = [
    {
      icon: SunIcon,
      title: 'Ensoleillement Optimal',
      description: `La région ${region} bénéficie d'un des meilleurs taux d'ensoleillement en France, garantissant une production optimale d'énergie solaire.`
    },
    {
      icon: BoltIcon,
      title: 'Production Maximale',
      description: 'Nos installations sont optimisées pour maximiser la production d\'énergie tout au long de l\'année.'
    },
    {
      icon: HomeIcon,
      title: 'Installation Sur-Mesure',
      description: 'Chaque installation est conçue sur mesure en fonction de votre toiture et de vos besoins énergétiques.'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Installation Solaire en {region}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Colonne de gauche avec image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/06-installation.jpg"
                alt={`Installation de panneaux solaires en ${region}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Colonne de droite avec features */}
          <div className="lg:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="w-12 h-12 text-FFDF64" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <SunIcon className="w-12 h-12 text-black" />
              <div>
                <h4 className="text-2xl font-bold text-black mb-3">
                  Maximisez votre Production
                </h4>
                <p className="text-black/80 text-lg">
                  Une installation optimisée pour votre toiture
                </p>
              </div>
            </div>
            <ul className="text-black/80 list-disc list-inside text-lg space-y-2">
              <li>Équipements haute performance</li>
              <li>Installation professionnelle</li>
              <li>Suivi de production</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionSolarInstallationSection;
