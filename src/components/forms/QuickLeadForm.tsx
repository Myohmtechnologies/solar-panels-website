'use client';

import { useState } from 'react';
import { conversionEvents } from '@/utils/analytics';

export default function QuickLeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    electricityBill: '',
    message: ''
  });

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
          energyBill: formData.electricityBill ? parseInt(formData.electricityBill) : null,
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
        name: formData.fullName,
        energyBill: formData.electricityBill
      };
      sessionStorage.setItem('leadInfo', JSON.stringify(leadInfo));

      // Track la conversion Google Ads
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16817660787/selKCIb6ypcaEPPGpNM',
          'value': 100.0,
          'currency': 'EUR',
          'transaction_id': new Date().getTime().toString()
        });
      }

      // Redirection vers la page de remerciement
      window.location.href = '/merci';
    } catch (error) {
      console.error('Error submitting form:', error);
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
        />
        
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <input
        type="number"
        name="electricityBill"
        placeholder="Montant facture électricité (€)"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        value={formData.electricityBill}
        onChange={(e) => setFormData({ ...formData, electricityBill: e.target.value })}
      />

      <textarea
        name="message"
        placeholder="Message (optionnel)"
        rows={2}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button
        type="submit"
        className="w-full py-3 px-6 text-black bg-gradient-solar hover:bg-green-700 rounded-lg font-semibold transition-colors duration-200"
      >
        Envoyer
      </button>
      
      <p className="text-xs text-gray-500 text-center">
        Un expert vous contactera rapidement pour étudier votre projet
      </p>
    </form>
  );
}
