'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import QuickSimulateur from '../simulators/QuickSimulateur';

interface RegionHeroProps {
  region: string;
  imagePath: string;
  ensoleillement: string;
  potentielSolaire: string;
}

const RegionHero = ({ region, imagePath, ensoleillement, potentielSolaire }: RegionHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center py-6 md:py-12 mt-16 md:mt-0">
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
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4">
                <span className="text-FFDF64">Divisez par 2</span> votre facture d'électricité dans la region PACA
              </h1>
            </motion.div>

            {/* Simulateur - Maintenant juste après le titre */}
            <div className="w-full lg:hidden transition-all duration-300 bg-white rounded-xl">
              <QuickSimulateur />
            </div>

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
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="snap-center bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-FFDF64 transition-all duration-300 shadow-sm hover:shadow-md">
                      <div>
                      <h4 className="text-lg font-bold text-gray-900">Pack 3 kWc</h4>
                        <p className="text-sm text-gray-500">Maison 60m² - 100m²</p>
                        <p className="text-xs text-gray-600 mt-1">6 Panneaux de 500W</p>
                      </div>
                    </div>

                    <div className="snap-center bg-white p-4 rounded-xl border-2 border-FFDF64 shadow-lg">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Pack 6 kWc</h4>
                        <p className="text-sm text-gray-500">Maison 100m² - 150m²</p>
                        <p className="text-xs text-gray-600 mt-1">12 Panneaux de 500W</p>
                      </div>
                    </div>

                    <div className="snap-center bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-FFDF64 transition-all duration-300 shadow-sm hover:shadow-md">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Pack 9 kWc</h4>
                        <p className="text-sm text-gray-500">Maison 150m² et plus</p>
                        <p className="text-xs text-gray-600 mt-1">18 Panneaux de 500W</p>
                      </div>
                    </div>
                  </div>

                  <div className="snap-center bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-FFDF64 transition-all duration-300 shadow-sm hover:shadow-md w-full">
                    <div className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base font-medium text-gray-700">Jusqu'à -70% sur votre facture</span>
                      <span className="mx-2">•</span>
                      <span className="text-base font-medium text-gray-700">≈ 1500€ d'économies/an</span>
                    </div>
                  </div>
                </div>

                {/* Section incitative au lieu du prix */}
                <div className="hidden md:block mt-6 space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border-2 border-FFDF64">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Découvrez nos prix 2025 et vos aides personnalisées
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Prix adaptés à votre consommation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-yellow-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Calcul immédiat de vos aides 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">-5% sur votre installation (offre limitée)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Colonne de droite - Simulateur */}
          <div className="hidden lg:block transition-all duration-300 bg-white rounded-xl">
            <QuickSimulateur />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionHero;
