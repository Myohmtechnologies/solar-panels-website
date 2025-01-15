'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BeakerIcon,
  BoltIcon,
  ArrowTrendingDownIcon,
  SunIcon,
  ArrowRightIcon,
  PhoneIcon,
  ShieldCheckIcon,
  ClockIcon,
  BanknotesIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';

export default function BallonThermodynamiquePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/ballon-thermo.jpg"
            alt="Ballon thermodynamique installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center bg-FFDF64/20 rounded-full px-4 py-2 mb-6">
              <BeakerIcon className="h-5 w-5 text-FFDF64 mr-2" />
              <span className="text-FFDF64 font-medium">Jusqu'à 70% d'économies</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ballon Thermodynamique
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Profitez d'une eau chaude écologique et économique toute l'année.
              Installation professionnelle et garantie pour votre confort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-FFDF64 hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Devis gratuit
                <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+33492766858"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-900 transition-all"
              >
                <PhoneIcon className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
                04 92 76 68 58
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir un ballon thermodynamique ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une solution innovante pour votre eau chaude sanitaire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BoltIcon,
                title: "Économies d'énergie",
                description: "Réduisez jusqu'à 70% votre consommation d'énergie pour l'eau chaude"
              },
              {
                icon: SunIcon,
                title: "Écologique",
                description: "Utilise les calories de l'air pour chauffer votre eau de manière naturelle"
              },
              {
                icon: HomeIcon,
                title: "Installation simple",
                description: "S'adapte à tout type d'habitation, en rénovation comme en construction neuve"
              }
            ].map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-FFDF64/20 rounded-xl flex items-center justify-center mb-4">
                  <avantage.icon className="h-6 w-6 text-FFDF64" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{avantage.title}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnement Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne un ballon thermodynamique ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/images/ballon-thermodynamique.webp"
                alt="Schéma de fonctionnement"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Captage de l'air",
                  description: "Le système capte les calories présentes dans l'air ambiant ou extérieur"
                },
                {
                  number: "02",
                  title: "Compression",
                  description: "La pompe à chaleur compresse le fluide pour augmenter sa température"
                },
                {
                  number: "03",
                  title: "Chauffage de l'eau",
                  description: "Les calories sont transférées à l'eau du ballon pour la chauffer"
                },
                {
                  number: "04",
                  title: "Stockage",
                  description: "L'eau chaude est stockée et maintenue à température pour votre confort"
                }
              ].map((etape, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-FFDF64 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold">{etape.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{etape.title}</h3>
                    <p className="text-gray-600">{etape.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques Section */}
      <section className="py-24 bg-gradient-to-br from-f2f6fa to-e3e9f0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Caractéristiques techniques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BoltIcon,
                value: "COP > 3",
                label: "Performance énergétique"
              },
              {
                icon: BeakerIcon,
                value: "200-300L",
                label: "Capacité de stockage"
              },
              {
                icon: ClockIcon,
                value: "24/7",
                label: "Disponibilité eau chaude"
              },
              {
                icon: BanknotesIcon,
                value: "MaPrimeRénov'",
                label: "Aide financière"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 mx-auto bg-FFDF64/20 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-FFDF64" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTASection />
    </main>
  );
}
