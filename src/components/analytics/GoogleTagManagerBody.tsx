'use client';

import Script from 'next/script';

export default function GoogleTagManagerBody() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
