"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  {
    href: '/panneaux-solaire',
    label: 'Installation Panneaux Solaires',
    icon: '/images/icone-pv.png'
  },
  {
    href: '/borne-de-recharge',
    label: 'Installation Borne de Recharge',
    icon: '/images/mise-en-charge.png'
  },
  {
    href: '/batterie-de-stockage',
    label: 'Batterie de Stockage',
    icon: '/images/battery.png'
  },
  {
    href: '/ballon-thermodynamique',
    label: 'Ballon thermodynamique',
    icon: '/images/icon-chauffe-eau.png'
  },
  {
    href: '/qui-sommes-nous',
    label: 'Qui sommes-nous'
  },
  {
    href: '/showroom',
    label: 'Notre Showroom'
  },
  {
    href: '/nos-realisations',
    label: 'Nos réalisations'
  },
  {
    href: '/blog',
    label: 'Blog'
  },
  {
    href: '/contact',
    label: 'Contact'
  },
  {
    href: '/parrainage',
    label: 'Parrainage'
  }
];

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
    
    if (diffX > 50 && diffX > diffY) {
      onClose();
      touchStartX.current = null;
      touchStartY.current = null;
    }
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="relative" style={{ zIndex: 'var(--z-mobile-menu)' }}>
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          />

          <motion.div 
            ref={menuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed right-0 top-0 h-[100dvh] w-4/5 max-w-sm bg-white shadow-xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 flex justify-between items-center border-b border-gray-100">
                <Link href="/" onClick={onClose} className="flex-shrink-0">
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo MY OHM" 
                    width={170}
                    height={60}
                    className="w-auto h-12"
                    priority={true}
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <XMarkIcon className="h-8 w-8 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <nav className="p-4">
                  <div className="space-y-2">
                    {menuLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        {link.icon && (
                          <Image
                            src={link.icon}
                            alt={`Icône ${link.label}`}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        )}
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>

              <div className="p-4 border-t border-gray-100">
                <Link 
                  href="tel:0492766858"
                  className="flex items-center justify-center gap-2 w-full bg-[var(--color-primary)] text-white py-3 px-4 rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                  onClick={onClose}
                >
                  <span className="font-bold">04 92 76 68 58</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">Appel gratuit</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
