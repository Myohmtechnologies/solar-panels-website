import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function SolarTechnologySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Notre Technologie de Pointe
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des équipements haut de gamme pour une performance optimale et une durabilité maximale
          </p>
        </div>

        <div className="space-y-16">
          {/* Panneaux Solaires */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/produit/panneau-solaire.jpeg"
                alt="Panneau solaire haute performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Panneaux Solaires Premium
                </h3>
                <p className="text-gray-600 mb-6">
                  Nos panneaux solaires haut de gamme garantissent une production optimale 
                  d'énergie tout en s'intégrant parfaitement à votre toiture.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-FFDF64" />
                  <span className="text-gray-700">Rendement exceptionnel de 82.5%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-FFDF64" />
                  <span className="text-gray-700">Garantie de 30 ans sur le produit et la production </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-FFDF64" />
                  <span className="text-gray-700">Résistance aux conditions extrêmes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Micro-onduleurs */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Micro-onduleurs Intelligents
                </h3>
                <p className="text-gray-600 mb-6">
                  La technologie de micro-onduleurs permet d'optimiser la production de chaque panneau 
                  individuellement et assure un suivi en temps réel.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-FFDF64" />
                  <span className="text-gray-700">Optimisation panneau par panneau</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-FFDF64" />
                  <span className="text-gray-700">Monitoring en temps réel</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-FFDF64" />
                  <span className="text-gray-700">Garantie étendue de 25 ans</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/produit/micro-onduleur.jpeg"
                alt="Micro-onduleur dernière génération"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
