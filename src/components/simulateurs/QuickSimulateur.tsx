'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, BuildingOfficeIcon, BoltIcon, CurrencyEuroIcon, FireIcon } from '@heroicons/react/24/outline';

interface QuickSimulateurProps {
  onStepChange?: (step: number) => void;
}

export default function QuickSimulateur({ onStepChange }: QuickSimulateurProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    chauffage: '',
    facture: '',
    nom: '',
    email: '',
    telephone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field !== 'nom' && field !== 'email' && field !== 'telephone') {
      const nextStep = step + 1;
      setStep(nextStep);
      onStepChange?.(nextStep);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl">
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold text-black mb-2">
              💡 Faites Votre Simulation en 2 Minutes !
            </h2>
            <p className="text-black">
              Découvrez combien vous pouvez économiser grâce à l'énergie solaire.
            </p>
          </div>

          <div className="p-6">
            <p className="text-black font-semibold text-xl mb-6 text-center">Vous êtes ?</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleInputChange('type', 'proprietaire')}
                className={`relative group flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                  formData.type === 'proprietaire'
                    ? 'border-[#126290] bg-gradient-to-br from-[#126290] to-[#1a7ab3] text-white shadow-lg'
                    : 'border-gray-200 hover:border-[#126290] hover:shadow-md bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50'
                }`}
              >
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center ${
                  formData.type === 'proprietaire'
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-ffeb99 to-ffb700'
                }`}>
                  <HomeIcon className={`w-8 h-8 ${formData.type === 'proprietaire' ? 'text-white' : 'text-[#126290]'}`} />
                </div>
                <span className="font-medium text-lg">Propriétaire</span>
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('type', 'locataire')}
                className={`relative group flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                  formData.type === 'locataire'
                    ? 'border-[#126290] bg-gradient-to-br from-[#126290] to-[#1a7ab3] text-white shadow-lg'
                    : 'border-gray-200 hover:border-[#126290] hover:shadow-md bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50'
                }`}
              >
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center ${
                  formData.type === 'locataire'
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-ffeb99 to-ffb700'
                }`}>
                  <BuildingOfficeIcon className={`w-8 h-8 ${formData.type === 'locataire' ? 'text-white' : 'text-[#126290]'}`} />
                </div>
                <span className="font-medium text-lg">Locataire</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 space-y-4"
        >
          <p className="text-black font-semibold text-xl mb-6 text-center">Votre type de chauffage ?</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'gaz', label: 'Gaz', icon: FireIcon },
              { value: 'electricite', label: 'Électricité', icon: BoltIcon },
              { value: 'autre', label: 'Autre', icon: '🔥' }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleInputChange('chauffage', option.value)}
                className={`relative group flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                  formData.chauffage === option.value
                    ? 'border-[#126290] bg-gradient-to-br from-[#126290] to-[#1a7ab3] text-white shadow-lg'
                    : 'border-gray-200 hover:border-[#126290] hover:shadow-md bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50'
                }`}
              >
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center ${
                  formData.chauffage === option.value
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-ffeb99 to-ffb700'
                }`}>
                  {typeof option.icon === 'string' ? (
                    <span className="text-2xl">{option.icon}</span>
                  ) : (
                    <option.icon className={`w-8 h-8 ${formData.chauffage === option.value ? 'text-white' : 'text-[#126290]'}`} />
                  )}
                </div>
                <span className="font-medium text-lg">{option.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 space-y-4"
        >
          <p className="text-black font-semibold text-xl mb-6 text-center">Quel est le montant de votre facture d'électricité ?</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '80-140', label: '80-140€', subLabel: 'par mois' },
              { value: '140-200', label: '140-200€', subLabel: 'par mois' },
              { value: '200+', label: '+ de 200€', subLabel: 'par mois' }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleInputChange('facture', option.value)}
                className={`relative group flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                  formData.facture === option.value
                    ? 'border-[#126290] bg-gradient-to-br from-[#126290] to-[#1a7ab3] text-white shadow-lg'
                    : 'border-gray-200 hover:border-[#126290] hover:shadow-md bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50'
                }`}
              >
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center ${
                  formData.facture === option.value
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-ffeb99 to-ffb700'
                }`}>
                  <span className="text-2xl">💶</span>
                </div>
                <span className="font-medium text-lg">{option.label}</span>
                <span className="text-sm opacity-75">{option.subLabel}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 space-y-6"
        >
          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-xl text-black text-center mb-8">
            <p className="text-2xl font-bold mb-2">🎉 Bonne nouvelle !</p>
            <p className="text-lg mb-2">Vous êtes éligible aux aides de l'État jusqu'à 3 600 € !</p>
            <p className="text-base opacity-90">Recevez gratuitement votre étude personnalisée détaillant toutes les aides disponibles et une estimation précise des coûts 📋✨</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="nom" className="block text-sm font-semibold text-black">
                Nom complet
              </label>
              <input
                type="text"
                id="nom"
                value={formData.nom}
                onChange={(e) => handleInputChange('nom', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#126290] focus:ring-2 focus:ring-[#126290] focus:ring-opacity-50 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-black">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#126290] focus:ring-2 focus:ring-[#126290] focus:ring-opacity-50 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="telephone" className="block text-sm font-semibold text-black">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                value={formData.telephone}
                onChange={(e) => handleInputChange('telephone', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#126290] focus:ring-2 focus:ring-[#126290] focus:ring-opacity-50 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-[#126290] to-[#1a7ab3] text-white py-5 px-6 rounded-xl hover:shadow-lg transition-all font-semibold text-lg"
            >
              Obtenir mon devis GRATUIT
            </button>

            <p className="text-sm text-center text-gray-600">
              Nous respectons vos données – Aucune sollicitation abusive.
            </p>
          </div>
        </motion.div>
      )}
    </form>
  );
}
