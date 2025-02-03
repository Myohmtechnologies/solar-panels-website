'use client';

import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-16817660787';
const CONVERSION_ID = 'selKCIb6ypcaEPPGpNM';

export const trackConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Conversion spécifique
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_ID}`,
    });
  }
};

export default function ConversionTracker() {
  return (
    <>
      {/* Script Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />

      {/* Configuration Google Ads */}
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
