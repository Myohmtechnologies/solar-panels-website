'use client';

import { BoltIcon, HomeIcon, SunIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SolarPowerSectionProps {
  cityName: string;
  sunshineHours?: number;
}

interface PowerOption {
  title: string;
  power: string;
  surface: string;
  production: string;
  savings: string;
  icon: React.ComponentType<any>;
  description: string;
}

export default function SolarPowerSection({ cityName, sunshineHours = 2800 }: SolarPowerSectionProps) {
  const powerOptions: PowerOption[] = [
    {
      title: "Petite maison",
      power: "3 kWc",
      surface: "15 m²",
      production: "4 200 kWh/an",
      savings: "700€/an",
      icon: HomeIcon,
      description: "Idéal pour un couple ou une petite famille avec une consommation modérée"
    },
    {
      title: "Maison moyenne",
      power: "6 kWc",
      surface: "30 m²",
      production: "8 400 kWh/an",
      savings: "1 400€/an",
      icon: BoltIcon,
      description: "Parfait pour une famille de 4 personnes avec une consommation standard"
    },
    {
      title: "Grande maison",
      power: "9 kWc",
      surface: "45 m²",
      production: "12 600 kWh/an",
      savings: "2 100€/an",
      icon: ChartBarIcon,
      description: "Adapté aux grandes familles ou aux maisons très équipées"
    }
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <SunIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-4xl font-bold text-gray-900">
              Quelle puissance choisir pour ses panneaux solaires à {cityName} ?
            </h2>
          </div>
          <p className="text-2xl text-FFDF64 font-medium">
            Optimisez votre installation avec {sunshineHours} heures d'ensoleillement par an
          </p>
        </div>

        {/* Grille des options de puissance */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {powerOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
                  <option.icon className="w-6 h-6 text-FFDF64" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {option.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Puissance de l'installation</span>
                  <span className="font-semibold text-FFDF64">{option.power}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Surface du toit</span>
                  <span className="font-semibold text-gray-900">{option.surface}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Production</span>
                  <span className="font-semibold text-gray-900">{option.production}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Économies</span>
                  <span className="font-semibold text-FFDF64">{option.savings}</span>
                </div>
              </div>

              <p className="mt-4 text-gray-600">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section d'information supplémentaire */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
                <SunIcon className="w-6 h-6 text-FFDF64" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment choisir la bonne puissance ?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  La puissance idéale dépend de plusieurs facteurs : votre consommation électrique annuelle, 
                  la surface disponible sur votre toit, votre budget et vos objectifs d'autoconsommation. 
                  À {cityName}, avec {sunshineHours} heures d'ensoleillement par an, vous pouvez optimiser 
                  votre production solaire.
                </p>
                <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-4">
                  <ul className="space-y-3 text-black/80">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      <span>Étude personnalisée de votre consommation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      <span>Analyse de l'orientation et de l'inclinaison de votre toit</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      <span>Simulation de production solaire personnalisée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
