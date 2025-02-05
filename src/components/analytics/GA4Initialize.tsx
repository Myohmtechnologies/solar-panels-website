'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID;

const GA4Initialize = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      let url = window.origin + pathname;
      if (searchParams?.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        transport_type: 'beacon',
        debug_mode: false
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="gtag-base"
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
          `,
        }}
      />
      <Script
        id="gtag-load"
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              transport_type: 'beacon',
              debug_mode: false,
              send_page_view: false
            });
          `,
        }}
      />
      <Script
        id="gtm-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `
        }}
      />
    </>
  );
};

export default GA4Initialize;
