import { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Devis Panneaux Solaires | Divisez par 2 votre facture d\'électricité',
  description: 'Demandez un devis gratuit pour l\'installation de panneaux solaires et divisez par 2 votre facture d\'électricité. Installation par des professionnels certifiés RGE.',
};

export default function DevisPanneauxSolairesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Google Ads Tag - Chargé avec stratégie "lazyOnload" pour ne pas bloquer le rendu */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16817660787"
        strategy="lazyOnload"
      />
      <Script id="google-ads-config" strategy="lazyOnload">
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
