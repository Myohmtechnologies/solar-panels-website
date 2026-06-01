'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, BoltIcon, ShieldCheckIcon, CheckBadgeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';

const SolarSolutionsSection = () => {
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);

  const openExpertModal = () => {
    setIsExpertModalOpen(true);
  };

  const closeExpertModal = () => {
    setIsExpertModalOpen(false);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Éléments décoratifs de fond */}
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
              Offre Solaire Clé en Main
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre Installation Photovoltaïque <span className="text-[#116290]">Haute Performance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Produisez votre propre électricité verte, réduisez vos factures et gagnez en autonomie grâce à nos installations sur-mesure.
          </p>
        </motion.div>

        {/* Logos des partenaires technologiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-white rounded-xl shadow-md p-6 border border-gray-100"
        >
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-2">
              <ShieldCheckIcon className="h-5 w-5 text-[#116290] mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Nos Partenaires Technologiques</h3>
            </div>
            <p className="text-sm text-gray-600">Nous utilisons uniquement du matériel haut de gamme garanti pour sa longévité et ses performances</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-6">
            <div className="text-center">
              <div className="relative h-12 w-28 mx-auto mb-1">
                <Image 
                  src="/images/dualsun-logo.svg" 
                  alt="DualSun" 
                  fill 
                  className="object-contain" 
                  sizes="112px"
                />
              </div>
              <p className="text-xs font-semibold text-gray-700">Panneaux DualSun</p>
              <p className="text-[10px] text-gray-400">Fabriqués en France</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-12 w-28 mx-auto mb-1">
                <Image 
                  src="/images/enphase-logo_black.png" 
                  alt="Enphase" 
                  fill 
                  className="object-contain" 
                  sizes="112px"
                />
              </div>
              <p className="text-xs font-semibold text-gray-700">Micro-onduleurs</p>
              <p className="text-[10px] text-gray-400">Technologie leader mondial</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-12 w-28 mx-auto mb-1">
                <Image 
                  src="/images/qualipv1.png" 
                  alt="QualiPV" 
                  fill 
                  className="object-contain" 
                  sizes="112px"
                />
              </div>
              <p className="text-xs font-semibold text-gray-700">Certification RGE</p>
              <p className="text-[10px] text-gray-400">Installation certifiée de qualité</p>
            </div>
          </div>
        </motion.div>

        {/* Section Tarification Simplifiée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-12 gap-0">
            {/* Côté image descriptif */}
            <div className="md:col-span-5 relative min-h-[300px] bg-gray-100">
              <Image
                src="/images/installateur-rge-panneaux-solaire.jpeg"
                alt="Installation de panneaux solaires par MyOhm Technologies"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <CheckBadgeIcon className="h-6 w-6 text-yellow-400" />
                  <span className="font-bold text-sm uppercase tracking-wider">Qualité Certifiée</span>
                </div>
                <p className="text-sm text-gray-200">Nos équipes internes assurent une pose aux normes de sécurité les plus strictes.</p>
              </div>
            </div>

            {/* Côté Offre Commerciale */}
            <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">Solution Complète</span>
                  <span className="px-3 py-1 bg-[#116290]/10 text-[#116290] text-xs font-semibold rounded-full uppercase tracking-wider">RGE QualiPV</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Installation Solaire clé en main
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                  De l'étude de faisabilité gratuite jusqu'au raccordement au réseau, nous gérons l'intégralité de vos démarches administratives.
                </p>

                {/* Bloc Tarif Unique */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100 flex flex-col sm:flex-row items-baseline sm:justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Offre à partir de</span>
                    <span className="text-4xl md:text-5xl font-black text-gray-900">5 990 €</span>
                    <span className="text-xs text-gray-500 block mt-1">* Tarif matériel et pose inclus</span>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm font-semibold text-green-600 flex items-center sm:justify-end gap-1">
                      <BoltIcon className="h-5 w-5" />
                      Économisez jusqu'à 70%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">sur vos factures électriques</p>
                  </div>
                </div>

                {/* Liste des arguments */}
                <ul className="space-y-3 mb-8">
                  {[
                    { title: "Matériel Premium", desc: "Panneaux DualSun monocristallins & micro-onduleurs Enphase." },
                    { title: "Installation RGE", desc: "Pose certifiée aux normes par nos techniciens RGE (QualiPV, assurance décennale)." },
                    { title: "Accompagnement administratif", desc: "Déclaration de mairie, Consuel et raccordement pris en charge." },
                    { title: "Garanties d'excellence", desc: "Matériel garanti jusqu'à 30 ans avec suivi de production sur smartphone." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-gray-700">
                        <strong className="font-semibold text-gray-900">{item.title} : </strong>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button 
                  onClick={openExpertModal}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#116290] to-[#1a7ab3] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Demander mon étude de faisabilité gratuite</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Garanties et Présence Locale */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#116290]/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#116290]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#116290] text-lg mb-1">Made in France</h3>
              <p className="text-sm text-gray-600">Tous nos panneaux photovoltaïques sont conçus et certifiés pour durer en réduisant notre empreinte carbone.</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#116290]/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#116290]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#116290] text-lg mb-1">Installateur Local & RGE</h3>
              <p className="text-sm text-gray-600">Basés en région PACA, nous n'avons aucun recours à la sous-traitance pour un suivi de chantier optimal.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Modal */}
      <EnergyExpertModal isOpen={isExpertModalOpen} onClose={closeExpertModal} source="solar" />
    </section>
  );
};

export default SolarSolutionsSection;
