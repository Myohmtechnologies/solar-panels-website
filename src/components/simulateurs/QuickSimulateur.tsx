'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, BuildingOfficeIcon, BoltIcon, CurrencyEuroIcon, FireIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

interface QuickSimulateurProps {
  onStepChange?: (step: number) => void;
}

export default function QuickSimulateur({ onStepChange }: QuickSimulateurProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    chauffage: '',
    facture: '',
    nom: '',
    email: '',
    telephone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field !== 'nom' && field !== 'email' && field !== 'telephone') {
      const nextStep = step + 1;
      setStep(nextStep);
      onStepChange?.(nextStep);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validation basique
    if (!formData.nom || !formData.email || !formData.telephone) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          phone: formData.telephone,
          projectType: 'SOLAR_PANELS',
          source: 'QUICK_SIMULATOR',
          notes: `Type de logement: ${formData.type}, Type de chauffage: ${formData.chauffage}, Facture électrique: ${formData.facture}`,
          simulatorData: {
            logementType: formData.type,
            equipment: formData.chauffage,
            energyBill: formData.facture
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      // Redirection vers la page de remerciement
      router.push('/merci');
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl">
      {/* Titre qui apparaît uniquement aux étapes 1, 2 et 3 */}
      {step < 4 && (
        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-black mb-2">
            💡 Faites Votre Simulation en 2 Minutes !
          </h2>
          <p className="text-black">
            Découvrez combien vous pouvez économiser grâce à l'énergie solaire.
          </p>
        </div>
      )}

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
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
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-5 rounded-lg mb-6 shadow-lg transform -translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8">
              <div className="w-full h-full bg-yellow-300 opacity-20 rounded-full"></div>
            </div>
            <div className="flex items-center">
              <span className="text-4xl mr-4">🎉</span>
              <div>
                <h4 className="font-bold text-white text-xl mb-1">BONNE NOUVELLE !</h4>
                <p className="text-white text-lg font-medium">Vous êtes éligible aux aides de l'État jusqu'à <span className="font-bold text-yellow-300 text-xl">3 600€</span> pour votre installation solaire.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center text-black">
              Laissez vos coordonnées, un expert en énergie va vous contacter pour vous aider
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) => handleInputChange('nom', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#126290] focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#126290] focus:border-transparent"
                required
              />
              <input
                type="tel"
                placeholder="Votre téléphone"
                value={formData.telephone}
                onChange={(e) => handleInputChange('telephone', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#126290] focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 text-white font-semibold rounded-lg transition-all ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#126290] to-[#1a7ab3] hover:shadow-lg'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Être contacté par un expert'}
            </button>
          </div>
        </motion.div>
      )}
    </form>
  );
}
