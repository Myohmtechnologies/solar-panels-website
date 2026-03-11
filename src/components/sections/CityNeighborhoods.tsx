interface CityNeighborhoodsProps {
  neighborhoods: string[];
  cityName: string;
}

export default function CityNeighborhoods({ neighborhoods, cityName }: CityNeighborhoodsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Quartiers de {cityName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-semibold">{neighborhood}</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Installation de panneaux solaires disponible dans ce quartier
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
