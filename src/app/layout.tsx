import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Chargement différé des composants non-critiques
const ClientLayout = dynamic(() => import('@/components/layout/ClientLayout'), { 
  ssr: false,
  loading: () => <div className="min-h-screen" /> 
});

const OptimizedGTM = dynamic(() => import('@/components/analytics/OptimizedGTM'), { 
  ssr: false 
});

const ScrollTracker = dynamic(() => import('@/components/analytics/ScrollTracker'), { 
  ssr: false 
});

const ConversionTracker = dynamic(() => import('@/components/tracking/ConversionTracker'), { 
  ssr: false 
});

const GA4Initialize = dynamic(() => import('@/components/analytics/GA4Initialize'), { ssr: false });
const TrackingInitializer = dynamic(() => import('@/components/tracking/TrackingInitializer'), { ssr: false });
const TeamAuth = dynamic(() => import('@/components/admin/TeamAuth'), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.myohmtechnologies.com'),
  title: 'MY OHM Technologies - Entreprise d\'installation de panneaux solaires',
  description: 'MY OHM Technologies société d\'installation de panneaux solaires sur mesure pour les particuliers et les entreprises.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.myohmtechnologies.com',
  },
  verification: {
    google: 'bshllqo6MIhoBv2oLuo-5lh9FzoXSYWFaQmCOzx62rA',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'MY OHM Technologies - Entreprise d\'installation de panneaux solaire',
    description: 'MY OHM Technologies Société qui propose des solutions solaires sur mesure pour les particuliers et les entreprises.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/styles/critical.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="/styles/critical.css" />
        </noscript>
      </head>
      <body className="font-sans min-h-screen bg-white">
        <Toaster position="top-center" />
        <GA4Initialize />
        <ScrollTracker />
        <TrackingInitializer />
        <ConversionTracker />
        <TeamAuth />
        <ClientLayout>
          <OptimizedGTM />
          {children}
        </ClientLayout>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
