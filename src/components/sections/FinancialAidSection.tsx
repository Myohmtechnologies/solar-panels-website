'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CurrencyEuroIcon, 
  DocumentCheckIcon, 
  SparklesIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

interface FinancialAidSectionProps {
  cityName: string;
  localIncentives?: string[];
}

const FinancialAidSection: React.FC<FinancialAidSectionProps> = ({ 
  cityName, 
  localIncentives = [] 
}) => {
  const incentiveIcons = [
    CurrencyEuroIcon,
    DocumentCheckIcon,
    SparklesIcon,
    LightBulbIcon
  ];

  return (
    <section 
      className="w-full bg-gradient-to-br from-yellow-50 to-yellow-100 py-16" 
      aria-label="Aides Financières pour l'Installation Solaire"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Aides Financières à {cityName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les subventions, crédits d&apos;impôts et aides locales pour votre projet solaire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Liste des Incitations */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
              <SparklesIcon className="w-8 h-8 mr-3 text-yellow-500" />
              Incitations Locales
            </h3>
            {localIncentives.length > 0 ? (
              <ul className="space-y-3">
                {localIncentives.map((incentive, index) => {
                  const IconComponent = incentiveIcons[index % incentiveIcons.length];
                  return (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                      <span>{incentive}</span>
                    </motion.li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-500 italic">
                Aucune incitation locale spécifique actuellement disponible.
              </p>
            )}
          </motion.div>

          {/* Informations Complémentaires */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
              <DocumentCheckIcon className="w-8 h-8 mr-3 text-yellow-500" />
              Conseils et Accompagnement
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>🏠 Éligibilité :</strong> Vérifiez les conditions spécifiques à votre projet
              </p>
              <p>
                <strong>💡 Conseil :</strong> Consultez un expert pour optimiser vos aides
              </p>
              <p>
                <strong>📋 Documents :</strong> Préparez vos justificatifs à l&apos;avance
              </p>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="/contact" 
                className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Demander un conseil personnalisé
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinancialAidSection;
