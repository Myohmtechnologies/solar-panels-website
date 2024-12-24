'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-40 shadow-sm">
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
            <Link href="/panneaux-solaire" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Panneaux photovoltaïques
            </Link>
            <Link href="/qui-sommes-nous" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Qui sommes-nous
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Blog
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Notre showroom
            </Link>
            <Link href="/nos-realisation" className="text-gray-700 hover:text-gray-900 font-medium text-base">
              Nos réalisations
            </Link>
          </nav>

          {/* Bouton CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/simulator"
              className="inline-flex items-center px-6 py-2.5 rounded-full 
                       text-sm font-semibold text-black bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg hover:bg-gray-50 
                       transition-colors duration-200 group"
            >
              <span>MON ETUDE GRATUITE</span>
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
  );
};

export default Header;
