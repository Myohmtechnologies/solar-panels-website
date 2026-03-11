'use client';

import Image from 'next/image';
import { useState } from 'react';
import GuideModal from './GuideModal';

export default function ClientPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-AFC97E/10 to-FFDF64/10 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block text-AFC97E">Guide Gratuit</span>
              <span className="block mt-2">Aides et Subventions Panneaux Solaires</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Découvrez toutes les aides disponibles pour votre projet solaire et économisez jusqu&apos;à 90% sur votre installation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Column - Guide Preview */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/aide-subventions-panneaux-solaire.jpeg"
                  alt="Guide des aides et subventions pour panneaux solaires"
                  width={600}
                  height={800}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg backdrop-filter">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Dans ce guide, vous découvrirez :
                </h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start transform hover:scale-105 transition-transform duration-200">
                    <div className="flex-shrink-0 p-2 bg-AFC97E/10 rounded-lg">
                      <svg className="h-6 w-6 text-AFC97E" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Crédit d&apos;Impôt Transition Énergétique</h3>
                      <p className="mt-1 text-gray-600">Réduction fiscale jusqu&apos;à 30%</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start transform hover:scale-105 transition-transform duration-200">
                    <div className="flex-shrink-0 p-2 bg-AFC97E/10 rounded-lg">
                      <svg className="h-6 w-6 text-AFC97E" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Éco-Prêt à Taux Zéro</h3>
                      <p className="mt-1 text-gray-600">Prêt sans intérêts pour financer vos travaux</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start transform hover:scale-105 transition-transform duration-200">
                    <div className="flex-shrink-0 p-2 bg-AFC97E/10 rounded-lg">
                      <svg className="h-6 w-6 text-AFC97E" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">MaPrimeRénov</h3>
                      <p className="mt-1 text-gray-600">Jusqu&apos;à 4000€ d&apos;aide directe de l&apos;État</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start transform hover:scale-105 transition-transform duration-200">
                    <div className="flex-shrink-0 p-2 bg-AFC97E/10 rounded-lg">
                      <svg className="h-6 w-6 text-AFC97E" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Certificats d&apos;Économies d&apos;Énergie</h3>
                      <p className="mt-1 text-gray-600">Cumulable avec MaPrimeRénov</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start transform hover:scale-105 transition-transform duration-200">
                    <div className="flex-shrink-0 p-2 bg-AFC97E/10 rounded-lg">
                      <svg className="h-6 w-6 text-AFC97E" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">TVA à taux réduit</h3>
                      <p className="mt-1 text-gray-600">Seulement 10% au lieu de 20%</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start transform hover:scale-105 transition-transform duration-200">
                    <div className="flex-shrink-0 p-2 bg-AFC97E/10 rounded-lg">
                      <svg className="h-6 w-6 text-AFC97E" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Aides régionales et locales</h3>
                      <p className="mt-1 text-gray-600">Découvrez les aides spécifiques à votre région</p>
                    </div>
                  </li>
                </ul>

                {/* CTA Section */}
                <div className="mt-10">
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-xl text-lg font-medium text-white bg-AFC97E hover:bg-AFC97E/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-AFC97E transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span>Télécharger le guide gratuitement</span>
                    <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    Guide PDF gratuit • Édition 2024 • Mis à jour mensuellement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de formulaire */}
      <GuideModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
