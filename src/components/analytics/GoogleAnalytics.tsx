'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { getCookieConsent } from '@/utils/cookies';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ET19PN3YHF';
const isDebug = process.env.NODE_ENV === 'development';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Vérifier le consentement au chargement
    const consent = getCookieConsent();
    if (typeof window !== 'undefined' && window.gtag && consent !== undefined) {
      window.gtag('consent', 'update', {
        'analytics_storage': consent ? 'granted' : 'denied',
        'ad_storage': consent ? 'granted' : 'denied'
      });
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configuration initiale avec consentement par défaut refusé
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
          });

          // Configuration Google Analytics
          gtag('config', '${GA_MEASUREMENT_ID}', {
            debug_mode: ${isDebug},
            send_page_view: true,
            linker: {
              domains: 'myohmtechnologies.com'
            }
          });

          // Configuration Google Search Console
          gtag('config', '${GA_MEASUREMENT_ID}', {
            measurement_id: '${GA_MEASUREMENT_ID}',
            search_term_parameter: 'q',
            link_attribution: true,
            site_domain: 'myohmtechnologies.com'
          });
        `}
      </Script>
    </>
  );
}
