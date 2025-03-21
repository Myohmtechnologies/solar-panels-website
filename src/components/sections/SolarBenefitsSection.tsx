'use client';

import { 
  CurrencyEuroIcon, 
  SparklesIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const SolarBenefitsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Pourquoi faut-il installer des panneaux solaires?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Avantage 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <CurrencyEuroIcon className="w-12 h-12 text-FFDF64" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Réduisez vos factures
            </h3>
            <p className="text-gray-600 text-center">
              Économisez jusqu&apos;à 70% sur votre facture d&apos;électricité
            </p>
          </div>

          {/* Avantage 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-12 h-12 text-FFDF64" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Aides & Subventions
            </h3>
            <p className="text-gray-600 text-center">
              Profitez des aides de l&apos;État pour une installation abordable
            </p>
          </div>

          {/* Avantage 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <SparklesIcon className="w-12 h-12 text-FFDF64" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Avenir Durable
            </h3>
            <p className="text-gray-600 text-center">
              Contribuez activement à la protection de notre planète
            </p>
          </div>

          {/* Avantage 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <LightBulbIcon className="w-12 h-12 text-FFDF64" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Indépendance
            </h3>
            <p className="text-gray-600 text-center">
              Produisez votre propre énergie en toute autonomie
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
                <li>Accès direct aux aides et subventions</li>
                <li>Technologie 100% renouvelable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link 
            href="/simulator"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ffb700 to-ffeb99 text-black font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-lg group"
          >
            Simulez vos économies dès maintenant
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolarBenefitsSection;
