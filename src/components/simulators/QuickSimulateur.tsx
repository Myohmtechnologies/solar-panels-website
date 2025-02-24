'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  HomeIcon, 
  UserIcon, 
  BuildingOfficeIcon, 
  FireIcon,
  BoltIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  ArrowLeftIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import { submitLead } from '@/services/leadService';
import { sendCalculationEmail } from '@/services/emailService';

type SimulatorStep = 'status' | 'housing' | 'heating' | 'bill' | 'surface' | 'contact';

interface FormData {
  status: 'owner' | 'tenant' | '';
  housing: 'house' | 'apartment' | '';
  heating: 'gas' | 'electricity' | 'other' | '';
  bill: 'low' | 'medium' | 'high' | '';
  surface: 'less100' | '100to150' | 'more150' | '';
  fullName: string;
  email: string;
  phone: string;
}

export default function QuickSimulateur() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<SimulatorStep>('status');
  const [formData, setFormData] = useState<FormData>({
    status: '',
    housing: '',
    heating: '',
    bill: '',
    surface: '',
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const steps: SimulatorStep[] = ['status', 'housing', 'heating', 'bill', 'surface', 'contact'];

  const calculateEstimations = () => {
    // Calculer la taille du système en kWc
    let systemSize = 0;
    if (formData.surface === 'less100') systemSize = 3;
    else if (formData.surface === '100to150') systemSize = 6;
    else systemSize = 9;

    // Calculer la production annuelle (kWh) - estimation basée sur la taille du système
    const productionFactor = formData.heating === 'electricity' ? 1200 : 1000;
    const annualProduction = systemSize * productionFactor;

    // Calculer les économies annuelles (€)
    const pricePerKwh = 0.2;
    const totalAnnualSavings = Math.round(annualProduction * pricePerKwh);

    return {
      systemSize,
      production: annualProduction,
      totalAnnualSavings
    };
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Avancer automatiquement à l'étape suivante
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const estimations = calculateEstimations();
      console.log('Estimations calculées:', estimations);
      
      // Enregistrer le lead avec le format exact attendu par l'API
      const leadResult = await submitLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: '',
        address: '',
        postalCode: '',
        source: 'simulator',
        notes: `Production: ${estimations.production}kWh/an, Économies: ${estimations.totalAnnualSavings}€/an, Puissance: ${estimations.systemSize}kWc`,
        logementType: formData.housing,
        equipment: formData.heating,
        energyBill: formData.bill,
        residentialStatus: formData.status,
        createdAt: new Date().toISOString()
      });

      console.log('Réponse du service de lead:', leadResult);

      if (!leadResult.success) {
        throw new Error(leadResult.error || "Une erreur s'est produite lors de l'enregistrement");
      }

      // Rediriger vers la page de remerciement
      router.push('/merci');
    } catch (error) {
      console.error('Erreur détaillée:', error);
      setSubmitError(error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer.");
      setIsSubmitting(false);
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const renderStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    const showBackButton = currentIndex > 0;

    const BackButton = () => showBackButton ? (
      <button
        onClick={goToPreviousStep}
        className="mt-6 w-full py-3 px-4 text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center justify-center gap-2 group border border-gray-200 rounded-lg hover:border-green-500"
      >
        <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium">Retour à l'étape précédente</span>
      </button>
    ) : null;

    switch (currentStep) {
      case 'status':
        return (
          <div className="space-y-4 transform transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-center mb-6">Vous êtes ?</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => updateFormData('status', 'owner')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.status === 'owner' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <HomeIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium">Propriétaire</span>
              </button>

              <button
                onClick={() => updateFormData('status', 'tenant')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.status === 'tenant' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <UserIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium">Locataire</span>
              </button>
            </div>
            <BackButton />
          </div>
        );

      case 'housing':
        return (
          <div className="space-y-4 transform transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-center mb-6">Vous habitez ?</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => updateFormData('housing', 'house')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.housing === 'house' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <HomeIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium">Une maison</span>
              </button>

              <button
                onClick={() => updateFormData('housing', 'apartment')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.housing === 'apartment' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <BuildingOffice2Icon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium">Un appartement</span>
              </button>
            </div>
            <BackButton />
          </div>
        );

      case 'heating':
        return (
          <div className="space-y-4 transform transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-center mb-6">Votre type de chauffage ?</h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => updateFormData('heating', 'gas')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.heating === 'gas' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <FireIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium">Gaz</span>
              </button>

              <button
                onClick={() => updateFormData('heating', 'electricity')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.heating === 'electricity' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <BoltIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium">Électricité</span>
              </button>

              <button
                onClick={() => updateFormData('heating', 'other')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.heating === 'other' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <QuestionMarkCircleIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium">Autre</span>
              </button>
            </div>
            <BackButton />
          </div>
        );

      case 'bill':
        return (
          <div className="space-y-4 transform transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-center mb-6">Montant de votre facture d'électricité ?</h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => updateFormData('bill', 'low')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.bill === 'low' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <BanknotesIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium text-center">80€ - 140€</span>
              </button>

              <button
                onClick={() => updateFormData('bill', 'medium')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.bill === 'medium' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <BanknotesIcon className="w-8 h-8 text-green-600 transform scale-110" />
                </div>
                <span className="font-medium text-center">140€ - 200€</span>
              </button>

              <button
                onClick={() => updateFormData('bill', 'high')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.bill === 'high' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <BanknotesIcon className="w-8 h-8 text-green-600 transform scale-125" />
                </div>
                <span className="font-medium text-center">Plus de 200€</span>
              </button>
            </div>
            <BackButton />
          </div>
        );

      case 'surface':
        return (
          <div className="space-y-4 transform transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-center mb-6">Quelle est la surface de votre logement ?</h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => updateFormData('surface', 'less100')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.surface === 'less100' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <ChartBarIcon className="w-8 h-8 text-green-600 transform rotate-180" />
                </div>
                <span className="font-medium text-center">Moins de 100m²</span>
              </button>

              <button
                onClick={() => updateFormData('surface', '100to150')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.surface === '100to150' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <ChartBarIcon className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-medium text-center">100 à 150m²</span>
              </button>

              <button
                onClick={() => updateFormData('surface', 'more150')}
                className={'flex flex-col items-center p-6 rounded-xl border-2 ' + 
                  (formData.surface === 'more150' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-500') + 
                  ' transition-all duration-300 hover:shadow-lg'}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <ChartBarIcon className="w-8 h-8 text-green-600 transform scale-y-150" />
                </div>
                <span className="font-medium text-center">Plus de 150m²</span>
              </button>
            </div>
            <BackButton />
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6 transform transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-bold text-center mb-6">Vos coordonnées</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                } text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <ArrowRightIcon className="w-5 h-5" />
                    <span>Obtenir mon estimation</span>
                  </>
                )}
              </button>
              {submitError && (
                <p className="text-red-500 text-sm text-center mt-2">{submitError}</p>
              )}
            </form>
            <BackButton />
          </div>
        );
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-[#116290] text-center mb-8">
        Calculer mes économies et aides 2025
      </h2>
      
      <div className="flex justify-between items-center mb-8">
        {['status', 'housing', 'heating', 'bill', 'surface', 'contact'].map((step, index) => (
          <div
            key={step}
            className={'flex items-center ' + (index !== 0 ? 'flex-1' : '')}
          >
            <div
              className={'w-8 h-8 rounded-full flex items-center justify-center ' + 
                (currentStep === step
                  ? 'bg-green-500 text-white'
                  : index < steps.indexOf(currentStep)
                  ? 'bg-green-100 text-green-600'
                  : 'bg-gray-100 text-gray-400')}
            >
              {index + 1}
            </div>
            {index !== 5 && (
              <div
                className={'flex-1 h-1 ' + 
                  (index < steps.indexOf(currentStep)
                    ? 'bg-green-500'
                    : 'bg-gray-200')}
              />
            )}
          </div>
        ))}
      </div>

      {renderStep()}

      {/* Badges et certifications */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Note Google */}
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
            <Image
              src="/images/google.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-sm font-medium">4.9/5</span>
              <span className="ml-2 text-xs text-gray-500">(78 avis)</span>
            </div>
          </div>

          {/* RGE */}
          <div className="flex items-center">
            <Image
              src="/images/rge1.png"
              alt="Certification RGE"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>

          {/* QualiPV */}
          <div className="flex items-center">
            <Image
              src="/images/logo-QualiPV-2024-RGE.png"
              alt="Certification QualiPV"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Dualsun */}
          <div className="flex items-center">
            <Image
              src="/images/dualsun-logo.svg"
              alt="Partenaire Dualsun"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
