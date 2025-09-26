'use client';

import React from 'react';
import Image from 'next/image';
import { 
  WrenchScrewdriverIcon, 
  BoltIcon, 
  Battery100Icon,
  CloudIcon,
  PowerIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

interface SolarServicesSectionProps {
  cityName: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imagePath: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon, imagePath }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
    <div className="relative h-48 w-full">
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-6">
        <div className="text-white">
          <div className="flex items-center gap-3 mb-2">
            {icon}
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-sm text-white/90">{description}</p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-FFDF64 rounded-full mr-3"></span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SolarServicesSection: React.FC<SolarServicesSectionProps> = ({ cityName }) => {
  const services: ServiceCardProps[] = [
    {
      title: "Électricité générale",
      description: "Installation et rénovation électrique complète",
      icon: <WrenchScrewdriverIcon className="w-6 h-6 text-FFDF64" />,
      imagePath: "/images/produit/diagnostic-personnalise.png",
      features: [
        "Mise aux normes électriques NF C 15-100",
        "Installation et rénovation de tableaux électriques",
        "Dépannage électrique d'urgence 24h/7j",
        "Éclairage intérieur et extérieur"
      ]
    },
    {
      title: "Bornes de recharge IRVE",
      description: "Recharge pour véhicules électriques",
      icon: <PowerIcon className="w-6 h-6 text-FFDF64" />,
      imagePath: "/images/produit/borne-de-recharge.png",
      features: [
        "Installation pour particuliers et entreprises",
        "Compatible avec tous les véhicules",
        "Intégration avec vos panneaux solaires",
        "Pilotage intelligent de la charge"
      ]
    },
    {
      title: "Installation de panneaux solaires",
      description: "Solutions photovoltaïques haute performance",
      icon: <BoltIcon className="w-6 h-6 text-FFDF64" />,
      imagePath: "/images/produit/panneau-solaire.jpeg",
      features: [
        "Panneaux monocristallins haute efficacité",
        "Installation sur toiture ou au sol",
        "Pose de supports et fixations adaptés",
        "Raccordement et mise en service"
      ]
    },
 
  
 
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <WrenchScrewdriverIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Nos services d&apos;installation solaire à {cityName}
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Des solutions complètes et personnalisées pour votre transition énergétique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <WrenchScrewdriverIcon className="h-6 w-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4">
                Pourquoi choisir nos services à {cityName} ?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-black mb-2">Expertise Locale</p>
                  <p className="text-sm text-black/80">Connaissance approfondie des spécificités de {cityName}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-black mb-2">Service Complet</p>
                  <p className="text-sm text-black/80">De l'étude à la maintenance, nous gérons tout</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-black mb-2">Qualité Garantie</p>
                  <p className="text-sm text-black/80">Matériel premium et installation certifiée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarServicesSection;
