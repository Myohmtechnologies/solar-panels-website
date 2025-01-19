'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/services/analytics';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

const GA_MEASUREMENT_ID = 'G-ET19PN3YHF';
const GOOGLE_ADS_ID = 'AW-16817660787';

const GA4Initialize = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view whenever the path changes
    trackPageView(pathname);
  }, [pathname]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: false // Désactivé car géré par notre service analytics
          });
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
};

export default GA4Initialize;
