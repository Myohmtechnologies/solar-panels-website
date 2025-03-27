'use client';

import React, { useState, useEffect, Fragment, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CurrencyEuroIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import QuickSimulateur from '../simulateurs/QuickSimulateur';

// Imports dynamiques avec priorité
const QuickLeadForm = dynamic(() => import('../forms/QuickLeadForm'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-100 h-[300px] rounded-lg" />
});

const Dialog = dynamic(() => import('@headlessui/react').then(mod => mod.Dialog), { ssr: false });
const Transition = dynamic(() => import('@headlessui/react').then(mod => mod.Transition), { ssr: false });

import { engagementEvents, navigationEvents } from '@/utils/analytics';

// Préchargement des images critiques
const preloadImages = () => {
  if (typeof window !== 'undefined') {
    const images = [
      '/images/google.png',
      '/images/rge1.png',
      '/images/qualipv1.png',
      '/images/france-flag.png'
    ];
    
    images.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }
};

// Hook personnalisé pour la position de défilement
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [heroHeight, setHeroHeight] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Préchargement des ressources critiques
    preloadImages();
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      setHeroHeight(hero.offsetHeight);
    }
  }, []);

  useEffect(() => {
    // Lecture automatique de la vidéo lorsque le composant est monté
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log('Lecture automatique empêchée:', e);
        // Fallback pour les navigateurs qui bloquent l'autoplay
      });
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

  const FranceFlagIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="28" height="16" rx="2" fill="white"/>
      <rect x="2" y="8" width="9.33333" height="16" fill="#002395"/>
      <rect x="20.6667" y="8" width="9.33333" height="16" fill="#ED2939"/>
    </svg>
  );

  const onRequestQuote = () => {
    // Code pour la demande de devis
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:mt-0 -mt-[var(--header-mobile-height)] overflow-hidden">
      {/* Overlay pattern pour texture subtile */}
      <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col lg:flex-row h-full items-center py-12">
          {/* Côté gauche avec vidéo - Visible uniquement sur desktop */}
          <div className="w-full lg:w-1/2 h-full relative hidden lg:block">
            <div className="relative w-full h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#116290]/30 to-transparent z-10"></div>
              <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/images/my-ohm-technologies-entreprise-d'installation-de-panneaux-solaires.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
          </div>
          
          {/* Côté droit avec contenu */}
          <div className="w-full lg:w-1/2 lg:pl-12 space-y-8 z-20">
            {/* En-tête avec titre */}
            <div className="pt-16 md:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-[#116290] text-white font-medium text-sm shadow-md">
                  Installation de panneaux solaires en PACA
                </span>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                  <span className="text-[#116290]">Divisez par 2 </span>
                  votre facture d'électricité
                </h1>
                
                {/* Bandeau d'urgence */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md my-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700 font-medium">
                        ALERTE : Les prix de l'électricité ont augmenté de 43% depuis 2021 et continueront d'augmenter !
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Offre limitée */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 my-4 animate-pulse">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Offre spéciale printemps 2025</h3>
                      <div className="mt-1 text-sm text-yellow-700">
                        <p>Jusqu'au 30 avril : Remise exceptionnelle de 15% sur votre installation + monitoring gratuit pendant 2 ans</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 max-w-xl">
                  Produisez votre propre énergie verte et réduisez durablement vos factures avec nos solutions photovoltaïques sur-mesure.
                </p>
              </motion.div>
            </div>

            {/* Vidéo pour mobile uniquement - entre le titre et le simulateur */}
            <div className="w-full lg:hidden">
              <div className="relative w-full h-[30vh] overflow-hidden rounded-xl shadow-lg">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/images/my-ohm-technologies-entreprise-d'installation-de-panneaux-solaires.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
              </div>
            </div>

            {/* Simulateur */}
            <div className="w-full transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-2 border border-gray-100">
            <QuickSimulateur />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;