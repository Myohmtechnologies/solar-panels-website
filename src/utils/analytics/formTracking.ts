// Utilitaires de tracking pour les formulaires
import { trackWithUTM } from './utmTracking';

export const formTracking = {
  // Track quand le formulaire est affiché
  trackFormView: () => {
    trackWithUTM('form_view', {
      'event_category': 'Form',
      'event_label': 'QuickLeadForm',
      'form_name': 'quick_lead',
      'page_location': window.location.pathname
    });
  },

  // Track les interactions avec les champs
  trackFieldInteraction: (fieldName: string) => {
    trackWithUTM('field_interaction', {
      'event_category': 'Form',
      'event_label': fieldName,
      'form_name': 'quick_lead',
      'page_location': window.location.pathname
    });
  },

  // Track la soumission du formulaire
  trackFormSubmission: (success: boolean) => {
    trackWithUTM(success ? 'form_submission_success' : 'form_submission_error', {
      'event_category': 'Form',
      'event_label': 'QuickLeadForm',
      'form_name': 'quick_lead',
      'page_location': window.location.pathname
    });
  },

  // Track le temps passé sur le formulaire
  trackFormTime: (timeInSeconds: number) => {
    trackWithUTM('form_time', {
      'event_category': 'Form',
      'event_label': 'QuickLeadForm',
      'form_name': 'quick_lead',
      'time_spent': timeInSeconds,
      'page_location': window.location.pathname
    });
  }
};
