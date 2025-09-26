'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface PopupInfo {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  iconSrc?: string;
}

const InteractiveSolarSection = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  
  const popupInfos: Record<string, PopupInfo> = {
    solarPanels: {
      title: "Le solaire à votre service",
      description: "Nos panneaux solaires, garantis 30 ans, produisent jusqu'à 8000 kWh annuels.",
      buttonText: "Acheter",
      buttonLink: "/simulateur-solaire",
      iconSrc: "/images/shopping.webp"
    },
    chargingStation: {
      title: "Borne de recharge",
      description: "Rechargez votre véhicule électrique avec l'énergie de vos panneaux solaires. Installation professionnelle et compatible avec tous les véhicules.",
      buttonText: "En savoir plus",
      buttonLink: "/borne-de-recharge",
      iconSrc: "/images/borne-de-recharge-wallbox.jpg"
    },
    batteryStorage: {
      title: "Batterie de stockage",
      description: "Stockez l'énergie produite pendant la journée pour l'utiliser la nuit. Autonomie énergétique maximale pour votre maison.",
      buttonText: "Découvrir",
      buttonLink: "/batterie-stockage",
      iconSrc: "/images/batterie-de-stockage-huawai.webp"
    }
  };

  const handlePopupToggle = (popupKey: string) => {
    if (activePopup === popupKey) {
      setActivePopup(null);
    } else {
      setActivePopup(popupKey);
    }
  };

  const renderPopup = (popupKey: string) => {
    if (activePopup !== popupKey) return null;
    
    const popupInfo = popupInfos[popupKey];
    
    return (
      <div className={`absolute bg-white rounded-lg shadow-xl p-4 max-w-xs z-20 ${getPopupPosition(popupKey)}`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              <Image 
                src={popupInfo.iconSrc || "/images/placeholder-image.png"} 
                alt={popupInfo.title} 
                width={50} 
                height={50}
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/placeholder-image.png';
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-800">{popupInfo.title}</h3>
          </div>
          <button 
            onClick={() => setActivePopup(null)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fermer"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        <p className="text-gray-600 mb-4">{popupInfo.description}</p>
        <a 
          href={popupInfo.buttonLink} 
          className="block w-full bg-blue-800 text-white text-center py-2 px-4 rounded-md hover:bg-blue-900 transition-colors"
        >
          {popupInfo.buttonText} <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  };

  const getPopupPosition = (popupKey: string): string => {
    switch (popupKey) {
      case 'solarPanels':
        return 'top-[80px] left-[200px] md:top-[80px] md:left-[200px]';
      case 'chargingStation':
        return 'top-[250px] right-[50px] md:top-[250px] md:right-[50px]';
      case 'batteryStorage':
        return 'top-[300px] left-[50px] md:top-[300px] md:left-[50px]';
      default:
        return 'top-[100px] left-[100px]';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Solutions énergétiques pour votre maison</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <Image 
              src="/images/maison-panneaux-solaires-borne-de-recharge-batterie-de-stockage.png" 
              alt="Maison équipée de panneaux solaires, borne de recharge et batterie de stockage" 
              width={1000} 
              height={600} 
              className="rounded-lg shadow-lg"
            />
            
            {/* Point d'interaction pour les panneaux solaires */}
            <div className="hidden md:block">
              <button 
                className="absolute top-[250px] left-[500px] bg-blue-700 rounded-full p-0.5 hover:bg-blue-800 transition-all hover:scale-105 z-10 shadow-md"
                onClick={() => handlePopupToggle('solarPanels')}
                aria-label="Informations sur les panneaux solaires"
              >
                <PlusCircleIcon className="h-7 w-7 text-white" />
              </button>
            </div>
            
            <div className="md:hidden block">
              <button 
                className="absolute top-[80px] right-[100px] bg-blue-700 rounded-full p-0 hover:scale-105 z-10"
                onClick={() => handlePopupToggle('solarPanels')}
                aria-label="Informations sur les panneaux solaires"
              >
                <PlusCircleIcon className="h-7 w-7 text-white" />
              </button>
            </div>
            
            {/* Point d'interaction pour la borne de recharge */}
            <div className="hidden md:block">
              <button 
                className="absolute top-[400px] right-[150px] bg-blue-700 rounded-full p-0.5 hover:bg-blue-800 transition-all hover:scale-105 z-10 shadow-md"
                onClick={() => handlePopupToggle('chargingStation')}
                aria-label="Informations sur la borne de recharge"
              >
                <PlusCircleIcon className="h-7 w-7 text-white" />
              </button>
            </div>
            
            <div className="md:hidden block">
              <button 
                className="absolute top-[150px] right-[30px] bg-blue-700 rounded-full p-0 hover:scale-105 z-10"
                onClick={() => handlePopupToggle('chargingStation')}
                aria-label="Informations sur la borne de recharge"
              >
                <PlusCircleIcon className="h-7 w-7 text-white" />
              </button>
            </div>
            
            {/* Point d'interaction pour la batterie de stockage */}
            <div className="hidden md:block">
              <button 
                className="absolute top-[350px] left-[400px] bg-blue-700 rounded-full p-0.5 hover:bg-blue-800 transition-all hover:scale-105 z-10 shadow-md"
                onClick={() => handlePopupToggle('batteryStorage')}
                aria-label="Informations sur la batterie de stockage"
              >
                <PlusCircleIcon className="h-7 w-7 text-white" />
              </button>
            </div>
            
            <div className="md:hidden block">
              <button 
                className="absolute top-[150px] left-[150px] bg-blue-700 rounded-full p-0 hover:scale-105 z-10"
                onClick={() => handlePopupToggle('batteryStorage')}
                aria-label="Informations sur la batterie de stockage"
              >
                <PlusCircleIcon className="h-7 w-7 text-white" />
              </button>
            </div>
            
            {/* Popups d'information */}
            {renderPopup('solarPanels')}
            {renderPopup('chargingStation')}
            {renderPopup('batteryStorage')}
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Une maison intelligente et autonome</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nos solutions énergétiques intégrées peuvent transformer votre maison en un système autonome et écologique. Cliquez sur les points d'intérêt pour en savoir plus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSolarSection;
