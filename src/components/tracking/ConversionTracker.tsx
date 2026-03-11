'use client';

import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-16817660787';

// Types de conversion et leurs IDs
export const CONVERSION_TYPES = {
  LEAD_FORM: 'FFX8CKXqk6EaEPPGpNM-',  // Form principal
  QUICK_FORM: 'FFX8CKXqk6EaEPPGpNM-',  // QuickLeadForm
  PRICE_CALCULATOR: 'FFX8CKXqk6EaEPPGpNM-',  // PriceCalculator
  CONTACT_FORM: 'FFX8CKXqk6EaEPPGpNM-',  // Page contact
} as const;

export type ConversionType = keyof typeof CONVERSION_TYPES;

export const trackConversion = (type: ConversionType, value: number = 1.0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const gclid = new URLSearchParams(window.location.search).get('gclid');
    
    // Conversion Google Ads UNIQUEMENT si gclid présent
    if (gclid) {
      window.gtag('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${CONVERSION_TYPES[type]}`,
        value: value,
        currency: 'EUR'
      });
      console.log('Conversion Google Ads envoyée:', type);
    }

    // Event analytics pour tous les leads
    window.gtag('event', `form_submission_${type.toLowerCase()}`, {
      event_category: 'Lead',
      event_label: window.location.pathname,
      source: gclid ? 'google_ads' : 'organic',
      value: value
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
