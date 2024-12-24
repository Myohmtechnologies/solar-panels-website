'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

  return (
    <>
      <div className="relative flex flex-col md:block">
        {/* Vidéo de fond */}
        <div className='relative h-[60vh] md:h-screen min-h-[400px] w-full overflow-hidden'>
          <div className="absolute inset-0 rounded-b-[50px] overflow-hidden">
            <video 
              src="/images/video-hero-section.mp4"
              poster="/images/video-hero-section-poster.jpg"
              autoPlay 
              loop 
              muted 
              playsInline
              preload="none"
              className="w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/images/video-hero-section.mp4" type="video/mp4" />
              <source src="/images/video-hero-section.webm" type="video/webm" />
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
                Économisez avec l&apos;énergie solaire
              </h1>
              <p className="text-gray-600 text-base mb-4">
                Découvrez votre potentiel d&apos;économies ou contactez un expert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Simulation d'économies */}
              <button 
                onClick={() => router.push('/simulator')}
                className="group bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center"
              >
                <div className="flex items-center text-black justify-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm4.5 4a.5.5 0 11-1 0 .5.5 0 011 0z" />
                  </svg>
                  <span className="font-semibold">Simuler mes économies</span>
                </div>
              </button>

              {/* Contacter un spécialiste */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg border border-primary text-primary rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center"
              >
                <div className="flex items-center text-black justify-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">Contacter un expert</span>
                </div>
              </button>
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

      {/* Modal de contact */}
      {isModalOpen && (
        <ContactModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default HeroSection;
