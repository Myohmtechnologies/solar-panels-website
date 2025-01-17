'use client';

import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';

export const useConsent = () => {
  const [hasConsent, setHasConsent] = useState({
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
    analytics_storage: false,
  });

  useEffect(() => {
    const cookieConsent = getCookie('cookie-consent');
    if (cookieConsent) {
      try {
        const parsedConsent = JSON.parse(cookieConsent as string);
        setHasConsent(parsedConsent);
      } catch (e) {
        console.error('Error parsing consent cookie:', e);
      }
    }
  }, []);

  return hasConsent;
};

export default useConsent;
