'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BoltIcon, ChevronDownIcon, HomeIcon, SunIcon, WrenchScrewdriverIcon, SparklesIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 'solaire', label: 'Panneaux solaires', mobileLabel: 'Solaire', eyebrow: 'Produisez votre énergie', title: 'Passez à l’énergie solaire en toute sérénité',
    description: 'Produisez votre propre électricité verte et réduisez vos factures grâce à une installation photovoltaïque pensée pour votre maison.',
    image: '/images/paneaux-solaire.jpg', alt: 'Panneaux solaires installés sur une maison', href: '/panneaux-solaire', cta: 'Découvrir le solaire', icon: SunIcon,
  },
  {
    id: 'recharge', label: 'Borne de recharge', mobileLabel: 'Borne', eyebrow: 'Rechargez chez vous', title: 'Votre borne de recharge, installée chez vous',
    description: 'Profitez d’une recharge pratique et sécurisée au quotidien, avec une borne adaptée à votre véhicule et à votre installation électrique.',
    image: '/images/left.png', alt: 'Borne de recharge pour véhicule électrique', href: '/borne-de-recharge', cta: 'Découvrir nos bornes', icon: BoltIcon,
  },
  {
    id: 'climatisation', label: 'Climatisation', mobileLabel: 'Clim', eyebrow: 'Du confort toute l’année', title: 'Un intérieur confortable, été comme hiver',
    description: 'Découvrez nos solutions de climatisation réversible et de pompe à chaleur, étudiées selon votre logement et vos besoins.',
    image: '/images/clim.jpeg', alt: 'Climatisation réversible installée dans un logement', href: '/climatisation', cta: 'Découvrir nos solutions', icon: SparklesIcon,
  },
  {
    id: 'electricite', label: 'Électricité générale', mobileLabel: 'Électricité', eyebrow: 'Des installations fiables', title: 'Sécurisez et modernisez votre installation électrique',
    description: 'Rénovation, mise en conformité et modernisation de tableau : des travaux réalisés avec soin pour accompagner votre logement.',
    image: '/images/elec.png', alt: 'Travaux d’électricité dans une habitation', href: '/electricite-generale', cta: 'Voir nos services', icon: WrenchScrewdriverIcon,
  },
  {
    id: 'chauffe-eau', label: 'Chauffe-eau', mobileLabel: 'Chauffe-eau', eyebrow: 'L’eau chaude au quotidien', title: 'Installez un ballon d’eau chaude adapté à votre foyer',
    description: 'Remplacement ou nouvelle installation : nous vous accompagnons dans le choix de votre ballon électrique et sa mise en service.',
    image: '/images/ballon.png', alt: 'Ballon d’eau chaude installé dans un logement', href: '/installation-ballon-eau-chaude', cta: 'Découvrir le service', icon: HomeIcon,
  },
];

const HeroSection = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [showOtherServices, setShowOtherServices] = useState(false);

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
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-32 pb-12 md:pt-36 md:pb-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-30 mb-6 md:mb-8">
          <div className="flex w-full items-center gap-1 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm md:gap-2">
            <div role="tablist" aria-label="Nos services" className="flex min-w-0 flex-1 items-center gap-1 md:gap-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService.id === service.id;
                return (
                  <button
                    key={service.id}
                    id={`service-tab-${service.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="hero-service-panel"
                    onClick={() => { setActiveService(service); setShowOtherServices(false); }}
                    className={`${index < 3 ? 'flex' : 'hidden md:flex'} min-h-12 min-w-0 flex-1 items-center justify-center gap-1 rounded-full px-1.5 text-[10px] font-semibold transition-all duration-300 sm:gap-2 sm:px-2 sm:text-xs lg:px-4 lg:text-sm ${
                      isActive
                        ? 'bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white shadow-md'
                        : 'text-gray-600 hover:bg-amber-50 hover:text-[#116290]'
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${isActive ? 'text-[#ffdf64]' : 'text-[#116290]'}`} />
                    <span className="truncate md:hidden">{service.mobileLabel}</span>
                    <span className="hidden truncate md:inline">{service.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className={`flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-full px-3 transition-all md:hidden ${
                services.slice(3).some((service) => service.id === activeService.id)
                  ? 'bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white shadow-md'
                  : 'text-gray-600 hover:bg-amber-50 hover:text-[#116290]'
              }`}
              aria-expanded={showOtherServices}
              aria-controls="hero-other-services"
              aria-haspopup="menu"
              aria-label="Autres prestations"
              onClick={() => setShowOtherServices((open) => !open)}
            >
              <ChevronDownIcon className={`h-5 w-5 transition-transform ${showOtherServices ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showOtherServices && (
            <div id="hero-other-services" role="menu" aria-label="Autres prestations" className="absolute right-0 top-[calc(100%+0.5rem)] z-30 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white p-1.5 shadow-xl md:hidden">
              {services.slice(3).map((service) => {
                const Icon = service.icon;
                const isActive = activeService.id === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isActive}
                    onClick={() => { setActiveService(service); setShowOtherServices(false); }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition-colors ${isActive ? 'bg-[#116290] text-white' : 'text-gray-700 hover:bg-amber-50 hover:text-[#116290]'}`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-[#ffdf64]' : 'text-[#116290]'}`} />
                    {service.mobileLabel}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div id="hero-service-panel" role="tabpanel" aria-labelledby={`service-tab-${activeService.id}`} className="relative z-0 min-h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0a3d5c] via-[#116290] to-[#0b5279] shadow-2xl shadow-[#116290]/20 md:min-h-[500px]">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-[#ffdf64]/10" />
          <div className="absolute bottom-0 left-1/3 h-1.5 w-40 bg-gradient-to-r from-[#ffdf64] to-[#ffb700]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative grid min-h-[520px] md:min-h-[500px] md:grid-cols-[1.02fr_0.98fr]"
            >
              <div className="relative z-10 flex flex-col justify-center px-7 py-10 sm:px-10 md:px-12 lg:px-16 md:py-14">
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#ffdf64]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffdf64]" /> {activeService.eyebrow}
                </span>
                <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.25rem]">
                  {activeService.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                  {activeService.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={activeService.href} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-6 py-3.5 font-bold text-[#123c54] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl">
                    {activeService.cta}<span className="ml-2 text-lg" aria-hidden="true">›</span>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/15">
                    Nous contacter
                  </Link>
                </div>
                <div className="mt-7 flex items-center gap-2 text-sm text-white/65">
                  <span className="h-px w-8 bg-[#ffdf64]/80" /> My Ohm Technologies · Région PACA
                </div>
              </div>

              <div className="relative min-h-[250px] overflow-hidden md:min-h-full">
                <Image
                  src={activeService.image}
                  alt={activeService.alt}
                  fill
                  priority={activeService.id === 'solaire'}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d5c]/40 via-transparent to-transparent md:bg-gradient-to-r md:from-[#116290]/30 md:via-transparent md:to-transparent" />
                <div className="absolute bottom-5 right-5 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm md:bottom-7 md:right-7">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#116290]">Votre projet</div>
                  <div className="mt-0.5 text-sm font-bold text-gray-900">Étudié sur mesure</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
