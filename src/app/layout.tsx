import React from 'react';
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

const ConversionTracker = dynamic(() => import('@/components/tracking/ConversionTracker'), { 
  ssr: false 
});

const TrackingInitializer = dynamic(() => import('@/components/tracking/TrackingInitializer'), { ssr: false });
const TeamAuth = dynamic(() => import('@/components/admin/TeamAuth'), { ssr: false });
const Analytics = dynamic(() => import('@/components/analytics/Analytics'), { ssr: false });

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
  openGraph: {
    title: 'MY OHM Technologies - Installation de panneaux solaires',
    description: 'Installation de panneaux solaires sur mesure pour les particuliers et les entreprises.',
    url: 'https://www.myohmtechnologies.com',
    siteName: 'MY OHM Technologies',
    images: [
      {
        url: 'https://www.myohmtechnologies.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MY OHM Technologies - Installation de panneaux solaires',
    description: 'Installation de panneaux solaires sur mesure pour les particuliers et les entreprises.',
    images: ['https://www.myohmtechnologies.com/og-image.jpg'],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans min-h-screen bg-white">
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16817660787"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16817660787');
          `}
        </Script>

        <ClientLayout>
          <Toaster position="top-center" />
          {children}
        </ClientLayout>

        <Analytics />
        <TrackingInitializer />
        <TeamAuth />
      </body>
    </html>
  );
}
