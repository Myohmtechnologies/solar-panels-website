'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface CommercialModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function CommercialModal({ isOpen, closeModal }: CommercialModalProps) {
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  Votre Commercial Dédié
                </Dialog.Title>

                <div className="mt-4 flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/images/team/rudy.jpg"
                      alt="Commercial MyOhm Technologies"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-1">Rudy</h4>
                  <p className="text-gray-600 mb-4">Technico-Commercial</p>

                  <a
                    href="tel:0647760725"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity w-full"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>06 47 76 07 25</span>
                  </a>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="text-sm text-gray-600 hover:text-gray-900"
                    onClick={closeModal}
                  >
                    Fermer
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
