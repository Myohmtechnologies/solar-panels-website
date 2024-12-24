'use client';

import { 
  CalculatorIcon, 
  PhoneIcon,
  UserIcon 
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import Link from 'next/link';

const ActionCTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <CalculatorIcon className="w-12 h-12 text-FFDF64" />
              <h2 className="text-3xl font-bold text-gray-900">
                Votre Projet Solaire
              </h2>
            </div>

            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Deux options pour démarrer votre projet solaire : réalisez une simulation personnalisée ou contactez directement notre commercial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Simulation */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-FFDF64/20 rounded-full mb-4">
                  <CalculatorIcon className="w-10 h-10 text-FFDF64" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-AFC97E transition-colors">
                  Simulation Personnalisée
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Estimez le potentiel et les économies de votre installation solaire en quelques clics.
                </p>
                <Link 
                  href="/simulator" 
                  className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Lancer la Simulation
                </Link>
              </div>
            </div>

            {/* Contact Commercial */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-FFDF64/20 rounded-full mb-4">
                  <PhoneIcon className="w-10 h-10 text-FFDF64" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-AFC97E transition-colors">
                  Contactez un Commercial
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Parlez directement à notre expert pour un conseil personnalisé.
                </p>
                <button 
                  onClick={openModal}
                  className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Voir les Coordonnées
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Commercial */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-FFDF64/20 rounded-full mb-4">
                <UserIcon className="w-12 h-12 text-FFDF64" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rudy</h3>
              <p className="text-gray-600 mb-4">Technico-Commercial</p>
              <div className="bg-f2f6fa p-4 rounded-lg w-full text-center">
                <div className="flex items-center justify-center space-x-2">
                  <PhoneIcon className="w-6 h-6 text-FFDF64" />
                  <span className="text-lg font-semibold">06 47 76 07 25</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-4 text-center">
                N&apos;hésitez pas à me contacter pour toute question sur votre projet solaire.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionCTASection;
