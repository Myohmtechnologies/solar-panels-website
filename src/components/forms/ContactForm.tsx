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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          source: 'CONTACT_FORM',
          projectType: 'SOLAR_PANELS',
          notes: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setSubmitStatus('success');
      contactFormEvents.formSubmit(true);
      toast.success('Votre message a été envoyé avec succès !');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        city: ''
      });

      // Redirect to thank you page
      router.push('/merci');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      contactFormEvents.formSubmit(false);
      contactFormEvents.formError('api_error');
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Téléphone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          Ville *
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
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
