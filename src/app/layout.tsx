import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics, GoogleTagManagerHead, GoogleTagManagerBody } from '@/components/analytics';
import './globals.css';
import CookieConsent from '@/components/common/CookieConsent';
import ClientLayout from '@/components/layout/ClientLayout';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.myohmtechnologies.com'),
  title: 'MY OHM Technologies - Solutions Solaires Innovantes',
  description: 'MY OHM Technologies propose des solutions solaires sur mesure pour les particuliers et les entreprises. Réduisez votre empreinte carbone et maîtrisez votre consommation énergétique.',
  openGraph: {
    title: 'MY OHM Technologies - Solutions Solaires Innovantes',
    description: 'MY OHM Technologies propose des solutions solaires sur mesure pour les particuliers et les entreprises.',
    url: 'https://www.myohmtechnologies.com',
    siteName: 'MY OHM Technologies',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MY OHM Technologies - Solutions Solaires Innovantes',
    description: 'MY OHM Technologies propose des solutions solaires sur mesure pour les particuliers et les entreprises.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'bshllqo6MIhoBv2oLuo-5lh9FzoXSYWFaQmCOzx62rA',
  },
};

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Remplacez par votre ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Vérifier si nous sommes sur une page d'erreur
  const isErrorPage = children?.toString().includes('error') || children?.toString().includes('not-found');

  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <GoogleTagManagerHead />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Configuration par défaut - consentement requis
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });

              // Initialisation de Google Analytics
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '8901812203206149');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=8901812203206149&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-screen bg-white">
        <GoogleTagManagerBody />
        <GoogleAnalytics />
        {isErrorPage ? (
          <div className="flex min-h-screen flex-col bg-gray-50">
            {children}
          </div>
        ) : (
          <ClientLayout>{children}</ClientLayout>
        )}
        <CookieConsent />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
