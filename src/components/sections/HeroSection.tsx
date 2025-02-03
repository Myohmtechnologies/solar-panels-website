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

// Ajout d'un élément de preuve sociale dynamique
const SocialProofBadge = () => (
  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg">
    <svg className="w-6 h-6 text-FFDF64" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span className="text-white font-semibold text-sm">+500 Installations</span>
  </div>
);

const HeroSection = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [heroHeight, setHeroHeight] = useState(0);

  // Référence pour mesurer la hauteur de la section héro
  const heroRef = (el: HTMLDivElement | null) => {
    if (el) {
      setHeroHeight(el.offsetHeight);
    }
  };

  const handleExpertContact = () => {
    // Événement de clic sur le bouton de contact expert
    window.gtag('event', 'cta_click', {
      'event_category': 'Hero Section',
      'event_label': 'Contact Expert',
      'page_path': window.location.pathname
    });

    // Événement personnalisé
    engagementEvents.ctaClick('contact_expert', 'hero_section');

    // Événement de conversion potentielle
    engagementEvents.conversionIntent('expert_contact_modal_open');

    setIsModalOpen(true);
  };

  const handleSimulatorClick = () => {
    // Événement de clic sur le bouton simulateur
    window.gtag('event', 'cta_click', {
      'event_category': 'Hero Section',
      'event_label': 'Simulateur Économies',
      'page_path': window.location.pathname
    });

    // Événement personnalisé
    engagementEvents.ctaClick('simulator', 'hero_section');

    // Événement de navigation
    navigationEvents.pageView('/simulator');

    // Événement de conversion potentielle
    engagementEvents.conversionIntent('simulator_access');
  };

  return (
    <>
      {/* Bandeau CTA mobile qui s'affiche après avoir dépassé la section héro */}
      {scrollPosition > heroHeight && (
        <div
          className="fixed top-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-sm shadow-sm"
          onMouseEnter={() => {
            // Événement de visibilité du bandeau mobile
            window.gtag('event', 'mobile_cta_banner', {
              'event_category': 'Hero Section',
              'event_label': 'Banner Visibility',
              'scroll_position': scrollPosition
            });
          }}
        >
          <div className="grid grid-cols-2 gap-2 p-2 container mx-auto">
            <button
              onClick={handleExpertContact}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-black transition-all duration-200 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-lg"
            >
              <UserIcon className="w-4 h-4" />
              Contacter
            </button>

            <Link
              href="/simulator"
              onClick={handleSimulatorClick}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 bg-black rounded-lg"
            >
              <ChartBarIcon className="w-4 h-4" />
              Simuler
            </Link>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="relative min-h-screen flex flex-col lg:flex-row lg:items-center">
        {/* Vidéo de fond */}
        <div className="relative h-[33vh] lg:h-auto lg:absolute lg:inset-0 -z-10">
          <video
            src="https://res.cloudinary.com/dz5sry4jz/video/upload/q_auto:eco,f_auto,c_scale,w_1280/societe-installation-de-panneaux-solaires"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay sur la vidéo */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Titre sur la vidéo - visible uniquement sur mobile */}
          <div className="absolute inset-0 flex items-center justify-center p-3 lg:hidden">
            <h1 className="text-xl md:text-4xl font-bold text-white text-center">
              Économisez jusqu&apos;à -70%
              <span className="block text-base md:text-2xl mt-1">
                sur vos factures d&apos;électricité
              </span>
            </h1>
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 w-full bg-gray-100 lg:bg-transparent">
          <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto">
              {/* Formulaire */}
              <div className="w-full lg:w-[500px] xl:w-[550px] lg:order-1">
                <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl">
                  <div className="text-center mb-6">
                    <p className="text-green-600 font-semibold text-xl mb-3">
                      Bénéficiez des aides de l&apos;État 2025
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Étude gratuite et sans engagement
                    </h2>
                  </div>
                  
                  <QuickLeadForm />

                  {/* Badges */}
                  <div className="flex justify-center items-center gap-6 mt-6">
                    <Image
                      src="/images/rge1.png"
                      alt="Certification RGE"
                      width={85}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                    <Image
                      src="/images/qualipv1.png"
                      alt="Certification QualiPV"
                      width={95}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/google.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-lg font-medium text-gray-700">4,9/5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Titre desktop */}
              <div className="hidden lg:block lg:w-[500px] xl:w-[600px] lg:order-2">
                <h1 className="text-6xl font-bold text-white">
                  Économisez<br />
                  jusqu&apos;à <span className="text-green-400">70%</span><br />
                  <span className="text-4xl mt-4 block">
                    sur vos factures d&apos;électricité
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;