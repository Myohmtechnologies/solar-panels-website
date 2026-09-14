'use client';

import Script from 'next/script';

const META_PIXEL_ID = '1745307463666638';

/**
 * Pixel Meta (Facebook) chargé uniquement sur la page de remerciement (/merci).
 * Déclenche :
 *  - PageView : au chargement de la page
 *  - Lead     : conversion "lead" validée (page atteinte après soumission du formulaire)
 *
 * Les appels fbq() sont mis en file d'attente par le stub avant le chargement
 * de fbevents.js, donc l'ordre d'exécution est garanti.
 */
export default function MetaLeadPixel() {
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
            fbq('track', 'Lead');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
