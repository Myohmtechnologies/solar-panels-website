interface ChargingType {
  name: string;
  power: string;
  chargingTime: string;
  compatibility: string[];
  count: number;
}

interface ChargingStationTypesProps {
  types: ChargingType[];
}

export default function ChargingStationTypes({
  types
}: ChargingStationTypesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Types de bornes de recharge
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez les différents types de bornes disponibles et leurs caractéristiques
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {type.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Puissance</span>
                  <span className="font-medium text-gray-900">{type.power}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Temps de charge</span>
                  <span className="font-medium text-gray-900">{type.chargingTime}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Connecteurs</span>
                  <div className="flex flex-wrap justify-end gap-2">
                    {type.compatibility.map((connector, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {connector}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Nombre de bornes</span>
                  <span className="font-medium text-gray-900">{type.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 