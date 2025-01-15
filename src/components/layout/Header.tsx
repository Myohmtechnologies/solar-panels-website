'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-section="city-hero"]');
      
      if (heroSection && window.innerWidth < 768) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowMobileHeader(heroBottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header Desktop */}
      <header className="hidden md:block fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="mx-auto ">
          <div className="flex justify-around items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/images/logo.png" 
                alt="Logo MY OHM" 
                width={170}
                height={60}
                className="w-auto h-12 md:h-14"
                priority
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Services avec sous-menu */}
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button 
                      className={`
                        ${open ? 'text-primary' : 'text-gray-800'}
                        flex items-center font-bold text-base cursor-pointer gap-1
                      `}
                    >
                      Nos Services
                      <ChevronDownIcon className={`w-4 h-4 opacity-50 ${open ? 'rotate-180' : ''}`} />
                    </Popover.Button>

                    <Popover.Panel 
                      className="absolute left-0 z-10 mt-3 w-56 bg-white shadow-lg rounded-lg p-2"
                    >
                      <Link 
                        href="/panneaux-solaire" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-semibold flex items-center gap-2"
                      >
                        <Image 
                          src="/images/icone-pv.png" 
                          alt="Icône Panneaux Photovoltaïques" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6"
                        />
                        Installation Panneaux Solaires
                      </Link>
                      <Link 
                        href="/borne-de-recharge" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-semibold flex items-center gap-2"
                      >
                        <Image 
                          src="/images/mise-en-charge.png" 
                          alt="Icône Borne de Recharge éléctrique"  
                          width={24} 
                          height={24} 
                          className="w-6 h-6"
                        />
                        Installation de borne de recharge IRVE
                      </Link>
                      <Link 
                        href="/batterie-de-stockage" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-semibold flex items-center gap-2"
                      >
                        <Image 
                          src="/images/eclairage.png" 
                          alt="Icône Borne de Recharge éléctrique"  
                          width={24} 
                          height={24} 
                          className="w-6 h-6"
                        />
                        Installation de Batterie de stockage
                      </Link>
                      <Link 
                        href="/ballon-thermodynamique" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-semibold flex items-center gap-2"
                      >
                        <Image 
                          src="/images/icon-chauffe-eau.png" 
                          alt="Icône Ballon thermodynamique"  
                          width={24} 
                          height={24} 
                          className="w-6 h-6"
                        />
                        Ballon thermodynamique
                      </Link>
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
                        ${open ? 'text-primary' : 'text-gray-800'}
                        flex items-center font-bold text-base cursor-pointer gap-1
                      `}
                    >
                      À propos
                      <ChevronDownIcon className={`w-4 h-4 opacity-50 ${open ? 'rotate-180' : ''}`} />
                    </Popover.Button>

                    <Popover.Panel 
                      className="absolute left-0 z-10 mt-3 w-56 bg-white shadow-lg rounded-lg p-2"
                    >
                      <Link 
                        href="/qui-sommes-nous" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                      >
                        Qui sommes-nous
                      </Link>
                      <Link 
                        href="/showroom" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-semibold"
                      >
                        Notre Showroom
                      </Link>
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-bold text-base">
                Blog
              </Link>

              <Link href="/nos-realisation" className="text-gray-700 hover:text-gray-900 font-bold text-base">
                Nos réalisations
              </Link>

              {/* Nouveau lien Contact */}
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-bold text-base">
                Contact
              </Link>
               {/* Nouveau lien Contact */}
               <Link href="/parrainage" className="text-gray-700 hover:text-gray-900 font-bold text-base">
                Parrainage 
              </Link>
            </nav>

            {/* Bouton CTA */}
            <div className="hidden md:block flex-shrink-0">
              <a
                href="tel:+33492766858"
                className="inline-flex items-center px-4 py-2 text-gray-900 hover:text-FFDF64 transition-colors font-semibold"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                04 92 76 68 58
              </a>
              <Link
                href="/simulator"
                className="inline-flex items-center px-6 py-2.5 rounded-full 
                         text-sm font-semibold text-black bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg hover:bg-gray-50 
                         transition-colors duration-200 group"
              >
                <span>MA SIMULATION GRATUITE</span>
                <div className="ml-2 w-6 h-6 border border-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-3 w-3" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="Ouvrir le menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                width="44" 
                height="44" 
                viewBox="0 0 24 24" 
                fill="none"
                className="text-gray-700"
              >
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
      </header>

      {/* Header Mobile */}
      <header className={`md:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-sm transition-transform duration-300 ${showMobileHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="Logo MY OHM" 
              width={120}
              height={40}
              className="w-auto h-10"
              priority
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Menu mobile"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
