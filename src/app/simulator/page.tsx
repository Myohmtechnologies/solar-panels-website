'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { simulatorEvents } from '@/utils/analytics';
import { UserIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

// Constantes pour les étapes et les factures d'énergie
const STEPS = {
  PROPERTY_TYPE: 1,
  ENERGY_BILL: 2,
  EQUIPMENT: 3,
  CONTACT_INFO: 4
};

const ENERGY_BILL_RANGES = [
  { 
    label: "moins de 80€ par mois",
    value: "<80€",
    annual: "960€ par an",
    savings: "~380€ par an",
    co2: "~750kg par an"
  },
  { 
    label: "de 85€ à 165€ par mois",
    value: "85€-165€",
    annual: "1020€ - 1980€ par an",
    savings: "~720€ par an",
    co2: "~1200kg par an"
  },
  { 
    label: "plus de 165€ par mois",
    value: ">165€",
    annual: "1980€+ par an",
    savings: "~1100€ par an",
    co2: "~1800kg par an"
  },
];

const EQUIPMENT_OPTIONS = [
  {
    id: 'heatpump',
    label: 'Pompe à chaleur',
    icon: '🌡️',
    description: 'Chauffage et eau chaude',
    power: '3 kW',
    savings: '150€',
    price: '800€'
  },
  {
    id: 'ac',
    label: 'Climatisation',
    icon: '❄️',
    description: 'Rafraîchissement en été',
    power: '2 kW',
    savings: '100€',
    price: '600€'
  },
  {
    id: 'airconditioner',
    label: 'Air conditionné',
    icon: '🌪️',
    description: 'Climatisation fixe',
    power: '4 kW',
    savings: '200€',
    price: '1000€'
  },
  {
    id: 'evcharger',
    label: 'Borne de recharge',
    icon: '🔌',
    description: 'Pour véhicule électrique',
    power: '7 kW',
    savings: '300€',
    price: '1200€'
  },
  {
    id: 'pool',
    label: 'Piscine',
    icon: '🏊‍♂️',
    description: 'Filtration et chauffage',
    power: '5 kW',
    savings: '250€',
    price: '900€'
  },
  {
    id: 'electricheater',
    label: 'Radiateurs électriques',
    icon: '♨️',
    description: 'Chauffage électrique',
    power: '2 kW',
    savings: '100€',
    price: '500€'
  }
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
    { id: STEPS.EQUIPMENT, label: 'Équipements' },
    { id: STEPS.CONTACT_INFO, label: 'Coordonnées' }
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
    equipment: [] as string[],
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

  const handlePropertyTypeSelect = (type: string) => {
    setFormState(prev => ({ ...prev, logementType: type }));
    simulatorEvents.stepComplete('property_type', { property_type: type });
    setCurrentStep(STEPS.ENERGY_BILL);
    simulatorEvents.stepView('energy_bill');
  };

  const handleEquipmentSelect = (equipmentId: string) => {
    setFormState(prev => {
      const equipment = [...prev.equipment];
      const index = equipment.indexOf(equipmentId);
      if (index === -1) {
        equipment.push(equipmentId);
      } else {
        equipment.splice(index, 1);
      }
      simulatorEvents.equipmentSelected(equipment);
      return { ...prev, equipment };
    });
  };

  const handleEquipmentNext = () => {
    simulatorEvents.stepComplete('equipment', { equipment: formState.equipment });
    setCurrentStep(STEPS.CONTACT_INFO);
    simulatorEvents.stepView('contact');
  };

  const handleEnergyBillSelect = (range: string) => {
    setFormState(prev => ({ ...prev, energyBill: range }));
    simulatorEvents.stepComplete('energy_bill', { energy_bill: range });
    setCurrentStep(STEPS.EQUIPMENT);
    simulatorEvents.stepView('equipment');
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
    
    if (!validateForm()) {
      console.error('Validation Failed', formState.validationErrors);
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, error: "" }));

    const formData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      address: formState.address,
      city: formState.city,
      postalCode: formState.postalCode,
      residentialStatus: formState.residentialStatus || 'OWNER',
      logementType: formState.logementType,
      equipment: formState.equipment,
      energyBill: formState.energyBill,
      notes: JSON.stringify({
        logementType: formState.logementType,
        equipment: formState.equipment,
        energyBill: formState.energyBill
      })
    };

    console.log('Submitting Form Data:', JSON.stringify(formData, null, 2));

    try {
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
      window.location.href = '/merci';
      
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
    }
  };

  return (
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
            <h1 className="text-2xl md:text-3xl text-gray-900 font-semibold leading-snug">
              Découvrez combien vous pouvez économiser avec l&apos;énergie solaire
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
                <p className="text-gray-600 text-base mb-4">
                  Sélectionnez le type de logement pour une estimation précise
                </p>
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
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Quelle est votre facture d&apos;énergie ?
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  Sélectionnez votre tranche de consommation pour une estimation précise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ENERGY_BILL_RANGES.map((range, index) => (
                  <button 
                    key={index}
                    onClick={() => handleEnergyBillSelect(range.value)}
                    className="group bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center hover:scale-[1.02]"
                  >
                    <div className="flex flex-col items-center text-black justify-center space-y-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-semibold block">{range.label}</span>
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-700 mt-2">
                          <div>
                            <p className="font-bold text-black">{range.annual}</p>
                            <p>Facture</p>
                          </div>
                          <div>
                            <p className="font-bold text-green-600">+{range.savings}</p>
                            <p>Économies/an</p>
                          </div>
                          <div>
                            <p className="font-bold text-ffb700">{range.co2}</p>
                            <p>CO2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm mt-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Calcul précis
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personnalisé
                </span>
              </div>
            </div>
          )}

          {currentStep === STEPS.EQUIPMENT && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Quels équipements souhaitez-vous installer ?
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  Sélectionnez les équipements adaptés à votre logement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EQUIPMENT_OPTIONS.map((equipment) => (
                  <button
                    key={equipment.id}
                    onClick={() => handleEquipmentSelect(equipment.id)}
                    className={`group bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center hover:scale-[1.02] ${
                      formState.equipment.includes(equipment.id) 
                        ? 'border-4 border-green-500' 
                        : ''
                    }`}
                  >
                    <div className="flex items-center text-black justify-center space-x-3">
                      <div className="text-2xl mr-3">{equipment.icon}</div>
                      <div className="flex-1 text-left">
                        <span className="font-semibold block">{equipment.label}</span>
                        <p className="text-xs text-gray-600">{equipment.description}</p>
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-700 mt-2">
                          <div>
                            <p className="font-bold text-black">{equipment.power}</p>
                            <p>Puissance</p>
                          </div>
                          <div>
                            <p className="font-bold text-green-600">+{equipment.savings}</p>
                            <p>Économies/an</p>
                          </div>
                          <div>
                            <p className="font-bold text-ffb700">{equipment.price}</p>
                            <p>Prix</p>
                          </div>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        formState.equipment.includes(equipment.id)
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {formState.equipment.includes(equipment.id) && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm mt-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personnalisable
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Installation incluse
                </span>
              </div>

              <div className="mt-6 text-center">
                <button 
                  onClick={handleEquipmentNext}
                  disabled={formState.equipment.length === 0}
                  className={`w-full py-4 rounded-3xl text-white font-semibold transition-all duration-300 ${
                    formState.equipment.length > 0
                      ? 'bg-gradient-to-br from-ffeb99 to-ffb700 hover:shadow-xl hover:scale-[1.02]'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {currentStep === STEPS.CONTACT_INFO && (
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                  />
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                  />
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 mb-2">Adresse</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.868 2.122a1.91 1.91 0 0 0-1.916 1.916L.93 10.293a1.91 1.91 0 0 0 0 2.83l3.055 3.055a1.908 1.908 0 0 0 2.828 0l8.284-8.284A1.91 1.91 0 0 0 10.868 2.122z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre adresse"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-700 mb-2">Ville</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.868 2.122a1.91 1.91 0 0 0-1.916 1.916L.93 10.293a1.91 1.91 0 0 0 0 2.83l3.055 3.055a1.908 1.908 0 0 0 2.828 0l8.284-8.284A1.91 1.91 0 0 0 10.868 2.122z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formState.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre ville"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="postalCode" className="block text-gray-700 mb-2">Code Postal</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.868 2.122a1.91 1.91 0 0 0-1.916 1.916L.93 10.293a1.91 1.91 0 0 0 0 2.83l3.055 3.055a1.908 1.908 0 0 0 2.828 0l8.284-8.284A1.91 1.91 0 0 0 10.868 2.122z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formState.postalCode}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre code postal"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Obtenir une estimation gratuite 
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
  );
};

export default SimulateurPage;
