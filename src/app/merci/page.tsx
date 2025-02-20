'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function MerciPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Vérification que l'utilisateur vient bien d'un formulaire
    const source = searchParams.get('source');
    const isValidSource = source === 'quick_form' || source === 'simulator';
    const hasLeadInfo = sessionStorage.getItem('leadInfo') !== null;

    // Si pas de source valide ou pas d'info de lead, on redirige vers la page d'accueil
    if (!isValidSource || !hasLeadInfo) {
      router.push('/');
      return;
    }

    // Track la conversion dans Google Ads seulement si le parcours est valide
    const gclid = searchParams.get('gclid');
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');

    if (typeof window !== 'undefined' && window.gtag) {
      // Conversion principale pour Google Ads
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16817660787/bCJ6CKu725gaEPPGpNM-',
        'value': 75.0,
        'currency': 'EUR',
        'transaction_id': new Date().getTime().toString(),
        'gclid': gclid || undefined,
        'source': source,
        'utm_source': utm_source || undefined,
        'utm_medium': utm_medium || undefined,
        'utm_campaign': utm_campaign || undefined
      });
    }

    // Nettoyage du sessionStorage après avoir tracké la conversion
    sessionStorage.removeItem('leadInfo');
  }, [searchParams, router]);

  return (
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
  );
}