'use client';

import React, { useState, useEffect, Fragment, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CurrencyEuroIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import QuickSimulateur from '../simulators/QuickSimulateur';

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
                <source src="/videos/hero.mp4" type="video/mp4" />
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
                  <source src="/videos/hero.mp4" type="video/mp4" />
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
      
      {/* Section des packs */}
      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="w-full space-y-8">
          {/* Présentation des packs */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Nos Solutions Photovoltaïques 2025 🌟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pack 3kWc */}
              <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-100 hover:border-green-500 transition-all duration-300">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Pack 3 kWc</h4>
                  <p className="text-sm text-gray-600">Maison 60m² - 100m²</p>
                  <p className="text-xs text-gray-500 mt-1">6 Panneaux de 500W</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">-40% sur votre facture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">≈ 500€ d'économies/an</span>
                  </div>
                </div>
              </div>

              {/* Pack 6kWc */}
              <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6 shadow-xl border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">Le plus choisi</span>
                </div>
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Pack 6 kWc</h4>
                  <p className="text-sm text-gray-600">Maison 100m² - 150m²</p>
                  <p className="text-xs text-gray-500 mt-1">12 Panneaux de 500W</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">-60% sur votre facture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">≈ 1000€ d'économies/an</span>
                  </div>
                </div>
              </div>

              {/* Pack 9kWc */}
              <div className="bg-white/90 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-100 hover:border-green-500 transition-all duration-300">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Pack 9 kWc</h4>
                  <p className="text-sm text-gray-600">Maison 150m² et plus</p>
                  <p className="text-xs text-gray-500 mt-1">18 Panneaux de 500W</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">-70% sur votre facture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">≈ 1500€ d'économies/an</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-[#d7f0fc]">
                <div className="flex items-center gap-2 mb-2">
                  <FranceFlagIcon />
                  <h3 className="font-semibold text-[#116290]">Made in France</h3>
                </div>
                <p className="text-sm text-gray-600">Panneaux photovoltaïques fabriqués en France</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-[#d7f0fc]">
                <div className="flex items-center gap-2 mb-2">
                  <MapPinIcon className="h-8 w-8 text-[#116290]" />
                  <h3 className="font-semibold text-[#116290]">100% Local</h3>
                </div>
                <p className="text-sm text-gray-600">Entreprise PACA, 0 sous-traitance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;