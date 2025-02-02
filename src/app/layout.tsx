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

const ClientLayout = dynamic(() => import('@/components/layout/ClientLayout'), { ssr: false });
const GA4Initialize = dynamic(() => import('@/components/analytics/GA4Initialize'), { ssr: false });
const TrackingInitializer = dynamic(() => import('@/components/tracking/TrackingInitializer'), { ssr: false });
const FacebookPixel = dynamic(() => import('@/components/analytics/FacebookPixel'), { ssr: false });
const ScrollTracker = dynamic(() => import('@/components/analytics/ScrollTracker'), { ssr: false });
const TeamAuth = dynamic(() => import('@/components/admin/TeamAuth'), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.myohmtechnologies.com'),
  title: 'MY OHM Technologies - Solutions Solaires Innovantes',
  description: 'MY OHM Technologies propose des solutions solaires sur mesure pour les particuliers et les entreprises.',
  verification: {
    google: 'bshllqo6MIhoBv2oLuo-5lh9FzoXSYWFaQmCOzx62rA',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
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
        <Script
          id="google-ads"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16817660787"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16817660787');
            `,
          }}
        />
        {/* Google Analytics */}
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ET19PN3YHF"
        />
        <Script
          id="ga-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET19PN3YHF', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Toaster position="top-center" />
        <GA4Initialize />
        <TrackingInitializer />
        <FacebookPixel />
        <ScrollTracker />
        <TeamAuth />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
