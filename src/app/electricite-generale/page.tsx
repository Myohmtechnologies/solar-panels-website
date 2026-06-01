'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BoltIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  CpuIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';

const features = [
  {
    name: 'Mise en conformité (NF C 15-100)',
    description: 'Sécurisez votre habitation et évitez les risques d\'électrocution ou d\'incendie en remettant aux normes votre installation.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Rénovation & Tableaux Électriques',
    description: 'Remplacement de vieux tableaux à fusibles par des disjoncteurs différentiels modernes et performants.',
    icon: BoltIcon,
  },
  {
    name: 'Domotique & Smart Home',
    description: 'Pilotez votre éclairage, votre chauffage et vos volets roulants à distance pour un confort accru et des économies.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Dépannage Rapide',
    description: 'Une panne de courant, un court-circuit ? Nos électriciens interviennent rapidement chez vous.',
    icon: ClockIcon,
  },
];

const electricalServices = [
  {
    title: 'Rénovation Électrique Totale ou Partielle',
    description: 'Que ce soit pour une extension de maison, une rénovation de cuisine ou la remise à neuf intégrale de vos circuits électriques, nous réalisons des installations propres et sécurisées.',
    benefits: [
      'Passage des câbles encastré ou sous goulotte propre',
      'Création de nouveaux points lumineux et prises',
      'Matériel de grandes marques (Legrand, Schneider)',
      'Garantie décennale sur tous les travaux',
    ]
  },
  {
    title: 'Modernisation du Tableau Électrique',
    description: 'Le tableau est le cœur de votre sécurité électrique. Nous remplaçons les anciens compteurs par des coffrets équipés de protections contre les surtensions et les surcharges.',
    benefits: [
      'Disjoncteurs différentiels 30mA pour la protection des personnes',
      'Parafoudre obligatoire pour protéger vos appareils électroniques',
      'Équilibrage de phases pour éviter les coupures intempestives',
      'Prêt pour accueillir vos futurs panneaux solaires ou borne de recharge',
    ]
  },
  {
    title: 'Prêt pour la Transition Énergétique',
    description: 'Toutes nos installations électriques sont pensées pour évoluer. Nous dimensionnons vos tableaux de façon à pouvoir y raccorder des panneaux photovoltaïques, des batteries de stockage ou des bornes IRVE sans surcoût futur.',
    benefits: [
      'Pré-câblage intelligent et gaines en attente',
      'Sous-compteurs pour suivre la consommation',
      'Compatibilité totale avec nos offres solaires',
      'Conseils personnalisés pour l\'économie d\'énergie',
    ]
  }
];

export default function ElectriciteGeneralePage() {
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  
  const openExpertModal = () => {
    setIsExpertModalOpen(true);
  };
  
  const closeExpertModal = () => {
    setIsExpertModalOpen(false);
  };
  
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
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
                <span className="text-[#116290] font-medium">Électricien Certifié en Région PACA</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                Travaux d'Électricité Générale & Rénovation
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Profitez d'installations électriques sécurisées, durables et prêtes pour la transition énergétique. Nos experts qualifiés vous accompagnent dans tous vos projets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openExpertModal}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-medium text-lg hover:shadow-xl transition-all"
                >
                  Demander un devis rapide
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#116290]/30 text-[#116290] rounded-full font-medium text-lg hover:bg-[#116290]/5 transition-all"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] w-full">
                <Image
                  src="/images/maison-panneaux-solaires-borne-de-recharge-batterie-de-stockage.png"
                  alt="Installation tableau électrique par MyOhm Technologies"
                  fill
                  className="object-cover"
                  priority
                />
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
              Nos domaines d'intervention électrique
            </h2>
            <p className="text-xl text-gray-600">
              Des compétences complètes pour sécuriser et moderniser votre logement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-ffeb99/20 to-ffb700/20 rounded-full">
                    <feature.icon className="h-7 w-7 text-[#116290]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zoom sur nos prestations d'électricité
            </h2>
            <p className="text-xl text-gray-600">
              Chaque détail compte quand il s'agit de votre sécurité et de votre confort.
            </p>
          </div>

          <div className="space-y-12">
            {electricalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 grid md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckBadgeIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5 flex justify-center">
                  <button
                    onClick={openExpertModal}
                    className="px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold rounded-xl hover:shadow-lg transition-all w-full md:w-auto"
                  >
                    Obtenir une estimation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust factors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Pourquoi choisir MyOhm Technologies pour votre électricité ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Électriciens Diplômés",
                desc: "Toutes nos interventions sont exécutées par des professionnels formés, habilités et expérimentés."
              },
              {
                title: "Matériel Premium uniquement",
                desc: "Nous ne faisons aucun compromis sur la sécurité. Nous n'utilisons que de grandes marques certifiées NF."
              },
              {
                title: "Suivi Consuel inclus",
                desc: "Pour les rénovations totales, nous prenons en charge la certification de conformité par l'organisme officiel Consuel."
              }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#116290]/10 flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="h-6 w-6 text-[#116290]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{box.title}</h3>
                <p className="text-sm text-gray-600">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTASection />
      
      {/* Expert Modal */}
      <EnergyExpertModal isOpen={isExpertModalOpen} onClose={closeExpertModal} source="electricite" />
    </main>
  );
}
