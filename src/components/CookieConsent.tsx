'use client';

import { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import { SunIcon, ShieldCheckIcon, CogIcon } from '@heroicons/react/24/outline';

interface ConsentSettings {
  ad_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
  analytics_storage: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentSettings>({
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
    analytics_storage: false,
  });

  useEffect(() => {
    // Vérifier si le consentement existe déjà
    const existingConsent = getCookie('cookie-consent');
    if (!existingConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
      analytics_storage: true,
    };
    updateConsent(newConsent);
  };

  const handleDenyAll = () => {
    const newConsent = {
      ad_storage: false,
      ad_user_data: false,
      ad_personalization: false,
      analytics_storage: false,
    };
    updateConsent(newConsent);
  };

  const updateConsent = (newConsent: ConsentSettings) => {
    setConsent(newConsent);
    setCookie('cookie-consent', JSON.stringify(newConsent), {
      maxAge: 365 * 24 * 60 * 60, // 1 an
    });

    // Mettre à jour Google Tag Manager avec les nouveaux paramètres
    window.gtag('consent', 'update', {
      ad_storage: newConsent.ad_storage ? 'granted' : 'denied',
      ad_user_data: newConsent.ad_user_data ? 'granted' : 'denied',
      ad_personalization: newConsent.ad_personalization ? 'granted' : 'denied',
      analytics_storage: newConsent.analytics_storage ? 'granted' : 'denied',
    });

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-white to-primary-50 shadow-xl z-50 border-t-2 border-primary-300">
      <div className="max-w-7xl mx-auto p-4">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <SunIcon className="w-8 h-8 text-primary-500" />
              <div>
                <p className="text-sm text-gray-600">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1 transition-colors"
              >
                <CogIcon className="w-4 h-4" />
                Personnaliser
              </button>
              <button
                onClick={handleDenyAll}
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium bg-gradient-to-br from-ffeb99 to-ffb700 text-black hover:from-primary-500 hover:to-secondary-dark rounded-lg shadow-sm transition-all"
              >
                Accepter
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-3">
              <ShieldCheckIcon className="w-5 h-5 text-secondary-DEFAULT" />
              <h3 className="font-bold text-gray-800">Préférences des cookies</h3>
            </div>
            <div className="space-y-3 bg-white p-4 rounded-lg">
              {Object.entries(consent).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) =>
                          setConsent((prev) => ({
                            ...prev,
                            [key]: e.target.checked,
                          }))
                        }
                        className="sr-only"
                      />
                      <div className={`w-10 h-5 ${value ? 'bg-primary-400' : 'bg-gray-200'} rounded-full transition-colors`}>
                        <div className={`absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform ${value ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {key === 'ad_storage' && 'Cookies publicitaires'}
                      {key === 'ad_user_data' && 'Données utilisateur pour la publicité'}
                      {key === 'ad_personalization' && 'Personnalisation des annonces'}
                      {key === 'analytics_storage' && 'Analyse du trafic'}
                    </span>
                  </label>
                  <span className="text-xs text-gray-500">
                    {key === 'ad_storage' && 'Pour vous montrer des publicités pertinentes'}
                    {key === 'ad_user_data' && 'Pour améliorer les annonces que vous voyez'}
                    {key === 'ad_personalization' && 'Pour adapter le contenu à vos intérêts'}
                    {key === 'analytics_storage' && 'Pour comprendre comment vous utilisez notre site'}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Retour
              </button>
              <button
                onClick={() => updateConsent(consent)}
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary-400 to-secondary-DEFAULT text-black hover:from-primary-500 hover:to-secondary-dark rounded-lg shadow-sm transition-all"
              >
                Enregistrer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
