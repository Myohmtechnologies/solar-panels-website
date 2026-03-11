'use client';

import { useEffect, useRef } from 'react';

interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'available' | 'occupied' | 'offline';
  type: string;
}

interface ChargingStationMapProps {
  cityName: string;
  stations?: Station[];
  centerLat: number;
  centerLng: number;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const defaultStations: Station[] = [
  {
    id: '1',
    name: 'Station Centre-Ville',
    lat: 43.296482,
    lng: 5.369780,
    status: 'available',
    type: '22kW AC'
  },
  {
    id: '2',
    name: 'Station Vieux-Port',
    lat: 43.295074,
    lng: 5.374457,
    status: 'occupied',
    type: '50kW DC'
  },
  {
    id: '3',
    name: 'Station La Joliette',
    lat: 43.304508,
    lng: 5.365505,
    status: 'available',
    type: '22kW AC'
  }
];

export default function ChargingStationMap({
  cityName,
  stations = defaultStations,
  centerLat,
  centerLng
}: ChargingStationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Définir la fonction d'initialisation globale
    window.initMap = () => {
      if (!mapRef.current) return;

      // Créer la carte
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: centerLat || 43.296482, lng: centerLng || 5.369780 },
        zoom: 13,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });

      // Ajouter les marqueurs pour chaque station
      stations.forEach(station => {
        const marker = new window.google.maps.Marker({
          position: { lat: station.lat, lng: station.lng },
          map: googleMapRef.current,
          title: station.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: getStatusColor(station.status),
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#ffffff',
            scale: 8
          }
        });

        // Créer une fenêtre d'info pour chaque marqueur
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-3">
              <h3 class="font-semibold text-gray-900">${station.name}</h3>
              <p class="text-sm text-gray-600">${station.type}</p>
              <p class="text-sm mt-1">
                <span class="inline-block w-2 h-2 rounded-full mr-1" style="background-color: ${getStatusColor(station.status)}"></span>
                ${getStatusText(station.status)}
              </p>
            </div>
          `
        });

        // Ajouter l'événement click pour afficher la fenêtre d'info
        marker.addListener('click', () => {
          infoWindow.open(googleMapRef.current, marker);
        });

        markersRef.current.push(marker);
      });
    };

    // Charger le script Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Nettoyer les marqueurs
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
      
      // Supprimer le script
      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src.includes('maps.googleapis.com')) {
          scripts[i].remove();
        }
      }
      
      // Supprimer la fonction globale
      delete window.initMap;
    };
  }, [stations, centerLat, centerLng]);

  const getStatusColor = (status: Station['status']) => {
    switch (status) {
      case 'available':
        return '#22c55e'; // vert
      case 'occupied':
        return '#f59e0b'; // orange
      case 'offline':
        return '#ef4444'; // rouge
      default:
        return '#6b7280'; // gris
    }
  };

  const getStatusText = (status: Station['status']) => {
    switch (status) {
      case 'available':
        return 'Disponible';
      case 'occupied':
        return 'Occupée';
      case 'offline':
        return 'Hors service';
      default:
        return 'Statut inconnu';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Carte des bornes à {cityName}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Localisez les bornes de recharge disponibles dans votre zone
        </p>

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div ref={mapRef} className="w-full h-[600px]" />
          
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Légende</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                <span className="text-sm text-gray-600">Disponible</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-amber-500 mr-2" />
                <span className="text-sm text-gray-600">Occupée</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <span className="text-sm text-gray-600">Hors service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Les données sont mises à jour en temps réel
          </p>
        </div>
      </div>
    </section>
  );
} 