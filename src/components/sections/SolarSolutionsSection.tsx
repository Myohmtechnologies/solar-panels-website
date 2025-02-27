'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, BoltIcon, ArrowTrendingUpIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const SolarSolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      name: 'Pack 3 kWc',
      subtitle: 'Maison 60m² - 100m²',
      details: '6 Panneaux de 500W',
      savings: '-40% sur votre facture',
      economy: "jusqu'à 1000€ d'économies/an",
      image: '/images/3kwh.png',
      features: [
        'Garantie 30 ans',
        'Monitoring via application',
        'Idéal pour les petits foyers'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Pack 6 kWc',
      subtitle: 'Maison 100m² - 150m²',
      details: '12 Panneaux de 500W',
      savings: '-60% sur votre facture',
      economy: "jusqu'à 1600€ d'économies/an",
      image: '/images/6kwh.png',
      features: [

        'Garantie 30 ans',
        'Monitoring avancé',
        'Idéal pour les familles'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Pack 9 kWc',
      subtitle: 'Maison 150m² et plus',
      details: '18 Panneaux de 500W',
      savings: '-70% sur votre facture',
      economy: "jusqu'à 2400€ d'économies/an",
      image: '/images/9kwh.png',
      features: [
        'Garantie 30 ans',
        'Monitoring professionnel',
        'Idéal pour les grandes maisons'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-2 px-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full mb-4">
            <span className="text-yellow-800 font-medium text-sm flex items-center">
              <SunIcon className="h-5 w-5 mr-2" />
              Solutions 2025
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Solutions Photovoltaïques <span className="text-[#116290]">Nouvelle Génération</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des installations sur mesure pour tous les types de maisons, avec des panneaux haute performance fabriqués en France
          </p>
        </motion.div>

        {/* Logos des partenaires technologiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-white rounded-xl shadow-md p-6"
        >
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-2">
              <ShieldCheckIcon className="h-5 w-5 text-[#116290] mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Nos Partenaires Technologiques</h3>
            </div>
            <p className="text-gray-600">Nous utilisons uniquement des équipements de qualité supérieure pour garantir performance et durabilité</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-6">
            <div className="text-center">
              <div className="relative h-16 w-32 mx-auto mb-2">
                <Image 
                  src="/images/dualsun-logo.svg" 
                  alt="DualSun" 
                  fill 
                  className="object-contain" 
                  sizes="128px"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Panneaux Solaires</p>
              <p className="text-xs text-gray-500">Fabriqués en France</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-16 w-32 mx-auto mb-2">
                <Image 
                  src="/images/enphase-logo_black.png" 
                  alt="Enphase" 
                  fill 
                  className="object-contain" 
                  sizes="128px"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Micro-onduleurs</p>
              <p className="text-xs text-gray-500">Leader mondial</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-16 w-32 mx-auto mb-2">
                <Image 
                  src="/images/qualipv1.png" 
                  alt="QualiPV" 
                  fill 
                  className="object-contain" 
                  sizes="128px"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Certification</p>
              <p className="text-xs text-gray-500">Installation certifiée</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: solution.id * 0.1 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] ${
                solution.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
            
              
              <div className="relative h-48 w-full">
                <Image
                  src={solution.image}
                  alt={solution.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">{solution.name}</h3>
                    <p className="text-white/80 text-sm">{solution.subtitle}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">{solution.details}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400">Qualité</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <BoltIcon className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800 text-sm">{solution.savings}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-800 text-sm">{solution.economy}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2 text-[#116290]" />
                    Caractéristiques
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-[#116290] to-[#1a7ab3] text-white font-medium rounded-lg transition-all hover:shadow-lg flex items-center justify-center">
                  Demander un devis
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border border-[#d7f0fc] flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#116290]/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#116290]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#116290] text-lg mb-2">Made in France</h3>
              <p className="text-gray-600">Tous nos panneaux photovoltaïques sont fabriqués en France, garantissant une qualité supérieure et un impact environnemental réduit.</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border border-[#d7f0fc] flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#116290]/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#116290]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#116290] text-lg mb-2">100% Local</h3>
              <p className="text-gray-600">Entreprise basée en PACA, nous assurons toutes les installations nous-mêmes, sans sous-traitance, pour un service de proximité et de qualité.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSolutionsSection;
