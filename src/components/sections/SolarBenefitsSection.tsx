'use client';

import { 
  CurrencyEuroIcon, 
  SparklesIcon, 
  LightBulbIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const SolarBenefitsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Les Avantages des Panneaux Solaires
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Avantage 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <CurrencyEuroIcon className="w-12 h-12 text-FFDF64" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Économies Financières
            </h3>
            <p className="text-gray-600 text-center">
              Réduisez jusqu&apos;à 70% de votre facture électrique grâce à une production d&apos;énergie propre et économique.
            </p>
          </div>

          {/* Avantage 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <SparklesIcon className="w-12 h-12 text-FFDF64" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Impact Environnemental
            </h3>
            <p className="text-gray-600 text-center">
              Contribuez à la réduction des émissions de CO2 et participez activement à la transition énergétique.
            </p>
          </div>

          {/* Avantage 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <LightBulbIcon className="w-12 h-12 text-FFDF64" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Indépendance Énergétique
            </h3>
            <p className="text-gray-600 text-center">
              Produisez votre propre électricité et réduisez votre dépendance au réseau électrique traditionnel.
            </p>
          </div>
        </div>

        {/* Section Résultats */}
        <div className="mt-12 bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl">
          <div className="flex items-center justify-center space-x-6">
            <ShieldCheckIcon className="w-12 h-12 text-black" />
            <div>
              <h4 className="text-2xl font-bold text-black mb-3">
                Bénéfices à Long Terme
              </h4>
              <ul className="text-black/80 list-disc list-inside text-lg">
                <li>Valorisation de votre bien immobilier</li>
                <li>Éligibilité aux aides gouvernementales</li>
                <li>Technologie 100% renouvelable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarBenefitsSection;
