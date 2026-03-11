import { useCallback } from 'react';

type AnalyticsEvent = {
  eventName: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useAnalytics = () => {
  const trackEvent = useCallback(({ eventName, ...params }: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
  }, []);

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  }, []);

  const trackConversion = useCallback((conversionId: string, label: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${conversionId}/${label}`,
        value: value,
        currency: 'EUR',
      });
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackConversion,
  };
};
