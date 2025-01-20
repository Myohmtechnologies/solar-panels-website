import { GA4_REPORTS, GA4_EXPLORATIONS, GA4_DASHBOARDS, GA4_ALERTS, GA4_SEGMENTS } from './ga4-reports';

export const initializeGA4Configuration = () => {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Configuration de base
  gtag('config', 'G-ET19PN3YHF', {
    cookie_flags: 'secure;samesite=none',
    custom_map: {
      'dimension1': 'traffic_source',
      'dimension2': 'traffic_medium',
      'dimension3': 'campaign_city',
      'dimension4': 'landing_page',
      'dimension5': 'user_intent'
    }
  });

  // Configuration des événements personnalisés
  const customEvents = [
    {
      name: 'simulator_start',
      parameters: ['simulator_type', 'campaign_city', 'traffic_source']
    },
    {
      name: 'simulator_complete',
      parameters: ['simulator_type', 'campaign_city', 'conversion_value']
    },
    {
      name: 'lead_form_submit',
      parameters: ['traffic_source', 'campaign_city', 'conversion_value']
    }
  ];

  customEvents.forEach(event => {
    gtag('event', 'set', {
      'custom_definitions': [{
        'name': event.name,
        'parameters': event.parameters
      }]
    });
  });

  // Configuration des conversions
  const conversionEvents = [
    {
      name: 'lead_form_submit',
      value: 75
    },
    {
      name: 'simulator_complete',
      value: 50
    },
    {
      name: 'thank_you_page',
      value: 100
    }
  ];

  conversionEvents.forEach(event => {
    gtag('event', 'set', {
      'conversion_definitions': [{
        'name': event.name,
        'value': event.value
      }]
    });
  });
};

// Fonction pour envoyer des événements enrichis
export const sendEnrichedEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const enrichedParameters = {
    ...parameters,
    traffic_source: parameters.traffic_source || getTrafficSource(),
    campaign_city: parameters.campaign_city || getCampaignCity(),
    timestamp: new Date().toISOString()
  };

  gtag('event', eventName, enrichedParameters);
};

// Fonction utilitaire pour obtenir la source de trafic
const getTrafficSource = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('gclid')) return 'paid';
  if (document.referrer.includes('google.com')) return 'organic';
  return 'direct';
};

// Fonction utilitaire pour obtenir la ville de la campagne
const getCampaignCity = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('utm_content') || 'unknown';
};
