'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { regions } from '@/config/seo';

interface Props {
  region: string;
}

const RegionDepartments = ({ region }: Props) => {
  const currentRegion = regions.find(r => r.name === region || r.name === 'Provence-Alpes-Côte d\'Azur');

  if (!currentRegion || !currentRegion.departments.length) return null;

  const formatDepartmentUrl = (department: { code: string; name: string }) => {
    const departmentUrls: { [key: string]: string } = {
      '04': '04-alpes-de-haute-provence',
      '05': '05-hautes-alpes',
      '06': '06-alpes-maritimes',
      '13': '13-bouches-du-rhone',
      '83': '83-var',
      '84': '84-vaucluse'
    };
    return `/region/paca/departements/${departmentUrls[department.code]}`;
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Services par Département
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Découvrez nos solutions d'installation de panneaux solaires adaptées à chaque département de la région {region}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentRegion.departments.map((department, index) => (
              <motion.div
                key={department.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={formatDepartmentUrl(department)}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-FFDF64">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-ffeb99 to-ffb700 group-hover:from-ffeb99 group-hover:to-ffb700 transition-all duration-300">
                        <MapPinIcon className="w-6 h-6 text-gray-800" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                          {department.name}
                        </h3>
                        <p className="text-gray-500 group-hover:text-gray-600">
                          Département {department.code}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-700 mt-2">
                      Population: {new Intl.NumberFormat('fr-FR').format(department.population)} habitants
                    </p>
                    {department.sunshineHours && (
                      <p className="text-gray-600 group-hover:text-gray-700">
                        {department.sunshineHours}h d'ensoleillement/an
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionDepartments;
