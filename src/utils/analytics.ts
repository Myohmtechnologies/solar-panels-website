// Fonction pour envoyer des événements à Google Analytics
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  try {
    if (!window.gtag) {
      console.warn('Google Analytics not loaded');
      return;
    }

    // Vérifier la connexion Internet
    if (!navigator.onLine) {
      console.warn('No internet connection, event tracking queued');
      // Optionnel : stocker l'événement pour le renvoyer plus tard
      queueEvent(eventName, eventParams);
      return;
    }

    window.gtag('event', eventName, {
      ...eventParams,
      send_to: 'G-ET19PN3YHF'
    });
  } catch (error) {
    console.warn('Error tracking event:', error);
  }
};

// File d'attente pour les événements hors ligne
const eventQueue: Array<{ name: string; params: Record<string, any>; timestamp: number }> = [];

const queueEvent = (eventName: string, eventParams: Record<string, any>) => {
  eventQueue.push({
    name: eventName,
    params: eventParams,
    timestamp: Date.now()
  });
};

// Réessayer d'envoyer les événements en file d'attente quand la connexion est rétablie
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    while (eventQueue.length > 0) {
      const event = eventQueue.shift();
      if (event) {
        trackEvent(event.name, event.params);
      }
    }
  });
}

// 1. Événements de navigation
export const navigationEvents = {
  pageView: (page: string) => trackEvent('page_view', {
    page_path: page,
    timestamp: new Date().toISOString()
  }),
};

// 2. Événements d'engagement
export const engagementEvents = {
  ctaClick: (buttonName: string, location: string) => trackEvent('cta_click', {
    button_name: buttonName,
    location,
    timestamp: new Date().toISOString(),
  }),
  videoInteraction: (action: 'play' | 'pause' | 'complete', videoId: string) => trackEvent('video_interaction', {
    action,
    video_id: videoId,
    timestamp: new Date().toISOString(),
  }),
  documentDownload: (documentName: string) => trackEvent('document_download', {
    document_name: documentName,
    timestamp: new Date().toISOString(),
  }),
  conversionIntent: (intentType: string, additionalData?: Record<string, any>) => trackEvent('conversion_intent', {
    intent_type: intentType,
    timestamp: new Date().toISOString(),
    ...additionalData
  }),
};

// 3. Événements du formulaire de contact
export const contactFormEvents = {
  formStart: () => trackEvent('contact_form_start'),
  formSubmit: (success: boolean, subject: string) => trackEvent('contact_form_submit', {
    success,
    subject,
    timestamp: new Date().toISOString(),
  }),
  formError: (errorType: string) => trackEvent('contact_form_error', {
    error_type: errorType,
    timestamp: new Date().toISOString(),
  }),
};

// 4. Événements du simulateur
export type SimulatorStep = 'property_type' | 'energy_bill' | 'equipment' | 'contact';

export const simulatorEvents = {
  simulatorStart: (source: string) => trackEvent('simulator_start', {
    source,
    timestamp: new Date().toISOString()
  }),

  stepView: (step: SimulatorStep) => trackEvent('simulator_step_view', {
    step,
    timestamp: new Date().toISOString()
  }),

  stepComplete: (step: SimulatorStep, data: Record<string, any>) => trackEvent('simulator_step_complete', {
    step,
    ...data,
    timestamp: new Date().toISOString()
  }),

  equipmentSelected: (equipment: string[]) => trackEvent('simulator_equipment_selected', {
    equipment,
    timestamp: new Date().toISOString()
  }),

  stepAbandoned: (step: SimulatorStep) => trackEvent('simulator_step_abandoned', {
    step_name: step,
    timestamp: new Date().toISOString(),
  }),

  simulatorComplete: (data: {
    property_type: string,
    energy_bill: string,
    equipment: string[],
    success: boolean
  }) => trackEvent('simulator_complete', {
    ...data,
    timestamp: new Date().toISOString(),
  }),
};

// 5. Événements de contact téléphonique
export const phoneEvents = {
  phoneClick: (location: string) => trackEvent('phone_number_click', {
    location,
    timestamp: new Date().toISOString(),
  }),
  callDuration: (duration: number) => trackEvent('call_duration', {
    duration_seconds: duration,
    timestamp: new Date().toISOString(),
  }),
};

// 6. Événements commerciaux
export const commercialEvents = {
  promotionView: (promotionId: string) => trackEvent('promotion_view', {
    promotion_id: promotionId,
    timestamp: new Date().toISOString(),
  }),
  promotionClick: (promotionId: string) => trackEvent('promotion_click', {
    promotion_id: promotionId,
    timestamp: new Date().toISOString(),
  }),
  regionSelect: (region: string) => trackEvent('region_select', {
    region,
    timestamp: new Date().toISOString(),
  }),
};

// 7. Événements techniques
export const technicalEvents = {
  errorOccurred: (errorType: string, errorMessage: string) => trackEvent('error_occurred', {
    error_type: errorType,
    error_message: errorMessage,
    timestamp: new Date().toISOString(),
  }),
  performanceMetric: (metricName: string, value: number) => trackEvent('performance_metric', {
    metric_name: metricName,
    value,
    timestamp: new Date().toISOString(),
  }),
  performanceMeasure: (metric: string, value: number) => trackEvent('performance_measure', {
    metric_name: metric,
    value,
    page_path: window.location.pathname
  }),
  jsError: (error: Error, componentName?: string) => trackEvent('js_error', {
    error_message: error.message,
    error_stack: error.stack,
    component: componentName,
    page_path: window.location.pathname
  })
};

// 8. Événements de conversion
export const conversionEvents = {
  simulatorConversion: (step: 'start' | 'complete' | 'thank_you_page', data?: Record<string, any>) => trackEvent('simulator_conversion', {
    step,
    ...data,
    value: data?.estimatedValue || 0,
    currency: 'EUR',
    conversion_type: 'simulator',
  }),

  leadGenerated: (source: string, value: number) => {
    // Envoyer l'événement à Google Analytics
    trackEvent('lead_generated', {
      source,
      value,
      currency: 'EUR',
      conversion_type: 'lead',
      user_type: 'prospect',
    });

    // Envoyer l'événement de conversion à Google Ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-1681766d787/899-677-7088',
        'value': value,
        'currency': 'EUR'
      });
    }
  },

  quoteRequested: (serviceType: string, location: string) => trackEvent('quote_requested', {
    service_type: serviceType,
    location,
    conversion_type: 'quote',
    timestamp: new Date().toISOString(),
  }),

  projectStarted: (projectType: string, budget: number) => trackEvent('project_started', {
    project_type: projectType,
    budget,
    currency: 'EUR',
    conversion_type: 'project',
    timestamp: new Date().toISOString(),
  }),

  appointmentScheduled: (date: string, type: string) => trackEvent('appointment_scheduled', {
    appointment_date: date,
    appointment_type: type,
    conversion_type: 'appointment',
    value: type === 'technical_visit' ? 150 : 100,
    currency: 'EUR',
  }),

  expertContactConversion: (conversionType: 'phone_click' | 'form_submit', source: string) => trackEvent('expert_contact', {
    conversion_type: conversionType,
    source,
    value: conversionType === 'phone_click' ? 50 : 75,
    currency: 'EUR',
  }),

  documentDownload: (documentName: string, documentType: string) => trackEvent('document_download', {
    document_name: documentName,
    document_type: documentType,
    conversion_type: 'download',
    value: 25,
    currency: 'EUR',
  }),
};

// 9. Événements de formulaire
export const formEvents = {
  formAbandoned: (formName: string, lastFieldCompleted: string) => trackEvent('form_abandoned', {
    form_name: formName,
    last_field: lastFieldCompleted,
    time_spent: document.getElementById(formName)?.dataset.startTime 
      ? Date.now() - parseInt(document.getElementById(formName)?.dataset.startTime || '0')
      : 0
  }),

  formProgress: (formName: string, currentStep: number, totalSteps: number) => trackEvent('form_progress', {
    form_name: formName,
    current_step: currentStep,
    total_steps: totalSteps,
    progress_percentage: Math.round((currentStep / totalSteps) * 100),
    timestamp: new Date().toISOString()
  }),

  formError: (errorType: string) => trackEvent('form_error', {
    error_type: errorType,
    timestamp: new Date().toISOString()
  })
};

export const loadAnalytics = () => {
  // Load GTM
  const loadGTM = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID);
  };

  // Load Facebook Pixel
  const loadFBPixel = () => {
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  };

  // Load scripts after page load
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      // Delay analytics load
      setTimeout(() => {
        loadGTM();
        loadFBPixel();
      }, 2000);
    });
  }
};
