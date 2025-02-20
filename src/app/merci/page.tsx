'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Script from 'next/script';

export default function MerciPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Vérification que l'utilisateur vient bien d'un formulaire
    const source = searchParams.get('source');
    const isValidSource = source === 'quick_form' || source === 'simulator';
    const hasLeadInfo = sessionStorage.getItem('leadInfo') !== null;
    const gclid = searchParams.get('gclid');

    // Si pas de source valide ou pas d'info de lead, on redirige vers la page d'accueil
    if (!isValidSource || !hasLeadInfo) {
      router.push('/');
      return;
    }

    if (typeof window !== 'undefined' && window.gtag) {
      // Si l'utilisateur vient de Google Ads (présence du gclid)
      if (gclid) {
        // Conversion Google Ads
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16817660787/bCJ6CKu725gaEPPGpNM-',
          'value': 1.0,
          'currency': 'EUR'
        });
      }

      // Dans tous les cas, on track une conversion dans Google Analytics
      window.gtag('event', 'generate_lead', {
        'event_category': 'Conversion',
        'event_label': source,
        'value': 1.0,
        'source': gclid ? 'google_ads' : (searchParams.get('utm_source') || 'direct')
      });

      // Debug mode - à retirer en production
      console.log('Debug Conversion :', {
        type: gclid ? 'Google Ads + Analytics' : 'Analytics only',
        gclid: gclid,
        source: source,
        leadInfo: sessionStorage.getItem('leadInfo'),
        hasGtag: true
      });
    }

    // Nettoyage du sessionStorage après avoir tracké la conversion
    sessionStorage.removeItem('leadInfo');
  }, [searchParams, router]);

  return (
    <>
      {/* Script de conversion Google Ads - ne s'active que si gclid est présent */}
      {searchParams.get('gclid') && (
        <Script id="google-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
                'send_to': 'AW-16817660787/bCJ6CKu725gaEPPGpNM-',
                'value': 1.0,
                'currency': 'EUR'
            });
          `}
        </Script>
      )}

      <div className="min-h-screen bg-gradient-to-b from-[#d7f0fc] to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#116290] mb-6">
              Merci pour votre confiance !
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Notre équipe d'experts va étudier votre projet et vous recontacter dans les plus brefs délais.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#d7f0fc]">
              <h2 className="text-2xl font-semibold text-[#116290] mb-4">
                Prochaines étapes
              </h2>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb700] flex items-center justify-center text-white font-bold">1</span>
                  <span>Étude personnalisée de votre projet par nos experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb700] flex items-center justify-center text-white font-bold">2</span>
                  <span>Contact sous 24h pour discuter des détails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb700] flex items-center justify-center text-white font-bold">3</span>
                  <span>Proposition d'une solution adaptée à vos besoins</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}