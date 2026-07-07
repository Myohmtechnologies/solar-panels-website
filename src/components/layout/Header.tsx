'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import InfoBanner from './InfoBanner';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, CalculatorIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(true);

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
      {/* Header Desktop */}
      <header 
        className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow-sm"
        style={{ 
          zIndex: 'var(--z-header)'
        }}
      >
        <div className="mx-auto h-[5rem]">
          <div className="flex justify-around items-center h-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0"
              aria-label="Retour à l'accueil"
            >
              <Image 
                src="/images/logo.png" 
                alt="Logo MY OHM" 
                width={170}
                height={60}
                className="w-auto h-12 md:h-14"
                priority={true}
                loading="eager"
                sizes="(max-width: 768px) 120px, 170px"
                quality={85}
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Navigation principale">
              {/* Services avec sous-menu */}
              <Popover className="relative">
                <Popover.Button 
                  className={({ open }) => `
                    ${open ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'}
                    flex items-center font-bold text-base cursor-pointer gap-1
                    transition-colors duration-[var(--transition-fast)]
                  `}
                  aria-label="Menu des services"
                >
                  {({ open }) => (
                    <>
                      Nos Services
                      <ChevronDownIcon 
                        className={`
                          w-4 h-4 opacity-50 transition-transform duration-[var(--transition-fast)]
                          ${open ? 'rotate-180' : ''}
                        `}
                      />
                    </>
                  )}
                </Popover.Button>

                <Popover.Panel className="absolute left-0 z-[var(--z-tooltip)] mt-3 bg-white shadow-xl rounded-xl border border-gray-100 p-4 min-w-[32rem]">
                  {({ close }) => (
                    <div 
                      className="grid grid-cols-2 gap-6"
                      onMouseLeave={() => close()}
                    >
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Énergie Solaire</p>
                        <div className="space-y-1">
                          {[
                            { href: '/panneaux-solaire', label: 'Panneaux Solaires' },
                            { href: '/batterie-de-stockage', label: 'Batterie de Stockage' },
                            { href: '/solutions/batterie-virtuelle', label: 'Batterie Virtuelle' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors duration-[var(--transition-fast)]"
                              onClick={() => close()}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Électricité & Confort</p>
                        <div className="space-y-1">
                          {[
                            { href: '/climatisation', label: 'Climatisation & PAC' },
                            { href: '/borne-de-recharge', label: 'Borne de Recharge IRVE' },
                            { href: '/electricite-generale', label: 'Électricité Générale' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-lg transition-colors duration-[var(--transition-fast)]"
                              onClick={() => close()}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Popover.Panel>
              </Popover>

              {/* À propos avec sous-menu */}
              <Popover className="relative">
                <Popover.Button 
                  className={({ open }) => `
                    ${open ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'}
                    flex items-center font-bold text-base cursor-pointer gap-1
                    transition-colors duration-[var(--transition-fast)]
                  `}
                  aria-label="Menu à propos"
                >
                  {({ open }) => (
                    <>
                      À propos
                      <ChevronDownIcon 
                        className={`
                          w-4 h-4 opacity-50 transition-transform duration-[var(--transition-fast)]
                          ${open ? 'rotate-180' : ''}
                        `}
                      />
                    </>
                  )}
                </Popover.Button>

                <Popover.Panel className="absolute left-0 z-[var(--z-tooltip)] mt-3 w-56 bg-white shadow-lg rounded-lg p-2">
                  {({ close }) => (
                    <div 
                      className="space-y-1"
                      onMouseLeave={() => close()}
                    >
                      {[
                        { href: '/qui-sommes-nous', label: 'Qui sommes-nous' },
                        { href: '/showroom', label: 'Notre Showroom' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-[var(--color-text)] hover:bg-gray-50 rounded-lg transition-colors duration-[var(--transition-fast)]"
                          onClick={() => close()}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </Popover.Panel>
              </Popover>

              <Link
                href="/nos-realisation"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] font-bold transition-colors duration-[var(--transition-fast)]"
              >
                Nos réalisations
              </Link>

              <Link
                href="/contact"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] font-bold transition-colors duration-[var(--transition-fast)]"
              >
                Contact
              </Link>

              <Link
                href="/parrainage"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] font-bold transition-colors duration-[var(--transition-fast)]"
              >
                Parrainage
              </Link>

              <Link
                href="/simulator"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-medium rounded-lg hover:shadow-md transition-all duration-300"
              >
                <CalculatorIcon className="w-5 h-5" />
                <span>Simulation d'économie</span>
              </Link>

              <a
                href="tel:+33492766858"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors duration-[var(--transition-fast)]"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>04 92 76 68 58</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Secondary SubHeader Desktop */}
        <div className="bg-gray-50 border-t border-b border-gray-100 py-2.5">
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-12">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Nos Spécialités :</span>
            {[
              { href: '/panneaux-solaire', label: 'Panneaux Solaires', icon: (
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )},
              { href: '/climatisation', label: 'Climatisation & PAC', icon: (
                <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-3-6L6 18M6 6l12 12" />
                </svg>
              )},
              { href: '/borne-de-recharge', label: 'Bornes de Recharge', icon: (
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )},
              { href: '/electricite-generale', label: 'Électricité Générale', icon: (
                <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
            ].map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-extrabold transition-all duration-200 pb-0.5 border-b-2 ${
                  pathname === item.href 
                    ? 'text-[#116290] border-[#116290]' 
                    : 'text-gray-500 border-transparent hover:text-[#116290] hover:border-gray-300'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <InfoBanner />
      </header>

      {/* Header Mobile */}
      <header 
        className={`
          md:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm
          transition-transform duration-[var(--transition-normal)]
          ${showMobileHeader ? 'translate-y-0' : '-translate-y-full'}
        `}
        style={{ 
          zIndex: 'var(--z-header)'
        }}
      >
        <div className="flex items-center justify-between h-[4rem] px-4">
          <Link href="/" className="flex-shrink-0" aria-label="Retour à l'accueil">
            <Image 
              src="/images/logo.png" 
              alt="Logo MY OHM" 
              width={170}
              height={60}
              className="w-auto h-12"
              priority={true}
              loading="eager"
              sizes="170px"
              quality={85}
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/simulator"
              className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary-400 to-secondary-dark text-black text-sm font-medium rounded-lg hover:shadow-md transition-all duration-300"
            >
              <CalculatorIcon className="w-4 h-4" />
              <span>Simulation</span>
            </Link>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Secondary SubHeader Mobile */}
        <div className="bg-gray-50 border-t border-b border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-none py-2 px-4 flex justify-between items-center gap-4">
          {[
            { href: '/panneaux-solaire', label: 'Solaire', icon: (
              <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )},
            { href: '/climatisation', label: 'Climatisation', icon: (
              <svg className="w-3.5 h-3.5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-3-6L6 18M6 6l12 12" />
              </svg>
            )},
            { href: '/borne-de-recharge', label: 'Bornes', icon: (
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )},
            { href: '/electricite-generale', label: 'Électricité', icon: (
              <svg className="w-3.5 h-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )}
          ].map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`flex items-center gap-1 text-[10px] uppercase tracking-wider font-extrabold pb-0.5 border-b-2 ${
                pathname === item.href 
                  ? 'text-[#116290] border-[#116290]' 
                  : 'text-gray-500 border-transparent'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <InfoBanner />
      </header>

      {/* Menu mobile */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
