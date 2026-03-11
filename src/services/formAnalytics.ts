import { trackEvent } from './analytics';

interface FormAnalyticsData {
  formId: string;
  formStep?: number;
  totalSteps?: number;
  fieldName?: string;
  timeSpent?: number;
  isComplete?: boolean;
  error?: string;
  source?: string;
}

class FormAnalytics {
  private startTime: number = Date.now();
  private lastInteractionTime: number = Date.now();
  private formInteractions: Set<string> = new Set();
  private currentStep: number = 1;

  trackFormView(formId: string, totalSteps?: number, source?: string) {
    this.startTime = Date.now();
    trackEvent('form_view', {
      form_id: formId,
      total_steps: totalSteps,
      source: source || this.getTrafficSource()
    });
  }

  trackFieldFocus(formId: string, fieldName: string) {
    if (!this.formInteractions.has(fieldName)) {
      this.formInteractions.add(fieldName);
      this.lastInteractionTime = Date.now();
      
      trackEvent('form_field_focus', {
        form_id: formId,
        field_name: fieldName,
        step: this.currentStep,
        is_first_interaction: true
      });
    }
  }

  trackFieldBlur(formId: string, fieldName: string, hasValue: boolean) {
    const timeSpent = Math.floor((Date.now() - this.lastInteractionTime) / 1000);
    
    trackEvent('form_field_blur', {
      form_id: formId,
      field_name: fieldName,
      has_value: hasValue,
      time_spent: timeSpent,
      step: this.currentStep
    });
  }

  trackStepComplete(formId: string, step: number, totalSteps: number) {
    this.currentStep = step + 1;
    const timeSpent = Math.floor((Date.now() - this.startTime) / 1000);
    
    trackEvent('form_step_complete', {
      form_id: formId,
      step_number: step,
      total_steps: totalSteps,
      time_spent: timeSpent
    });
  }

  trackFormAbandonment(formId: string, lastFieldInteracted?: string) {
    const timeSpent = Math.floor((Date.now() - this.startTime) / 1000);
    const completedFields = Array.from(this.formInteractions);
    
    trackEvent('form_abandonment', {
      form_id: formId,
      last_field: lastFieldInteracted,
      completed_fields: completedFields.join(','),
      time_spent: timeSpent,
      step: this.currentStep
    });
  }

  trackFormSubmission(formId: string, success: boolean, error?: string) {
    const timeSpent = Math.floor((Date.now() - this.startTime) / 1000);
    const completedFields = Array.from(this.formInteractions);
    
    trackEvent('form_submission', {
      form_id: formId,
      success: success,
      error: error,
      completed_fields: completedFields.join(','),
      time_spent: timeSpent,
      step: this.currentStep
    });
  }

  private getTrafficSource(): string {
    if (typeof window === 'undefined') return 'direct';
    
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid');
    const utm_source = urlParams.get('utm_source');
    
    if (gclid) return 'google_ads';
    if (utm_source) return utm_source;
    if (document.referrer) return new URL(document.referrer).hostname;
    return 'direct';
  }
}

export const formAnalytics = new FormAnalytics();
