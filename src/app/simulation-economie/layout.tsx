import React from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import '../globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Simulation d\'économies avec des panneaux solaires | Myohm Technologies',
  description: 'Calculez vos économies potentielles en installant des panneaux solaires. Simulation gratuite et sans engagement.',
};

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans min-h-screen bg-white">
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

      <Toaster position="top-center" />
      {children}
    </div>
  );
}
