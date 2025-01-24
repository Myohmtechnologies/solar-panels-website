'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  SunIcon,
  ChartBarIcon,
  CurrencyEuroIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import BatterieStockageSchemaMarkup from '@/components/BatterieStockageSchemaMarkup';

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
      'Idéal pour 2-3 personnes',
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
      'Idéal pour 4-5 personnes',
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
      'Idéal pour 6+ personnes',
      'Garantie de 10 ans',
      'Système de backup avancé',
      'Monitoring professionnel',
      'Extension possible',
    ],
  },
];

export default function BatterieStockagePage() {
  return (
    <main className="bg-white">
      <BatterieStockageSchemaMarkup />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ffeb99 to-ffb700" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
                Batteries de Stockage
              </h1>
              <p className="text-xl text-gray-800 mb-8">
                Optimisez votre installation photovoltaïque avec nos solutions de stockage d'énergie.
                Stockez votre surplus d'énergie le jour pour l'utiliser la nuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Demander un devis
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  href="/simulator"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
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
              <Image
                src="/images/batterie-de-stockage.webp"
                alt="Batterie de stockage"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-50 rounded-full">
                    <BoltIcon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">90%</div>
                    <div className="text-sm text-gray-600">d'autonomie possible</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir une batterie de stockage ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximisez le potentiel de votre installation photovoltaïque et gagnez en indépendance énergétique.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-yellow-50 rounded-full w-fit">
                  <feature.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" style={{ backgroundSize: '30px 30px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
    </main>
  );
}
