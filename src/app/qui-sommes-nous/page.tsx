"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  SunIcon, 
  SparklesIcon, 
  BuildingOfficeIcon,
  StarIcon,
  ShieldCheckIcon,
  MapPinIcon
} from '@heroicons/react/24/solid';
import TechnologicalApproachSection from '@/components/sections/TechnologicalApproachSection';
import CompanyValuesSection from '@/components/sections/CompanyValuesSection';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-FFDF64/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-ffb700/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* En-tête */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-col items-center"
            >
              <div className="inline-flex items-center space-x-3 bg-white px-6 py-2 rounded-full shadow-lg mb-4">
                <StarIcon className="w-6 h-6 text-FFDF64" />
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Notre Histoire</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Qui Sommes-Nous
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-FFDF64 to-ffb700 rounded-full" />
            </motion.div>
          </div>

          {/* Contenu Principal */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/solar-worker.jpg"
                  alt="Notre équipe d'experts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <ShieldCheckIcon className="w-6 h-6 text-FFDF64" />
                    <span className="font-semibold">Certifié RGE</span>
                  </div>
                  <p className="text-sm">Plus de 15 ans d'expertise en électricité</p>
                </div>
              </div>
            </motion.div>

            {/* Texte Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Histoire */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-FFDF64 to-ffb700 rounded-xl">
                    <BuildingOfficeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Notre Histoire</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Fondée par Ali, MY OHM Technologies incarne une vision audacieuse : 
                    <span className="font-medium text-gray-900"> démocratiser l'accès à l'énergie solaire</span> tout en 
                    accélérant la transition écologique en France.
                  </p>
                  <p>
                    Fort de son expertise de 15 ans dans le domaine électrique, Ali a identifié un besoin crucial : 
                    offrir des solutions énergétiques à la fois durables et économiques, permettant des économies 
                    substantielles sur les factures d'électricité.
                  </p>
                </div>
              </motion.div>

              {/* Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-FFDF64/20 rounded-xl">
                    <SparklesIcon className="w-6 h-6 text-FFDF64" />
                  </div>
                  <h2 className="text-2xl font-bold">Notre Expertise</h2>
                </div>
                <p className="mb-6">
                  Après des mois de recherche méticuleuse, notre équipe a sélectionné l'excellence : 
                  des panneaux solaires Made in France couplés aux micro-onduleurs les plus performants 
                  du marché.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: ShieldCheckIcon, text: "Certification RGE", delay: 0 },
                    { icon: SunIcon, text: "Panneaux Made in France", delay: 0.1 },
                    { icon: BuildingOfficeIcon, text: "Showroom Démonstratif", delay: 0.2 },
                    { icon: SparklesIcon, text: "Partenaire EDF", delay: 0.3 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 cursor-pointer backdrop-blur-sm"
                    >
                      <item.icon className="w-5 h-5 text-FFDF64" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-FFDF64 to-ffb700 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <motion.span
                    whileHover={{ x: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Discuter de votre projet
                  </motion.span>
                  <motion.svg 
                    className="w-5 h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <TechnologicalApproachSection />
      <CompanyValuesSection />
    </main>
  );
}
