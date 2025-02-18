'use client';

import { 
  ChatBubbleLeftRightIcon, 
  StarIcon,
  PlayCircleIcon 
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

const ClientTestimonialsSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Avis de nos clients
            </h2>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Découvrez les expériences réelles de nos clients qui ont transformé leur consommation énergétique grâce à My ohm technologies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Testimonials */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">
                  Une équipe attentive aux besoins du client, alliant professionnalisme et rigueur.
                  Le chantier à été laissé propre, et nous avons reçu des explications claires sur la gestion des panneaux photovoltaique.
                  Je recommande vivement My Ohm !
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-FFDF64/20 rounded-full flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-FFDF64" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Christelle Irénée</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">
                  J'ai fait installer une borne électrique, les techniciens qui sont intervenus sont très compétent avec toutes les explications nécessaires avant pendant et après les travaux. Je suis très satisfait je recommande cette entreprise
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-FFDF64/20 rounded-full flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-FFDF64" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Christian Sanegre</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Video */}
          <div className="flex justify-center">
            <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-[9/16]">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  loop
                  muted
                  autoPlay
                  src="https://res.cloudinary.com/dz5sry4jz/video/upload/v1737742571/MyOhm-Testimonial_sd8nwb.mp4"
                >
                  <source 
                    src="https://res.cloudinary.com/dz5sry4jz/video/upload/v1737742571/MyOhm-Testimonial_sd8nwb.mp4" 
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">
                  Bonne équipe, travail soigné et efficace. Tout a été fait comme prévu.
                  J'ai découvert qu'ils installent aussi des panneaux photovoltaïques, un projet que je prévois de réaliser bientôt.
                  Je n'hésiterai pas à les recontacter. Je recommande cette entreprise.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-FFDF64/20 rounded-full flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-FFDF64" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">MEVOUILLON Eliane</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">
                  Installation rapide et professionnelle. L'équipe a été très à l'écoute de nos besoins et nous a fourni un excellent service. Les panneaux fonctionnent parfaitement et nos factures d'électricité ont considérablement baissé.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-FFDF64/20 rounded-full flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-FFDF64" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Laurent Dupont</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-12 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-black mb-4" />
            <h4 className="font-bold text-black text-xl mb-2">Votre Satisfaction, Notre Motivation</h4>
            <p className="text-black/80 max-w-xl">
              Chaque témoignage nous pousse à améliorer constamment nos services et à vous offrir la meilleure expérience solaire possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;