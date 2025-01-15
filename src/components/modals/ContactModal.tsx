'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ContactForm from '../forms/ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  cityName?: string;
}

export default function ContactModal({ isOpen, onClose, cityName }: ContactModalProps) {
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
          <div className="fixed inset-0 bg-black bg-opacity-50" />
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
                  <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-black">
                    Contactez un Expert
                    {cityName && <span className="block text-lg font-normal text-gray-600 mt-1">à {cityName}</span>}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <span className="sr-only">Fermer</span>
                    ✕
                  </button>
                </div>

                <div className="mt-4">
                  <ContactForm cityName={cityName} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
