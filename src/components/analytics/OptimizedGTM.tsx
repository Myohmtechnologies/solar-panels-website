'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GTM_ID = 'GTM-TWZPVNSQ';
const GA_ID = 'G-ET19PN3YHF';
const AW_ID = 'AW-168';

const OptimizedGTM = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Attendre que la page soit complètement chargée
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      window.addEventListener('load', () => setIsReady(true));
    }

    return () => window.removeEventListener('load', () => setIsReady(true));
  }, []);

  return (
    <>
      <Script
        id="gtm-base"
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `
        }}
      />

      {isReady && (
        <>
          <Script
            id="gtm-config"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  transport_type: 'beacon',
                  send_page_view: true
                });
                gtag('config', '${AW_ID}', {
                  transport_type: 'beacon',
                  send_page_view: false
                });
              `
            }}
          />

          <Script
            id="gtm-main"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          />
        </>
      )}
    </>
  );
};

export default OptimizedGTM;
