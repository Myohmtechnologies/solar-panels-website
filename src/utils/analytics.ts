// Fonction pour envoyer des événements à Google Analytics
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', eventName, {
        ...eventParams,
        timestamp: new Date().toISOString(),
        debug_mode: process.env.NODE_ENV === 'development'
      });
    } catch (error) {
      console.error('Error tracking event:', error);
      technicalEvents.errorOccurred('analytics', `Failed to track event: ${eventName}`);
    }
  }
};

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
    conversion_step: step,
    conversion_value: step === 'complete' ? 50 : (step === 'thank_you_page' ? 100 : 0),
    timestamp: new Date().toISOString(),
    ...data
  }),

  leadGenerated: (source: string, value: number) => trackEvent('lead_generated', {
    source,
    lead_value: value,
    timestamp: new Date().toISOString()
  }),

  quoteRequested: (serviceType: string, location: string) => trackEvent('quote_requested', {
    service_type: serviceType,
    location,
    conversion: true
  }),

  projectStarted: (projectType: string, budget: number) => trackEvent('project_started', {
    project_type: projectType,
    budget,
    currency: 'EUR',
    conversion: true
  }),

  appointmentScheduled: (date: string, type: string) => trackEvent('appointment_scheduled', {
    appointment_date: date,
    appointment_type: type,
    conversion: true
  }),

  expertContactConversion: (conversionType: 'phone_click' | 'form_submit', source: string) => trackEvent('expert_contact_conversion', {
    conversion_type: conversionType,
    source,
    timestamp: new Date().toISOString(),
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
