'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

const GA_MEASUREMENT_ID = 'G-ET19PN3YHF';
const GOOGLE_ADS_ID = 'AW-16817660787';

export default function GA4Initialize() {
  // Gestion des erreurs de chargement
  const handleScriptError = () => {
    console.warn('Google Analytics script failed to load');
    if (typeof window !== 'undefined') {
      window.gtag = (...args: any[]) => {
        console.warn('Google Analytics not available:', args);
      };
    }
  };

  useEffect(() => {
    // Initialiser la file d'attente des événements
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Vérification périodique de la connexion
    const checkConnection = () => {
      if (navigator.onLine) {
        // Réessayer de charger les scripts si nécessaire
        const scripts = document.querySelectorAll('script[data-analytics]');
        scripts.forEach(script => {
          if (script.getAttribute('data-loaded') !== 'true') {
            script.setAttribute('src', script.getAttribute('data-src') || '');
          }
        });
      }
    };

    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', () => {
      console.warn('Internet connection lost, analytics events will be queued');
    });

    return () => {
      window.removeEventListener('online', checkConnection);
      window.removeEventListener('offline', () => {});
    };
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        data-analytics="true"
        onError={handleScriptError}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        data-analytics="true"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            debug_mode: ${process.env.NODE_ENV === 'development'}
          });
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
