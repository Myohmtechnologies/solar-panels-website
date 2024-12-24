"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/animations.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    
    const diff = touchStart.current - e.touches[0].clientX;
    if (diff > 50) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-white z-50 md:hidden mobile-menu-enter"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <div className="flex flex-col h-full">
        {/* En-tête mobile */}
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" onClick={onClose} className="flex-shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="Logo MY OHM" 
              width={170}
              height={60}
              className="w-auto h-12"
              priority
              loading="eager"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Fermer le menu"
          >
            <svg 
              width="44" 
              height="44" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-700"
            >
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        {/* Navigation mobile */}
        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-2 px-4">
            <li>
              <Link 
                href="/panneaux-solaire" 
                className="block px-4 py-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
                onClick={onClose}
              >
                Panneaux photovoltaïques
              </Link>
            </li>
            <li>
              <Link 
                href="/qui-sommes-nous" 
                className="block px-4 py-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
                onClick={onClose}
              >
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="block px-4 py-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
                onClick={onClose}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="block px-4 py-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
                onClick={onClose}
              >
                Notre showroom
              </Link>
            </li>
            <li>
              <Link 
                href="/nos-realisation" 
                className="block px-4 py-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
                onClick={onClose}
              >
                Nos réalisations
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* CTA Mobile */}
        <div className="p-4 border-t">
          <Link 
            href="/simulator"
            onClick={onClose}
            className="inline-flex items-center justify-center w-full px-6 py-3 border  rounded-full 
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
      </div>
    </div>
  );
};

export default MobileMenu;
