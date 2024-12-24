'use client';

import Image from 'next/image';
import { 
  BuildingOffice2Icon 
} from '@heroicons/react/24/solid';

const partners = [
  {
    name: "Enphase",
    logo: "/images/partners/enphase.png",
    description: "Leader mondial des technologies de microinverseurs et de stockage d'énergie solaire."
  },
  {
    name: "Bourgeois Global",
    logo: "/images/partners/bourgeois-global.jpeg", 
    description: "Innovateur en solutions d'optimisation et de gestion de l'énergie solaire."
  },
  {
    name: "DuelSun",
    logo: "/images/partners/duelsun.png",
    description: "Pionnier dans la conception de panneaux solaires haute performance et durables."
  }
];

const PartnersSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <BuildingOffice2Icon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Nos Partenaires Technologiques
            </h2>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Nous collaborons avec les leaders mondiaux de l&apos;industrie solaire pour vous offrir les technologies les plus avancées et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="mb-6 w-48 h-24 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={100}
                  className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-AFC97E transition-colors">
                {partner.name}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PartnersSection;
