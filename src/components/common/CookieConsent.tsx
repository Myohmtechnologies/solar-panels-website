'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si le consentement a déjà été donné
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-gray-900 font-semibold mb-2">🍪 Nous utilisons des cookies</h3>
              <p className="text-gray-600 text-sm">
                Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic de notre site. 
                Vous pouvez choisir d&apos;accepter ou de refuser ces cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-2 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors text-sm"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 text-white bg-AFC97E rounded-xl hover:bg-9AB56A transition-colors text-sm"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
