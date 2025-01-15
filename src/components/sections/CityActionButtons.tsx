'use client';

import { 
  CalculatorIcon, 
  PhoneIcon,
  UserIcon,
  EnvelopeIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CityActionButtons = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus('idle');
    setFormData({
      fullName: '',
      email: '',
      phone: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const startDateTime = new Date();
      startDateTime.setHours(startDateTime.getHours() + 1);
      const endDateTime = new Date(startDateTime);
      endDateTime.setHours(endDateTime.getHours() + 1);

      const eventData = {
        summary: `Rendez-vous avec ${formData.fullName}`,
        description: `Contact: ${formData.phone}\nEmail: ${formData.email}`,
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
        attendeeEmail: formData.email,
        location: 'À définir'
      };

      const calendarResponse = await fetch('/api/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const calendarData = await calendarResponse.json();
      
      if (!calendarResponse.ok) {
        throw new Error(calendarData.error || 'Erreur lors de la création du rendez-vous');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: ''
      });
      router.push('/merci');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-section="city-hero"]');
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowButtons(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Boutons d'action fixes en haut - Mobile uniquement */}
      <div 
        className={`
          block md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg border-b z-50
          transition-transform duration-300
          ${showButtons ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <Link 
            href="/simulator"
            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold py-2 rounded-lg mx-2"
          >
            <CalculatorIcon className="w-5 h-5" />
            <span>Simulation</span>
          </Link>
          <button
            onClick={openModal}
            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-semibold py-2 rounded-lg mx-2"
          >
            <PhoneIcon className="w-5 h-5" />
            <span>Nous Contacter</span>
          </button>
        </div>
      </div>

      {/* Modal Contact avec Formulaire */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-FFDF64/20 mb-4">
                <UserIcon className="w-8 h-8 text-FFDF64" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Contactez-nous</h3>
              <p className="text-gray-600 mt-2">
                Laissez-nous vos coordonnées et nous vous recontacterons rapidement
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-FFDF64 focus:border-transparent"
                  placeholder="Jean Dupont"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-FFDF64 focus:border-transparent"
                  placeholder="jean@exemple.fr"
                />
              </div>

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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-FFDF64 focus:border-transparent"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-4 rounded-lg text-black font-semibold
                  ${isSubmitting 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-br from-ffeb99 to-ffb700 hover:shadow-lg'}
                  transition-all duration-300
                `}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center mt-4">
                  Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center mt-4">
                  Une erreur est survenue. Veuillez réessayer plus tard.
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CityActionButtons;
