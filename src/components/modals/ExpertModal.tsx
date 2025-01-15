'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import LeadForm from '../forms/LeadForm';

interface ExpertModalProps {
  isOpen: boolean;
  closeModal: () => void;
  cityName: string;
}

export default function ExpertModal({ isOpen, closeModal, cityName }: ExpertModalProps) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      closeModal();
      setSuccess(false);
    }, 2000);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title as="h3" className="text-lg font-medium text-gray-900">
                    Contacter un expert
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    Nos experts en installation solaire à {cityName} sont là pour répondre à toutes vos questions.
                    Laissez-nous vos coordonnées et nous vous recontacterons dans les plus brefs délais.
                  </p>
                </div>

                {success ? (
                  <div className="text-center py-4">
                    <p className="text-green-600 font-semibold">Votre demande a été envoyée avec succès !</p>
                  </div>
                ) : (
                  <>
                    <LeadForm
                      onSuccess={handleSuccess}
                      onError={handleError}
                      source="hero"
                      cityName={cityName}
                    />
                    {error && (
                      <p className="mt-2 text-red-500 text-sm">{error}</p>
                    )}
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
