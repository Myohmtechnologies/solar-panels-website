'use client';

import Image from 'next/image';
import { HomeIcon, SunIcon, BanknotesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const CaseStudySection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f5f7fa to-e6e9f0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image et Détails de l'Installation */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
          <Image 
            src="/images/installation-panneaux-solaire-a-manosque.jpg" 
            alt="Installation de panneaux solaires" 
            width={800} 
            height={700} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Maison individuelle en PACA</h3>
              <p className="text-sm">Installation photovoltaïque de 6kW</p>
            </div>
          </div>
        </div>

        {/* Détails et Économies */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Votre Projet en Exemple
          </h2>
          
          <div className="space-y-6">
            {/* Détail 1 */}
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <HomeIcon className="w-10 h-10 text-[#116290]" />
              <div>
                <h4 className="font-semibold text-gray-800">Profil du Client</h4>
                <p className="text-gray-600">Maison individuelle de 120m²</p>
                <p className="text-sm text-gray-500">Consommation annuelle : 7 500 kWh</p>
              </div>
            </div>

            {/* Détail 2 */}
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <SunIcon className="w-10 h-10 text-[#116290]" />
              <div>
                <h4 className="font-semibold text-gray-800">Installation</h4>
                <p className="text-gray-600">12 panneaux de 500W (6kW au total)</p>
                <p className="text-sm text-gray-500">Production annuelle : 8 400 kWh</p>
              </div>
            </div>

            {/* Détail 3 */}
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <BanknotesIcon className="w-10 h-10 text-[#116290]" />
              <div>
                <h4 className="font-semibold text-gray-800">Économies Réalisées</h4>
                <p className="text-gray-600">Réduction de 65% sur la facture électrique</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-red-600 line-through">280€/mois avant</span>
                  <span className="text-sm text-green-600 font-bold">98€/mois après</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Économie : <span className="font-semibold text-green-600">182€/mois</span>
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-[#ffeb99] to-[#ffb700] p-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <CheckCircleIcon className="w-10 h-10 text-[#116290]" />
                <div>
                  <h4 className="font-bold text-[#116290]">Résultats Clés</h4>
                  <ul className="text-[#116290]/90 list-disc list-inside space-y-1">
                    <li>Installation : 15 990€ (avant aides)</li>
                    <li>Aides de l'État : jusqu'à 1 440€</li>
                    <li>Retour sur investissement : 6-7 ans</li>
                    <li>Réduction CO2 : 3.2 tonnes/an</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default CaseStudySection;
