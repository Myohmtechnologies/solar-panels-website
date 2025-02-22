'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CurrencyEuroIcon, SunIcon, BoltIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

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
      '/images/qualipv1.png'
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
    <section className="relative min-h-[85vh]">
      {/* Fond simplifié */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d7f0fc] to-white"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center py-12">
          {/* Contenu gauche - Chargé immédiatement */}
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
            </div>
          </div>

          {/* Formulaire droite - Chargé en différé */}
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
                <div className="relative">
                  <QuickLeadForm />
                </div>

                {/* Google Rating */}
                <div className="flex items-center justify-center gap-2 mt-6 mb-4">
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                    priority={true}
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
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/qualipv1.png"
                      alt="Certification RGE"
                      width={60}
                      height={40}
                      className="h-10 w-auto"
                      loading="lazy"
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