'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateLeadPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    source: 'WEBSITE',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du prospect');
      }

      router.push('/dashboard/leads');
      router.refresh();
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de la création du prospect');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 bg-gradient-to-r from-[#0B6291] to-[#0F7BB9] p-6 rounded-xl shadow-md text-white">
          <h1 className="text-2xl font-bold">Nouveau prospect</h1>
          <p className="mt-2 text-white/80">
            Remplissez les informations du nouveau prospect pour l'ajouter à votre base de données
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-8">
            <h2 className="text-lg font-medium text-[#0B6291] col-span-2 border-b border-gray-200 pb-2">Informations personnelles</h2>
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#0B6291] focus:outline-none focus:ring-[#0B6291] sm:text-sm transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#0B6291] focus:outline-none focus:ring-[#0B6291] sm:text-sm transition-all duration-200"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#0B6291] focus:outline-none focus:ring-[#0B6291] sm:text-sm transition-all duration-200"
              />
            </div>

            {/* Code postal */}
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                Code postal
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                required
                value={formData.postalCode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#0B6291] focus:outline-none focus:ring-[#0B6291] sm:text-sm transition-all duration-200"
              />
            </div>

            {/* Ville */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Ville
              </label>
              <input
                type="text"
                name="city"
                id="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#0B6291] focus:outline-none focus:ring-[#0B6291] sm:text-sm transition-all duration-200"
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium text-[#0B6291] border-b border-gray-200 pb-2 mb-4">Adresse</h2>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse complète
              </label>
              <input
                type="text"
                name="address"
                id="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#0B6291] focus:outline-none focus:ring-[#0B6291] sm:text-sm transition-all duration-200"
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium text-[#0B6291] border-b border-gray-200 pb-2 mb-4">Informations complémentaires</h2>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                id="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Ajoutez des informations complémentaires sur ce prospect..."
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#0B6291] focus:outline-none focus:ring-[#0B6291] sm:text-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Boutons */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0B6291] focus:ring-offset-2 transition-all duration-200"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-lg border border-transparent bg-gradient-to-r from-[#0B6291] to-[#0F7BB9] px-5 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0B6291] focus:ring-offset-2 transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Création en cours...
                </>
              ) : 'Créer le prospect'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
