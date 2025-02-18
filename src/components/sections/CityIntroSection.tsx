'use client';

import React from 'react';
import Image from 'next/image';
import { SunIcon, MapPinIcon, SparklesIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

interface CityIntroSectionProps {
  cityName: string;
  region: string;
  department: string;
  sunshineHours: number;
}

const CityIntroSection: React.FC<CityIntroSectionProps> = ({
  cityName,
  region,
  department,
  sunshineHours
}) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <SunIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-4xl font-bold text-gray-900">
              Votre entreprise d'installation de panneaux solaires à {cityName}
            </h2>
          </div>
          <p className="text-2xl text-FFDF64 font-medium">
            Économisez sur votre facture énergétique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
                  <SunIcon className="h-6 w-6 text-FFDF64" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Un emplacement idéal pour le solaire
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Située dans le département des {department} en région {region}, 
                    {cityName} bénéficie d&apos;un ensoleillement exceptionnel avec plus de 
                    <span className="font-semibold text-FFDF64"> {sunshineHours} heures </span> 
                    de soleil par an. Cette situation privilégiée fait de notre ville un emplacement 
                    idéal pour l&apos;installation de panneaux solaires photovoltaïques.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-FFDF64" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Avantages locaux et aides régionales
                  </h2>
                  <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-4">
                    <ul className="space-y-3 text-black/80">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        <span>Subventions régionales spécifiques à la région {region}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        <span>Accompagnement personnalisé dans vos démarches</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        <span>Expertise locale et connaissance du territoire</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/showroom.jpg"
                  alt="Showroom My Ohm Technologies - Panneaux solaires à Manosque"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Notre Showroom</h3>
                    <p className="text-sm">Découvrez nos solutions solaires en exposition</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
                    <BuildingOfficeIcon className="h-6 w-6 text-FFDF64" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      My Ohm Technologies : Votre expert solaire à {cityName}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Entreprise locale certifiée RGE, My Ohm Technologies est votre partenaire 
                      de confiance pour votre transition énergétique. Notre showroom vous permet 
                      de découvrir nos solutions solaires et d&apos;échanger avec nos experts.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-xl p-4">
                    <p className="font-bold text-black text-lg mb-1">300+</p>
                    <p className="text-black/80 text-sm">Installations réalisées</p>
                  </div>
                  <div className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-xl p-4">
                    <p className="font-bold text-black text-lg mb-1">98%</p>
                    <p className="text-black/80 text-sm">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
              <SparklesIcon className="h-6 w-6 text-FFDF64" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Nos engagements qualité
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    title: "Installation Certifiée",
                    desc: "Professionnels RGE QualiPV"
                  },
                  {
                    title: "Garantie Décennale",
                    desc: "Protection complète"
                  },
                  {
                    title: "Service Local",
                    desc: `Équipe basée à ${cityName}`
                  },
                  {
                    title: "Suivi Personnalisé",
                    desc: "Accompagnement complet"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-xl p-4">
                    <p className="font-bold text-black mb-2">{item.title}</p>
                    <p className="text-sm text-black/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityIntroSection;
