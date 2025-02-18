'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface RequestQuoteProps {
  commercial: {
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
    location: string;
  };
}

export default function RequestQuoteSection({ commercial }: RequestQuoteProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Demander un devis gratuit
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card Commercial */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={commercial.image}
                  alt={commercial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{commercial.name}</h3>
              <p className="text-gray-600 mb-6">{commercial.role}</p>
              
              <div className="w-full space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <PhoneIcon className="w-5 h-5 text-FFDF64" />
                  <span>{commercial.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <EnvelopeIcon className="w-5 h-5 text-FFDF64" />
                  <span>{commercial.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPinIcon className="w-5 h-5 text-FFDF64" />
                  <span>{commercial.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-FFDF64 focus:border-transparent outline-none transition-all"
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
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-FFDF64 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-FFDF64 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-FFDF64 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-FFDF64 focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all"
              >
                Demander un devis gratuit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
