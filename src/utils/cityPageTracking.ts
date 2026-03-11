import { trackEvent } from './analytics';
import { getTrafficSource } from './sourceTracking';

interface SimulatorInteraction {
  simulator_type: 'header' | 'integrated' | 'chatbot' | 'commercial';
  step: string;
  city: string;
  time_spent?: number;
  input_values?: Record<string, any>;
}

export const cityPageTracking = {
  // Track l'arrivée sur la page ville
  pageView: (city: string) => {
    const source = getTrafficSource();
    trackEvent('city_page_view', {
      city,
      traffic_source: source.type,
      traffic_medium: source.medium,
      campaign: source.campaign,
      landing_page: window.location.pathname,
      timestamp: new Date().toISOString()
    });
  },

  // Track le début d'utilisation d'un simulateur
  simulatorStart: (data: SimulatorInteraction) => {
    trackEvent('city_simulator_start', {
      ...data,
      timestamp: new Date().toISOString()
    });
  },

  // Track chaque étape du simulateur
  simulatorStep: (data: SimulatorInteraction) => {
    trackEvent('city_simulator_step', {
      ...data,
      timestamp: new Date().toISOString()
    });
  },

  // Track l'abandon du simulateur
  simulatorAbandonment: (data: SimulatorInteraction) => {
    trackEvent('city_simulator_abandonment', {
      ...data,
      timestamp: new Date().toISOString()
    });
  },

  // Track la complétion du simulateur
  simulatorComplete: (data: SimulatorInteraction & { 
    result_type: 'estimation' | 'contact' | 'quote';
    estimated_value?: number;
  }) => {
    trackEvent('city_simulator_complete', {
      ...data,
      timestamp: new Date().toISOString()
    });
  },

  // Track les interactions avec le chatbot
  chatbotInteraction: (data: {
    step: string;
    city: string;
    question: string;
    answer?: string;
    time_spent?: number;
  }) => {
    trackEvent('city_chatbot_interaction', {
      ...data,
      timestamp: new Date().toISOString()
    });
  },

  // Track les interactions avec le modal commercial
  commercialInteraction: (data: {
    action: 'open' | 'close' | 'phone_click' | 'form_submit';
    city: string;
    time_spent?: number;
    source?: string;
  }) => {
    trackEvent('city_commercial_interaction', {
      ...data,
      timestamp: new Date().toISOString()
    });
  }
};
