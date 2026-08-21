'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface CablageReseauModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CablageReseauModal({ isOpen, onClose }: CablageReseauModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Veuillez renseigner votre nom, email et numéro de téléphone.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: 'CABLAGE_RESEAU',
          source: 'cablage-reseau-fibre-pro',
          notes: `Demande de devis Réseau Pro - Entreprise: ${formData.company || 'Non renseigné'} - Projet: ${formData.message || 'Non précisé'}`
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'enregistrement de votre demande.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Erreur soumission lead:', err);
      // Fallback gracieux en local ou si base injoignable
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setError(null);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleResetAndClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all flex flex-col md:flex-row relative">
                {/* Image latérale gauche Pro */}
                <div className="relative w-full md:w-5/12 min-h-[160px] md:min-h-auto hidden md:block bg-gray-900">
                  <Image
                    src="/images/cablage-reseau-pro.jpg"
                    alt="Câblage réseau et fibre optique"
                    fill
                    className="object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffb700] mb-1">
                      Expertise B2B PACA
                    </span>
                    <h4 className="text-base font-bold leading-snug">
                      Câblage structuré & Raccordement Fibre
                    </h4>
                    <p className="text-xs text-gray-300 mt-1">
                      Audit sur site et certification Fluke sous 48h.
                    </p>
                  </div>
                </div>

                {/* Formulaire droit */}
                <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-[#116290]/10 text-[#116290] rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
                        <span>Devis Gratuit & Sans Engagement</span>
                      </div>
                      <Dialog.Title as="h3" className="text-xl sm:text-2xl font-extrabold text-gray-950 leading-tight">
                        Estimer mon projet Réseau
                      </Dialog.Title>
                      <p className="text-xs text-gray-500 mt-1">
                        Un chargé d'affaires vous recontacte sous 24h avec un chiffrage précis.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
                      onClick={handleResetAndClose}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-green-100 mb-4">
                        <CheckCircleIcon className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Demande bien reçue !</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Merci <span className="font-semibold text-gray-900">{formData.name}</span>. Notre équipe technique prépare l'analyse de votre besoin et vous contactera très rapidement.
                      </p>
                      <button
                        onClick={handleResetAndClose}
                        className="px-6 py-2.5 bg-[#116290] text-white font-bold rounded-xl text-xs hover:bg-[#116290]/90 transition-all"
                      >
                        Fermer
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-xl text-xs">
                          {error}
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ex: Sophie Martin"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 focus:ring-2 focus:ring-[#116290] focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Email pro *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="sophie@entreprise.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 focus:ring-2 focus:ring-[#116290] focus:border-transparent outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Téléphone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="06 12 34 56 78"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 focus:ring-2 focus:ring-[#116290] focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Entreprise / Ville <span className="text-gray-400 font-normal">(facultatif)</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Ex: SAS Tech Sud - Aix-en-Provence"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 focus:ring-2 focus:ring-[#116290] focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Votre projet / message <span className="text-gray-400 font-normal">(facultatif)</span>
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre besoin : nombre de prises RJ45, liaison fibre, locaux, baie de brassage..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 focus:ring-2 focus:ring-[#116290] focus:border-transparent outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-gradient-to-br from-ffeb99 to-ffb700 hover:shadow-lg text-black font-extrabold rounded-xl text-xs flex items-center justify-center space-x-2 transition-all active:scale-[0.98] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Envoi en cours...</span>
                        ) : (
                          <>
                            <span>Demander mon estimation gratuite</span>
                            <ArrowRightIcon className="h-4 w-4 ml-1" />
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-gray-400 text-center">
                        🔒 Vos données restent strictement confidentielles. Zéro spam.
                      </p>
                    </form>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
