'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, UserIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { engagementEvents, navigationEvents } from '@/utils/analytics';
import ContactForm from '../forms/ContactForm';
import QuickLeadForm from '../forms/QuickLeadForm';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

// Hook personnalisé pour détecter le défilement
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // Set initial position

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

// Composant Modal de Contact amélioré
const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
                  <ContactForm />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const HeroSection = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      setHeroHeight(hero.offsetHeight);
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Effet de lumière dynamique */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-FFDF64 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#146390] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Grille de fond */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#146390_1px,transparent_1px),linear-gradient(to_bottom,#146390_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] opacity-[0.03]"
      ></div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#146390]">
                Divisez par 2 votre facture d'électricité
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Réduisez votre facture d'électricité jusqu'à 70%
              </p>
            </motion.div>

            {/* Points clés */}
            <div className="max-w-md transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-FFDF64 to-amber-500"></div>
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="relative w-32 h-32">
                      <Image
                        src="/images/panneaux-solaire.jpg"
                        alt="Installation panneaux solaires"
                        width={150}
                        height={150}
                        className="rounded-lg object-cover w-full h-full shadow-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#146390] mb-2">Installation complète</p>
                      <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-3 border border-gray-100">
                        <p className="text-2xl font-bold text-[#146390] mb-1">À partir de 7890€</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/simulateur"
                className="group relative px-8 py-4 bg-[#146390] text-white font-semibold rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#146390] to-[#1a7ab5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Simuler mes économies
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Prix et avantages */}
            <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-FFDF64 to-amber-500"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-[#146390]">Nos engagements qualité</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#146390]">✓</span>
                    <p className="text-gray-600">Installation 100% réalisée par nos équipes certifiées RGE - Zéro sous-traitance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#146390]">✓</span>
                    <p className="text-gray-600">Panneaux solaires Made in France avec garantie 25 ans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#146390]">✓</span>
                    <p className="text-gray-600">Nous gérons toutes vos démarches administratives de A à Z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire rapide */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-FFDF64 to-amber-500 rounded-2xl blur-lg opacity-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-FFDF64 to-amber-500"></div>
              <div className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-[#146390]">Recevez votre</span>{' '}
                    <span className="text-FFDF64">étude d'économies gratuite</span>
                  </h3>
                  <p className="text-gray-600">Profitez des aides de l'État jusqu'à 3 600€</p>
                </div>
                <QuickLeadForm />
                {/* Logos de certification */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6">
                    <Image
                      src="/images/rge1.png"
                      alt="Certification RGE"
                      width={85}
                      height={40}
                      className="h-12 w-auto object-contain"
                    />
                    <Image
                      src="/images/qualipv1.png"
                      alt="Certification QualiPV"
                      width={85}
                      height={40}
                      className="h-12 w-auto object-contain"
                    />
                    <Image
                      src="/images/garantie-decennale-p2a-construction.webp"
                      alt="Garantie Décennale"
                      width={85}
                      height={40}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de contact */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;