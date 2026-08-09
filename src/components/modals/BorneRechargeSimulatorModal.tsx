'use client';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { 
  XMarkIcon, 
  HomeIcon, 
  BuildingOfficeIcon, 
  BuildingOffice2Icon,
  CheckCircleIcon,
  ChevronLeftIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { submitLead } from '@/services/leadService';

interface BorneRechargeSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

export default function BorneRechargeSimulatorModal({ isOpen, onClose }: BorneRechargeSimulatorModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  
  // Form State
  const [zipCode, setZipCode] = useState('');
  const [housingType, setHousingType] = useState<'maison' | 'entreprise' | 'copropriete' | ''>('');
  const [distance, setDistance] = useState<'proche' | 'eloigne' | ''>('');
  const [vehicleStatus, setVehicleStatus] = useState<'oui' | 'commande' | 'projet' | ''>('');
  
  // Contact State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Validation for Step 1
  const isZipCodeValid = zipCode.trim().length >= 3;
  const isPacaRegion = /^(04|05|06|13|83|84)\d{3}$/.test(zipCode.trim()) || (zipCode.trim().length >= 3 && (zipCode.startsWith('04') || zipCode.startsWith('05') || zipCode.startsWith('06') || zipCode.startsWith('13') || zipCode.startsWith('83') || zipCode.startsWith('84')));

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setZipCode('');
        setHousingType('');
        setDistance('');
        setVehicleStatus('');
        setFullName('');
        setEmail('');
        setPhone('');
        setError(null);
        setIsSubmitted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const nextStep = () => {
    if (step < 5) setStep((prev) => (prev + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const handleSelectHousing = (type: 'maison' | 'entreprise' | 'copropriete') => {
    setHousingType(type);
    setTimeout(nextStep, 250); // Small delay for visual feedback
  };

  const handleSelectDistance = (dist: 'proche' | 'eloigne') => {
    setDistance(dist);
    setTimeout(nextStep, 250);
  };

  const handleSelectVehicle = (status: 'oui' | 'commande' | 'projet') => {
    setVehicleStatus(status);
    setTimeout(nextStep, 250);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Veuillez remplir tous les champs de contact obligatoires.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const housingLabels = {
      maison: "Maison individuelle",
      entreprise: "Entreprise / Parking Pro",
      copropriete: "Immeuble / Copropriété"
    };

    const distanceLabels = {
      proche: "Proche (< 15 mètres)",
      eloigne: "Éloignée (> 15 mètres)"
    };

    const vehicleLabels = {
      oui: "Déjà en possession",
      commande: "Commandé, en attente de livraison",
      projet: "En projet d'achat"
    };

    const notes = `Simulateur Borne de Recharge :
- Code Postal/Ville : ${zipCode}
- Type de logement : ${housingType ? housingLabels[housingType] : 'Non spécifié'}
- Distance tableau : ${distance ? distanceLabels[distance] : 'Non spécifié'}
- Véhicule électrique : ${vehicleStatus ? vehicleLabels[vehicleStatus] : 'Non spécifié'}`;

    try {
      const result = await submitLead({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        postalCode: zipCode.trim(),
        source: 'simulator',
        notes: notes,
        createdAt: new Date().toISOString(),
      });

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          router.push('/merci');
        }, 1000);
      } else {
        setError(result.error || "Une erreur s'est produite lors de l'enregistrement de votre projet.");
      }
    } catch (err) {
      console.error('Error in simulator submit:', err);
      setError("Impossible d'envoyer votre demande. Veuillez vérifier votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-[2.5rem] bg-white p-8 text-left align-middle shadow-2xl transition-all border border-gray-100 flex flex-col justify-between min-h-[500px]">
                
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#ffb700] uppercase tracking-wider">Simulateur Projet</span>
                    <Dialog.Title as="h3" className="text-lg font-extrabold text-[#116290]">
                      Mon installation de borne de recharge
                    </Dialog.Title>
                  </div>
                  <button
                    type="button"
                    className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 h-2 rounded-full mb-8 relative overflow-hidden">
                  <div 
                    className="bg-[#116290] h-full rounded-full transition-all duration-300"
                    style={{ width: `${(step / 5) * 100}%` }}
                  />
                </div>

                {/* Step Contents */}
                <div className="flex-grow flex flex-col justify-center">
                  
                  {/* STEP 1: ZIP CODE */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                          Indiquez le code postal ou la ville du lieu de l'intervention
                        </h2>
                        <p className="text-sm text-gray-500">
                          Pour comprendre au mieux votre besoin et pouvoir vous recontacter rapidement, nous avons quelques petites questions. Pour commencer, dites-nous : où habitez-vous ?
                        </p>
                      </div>

                      <div className="space-y-4">
                        <label className="block text-sm font-bold text-gray-700">Votre code postal ou ville</label>
                        <input
                          type="text"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="Ex: 04100 ou Manosque"
                          className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:border-[#116290] text-gray-900 font-medium placeholder-gray-400 transition-colors bg-gray-50/50"
                        />

                        {isZipCodeValid && (
                          <div className={`p-4 rounded-xl border flex items-center space-x-3 text-sm ${
                            isPacaRegion 
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                              : 'bg-amber-50 border-amber-200 text-amber-800'
                          }`}>
                            <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                            <span>
                              {isPacaRegion 
                                ? "Bonne nouvelle ! Nos installateurs IRVE interviennent directement chez vous dans votre ville." 
                                : "Nous couvrons cette zone géographique. Vous pouvez continuer votre demande d'estimation."
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: HOUSING TYPE */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                          Votre projet d'installation de borne de recharge concerne :
                        </h2>
                        <p className="text-sm text-gray-500">Choisissez le type de bâtiment où sera installée la solution de recharge.</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'maison', label: 'Une maison individuelle', desc: 'Installation privative extérieure ou en garage fermé.', icon: HomeIcon },
                          { id: 'entreprise', label: 'Une entreprise / Parking professionnel', desc: 'Bornes pour salariés, clients ou flotte de véhicules.', icon: BuildingOfficeIcon },
                          { id: 'copropriete', label: 'Une copropriété / Immeuble résidentiel', desc: 'Solution collective ou raccordement sur compteur partagé.', icon: BuildingOffice2Icon },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectHousing(opt.id as any)}
                            className={`flex items-center text-left p-5 border rounded-2xl transition-all duration-200 hover:border-[#116290] hover:bg-gray-50 ${
                              housingType === opt.id 
                                ? 'border-[#116290] bg-[#116290]/5 ring-1 ring-[#116290]' 
                                : 'border-gray-200 bg-white'
                            }`}
                          >
                            <div className="p-3 bg-[#116290]/10 rounded-xl text-[#116290] mr-4">
                              <opt.icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm md:text-base">{opt.label}</h4>
                              <p className="text-xs text-gray-500">{opt.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 3: DISTANCE */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                          Où souhaitez-vous faire installer votre borne de recharge ?
                        </h2>
                        <p className="text-sm text-gray-500 font-medium">Estimez la distance de câble entre votre tableau électrique et la borne.</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'proche', label: 'À proximité de mon tableau électrique', desc: 'Distance courte de câble (moins de 15 mètres linéaires).' },
                          { id: 'eloigne', label: 'Ma borne sera éloignée de mon tableau', desc: 'Distance longue nécessitant des travaux supplémentaires (plus de 15 mètres).' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectDistance(opt.id as any)}
                            className={`flex flex-col text-left p-5 border rounded-2xl transition-all duration-200 hover:border-[#116290] hover:bg-gray-50 ${
                              distance === opt.id 
                                ? 'border-[#116290] bg-[#116290]/5 ring-1 ring-[#116290]' 
                                : 'border-gray-200 bg-white'
                            }`}
                          >
                            <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{opt.label}</h4>
                            <p className="text-xs text-gray-500">{opt.desc}</p>
                          </button>
                        ))}
                      </div>

                      <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-start space-x-3 text-xs text-gray-600">
                        <span className="text-base">💡</span>
                        <p>
                          <strong>Bon à savoir</strong> : Connaître la distance approximative nous permettra d'estimer au mieux votre projet.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: VEHICLE STATUS */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                          Possédez-vous déjà votre véhicule électrique ou hybride rechargeable ?
                        </h2>
                        <p className="text-sm text-gray-500">Cela nous aide à valider la compatibilité de recharge avec le constructeur de votre véhicule.</p>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { id: 'oui', label: 'Oui' },
                          { id: 'commande', label: 'Non, je l\'ai commandé et attends d\'être livré(e)' },
                          { id: 'projet', label: 'Non, il s\'agit d\'un projet' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectVehicle(opt.id as any)}
                            className={`text-left p-5 border rounded-2xl transition-all duration-200 hover:border-[#116290] hover:bg-gray-50 ${
                              vehicleStatus === opt.id 
                                ? 'border-[#116290] bg-[#116290]/5 ring-1 ring-[#116290]' 
                                : 'border-gray-200 bg-white'
                            }`}
                          >
                            <h4 className="font-bold text-gray-900 text-sm md:text-base">{opt.label}</h4>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 5: CONTACT INFORMATION */}
                  {step === 5 && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                          Vos coordonnées pour recevoir votre étude gratuite
                        </h2>
                        <p className="text-sm text-gray-500">
                          Remplissez ces informations pour que nos experts IRVE préparent votre estimation clés en main personnalisée.
                        </p>
                      </div>

                      {error && (
                        <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-sm font-medium">
                          {error}
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="relative">
                          <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="Nom et Prénom"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl outline-none focus:border-[#116290] text-gray-900 font-medium placeholder-gray-400 bg-gray-50/50"
                          />
                        </div>

                        <div className="relative">
                          <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            required
                            placeholder="Numéro de téléphone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl outline-none focus:border-[#116290] text-gray-900 font-medium placeholder-gray-400 bg-gray-50/50"
                          />
                        </div>

                        <div className="relative">
                          <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            required
                            placeholder="Adresse e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl outline-none focus:border-[#116290] text-gray-900 font-medium placeholder-gray-400 bg-gray-50/50"
                          />
                        </div>
                      </div>
                    </form>
                  )}

                </div>

                {/* Footer Navigation Buttons */}
                <div className="border-t border-gray-100 pt-6 mt-8 flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center text-sm font-bold text-gray-600 hover:text-gray-900 py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeftIcon className="h-4 w-4 mr-1.5 stroke-[2.5]" />
                      Retour
                    </button>
                  ) : (
                    <div />
                  )}

                  {step === 1 && (
                    <button
                      type="button"
                      disabled={!isZipCodeValid}
                      onClick={nextStep}
                      className="py-4 px-8 rounded-2xl font-bold bg-[#116290] text-white hover:bg-[#116290]/90 disabled:bg-gray-200 disabled:text-gray-400 transition-colors shadow-lg shadow-[#116290]/10 flex items-center justify-center min-w-[120px]"
                    >
                      Suivant
                    </button>
                  )}

                  {step > 1 && step < 5 && (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="py-4 px-8 rounded-2xl font-bold bg-[#116290] text-white hover:bg-[#116290]/90 transition-colors shadow-lg shadow-[#116290]/10 flex items-center justify-center min-w-[120px]"
                    >
                      Suivant
                    </button>
                  )}

                  {step === 5 && (
                    <button
                      type="button"
                      disabled={isSubmitting || isSubmitted}
                      onClick={handleSubmit}
                      className="py-4 px-8 rounded-2xl font-bold bg-[#ffb700] hover:bg-[#e6a500] text-gray-900 disabled:bg-gray-200 disabled:text-gray-400 transition-colors shadow-lg shadow-[#ffb700]/10 flex items-center justify-center min-w-[160px]"
                    >
                      {isSubmitting ? "Envoi en cours..." : isSubmitted ? "Enregistré !" : "Valider mon projet"}
                    </button>
                  )}
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
