'use client';

import Image from 'next/image';
import { 
  ShieldCheckIcon, 
  SunIcon 
} from '@heroicons/react/24/solid';

const SolarPanelSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Panneau Solaire Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
          <Image 
            src="/images/panneau-solaire-500w.png" 
            alt="Panneau Solaire Full Black TOPCon" 
            width={800} 
            height={700} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Modules Photovoltaïques Full Black</h3>
              <p className="text-sm">Technologie de pointe pour votre installation</p>
            </div>
          </div>
        </div>

        {/* Détails du Panneau Solaire */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <SunIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Nos Panneaux Solaires
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Nos modules photovoltaïques Full Black représentent le summum de la technologie solaire moderne. Conçus avec des cellules monocristallines demi-rectangulaires utilisant la technologie TOPCon, ils offrent une performance et une esthétique inégalées.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
              <Image 
                src="/images/icons8-france-emoji-48.png" 
                alt="Drapeau Français" 
                width={32} 
                height={32} 
              />
              <div>
                <span className="font-semibold text-gray-800">Fabriqué en</span>
                <span className="ml-2 text-gray-800 font-bold">France</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
              <ShieldCheckIcon className="w-8 h-8 text-FFDF64" />
              <span className="font-semibold text-gray-800">Garantie 30 ans</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <ShieldCheckIcon className="w-10 h-10 text-black" />
              <div>
                <h4 className="font-bold text-black">Caractéristiques Techniques</h4>
                <ul className="text-black/80 list-disc list-inside">
                  <li>Technologie TOPCon avancée</li>
                  <li>Cellules monocristallines demi-rectangulaires</li>
                  <li>Design Full Black élégant</li>
                </ul>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Découvrir nos Panneaux
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolarPanelSection;
