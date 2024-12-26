'use client';

import { 
  SunIcon, 
  BoltIcon, 
  BanknotesIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';

interface CitySolarAdvantagesProps {
  advantages: string[];
}

const CitySolarAdvantages = ({ advantages }: CitySolarAdvantagesProps) => {
  const icons = [
    SunIcon,
    BoltIcon,
    BanknotesIcon,
    ArrowTrendingUpIcon,
    ShieldCheckIcon
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <SunIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Avantages Solaires
            </h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Découvrez les avantages spécifiques de l'installation de panneaux solaires dans votre ville.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-FFDF64/20 rounded-full">
                    <Icon className="w-6 h-6 text-FFDF64" />
                  </div>
                  <p className="text-gray-700">{advantage}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Résultats */}
        <div className="mt-12 bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl">
          <div className="flex items-center justify-center space-x-6">
            <ShieldCheckIcon className="w-12 h-12 text-black" />
            <div>
              <h4 className="text-2xl font-bold text-black mb-3">
                Bénéfices à Long Terme
              </h4>
              <ul className="text-black/80 list-disc list-inside text-lg">
                <li>Valorisation de votre bien immobilier</li>
                <li>Accès direct aux aides et subventions</li>
                <li>Technologie 100% renouvelable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link 
            href="/simulator"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ffb700 to-ffeb99 text-black font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-lg group"
          >
            Simulez vos économies dès maintenant
            <ArrowTrendingUpIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CitySolarAdvantages;
