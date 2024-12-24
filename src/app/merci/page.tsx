'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, ClockIcon, SunIcon, PhoneIcon } from '@heroicons/react/24/solid';

export default function MerciPage() {
  const [leadInfo, setLeadInfo] = useState<{
    name?: string;
    logementType?: string;
    energyBill?: string;
  } | null>(null);

  const [showPanelInfo, setShowPanelInfo] = useState(false);
  const [showMicroInverterInfo, setShowMicroInverterInfo] = useState(false);

  useEffect(() => {
    const storedLeadInfo = sessionStorage.getItem('leadInfo');
    if (storedLeadInfo) {
      setLeadInfo(JSON.parse(storedLeadInfo));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-f2f6fa to-e3e9f0">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="MyOhm Technologies Logo" 
              width={150} 
              height={50} 
              priority
            />
          </Link>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+33492766858" 
              className="flex items-center text-FFDF64 hover:text-ffb700 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              <span className="font-semibold text-gray-900">04 92 76 68 58</span>
            </a>
          </div>
        </div>
      </header>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <CheckCircleIcon className="w-24 h-24 text-6C8D2F mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Merci {leadInfo?.name ? `${leadInfo.name} !` : '!'}
              </h1>
              <p className="text-gray-700 mb-6">
                Nous vous remercions de l&apos;intérêt que vous portez à notre entreprise. Votre demande d&apos;estimation pour un projet {leadInfo?.logementType ? `${leadInfo.logementType}` : 'solaire'} a bien été reçue. 
                Nous allons analyser votre projet en détail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-ffeb99 to-ffb700/20 rounded-2xl p-6 space-y-4 text-center">
              <ClockIcon className="w-16 h-16 text-6C8D2F mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 text-xl">Délai de Réponse</h3>
              <p className="text-gray-700">
                Nous vous recontacterons sous 24 à 48 heures ouvrées.
              </p>
            </div>

            <div className="bg-gradient-to-br from-ffeb99 to-ffb700/20 rounded-2xl p-6 space-y-4 text-center">
              <SunIcon className="w-16 h-16 text-6C8D2F mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 text-xl">Étude Personnalisée</h3>
              <p className="text-gray-700">
                Notre expert analysera votre consommation et votre potentiel solaire.
              </p>
            </div>

            <div className="bg-gradient-to-br from-ffeb99 to-ffb700/20 rounded-2xl p-6 space-y-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-6C8D2F mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742c.8-.57 1.914-1.434 3.037-2.476C17.134 16.25 20 12.154 20 8.5a8 8 0 00-8-8 8 8 0 00-8 8c0 3.654 2.865 7.75 6.436 11.362a16.97 16.97 0 001.144.742zM12 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <h3 className="font-bold text-gray-900 text-xl">Conseil Local</h3>
              <p className="text-gray-700">
                Un conseiller de votre région vous accompagnera.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prochaines Étapes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all hover:scale-[1.05]">
                <div className="text-4xl mb-4 text-FFDF64">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Appel Conseil</h3>
                <p className="text-gray-700 text-sm">
                  Un expert MyOhm vous contactera dans les 24-48h pour comprendre vos besoins spécifiques et répondre à vos questions.
                </p>
                <ul className="text-left text-xs text-gray-600 mt-3 space-y-1 list-disc pl-4">
                  <li>Analyse de votre consommation</li>
                  <li>Potentiel solaire de votre propriété</li>
                  <li>Estimation financière personnalisée</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg opacity-70 transform transition-all hover:scale-[1.05] hover:opacity-100">
                <div className="text-4xl mb-4 text-FFDF64">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Étude Technique</h3>
                <p className="text-gray-700 text-sm">
                  Notre équipe réalise une étude technique détaillée de votre installation solaire.
                </p>
                <ul className="text-left text-xs text-gray-600 mt-3 space-y-1 list-disc pl-4">
                  <li>Relevé précis de votre toiture</li>
                  <li>Calcul de l&apos;orientation et de l&apos;inclinaison</li>
                  <li>Dimensionnement optimal des panneaux</li>
                  <li>Devis technique et financier</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg opacity-50 transform transition-all hover:scale-[1.05] hover:opacity-100">
                <div className="text-4xl mb-4 text-FFDF64">🛠️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Installation</h3>
                <p className="text-gray-700 text-sm">
                  Nos techniciens qualifiés réalisent l&apos;installation complète de votre système solaire.
                </p>
                <ul className="text-left text-xs text-gray-600 mt-3 space-y-1 list-disc pl-4">
                  <li>Installation des panneaux</li>
                  <li>Raccordement électrique</li>
                  <li>Tests et mise en service</li>
                  <li>Formation à l&apos;utilisation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="merci-solar-recommendation">
              <div className="recommendation-header flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Solution Recommandée</h2>
                <span className="text-xl font-semibold text-FFDF64">3 kWc</span>
              </div>

              <div className="recommendation-details grid md:grid-cols-2 gap-4">
                <div className="recommendation-stat bg-gradient-to-br from-ffeb99 to-ffb700/20 p-4 rounded-xl">
                  <div className="stat-header flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Installation</span>
                    <button 
                      className="text-FFDF64 hover:bg-ffb700/20 rounded-full p-1 transition-colors"
                      onClick={() => setShowPanelInfo(!showPanelInfo)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <strong className="text-gray-900 text-lg">6 panneaux solaires</strong>
                  {showPanelInfo && (
                    <div className="info-popup bg-white border border-FFDF64/20 p-2 rounded-lg mt-2 text-sm text-gray-700">
                      Panneaux 500W 100% fabriqués en France
                    </div>
                  )}
                </div>

                <div className="recommendation-stat bg-gradient-to-br from-ffeb99 to-ffb700/20 p-4 rounded-xl">
                  <div className="stat-header flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Type d&apos;onduleur</span>
                    <button 
                      className="text-FFDF64 hover:bg-ffb700/20 rounded-full p-1 transition-colors"
                      onClick={() => setShowMicroInverterInfo(!showMicroInverterInfo)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <strong className="text-gray-900 text-lg">Micro-onduleur</strong>
                  {showMicroInverterInfo && (
                    <div className="info-popup bg-white border border-FFDF64/20 p-2 rounded-lg mt-2 text-sm text-gray-700">
                      Micro-onduleurs optimisant la production de chaque panneau
                    </div>
                  )}
                </div>

                <div className="recommendation-stat bg-gradient-to-br from-ffeb99 to-ffb700/20 p-4 rounded-xl">
                  <span className="text-gray-700 font-medium block mb-2">Production annuelle</span>
                  <strong className="text-gray-900 text-lg">4 380 kWh</strong>
                </div>

                <div className="recommendation-stat bg-gradient-to-br from-ffeb99 to-ffb700/20 p-4 rounded-xl">
                  <span className="text-gray-700 font-medium block mb-2">Prix de l&apos;électricité solaire</span>
                  <strong className="text-gray-900 text-lg">0,07 € / kWh</strong>
                </div>
              </div>

              <div className="savings-container mt-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Vos économies estimées</h3>
                <div className="savings-grid grid md:grid-cols-2 gap-4">
                  {[
                    { label: 'Économies mensuelles', value: '95 €' },
                    { label: 'Économies annuelles', value: '1 140 €' },
                    { label: 'Réduction CO2', value: '1 200 kg/an' },
                    { label: 'Retour sur investissement', value: '6-8 ans' }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="savings-item bg-gradient-to-br from-ffeb99 to-ffb700/20 p-4 rounded-xl text-center"
                    >
                      <span className="block text-gray-700 text-sm mb-2">{item.label}</span>
                      <strong className="text-gray-900 text-lg">{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/" 
              className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}