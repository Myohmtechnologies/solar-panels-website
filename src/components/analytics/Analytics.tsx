'use client';

import { GTM } from './GTM';
import CookieConsent from './CookieConsent';

export default function Analytics() {
  return (
    <>
      <GTM />
      <CookieConsent />
    </>
  );
}
