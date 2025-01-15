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
