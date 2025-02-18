'use client';

import Script from 'next/script'

export function GoogleTagManagerHead() {
  return (
    <Script
      id="google-tag-manager"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-TWZPVNSQ', {
            page_path: window.location.pathname,
            transport_type: 'beacon'
          });
        `
      }}
    />
  )
}

export function GoogleTagManagerBody() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TWZPVNSQ"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        loading="lazy"
      />
    </noscript>
  )
}
