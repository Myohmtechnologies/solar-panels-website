interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
}

export const getUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  const params: UTMParams = {};

  // Récupérer les paramètres UTM
  const utmParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid'
  ];

  utmParams.forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      params[param as keyof UTMParams] = value;
    }
  });

  return params;
};

export const trackWithUTM = (eventName: string, eventParams: any = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const utmParams = getUTMParams();
  
  window.gtag('event', eventName, {
    ...eventParams,
    utm_source: utmParams.utm_source || 'direct',
    utm_medium: utmParams.utm_medium || 'none',
    utm_campaign: utmParams.utm_campaign || 'none',
    utm_term: utmParams.utm_term || 'none',
    utm_content: utmParams.utm_content || 'none',
    gclid: utmParams.gclid || 'none',
    page_location: window.location.pathname,
    traffic_type: utmParams.gclid ? 'google_ads' : 'organic'
  });
};
