'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { throttle } from 'lodash';

const Header = () => {
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
          height: 'var(--header-height)',
          zIndex: 'var(--z-header)'
        }}
      >
        <div className="mx-auto h-full">
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

                <Popover.Panel className="absolute left-0 z-[var(--z-tooltip)] mt-3 w-56 bg-white shadow-lg rounded-lg p-2">
                  {({ close }) => (
                    <div 
                      className="space-y-1"
                      onMouseLeave={() => close()}
                    >
                      {[
                        { href: '/panneaux-solaire', label: 'Installation Panneaux Solaires' },
                        { href: '/borne-de-recharge', label: 'Installation de borne de recharge IRVE' },
                        { href: '/batterie-de-stockage', label: 'Installation de Batterie de stockage' },
                        { href: '/ballon-thermodynamique', label: 'Ballon thermodynamique' },
                        { href: '/solutions/batterie-virtuelle', label: 'Batterie Virtuelle' },
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

              <a
                href="tel:+33492766858"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors duration-[var(--transition-fast)]"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>04 92 76 68 58</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Header Mobile */}
      <header 
        className={`
          md:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm
          transition-transform duration-[var(--transition-normal)]
          ${showMobileHeader ? 'translate-y-0' : '-translate-y-full'}
        `}
        style={{ 
          height: 'var(--header-mobile-height)',
          zIndex: 'var(--z-header)'
        }}
      >
        <div className="flex items-center justify-between h-full px-4">
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

          <button
            onClick={toggleMobileMenu}
            className="p-2"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </header>
    </>
  );
};

export default Header;
