'use client';

import { useState, useEffect } from 'react';
import { setCookieConsent, getCookieConsent } from '@/utils/cookies';

declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event',
      target: string,
      params?: {
        [key: string]: any;
      }
    ) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === undefined) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    setShowBanner(false);
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted'
    });
  };

  const handleDecline = () => {
    setCookieConsent(false);
    setShowBanner(false);
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied'
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">Nous utilisons des cookies.</span>
                <span className="hidden md:inline">
                  Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.
                </span>
              </p>
            </div>
            <div className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
              <div className="flex space-x-4">
                <button
                  onClick={handleAccept}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50"
                >
                  Accepter
                </button>
                <button
                  onClick={handleDecline}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-800"
                >
                  Refuser
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
