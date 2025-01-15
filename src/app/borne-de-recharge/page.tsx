'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BoltIcon, 
  ClockIcon, 
  CurrencyEuroIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  TrophyIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';

const certifications = [
  { 
    src: '/images/logo-qualifelec-irve.jpg', 
    alt: 'Certification IRVE',
    title: 'Certification IRVE',
    description: 'Certifié Installation IRVE',
    icon: ShieldCheckIcon
  },
  { 
    src: '/images/garantie-decennale-p2a-construction.webp', 
    alt: 'Garantie Décennale',
    title: 'Garantie Décennale',
    description: 'Installation garantie 10 ans',
    icon: ClipboardDocumentCheckIcon
  }
];

export default function BorneDeRechargePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section avec image en background */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/borne-recharge-hero.jpg"
            alt="Installation borne de recharge"
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
              <BoltIcon className="h-5 w-5 text-FFDF64 mr-2" />
              <span className="text-FFDF64 font-medium">Installation en 48h</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Rechargez votre véhicule à domicile
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Profitez d'une installation professionnelle de votre borne de recharge.
              Service clé en main et garantie décennale pour votre tranquillité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-FFDF64 hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Demander un devis gratuit
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

      {/* Section Certifications avec Statistiques */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-FFDF64/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Expertise en Chiffres
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des années d&apos;expérience au service de votre transition énergétique
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="space-y-8">
                {[
                  { value: '100+', label: 'Installations réalisées', icon: TrophyIcon },
                  { value: '48h', label: "Délai d'installation", icon: ClockIcon },
                  { value: '10 ans', label: 'Garantie décennale', icon: ShieldCheckIcon }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-FFDF64 to-AFC97E rounded-2xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Certifications Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-FFDF64 to-AFC97E rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <cert.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                    </div>
                    <div className="flex-grow flex flex-col sm:flex-row items-center gap-6">
                      <div className="relative h-32 w-48 flex-shrink-0">
                        <Image
                          src={cert.src}
                          alt={cert.alt}
                          fill
                          className="object-contain transform group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg text-gray-700 font-medium">
                          {cert.description}
                        </p>
                        <div className="mt-4 flex items-center text-FFDF64">
                          <CheckCircleIcon className="h-5 w-5 mr-2" />
                          <span className="font-medium">Certification valide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages avec Grid Moderne */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
            >
              Pourquoi choisir MyOhm ?
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une installation professionnelle pour une recharge en toute sérénité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BoltIcon,
                title: "Installation Rapide",
                description: "Installation professionnelle en 48h après validation de votre devis"
              },
              {
                icon: ShieldCheckIcon,
                title: "Certification IRVE",
                description: "Nous sommes certifiés RGER IRVE pour l'installation de bornes de recharge"
              },
              {
                icon: CurrencyEuroIcon,
                title: "Aides Financières",
                description: "Nous vous accompagnons dans vos démarches d'obtention des aides"
              },
              {
                icon: WrenchScrewdriverIcon,
                title: "SAV Premium",
                description: "Service après-vente réactif et maintenance préventive incluse"
              },
              {
                icon: HomeIcon,
                title: "Installation sur Mesure",
                description: "Solution adaptée à votre installation électrique et vos besoins"
              },
              {
                icon: ClockIcon,
                title: "Garantie 2 ans",
                description: "Votre installation est couverte par notre garantie décennale"
              }
            ].map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-FFDF64 to-AFC97E rounded-3xl blur opacity-20 group-hover:opacity-75 transition duration-200" />
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-FFDF64 to-AFC97E rounded-2xl mb-6 transform group-hover:scale-110 transition-transform">
                    <avantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {avantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {avantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Réalisations */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
            >
              Nos Réalisations
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos installations de bornes de recharge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              
              {
                image: '/images/borne/borne.jpg',
                title: 'Villa à Gap',
                description: 'Borne 11kW connectée',
                details: 'Installation avec gestion de charge intelligente'
              },
              {
                image: '/images/borne/realisation-borne-irve.jpeg',
                title: 'Appartement à Digne',
                description: 'Borne de recharge 3.7kW',
                details: 'Installation en parking souterrain'
              },
              {
                image: '/images/borne/realisation-dune-borne-de-recharge.jpeg',
                title: 'Maison à Forcalquier',
                description: 'Wallbox Commander 2',
                details: 'Installation avec monitoring à distance'
              }
            ].map((realisation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={realisation.image}
                    alt={realisation.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{realisation.title}</h3>
                      <p className="text-gray-200">{realisation.description}</p>
                      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {realisation.details}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-FFDF64 text-gray-900 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Voir détails
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group"
            >
              Réaliser mon projet
              <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Processus avec Timeline */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Installation en 4 étapes
            </motion.h2>
            <p className="text-xl text-gray-600">
              Un processus simple et transparent
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Premier Contact",
                description: "Évaluation gratuite de vos besoins"
              },
              {
                number: "02",
                title: "Étude Technique",
                description: "Visite sur site et devis détaillé sous 24h"
              },
              {
                number: "03",
                title: "Installation",
                description: "Pose par nos experts certifiés en 48h"
              },
              {
                number: "04",
                title: "Mise en Service",
                description: "Tests approfondis et formation à l'utilisation"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-FFDF64 to-AFC97E rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-200" />
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-FFDF64 to-AFC97E mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Borne */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-FFDF64/20 to-AFC97E/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" style={{ backgroundSize: '30px 30px' }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image de la borne */}
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/irve-borne-de-recharge.webp"
                alt="Borne de recharge Wallbox"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-white">
                  <BoltIcon className="h-6 w-6" />
                  <span className="text-lg font-medium">Jusqu'à 22kW</span>
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2">
                <ShieldCheckIcon className="h-5 w-5 text-FFDF64 mr-2" />
                <span className="text-FFDF64 font-medium">Certifié et Garanti</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Borne de recharge Wallbox
              </h2>
              <p className="text-xl text-gray-300">
                La solution idéale pour recharger votre véhicule électrique à domicile. Design élégant, 
                installation professionnelle et pilotage via application mobile.
              </p>
              <ul className="space-y-4">
                {[
                  "Recharge jusqu'à 10x plus rapide qu'une prise domestique",
                  "Compatible avec tous les véhicules électriques",
                  "Connectivité WiFi et Bluetooth",
                  "Application mobile intuitive",
                  "Installation aux normes IRVE"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-FFDF64 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-FFDF64 text-gray-900 rounded-full font-medium text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Commander ma borne
                  <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all"
                >
                  Me renseigner
                  <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <div id="contact">
        <ContactCTASection />
      </div>
    </main>
  );
}
