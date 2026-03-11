'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
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
  HomeIcon,
  CurrencyEuroIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';

const features = [
  {
    name: 'Économies d\'énergie',
    description: 'Réduisez jusqu\'à 70% votre consommation d\'énergie pour l\'eau chaude sanitaire.',
    icon: CurrencyEuroIcon,
  },
  {
    name: 'Solution écologique',
    description: 'Utilise les calories de l\'air pour chauffer votre eau de manière naturelle et respectueuse de l\'environnement.',
    icon: SunIcon,
  },
  {
    name: 'Performance optimale',
    description: 'Coefficient de performance (COP) supérieur à 3, garantissant une efficacité énergétique exceptionnelle.',
    icon: ChartBarIcon,
  },
  {
    name: 'Installation simple',
    description: 'S\'adapte à tout type d\'habitation, en rénovation comme en construction neuve.',
    icon: HomeIcon,
  },
  {
    name: 'Disponibilité permanente',
    description: 'Eau chaude disponible 24h/24 et 7j/7, pour un confort optimal toute l\'année.',
    icon: ClockIcon,
  },
];

const ballonTypes = [
  {
    name: 'Ballon 200L',
    capacity: '200 litres',
    idealFor: 'Petit foyer',
    description: 'Solution idéale pour les couples ou petits foyers avec une consommation modérée d\'eau chaude.',
    features: [
      'Capacité de 200 litres',
      'Idéal pour 1 à 3 personnes',
      'COP > 3',
      'Garantie de 5 ans',
      'Monitoring via application mobile',
    ],
  },
  {
    name: 'Ballon 270L',
    capacity: '270 litres',
    idealFor: 'Foyer moyen',
    description: 'Notre bestseller pour les familles cherchant un équilibre entre capacité et performance.',
    features: [
      'Capacité de 270 litres',
      'Idéal pour 3 à 4 personnes',
      'COP > 3,2',
      'Garantie de 5 ans',
      'Système de protection anti-légionelle',
      'Monitoring avancé',
    ],
  },
  {
    name: 'Ballon 300L',
    capacity: '300 litres',
    idealFor: 'Grande famille',
    description: 'La solution complète pour les grandes familles avec des besoins importants en eau chaude.',
    features: [
      'Capacité de 300 litres',
      'Idéal pour 4 à 6 personnes',
      'COP > 3,5',
      'Garantie de 5 ans',
      'Système de protection anti-légionelle',
      'Monitoring professionnel',
      'Mode boost pour besoins ponctuels',
    ],
  },
];

export default function BallonThermodynamiquePage() {
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
                <span className="text-[#116290] font-medium">Jusqu'à 70% d'économies</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                Ballon Thermodynamique Nouvelle Génération
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Profitez d'une eau chaude écologique et économique toute l'année.
                Une solution innovante qui utilise les calories de l'air pour chauffer votre eau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openExpertModal}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-medium text-lg hover:bg-[#0d4e73] transition-all shadow-lg hover:shadow-xl"
                >
                  Demander un devis
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
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#116290]/10">
                <Image
                  src="/images/produit/ballon-thermodynamique.png"
                  alt="Ballon thermodynamique installation"
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
                    <div className="text-2xl font-bold text-white">70%</div>
                    <div className="text-sm text-gray-300">d'économies d'énergie</div>
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
              Pourquoi choisir un ballon thermodynamique ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages d'un ballon thermodynamique pour votre maison.
            </p>
          </div>
          
          {/* Cartes d'avantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-ffeb99/20 to-ffb700/20 rounded-full">
                    <feature.icon className="h-8 w-8 text-[#116290]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.name}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnement Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne un ballon thermodynamique ?
            </h2>
            <p className="text-xl text-gray-600">
              Un principe simple et efficace pour chauffer votre eau
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ce-thermodynamique-thermor-aeromax-5-1-2021.jpg"
                alt="Schéma de fonctionnement"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
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
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-full flex items-center justify-center">
                    <span className="text-[#116290] font-bold">{etape.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{etape.title}</h3>
                    <p className="text-gray-600">{etape.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types de ballons */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos solutions de ballons thermodynamiques
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le modèle adapté à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ballonTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-[#116290]/10 p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{type.name}</h3>
                  <p className="text-[#116290] font-medium">{type.capacity}</p>
                  <p className="text-sm text-gray-500">Idéal pour: {type.idealFor}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openExpertModal}
                    className="w-full py-3 bg-gradient-to-br from-ffeb99 to-ffb700 text-[#116290] rounded-lg font-medium hover:shadow-md transition-all"
                  >
                    Demander un devis
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Caractéristiques Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Caractéristiques techniques
            </h2>
            <p className="text-xl text-gray-600">
              Des performances exceptionnelles pour votre confort
            </p>
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
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-ffeb99/20 to-ffb700/20 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-[#116290]" />
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
      
      {/* Expert Modal */}
      <EnergyExpertModal isOpen={isExpertModalOpen} onClose={closeExpertModal} source="ballon" />
    </main>
  );
}
