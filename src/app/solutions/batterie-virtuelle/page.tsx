'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPinIcon, 
  ChartBarIcon,
  SunIcon,
  BoltIcon,
  CloudIcon,
  PhoneIcon,
  CheckIcon,
  UserIcon,
  XMarkIcon,
  CurrencyEuroIcon,
  WifiIcon,
  WrenchIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import BatterieStockageSchemaMarkup from '@/components/BatterieStockageSchemaMarkup';
import { MyLightCalculator } from '@/components/MyLightCalculator';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';
import { useState } from 'react';

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
    name: 'MyLight Essentiel',
    capacity: '3 kWc',
    idealFor: 'Petite installation',
    description: 'Solution idéale pour les petites installations solaires cherchant à optimiser leur rentabilité.',
    features: [
      'Valorisation de 100% de votre production',
      'Idéal pour une installation de 3 kWc',
      'Suivi de production via application mobile',
      'Aucun équipement supplémentaire',
    ],
  },
  {
    name: 'MyLight Confort',
    capacity: '6 kWc',
    idealFor: 'Installation moyenne',
    description: 'Notre offre la plus populaire pour les installations résidentielles standard.',
    features: [
      'Valorisation de 100% de votre production',
      'Idéal pour une installation de 6 kWc',
      'Suivi de production en temps réel',
      'Bilan énergétique mensuel',
      'Aucun équipement supplémentaire',
    ],
  },
  {
    name: 'MyLight Premium',
    capacity: '9+ kWc',
    idealFor: 'Grande installation',
    description: 'La solution complète pour les grandes installations résidentielles ou professionnelles.',
    features: [
      'Valorisation de 100% de votre production',
      'Idéal pour une installation de 9 kWc et plus',
      'Suivi de production avancé',
      'Analyse de performance détaillée',
      'Assistance prioritaire',
      'Aucun équipement supplémentaire',
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
  
  const scrollToSimulator = () => {
    const simulator = document.querySelector('#simulator-section');
    if (simulator) {
      simulator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* Schema markup spécifique pour la batterie virtuelle */}
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
                <span className="text-[#116290] font-medium">Batterie Virtuelle MyLight</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                Batterie Virtuelle MyLight : stockage d'énergie intelligent
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Optimisez votre installation photovoltaïque avec la batterie virtuelle MyLight, notre solution innovante de stockage virtuel.
                Stockez virtuellement votre surplus d'énergie le jour pour l'utiliser quand vous en avez besoin, sans batterie physique.
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
                  src="/images/produit/batterie-virtuelle-mylight.png"
                  alt="Batterie Virtuelle MyLight - Solution de stockage d'énergie intelligent"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#116290] p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#116290]/10 rounded-full">
                    <CurrencyEuroIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-300">de valorisation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-black">
                Pourquoi choisir la batterie virtuelle MyLight ?
              </h2>
              <p className="text-black/70">
                La batterie virtuelle MyLight représente une solution innovante pour valoriser votre production d'énergie solaire sans investir dans un système de stockage physique.
                Cette technologie vous permet de :
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Valoriser 100% de votre production solaire excédentaire</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Éviter les coûts d'installation et de maintenance d'une batterie physique</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Réduire considérablement votre facture d'électricité</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Bénéficier d'une solution écologique sans matériaux de batterie</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ffeb99/20 to-transparent rounded-3xl transform -rotate-3"></div>
              <Image
                src="/images/produit/batterie-virtuelle-mylight.png"
                alt="Batterie virtuelle MyLight - Solution innovante sans installation physique"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-gradient-to-br from-white to-ffeb99/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Comment fonctionne la batterie virtuelle MyLight ?
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Un système innovant qui valorise votre production solaire sans batterie physique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Production Solaire",
                description: "Vos panneaux solaires produisent de l'électricité pendant la journée.",
                icon: SunIcon
              },
              {
                title: "Injection Réseau",
                description: "Votre surplus d'énergie est injecté dans le réseau et comptabilisé comme crédit énergétique.",
                icon: WifiIcon
              },
              {
                title: "Valorisation Optimale",
                description: "Utilisez vos crédits énergétiques pour réduire votre facture d'électricité.",
                icon: CurrencyEuroIcon
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-black/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Comparative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Pourquoi choisir la batterie virtuelle MyLight ?
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Découvrez les avantages de la batterie virtuelle MyLight par rapport à la revente classique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Installation Sans Batterie */}
            <div className="relative p-8 rounded-2xl bg-gray-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold">
                  Revente Classique
                </div>
              </div>
              <div className="space-y-6 mt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <XMarkIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Valorisation limitée</h3>
                    <p className="text-gray-600">Votre surplus d'énergie est revendu à un tarif réduit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <XMarkIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Rentabilité réduite</h3>
                    <p className="text-gray-600">Retour sur investissement plus long pour votre installation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <XMarkIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Valorisation partielle</h3>
                    <p className="text-gray-600">Seulement 60-70% de valorisation de votre production</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900 mb-2">70%</p>
                  <p className="text-gray-600">de valorisation maximum</p>
                </div>
              </div>
            </div>

            {/* Installation Avec Batterie */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-ffeb99/20 to-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black px-6 py-2 rounded-full font-semibold">
                  Avec MyLight
                </div>
              </div>
              <div className="space-y-6 mt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Valorisation optimale</h3>
                    <p className="text-black/70">Votre surplus d'énergie est valorisé à 100% de sa valeur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Rentabilité maximale</h3>
                    <p className="text-black/70">Retour sur investissement accéléré pour votre installation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Zéro investissement supplémentaire</h3>
                    <p className="text-black/70">Aucun coût d'installation ou de maintenance</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black mb-2">100%</p>
                  <p className="text-black/70">de valorisation de votre production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Offres MyLight */}
      <section className="py-16 bg-gradient-to-br from-white to-ffeb99/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nos Offres Batterie Virtuelle MyLight
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Choisissez la solution adaptée à votre production solaire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {batteryTypes.map((battery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-6 bg-gradient-to-br from-ffeb99/20 to-white">
                  <h3 className="text-xl font-bold mb-2">{battery.name}</h3>
                  <div className="text-3xl font-bold mb-2">{battery.capacity}</div>
                  <p className="text-sm text-black/70">Idéal pour: {battery.idealFor}</p>
                </div>
                <div className="p-6">
                  <p className="text-black/80 mb-4">{battery.description}</p>
                  <ul className="space-y-2 mb-6">
                    {battery.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full py-3 text-center bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Demander un devis
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulateur Section */}
      <section id="simulator-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Simulez vos économies avec la batterie virtuelle MyLight
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Estimez rapidement votre potentiel d'économies et de valorisation de votre production solaire
            </p>
          </div>
          <MyLightCalculator />
        </div>
      </section>

      {/* FAQ Section améliorée */}
      <section className="py-20 bg-gradient-to-br from-white to-ffeb99/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-ffeb99/20 to-ffb700/20 text-[#232323] text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-[#232323] mb-4">
              Tout savoir sur la batterie virtuelle MyLight
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment la batterie virtuelle MyLight peut optimiser la valorisation de votre production solaire
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                category: "Fonctionnement",
                questions: [
                  {
                    question: "Comment fonctionne la batterie virtuelle MyLight ?",
                    answer: "La batterie virtuelle MyLight n'est pas un dispositif physique mais un système de gestion intelligente de votre production solaire. Lorsque vos panneaux produisent un surplus d'énergie, au lieu de le stocker physiquement, ce surplus est injecté dans le réseau. Vous recevez alors des crédits énergétiques que vous pouvez utiliser plus tard pour réduire votre facture d'électricité."
                  },
                  {
                    question: "Est-ce compatible avec mon installation solaire existante ?",
                    answer: "Oui, la batterie virtuelle MyLight est compatible avec toutes les installations solaires connectées au réseau. Aucune modification matérielle n'est nécessaire, il s'agit simplement d'un contrat de valorisation de votre production excédentaire. Nos experts peuvent facilement mettre en place cette solution pour votre installation actuelle."
                  },
                  {
                    question: "Quelle est la différence avec une batterie physique ?",
                    answer: "Contrairement à une batterie physique, la batterie virtuelle MyLight n'implique aucun équipement supplémentaire à installer chez vous. Elle ne fournit pas d'autonomie en cas de coupure de courant, mais elle offre une valorisation optimale de votre production sans les coûts d'achat, d'installation et de maintenance d'une batterie physique."
                  }
                ]
              },
              {
                category: "Avantages et Économies",
                questions: [
                  {
                    question: "Quelles économies puis-je réaliser avec la batterie virtuelle MyLight ?",
                    answer: "Avec la batterie virtuelle MyLight, vous valorisez 100% de votre production solaire excédentaire, contre seulement 60-70% avec le système classique de revente au réseau. Cette valorisation optimale vous permet de réaliser des économies substantielles sur votre facture d'électricité, avec un retour sur investissement plus rapide pour votre installation solaire."
                  },
                  {
                    question: "Y a-t-il des frais supplémentaires à prévoir ?",
                    answer: "Non, la batterie virtuelle MyLight ne nécessite aucun investissement matériel supplémentaire. Il s'agit simplement d'un contrat de valorisation de votre production excédentaire. Vous évitez ainsi les coûts d'achat, d'installation et de maintenance associés à une batterie physique, tout en optimisant la rentabilité de votre installation solaire."
                  },
                  {
                    question: "Quel est le retour sur investissement avec MyLight ?",
                    answer: "Le retour sur investissement de votre installation solaire avec la batterie virtuelle MyLight est généralement 30% plus rapide qu'avec un système classique de revente au réseau. Cette amélioration s'explique par la valorisation optimale de votre production excédentaire, sans les coûts supplémentaires d'une batterie physique."
                  }
                ]
              },
              {
                category: "Mise en place et Fonctionnement",
                questions: [
                  {
                    question: "Comment mettre en place la batterie virtuelle MyLight ?",
                    answer: "La mise en place de la batterie virtuelle MyLight est simple et rapide. Il s'agit d'un contrat de valorisation de votre production excédentaire, sans installation physique. Nos conseillers s'occupent de toutes les démarches administratives et de la configuration de votre compteur intelligent pour optimiser la valorisation de votre production solaire."
                  },
                  {
                    question: "Comment suivre mes économies avec MyLight ?",
                    answer: "Vous pouvez suivre vos économies et la valorisation de votre production solaire via notre application mobile dédiée. Elle vous permet de visualiser en temps réel votre production, votre consommation, et les crédits énergétiques accumulés grâce à la batterie virtuelle MyLight."
                  },
                  {
                    question: "Puis-je changer de fournisseur d'électricité avec MyLight ?",
                    answer: "Oui, la batterie virtuelle MyLight est compatible avec la plupart des fournisseurs d'électricité. Vous conservez votre liberté de choisir le fournisseur qui vous convient le mieux. Notre système s'adapte à votre contrat d'électricité pour optimiser la valorisation de votre production solaire."
                  }
                ]
              }
            ].map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#232323]">{category.category}</h3>
                <div className="space-y-3">
                  {category.questions.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: faqIndex * 0.1 }}
                    >
                      <details className="group bg-white rounded-lg shadow-sm overflow-hidden">
                        <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                          <span className="text-[#232323] font-medium">
                            {faq.question}
                          </span>
                          <div className="transition duration-300 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </summary>
                        <div className="px-6 pb-4">
                          <div className="pl-4 border-l-2 border-ffb700">
                            <p className="text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                        </details>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-6 rounded-xl bg-gradient-to-r from-ffeb99/20 to-ffb700/20">
              <p className="text-[#232323] font-semibold mb-4">
                Vous avez d'autres questions ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-ffeb99 to-ffb700 text-[#232323] font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                <UserIcon className="w-5 h-5" />
                <span>Contacter un expert</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final amélioré */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#232323] to-[#000000]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Prêt à gagner en autonomie énergétique ?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
              Découvrez comment une batterie de stockage peut transformer votre façon de consommer l'énergie solaire.
              Nos experts sont là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-ffeb99 to-ffb700 text-[#232323] font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity"
              >
                <UserIcon className="w-5 h-5" />
                <span>Demander un devis gratuit</span>
              </Link>
              <Link
                href="tel:+33000000000"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Nous appeler</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isExpertModalOpen && (
        <EnergyExpertModal onClose={closeExpertModal} />
      )}
    </main>
  );
}