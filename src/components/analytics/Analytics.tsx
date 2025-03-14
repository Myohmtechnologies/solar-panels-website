'use client';

import { GTM } from './GTM';
import CookieConsent from '@/components/CookieConsent';

export default function Analytics() {
  return (
    <>
      <GTM />
      <CookieConsent />
    </>
  );
}
