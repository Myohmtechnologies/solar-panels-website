'use client';

import React from 'react';
import Image from 'next/image';
import { MapPinIcon, StarIcon, TruckIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface LocalPresenceSectionProps {
  cityData: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleReviews: {
      rating: number;
      totalReviews: number;
      recentReviews: Array<{
        author: string;
        rating: number;
        comment: string;
        date: string;
      }>;
    };
    interventionArea: {
      radius: number;
      cities: string[];
    };
  };
}

const LocalPresenceSection: React.FC<LocalPresenceSectionProps> = ({ cityData }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-FFDF64 fill-FFDF64' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Construire l'URL de la carte statique Google Maps si la clé API est disponible
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = googleMapsApiKey 
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${cityData.coordinates.lat},${cityData.coordinates.lng}&zoom=13&size=600x400&scale=2&markers=color:yellow|${cityData.coordinates.lat},${cityData.coordinates.lng}&key=${googleMapsApiKey}`
    : '/images/map-placeholder.jpg';

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <MapPinIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Notre présence à {cityData.name}
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Votre expert en installation solaire de proximité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Carte */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full h-[400px] bg-gray-100">
              {!googleMapsApiKey ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <MapPinIcon className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-600">
                    Nous intervenons à {cityData.name} et ses environs
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Coordonnées : {cityData.coordinates.lat}, {cityData.coordinates.lng}
                  </p>
                </div>
              ) : (
                <Image
                  src={mapUrl}
                  alt={`Carte de ${cityData.name}`}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
          </div>

          {/* Informations de contact et zone d'intervention */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
                  <TruckIcon className="h-6 w-6 text-FFDF64" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Zone d&apos;intervention
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Nous intervenons dans un rayon de {cityData.interventionArea.radius} km 
                    autour de {cityData.name}, couvrant notamment :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link 
                      href="/region/paca/departements/04-alpes-de-haute-provence/villes/manosque"
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-FFDF64/10 hover:text-FFDF64 transition-colors"
                    >
                      Manosque
                    </Link>
                    <Link 
                      href="/region/paca/departements/04-alpes-de-haute-provence/villes/digne-les-bains"
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-FFDF64/10 hover:text-FFDF64 transition-colors"
                    >
                      Digne-les-Bains
                    </Link>
                    <Link 
                      href="/region/paca/departements/04-alpes-de-haute-provence/villes/forcalquier"
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-FFDF64/10 hover:text-FFDF64 transition-colors"
                    >
                      Forcalquier
                    </Link>
                    <Link 
                      href="/region/paca/departements/04-alpes-de-haute-provence/villes/sisteron"
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-FFDF64/10 hover:text-FFDF64 transition-colors"
                    >
                      Sisteron
                    </Link>
                    <Link 
                      href="/region/paca/departements/04-alpes-de-haute-provence/villes/oraison"
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-FFDF64/10 hover:text-FFDF64 transition-colors"
                    >
                      Oraison
                    </Link>
                    <Link 
                      href="/region/paca/departements/04-alpes-de-haute-provence/villes/chateau-arnoux-saint-auban"
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-FFDF64/10 hover:text-FFDF64 transition-colors"
                    >
                      Château-Arnoux
                    </Link>
                    <Link 
                      href="/region/paca/departements/04-alpes-de-haute-provence/villes/greoux-les-bains"
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-FFDF64/10 hover:text-FFDF64 transition-colors"
                    >
                      Gréoux-les-Bains
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-FFDF64/10 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-FFDF64" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Coordonnées GPS
                  </h3>
                  <p className="text-gray-700">
                    Latitude : {cityData.coordinates.lat}
                    <br />
                    Longitude : {cityData.coordinates.lng}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Avis Google */}
        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <StarIcon className="h-6 w-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-2">
                Avis Google My Business
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {renderStars(cityData.googleReviews.rating)}
                </div>
                <span className="text-black/80">
                  {cityData.googleReviews.rating}/5 ({cityData.googleReviews.totalReviews} avis)
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityData.googleReviews.recentReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-black/80 text-sm mb-2">{review.comment}</p>
                <div className="flex justify-between items-center text-xs text-black/60">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPresenceSection;
