'use client';

import { useState, useEffect } from 'react';
import { formAnalytics } from '../../services/formAnalytics';
import Link from 'next/link';
import Image from 'next/image';

export default function QuickLeadForm() {
  const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFieldInteraction = (fieldName: string, interactionType: 'focus' | 'blur') => {
    if (interactionType === 'focus') {
      handleFieldFocus(fieldName);
    } else {
      handleFieldBlur(fieldName, formData[fieldName as keyof typeof formData]);
    }
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

      if (response.ok) {
        // Vérifier si c'est une visite Google Ads
        const gclid = new URLSearchParams(window.location.search).get('gclid');
        
        if (typeof window !== 'undefined' && window.gtag) {
          // Conversion Google Ads UNIQUEMENT si gclid présent
          if (gclid) {
            window.gtag('event', 'conversion', {
              'send_to': 'AW-16817660787/FFX8CKXqk6EaEPPGpNM-'
            });
            console.log('Conversion Google Ads envoyée');
          }
        }

        // Redirection vers la page merci
        window.location.href = '/merci';
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }

    } catch (error) {
      console.error('Erreur:', error);
      formAnalytics.trackFormSubmission('quick_lead_form', false, error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            onFocus={() => handleFieldInteraction('fullName', 'focus')}
            onBlur={() => handleFieldInteraction('fullName', 'blur')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => handleFieldInteraction('email', 'focus')}
            onBlur={() => handleFieldInteraction('email', 'blur')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={() => handleFieldInteraction('phone', 'focus')}
            onBlur={() => handleFieldInteraction('phone', 'blur')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onFocus={() => handleFieldInteraction('message', 'focus')}
            onBlur={() => handleFieldInteraction('message', 'blur')}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Demander un devis gratuit
        </button>

      </form>
    </div>
  );
}
