'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SunIcon, BoltIcon, HomeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { regions } from '@/config/seo';
import alpesDeHauteProvence from '@/app/data/departments/04-alpes-de-haute-provence';
import bouchesdurhone from '@/app/data/departments/13-bouches-du-rhone';
import var83 from '@/app/data/departments/83-var';

interface Props {
  region: string;
  advantages: Array<{
    title: string;
    description: string;
  }>;
}

const RegionSolarInstallationSection = ({ region, advantages = [] }: Props) => {
  // Détermine le bon département en fonction du nom de la région
  const getDepartmentData = (regionName: string) => {
    switch (regionName) {
      case 'Alpes-de-Haute-Provence':
        return alpesDeHauteProvence;
      case 'Bouches-du-Rhône':
        return bouchesdurhone;
      case 'Var':
        return var83;
      default:
        return alpesDeHauteProvence; // Fallback par défaut
    }
  };

  const departmentData = getDepartmentData(region);
  const cities = Object.values(departmentData.cities || {})
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);

  const currentRegion = regions.find(r => r.name === region);
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Installation Panneaux photovoltaiques en {region}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez nos solutions d&apos;installation de panneaux solaires adaptées à votre région
          </motion.p>
        </div>

        {/* Image and Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/installation-purchasse.jpg"
                alt={`Installation de panneaux solaires en ${region}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                  <p className="mt-2 text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

       
         

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl mt-16"
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
              <li>Étude personnalisée gratuite</li>
              <li>Accompagnement dans vos démarches</li>
              <li>Installation par des experts certifiés</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionSolarInstallationSection;
