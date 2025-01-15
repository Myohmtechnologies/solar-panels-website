'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
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
  WrenchIcon
} from '@heroicons/react/24/outline';
import { MyLightCalculator } from '@/components/MyLightCalculator';
import { VirtualBatteryTestimonials } from '@/components/VirtualBatteryTestimonials';

export default function VirtualBatteryPage() {
  const scrollToSimulator = () => {
    const simulator = document.querySelector('#simulator-section');
    if (simulator) {
      simulator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="overflow-x-hidden">
      <Head>
        <title>Batterie Virtuelle MyLight Systems - L&apos;Avenir du Stockage Solaire | Votre Entreprise</title>
        <meta name="description" content="Découvrez la batterie virtuelle MyLight Systems : stockez votre surplus d'énergie solaire sans batterie physique. Solution économique et écologique pour optimiser votre autoconsommation photovoltaïque." />
        <meta name="keywords" content="batterie virtuelle, MyLight Systems, panneaux solaires, autoconsommation, stockage énergie, photovoltaïque, énergie solaire" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="/images/mylight-hero.png"
              alt="MyLight Systems - Batterie Virtuelle"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
              La Batterie Virtuelle MyLight Systems
            </h1>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <BoltIcon className="w-6 h-6 text-white" />
                <span className="text-white">Jusqu'à 70% d'économies</span>
              </div>
              <div className="flex items-center space-x-2">
                <SunIcon className="w-6 h-6 text-white" />
                <span className="text-white">Production optimisée</span>
              </div>
            </div>

            <p className="text-lg text-white max-w-3xl mx-auto mb-12">
              Stockez votre surplus d'énergie solaire sans batterie physique et optimisez votre autoconsommation grâce à une solution innovante et écologique.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                <UserIcon className="w-5 h-5" />
                <span>Contacter un expert</span>
              </Link>

              <button
                onClick={scrollToSimulator}
                className="flex items-center justify-center space-x-2 bg-white text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                <ChartBarIcon className="w-5 h-5" />
                <span>Simuler vos économies</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-black">
                Pourquoi choisir la batterie virtuelle ?
              </h2>
              <p className="text-black/70">
                La batterie virtuelle MyLight Systems représente l'avenir du stockage d'énergie solaire.
                Cette solution innovante vous permet de :
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Stocker votre surplus d'énergie sans batterie physique</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Économiser jusqu'à 70% sur votre facture</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Suivre votre production en temps réel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-black/80">Solution 100% écologique sans maintenance</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ffeb99/20 to-transparent rounded-3xl transform -rotate-3"></div>
              <Image
                src="/images/mylight-app.jpg"
                alt="Application MyLight Systems"
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
              Comment fonctionne la batterie virtuelle ?
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Un système simple et efficace pour optimiser votre autoconsommation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Production Excédentaire",
                description: "Vos panneaux produisent plus que ce que vous consommez ? L'énergie est stockée virtuellement.",
                icon: SunIcon
              },
              {
                title: "Stockage Virtuel",
                description: "MyLight Systems enregistre vos kWh excédentaires sans perte d'énergie.",
                icon: CloudIcon
              },
              {
                title: "Utilisation Différée",
                description: "Utilisez vos kWh stockés quand vous en avez besoin, même la nuit !",
                icon: BoltIcon
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
              Pourquoi choisir MyLight Systems ?
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Découvrez les avantages d'une installation avec MyLight Systems par rapport à une installation solaire classique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Installation Sans MyLight */}
            <div className="relative p-8 rounded-2xl bg-gray-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold">
                  Sans MyLight
                </div>
              </div>
              <div className="space-y-6 mt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <XMarkIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Surplus d'énergie perdu</h3>
                    <p className="text-gray-600">L'énergie non consommée est revendue à un prix très bas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <XMarkIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pas de suivi en temps réel</h3>
                    <p className="text-gray-600">Impossible de connaître sa production et sa consommation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <XMarkIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Économies limitées</h3>
                    <p className="text-gray-600">30-50% d'économies sur la facture d'électricité</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900 mb-2">-50%</p>
                  <p className="text-gray-600">d'économies Minimum sur votre facture</p>
                </div>
              </div>
            </div>

            {/* Installation Avec MyLight */}
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
                    <h3 className="font-semibold text-black mb-1">Stockage virtuel intelligent</h3>
                    <p className="text-black/70">Votre surplus d'énergie est stocké pour une utilisation ultérieure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Application de suivi en temps réel</h3>
                    <p className="text-black/70">Visualisez et optimisez votre consommation à tout moment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Économies maximisées</h3>
                    <p className="text-black/70">Jusqu'à 70% d'économies sur votre facture</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black mb-2">-70%</p>
                  <p className="text-black/70">Jusqu'à 70% d'économies  sur votre facture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur d'économies */}
      <section id="simulator-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Calculez vos économies avec MyLight
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Estimez rapidement votre potentiel d'économies avec notre calculateur
            </p>
          </div>
          <MyLightCalculator />
        </div>
      </section>

      {/* Témoignages */}
      <VirtualBatteryTestimonials />

      {/* FAQ Section améliorée */}
      <section className="py-20 bg-gradient-to-br from-white to-ffeb99/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-ffeb99/20 to-ffb700/20 text-[#232323] text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-[#232323] mb-4">
              Tout savoir sur la batterie virtuelle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment My Light peut transformer votre façon de consommer l'énergie solaire
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                category: "Fonctionnement",
                questions: [
                  {
                    question: "Comment fonctionne la batterie virtuelle My Light ?",
                    answer: "La batterie virtuelle My Light est un système intelligent qui permet de stocker virtuellement votre surplus d'énergie solaire. Pendant la journée, lorsque vos panneaux produisent plus que ce que vous consommez, l'excédent est enregistré. Vous pouvez ensuite utiliser ces kWh stockés pendant les périodes de faible production (soir, nuit) ou lors des pics de consommation."
                  },
                  {
                    question: "Est-ce compatible avec mon installation solaire existante ?",
                    answer: "Oui, la batterie virtuelle My Light est compatible avec la plupart des installations solaires existantes. Nos experts peuvent facilement intégrer le système à votre installation actuelle. Une simple mise à jour de votre compteur communicant suffit généralement."
                  },
                  {
                    question: "Que se passe-t-il en cas de coupure internet ?",
                    answer: "En cas de coupure internet, votre installation continue de fonctionner normalement. Les données sont temporairement stockées localement et se synchronisent automatiquement une fois la connexion rétablie. Vous ne perdez donc aucune donnée de production ou de consommation."
                  }
                ]
              },
              {
                category: "Avantages et Économies",
                questions: [
                  {
                    question: "Quelles économies puis-je réaliser avec My Light ?",
                    answer: "Avec My Light, vous pouvez économiser jusqu'à 70% sur votre facture d'électricité, contre seulement 40% avec un système de revente classique (EDF OA). Le système optimise automatiquement votre consommation et vous permet de maximiser l'utilisation de votre production solaire."
                  },
                  {
                    question: "Quels sont les avantages par rapport à une batterie physique ?",
                    answer: "La batterie virtuelle présente plusieurs avantages majeurs : aucun coût d'installation ou de maintenance, pas de perte d'efficacité dans le temps, pas d'espace requis, et une durée de vie illimitée. De plus, elle est plus écologique car elle ne nécessite pas la fabrication de batteries physiques."
                  },
                  {
                    question: "Quel est le retour sur investissement ?",
                    answer: "Le retour sur investissement est généralement plus rapide qu'avec une batterie physique. Avec des économies pouvant atteindre 70% sur votre facture d'électricité, et sans coût de maintenance, le système est rentabilisé en moyenne entre 5 et 7 ans."
                  }
                ]
              },
              {
                category: "Maintenance et Suivi",
                questions: [
                  {
                    question: "La batterie virtuelle nécessite-t-elle une maintenance ?",
                    answer: "Non, la batterie virtuelle ne nécessite aucune maintenance car c'est un système 100% virtuel. Il n'y a pas de composants physiques à entretenir ou à remplacer. Le système est géré automatiquement via notre plateforme cloud sécurisée."
                  },
                  {
                    question: "Comment puis-je suivre ma production et ma consommation ?",
                    answer: "My Light vous fournit une application mobile et une interface web intuitive qui vous permettent de suivre en temps réel votre production, votre consommation et vos économies. Vous pouvez visualiser vos statistiques quotidiennes, hebdomadaires et mensuelles pour optimiser votre consommation."
                  }
                ]
              }
            ].map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-ffeb99/20 to-ffb700/20">
                  <h3 className="text-xl font-semibold text-[#232323]">
                    {category.category}
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      initial={false}
                      animate={{ backgroundColor: "white" }}
                      whileHover={{ backgroundColor: "rgb(255, 250, 240)" }}
                      className="relative overflow-hidden"
                    >
                      <details className="group">
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
              Prêt à optimiser votre installation solaire ?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
              Découvrez comment la batterie virtuelle My Light peut transformer votre façon de consommer l'énergie solaire.
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
    </main>
  );
}
