interface Location {
  name: string;
  description: string;
  stationCount: number;
  type: 'public' | 'private' | 'mixed';
}

interface ChargingStationLocationsProps {
  cityName: string;
  locations: Location[];
}

export default function ChargingStationLocations({
  cityName,
  locations
}: ChargingStationLocationsProps) {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3248] mb-6">
            Où installer votre borne de recharge ?
          </h2>
          <p className="text-[#0c3248]/90 text-lg">
            Découvrez les meilleurs emplacements pour installer votre borne de recharge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.name}
              className="bg-white rounded-xl p-6 border border-[#0c3248]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#0f81ba] rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0c3248]">{location.name}</h3>
              </div>
              <p className="text-[#0c3248]/90 mb-4">{location.description}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm text-gray-600">
                    {location.stationCount} {location.stationCount > 1 ? 'bornes' : 'borne'}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {location.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {location.stationCount} {location.stationCount > 1 ? 'bornes' : 'borne'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">
                        Accès {location.type === 'public' ? 'public' : location.type === 'private' ? 'privé' : 'mixte'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Voir tous les emplacements
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 