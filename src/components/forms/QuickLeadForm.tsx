'use client';

import { useState, useEffect } from 'react';
import { conversionEvents } from '@/utils/analytics';
import { trackConversion } from '../tracking/ConversionTracker';
import { formTracking } from '@/utils/analytics/formTracking';

export default function QuickLeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [startTime] = useState(Date.now());

  // Track la vue du formulaire au chargement
  useEffect(() => {
    formTracking.trackFormView();
  }, []);

  const handleFieldFocus = (fieldName: string) => {
    formTracking.trackFieldInteraction(fieldName);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Track le temps passé sur le formulaire
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      formTracking.trackFormTime(timeSpent);

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
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      // Stocker les infos du lead pour la page de remerciement
      const leadInfo = {
        name: formData.fullName
      };
      sessionStorage.setItem('leadInfo', JSON.stringify(leadInfo));

      // Track la conversion
      trackConversion();
      formTracking.trackFormSubmission(true);

      // Track la conversion Google Ads
      if (typeof window !== 'undefined' && window.gtag) {
        console.log('🔍 Sending Google Ads conversion...');
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16817660787/bCJ6CKu725gaEPPGpNM-',
          'value': 1.0,
          'currency': 'EUR'
        });
        console.log('✅ Google Ads conversion sent');
      } else {
        console.error('❌ Google Ads tracking not available');
      }

      // Redirection vers la page de remerciement
      window.location.href = '/merci';
    } catch (error) {
      console.error('Error submitting form:', error);
      formTracking.trackFormSubmission(false);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Nom complet"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          onFocus={() => handleFieldFocus('fullName')}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onFocus={() => handleFieldFocus('email')}
        />
        
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          onFocus={() => handleFieldFocus('phone')}
        />
      </div>
      
      <div>
        <textarea
          name="message"
          placeholder="Message (optionnel)"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => handleFieldFocus('message')}
        />
      </div>
      
      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Obtenir mon devis gratuit
      </button>
      
      <p className="text-xs text-gray-500 text-center">
        Un expert vous contactera rapidement pour étudier votre projet
      </p>
    </form>
  );
}
