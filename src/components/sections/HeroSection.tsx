'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {

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
      if (document.head && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] pt-24 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden flex flex-col justify-center items-center">
      {/* Overlay pattern pour texture subtile comme l'ancien */}
      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"></div>

      <div className="w-full relative z-10 flex flex-col items-center">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-7xl mb-14 md:mb-20 px-4"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#116290] tracking-wide leading-tight lg:whitespace-nowrap">
            L'énergie de demain, installée chez vous dès aujourd'hui. ☀️
          </h1>
        </motion.div>

        {/* Grille de cartes 2x2 (Bento Grid) - Pleine Largeur avec grands espaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-transparent w-full p-4 md:p-8">
          {/* Cadran 1 : Panneaux Solaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative h-[450px] md:h-[680px] overflow-hidden flex flex-col justify-end p-10 md:p-16 bg-black rounded-2xl md:rounded-3xl shadow-lg"
          >
            {/* Image de fond */}
            <Image
              src="/images/paneaux-solaire.jpg"
              alt="Installation de panneaux solaires"
              fill
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Overlay gradient progressif */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

            {/* Contenu textuel */}
            <div className="relative z-20 flex flex-col items-center text-center">
              <span className="text-base md:text-xl font-extrabold text-[#ffb700] uppercase tracking-widest mb-3">
                À partir de 5 990€
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide">
                Panneaux Solaires
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 font-light leading-relaxed max-w-sm md:max-w-xl">
                Produisez votre propre électricité verte et réduisez vos factures grâce à nos installations photovoltaïques.
              </p>
              <Link
                href="/panneaux-solaire"
                className="inline-block bg-white text-black text-center py-4 px-10 rounded-full font-black hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl text-base md:text-lg mx-auto"
              >
                En Savoir Plus
              </Link>
            </div>
          </motion.div>

          {/* Cadran 2 : Borne de Recharge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative h-[450px] md:h-[680px] overflow-hidden flex flex-col justify-end p-10 md:p-16 bg-gray-900 rounded-2xl md:rounded-3xl shadow-lg"
          >
            {/* Image de fond */}
            <Image
              src="/images/left.png"
              alt="Borne de recharge pour véhicule électrique"
              fill
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Overlay gradient progressif */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

            {/* Contenu textuel */}
            <div className="relative z-20 flex flex-col items-center text-center">
              <span className="text-base md:text-xl font-extrabold text-[#ffb700] uppercase tracking-widest mb-3">
                À partir de 1 390€
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide">
                Borne de Recharge
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 font-light leading-relaxed max-w-sm md:max-w-xl">
                Installez une borne de recharge rapide et sécurisée à domicile, compatible avec tous les véhicules.
              </p>
              <Link
                href="/borne-de-recharge"
                className="inline-block bg-white text-black text-center py-4 px-10 rounded-full font-black hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl text-base md:text-lg mx-auto"
              >
                En Savoir Plus
              </Link>
            </div>
          </motion.div>

          {/* Cadran 3 : Climatisation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative h-[450px] md:h-[680px] overflow-hidden flex flex-col justify-end p-10 md:p-16 bg-gray-900 rounded-2xl md:rounded-3xl shadow-lg"
          >
            {/* Image de fond */}
            <Image
              src="/images/clim.jpeg"
              alt="Climatisation réversible installée dans un salon"
              fill
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Overlay gradient progressif */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />

            {/* Contenu textuel */}
            <div className="relative z-20 flex flex-col items-center text-center">
              <span className="text-base md:text-xl font-extrabold text-[#ffb700] uppercase tracking-widest mb-3">
                À partir de 1 190€
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide">
                Climatisation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 font-light leading-relaxed max-w-sm md:max-w-xl">
                Chauffage et climatisation réversible deux-en-un pour un confort thermique optimal en toute saison.
              </p>
              <Link
                href="/climatisation"
                className="inline-block bg-white text-black text-center py-4 px-10 rounded-full font-black hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl text-base md:text-lg mx-auto"
              >
                En Savoir Plus
              </Link>
            </div>
          </motion.div>

          {/* Cadran 4 : Électricité Générale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative h-[450px] md:h-[680px] overflow-hidden flex flex-col justify-end p-10 md:p-16 bg-gray-900 rounded-2xl md:rounded-3xl shadow-lg"
          >
            {/* Image de fond */}
            <Image
              src="/images/elec.jpg"
              alt="Installation électrique par MyOhm Technologies"
              fill
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Overlay gradient progressif */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />

            {/* Contenu textuel */}
            <div className="relative z-20 flex flex-col items-center text-center">
              <span className="text-base md:text-xl font-extrabold text-[#ffb700] uppercase tracking-widest mb-3">
                Installation & Mise en conformité
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide">
                Électricité Générale
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 font-light leading-relaxed max-w-sm md:max-w-xl">
                Rénovation complète, mise aux normes de tableaux électriques NF C 15-100 et dépannage.
              </p>
              <Link
                href="/electricite-generale"
                className="inline-block bg-white text-black text-center py-4 px-10 rounded-full font-black hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl text-base md:text-lg mx-auto"
              >
                En Savoir Plus
              </Link>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;