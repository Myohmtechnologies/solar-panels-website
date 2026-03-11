'use client';

import { 
  SunIcon, 
  LightBulbIcon,
  BoltIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const SolarPanelSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Panneau Solaire Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
          <Image 
            src="/images/panneau-solaire-500w.webp" 
            alt="Panneau Solaire Haute Performance" 
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <SunIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Panneaux Solaires Haute Performance
            </h2>
          </div>

          <p className="text-gray-700 text-lg">
            Nos panneaux solaires de dernière génération offrent une efficacité maximale pour une production d'énergie optimale.
          </p>

          <div className="grid gap-6">
            <div className="flex items-start space-x-4">
              <BoltIcon className="w-6 h-6 text-FFDF64 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Performance Optimale</h3>
                <p className="text-gray-600">Rendement énergétique supérieur pour une production maximale</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircleIcon className="w-6 h-6 text-FFDF64 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Durabilité Garantie</h3>
                <p className="text-gray-600">Résistance aux intempéries et garantie de 30 ans</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-12 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <LightBulbIcon className="w-12 h-12 text-black mb-4" />
              <h4 className="font-bold text-black text-xl mb-2">Notre Engagement</h4>
              <p className="text-black/80 max-w-xl">
                Un accompagnement personnalisé à chaque étape pour garantir la réussite de votre projet solaire.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/simulator"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Commencer Votre Projet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarPanelSection;
