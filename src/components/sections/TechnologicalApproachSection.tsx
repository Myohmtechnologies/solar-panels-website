"use client";

import { 
  ServerIcon, 
  SparklesIcon, 
  LightBulbIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/solid';

const technologicalDetails = [
  {
    title: "Sélection Rigoureuse des Panneaux",
    description: "Après des mois de recherche et de tests, nous avons sélectionné les panneaux solaires SunPower X22, offrant un rendement exceptionnel de 22,8% et une durabilité inégalée.",
    icon: ServerIcon
  },
  {
    title: "Micro-Onduleurs Innovants",
    description: "Nous avons choisi les micro-onduleurs Enphase IQ8, garantissant une optimisation maximale de la production d'énergie et une fiabilité à toute épreuve.",
    icon: SparklesIcon
  },
  {
    title: "Optimisation des Coûts",
    description: "Grâce à nos partenariats stratégiques et notre expertise, nous proposons des solutions solaires à des prix jusqu'à 30% plus compétitifs que le marché.",
    icon: CurrencyEuroIcon
  }
];

export default function TechnologicalApproachSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <LightBulbIcon className="w-8 h-8 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Notre Approche Technologique
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologicalDetails.map((detail, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <detail.icon className="w-10 h-10 text-FFDF64 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-semibold text-gray-800">{detail.title}</h3>
                </div>
              </div>

              <div className="bg-f9fafb p-4 rounded-lg border border-gray-200 mb-4">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl mt-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h4 className="font-bold text-black text-2xl mb-4">Notre Engagement Technologique</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="bg-black/10 p-3 rounded-xl">
                <ServerIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <SparklesIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <LightBulbIcon className="w-8 h-8 text-black" />
              </div>
            </div>
            <ul className="text-black/80 space-y-2 max-w-xl mx-auto">
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Sélection rigoureuse des technologies
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Performance et fiabilité garanties
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Innovation continue
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
