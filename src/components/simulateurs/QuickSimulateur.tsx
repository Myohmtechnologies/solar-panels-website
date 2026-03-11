'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, BuildingOfficeIcon, BoltIcon, CurrencyEuroIcon, FireIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
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
    codePostal: '',
    adresse: '',
    telephone: ''
  });
  
  // Calculer le pourcentage de progression
  const progressPercentage = (step / 4) * 100;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'type' || field === 'chauffage' || field === 'facture') {
      const nextStep = step + 1;
      setStep(nextStep);
      onStepChange?.(nextStep);
      
      // Tracking Google Ads - conversions secondaires pour chaque étape
      if (typeof window !== 'undefined' && (window as any).gtag) {
        let conversionId = '';
        let conversionLabel = '';
        let conversionValue = 0;
        
        if (field === 'type') {
          // Conversion pour l'étape 1 (choix du type de logement)
          conversionId = 'AW-16817660787';
          conversionLabel = 'ypCbCI6G9LkaEPPGpNM-';
          conversionValue = 1.0;
        } else if (field === 'chauffage') {
          // Conversion pour l'étape 2 (choix du type de chauffage)
          conversionId = 'AW-16817660787';
          conversionLabel = 'GuogCKyr9rkaEPPGpNM-';
          conversionValue = 1.0;
        } else if (field === 'facture') {
          // Conversion pour l'étape 3 (montant de la facture)
          conversionId = 'AW-16817660787';
          conversionLabel = 'Lm7lCJCJ6LkaEPPGpNM-';
          conversionValue = 1.0;
        }
        
        if (conversionId && conversionLabel) {
          console.log(`Conversion déclenchée pour l'étape ${field}:`, `${conversionId}/${conversionLabel}`);
          (window as any).gtag('event', 'conversion', {
            'send_to': `${conversionId}/${conversionLabel}`,
            'value': conversionValue,
            'currency': 'EUR'
          });
        }
      }
    }
  };
  
  // Fonction pour revenir à l'étape précédente
  const goToPreviousStep = () => {
    if (step > 1) {
      const prevStep = step - 1;
      setStep(prevStep);
      onStepChange?.(prevStep);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validation basique
    if (!formData.nom || !formData.email || !formData.codePostal || !formData.adresse || !formData.telephone) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);

    try {
      // Appel API pour soumettre le formulaire
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          address: formData.adresse,
          postalCode: formData.codePostal,
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
      
      // Tracking Google Ads - conversion principale (seulement après soumission réussie)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        console.log('Conversion finale déclenchée (formulaire soumis avec succès):', 'AW-16817660787/LjhoCLLJ9rkaEPPGpNM-');
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-16817660787/LjhoCLLJ9rkaEPPGpNM-',
          'value': 10.0,
          'currency': 'EUR'
        });
      }

      // Sauvegarde des données de simulation en localStorage pour récupération ultérieure
      localStorage.setItem('lastSimulation', JSON.stringify({
        type: formData.type,
        chauffage: formData.chauffage,
        facture: formData.facture,
        date: new Date().toISOString()
      }));

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
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Titre qui apparaît uniquement aux étapes 1, 2 et 3 */}
      {step < 4 && (
        <div className="bg-gradient-to-r from-[#ffb700] to-[#ffeb99] p-6 rounded-t-2xl">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-black flex items-center">
              <span className="bg-white rounded-full p-1.5 mr-2 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#126290]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Configurez votre installation en 1 min !
            </h2>
          </div>
          <p className="text-black mb-3">
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              <span className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                <span className="mr-1">💰</span> Prix
              </span>
              <span className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                <span className="mr-1">⚡</span> Puissance
              </span>
              <span className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                <span className="mr-1">📈</span> Économies
              </span>
            </div>
            <span className="text-black/80 block w-full text-center">calculés selon vos besoins réels</span>
          </p>
        </div>
      )}

      {/* Indicateur de progression */}
      {step < 5 && (
        <div className="px-6 pt-4 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-[#126290] text-white text-xs font-bold rounded-full mr-2">
                {step}
              </span>
              <div className="text-sm font-medium text-[#126290]">
                Étape {step} sur 4
              </div>
            </div>
            <div className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
              {step === 1 ? 'Type de logement' : step === 2 ? 'Chauffage' : step === 3 ? 'Facture' : 'Vos coordonnées'}
            </div>
          </div>
          {/* Barre de progression plus explicite */}
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-gradient-to-r from-[#126290] to-[#1a7ab3] transition-all duration-300 ease-out shadow-inner"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
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
                    ? 'border-[#126290] bg-gradient-to-br from-[#126290] to-[#1a7ab3] text-white shadow-lg transform scale-105'
                    : 'border-gray-200 hover:border-[#126290] hover:shadow-md bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 hover:scale-102'
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
          <button
            type="button"
            onClick={goToPreviousStep}
            className="text-sm text-gray-500 hover:text-[#126290] font-medium mb-2 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
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
          <button
            type="button"
            onClick={goToPreviousStep}
            className="text-sm text-gray-500 hover:text-[#126290] font-medium mb-2 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
          <p className="text-black font-semibold text-xl mb-6 text-center">Quel est le montant de votre facture d'électricité ?</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '80-140', label: '80-140€', subLabel: 'par mois', popular: false },
              { value: '140-200', label: '140-200€', subLabel: 'par mois', popular: true },
              { value: '200+', label: '+ de 200€', subLabel: 'par mois', popular: false }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  handleInputChange('facture', option.value);
                  // Tracking Google Ads - conversion secondaire
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', {
                      'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYY',
                      'value': 10.0,
                      'currency': 'EUR',
                      'label': 'step3_completed'
                    });
                  }
                }}
                className={`relative group flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                  formData.facture === option.value
                    ? 'border-[#126290] bg-gradient-to-br from-[#126290] to-[#1a7ab3] text-white shadow-lg'
                    : 'border-gray-200 hover:border-[#126290] hover:shadow-md bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-2 -right-2 bg-[#ffb700] text-xs font-bold px-2 py-1 rounded-full text-gray-900 shadow-sm">
                    Populaire
                  </div>
                )}
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center ${
                  formData.facture === option.value
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-ffeb99 to-ffb700'
                }`}>
                  <CurrencyEuroIcon className={`w-8 h-8 ${formData.facture === option.value ? 'text-white' : 'text-[#126290]'}`} />
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
          <button
            type="button"
            onClick={goToPreviousStep}
            className="text-sm text-gray-500 hover:text-[#126290] font-medium mb-2 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-5 rounded-lg mb-6 shadow-lg transform -translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8">
              <div className="w-full h-full bg-yellow-300 opacity-20 rounded-full"></div>
            </div>
            <div className="flex items-center">
              <span className="text-4xl mr-4">💡</span>
              <div>
                <h4 className="font-bold text-white text-xl mb-1">BONNE NOUVELLE !</h4>
                <p className="text-white text-lg font-medium">Recevez votre étude personnalisée d'économies d'énergie</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            
            <p className="text-center text-gray-600 mb-2">
              Un expert analysera votre situation et vous enverra une estimation détaillée
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom complet"
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
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Code postal"
                  value={formData.codePostal}
                  onChange={(e) => handleInputChange('codePostal', e.target.value)}
                  className="col-span-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#126290] focus:border-transparent"
                  required
                  maxLength={5}
                  pattern="[0-9]{5}"
                />
                <input
                  type="text"
                  placeholder="Adresse complète"
                  value={formData.adresse}
                  onChange={(e) => handleInputChange('adresse', e.target.value)}
                  className="col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#126290] focus:border-transparent"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Votre téléphone"
                value={formData.telephone}
                onChange={(e) => handleInputChange('telephone', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#126290] focus:border-transparent"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 text-white font-semibold rounded-lg transition-all ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#126290] to-[#1a7ab3] hover:shadow-xl hover:scale-[1.02] transform-gpu'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 mr-2" />
                    Recevoir mon estimation gratuite
                  </span>
                )}
              </button>
              
              <button
                type="button"
                onClick={goToPreviousStep}
                className="text-sm text-gray-500 hover:text-[#126290] font-medium py-2"
              >
                ← Revenir aux étapes précédentes
              </button>
              
              {/* Mentions de confiance */}
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-500">Sans engagement</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-500">Données sécurisées</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-500">500+ clients satisfaits</span>
                </div>
              </div>
              
              {/* Logos de certification */}
              <div className="mt-6 pt-6 border-t border-gray-100">
              
                <div className="flex flex-wrap justify-center gap-4 py-2">
                  <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <img src="/images/logo-QualiPV-2025-RGE_sc.png" alt="Certification QualiPV" className="h-14 w-auto" />
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <img src="/images/LOGO-garantie-20-ans.png" alt="Garantie 20 ans" className="h-14 w-auto" />
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <img src="/images/qualifelec.jpg" alt="Certification Qualifelec" className="h-14 w-auto" />
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </form>
  );
}
