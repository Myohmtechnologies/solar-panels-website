'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

export default function GuideModal({ isOpen, onClose }: GuideModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/download-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue');
      }

      // Télécharger le PDF
      window.open(result.pdfUrl, '_blank');
      setIsSuccess(true);
      reset();
      
      // Fermer la modal après 2 secondes
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
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
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-black"
                >
                  Téléchargez votre guide gratuit
                </Dialog.Title>
                
                {isSuccess ? (
                  <div className="mt-4">
                    <div className="rounded-md bg-AFC97E/10 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-AFC97E" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-AFC97E">
                            Votre guide a été envoyé avec succès !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-black">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        {...register('fullName', { required: 'Ce champ est requis' })}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E sm:text-sm text-black placeholder-black/60 ${
                          errors.fullName ? 'border-red-500' : ''
                        }`}
                        placeholder="Votre nom complet"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Ce champ est requis',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Adresse email invalide',
                          },
                        })}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E sm:text-sm text-black placeholder-black/60 ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        {...register('phone', {
                          required: 'Ce champ est requis',
                          pattern: {
                            value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
                            message: 'Numéro de téléphone invalide',
                          },
                        })}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E sm:text-sm text-black placeholder-black/60 ${
                          errors.phone ? 'border-red-500' : ''
                        }`}
                        placeholder="06 12 34 56 78"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    {error && (
                      <div className="rounded-md bg-red-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414-1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-red-800">{error}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${
                          isLoading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-AFC97E hover:bg-AFC97E/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-AFC97E'
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </>
                        ) : (
                          'Télécharger le guide'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
