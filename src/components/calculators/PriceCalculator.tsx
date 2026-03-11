'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactModal from '../modals/ContactModal';
import { formAnalytics } from '@/services/formAnalytics';
import { trackConversion } from '../tracking/ConversionTracker';
import { useRouter } from 'next/navigation';

type HouseSize = 'small' | 'medium' | 'large';
type BillRange = 'low' | 'medium' | 'high';

interface FormData {
  houseSize: HouseSize;
  monthlyBill: BillRange;
  orientation: string;
  showContactForm: boolean;
}

const defaultFormData: FormData = {
  houseSize: 'medium',
  monthlyBill: 'medium',
  orientation: 'sud',
  showContactForm: false
};

const defaultContactInfo = {
  name: '',
  email: '',
  phone: ''
};

// Fonction de validation du numéro de téléphone
const validatePhoneNumber = (phone: string): boolean => {
  // Supprime tous les caractères non numériques
  const digitsOnly = phone.replace(/\D/g, '');
  // Vérifie que le numéro contient exactement 10 chiffres
  return digitsOnly.length === 10;
};

const defaultModalState = {
  isOpen: false,
  type: 'success' as const
};

export default function PriceCalculator() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [contactInfo, setContactInfo] = useState(defaultContactInfo);
  const [modalState, setModalState] = useState(defaultModalState);

  useEffect(() => {
    setIsMounted(true);
    formAnalytics.trackFormView('price_calculator', 2);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleBeforeUnload = () => {
      if (formData.showContactForm) {
        formAnalytics.trackFormAbandonment('price_calculator', 'contact_form');
      } else if (
        formData.houseSize !== defaultFormData.houseSize ||
        formData.monthlyBill !== defaultFormData.monthlyBill ||
        formData.orientation !== defaultFormData.orientation
      ) {
        formAnalytics.trackFormAbandonment('price_calculator', 'calculator_form');
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData, isMounted]);

  if (!isMounted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              🔍 Simulateur de Prix Panneaux Solaires
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-center text-lg mb-8">
                Chargement du simulateur...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const houseSizes = [
    { value: 'small', label: 'Petite maison (< 100m²)', roofArea: '20-40m²' },
    { value: 'medium', label: 'Maison moyenne (100-150m²)', roofArea: '40-70m²' },
    { value: 'large', label: 'Grande maison (> 150m²)', roofArea: '70-120m²' }
  ];

  const billRanges = [
    { value: 'low', label: '60€ - 120€ / mois', range: '60-120' },
    { value: 'medium', label: '120€ - 200€ / mois', range: '120-200' },
    { value: 'high', label: '200€ et plus / mois', range: '200+' }
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    formAnalytics.trackStepComplete('price_calculator', 1, 2);
    setFormData(prev => ({ ...prev, showContactForm: true }));
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    formAnalytics.trackFieldFocus('price_calculator', field);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation du numéro de téléphone
    if (!validatePhoneNumber(contactInfo.phone)) {
      alert("Le numéro de téléphone doit contenir exactement 10 chiffres.");
      return;
    }
    
    try {
      const estimate = calculateEstimate();
      const specs = calculateSystemSpecs();

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          city: '',
          source: 'PRICE_CALCULATOR',
          projectType: 'SOLAR_PANELS',
          notes: `Estimation : ${estimate}€, Taille du système : ${specs.systemSize}kWc, Production annuelle : ${specs.annualProduction}kWh, Économies mensuelles : ${specs.monthlySavings}€`,
          createdAt: new Date().toISOString(),
          status: 'NEW'
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi du formulaire');

      trackConversion('calculator_submission', {
        category: 'Form',
        label: 'PriceCalculator',
        value: estimate
      });

      formAnalytics.trackFormSubmission('price_calculator', true);

      // Utiliser l'API route pour envoyer l'email
      const emailResponse = await fetch('/api/send-calculation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: contactInfo.email,
          name: contactInfo.name,
          phone: contactInfo.phone,
          result: {
            savings: specs.monthlySavings.toString(),
            production: specs.annualProduction.toString(),
            co2: (specs.annualProduction * 0.0006).toFixed(1)
          }
        }),
      });

      if (!emailResponse.ok) throw new Error('Erreur lors de l\'envoi de l\'email');

      // Rediriger vers la page de remerciement
      router.push('/merci');
      
    } catch (error) {
      console.error('Erreur:', error);
      setModalState({ isOpen: true, type: 'error' });
    }
  };

  const calculateEstimate = () => {
    const roofArea = formData.houseSize === 'small' ? 30 : formData.houseSize === 'medium' ? 55 : 95;
    const basePrice = 250;
    const orientationFactor = formData.orientation === 'sud' ? 1 : 1.15;
    return Math.round(roofArea * basePrice * orientationFactor);
  };

  const calculateSystemSpecs = () => {
    const systemSize = formData.houseSize === 'small' ? 3 : formData.houseSize === 'medium' ? 6 : 9;
    const panelCount = Math.ceil(systemSize * 2);
    const annualProduction = systemSize * 1400;
    const monthlySavings = Math.round((annualProduction * 0.2) / 12);
    
    return {
      systemSize,
      panelCount,
      annualProduction,
      monthlySavings,
      panelPower: 500
    };
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        title={modalState.type === 'success' ? "Estimation envoyée avec succès !" : "Une erreur est survenue"}
        message={modalState.type === 'success' 
          ? "Merci ! Votre estimation a été envoyée. Vérifiez votre boîte email pour plus de détails. Un expert MyOhm vous contactera dans les plus brefs délais."
          : "Nous n'avons pas pu envoyer votre estimation. Veuillez vérifier votre connexion internet et réessayer."}
        primaryButtonText={modalState.type === 'success' ? "Compris" : "Réessayer"}
        secondaryButtonText={modalState.type === 'error' ? "Annuler" : undefined}
      />
      {!formData.showContactForm ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleCalculate} className="space-y-6">
            {/* Taille de la maison */}
            <div>
              <label className="block text-gray-700 font-semibold mb-4">
                Quelle est la taille de votre maison ?
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {houseSizes.map(size => (
                  <div
                    key={size.value}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                      formData.houseSize === size.value
                        ? 'border-FFDF64 bg-FFDF64/10'
                        : 'border-gray-200 hover:border-FFDF64'
                    }`}
                    onClick={() => handleFieldChange('houseSize', size.value)}
                  >
                    <h3 className="font-bold mb-2">{size.label}</h3>
                    <p className="text-sm text-gray-600">Surface de toit estimée : {size.roofArea}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Facture mensuelle */}
            <div>
              <label className="block text-gray-700 font-semibold mb-4">
                Quelle est votre facture d'électricité mensuelle ?
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {billRanges.map(bill => (
                  <div
                    key={bill.value}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                      formData.monthlyBill === bill.value
                        ? 'border-FFDF64 bg-FFDF64/10'
                        : 'border-gray-200 hover:border-FFDF64'
                    }`}
                    onClick={() => handleFieldChange('monthlyBill', bill.value)}
                  >
                    <h3 className="font-bold">{bill.label}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Orientation */}
            <div>
              <label className="block text-gray-700 font-semibold mb-4">
                Quelle est l'orientation principale de votre toit ?
              </label>
              <select
                value={formData.orientation}
                onChange={(e) => handleFieldChange('orientation', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
              >
                <option value="sud">Sud (Optimal)</option>
                <option value="est">Est</option>
                <option value="ouest">Ouest</option>
                <option value="nord">Nord</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-FFDF64 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Recevoir mon estimation personnalisée
            </button>
          </form>
        </motion.div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-[#d7f0fc]">
            <h3 className="text-2xl font-bold text-[#116290] mb-4">Installation Recommandée</h3>
            
            {/* Résumé de l'installation */}
            <div className="space-y-4 mb-6">
              {(() => {
                const specs = calculateSystemSpecs();
                return (
                  <>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="font-semibold">✓</span>
                      <p>Installation photovoltaïque de {specs.systemSize}kW</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="font-semibold">✓</span>
                      <p>{specs.panelCount} panneaux solaires Made in France de {specs.panelPower}W</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="font-semibold">✓</span>
                      <p>Économies estimées : {specs.monthlySavings}€/mois</p>
                    </div>
                  </>
                );
              })()}
            </div>

            <p className="text-gray-600 mb-6">
              Remplissez le formulaire ci-dessous pour qu'un expert en énergie solaire vous présente en détail votre installation et les économies possibles.
            </p>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Recevez votre estimation détaillée par email
              </h3>
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
                    placeholder="jean.dupont@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    required
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
                    placeholder="06 12 34 56 78"
                    pattern="[0-9 ]{10,14}"
                    title="Le numéro de téléphone doit contenir 10 chiffres"
                  />
                  <p className="text-sm text-gray-500 mt-1">Format: 10 chiffres (ex: 0612345678)</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-FFDF64 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  Recevoir mon estimation par email
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
