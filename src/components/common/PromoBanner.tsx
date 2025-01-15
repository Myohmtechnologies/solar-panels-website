'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              {/* Texte promotionnel */}
              <div className="flex-1 text-center sm:text-left flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400 text-blue-900 text-xs font-semibold tracking-wide uppercase">
                  Offre Limitée
                </span>
                <p className="text-sm sm:text-base font-medium">
                  -20% sur l&apos;installation de vos panneaux solaires jusqu&apos;au 30 juin !
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Link
                  href="/simulateur"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white text-blue-800 text-sm font-semibold hover:bg-blue-50 transition-colors duration-200"
                >
                  En profiter
                </Link>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 rounded-full hover:bg-blue-700/50 transition-colors duration-200"
                  aria-label="Fermer la bannière"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute inset-y-0 left-0 w-40 bg-white/5 -skew-x-12 transform -translate-x-20" />
            <div className="absolute inset-y-0 right-0 w-40 bg-white/5 -skew-x-12 transform translate-x-20" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoBanner;
