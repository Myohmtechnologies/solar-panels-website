'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { simulatorEvents, conversionEvents, navigationEvents, formEvents } from '@/utils/analytics';
import { UserIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import SimulateurSchemaMarkup from '@/components/SimulateurSchemaMarkup';

// Constantes pour les étapes et les factures d'énergie
const STEPS = {
  PROPERTY_TYPE: 1,
  ENERGY_BILL: 2,
  CONTACT: 3,
} as const;

const ENERGY_BILL_RANGES = [
  { 
    label: "moins de 80€ par mois",
    value: "<80€",
    annual: "960€ par an",
    savings: "~380€ par an",
    co2: "~750kg par an",
    bill: 80
  },
  { 
    label: "de 85€ à 165€ par mois",
    value: "85€-165€",
    annual: "1020€ - 1980€ par an",
    savings: "~720€ par an",
    co2: "~1200kg par an",
    bill: 125
  },
  { 
    label: "plus de 165€ par mois",
    value: ">165€",
    annual: "1980€+ par an",
    savings: "~1100€ par an",
    co2: "~1800kg par an",
    bill: 200
  },
];

// Validation des données
const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone: string): boolean => {
  const re = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return re.test(phone);
};

const validateName = (name: string): boolean => {
  return name.length >= 2;
};

const StepProgressBar = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { id: STEPS.PROPERTY_TYPE, label: 'Type de propriété' },
    { id: STEPS.ENERGY_BILL, label: 'Facture d\'énergie' },
    { id: STEPS.CONTACT, label: 'Coordonnées' }
  ];

  return (
    <div className="mb-8 space-y-2">
      <div className="flex justify-between items-center">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className={`text-sm font-medium ${
              currentStep > step.id 
                ? 'text-ffb700' 
                : currentStep === step.id 
                  ? 'text-ffb700 opacity-70' 
                  : 'text-gray-400'
            }`}
          >
            {step.label}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden flex">
        {steps.map((step) => (
          <div 
            key={step.id}
            className={`h-full transition-all duration-300 ${
              currentStep > step.id 
                ? 'bg-gradient-to-br from-ffeb99 to-ffb700' 
                : currentStep === step.id 
                  ? 'bg-gradient-to-br from-ffeb99 to-ffb700 opacity-50' 
                  : 'bg-gray-200'
            }`}
            style={{ 
              width: `${100 / steps.length}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const SimulateurPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(STEPS.PROPERTY_TYPE);
  const [formState, setFormState] = useState({
    residentialStatus: "",
    ownershipType: "",
    logementType: "",
    energyBill: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    isSubmitting: false,
    error: "",
    validationErrors: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: ""
    }
  });

  // Préchargement des images
  useEffect(() => {
    navigationEvents.pageView('/simulator');
    simulatorEvents.simulatorStart('direct');
    simulatorEvents.stepView('property_type');
    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    [
      '/images/maison.svg',
      '/images/appart.svg',
      '/images/logo.png'
    ].forEach(preloadImage);
  }, []);

  const handleStepChange = (newStep: number) => {
    let stepName: 'property_type' | 'energy_bill' | 'contact' = 'property_type';
    
    switch (newStep) {
      case STEPS.PROPERTY_TYPE:
        stepName = 'property_type';
        break;
      case STEPS.ENERGY_BILL:
        stepName = 'energy_bill';
        break;
      case STEPS.CONTACT:
        stepName = 'contact';
        break;
    }

    simulatorEvents.stepView(stepName);
    formEvents.formProgress('simulator', newStep, 3);

    setCurrentStep(newStep);
  };

  const handlePropertyTypeSelect = (type: string) => {
    simulatorEvents.stepComplete('property_type', { property_type: type });
    setFormState(prev => ({ ...prev, logementType: type }));
    handleStepChange(STEPS.ENERGY_BILL);
  };

  const handleEnergyBillSelect = (value: string) => {
    simulatorEvents.stepComplete('energy_bill', { energy_bill: value });
    setFormState(prev => ({ ...prev, energyBill: value }));
    handleStepChange(STEPS.CONTACT);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => {
      const newState = { ...prev, [name]: value };
      
      // Validation en temps réel
      const validationErrors = { ...prev.validationErrors };
      
      switch (name) {
        case 'email':
          validationErrors.email = validateEmail(value) ? "" : "Email invalide";
          break;
        case 'phone':
          validationErrors.phone = validatePhone(value) ? "" : "Numéro de téléphone invalide";
          break;
        case 'name':
          validationErrors.name = validateName(value) ? "" : "Nom trop court";
          break;
        case 'address':
          validationErrors.address = value.length > 0 ? "" : "Adresse requise";
          break;
        case 'city':
          validationErrors.city = value.length > 0 ? "" : "Ville requise";
          break;
        case 'postalCode':
          validationErrors.postalCode = value.length > 0 ? "" : "Code postal requis";
          break;
      }

      return { ...newState, validationErrors };
    });
  };

  const handleBack = () => {
    if (currentStep > STEPS.PROPERTY_TYPE) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const validateForm = (): boolean => {
    const validationErrors = {
      name: !validateName(formState.name) ? "Nom requis" : "",
      email: !validateEmail(formState.email) ? "Email invalide" : "",
      phone: !validatePhone(formState.phone) ? "Numéro de téléphone invalide" : "",
      address: formState.address.length === 0 ? "Adresse requise" : "",
      city: formState.city.length === 0 ? "Ville requise" : "",
      postalCode: formState.postalCode.length === 0 ? "Code postal requis" : ""
    };

    setFormState(prev => ({
      ...prev,
      validationErrors
    }));

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formState.isSubmitting) return;
    
    const isValid = validateForm();
    
    if (isValid) {
      setFormState(prev => ({ ...prev, isSubmitting: true, error: '' }));
      
      try {
        conversionEvents.simulatorConversion('complete', {
          property_type: formState.logementType,
          energy_bill: formState.energyBill,
        });

        const formData = {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          city: formState.city,
          postalCode: formState.postalCode,
          residentialStatus: formState.residentialStatus || 'OWNER',
          logementType: formState.logementType,
          energyBill: formState.energyBill,
          source: 'simulator',
          projectType: 'SOLAR_PANELS',
          notes: JSON.stringify({
            logementType: formState.logementType,
            energyBill: formState.energyBill,
            address: formState.address,
            postalCode: formState.postalCode
          })
        };

        console.log('Submitting Form Data:', JSON.stringify(formData, null, 2));

        const apiUrl = `${window.location.origin}/api/leads`;
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log('Response Status:', response.status);
        const data = await response.json();
        console.log('Response Data:', data);

        if (!response.ok) {
          throw new Error(data.error || 'Erreur lors de la soumission');
        }

        const leadInfo = {
          name: formState.name,
          logementType: formState.logementType,
          energyBill: formState.energyBill,
        };
        
        sessionStorage.setItem('leadInfo', JSON.stringify(leadInfo));
        
        // Redirection vers la page de remerciement avec les paramètres de tracking
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = new URL('/merci', window.location.origin);
        
        // Ajout des paramètres de tracking
        redirectUrl.searchParams.set('source', 'simulator');
        redirectUrl.searchParams.set('gclid', urlParams.get('gclid') || '');
        redirectUrl.searchParams.set('utm_source', urlParams.get('utm_source') || '');
        redirectUrl.searchParams.set('utm_medium', urlParams.get('utm_medium') || '');
        redirectUrl.searchParams.set('utm_campaign', urlParams.get('utm_campaign') || '');
        
        window.location.href = redirectUrl.toString();
        
      } catch (error: any) {
        console.error('Detailed Error:', {
          message: error.message,
          name: error.name,
          stack: error.stack,
          formData: formData
        });
        setFormState(prev => ({
          ...prev,
          error: error.message || "Une erreur est survenue lors de l'envoi du formulaire.",
          isSubmitting: false
        }));
        formEvents.formError('simulator_submission_error');
      }
    } else {
      formEvents.formError('simulator_validation_error');
    }
  };

  return (
    <main className="bg-white">
      <SimulateurSchemaMarkup />
      <div className="min-h-screen bg-white">
        <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-sm z-50 px-[10%] py-4 flex justify-between items-center">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={40}
              className="w-auto h-auto"
              priority
            />
          </Link>
        </header>

        <div className="flex flex-col lg:flex-row justify-between px-4 md:px-[10%] gap-8 lg:gap-16 pt-20">
          <div className="flex-1 max-w-2xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-semibold leading-snug">
                Estimation de votre projet solaire en 1 minute
              </h1>
              {currentStep > STEPS.PROPERTY_TYPE && (
                <button
                  onClick={handleBack}
                  className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
                  aria-label="Retour à l'étape précédente"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
            </div>

            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Étape {currentStep} sur {Object.keys(STEPS).length}
              </p>
              <StepProgressBar currentStep={currentStep} />
            </div>

            {currentStep === STEPS.PROPERTY_TYPE && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    Quel type de propriété ?
                  </h2>
                  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => handlePropertyTypeSelect("HOUSE")}
                    className="group bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center hover:scale-[1.02]"
                  >
                    <div className="flex items-center text-black justify-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="font-semibold">Maison individuelle</span>
                    </div>
                  </button>

                  <button 
                    onClick={() => handlePropertyTypeSelect("APARTMENT")}
                    className="group bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center hover:scale-[1.02]"
                  >
                    <div className="flex items-center text-black justify-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm4.5 4a.5.5 0 11-1 0 .5.5 0 011 0z" />
                      </svg>
                      <span className="font-semibold">Appartement</span>
                    </div>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm mt-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Estimation personnalisée
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Adapté à votre logement
                  </span>
                </div>
              </div>
            )}

            {currentStep === STEPS.ENERGY_BILL && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Quelle est votre facture d&apos;énergie ?
                  </h2>
                  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ENERGY_BILL_RANGES.map((range, index) => (
                    <button 
                      key={index}
                      onClick={() => handleEnergyBillSelect(range.value)}
                      className="group bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center hover:scale-[1.02]"
                    >
                      <div className="flex items-center text-black justify-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-left">
                          <span className="font-semibold text-lg md:text-xl block mb-1">{range.label}</span>
                          <span className="text-base md:text-lg text-gray-700">soit {range.annual}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-base mt-6">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Calcul précis
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personnalisé
                  </span>
                </div>
              </div>
            )}

            {currentStep === STEPS.CONTACT && (
              <form 
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nom Complet</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom et prénom"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64 ${
                        formState.validationErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formState.validationErrors.name && (
                      <p className="mt-1 text-red-500 text-sm">{formState.validationErrors.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64 ${
                        formState.validationErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formState.validationErrors.email && (
                      <p className="mt-1 text-red-500 text-sm">{formState.validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Numéro de Téléphone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="06 12 34 56 78"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64 ${
                        formState.validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formState.validationErrors.phone && (
                      <p className="mt-1 text-red-500 text-sm">{formState.validationErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-2">Adresse</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleInputChange}
                      required
                      placeholder="123 rue de la République"
                      className={`w-full pl-4 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64 ${
                        formState.validationErrors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formState.validationErrors.address && (
                      <p className="mt-1 text-red-500 text-sm">{formState.validationErrors.address}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-2">Ville</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formState.city}
                        onChange={handleInputChange}
                        required
                        placeholder="Ville"
                        className={`w-full pl-4 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64 ${
                          formState.validationErrors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formState.validationErrors.city && (
                        <p className="mt-1 text-red-500 text-sm">{formState.validationErrors.city}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="postalCode" className="block text-gray-700 mb-2">Code Postal</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formState.postalCode}
                        onChange={handleInputChange}
                        required
                        placeholder="75000"
                        className={`w-full pl-4 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64 ${
                          formState.validationErrors.postalCode ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formState.validationErrors.postalCode && (
                        <p className="mt-1 text-red-500 text-sm">{formState.validationErrors.postalCode}</p>
                      )}
                    </div>
                  </div>
                </div>

                {formState.error && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    {formState.error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={formState.isSubmitting}
                  className={`w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                    formState.isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {formState.isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Obtenir une estimation gratuite'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Section image */}
          <div className="flex-1 sticky top-[100px] hidden lg:flex items-start justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-1 bg-AFC97E/20 rounded-3xl blur"></div>
              <Image
                src="/images/right-simulation.png"
                alt="Maison avec panneaux solaires"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SimulateurPage;
