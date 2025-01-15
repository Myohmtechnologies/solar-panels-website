import Cookies from 'js-cookie';

const CONSENT_COOKIE_NAME = 'analytics-consent';
const CONSENT_DURATION = 365; // jours

export const setCookieConsent = (consent: boolean) => {
  Cookies.set(CONSENT_COOKIE_NAME, consent.toString(), {
    expires: CONSENT_DURATION,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  });
};

export const getCookieConsent = (): boolean | undefined => {
  const consent = Cookies.get(CONSENT_COOKIE_NAME);
  return consent ? consent === 'true' : undefined;
};

export const removeCookieConsent = () => {
  Cookies.remove(CONSENT_COOKIE_NAME);
};
