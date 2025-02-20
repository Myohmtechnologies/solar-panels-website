'use client';

import { useState, useEffect } from 'react';
import { trackConversion } from '../tracking/ConversionTracker';
import { formAnalytics } from '../../services/formAnalytics';

export default function QuickLeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Track la vue du formulaire au chargement
  useEffect(() => {
    formAnalytics.trackFormView('quick_lead_form');
    
    // Track l'abandon du formulaire
    const handleBeforeUnload = () => {
      if (Object.values(formData).some(value => value !== '')) {
        formAnalytics.trackFormAbandonment('quick_lead_form');
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formData]);

  const handleFieldFocus = (fieldName: string) => {
    formAnalytics.trackFieldFocus('quick_lead_form', fieldName);
  };

  const handleFieldBlur = (fieldName: string, value: string) => {
    formAnalytics.trackFieldBlur('quick_lead_form', fieldName, value.length > 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Envoie des données à l'API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          notes: formData.message || '',
          source: 'QUICK_FORM',
          projectType: 'SOLAR_PANELS',
          createdAt: new Date(),
          status: 'NEW'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }

      // Track la conversion
      trackConversion();
      formAnalytics.trackFormSubmission('quick_lead_form', true);

      // Track la conversion Google Ads
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16817660787/bCJ6CKu725gaEPPGpNM-'
        });
      }

      // Réinitialisation du formulaire
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Erreur:', error);
      formAnalytics.trackFormSubmission('quick_lead_form', false, error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
          onFocus={() => handleFieldFocus('fullName')}
          onBlur={(e) => handleFieldBlur('fullName', e.target.value)}
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-FFDF64 bg-white/10 text-white placeholder-white/70"
          placeholder="Nom complet"
        />
      </div>
      <div>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          onFocus={() => handleFieldFocus('email')}
          onBlur={(e) => handleFieldBlur('email', e.target.value)}
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-FFDF64 bg-white/10 text-white placeholder-white/70"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          onFocus={() => handleFieldFocus('phone')}
          onBlur={(e) => handleFieldBlur('phone', e.target.value)}
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-FFDF64 bg-white/10 text-white placeholder-white/70"
          placeholder="Téléphone"
        />
      </div>
      <div>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          onFocus={() => handleFieldFocus('message')}
          onBlur={(e) => handleFieldBlur('message', e.target.value)}
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-FFDF64 bg-white/10 text-white placeholder-white/70"
          placeholder="Message (optionnel)"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-FFDF64 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
      >
        Demander un devis gratuit
      </button>
    </form>
  );
}
