'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { citiesByDepartment } from '@/config/cities';

// Fonction pour obtenir le slug du département avec son code
function getDepartmentFullSlug(code: string): string {
  const slugs: { [key: string]: string } = {
    '04': '04-alpes-de-haute-provence',
    '05': '05-hautes-alpes',
    '06': '06-alpes-maritimes',
    '13': '13-bouches-du-rhone',
    '83': '83-var',
    '84': '84-vaucluse'
  };
  return slugs[code] || code;
}

function getDepartmentName(code: string): string {
  const departments: { [key: string]: string } = {
    '04': 'Alpes-de-Haute-Provence',
    '05': 'Hautes-Alpes',
    '06': 'Alpes-Maritimes',
    '13': 'Bouches-du-Rhône',
    '83': 'Var',
    '84': 'Vaucluse'
  };
  return departments[code] || code;
}

export default function CitiesList() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Services par Ville
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez nos solutions d'installation de panneaux solaires dans les principales villes de la région PACA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(citiesByDepartment).map(([deptCode, cities]) => (
            <div key={deptCode} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {getDepartmentName(deptCode)}
              </h3>
              {cities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={`/region/paca/departements/${getDepartmentFullSlug(deptCode)}/villes/${city.slug}`}
                    className="block bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-lg">
                        <MapPinIcon className="w-5 h-5 text-gray-800" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{city.name}</h4>
                        <p className="text-sm text-gray-500">
                          {city.population.toLocaleString('fr-FR')} habitants
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
