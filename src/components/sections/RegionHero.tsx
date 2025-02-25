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

export default function RegionHero({ region, imagePath, ensoleillement, potentielSolaire }: RegionHeroProps) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center">
      {/* Image optimisée avec overlay amélioré */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePath}
          alt={`Installation panneaux solaires ${region}`}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-24">
        {/* Titre principal avec accent - Visible en premier sur mobile */}
        <div className="mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Installation Panneaux Solaires en <span className="text-yellow-400">{region}</span>
            </h1>
            <p className="text-xl text-white/90">Réduisez vos factures d'électricité jusqu'à 70% avec notre solution clé en main</p>
          </div>
        </div>

        {/* Grille principale avec ordre modifié pour mobile */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Simulateur - Apparaît en second sur mobile */}
          <div className="order-1 md:order-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="bg-yellow-500 px-6 py-4">
                <h2 className="text-xl font-bold text-black">Simulateur Gratuit</h2>
                <p className="text-yellow-100">Calculez vos économies en 2 minutes</p>
              </div>
              <div className="p-6">
                <QuickSimulateur />
              </div>
            </div>
          </div>

          {/* Points clés et solutions - Apparaît en dernier sur mobile */}
          <div className="order-2 md:order-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="space-y-6">
                {/* Avantages */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Profitez des Aides 2025
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-yellow-50/50 rounded-xl p-4">
                      <div className="shrink-0 bg-yellow-100 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 017.5 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Installation Express</h3>
                        <p className="text-sm text-gray-600">pose et installation rapide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-green-50/50 rounded-xl p-4">
                      <div className="shrink-0 bg-green-100 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Économies</h3>
                        <p className="text-sm text-gray-600">Jusqu'à -70% sur vos factures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-blue-50/50 rounded-xl p-4">
                      <div className="shrink-0 bg-blue-100 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Devis Gratuit</h3>
                        <p className="text-sm text-gray-600">Sans engagement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-purple-50/50 rounded-xl p-4">
                      <div className="shrink-0 bg-purple-100 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-purple-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Experts RGE</h3>
                        <p className="text-sm text-gray-600">Certifiés en {region}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions Photovoltaïques */}
                <div className="pt-6 border-t border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Nos Solutions Photovoltaïques 2025 ⭐️
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* Pack 3 kWc */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Pack 3 kWc</h3>
                      <p className="text-sm text-gray-600 mb-4">Maison 60m² - 100m²</p>
                      <p className="text-sm text-gray-600 mb-4">6 Panneaux de 500W</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">-40% sur votre facture</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">≈ 500€ d'économies/an</span>
                        </div>
                      </div>
                    </div>

                    {/* Pack 6 kWc - Le plus choisi */}
                    <div className="bg-white rounded-xl p-6 shadow-md relative border-2 border-green-500">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Pack 6 kWc</h3>
                      <p className="text-sm text-gray-600 mb-4">Maison 100m² - 150m²</p>
                      <p className="text-sm text-gray-600 mb-4">12 Panneaux de 500W</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">-60% sur votre facture</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">≈ 1000€ d'économies/an</span>
                        </div>
                      </div>
                    </div>

                    {/* Pack 9 kWc */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Pack 9 kWc</h3>
                      <p className="text-sm text-gray-600 mb-4">Maison 150m² et plus</p>
                      <p className="text-sm text-gray-600 mb-4">18 Panneaux de 500W</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">-70% sur votre facture</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">≈ 1500€ d'économies/an</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Made in France & Local */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-xl p-4 shadow-md flex items-start gap-3">
                      <span className="text-2xl">🇫🇷</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Made in France</h3>
                        <p className="text-sm text-gray-600">Panneaux photovoltaïques fabriqués en France</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">100% Local</h3>
                        <p className="text-sm text-gray-600">Entreprise PACA, 0 sous-traitance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
