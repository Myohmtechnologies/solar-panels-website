'use client';

import { useEffect } from 'react';
import { initializeGA4Configuration } from '@/utils/ga4-init';

export default function GA4Initialize() {
  useEffect(() => {
    initializeGA4Configuration();
  }, []);

  return null;
}
