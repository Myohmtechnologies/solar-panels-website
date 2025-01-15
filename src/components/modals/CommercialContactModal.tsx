'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { phoneEvents, engagementEvents, conversionEvents } from '@/utils/analytics';

interface CommercialContactModalProps {
  isOpen: boolean;
  closeModal: () => void;
  cityName?: string;
}

export default function CommercialContactModal({ isOpen, closeModal, cityName = 'votre ville' }: CommercialContactModalProps) {
  const handlePhoneClick = () => {
    phoneEvents.phoneClick('commercial_modal');
    engagementEvents.ctaClick('phone_call', 'commercial_modal');
    conversionEvents.expertContactConversion('phone_click', 'commercial_modal');
  };

  const handleEmailClick = () => {
    engagementEvents.ctaClick('email', 'commercial_modal');
    conversionEvents.expertContactConversion('form_submit', 'commercial_modal');
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
                    Votre expert solaire à {cityName}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-FFDF64">
                    <Image
                      src="/images/team/rudy.jpg"
                      alt="Rudy - Expert en solutions solaires"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Rudy</h4>
                  <p className="text-gray-600">technico-Commercial</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+33647760725"
                    onClick={handlePhoneClick}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    06 47 76 07 25
                  </a>

                  <a
                    href="mailto:rudy@myohmtechnologies.com"
                    onClick={handleEmailClick}
                    className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    rudy@myohmtechnologies.com
                  </a>
                </div>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Disponible du lundi au vendredi de 9h à 19h
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
