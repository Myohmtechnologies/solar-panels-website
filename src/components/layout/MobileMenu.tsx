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
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={menuRef}
        className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Image 
              src="/images/logo.png" 
              alt="Logo MY OHM" 
              width={120} 
              height={40}
              className="w-auto h-8"
            />
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1">
            <div className="space-y-4">
              <Link 
                href="/panneaux-solaire"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={onClose}
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
                onClick={onClose}
              >
                <Image 
                  src="/images/mise-en-charge.png" 
                  alt="Icône Borne de Recharge" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-medium">Installation de borne de recharge IRVE</span>
              </Link>

              <Link 
                href="/batterie-de-stockage"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                <Image 
                  src="/images/eclairage.png" 
                  alt="Icône Batterie" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-medium">Batterie de stockage</span>
              </Link>

              <Link 
                href="/ballon-thermodynamique"
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                <Image 
                  src="/images/icon-chauffe-eau.png" 
                  alt="Icône Ballon thermodynamique" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
                <span>Ballon thermodynamique</span>
              </Link>
              <Link
                href="/solutions/batterie-virtuelle"
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                onClick={onClose}
              >
                <Image
                  src="/images/icons/icone-batterie-virtuelle.png"
                  alt="Icône Batterie Virtuelle"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>Batterie Virtuelle</span>
              </Link>
            </div>

            <div className="mt-8 space-y-4">
              <Link 
                href="/nos-realisation"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                <span className="font-medium">Nos réalisations</span>
              </Link>

              <Link 
                href="/parrainage"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                <span className="font-medium">Parrainage</span>
              </Link>

              <Link 
                href="/blog"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                <span className="font-medium">Blog</span>
              </Link>

              <Link 
                href="/contact"
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                <span className="font-medium">Contact</span>
              </Link>
            </div>
          </nav>

          <div className="mt-auto pb-4">
            <a 
              href="tel:0492766858"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-solar text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Appelez-nous</span>
              <span>04 92 76 68 58</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
