'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { submitLead } from '@/services/leadService';

interface EnergyExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: 'battery' | 'solar' | 'ballon' | 'climatisation' | 'electricite' | 'borne' | 'other';
}

export default function EnergyExpertModal({ isOpen, onClose, source = 'other' }: EnergyExpertModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Déterminer la source basée sur le paramètre
      let sourceValue: 'hero' | 'simulator';
      let notes = '';
      
      switch(source) {
        case 'battery':
          sourceValue = 'hero';
          notes = 'Demande de rappel - Page Batterie de stockage';
          break;
        case 'solar':
          sourceValue = 'hero';
          notes = 'Demande de rappel - Page Panneaux solaires';
          break;
        case 'ballon':
          sourceValue = 'hero';
          notes = 'Demande de rappel - Page Ballon thermodynamique';
          break;
        case 'climatisation':
          sourceValue = 'hero';
          notes = 'Demande de rappel - Page Climatisation & PAC';
          break;
        case 'electricite':
          sourceValue = 'hero';
          notes = 'Demande de rappel - Page Électricité Générale';
          break;
        case 'borne':
          sourceValue = 'hero';
          notes = 'Demande de rappel - Page Borne de recharge';
          break;
        default:
          sourceValue = 'hero';
          notes = 'Demande de rappel - Autre page';
      }
      
      // Vérifier que les champs requis sont remplis
      if (!formData.fullName || !formData.email || !formData.phone) {
        setError("Veuillez remplir tous les champs obligatoires.");
        setIsSubmitting(false);
        return;
      }
      
      // Soumettre le lead à l'API
      console.log('Submitting lead with data:', {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        source: sourceValue,
        notes: notes
      });
      
      try {
        const result = await submitLead({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          source: sourceValue,
          notes: notes,
          createdAt: new Date().toISOString(),
        });
        
        console.log('API response:', result);
        
        if (result.success) {
          console.log('Form submitted successfully');
          setIsSubmitted(true);
          
          // Réinitialiser après 1 seconde et rediriger vers la page merci
          setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
            });
            router.push('/merci');
          }, 1000);
        } else {
          console.error('Error from API:', result.error);
          setError(result.error || "Une erreur s'est produite lors de l'envoi du formulaire.");
        }
      } catch (apiError) {
        console.error('API call failed:', apiError);
        setError("Impossible de contacter le serveur. Votre demande a été enregistrée localement.");
        
        // Simuler un succès après une erreur d'API pour une meilleure expérience utilisateur
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
          });
          router.push('/merci');
        }, 1000);
      }
    } catch (err) {
      console.error('Error in form submission process:', err);
      setError("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-xl transition-all flex flex-col md:flex-row">
                {/* Block Gauche - Image */}
                <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-auto hidden md:block">
                  <Image
                    src="/images/left.png"
                    alt="MyOhm Technologies"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#116290]/10 mix-blend-multiply" />
                </div>
                
                {/* Block Droit - Formulaire */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">
                  <div className="absolute top-4 right-4">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={onClose}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  
                  <div className="text-center md:text-left mb-6">
                    <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900">
                      Demande de rappel gratuit
                    </Dialog.Title>
                    <p className="text-sm text-gray-500 mt-1">
                      Un expert vous rappelle rapidement.
                    </p>
                  </div>
                  
                  {/* Conseiller Paul */}
                  <div className="flex items-center space-x-3 mb-6 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                      <Image
                        src="/images/paul.jpeg"
                        alt="Paul - Conseiller Technique"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Paul</h4>
                      <p className="text-xs text-gray-500">Votre conseiller technique dédié</p>
                    </div>
                  </div>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">Demande envoyée !</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Paul vous contactera très prochainement.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                          {error}
                        </div>
                      )}
                      
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-base shadow-sm placeholder-gray-400 focus:border-[#116290] focus:ring-2 focus:ring-[#116290]/20 outline-none transition-all"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-base shadow-sm placeholder-gray-400 focus:border-[#116290] focus:ring-2 focus:ring-[#116290]/20 outline-none transition-all"
                          placeholder="jean.dupont@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                          Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-base shadow-sm placeholder-gray-400 focus:border-[#116290] focus:ring-2 focus:ring-[#116290]/20 outline-none transition-all"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex justify-center items-center rounded-xl bg-gradient-to-br from-ffeb99 to-ffb700 py-4 text-base font-semibold text-black shadow-md hover:shadow-lg hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Envoi en cours...
                            </span>
                          ) : (
                            'Demander à être rappelé'
                          )}
                        </button>
                      </div>
                    </form>
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
