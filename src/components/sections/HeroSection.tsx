'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, UserIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import CommercialContactModal from '../modals/CommercialContactModal';
import { engagementEvents, navigationEvents } from '@/utils/analytics';

// Hook personnalisé pour détecter le défilement
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // Set initial position

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

// Composant Modal de Contact
const ContactModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    callbackRequested: false
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-black font-bold">Contactez un Expert</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Nom Complet" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            <input 
              type="tel" 
              placeholder="Numéro de téléphone" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            <div className="flex text-black items-center">
              <input 
                type="checkbox" 
                id="callback"
                checked={formData.callbackRequested}
                onChange={(e) => setFormData({...formData, callbackRequested: e.target.checked})}
                className="mr-2"
              />
              <label htmlFor="callback">Être rappelé</label>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-black p-3 rounded-lg"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Ajout d'un élément de preuve sociale dynamique
const SocialProofBadge = () => (
  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg">
    <svg className="w-6 h-6 text-FFDF64" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span className="text-white font-semibold text-sm">+500 Installations</span>
  </div>
);

const HeroSection = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [heroHeight, setHeroHeight] = useState(0);

  // Référence pour mesurer la hauteur de la section héro
  const heroRef = (el: HTMLDivElement | null) => {
    if (el) {
      setHeroHeight(el.offsetHeight);
    }
  };

  const handleExpertContact = () => {
    // Événement de clic sur le bouton de contact expert
    window.gtag('event', 'cta_click', {
      'event_category': 'Hero Section',
      'event_label': 'Contact Expert',
      'page_path': window.location.pathname
    });

    // Événement personnalisé
    engagementEvents.ctaClick('contact_expert', 'hero_section');
    
    // Événement de conversion potentielle
    engagementEvents.conversionIntent('expert_contact_modal_open');
    
    setIsModalOpen(true);
  };

  const handleSimulatorClick = () => {
    // Événement de clic sur le bouton simulateur
    window.gtag('event', 'cta_click', {
      'event_category': 'Hero Section',
      'event_label': 'Simulateur Économies',
      'page_path': window.location.pathname
    });

    // Événement personnalisé
    engagementEvents.ctaClick('simulator', 'hero_section');
    
    // Événement de navigation
    navigationEvents.pageView('/simulator');
    
    // Événement de conversion potentielle
    engagementEvents.conversionIntent('simulator_access');
  };

  return (
    <>
      {/* Bandeau CTA mobile qui s'affiche après avoir dépassé la section héro */}
      {scrollPosition > heroHeight && (
        <div 
          className="fixed top-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-sm shadow-sm"
          onMouseEnter={() => {
            // Événement de visibilité du bandeau mobile
            window.gtag('event', 'mobile_cta_banner', {
              'event_category': 'Hero Section',
              'event_label': 'Banner Visibility',
              'scroll_position': scrollPosition
            });
          }}
        >
          <div className="grid grid-cols-2 gap-2 p-2 container mx-auto">
            <button
              onClick={handleExpertContact}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-black transition-all duration-200 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-lg"
            >
              <UserIcon className="w-4 h-4" />
              Contacter
            </button>

            <Link
              href="/simulator"
              onClick={handleSimulatorClick}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 bg-black rounded-lg"
            >
              <ChartBarIcon className="w-4 h-4" />
              Simuler
            </Link>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div ref={heroRef} className="relative flex flex-col md:block md:pt-0">
        {/* Vidéo de fond */}
        <div className='relative h-[50vh] md:h-screen min-h-[400px] w-full overflow-hidden'>
          <div className="absolute inset-0 overflow-hidden">
            <video 
              src="/images/720p.mp4"
              poster="/images/video-hero-section-poster.jpg"
              autoPlay 
              loop 
              muted 
              playsInline
              preload="none"
              className="w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/images/video-background.mp4" type="video/mp4" />
              <source src="/images/video-background.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative bg-white md:bg-transparent flex items-center px-4 md:px-8 lg:px-12 py-6 md:py-0 md:absolute md:inset-0">
          <div className="bg-light-yellow rounded-2xl p-6 md:p-8 max-w-xl backdrop-blur-sm w-full md:ml-[5%] shadow-2xl hover:scale-[1.02] transition-transform duration-300">
            {/* Ajout d'un élément d'urgence */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              Offre limitée
            </div>
            
            <div className="text-center mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Réduisez votre consommation d&apos;électricité jusqu&apos;à 70%
              </h1>
              <p className="text-gray-600 text-base mb-4">
                Découvrez votre potentiel d&apos;économies ou contactez un expert
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExpertContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-3xl"
              >
                <UserIcon className="w-5 h-5" />
                Contacter un expert
              </button>

              <Link
                href="/simulator"
                onClick={handleSimulatorClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#10618F] rounded-3xl"
              >
                <ChartBarIcon className="w-5 h-5" />
                Simulation des économies
              </Link>
            </div>

            {/* Détails */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Estimation en 2 min
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-AFC97E mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Gratuit et sans engagement
              </span>
            </div>

            {/* Note Google */}
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-500" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 mt-1">
                5/5 sur Google
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Contact Modal */}
      <CommercialContactModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        cityName="votre ville"
      />
    </>
  );
};

export default HeroSection;
