import React, { useState } from 'react';
import Image from 'next/image';

// Icons
const TechnologyIcon = () => (
  <Image 
    src="/images/panneau-solaire.png" 
    alt="Panneaux Solaires" 
    width={80} 
    height={80} 
    className="w-16 h-16 object-contain"
  />
);

const ShowroomIcon = () => (
  <Image 
    src="/images/onduleur.png" 
    alt="Micro-Onduleur" 
    width={80} 
    height={80} 
    className="w-16 h-16 object-contain"
  />
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-FFDF64">
    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 5.69 3.117A5.998 5.998 0 0 1 12 21a5.998 5.998 0 0 1-5.69-5.883ZM2.25 19.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM12 15.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18.75 16.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-FFDF64">
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A14.98 14.98 0 0 0 2.25 12c0 3.409 1.462 6.463 3.787 8.652a.75.75 0 0 0 .525.195 11.2 11.2 0 0 0 7.888-3.08.75.75 0 0 1 1.032 0c2.258 2.118 5.327 3.38 8.652 3.08a.75.75 0 0 0 .525-.195c2.325-2.189 3.787-5.243 3.787-8.652 0-1.517-.336-2.962-.943-4.235a.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08.75.75 0 0 0-1.032 0ZM9 6a.75.75 0 0 1 .75.75V11.25h4.5V6.75A.75.75 0 0 1 15 6a.75.75 0 0 1 .75.75v5.25h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5.25h-3v5.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5H8.25v-5.25A.75.75 0 0 1 9 6Z" clipRule="evenodd" />
  </svg>
);

// Logos
const MarquePrefereeLogo = () => (
  <Image 
    src="/images/marque-preferer-des-francais.png" 
    alt="Marque Préférée des Français" 
    width={80} 
    height={80} 
    className="w-16 h-16 object-contain"
  />
);

const FrenchFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60" className="w-8 h-6">
    <rect width="90" height="60" fill="white"/>
    <rect width="30" height="60" fill="#0055A4"/>
    <rect x="60" width="30" height="60" fill="#EF4135"/>
  </svg>
);

const USAFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60" className="w-8 h-6">
    <rect width="90" height="60" fill="#B22234"/>
    <rect width="90" height="6" y="0" fill="#B22234"/>
    <rect width="90" height="6" y="12" fill="white"/>
    <rect width="90" height="6" y="24" fill="#B22234"/>
    <rect width="90" height="6" y="36" fill="white"/>
    <rect width="90" height="6" y="48" fill="#B22234"/>
    <rect width="36" height="30" fill="#3C3B6E"/>
    <svg x="0" y="0" width="36" height="30" viewBox="0 0 50 30">
      <g fill="white">
        <polygon points="25,5 22.5,15 15,15 20.5,19 18,30 25,23 31.5,30 29,19 34.5,15 27.5,15"/>
      </g>
    </svg>
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" clipRule="evenodd" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" clipRule="evenodd" />
  </svg>
);

const WhyChooseSection = ({
  advantages = [
    'Réduction significative de vos factures d\'électricité',
    'Impact environnemental positif',
    'Valorisation de votre patrimoine immobilier'
  ],
  keyPoints = [
    'Installation rapide et sans travaux',
    'Maintenance minimale',
    'Technologie de pointe'
  ]
}: {
  advantages?: string[];
  keyPoints?: string[];
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      title: 'Technologie Solaire d\'Excellence',
      description: (
        <>
          <span className="block mb-2">
            Panneaux solaires <strong>élus Marque Préférée des Français</strong>
          </span>
          <span className="flex items-center space-x-2">
            <MarquePrefereeLogo />
            <FrenchFlagIcon />
            <span className="text-sm font-semibold">Made in France</span>
          </span>
          <span className="block mt-2 text-sm text-green-600 font-semibold">
            Garantie Matériel 30 Ans
          </span>
        </>
      ),
      icon: <TechnologyIcon />
    },
    {
      title: 'Micro-Onduleur de Pointe',
      description: (
        <>
          <span className="block mb-2">
            Leader mondial en technologie de micro-onduleurs
          </span>
          <span className="flex items-center space-x-2">
            <USAFlagIcon />
            <span className="text-sm font-semibold">Made in USA</span>
          </span>
          <span className="block mt-2 text-sm text-green-600 font-semibold">
            Garantie Matériel 30 Ans
          </span>
        </>
      ),
      icon: <ShowroomIcon />
    },
    {
      title: 'Support et Prix Compétitifs',
      description: 'Une équipe disponible en permanence pour vous accompagner, avec des prix très compétitifs et un service client à votre écoute tout au long de votre projet.',
      icon: <SupportIcon />
    }
   
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Pourquoi choisir MY OHM TECHNOLOGIES ?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Arguments Column */}
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-6 bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:border-FFDF64/50"
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-black">
                      {feature.title}
                    </h3>
                    <p className="text-black/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8 mt-8">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Nos avantages
              </h3>
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-3 mb-3">
                  <CheckIcon className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
            <div className="space-y-8 mt-8">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Nos points forts
              </h3>
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 mb-3">
                  <StarIcon className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Column */}
          <div className="relative">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
              {!isVideoPlaying ? (
                <>
                  <img 
                    src="/images/video-thumbnail.jpg" 
                    alt="MY OHM TECHNOLOGIES Présentation" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300"
                  >
                    <PlayIcon />
                  </button>
                </>
              ) : (
                <iframe 
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=0" 
                  title="MY OHM TECHNOLOGIES Présentation" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhyChooseSection };
