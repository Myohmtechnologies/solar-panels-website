'use client';

import { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';

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
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                Nous utilisons des cookies pour améliorer votre expérience et mesurer l'audience de notre site. 
                Vous pouvez choisir d'accepter uniquement les cookies nécessaires ou personnaliser vos préférences.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Personnaliser
              </button>
              <button
                onClick={handleDenyAll}
                className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
              >
                Refuser tout
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-AFC97E text-white hover:bg-6C8D2F rounded"
              >
                Accepter tout
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-bold">Préférences des cookies</h3>
            <div className="space-y-2">
              {Object.entries(consent).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setConsent((prev) => ({
                          ...prev,
                          [key]: e.target.checked,
                        }))
                      }
                      className="rounded"
                    />
                    <span className="text-sm">
                      {key === 'ad_storage' && 'Cookies publicitaires'}
                      {key === 'ad_user_data' && 'Données utilisateur pour la publicité'}
                      {key === 'ad_personalization' && 'Personnalisation des annonces'}
                      {key === 'analytics_storage' && 'Analyse du trafic'}
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Retour
              </button>
              <button
                onClick={() => updateConsent(consent)}
                className="px-4 py-2 text-sm bg-AFC97E text-white hover:bg-6C8D2F rounded"
              >
                Enregistrer les préférences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
