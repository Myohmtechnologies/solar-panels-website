'use client';

import Image from 'next/image';
import { 
  SparklesIcon, 
  BoltIcon, 
  ServerIcon 
} from '@heroicons/react/24/solid';

export default function SolarTechnologySection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <ServerIcon className="w-8 h-8 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Notre Technologie Solaire
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Panneau Solaire */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <SparklesIcon className="w-10 h-10 text-FFDF64 group-hover:animate-pulse" />
                <h3 className="text-2xl font-semibold text-gray-800">Panneau Solaire</h3>
              </div>
              <div className="bg-FFDF64/20 p-2 rounded-full">
                <span className="text-sm font-bold text-FFDF64">500W</span>
              </div>
            </div>
            
            <div className="mb-4 relative overflow-hidden rounded-xl">
              <Image 
                src="/images/panneau-solaire-500w.png" 
                alt="Panneau solaire My Ohm" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-f9fafb p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <BoltIcon className="w-5 h-5 mr-2 text-FFDF64" />
                  Caractéristiques Principales
                </h4>
                <ul className="text-gray-700 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-FFDF64 rounded-full"></span>
                    Rendement : 22.5%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-FFDF64 rounded-full"></span>
                    Technologie : Monocristallin
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-FFDF64 rounded-full"></span>
                    Garantie : 25 ans
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Micro-onduleur */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <BoltIcon className="w-10 h-10 text-FFDF64 group-hover:animate-pulse" />
                <h3 className="text-2xl font-semibold text-gray-800">Micro-onduleur</h3>
              </div>
              <div className="bg-FFDF64/20 p-2 rounded-full">
                <span className="text-sm font-bold text-FFDF64">500W</span>
              </div>
            </div>
            
            <div className="mb-4 relative overflow-hidden rounded-xl">
              <Image 
                src="/images/enphase-iq8p.png" 
                alt="Micro-onduleur My Ohm" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-f9fafb p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <SparklesIcon className="w-5 h-5 mr-2 text-FFDF64" />
                  Caractéristiques Principales
                </h4>
                <ul className="text-gray-700 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-FFDF64 rounded-full"></span>
                    Efficacité de conversion : 97%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-FFDF64 rounded-full"></span>
                    Communication : Wifi intégré
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-FFDF64 rounded-full"></span>
                    Garantie : 15 ans
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl mt-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h4 className="font-bold text-black text-2xl mb-4">Technologie de Pointe</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="bg-black/10 p-3 rounded-xl">
                <SparklesIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <ServerIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <BoltIcon className="w-8 h-8 text-black" />
              </div>
            </div>
            <ul className="text-black/80 space-y-2 max-w-xl mx-auto">
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Performance optimale garantie
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Technologie de pointe et innovante
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Fiabilité et durabilité exceptionnelles
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="relative px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group">
            <span className="relative z-10">En Savoir Plus</span>
            <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
