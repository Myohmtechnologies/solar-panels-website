"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import '../../styles/animations.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;
    
    const diffX = touchStartX.current - e.touches[0].clientX;
    const diffY = Math.abs(touchStartY.current - e.touches[0].clientY);
    
    // Si le mouvement est plus horizontal que vertical et vers la gauche
    if (diffX > 50 && diffX > diffY) {
      onClose();
      touchStartX.current = null;
      touchStartY.current = null;
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={menuRef}
        className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={handleLinkClick}>
              <Image 
                src="/images/logo.png" 
                alt="Logo MY OHM" 
                width={150} 
                height={70}
                className="w-auto h-10"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Fermer le menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1">
            <div className="space-y-4">
              <Link 
                href="/panneaux-solaire"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={handleLinkClick}
              >
                <Image 
                  src="/images/icone-pv.png" 
                  alt="Icône Panneaux Photovoltaïques" 
                  width={24} 
                  height={24}
                  className="w-6 h-6" 
                />
                <span className="font-medium">Installation Panneaux Solaires</span>
              </Link>

              <Link 
                href="/borne-de-recharge"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={handleLinkClick}
              >
                <Image 
                  src="/images/mise-en-charge.png" 
                  alt="Icône Borne de Recharge" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-medium">Installation Borne de Recharge</span>
              </Link>

              <Link 
                href="/batterie-de-stockage"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={handleLinkClick}
              >
                <Image 
                  src="/images/battery.png" 
                  alt="Icône Batterie de Stockage" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-medium">Batterie de Stockage</span>
              </Link>
            </div>

            <div className="mt-8 space-y-4">
              <Link 
                href="/contact"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Contact</span>
              </Link>
              
              <Link 
                href="/blog"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Blog</span>
              </Link>
            </div>
          </nav>

          <div className="mt-auto pt-6">
            <Link 
              href="tel:0492766858"
              className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              onClick={handleLinkClick}
            >
              <span className="font-bold">04 92 76 68 58</span>
              <span className="text-sm bg-green-500 px-2 py-1 rounded-full">Appel gratuit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
