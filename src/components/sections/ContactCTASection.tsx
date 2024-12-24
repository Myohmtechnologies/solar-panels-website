'use client';

import { 
  EnvelopeIcon, 
  PhoneIcon, 
  UserIcon 
} from '@heroicons/react/24/solid';
import { useState } from 'react';

const ContactCTASection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de soumission du formulaire à implémenter
    console.log('Form submitted', formData);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <EnvelopeIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Contactez-nous
            </h2>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Prêt à faire le premier pas vers une énergie solaire ? Remplissez ce formulaire et notre équipe vous recontactera rapidement pour une étude personnalisée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte de motivation */}
          <div className="space-y-6 text-center md:text-left">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center md:items-start">
                <div className="p-4 bg-FFDF64/20 rounded-full mb-4">
                  <PhoneIcon className="w-10 h-10 text-FFDF64" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-AFC97E transition-colors">
                  Conseil Personnalisé
                </h3>
                <p className="text-gray-600 text-sm text-center md:text-left">
                  Notre équipe d&apos;experts est disponible pour répondre à toutes vos questions et vous guider dans votre projet solaire.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center md:items-start">
                <div className="p-4 bg-FFDF64/20 rounded-full mb-4">
                  <UserIcon className="w-10 h-10 text-FFDF64" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-AFC97E transition-colors">
                  Étude Sur Mesure
                </h3>
                <p className="text-gray-600 text-sm text-center md:text-left">
                  Nous analysons votre situation unique pour vous proposer la solution solaire la plus adaptée à vos besoins.
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form 
            onSubmit={handleSubmit} 
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label htmlFor="fullName" className="block text-gray-700 mb-2">Nom Complet</label>
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Numéro de Téléphone</label>
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-FFDF64"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Demander un Conseil Gratuit
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-12 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <EnvelopeIcon className="w-12 h-12 text-black mb-4" />
            <h4 className="font-bold text-black text-xl mb-2">Engagement Confidentialité</h4>
            <p className="text-black/80 max-w-xl">
              Vos données personnelles sont protégées. Nous nous engageons à les utiliser uniquement dans le cadre de votre projet solaire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
