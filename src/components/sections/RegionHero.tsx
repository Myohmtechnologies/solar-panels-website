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
    <section className="relative min-h-screen flex items-center py-12">
      {/* Image de fond */}
      <Image
        src={imagePath}
        alt={`Installation panneaux solaires en ${region}`}
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contenu à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white"
          >
            {/* Badge Promo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full font-bold mb-6"
            >
              🎯 Offre Spéciale 2025
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-FFDF64">Divisez par 2</span> votre facture d'électricité en {region}
            </h1>

          

            {/* Prix et rentabilité */}
            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-xl border-2 border-FFDF64 shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                  <span className="text-2xl">⚡</span>
                  Nos Solutions Photovoltaïques
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-FFDF64 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900">Pack 3 kWc</h4>
                      <p className="text-sm text-gray-500">Idéal petit foyer</p>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-black">2-3 personnes</span>
                      </div>
                      
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg text-center">
                      <p className="text-green-700 font-medium">-40% sur la facture</p>
                      <p className="text-sm text-green-600">≈ 500€/an</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border-2 border-FFDF64 shadow-lg relative">
                    
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900">Pack 6 kWc</h4>
                      <p className="text-sm text-gray-500">Idéal famille</p>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-black">3-4 personnes</span>
                      </div>
                      
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg text-center">
                      <p className="text-green-700 font-medium">-60% sur la facture</p>
                      <p className="text-sm text-green-600">≈ 1000€/an</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-FFDF64 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900">Pack 9 kWc</h4>
                      <p className="text-sm text-gray-500">Grande maison</p>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-black">5+ personnes</span>
                      </div>
                     
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg text-center">
                      <p className="text-green-700 font-medium">-70% sur la facture</p>
                      <p className="text-sm text-green-600">≈ 1500€/an</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/panneaux-solaire.jpg"
                        alt="Panneau solaire"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <div className="mb-1">
                          <span className="text-sm text-gray-500">À partir de</span>
                          <span className="text-2xl font-bold text-gray-900 ml-2">8 200€*</span>
                        </div>
                        <p className="text-sm text-gray-600">Soit 68€/mois**</p>
                        <p className="text-sm mt-2 bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                          <span className="font-medium">Jusqu'à 3 600€</span> d'aides de l'État
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm bg-FFDF64 text-black px-3 py-1 rounded-full font-medium">
                        Offre limitée
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1.5 rounded flex items-center justify-center border border-gray-200">
                        <span className="text-3xl">🇫🇷</span>
                      </div>
                      <span className="text-m text-gray-700">Installation panneaux solaires garantis 25 ans</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1.5 rounded border border-gray-200">
                        <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-m text-gray-700">Installation par nos équipes qualifiées (0 sous-traitance)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1.5 rounded border border-gray-200">
                        <svg className="w-8 h-8 text-FFDF64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <span className="text-m text-gray-700">{ensoleillement} d'ensoleillement par an</span>
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[450px]"
          >
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Étude gratuite et sans engagement
                </h2>
                <p className="text-green-600 font-semibold">
                  Région {region}
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Un expert vous rappelle sous 24h
                </p>
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
              <div className="flex justify-center items-center gap-6 mt-6">
                  <Image
                    src="/images/rge1.png"
                    alt="Certification RGE"
                    width={85}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/images/qualipv1.png"
                    alt="Certification QualiPV"
                    width={95}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/google.png"
                      alt="Google"
                      width={20}
                      height={20}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-lg font-medium text-gray-700">4,9/5</span>
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
