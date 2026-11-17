'use client';

import { 
  EnvelopeIcon, 
  PhoneIcon, 
  UserIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

const ContactCTASection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: 'Demande depuis la page contact',
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l’envoi du message');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur lors de l’envoi du formulaire de contact:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="mb-3 inline-flex rounded-full bg-[#116290]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">Parlons de votre projet</span>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">Contactez notre équipe</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Une question ou un projet en tête ? Laissez-nous vos coordonnées, notre équipe locale vous recontactera pour vous conseiller.
          </p>
          <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700]" />
        </div>

        <div className="grid items-stretch overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_18px_55px_rgba(10,61,92,0.10)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0a3d5c] via-[#116290] to-[#0b5279] p-7 text-white sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[28px] border-white/5" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffdf64] to-[#ffb700] text-[#0a3d5c] shadow-lg">
                <EnvelopeIcon className="h-7 w-7" />
              </div>
              <h2 className="max-w-md text-2xl font-bold leading-tight sm:text-3xl">Un échange simple, un conseil adapté</h2>
              <p className="mt-4 max-w-lg leading-7 text-white/80">
                Décrivez-nous votre besoin. Nous prendrons le temps de comprendre votre situation et de vous orienter vers la bonne solution.
              </p>
              <ul className="mt-7 space-y-4">
                {['Une équipe de proximité basée à Manosque', 'Un accompagnement adapté à votre logement', 'Une réponse rapide à votre demande'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-white/90 sm:text-base">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-[#ffdf64]" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href="tel:+33492766858" className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15">
                <PhoneIcon className="h-5 w-5 flex-none text-[#ffdf64]" />
                <span><span className="block text-xs text-white/65">Appelez-nous</span><span className="font-semibold">04 92 76 68 58</span></span>
              </a>
              <a href="mailto:contact@myohmtechnologies.com" className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15">
                <EnvelopeIcon className="h-5 w-5 flex-none text-[#ffdf64]" />
                <span className="min-w-0"><span className="block text-xs text-white/65">Écrivez-nous</span><span className="block break-all text-sm font-semibold">contact@myohmtechnologies.com</span></span>
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form 
            onSubmit={handleSubmit} 
            className="space-y-5 bg-white p-6 sm:p-9 lg:p-10"
          >
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-[#102c40]">Envoyez-nous un message</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">Remplissez le formulaire, nous reviendrons vers vous rapidement.</p>
            </div>
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[#102c40]">Nom complet</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom et prénom"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/70 py-3 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#116290]/50 focus:bg-white focus:ring-4 focus:ring-[#116290]/10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#102c40]">Adresse e-mail</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/70 py-3 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#116290]/50 focus:bg-white focus:ring-4 focus:ring-[#116290]/10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#102c40]">Téléphone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/70 py-3 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#116290]/50 focus:bg-white focus:ring-4 focus:ring-[#116290]/10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#102c40]">Parlez-nous de votre projet</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Décrivez brièvement votre besoin…"
                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#116290]/50 focus:bg-white focus:ring-4 focus:ring-[#116290]/10"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-6 py-4 font-bold text-[#123c54] shadow-lg shadow-[#ffb700]/20 transition hover:-translate-y-0.5 hover:shadow-xl ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              {!isSubmitting && <ArrowRightIcon className="h-5 w-5" />}
            </button>
            
            {submitStatus === 'success' && (
              <div role="status" className="rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
                Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700">
                Une erreur est survenue. Veuillez réessayer plus tard.
              </div>
            )}
          </form>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 text-center text-sm text-gray-500">
          <ShieldCheckIcon className="h-5 w-5 flex-none text-[#116290]" />
          Vos coordonnées sont utilisées uniquement pour répondre à votre demande.
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
