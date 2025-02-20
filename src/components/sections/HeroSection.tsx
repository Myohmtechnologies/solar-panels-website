'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { SunIcon, BoltIcon, CurrencyEuroIcon, StarIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, UserIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { engagementEvents, navigationEvents } from '@/utils/analytics';
import { Fragment } from 'react';

// Chargement dynamique des composants non-critiques
const ContactForm = dynamic(() => import('../forms/ContactForm'), { ssr: false });
const QuickLeadForm = dynamic(() => import('../forms/QuickLeadForm'), { ssr: false });
const Dialog = dynamic(() => import('@headlessui/react').then(mod => mod.Dialog), { ssr: false });
const Transition = dynamic(() => import('@headlessui/react').then(mod => mod.Transition), { ssr: false });

// Préchargement du contenu critique
const preloadContent = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = '/styles/critical.css';
  document.head.appendChild(link);
};

// Hook personnalisé pour détecter le défilement
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

// Composant Modal de Contact amélioré
const ContactModal = dynamic(() => Promise.resolve(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
            <ContactForm onClose={onClose} />
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}), { ssr: false });

const HeroSection = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    preloadContent();
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      setHeroHeight(hero.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11362141606';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'AW-11362141606');

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-b from-[#d7f0fc] to-white">
      {/* Cadrage blanc principal */}
      <div className="absolute inset-0 border-[12px] border-white/80 m-6 rounded-[2rem] pointer-events-none"></div>
      
      {/* Motif de panneaux solaires */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-12 pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="relative">
            <div className="absolute inset-0 border-[3px] border-white/40 rounded-lg"></div>
            <div className="absolute inset-[15%] border-[2px] border-white/30 rounded-md"></div>
            <div className="absolute inset-[30%] border-[1px] border-white/20 rounded-sm"></div>
          </div>
        ))}
      </div>

      {/* Cercles décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#116290] rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center py-12">
          {/* Contenu gauche */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#116290] text-white font-medium text-sm">
                Installation de panneaux solaires en PACA
              </span>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                Réduisez votre facture d'électricité{' '}
                <span className="text-[#116290]">jusqu'à 70%</span>
              </h1>

              {/* Mise en avant du prix */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative mt-6 p-6 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] backdrop-blur-lg opacity-90"></div>
                <div className="relative flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl">
                    <CurrencyEuroIcon className="h-8 w-8 text-[#116290]" />
                  </div>
                  <div>
                    <p className="text-[#116290] font-medium">Installation complète à partir de</p>
                    <p className="text-3xl font-bold text-[#116290]">7 890€</p>
                    <p className="text-sm text-[#116290]/80">Éligible aux aides de l'État jusq à 1 440€</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-[#d7f0fc]">
                <SunIcon className="h-8 w-8 text-[#ffb700] mb-2" />
                <h3 className="font-semibold text-[#116290]">Production optimisée</h3>
                <p className="text-sm text-gray-600">Panneaux haute performance Made in France</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-[#d7f0fc]">
                <BoltIcon className="h-8 w-8 text-[#116290] mb-2" />
                <h3 className="font-semibold text-[#116290]">Autoconsommation</h3>
                <p className="text-sm text-gray-600">Stockage et gestion intelligente</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/simulator"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-[#116290] font-medium hover:shadow-lg hover:shadow-[#ffb700]/20 transition-all duration-200"
              >
                Calculer mes économies
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:0492766858"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#116290] text-[#116290] font-medium hover:bg-[#116290] hover:text-white transition-colors duration-200"
              >
                04 92 76 68 58
                <PhoneIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Formulaire droite */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-2xl blur-2xl opacity-10"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d7f0fc]">
              <div className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#116290]">
                    Demandez votre étude gratuite
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Un expert vous rappelle sous 24h
                  </p>
                </div>
                <QuickLeadForm />

                {/* Google Rating */}
                <div className="flex items-center justify-center gap-2 mt-6 mb-4">
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-yellow-400/90'}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-gray-700">4,9/5</span>
                  <span className="text-sm text-gray-500">(108 avis)</span>
                </div>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-6 pt-6 mt-2 border-t border-[#d7f0fc]">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/rge1.png"
                      alt="Certification RGE"
                      width={60}
                      height={40}
                      className="h-10 w-auto"
                    />
                    
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/qualipv1.png"
                      alt="Certification RGE"
                      width={60}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;