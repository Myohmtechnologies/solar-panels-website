'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BoltIcon,
  SunIcon,
  ChartBarIcon,
  CurrencyEuroIcon,
  ClockIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import BatterieStockageSchemaMarkup from '@/components/BatterieStockageSchemaMarkup';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';
import BatteryComparisonSimulator from '@/components/sections/BatteryComparisonSimulator';



const features = [
  {
    name: 'Optimisation de l\'autoconsommation',
    description: 'Stockez l\'énergie produite pendant la journée pour l\'utiliser le soir.',
    icon: SunIcon,
  },
  {
    name: 'Économies substantielles',
    description: 'Réduisez votre facture d\'électricité en utilisant votre propre énergie stockée.',
    icon: CurrencyEuroIcon,
  },
  {
    name: 'Autonomie énergétique',
    description: 'Gagnez en indépendance vis-à-vis du réseau électrique traditionnel.',
    icon: BoltIcon,
  },
  {
    name: 'Gestion intelligente',
    description: 'Pilotez votre consommation grâce à des systèmes de gestion intelligents.',
    icon: ChartBarIcon,
  },
  {
    name: 'Installation rapide',
    description: 'Une installation professionnelle réalisée par nos experts certifiés.',
    icon: ClockIcon,
  },
];

const batteryTypes = [
  {
    name: 'Pack Essentiel',
    capacity: '5 kWh',
    idealFor: 'Petite maison',
    description: 'Solution idéale pour les petits foyers souhaitant commencer leur transition énergétique.',
    features: [
      'Capacité de stockage de 5 kWh',
      'Idéal pour un couple',
      'Garantie de 10 ans',
      'Monitoring via application mobile',
    ],
  },
  {
    name: 'Pack Confort',
    capacity: '10 kWh',
    idealFor: 'Maison moyenne',
    description: 'Notre bestseller pour les maisons familiales cherchant une autonomie optimale.',
    features: [
      'Capacité de stockage de 10 kWh',
      'Idéal pour un couple ou une petite famille',
      'Garantie de 10 ans',
      'Système de backup intégré',
      'Monitoring avancé',
    ],
  },
  {
    name: 'Pack Premium',
    capacity: '15 kWh',
    idealFor: 'Grande maison',
    description: 'La solution complète pour une autonomie maximale et un confort optimal.',
    features: [
      'Capacité de stockage de 15 kWh',
      'Idéal pour une famille',
      'Garantie de 10 ans',
      'Système de backup avancé',
      'Monitoring professionnel',
      'Extension possible',
    ],
  },
];

export default function BatterieStockagePage() {
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  
  const openExpertModal = () => {
    setIsExpertModalOpen(true);
  };
  
  const closeExpertModal = () => {
    setIsExpertModalOpen(false);
  };
  
  return (
    <main className="bg-white">
      <BatterieStockageSchemaMarkup />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Fond subtil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-50" />
          <div className="absolute inset-0 opacity-10 bg-grid-gray/10" style={{ backgroundSize: '30px 30px' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <div className="inline-block px-4 py-1 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-full mb-6">
                <span className="text-[#116290] font-medium">Stockage d'énergie intelligent</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                Système de stockage d'énergie intelligent, évolutif
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Optimisez votre installation photovoltaïque avec nos solutions de stockage d'énergie de nouvelle génération.
                Stockez votre surplus d'énergie le jour pour l'utiliser quand vous en avez besoin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-medium text-lg hover:bg-[#0d4e73] transition-all shadow-lg hover:shadow-xl"
                >
                  Demander un devis
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  href="/simulator"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#116290]/30 text-[#116290] rounded-full font-medium text-lg hover:bg-[#116290]/5 transition-all"
                >
                  Simuler mon projet
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#116290]/10">
                <Image
                  src="/images/batterie-de-stockage-solaires.png"
                  alt="Système de stockage d'énergie intelligent"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#116290] p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#116290]/10 rounded-full">
                    <BoltIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">90%</div>
                    <div className="text-sm text-gray-300">d'autonomie possible</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi installer une batterie de stockage solaire ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages de l'installation d'une batterie de stockage solaire pour votre maison.
            </p>
          </div>
          {/* Cartes d'avantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Carte 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="text-yellow-400">
                  <CurrencyEuroIcon className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Réduisez vos factures</h3>
              <p className="text-gray-600 text-sm">
                Économisez jusqu'à 90% sur votre facture d'électricité
              </p>
            </div>
            
            {/* Carte 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="text-yellow-400">
                  <ShieldCheckIcon className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Aides & Subventions</h3>
              <p className="text-gray-600 text-sm">
                Profitez des aides de l'État pour une installation abordable
              </p>
            </div>
            
            {/* Carte 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="text-yellow-400">
                  <SunIcon className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Avenir Durable</h3>
              <p className="text-gray-600 text-sm">
                Contribuez activement à la protection de notre planète
              </p>
            </div>
            
            {/* Carte 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="text-yellow-400">
                  <BoltIcon className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Indépendance</h3>
              <p className="text-gray-600 text-sm">
                Produisez votre propre énergie en toute autonomie
              </p>
            </div>
          </div>
          {/* Section Bénéfices à Long Terme */}
          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-2xl p-8 mb-16">
            <h3 className="text-xl font-bold text-center mb-6">Bénéfices à Long Terme</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-shrink-0">
                <ShieldCheckIcon className="h-16 w-16 text-gray-800" />
              </div>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Valorisation de votre bien immobilier</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Accès direct aux aides et subventions</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Technologie 100% renouvelable</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Bouton de simulation */}
          <div className="text-center">
            <Link
              href="/simulator"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-gray-900 rounded-full font-medium text-lg hover:bg-[#0d4e73] transition-all shadow-lg hover:shadow-xl"
            >
              Simulez vos économies dès maintenant
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          {/* Statistiques */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#116290] p-8 rounded-2xl text-white text-center"
            >
              <div className="text-4xl font-bold mb-2">90%</div>
              <p className="text-white/80">d'autonomie énergétique possible</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#116290] p-8 rounded-2xl text-white text-center"
            >
              <div className="text-4xl font-bold mb-2">-90%</div>
              <p className="text-white/80">sur votre facture d'électricité</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#116290] p-8 rounded-2xl text-white text-center"
            >
              <div className="text-4xl font-bold mb-2">10 ans</div>
              <p className="text-white/80">de garantie sur nos batteries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full mb-4">
              Technologie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne une batterie de stockage solaire ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un système intelligent qui optimise votre production et consommation d'énergie
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl relative overflow-hidden">
                <Image
                  src="/images/Schéma de Fonctionnement d'une Batterie de Stockage Solaire - visual selection.png"
                  alt="Schéma de fonctionnement d'une batterie de stockage solaire"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center text-gray-900 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Production d'énergie</h3>
                    <p className="text-gray-600">
                      Vos panneaux solaires produisent de l'électricité pendant la journée, alimentant directement votre maison.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center text-gray-900 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stockage du surplus</h3>
                    <p className="text-gray-600">
                      L'énergie excédentaire est stockée dans votre batterie au lieu d'être réinjectée dans le réseau, maximisant votre autoconsommation.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center text-gray-900 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Utilisation en soirée</h3>
                    <p className="text-gray-600">
                      Le soir et la nuit, lorsque vos panneaux ne produisent plus, votre batterie prend le relais pour alimenter votre maison.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center text-gray-900 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gestion intelligente</h3>
                    <p className="text-gray-600">
                      Un système de gestion intelligent optimise les flux d'énergie en fonction de votre consommation et de la météo.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-medium text-lg hover:bg-[#0d4e73] transition-all shadow-lg hover:shadow-xl"
            >
              Parler à un expert
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-full mb-4">
              <span className="text-[#116290] font-medium">Faites votre simulation</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparez vos économies avec et sans batterie
            </h2>

            <div className="max-w-4xl mx-auto">
                <BatteryComparisonSimulator />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez combien vous pourriez economiser en ajoutant une batterie de stockage à votre installation solaire.
            </p>
          </div>
          
          
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Prêt à passer à l'action ? Nos experts sont à votre disposition pour vous aider à choisir la meilleure solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-medium text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Demander un devis personnalisé
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos solutions de stockage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la solution adaptée à vos besoins énergétiques.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batteryTypes.map((battery, index) => (
              <motion.div
                key={battery.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-yellow-50 rounded-full px-4 py-1 text-yellow-800 text-sm font-medium w-fit">
                  {battery.idealFor}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                  {battery.name}
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {battery.capacity}
                </div>
                <p className="text-gray-600 mb-6">
                  {battery.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {battery.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-gray-900 group"
                >
                  En savoir plus
                  <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={openExpertModal}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 text-black" />
                    Demander à être rappelé par un expert énergie
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" style={{ backgroundSize: '30px 30px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à optimiser votre installation solaire ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour vous conseiller et vous accompagner dans le choix
            de la solution de stockage adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-FFDF64 text-gray-900 rounded-full font-medium text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl"
            >
              Demander un devis gratuit
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/simulator"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all"
            >
              Simuler mon projet
            </Link>
          </div>
        </div>
      </section>
      
      {/* Expert Modal */}
      <EnergyExpertModal isOpen={isExpertModalOpen} closeModal={closeExpertModal} />
    </main>
  );
}
