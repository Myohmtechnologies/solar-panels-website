'use client';

import { RegionData } from '@/config/seo';
import { motion } from 'framer-motion';
import {
  SunIcon,
  BoltIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

interface Props {
  region: RegionData;
}

const RegionStats = ({ region }: Props) => {
  const stats = [
    {
      icon: SunIcon,
      value: region.sunshineHours,
      unit: 'h/an',
      label: 'd\'ensoleillement',
      color: 'text-FFDF64'
    },
    {
      icon: BoltIcon,
      value: region.stats.solarPotential,
      unit: 'kWh/kWc',
      label: 'de production moyenne',
      color: 'text-AFC97E'
    },
    {
      icon: HomeIcon,
      value: region.stats.installedCapacity,
      unit: 'MW',
      label: 'de puissance installée',
      color: 'text-7EB6C9'
    },
    {
      icon: UsersIcon,
      value: region.stats.population.toLocaleString('fr-FR'),
      unit: '',
      label: 'habitants',
      color: 'text-C97E7E'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Le Solaire en {region.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Des conditions idéales pour votre installation photovoltaïque
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${stat.color} bg-opacity-10">
                <stat.icon className="w-6 h-6 ${stat.color}" />
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  {stat.unit && (
                    <span className="ml-1 text-gray-500 text-sm">{stat.unit}</span>
                  )}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionStats;
