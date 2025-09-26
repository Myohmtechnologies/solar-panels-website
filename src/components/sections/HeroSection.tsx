'use client';

import React, { useState, useEffect, Fragment, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

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

  const brandLogos = [
    { name: 'Tesla', src: '/images/marques/Tesla_Motors.svg.png', width: 120, height: 40 },
    { name: 'Renault', src: '/images/marques/Renault_2021_Text.svg', width: 140, height: 40 },
    { name: 'Peugeot', src: '/images/marques/Peugeot_2021_Logo.svg.png', width: 140, height: 40 },
    { name: 'Audi', src: '/images/marques/Audi_logo.svg', width: 120, height: 40 },
    { name: 'BMW', src: '/images/marques/BMW.svg.png', width: 120, height: 120 },
    { name: 'Toyota', src: '/images/marques/Toyota_logo_(Red).svg', width: 140, height: 40 },
    { name: 'Fiat', src: '/images/marques/Fiat_(logo).svg.png', width: 120, height: 120 },
  ];
  const marqueeLogos = [...brandLogos, ...brandLogos];

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
      <div className="absolute inset-0 bg-white z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col items-center justify-center h-full py-16 space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-5xl"
          >
            <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#116290] text-white font-medium text-sm shadow-md">
              Électriciens IRVE certifiés • Intervention en PACA
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#062b52] drop-shadow-md tracking-tight">
              Bornes de recharge et installations électriques clés en main
            </h1>

            <div className="flex items-center justify-center gap-3 text-sm md:text-base">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffe066] to-[#ffbf1f] px-5 py-2 font-semibold text-[#5b3b00] shadow-md">
                <span className="text-lg">⚡</span>
                Prime Advenir&nbsp;: 500 € offerts pour votre borne
              </span>
            </div>

            <p className="text-xl md:text-2xl text-gray-900 font-semibold leading-relaxed">
              MY OHM Technologies installe vos bornes IRVE, réalise vos travaux d’électricité générale et propose des solutions solaires complémentaires pour optimiser votre consommation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-4 mt-8 px-8 py-4 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white font-semibold rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <span className="absolute -top-4 -right-6 rotate-6 rounded-full bg-[#c60f0f] px-4 py-1 text-xs md:text-sm font-bold text-white shadow-lg">
                500 € remboursés
              </span>
              Installer ma borne de recharge
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 w-full text-center">
          <p className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-[0.3em] mb-4">
            Compatibles avec toutes les marques de véhicules électriques
          </p>
        </div>

        <div className="mt-4 w-full overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex items-center gap-10 min-w-max"
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-16 w-32 items-center justify-center rounded-xl bg-white/80 backdrop-blur border border-white/40 shadow-sm"
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-10"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;