'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GTM_ID = 'GTM-TWZPVNSQ';
const GA_ID = 'G-ET19PN3YHF';
const AW_ID = 'AW-16817660787';

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
      {/* Google Tag Manager - No Script */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `
        }}
      />

      {/* Google Analytics */}
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Google Ads */}
      <Script
        id="google-ads"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
      />

      {isReady && (
        <>
          <Script
            id="analytics-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  transport_type: 'beacon'
                });
                gtag('config', '${AW_ID}', {
                  transport_type: 'beacon'
                });
              `
            }}
          />
        </>
      )}
    </>
  );
};

export default OptimizedGTM;
