'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface City {
  name: string;
  population?: number;
  sunshineHours?: number;
}

interface DepartmentCitiesListProps {
  departmentCode: string;
  departmentName: string;
  cities: Record<string, City>;
}

// Fonction pour convertir une clé de ville en slug URL
const cityKeyToSlug = (key: string): string => {
  return key
    .split(/(?=[A-Z])/)
    .map(part => part.toLowerCase())
    .join('-');
};

// Fonction pour obtenir le slug complet du département
const getDepartmentFullSlug = (code: string): string => {
  const slugs: { [key: string]: string } = {
    '04': '04-alpes-de-haute-provence',
    '05': '05-hautes-alpes',
    '06': '06-alpes-maritimes',
    '13': '13-bouches-du-rhone',
    '83': '83-var',
    '84': '84-vaucluse'
  };
  return slugs[code] || code;
};

export default function DepartmentCitiesList({ departmentCode, departmentName, cities }: DepartmentCitiesListProps) {
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
            Installation Panneaux Solaires en {departmentName}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez nos solutions d'installation de panneaux solaires dans toutes les villes du département
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(cities).map(([cityKey, city], index) => {
            const citySlug = cityKeyToSlug(cityKey);
            return (
              <motion.div
                key={cityKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  href={`/region/paca/departements/${getDepartmentFullSlug(departmentCode)}/villes/${citySlug}`}
                  className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-lg shrink-0">
                      <MapPinIcon className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        {city.name}
                      </h3>
                      <div className="space-y-1">
                        {city.population && (
                          <p className="text-sm text-gray-500">
                            {city.population.toLocaleString('fr-FR')} habitants
                          </p>
                        )}
                        {city.sunshineHours && (
                          <p className="text-sm text-gray-500">
                            {city.sunshineHours}h d'ensoleillement/an
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Profitez de l'excellent ensoleillement du {departmentName} pour votre installation solaire
          </p>
        </div>
      </div>
    </section>
  );
}
