import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactModal from '../modals/ContactModal';
import { formAnalytics } from '@/services/formAnalytics';
import { trackConversion } from '../tracking/ConversionTracker';
import { sendCalculationEmail } from '@/services/emailService';

type HouseSize = 'small' | 'medium' | 'large';
type BillRange = 'low' | 'medium' | 'high';

interface FormData {
  houseSize: HouseSize;
  monthlyBill: BillRange;
  orientation: string;
  showContactForm: boolean;
}

export default function PriceCalculator() {
  const [formData, setFormData] = useState<FormData>({
    houseSize: 'medium',
    monthlyBill: 'medium',
    orientation: 'sud',
    showContactForm: false
  });

  useEffect(() => {
    formAnalytics.trackFormView('price_calculator', 2);
  }, []);

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    type: 'success'
  });

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

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (formData.showContactForm) {
        formAnalytics.trackFormAbandonment('price_calculator', 'contact_form');
      } else if (formData.houseSize !== 'medium' || formData.monthlyBill !== 'medium' || formData.orientation !== 'sud') {
        formAnalytics.trackFormAbandonment('price_calculator', 'calculator_form');
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData]);

  const calculateEstimate = () => {
    const roofArea = formData.houseSize === 'small' ? 30 : formData.houseSize === 'medium' ? 55 : 95;
    const consumption = formData.monthlyBill === 'low' ? 90 : formData.monthlyBill === 'medium' ? 160 : 250;
    
    // Prix de base par m² de panneau solaire
    const basePrice = 250;
    
    // Facteurs d'ajustement
    const roofTypeFactor = 1;
    const orientationFactor = formData.orientation === 'sud' ? 1 : 1.15;
    
    // Calcul de l'estimation
    const estimate = roofArea * basePrice * roofTypeFactor * orientationFactor;
    
    return Math.round(estimate);
  };

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const estimate = calculateEstimate();
      const systemSize = formData.houseSize === 'small' ? 3 : formData.houseSize === 'medium' ? 6 : 9;
      const annualProduction = systemSize * 1200; // Estimation de la production annuelle en kWh
      const annualSavings = (annualProduction * 0.2); // Estimation des économies annuelles (0.2€/kWh)

      // Envoie des données à l'API leads
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
          notes: `Estimation : ${estimate}€, Taille du système : ${systemSize}kWc, Production annuelle : ${annualProduction}kWh, Économies annuelles : ${annualSavings}€`,
          createdAt: new Date(),
          status: 'NEW'
        }),
      });

      if (response.ok) {
        // Track dans Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'calculator_submission', {
            'event_category': 'Form',
            'event_label': 'PriceCalculator',
            'value': estimate
          });
        }

        formAnalytics.trackFormSubmission('price_calculator', true);

        // Envoyer l'email avec les résultats via l'API
        try {
          const emailResponse = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'calculation',
              data: {
                email: contactInfo.email,
                name: contactInfo.name,
                result: {
                  savings: annualSavings.toFixed(0),
                  production: annualProduction.toFixed(0),
                  co2: (annualProduction * 0.0006).toFixed(1) // 0.6kg CO2 évité par kWh solaire
                }
              }
            }),
          });

          if (!emailResponse.ok) {
            console.error('❌ Erreur lors de l\'envoi de l\'email');
          } else {
            console.log('✅ Email envoyé avec succès');
          }
        } catch (error) {
          console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
        }

        // Stocker les infos du lead pour la page de remerciement
        const leadInfo = {
          name: contactInfo.name,
          estimate: estimate,
          systemSize: systemSize,
          annualSavings: annualSavings
        };
        sessionStorage.setItem('leadInfo', JSON.stringify(leadInfo));

        // Redirection vers la page de remerciement
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = new URL('/merci', window.location.origin);
        
        // Ajout des paramètres de tracking
        redirectUrl.searchParams.set('source', 'price_calculator');
        
        // Conservation du gclid et des UTM s'ils existent
        const trackingParams = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign'];
        trackingParams.forEach(param => {
          const value = urlParams.get(param);
          if (value) {
            redirectUrl.searchParams.set(param, value);
          }
        });
        
        // Track la conversion Google Ads si l'utilisateur vient d'une annonce
        const gclid = new URLSearchParams(window.location.search).get('gclid');
        if (typeof window !== 'undefined' && window.gtag && gclid) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-16817660787/FFX8CKXqk6EaEPPGpNM-',
            'value': 100.0,
            'currency': 'EUR'
          });
        }

        window.location.href = redirectUrl.toString();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      formAnalytics.trackFormSubmission('price_calculator', false, error instanceof Error ? error.message : 'Unknown error');
      setModalState({ isOpen: true, type: 'error' });
    }
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
              />
            </div>
            <button
              type="submit"
              className="w-full bg-FFDF64 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Recevoir mon estimation par email
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
