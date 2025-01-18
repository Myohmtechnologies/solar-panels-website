import { trackEvent } from './analytics';

export interface TrafficSource {
  type: string;
  medium: string;
  campaign: string;
  city: string;
  landingPage: string;
}

export const getTrafficSource = (): TrafficSource => {
  const params = new URLSearchParams(window.location.search);
  
  // Détection du trafic organique vs payant
  const isOrganic = document.referrer.includes('google.com') && !params.has('gclid');
  const isPaid = params.has('gclid');
  
  return {
    type: params.get('utm_source') || (isOrganic ? 'organic' : (isPaid ? 'paid' : 'direct')),
    medium: params.get('utm_medium') || (isPaid ? 'cpc' : 'none'),
    campaign: params.get('utm_campaign') || 'none',
    city: params.get('utm_content') || 'none',
    landingPage: window.location.pathname
  };
};

export const trackUserSource = () => {
  const source = getTrafficSource();
  
  trackEvent('user_source', {
    traffic_source: source.type,
    traffic_medium: source.medium,
    campaign_name: source.campaign,
    campaign_city: source.city,
    landing_page: source.landingPage,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  });

  return source;
};

export const trackConversion = (conversionType: string, value: number = 1.0) => {
  const source = getTrafficSource();
  
  // Google Ads conversion tracking
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-16817660787',
      value: value,
      currency: 'EUR',
      traffic_source: source.type,
      campaign_city: source.city,
      conversion_type: conversionType
    });
  }

  // GA4 conversion tracking
  trackEvent('conversion', {
    conversion_type: conversionType,
    traffic_source: source.type,
    traffic_medium: source.medium,
    campaign_name: source.campaign,
    campaign_city: source.city,
    landing_page: source.landingPage,
    value: value,
    currency: 'EUR'
  });
};
