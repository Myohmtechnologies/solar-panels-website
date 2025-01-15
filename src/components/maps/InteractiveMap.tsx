import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Installation {
  id: string;
  latitude: number;
  longitude: number;
  clientName: string;
  installationDate: string;
  power: string;
  savings: string;
  image: string;
}

interface InteractiveMapProps {
  city: string;
  installations: Installation[];
  centerLat: number;
  centerLng: number;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  city,
  installations,
  centerLat,
  centerLng
}) => {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {installations.map((installation) => (
          <Marker
            key={installation.id}
            position={[installation.latitude, installation.longitude]}
          >
            <Popup>
              <div className="p-2">
                <img
                  src={installation.image}
                  alt={`Installation chez ${installation.clientName}`}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold">{installation.clientName}</h3>
                <p className="text-sm text-gray-600">
                  Installation : {installation.installationDate}
                </p>
                <p className="text-sm text-gray-600">
                  Puissance : {installation.power}
                </p>
                <p className="text-sm text-green-600">
                  Économies : {installation.savings}/an
                </p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700">
                  Plus de détails
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Schema.org pour le SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": `Zone d'installation de panneaux solaires à ${city}`,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": centerLat,
            "longitude": centerLng
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressCountry": "FR"
          }
        })}
      </script>
    </div>
  );
};
