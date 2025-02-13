'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import QuickLeadForm from '../forms/QuickLeadForm';

interface RegionHeroProps {
  region: string;
  imagePath: string;
  ensoleillement: string;
  potentielSolaire: string;
}

const RegionHero = ({ region, imagePath, ensoleillement, potentielSolaire }: RegionHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center py-6 md:py-12">
      {/* Image de fond */}
      <Image
        src={imagePath}
        alt={`Installation panneaux solaires ${region}`}
        fill
        className="object-cover z-0"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Contenu à gauche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            {/* Badge Promo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold mb-4 md:mb-6"
            >
              🎯 Offre Spéciale 2025
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4">
              <span className="text-FFDF64">Divisez par 2</span> votre facture d'électricité en {region}
            </h1>

            {/* Prix et rentabilité */}
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-4 md:p-6 rounded-xl border-2 border-FFDF64 shadow-xl"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                  <span className="text-xl md:text-2xl">⚡</span>
                  Nos Solutions Photovoltaïques
                </h3>

                {/* Grid des packs en version mobile : scroll horizontal */}
                <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory">
                  <div className="snap-center min-w-[280px] md:min-w-0 bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-FFDF64 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900">Pack 3 kWc</h4>
                      <p className="text-sm text-gray-500">Idéal petit foyer</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg text-center">
                      <p className="text-green-700 font-medium">-40% sur la facture</p>
                      <p className="text-sm text-green-600">≈ 500€/an</p>
                    </div>
                  </div>

                  <div className="snap-center min-w-[280px] md:min-w-0 bg-white p-4 rounded-xl border-2 border-FFDF64 shadow-lg flex-shrink-0">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900">Pack 6 kWc</h4>
                      <p className="text-sm text-gray-500">Idéal famille</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg text-center">
                      <p className="text-green-700 font-medium">-60% sur la facture</p>
                      <p className="text-sm text-green-600">≈ 1000€/an</p>
                    </div>
                  </div>

                  <div className="snap-center min-w-[280px] md:min-w-0 bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-FFDF64 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900">Pack 9 kWc</h4>
                      <p className="text-sm text-gray-500">Grande maison</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg text-center">
                      <p className="text-green-700 font-medium">-70% sur la facture</p>
                      <p className="text-sm text-green-600">≈ 1500€/an</p>
                    </div>
                  </div>
                </div>

                {/* Prix avec image - Optimisé mobile */}
                <div className="mt-6 space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-4 rounded-lg gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <Image
                        src="/images/panneaux-solaire.jpg"
                        alt="Panneau solaire"
                        width={80}
                        height={80}
                        className="rounded-lg object-cover hidden md:block"
                      />
                      <div>
                        <div className="mb-1">
                          <span className="text-sm text-gray-500">À partir de</span>
                          <span className="text-xl md:text-2xl font-bold text-gray-900 ml-2">7 900€*</span>
                        </div>
                        <p className="text-sm text-gray-600">Soit 68€/mois**</p>
                        <p className="text-sm mt-2 bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                          <span className="font-medium">Jusqu'à 3 600€</span> d'aides de l'État
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-auto text-center md:text-right">
                      <p className="text-sm bg-FFDF64 text-black px-3 py-1 rounded-full font-medium inline-block">
                        Offre limitée
                      </p>
                    </div>
                  </div>

                  {/* Avantages - Optimisé mobile */}
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <span className="text-2xl">🇫🇷</span>
                      </div>
                      <span className="text-sm md:text-base text-gray-700">Installation panneaux solaires garantis 25 ans</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded border border-gray-200 flex-shrink-0">
                        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-700">Installation par nos équipes qualifiées (0 sous-traitance)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded border border-gray-200 flex-shrink-0">
                        <svg className="w-6 h-6 text-FFDF64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-700">{ensoleillement} d'ensoleillement par an</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulaire à droite */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-5/12"
          >
            <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Demandez votre étude gratuite
                </h2>
              </div>
              <QuickLeadForm />
              {/* Sécurisation */}
              <div className="text-xs text-gray-500 mt-4 text-center">
                🔒 Vos données sont protégées et ne seront jamais partagées
                <br />
                <a href="/privacy-policy" className="underline hover:text-gray-700">
                  Politique de confidentialité
                </a>
              </div>
              {/* Trust Badges */}
              <div className="flex justify-center items-center gap-4 md:gap-6 mt-6 flex-wrap">
                <Image
                  src="/images/rge1.png"
                  alt="Certification RGE"
                  width={85}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                />
                <Image
                  src="/images/qualipv1.png"
                  alt="Certification QualiPV"
                  width={95}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                />
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                  <span className="text-base md:text-lg font-medium text-gray-700">4,9/5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegionHero;
