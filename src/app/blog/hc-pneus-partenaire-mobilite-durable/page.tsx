'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, MapPinIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function HCPneusArticle() {
  return (
    <article className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/hc-pneus-hero.jpg"
          alt="HC Pneus - Spécialiste pneumatique à Manosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center space-x-4 text-yellow-400 mb-6">
                <CalendarIcon className="h-5 w-5" />
                <span className="text-sm font-medium">27 décembre 2023</span>
                <span className="text-white/30">•</span>
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm font-medium">2 min de lecture</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                HC Pneus : Votre partenaire pour une mobilité durable à Manosque
              </h1>
              <p className="text-xl text-gray-300">
                Découvrez comment HC Pneus contribue à la transition énergétique en proposant des solutions 
                adaptées aux véhicules électriques et hybrides.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Retour aux articles
            </Link>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">
                Dans notre engagement pour une mobilité plus durable, nous sommes ravis de vous présenter 
                HC Pneus, un acteur local incontournable dans l&apos;entretien automobile à Manosque.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl my-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Points clés :</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expertise</h4>
                      <p className="text-gray-600">Expert en pneumatiques toutes marques</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance</h4>
                      <p className="text-gray-600">Solutions optimisées pour véhicules électriques</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Réactivité</h4>
                      <p className="text-gray-600">Service rapide et professionnel</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Satisfaction</h4>
                      <p className="text-gray-600">Engagement qualité client</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="my-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">L&apos;importance d&apos;un entretien régulier</h2>
                    <p className="text-gray-600 mb-6">
                      Les véhicules électriques, avec leur couple instantané et leur poids plus important,
                      nécessitent des pneus spécifiquement adaptés et un suivi régulier.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Sécurité optimale</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Économies d&apos;énergie</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Durabilité accrue</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/images/hc-peus-service.png"
                      alt="Service HC Pneus"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
      
              <blockquote className="my-12 p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-l-4 border-yellow-400">
                <p className="text-xl italic text-gray-700 mb-4">
                  La transition énergétique dans le secteur automobile nécessite une approche globale : 
                  des véhicules propres, bien entretenus, équipés de pneumatiques adaptés et économes 
                  en énergie.
                </p>
                <footer className="text-gray-600 font-medium">
                  HC Pneus & My OHM Technologies
                </footer>
              </blockquote>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Une synergie locale pour la mobilité durable</h2>
              <p className="text-gray-600">
                La proximité entre nos entreprises reflète une vision commune de la mobilité de demain : 
                plus propre, plus efficace, mais toujours aussi fiable et sécurisée.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6">
                  <h3 className="text-xl font-bold text-gray-900">Contactez HC Pneus</h3>
                  <p className="text-gray-800 mt-2">Expert en pneumatiques à Manosque</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPinIcon className="h-5 w-5" />
                    <span>544 Av. Frédéric Mistral, 04100 Manosque</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <PhoneIcon className="h-5 w-5" />
                    <span>06 72 18 05 56</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <GlobeAltIcon className="h-5 w-5" />
                    <a 
                      href="https://www.hcpneus.fr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:text-yellow-700"
                    >
                      www.hcpneus.fr
                    </a>
                  </div>
                  <a
                    href="https://www.hcpneus.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-4 bg-gray-900 text-white text-center py-3 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </motion.div>

            
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Prêt à passer à la mobilité électrique ?
                </h2>
                <p className="text-gray-800 mb-6">
                  Découvrez nos solutions de recharge et d&apos;énergie solaire pour votre véhicule électrique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Nous contacter
                  </Link>
                  <Link
                    href="/borne-de-recharge"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
                  >
                    En savoir plus sur nos bornes
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="/images/borne.jpg"
                  alt="Borne de recharge"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
