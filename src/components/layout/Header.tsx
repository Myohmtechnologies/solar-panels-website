'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import InfoBanner from './InfoBanner';
import { Dialog, Popover } from '@headlessui/react';
import { 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon, 
  CalculatorIcon, 
  SunIcon, 
  Battery100Icon, 
  BoltIcon, 
  SparklesIcon, 
  WrenchScrewdriverIcon, 
  HomeModernIcon,
  PhoneIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { throttle } from 'lodash';

const simulatorServices = [
  { id: 'panneaux', title: 'Panneaux solaires', description: 'Estimez votre projet photovoltaïque et vos économies.', icon: SunIcon, offer: true },
  { id: 'borne', title: 'Borne de recharge', description: 'Préparez votre installation de borne à domicile.', icon: BoltIcon, offer: true },
  { id: 'clim', title: 'Climatisation', description: 'Configurez votre projet de climatisation.', icon: SparklesIcon },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const [isSimulatorChooserOpen, setSimulatorChooserOpen] = useState(false);
  const [blackFridayCountdown, setBlackFridayCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isBlackFridayActive, setBlackFridayActive] = useState(true);

  useEffect(() => {
    const deadline = new Date('2026-12-01T00:00:00+01:00').getTime();
    const updateCountdown = () => {
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        setBlackFridayActive(false);
        return;
      }
      setBlackFridayCountdown({
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining % 86400000) / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000),
      });
    };
    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, []);

  // Optimisation du scroll handling avec throttle
  const handleScroll = useCallback(
    throttle(() => {
      const heroSection = document.querySelector('[data-section="city-hero"]');
      if (heroSection && window.innerWidth < 768) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowMobileHeader(heroBottom >= 0);
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  // Gestion de la fermeture du menu
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      document.body.style.overflow = 'unset';
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        handleRouteChange();
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Bandeau promotionnel Black Friday */}
      {isBlackFridayActive && <div className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center justify-center bg-[#202020] px-3 text-[10px] text-white sm:text-xs">
        <div className="flex max-w-full items-center justify-center gap-1.5 whitespace-nowrap sm:gap-2.5">
          <span><strong className="text-[#ffcf25]">Opération Black Friday :</strong><span className="hidden sm:inline"> fin au 30 novembre 2026</span></span>
          {blackFridayCountdown && <span className="flex items-center gap-1 font-extrabold tabular-nums sm:gap-1.5">
            <span className="rounded bg-[#e52d21] px-1.5 py-1 sm:px-2">{blackFridayCountdown.days} j</span>
            <span className="rounded bg-[#e52d21] px-1.5 py-1 sm:px-2">{blackFridayCountdown.hours} h</span>
            <span className="rounded bg-[#e52d21] px-1.5 py-1 sm:px-2">{blackFridayCountdown.minutes} min</span>
            <span className="hidden rounded bg-[#e52d21] px-1.5 py-1 sm:inline sm:px-2">{String(blackFridayCountdown.seconds).padStart(2, '0')} s</span>
          </span>}
          <Link href="/borne-de-recharge#offres" className="ml-0.5 font-bold text-[#ffcf25] underline decoration-[#ffcf25]/60 underline-offset-2 hover:text-white sm:ml-1">Voir les offres <span aria-hidden="true">›</span></Link>
        </div>
      </div>}

      {/* Header Desktop */}
      <header 
        className="hidden md:block fixed top-9 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]"
        style={{ 
          zIndex: 'var(--z-header)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex items-center justify-between h-full gap-4 lg:gap-8">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 transition-opacity hover:opacity-90 py-1"
              aria-label="Retour à l'accueil"
            >
              <Image 
                src="/images/logo.png" 
                alt="Logo MY OHM Technologies" 
                width={160}
                height={55}
                className="w-auto h-11 md:h-12"
                priority={true}
                loading="eager"
                sizes="(max-width: 768px) 120px, 160px"
                quality={90}
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="flex items-center space-x-1 lg:space-x-1.5 xl:space-x-3" aria-label="Navigation principale">
              {/* Services avec sous-menu */}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button 
                      className={`
                        inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer
                        ${open ? 'text-[#116290] bg-[#116290]/5 font-bold' : 'text-gray-700 hover:text-[#116290] hover:bg-gray-50'}
                      `}
                      aria-label="Menu des services"
                    >
                      <span>Nos Services</span>
                      <ChevronDownIcon 
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-[#116290]' : 'text-gray-400'}`}
                      />
                    </Popover.Button>

                    <Popover.Panel className="absolute left-1/2 -translate-x-1/2 z-[var(--z-tooltip)] mt-3 w-[min(42rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_24px_70px_rgba(8,47,73,0.18)] ring-1 ring-black/5">
                      {({ close }) => (
                        <div onMouseLeave={() => close()}>
                          <div className="bg-gradient-to-r from-[#082f49] via-[#0d5578] to-[#116290] px-6 py-5 text-white">
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffdf64]">Nos solutions d'experts</p>
                            <p className="mt-1 text-lg font-bold">Un confort durable, toute l’année</p>
                            <p className="mt-1 text-sm text-white/75">Découvrez nos prestations clés en main pour votre logement.</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4 p-5 bg-white">
                            <div className="rounded-2xl bg-[#f5f9fb] p-3 border border-[#116290]/10">
                              <p className="mb-2 px-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#116290]">Énergie solaire</p>
                              {[
                                { href: '/panneaux-solaire', label: 'Panneaux solaires', description: 'Produisez votre électricité', icon: SunIcon },
                                { href: '/batterie-de-stockage', label: 'Batterie de stockage', description: 'Utilisez votre énergie plus tard', icon: Battery100Icon },
                                { href: '/solutions/batterie-virtuelle', label: 'Batterie virtuelle', description: 'Valorisez votre surplus solaire', icon: BoltIcon },
                              ].map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link key={item.href} href={item.href} onClick={() => close()} className="group flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-white hover:shadow-sm">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#116290] shadow-sm transition group-hover:bg-gradient-to-br group-hover:from-[#ffdf64] group-hover:to-[#ffb700] group-hover:text-gray-900">
                                      <Icon className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="block text-sm font-bold leading-5 text-[#102c40] group-hover:text-[#116290]">{item.label}</span>
                                      <span className="mt-0.5 block text-xs leading-4 text-gray-500">{item.description}</span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="rounded-2xl bg-[#f5f9fb] p-3 border border-[#116290]/10">
                              <p className="mb-2 px-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#116290]">Électricité & confort</p>
                              {[
                                { href: '/climatisation', label: 'Climatisation & PAC', description: 'Un confort thermique adapté', icon: SparklesIcon },
                                { href: '/borne-de-recharge', label: 'Borne de recharge IRVE', description: 'Rechargez chez vous', icon: BoltIcon },
                                { href: '/electricite-generale', label: 'Électricité générale', description: 'Sécurisez vos installations', icon: WrenchScrewdriverIcon },
                                { href: '/installation-ballon-eau-chaude', label: 'Ballon d’eau chaude', description: 'L’eau chaude au quotidien', icon: HomeModernIcon },
                              ].map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link key={item.href} href={item.href} onClick={() => close()} className="group flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-white hover:shadow-sm">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#116290] shadow-sm transition group-hover:bg-gradient-to-br group-hover:from-[#ffdf64] group-hover:to-[#ffb700] group-hover:text-gray-900">
                                      <Icon className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="block text-sm font-bold leading-5 text-[#102c40] group-hover:text-[#116290]">{item.label}</span>
                                      <span className="mt-0.5 block text-xs leading-4 text-gray-500">{item.description}</span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              {/* À propos avec sous-menu */}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button 
                      className={`
                        inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer
                        ${open ? 'text-[#116290] bg-[#116290]/5 font-bold' : 'text-gray-700 hover:text-[#116290] hover:bg-gray-50'}
                      `}
                      aria-label="Menu à propos"
                    >
                      <span>À propos</span>
                      <ChevronDownIcon 
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-[#116290]' : 'text-gray-400'}`}
                      />
                    </Popover.Button>

                    <Popover.Panel className="absolute left-0 z-[var(--z-tooltip)] mt-3 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                      {({ close }) => (
                        <div className="space-y-1" onMouseLeave={() => close()}>
                          {[
                            { href: '/qui-sommes-nous', label: 'Qui sommes-nous', desc: 'Notre histoire & nos engagements' },
                            { href: '/showroom', label: 'Notre Showroom', desc: 'Venez tester nos équipements' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group block px-3 py-2.5 rounded-xl hover:bg-[#116290]/5 transition"
                              onClick={() => close()}
                            >
                              <span className="block text-sm font-bold text-gray-800 group-hover:text-[#116290] transition-colors">{item.label}</span>
                              <span className="block text-xs text-gray-500 mt-0.5">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              {/* Liens directs */}
              {[
                { href: '/nos-realisation', label: 'Nos réalisations' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      px-3 py-2 text-sm font-semibold rounded-xl transition-all
                      ${isActive ? 'text-[#116290] bg-[#116290]/5 font-bold' : 'text-gray-700 hover:text-[#116290] hover:bg-gray-50'}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTAs droite */}
            <div className="flex items-center gap-2.5 lg:gap-3 flex-shrink-0">
              {/* Bouton Téléphone */}
              <a
                href="tel:+33492766858"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-bold text-[#116290] bg-slate-50 hover:bg-[#116290]/10 border border-slate-200/80 rounded-xl transition-all duration-200"
              >
                <PhoneIcon className="w-4 h-4 text-[#ffb700] flex-shrink-0" />
                <span className="whitespace-nowrap">04 92 76 68 58</span>
              </a>
              <a
                href="tel:+33492766858"
                className="inline-flex xl:hidden p-2.5 text-[#116290] bg-slate-50 hover:bg-[#116290]/10 border border-slate-200/80 rounded-xl transition duration-200"
                aria-label="Appeler le 04 92 76 68 58"
              >
                <PhoneIcon className="w-4 h-4 text-[#ffb700]" />
              </a>

              {/* Bouton Simulation d'économie */}
              <button
                type="button"
                onClick={() => setSimulatorChooserOpen(true)}
                className="group inline-flex items-center gap-2 px-4 py-2.5 lg:px-5 lg:py-2.5 bg-gradient-to-r from-[#ffdf64] to-[#ffb700] hover:from-[#ffe67d] hover:to-[#ffc019] text-[#0a3d5c] font-bold text-sm rounded-xl shadow-[0_4px_14px_rgba(255,183,0,0.32)] hover:shadow-[0_6px_20px_rgba(255,183,0,0.45)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <CalculatorIcon className="w-4 h-4 text-[#0a3d5c]" />
                <span className="whitespace-nowrap">Simulation d'économie</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-[#0a3d5c]/80 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        <InfoBanner />
      </header>

      {/* Header Mobile */}
      <header 
        className={`
          md:hidden fixed top-9 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm
          transition-transform duration-[var(--transition-normal)]
          ${showMobileHeader ? 'translate-y-0' : '-translate-y-full'}
        `}
        style={{ 
          zIndex: 'var(--z-header)'
        }}
      >
        <div className="flex items-center justify-between h-[4rem] px-4 max-w-7xl mx-auto">
          <Link href="/" className="flex-shrink-0 py-1" aria-label="Retour à l'accueil">
            <Image 
              src="/images/logo.png" 
              alt="Logo MY OHM Technologies" 
              width={140}
              height={45}
              className="w-auto h-10"
              priority={true}
              loading="eager"
              sizes="140px"
              quality={90}
            />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="tel:+33492766858"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200/90 bg-slate-50 text-[#116290] transition hover:bg-[#116290] hover:text-white"
              aria-label="Appeler le 04 92 76 68 58"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setSimulatorChooserOpen(true)}
              className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-3 text-xs font-bold text-[#0a3d5c] shadow-sm hover:shadow transition-all"
            >
              <CalculatorIcon className="h-3.5 w-3.5" />
              <span>Simulation</span>
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200/90 bg-slate-50 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <InfoBanner />
      </header>

      {/* Menu mobile */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <Dialog open={isSimulatorChooserOpen} onClose={setSimulatorChooserOpen} className="relative z-[100]">
        <div className="fixed inset-0 bg-[#082f49]/55 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-3 sm:p-6">
          <Dialog.Panel className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/70 bg-white p-4 shadow-[0_30px_100px_rgba(8,47,73,0.32)] sm:max-h-none sm:overflow-hidden sm:rounded-[2rem] sm:p-9">
            <button type="button" onClick={() => setSimulatorChooserOpen(false)} aria-label="Fermer" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f6f9] text-[#315269] transition hover:bg-[#e5f0f6] sm:right-5 sm:top-5 sm:h-10 sm:w-10">
              <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <div className="pr-9 sm:pr-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#116290] sm:text-xs">MY OHM Technologies</p>
              <Dialog.Title className="mt-1 text-xl font-extrabold tracking-tight text-[#102c40] sm:mt-2 sm:text-3xl">Quel est votre projet ?</Dialog.Title>
              <p className="mt-1 text-xs text-gray-600 sm:mt-2 sm:text-base">Choisissez une prestation pour accéder à son simulateur.</p>
            </div>

            <div className="mt-4 grid gap-2.5 md:mt-7 md:grid-cols-3 md:gap-4">
              {simulatorServices.map(({ id, title, description, icon: Icon, offer }) => (
                <Link key={id} href={`/simulator?prestation=${id}`} onClick={() => setSimulatorChooserOpen(false)} className="group flex items-center gap-3 rounded-xl border border-[#116290]/20 bg-[#f5f9fb] p-3 transition hover:border-[#116290]/50 hover:bg-white hover:shadow-[0_16px_35px_rgba(8,47,73,0.13)] md:block md:rounded-2xl md:p-5 md:hover:-translate-y-1">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-[#0a3d5c] md:h-14 md:w-14 md:rounded-2xl"><Icon className="h-5 w-5 md:h-7 md:w-7" /></span>
                  <span className="min-w-0 flex-1 md:mt-5 md:block">
                    <span className="block text-sm font-bold text-[#102c40] md:text-lg">{title}</span>
                    {offer && <span className="mt-1 inline-flex rounded-full bg-[#202020] px-2.5 py-1 text-[10px] font-extrabold text-white md:text-xs">Offre Black Friday</span>}
                    <span className="mt-0.5 block text-[11px] leading-4 text-gray-600 md:min-h-10 md:text-sm md:leading-5">{description}</span>
                    <span className="mt-1.5 inline-flex items-center text-xs font-bold text-[#116290] md:mt-5 md:text-base">Lancer le simulateur <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1 md:ml-2 md:h-4 md:w-4" /></span>
                  </span>
                </Link>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
