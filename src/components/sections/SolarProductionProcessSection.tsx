'use client';

import Image from 'next/image';
import { 
  SunIcon, 
  BoltIcon 
} from '@heroicons/react/24/solid';

export default function SolarProductionProcessSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
          <Image
            src='/images/autoconsomation.webp'
            alt="Processus de production d&apos;énergie solaire"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Production d&apos;Énergie Solaire</h3>
              <p className="text-sm">Le processus de transformation lumière-électricité</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <SunIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Comment Produire de l&apos;Énergie Solaire ?
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-3">
                <h3 className="text-xl font-semibold text-gray-800">Cellules Photovoltaïques</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Le fonctionnement d&apos;un panneau solaire est assuré par les cellules photovoltaïques contenues dans les panneaux, chargées de capter cette lumière pour la transformer en énergie : le courant continu.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-3">
                <BoltIcon className="w-10 h-10 text-FFDF64" />
                <h3 className="text-xl font-semibold text-gray-800">Conversion d&apos;Énergie</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                L&apos;onduleur central, ou les micro-onduleurs, convertissent ce courant continu en courant alternatif, envoyé directement aux appareils électriques de votre logement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <SunIcon className="w-10 h-10 text-black" />
              <div>
                <h4 className="font-bold text-black">Résumé du Processus</h4>
                <ul className="text-black/80 list-disc list-inside">
                  <li>Captation de la lumière solaire</li>
                  <li>Transformation en courant continu</li>
                  <li>Conversion en courant alternatif</li>
                </ul>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Comprendre la Technologie
          </button>
        </div>
      </div>
    </section>
  );
}
