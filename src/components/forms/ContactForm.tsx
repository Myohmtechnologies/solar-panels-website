"use client";

import { useState, useEffect } from 'react';
import { contactFormEvents } from '@/utils/analytics';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  city: string;
}

const ContactForm = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Track when user starts filling the form
    if (Object.values(formData).every(val => val === '')) {
      contactFormEvents.formStart();
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'CONTACT_FORM',
          projectType: 'SOLAR_PANELS',
          notes: formData.message
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create lead');
      }

      // Track successful form submission
      contactFormEvents.formSubmit(true);
      
      setSubmitStatus('success');
      toast.success('Votre message a bien été envoyé ! Nous vous recontacterons rapidement.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        city: ''
      });

      // Redirection vers la page de remerciement
      router.push('/merci');
    } catch (error) {
      // Track form submission error
      contactFormEvents.formSubmit(false);
      contactFormEvents.formError('api_error');
      setSubmitStatus('error');
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ffb700 focus:ring-ffb700 sm:text-sm"
          placeholder="Jean Dupont"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ffb700 focus:ring-ffb700 sm:text-sm"
          placeholder="jean.dupont@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Téléphone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ffb700 focus:ring-ffb700 sm:text-sm"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          Ville
        </label>
        <input
          type="text"
          name="city"
          id="city"
          required
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ffb700 focus:ring-ffb700 sm:text-sm"
          placeholder="Paris"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message (optionnel)
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ffb700 focus:ring-ffb700 sm:text-sm"
          placeholder="Votre message..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gradient-to-br from-ffeb99 to-ffb700 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ffb700 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>

      {submitStatus === 'success' && (
        <p className="mt-2 text-sm text-green-600">
          Message envoyé avec succès ! Nous vous recontacterons rapidement.
        </p>
      )}

      {submitStatus === 'error' && (
        <p className="mt-2 text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
