interface Incentive {
  name: string;
  description: string;
  amount: string;
  eligibility: string[];
  provider: string;
}

interface ChargingStationIncentivesProps {
  cityName: string;
  incentives: Incentive[];
}

export default function ChargingStationIncentives({
  cityName,
  incentives
}: ChargingStationIncentivesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Aides et subventions à {cityName}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez les aides disponibles pour l'installation de bornes de recharge
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {incentives.map((incentive, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {incentive.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {incentive.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        Montant de l'aide
                      </h4>
                      <p className="text-lg font-semibold text-gray-900">
                        {incentive.amount}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        Organisme
                      </h4>
                      <p className="text-lg font-semibold text-gray-900">
                        {incentive.provider}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      Éligibilité
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {incentive.eligibility.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      En savoir plus
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
} 