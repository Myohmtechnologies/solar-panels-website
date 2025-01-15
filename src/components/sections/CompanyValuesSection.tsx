'use client';

import React from 'react';
import { 
  LightBulbIcon, 
  HeartIcon, 
  ShieldCheckIcon,
  StarIcon,
  GlobeEuropeAfricaIcon 
} from '@heroicons/react/24/solid';

const CompanyValuesSection = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies solaires, en recherchant constamment les solutions les plus efficaces et durables.'
    },
    {
      icon: HeartIcon,
      title: 'Engagement Écologique',
      description: 'Notre mission est de contribuer activement à la transition énergétique et à la préservation de notre environnement.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Satisfaction Client',
      description: 'Nous plaçons la satisfaction de nos clients au cœur de notre démarche, avec un accompagnement personnalisé et de qualité.'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <StarIcon className="w-8 h-8 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Nos Valeurs Fondamentales
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <value.icon className="h-12 w-12 text-primary-500 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl mt-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h4 className="font-bold text-black text-2xl mb-4">Notre Promesse</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="bg-black/10 p-3 rounded-xl">
                <GlobeEuropeAfricaIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <LightBulbIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <HeartIcon className="w-8 h-8 text-black" />
              </div>
            </div>
            <ul className="text-black/80 space-y-2 max-w-xl mx-auto">
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Transparence et intégrité
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Impact environnemental positif
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Accompagnement personnalisé
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValuesSection;
