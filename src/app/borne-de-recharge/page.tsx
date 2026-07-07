'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  CurrencyEuroIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  LightBulbIcon,
  CpuChipIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';
import BorneRechargeSchemaMarkup from '@/components/BorneRechargeSchemaMarkup';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';

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

const faqs = [
  {
    question: "Combien coûte l'installation d'une borne de recharge pour voiture électrique ?",
    answer: "Le coût de l'installation d'une borne de recharge à domicile dépend du modèle choisi et de la configuration de votre installation électrique. Chez My Ohm Technologies, nos forfaits clés en main (matériel et pose inclus) débutent à partir de 1 240 € (aides de l'État et crédit d'impôt de 500 € déduits) pour notre Borne Ohme, à partir de 1 490 € pour la Wallbox Pulsar Plus, et à partir de 1 590 € pour le modèle Hager Witty."
  },
  {
    question: "Quel est le meilleur emplacement pour installer ma borne de recharge à domicile ?",
    answer: "L'emplacement idéal dépend de l'accès à votre véhicule et de la distance par rapport à votre tableau électrique de répartition. En général, la borne est installée dans un garage fermé, sous un carport, ou sur un mur extérieur à proximité de la trappe de recharge de votre voiture. Nos techniciens qualifiés IRVE valident la position optimale lors de l'étude technique pour réduire la longueur des câbles et optimiser l'esthétique et le coût."
  },
  {
    question: "Combien de temps prend l'installation d'une borne de recharge ?",
    answer: "Une installation standard à domicile est rapide et prend généralement entre une demi-journée et une journée complète. Cela comprend la pose de la borne, le tirage du câble de puissance depuis votre tableau électrique, la pose des disjoncteurs et protections obligatoires dans votre tableau, ainsi que les tests de mise en service et la démonstration d'utilisation."
  },
  {
    question: "J'habite en maison, comment choisir ma borne de recharge ?",
    answer: "Le choix se fait en fonction de votre véhicule (puissance maximale acceptée en charge lente/rapide), de vos besoins quotidiens en autonomie, et de votre abonnement électrique. Pour la majorité des maisons individuelles, une borne de 7,4 kW en monophasé est recommandée. Elle permet de recharger complètement n'importe quel véhicule électrique durant la nuit. Si vous avez des panneaux solaires, optez pour une borne intelligente comme la borne Ohme qui maximise l'autoconsommation."
  },
  {
    question: "Quelle est la différence entre une borne de recharge et une prise ?",
    answer: "Une borne de recharge (wallbox) charge jusqu'à 10 fois plus rapidement qu'une prise domestique classique et offre une sécurité totale. Contrairement à une simple prise qui risque de surchauffer lors d'une charge longue de forte puissance, la borne dispose de protections électriques intégrées et communique activement avec le véhicule pour réguler la charge. De plus, elle offre des fonctions de programmation intelligente et de contrôle à distance absentes sur une prise standard."
  },
  {
    question: "Dois-je augmenter ma puissance souscrite pour recharger à domicile ?",
    answer: "Pas nécessairement. La plupart des abonnements domestiques (9 kVA ou 12 kVA) suffisent pour recharger un véhicule la nuit pendant les heures creuses, lorsque les autres appareils gourmands sont éteints. De plus, nos bornes intègrent un système de délestage dynamique : elles mesurent la consommation de votre maison en temps réel et ajustent automatiquement la charge de la voiture pour éviter de faire disjoncter votre installation."
  },
  {
    question: "Quel contrat d'électricité choisir pour recharger à domicile ?",
    answer: "Il est fortement conseillé d'opter pour un contrat d'électricité avec option Heures Pleines / Heures Creuses, ou des offres spécifiques « spécial véhicule électrique » proposées par de nombreux fournisseurs. En programmant votre recharge pour qu'elle commence à partir de 22h ou minuit (heures creuses), vous divisez le coût de votre plein d'électricité par deux par rapport aux heures pleines de la journée."
  }
];

export default function BorneDeRechargePage() {
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const openExpertModal = () => {
    setIsExpertModalOpen(true);
  };

  const closeExpertModal = () => {
    setIsExpertModalOpen(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="overflow-x-hidden bg-white">
      <BorneRechargeSchemaMarkup />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
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
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-full">
                  <span className="text-[#116290] font-medium">Installation en 48h</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-100/80 px-4 py-1 rounded-full">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[#116290] text-sm font-semibold">4.9/5 Google</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#116290] leading-tight mb-4">
                Installer une borne de recharge à domicile
              </h1>

              <div className="mb-6">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#ffb700] block">
                  À partir de 1 240 € TTC
                </span>
                <span className="text-sm text-gray-500 font-medium block mt-1">
                  Électricien et installateur certifié IRVE en région PACA
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Recharge électrique à domicile au meilleur coût",
                  "Plus de confort pour recharger sereinement à la maison",
                  "Recharge jusqu'à 10x plus puissante et rapide qu'une prise de courant domestique"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 text-lg text-gray-700">
                    <svg className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openExpertModal}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-medium text-lg hover:shadow-xl transition-all"
                >
                  Obtenir mon estimation
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
                 <a
                  href="tel:+33492766858"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'conversion', {
                        'send_to': 'AW-18287034089/C5KlCNiF0MkcEOn9949E',
                        'value': 1.0,
                        'currency': 'EUR'
                      });
                    }
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#116290]/30 text-[#116290] rounded-full font-medium text-lg hover:bg-[#116290]/5 transition-all"
                >
                  <PhoneIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                  04 92 76 68 58
                </a>
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
                  src="/images/borne.jpeg"
                  alt="Installation borne de recharge pour véhicule électrique"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Accompagnement de A à Z */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] mb-4">
              My Ohm Technologies vous accompagne de A à Z
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution de recharge sans tracas, de la première étude jusqu'à la mise en service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Suivi personnalisé",
                desc: "Un technicien dédié vous accompagne dans votre projet et vous propose la borne adaptée à vos besoins.",
                icon: UserGroupIcon,
              },
              {
                title: "Installation",
                desc: "Votre borne de recharge est installée chez vous par un électricien qualifié IRVE (3).",
                icon: WrenchScrewdriverIcon,
              },
              {
                title: "Service après-vente",
                desc: "Assistance pour l'utilisation de votre borne, maintenance : nous vous aidons face à la moindre difficulté.",
                icon: PhoneIcon,
              },
              {
                title: "Et plus d'options",
                desc: "Option smart charge, option extension de garantie... Pour une solution de recharge qui vous ressemble.",
                icon: ClipboardDocumentCheckIcon,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50/50 p-8 rounded-3xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#116290]/10 flex items-center justify-center mb-6 text-ffb700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarifs & Aides */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tarifs et Aides Financières
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une installation conforme et sécurisée au meilleur prix, éligible aux subventions de l'État.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Carte Wallbox Pulsar Plus */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col justify-between relative hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#000000] font-bold tracking-wide uppercase text-[10px] bg-black/5 px-2.5 py-0.5 rounded-full">
                    Wallbox
                  </span>
                  <span className="text-[10px] text-orange-600 bg-orange-50 font-semibold px-2.5 py-0.5 rounded-full">
                    Garantie optionnelle
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-44 mb-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/wallbox-borne-de-recharge-pulsar-plus-socket-type-2s-22kw-monophase-ou-triphase-bluetooth-wifi.jpg"
                      alt="Borne Wallbox Pulsar Plus"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">Wallbox Pulsar Plus</h3>
                <p className="text-xs text-gray-500 mb-3">Puissance modulable 7 à 22 kW</p>

                <div className="mb-4">
                  <span className="text-xs text-gray-500 block">Borne et installation, à partir de</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900">1 490 €</span>
                    <span className="text-sm text-gray-500 ml-1.5 font-semibold">TTC *</span>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-0.5 block">*Aides déduites (TVA 5,5% & crédit d'impôt inclus)</span>
                </div>

                <hr className="border-gray-100 my-4" />

                <ul className="space-y-2 mb-6">
                  {[
                    "Borne connectée (Bluetooth & Wi-Fi)",
                    "Application myWallbox de suivi de consommation",
                    "Planification des recharges en heures creuses",
                    "Design ultra-compact et résistant (IP54 / IK08)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-600">
                      <svg className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={openExpertModal}
                className="w-full py-3 bg-transparent border-2 border-[#116290] text-[#116290] font-bold rounded-full hover:bg-[#116290]/5 active:scale-[0.98] transition-all text-xs text-center"
              >
                Obtenir mon estimation
              </button>
            </div>

            {/* Carte Borne Ohme */}
            <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-ffb700 flex flex-col justify-between relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Badge "Notre Meilleure Offre" */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-ffeb99 to-ffb700 text-black font-black text-[9px] px-3.5 py-1 rounded-bl-xl uppercase tracking-widest shadow-sm">
                Meilleure Offre
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#116290] font-bold tracking-wide uppercase text-[10px] bg-[#116290]/10 px-2.5 py-0.5 rounded-full">
                    Ohme
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-44 mb-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/my-ohm.png"
                      alt="Borne de recharge Ohme"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">Borne Ohme</h3>
                <p className="text-xs text-gray-500 mb-3">Puissance 7.4 kW monophasé</p>

                <div className="mb-4">
                  <span className="text-xs text-gray-500 block">Borne et installation, à partir de</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900">1 240 €</span>
                    <span className="text-sm text-gray-500 ml-1.5 font-semibold">TTC *</span>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-0.5 block">*Aides déduites (TVA 5,5% & crédit d'impôt inclus)</span>
                </div>

                <hr className="border-gray-100 my-4" />

                <ul className="space-y-2 mb-6">
                  {[
                    "Borne intelligente et connectée",
                    "Charge dynamique en temps réel",
                    "Plug and charge ultra-simplifié",
                    "Accès sécurisé par badge RFID",
                    "Garantie décennale installation incluse"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-600">
                      <svg className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={openExpertModal}
                className="w-full py-3 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold rounded-full hover:shadow-md active:scale-[0.98] transition-all text-xs text-center"
              >
                Obtenir mon estimation
              </button>
            </div>

            {/* Carte Hager Witty */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col justify-between relative hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#00549F] font-bold tracking-wide uppercase text-[10px] bg-[#00549F]/10 px-2.5 py-0.5 rounded-full">
                    Hager
                  </span>
                  <span className="text-[10px] text-blue-600 bg-blue-50 font-semibold px-2.5 py-0.5 rounded-full">
                    Lecteur RFID inclus
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-44 mb-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hager.webp"
                      alt="Borne Hager Witty"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">Hager Witty</h3>
                <p className="text-xs text-gray-500 mb-3">Puissance modulable 7.4 à 22 kW</p>

                <div className="mb-4">
                  <span className="text-xs text-gray-500 block">Borne et installation, à partir de</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900">1 590 €</span>
                    <span className="text-sm text-gray-500 ml-1.5 font-semibold">TTC *</span>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-0.5 block">*Aides déduites (TVA 5,5% & crédit d'impôt inclus)</span>
                </div>

                <hr className="border-gray-100 my-4" />

                <ul className="space-y-2 mb-6">
                  {[
                    "Gestion dynamique intelligente de la charge",
                    "Borne ultra-robuste certifiée IP55 / IK10",
                    "Contrôle d'accès sécurisé par badge RFID",
                    "Compatible avec la charge solaire photovoltaïque"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-600">
                      <svg className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={openExpertModal}
                className="w-full py-3 bg-transparent border-2 border-[#116290] text-[#116290] font-bold rounded-full hover:bg-[#116290]/5 active:scale-[0.98] transition-all text-xs text-center"
              >
                Obtenir mon estimation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="py-24 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une recharge simple, intelligente et entièrement automatisée au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Branchez votre véhicule",
                desc: "Raccordez votre voiture à la borne via le connecteur de Type 2 universel. La charge démarre instantanément ou s'active en fonction de vos programmations.",
                icon: BoltIcon,
              },
              {
                step: "02",
                title: "Planification intelligente",
                desc: "Configurez vos préférences de charge pour se déclencher automatiquement pendant les heures creuses de votre fournisseur d'énergie afin de minimiser le coût.",
                icon: ArrowPathIcon,
              },
              {
                step: "03",
                title: "Optimisation Solaire",
                desc: "Si vous possédez des panneaux solaires, la borne utilise en priorité votre surplus d'énergie propre et gratuite pour recharger votre batterie.",
                icon: LightBulbIcon,
              },
              {
                step: "04",
                title: "Suivi & Contrôle",
                desc: "Suivez votre consommation, l'état de la recharge et gérez la programmation à distance en temps réel directement sur l'application de votre smartphone.",
                icon: CpuChipIcon,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gray-50 text-gray-200 font-extrabold text-5xl px-4 py-2 select-none group-hover:text-ffeb99 transition-colors">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#116290]/10 flex items-center justify-center mb-6 text-ffb700 relative z-10">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Wiser Home Video */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Block Gauche - Texte */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] leading-tight mb-6">
                Votre recharge pilotée depuis l'application Wiser Home
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Programmez la recharge de votre véhicule à domicile avec l'application mobile Wiser Home par Schneider Electric<sup>(7)</sup>.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  "Pilotage de la recharge en temps réel",
                  "Programmation des jours et des heures de charge",
                  "Suivi de la consommation d'énergie"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 text-lg text-gray-700">
                    <svg className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Wiser Home est conçue pour vous aider à contrôler vos recharges en quelques clics !
              </p>
            </motion.div>

            {/* Block Droit - Vidéo YouTube */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/BStKQvG63ug"
                  title="Comment piloter Schneider Charge avec l'application Wiser Home"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Temps de Recharge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Block Gauche - Texte */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] leading-tight mb-6">
                Seulement 4h pour recharger votre voiture électrique à la maison
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Plus besoin d'attendre toute une journée pour charger votre batterie. Avec une borne installée par nos soins, vous bénéficiez d'une puissance optimisée qui s'adapte à votre véhicule pour une recharge complète et sécurisée en un temps record.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Recharge accélérée",
                    desc: "Divisez le temps de charge par 10 par rapport à une simple prise électrique."
                  },
                  {
                    title: "Sécurité certifiée",
                    desc: "Nos installations de qualité IRVE éliminent tout risque de surchauffe ou de surcharge électrique."
                  },
                  {
                    title: "Autonomie quotidienne",
                    desc: "Branchez votre voiture le soir et repartez chaque matin avec 100% de batterie."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <svg className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={openExpertModal}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Obtenir mon estimation
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </motion.div>

            {/* Block Droit - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/main-recharge-voiture-electrique-prise-borne-capuchon.jpeg"
                  alt="Branchement prise de recharge véhicule électrique"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section My Ohm Technologies - Expertise */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Block Gauche - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/borne-de-recharge-my-ohm-technologies.jpeg"
                  alt="Installation de borne de recharge par My Ohm Technologies"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Block Droit - Texte */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] leading-tight mb-6">
                My Ohm Technologies
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Spécialiste de la transition énergétique en région PACA, My Ohm Technologies conçoit et installe des solutions de recharge adaptées à votre quotidien. Nous vous garantissons une installation conforme aux normes de sécurité les plus strictes, pour une recharge sereine et optimisée.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Techniciens Qualifiés IRVE",
                    desc: "Nos experts détiennent la qualification officielle IRVE, indispensable pour garantir votre sécurité et l'éligibilité aux subventions de l'État."
                  },
                  {
                    title: "Solutions Éco-Responsables",
                    desc: "Maximisez vos économies en couplant votre borne à des panneaux solaires pour recharger votre voiture avec une énergie 100% verte."
                  },
                  {
                    title: "Accompagnement de A à Z",
                    desc: "De la première étude technique jusqu'à l'assistance après-vente, profitez d'un interlocuteur unique pour tout votre projet."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <svg className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={openExpertModal}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Obtenir mon estimation
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Réalisations */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] mb-4">
              Nos Réalisations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos installations de bornes de recharge pour véhicules électriques en région PACA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/images/borne/borne.jpg',
                title: 'Villa à Gap',
                description: 'Installation d\'une borne 11 kW triphasée connectée avec gestion dynamique de la recharge.',
                city: 'Gap',
                details: 'Gestion de charge intelligente'
              },
              {
                image: '/images/borne-digne.jpeg',
                title: 'Maison à Digne-les-Bains',
                description: 'Pose d\'une borne de recharge de 7.4 kW sur pied de fixation extérieur étanche.',
                city: 'Digne-les-Bains',
                details: 'Installation extérieure sur pied'
              },
              {
                image: '/images/borne-de-recharge-my-ohm-technologies.jpeg',
                title: 'Maison à Forcalquier',
                description: 'Installation d\'une borne intelligente connectée par My Ohm Technologies.',
                city: 'Forcalquier',
                details: 'Borne intelligente connectée'
              },
              {
                image: '/images/borne.jpeg',
                title: 'Villa à Manosque',
                description: 'Installation d\'une borne Schneider Charge 7.4 kW avec système de délestage intelligent.',
                city: 'Manosque',
                details: 'Délestage dynamique'
              },
              {
                image: '/images/main-recharge-voiture-electrique-prise-borne-capuchon.jpeg',
                title: 'Maison à Aix-en-Provence',
                description: 'Installation d\'une borne de recharge couplée à des panneaux solaires pour recharger 100% vert.',
                city: 'Aix-en-Provence',
                details: 'Alimentation solaire photovoltaïque'
              },
              {
                image: '/images/borne-marseille.jpeg',
                title: 'Résidence à Marseille',
                description: 'Double borne de recharge avec lecteur de badges RFID pour sécuriser l\'accès à la recharge.',
                city: 'Marseille',
                details: 'Accès sécurisé par badge RFID'
              },
              {
                image: '/images/borne-nice.jpeg',
                title: 'Villa à Nice',
                description: 'Installation en garage fermé d\'une borne de recharge Ohme 7.4 kW robuste et compacte.',
                city: 'Nice',
                details: 'Pose intérieure en garage'
              },
              {
                image: '/images/borne-toulon.jpeg',
                title: 'Maison à Toulon',
                description: 'Borne de recharge accélérée avec prise Type 2 standard européen et câble de charge inclus.',
                city: 'Toulon',
                details: 'Prise universelle Type 2'
              },
              {
                image: '/images/borne-recharge-hero.jpg',
                title: 'Villa à Avignon',
                description: 'Installation d\'une borne connectée permettant le pilotage de la charge durant les heures creuses.',
                city: 'Avignon',
                details: 'Optimisation heures creuses'
              }
            ].map((realisation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={realisation.image}
                    alt={realisation.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge de localisation */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-[#116290] flex items-center gap-1.5 shadow-sm">
                    <MapPinIcon className="h-4 w-4 text-orange-500" />
                    <span>{realisation.city}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#116290] transition-colors">
                      {realisation.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {realisation.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                    <span>{realisation.details}</span>
                    <span className="text-orange-500 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={openExpertModal}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
            >
              Réaliser mon projet
              <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>



      {/* Section FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes sur l'Installation de Borne
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir pour aborder votre projet d'installation en toute sérénité.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 bg-gray-50/50"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50/80 transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-gray-950 text-lg leading-snug pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                      }`}
                  >
                    <div className="p-6 text-gray-600 leading-relaxed text-[15px]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Section Contact */}
      <div id="contact">
        <ContactCTASection />
      </div>

      {/* Expert Modal */}
      <EnergyExpertModal isOpen={isExpertModalOpen} onClose={closeExpertModal} source="borne" />
    </main>
  );
}
