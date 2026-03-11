import { isInternalTraffic } from './trafficFilter';

declare global {
  interface Window {
    fbq: any;
    gtag: any;
  }
}

type EventParams = {
  [key: string]: string | number | boolean;
};

// Configuration des événements personnalisés
export const ANALYTICS_EVENTS = {
  SCROLL_DEPTH: 'scroll_depth',
  CHATBOT_INTERACTION: 'chatbot_interaction',
  SIMULATION_START: 'simulation_start',
  SIMULATION_COMPLETE: 'simulation_complete',
  CONTACT_FORM_OPEN: 'contact_form_open',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  PHONE_CLICK: 'phone_click',
  CTA_CLICK: 'cta_click',
  TIME_ON_PAGE: 'time_on_page',
  CITY_PAGE_VIEW: 'city_page_view',
} as const;

const isTeamMember = (): boolean => {
  return localStorage.getItem('teamMember') === 'true';
};

const getTeamEmail = (): string | null => {
  return localStorage.getItem('teamEmail');
};

export const trackEvent = (
  eventName: string,
  params?: EventParams
) => {
  try {
    const teamMember = isTeamMember();
    const teamEmail = getTeamEmail();
    
    // Track with Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, {
        ...params,
        timestamp: new Date().toISOString(),
        page_location: window.location.href,
        page_title: document.title,
        traffic_type: teamMember ? 'team' : 'external',
        team_member: teamMember,
        team_email: teamEmail,
        event_source: teamMember ? 'team_action' : 'user_action'
      });
    }

    // Track with Facebook Pixel (only external traffic)
    if (window.fbq && !teamMember) {
      window.fbq('track', eventName, params);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Suivi des vues de pages
export const trackPageView = (path: string) => {
  const cityName = extractCityFromPath(path);
  trackEvent('page_view', { 
    page_path: path,
    city: cityName || 'general',
    referrer: document.referrer
  });
  
  if (cityName) {
    trackEvent(ANALYTICS_EVENTS.CITY_PAGE_VIEW, {
      city_name: cityName,
      source: getTrafficSource()
    });
  }
};

// Suivi du scroll
export const trackScrollDepth = (depth: number) => {
  trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, {
    scroll_depth: depth,
    page_path: window.location.pathname
  });
};

// Suivi du chatbot
export const trackChatbotInteraction = (action: string, messageContent?: string) => {
  trackEvent(ANALYTICS_EVENTS.CHATBOT_INTERACTION, {
    action_type: action,
    chat_session_id: generateSessionId(),
    message_type: messageContent ? 'user_message' : 'system_message'
  });
};

// Suivi des simulations
export const trackSimulationStart = (source: string) => {
  trackEvent(ANALYTICS_EVENTS.SIMULATION_START, {
    simulation_source: source,
    device_type: getDeviceType()
  });
};

export const trackSimulationComplete = (data: any) => {
  trackEvent(ANALYTICS_EVENTS.SIMULATION_COMPLETE, {
    ...data,
    completion_time: new Date().toISOString(),
    time_spent: calculateTimeSpent()
  });
};

// Suivi des formulaires de contact
export const trackContactFormOpen = (formType: string) => {
  trackEvent(ANALYTICS_EVENTS.CONTACT_FORM_OPEN, {
    form_type: formType
  });
};

export const trackContactFormSubmit = (formType: string, success: boolean) => {
  trackEvent(ANALYTICS_EVENTS.CONTACT_FORM_SUBMIT, {
    form_type: formType,
    success: success
  });
};

// Suivi des clics sur les CTA
export const trackCTAClick = (ctaId: string, ctaText: string) => {
  trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
    cta_id: ctaId,
    cta_text: ctaText,
    page_location: window.location.pathname
  });
};

// Fonctions utilitaires
const extractCityFromPath = (path: string): string | null => {
  const cityRegex = /\/(aix|marseille|nice|toulon|manosque|draguignan)/i;
  const match = path.match(cityRegex);
  return match ? match[1].toLowerCase() : null;
};

const getTrafficSource = (): string => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('utm_source') || 'direct';
};

const generateSessionId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

const calculateTimeSpent = (): number => {
  const startTime = sessionStorage.getItem('pageLoadTime');
  if (!startTime) return 0;
  return Math.floor((Date.now() - parseInt(startTime)) / 1000);
};
