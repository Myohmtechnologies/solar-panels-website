'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BoltIcon,
  ArrowTrendingDownIcon,
  SunIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  BanknotesIcon,
  HomeIcon,
  CurrencyEuroIcon,
  ChartBarIcon,
  CpuIcon,
  PhoneIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';

const features = [
  {
    name: 'Économies d\'énergie substantielles',
    description: 'Réduisez jusqu\'à 60% vos factures de chauffage grâce à la performance des pompes à chaleur.',
    icon: CurrencyEuroIcon,
  },
  {
    name: 'Confort toutes saisons',
    description: 'Chauffez votre maison en hiver et rafraîchissez-la en été avec un seul et même appareil.',
    icon: SunIcon,
  },
  {
    name: 'Valorisation de votre bien',
    description: 'Améliorez le DPE (Diagnostic de Performance Énergétique) et augmentez la valeur de votre logement.',
    icon: HomeIcon,
  },
  {
    name: 'Eligible aux aides de l\'État',
    description: 'Profitez de MaPrimeRénov\' et des primes CEE grâce à notre certification RGE (Reconnu Garant de l\'Environnement).',
    icon: BanknotesIcon,
  },
  {
    name: 'Qualité d\'air améliorée',
    description: 'Systèmes de filtration avancés pour purifier l\'air et éliminer poussières, allergènes et bactéries.',
    icon: ShieldCheckIcon,
  },
];

const pacTypes = [
  {
    name: 'Pompe à Chaleur Air-Air',
    idealFor: 'Chauffage & Climatisation',
    description: 'Chauffez votre logement en hiver et rafraîchissez-le en été. Une solution 2-en-1 performante pour un confort optimal toute l\'année.',
    features: [
      'Chauffage en hiver et climatisation en été',
      'Jusqu\'à 60% d\'économies d\'énergie',
      'Régulation de température pièce par pièce',
      'Filtration et purification de l\'air intérieur',
      'Installation simple et rapide'
    ]
  },
  {
    name: 'Pompe à Chaleur Air-Eau',
    idealFor: 'Remplacement de chaudière',
    description: 'Remplacez votre ancienne chaudière fioul ou gaz par une solution écologique alimentant vos radiateurs ou plancher chauffant existants.',
    features: [
      'Chauffage + production d\'eau chaude sanitaire',
      'Jusqu\'à 70% d\'économies sur votre facture',
      'Compatible avec vos radiateurs existants',
      'Éligible aux aides maximales de l\'État',
      'Température d\'eau stable et homogène'
    ]
  }
];

export default function ClimatisationPage() {
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
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-full">
                  <span className="text-[#116290] font-medium">Climatisation & PAC RGE</span>
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
                Installer une climatisation réversible à domicile
              </h1>

              <div className="mb-6">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#ffb700] block">
                  À partir de 1 190 € TTC
                </span>
                <span className="text-sm text-gray-500 font-medium block mt-1">
                  Chauffage & climatisation — Installateur certifié RGE en région PACA
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Chauffage performant en hiver et climatisation douce en été",
                  "Jusqu'à 60% d'économies sur votre facture d'énergie",
                  "Installation par des experts certifiés RGE éligible aux aides de l'État"
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
                  Demander un devis gratuit
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
                  src="/images/clim.jpeg"
                  alt="Installation de climatisation réversible par MyOhm Technologies"
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
      {/* Section Accompagnement de A à Z */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] mb-4">
              My Ohm Technologies vous accompagne de A à Z
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution de chauffage et climatisation sans tracas, de la première étude jusqu'à la mise en service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Suivi personnalisé",
                desc: "Un technicien dédié vous accompagne dans votre projet et vous propose la solution de climatisation ou PAC adaptée à vos besoins.",
                icon: UserGroupIcon,
              },
              {
                title: "Installation",
                desc: "Votre équipement est installé chez vous par nos techniciens qualifiés RGE, garantissant une pose conforme aux normes.",
                icon: WrenchScrewdriverIcon,
              },
              {
                title: "Service après-vente",
                desc: "Assistance pour l'utilisation de vos appareils, contrat d'entretien : nous vous aidons face à la moindre difficulté.",
                icon: PhoneIcon,
              },
              {
                title: "Et plus d'options",
                desc: "Option smart control wifi, contrats d'entretien périodique... Pour une solution de confort thermique qui vous ressemble.",
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

      {/* How it works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne une pompe à chaleur ?
            </h2>
            <p className="text-xl text-gray-600">
              Un principe thermodynamique vertueux qui utilise l'énergie gratuite de l'air.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/maison-panneaux-solaires-borne-de-recharge-batterie-de-stockage.png"
                alt="Fonctionnement Pompe à Chaleur"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Captation de l'énergie",
                  description: "L'unité extérieure extrait les calories naturellement présentes dans l'air, même par grand froid."
                },
                {
                  number: "02",
                  title: "Valorisation de la chaleur",
                  description: "Le fluide frigorigène monte en température grâce au compresseur électrique intégré."
                },
                {
                  number: "03",
                  title: "Diffusion intérieure",
                  description: "La chaleur est restituée à l'intérieur du logement sous forme d'air chaud (Air-Air) ou d'eau chaude (Air-Eau)."
                },
                {
                  number: "04",
                  title: "Cycle réversible en été",
                  description: "Le cycle s'inverse pour évacuer la chaleur intérieure vers l'extérieur et rafraîchir les pièces."
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

      {/* Section Bénéfices Chauffage */}
      <section className="py-20 bg-white border-b border-gray-100">
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
                  src="/images/clim1.jpg"
                  alt="Chauffage performant et écologique"
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
              className="text-gray-900"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] leading-tight mb-6">
                Les bénéfices à choisir un système de chauffage plus performant
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Changer votre système de chauffage, c’est vous assurer de bénéficier des avantages des dernières innovations, pour votre confort mais aussi pour alléger votre budget quotidien ! Ce projet de rénovation énergétique de votre logement vous assure :
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Un confort thermique amélioré",
                    desc: "Avec un appareil de chauffage neuf, vous disposez chez vous des dernières technologies développées par les fabricants pour votre confort : contrôle de la température dans chaque pièce de votre logement, connectivité, programmation personnalisée en fonction de votre quotidien..."
                  },
                  {
                    title: "De vraies économies d’énergie",
                    desc: "Les nouveaux équipements pour se chauffer sont conçus pour réduire vos consommations en énergie. Les pompes à chaleur modulent désormais leur puissance en fonction des besoins réels, évitant ainsi la surconsommation d’énergie."
                  },
                  {
                    title: "Un bien immobilier valorisé",
                    desc: "Dans un marché de l’immobilier très concurrentiel, changer votre système de chauffage vous permet de donner une valeur ajoutée à votre logement grâce à l’amélioration de ses performances énergétiques et, par conséquent, de son classement sur le Diagnostic de performance énergétique (DPE)."
                  },
                  {
                    title: "Un geste pour l’environnement",
                    desc: "En vous équipant d’un nouvel appareil de chauffage, vous participez à la protection de la planète grâce à un meilleur contrôle des émissions de gaz à effet de serre. Si vous choisissez une pompe à chaleur, vous faites un pas de plus vers un chauffage plus propre, en ayant recours aux énergies renouvelables."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Types Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#116290] mb-4">
              Nos modèles de pompes à chaleur
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions simples et performantes adaptées à vos besoins de confort thermique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pacTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="bg-[#116290]/5 p-8 border-b border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900">{type.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 font-semibold text-[#116290]">Idéal pour : {type.idealFor}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                    <ul className="space-y-4">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <ShieldCheckIcon className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-8 border-t border-gray-50">
                  <button
                    onClick={openExpertModal}
                    className="w-full py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold rounded-2xl hover:shadow-xl hover:scale-[1.01] transition-all text-center"
                  >
                    Demander un devis gratuit
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact CTA Section */}
      <ContactCTASection />
      
      {/* Expert Modal */}
      <EnergyExpertModal isOpen={isExpertModalOpen} onClose={closeExpertModal} source="climatisation" />
    </main>
  );
}
