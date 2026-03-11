'use client';

import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useAnalytics } from '@/hooks/useAnalytics';

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params: { [key: string]: any }
    ) => void;
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useLocalStorage('cookie-consent', undefined);
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Afficher la bannière après un court délai si le consentement n'est pas défini
    const timer = setTimeout(() => {
      if (consent === undefined) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [consent]);

  const handleAccept = () => {
    setConsent(true);
    setIsVisible(false);
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted'
    });
    trackEvent({ 
      eventName: 'cookie_consent',
      action: 'accept'
    });
  };

  const handleDecline = () => {
    setConsent(false);
    setIsVisible(false);
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied'
    });
    trackEvent({ 
      eventName: 'cookie_consent',
      action: 'decline'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          En continuant à naviguer, vous acceptez notre utilisation des cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
