'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitLead } from '@/services/leadService';

interface LeadFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
  source: 'hero' | 'simulator';
  cityName: string;
  estimations?: {
    production?: number;
    totalAnnualSavings?: number;
    systemSize?: number;
  };
}

export default function LeadForm({ onSuccess, onError, source, cityName, estimations }: LeadFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        ...formData,
        city: cityName,
        source,
        estimations
      });

      if (result.success) {
        onSuccess();
        setFormData({ fullName: '', email: '', phone: '' });
        router.push('/merci');
      } else {
        onError(result.error || "Une erreur s'est produite");
      }
    } catch (error) {
      onError("Une erreur inattendue s'est produite");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-FFDF64 focus:outline-none focus:ring-1 focus:ring-FFDF64"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-FFDF64 focus:outline-none focus:ring-1 focus:ring-FFDF64"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Numéro de téléphone
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-FFDF64 focus:outline-none focus:ring-1 focus:ring-FFDF64"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>
    </form>
  );
}
