'use client';

import { 
  CurrencyEuroIcon, 
  SparklesIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const SolarBenefitsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Pourquoi choisir MY OHM Technologies ?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Votre partenaire de confiance pour tous vos projets électriques en région PACA
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Avantage 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <CheckBadgeIcon className="w-12 h-12 text-[#116290]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Certifications RGE
            </h3>
            <p className="text-gray-600 text-center">
              Qualifié IRVE, RGE QualiPV et garantie décennale pour votre sécurité
            </p>
          </div>

          {/* Avantage 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <ClockIcon className="w-12 h-12 text-[#116290]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Intervention Rapide
            </h3>
            <p className="text-gray-600 text-center">
              Devis sous 48h et intervention dans toute la région PACA
            </p>
          </div>

          {/* Avantage 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <WrenchScrewdriverIcon className="w-12 h-12 text-[#116290]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Expertise Complète
            </h3>
            <p className="text-gray-600 text-center">
              Bornes IRVE, électricité générale et panneaux solaires : un seul interlocuteur
            </p>
          </div>

          {/* Avantage 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <UserGroupIcon className="w-12 h-12 text-[#116290]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
              Accompagnement
            </h3>
            <p className="text-gray-600 text-center">
              Suivi personnalisé de A à Z et assistance pour toutes vos aides
            </p>
          </div>
        </div>
        {/* Section Engagements */}
        <div className="mt-12 bg-gradient-to-r from-[#116290] to-[#0a3d5c] p-8 rounded-3xl">
          <div className="flex items-center justify-center space-x-6">
            <ShieldCheckIcon className="w-12 h-12 text-white" />
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Nos Engagements MY OHM
              </h4>
              <ul className="text-white/90 list-disc list-inside text-lg">
                <li>Garantie décennale sur toutes nos installations</li>
                <li>SAV réactif et maintenance préventive</li>
                <li>Transparence totale sur les coûts et délais</li>
                <li>Prime Advenir : on s'occupe de tout pour vous</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-lg group"
          >
            Demander un devis gratuit
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolarBenefitsSection;
