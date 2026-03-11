'use client';

import { useState, useEffect } from 'react';
import { formAnalytics } from '../../services/formAnalytics';
import Link from 'next/link';
import Image from 'next/image';

export default function QuickLeadForm() {
  const initialFormData = {
    fullName: '',
    email: '',
    phone: ''
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
          source: 'QUICK_FORM',
          projectType: 'SOLAR_PANELS',
          createdAt: new Date(),
          status: 'NEW'
        }),
      });

      if (response.ok) {
        // En mode debug ou avec gclid, on envoie la conversion
        const isDebugMode = window.location.href.includes('gtm_debug');
        const gclid = new URLSearchParams(window.location.search).get('gclid');
        
        console.log('Mode debug:', isDebugMode);
        console.log('GCLID:', gclid);

        if (typeof window !== 'undefined' && window.gtag) {
          // Envoyer la conversion en mode debug OU si gclid présent
          if (isDebugMode || gclid) {
            console.log('Envoi conversion pour test...');
            window.gtag('event', 'conversion', {
              'send_to': 'AW-16817660787/FFX8CKXqk6EaEPPGpNM-'
            });
            console.log('Conversion envoyée !');
          }
        }

        // Redirection avec délai pour debug
        setTimeout(() => {
          window.location.href = '/merci';
        }, 2000); // 2 secondes pour être sûr
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
          <input
            type="text"
            name="fullName"
            placeholder="Nom et prénom"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.fullName}
            onChange={handleInputChange}
            onFocus={() => handleFieldInteraction('fullName', 'focus')}
            onBlur={() => handleFieldInteraction('fullName', 'blur')}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => handleFieldInteraction('email', 'focus')}
            onBlur={() => handleFieldInteraction('email', 'blur')}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={() => handleFieldInteraction('phone', 'focus')}
            onBlur={() => handleFieldInteraction('phone', 'blur')}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          Recevoir mes prix et aides 2025
        </button>
      </form>
    </div>
  );
}
