import Image from 'next/image';

interface Operator {
  name: string;
  logo: string;
  description: string;
  stationCount: number;
  coverage: string[];
  paymentMethods: string[];
}

interface ChargingStationOperatorsProps {
  operators: Operator[];
}

export default function ChargingStationOperators({
  operators
}: ChargingStationOperatorsProps) {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3248] mb-6">
            Les principaux stations de bornes de recharge
          </h2>
          <p className="text-[#0c3248]/90 text-lg">
            Découvrez les opérateurs qui vous accompagnent dans votre transition vers l'électrique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {operators.map((operator) => (
            <div 
              key={operator.name}
              className="bg-white rounded-xl p-6 border border-[#0c3248]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center  rounded-lg">
                  <Image
                    src={operator.logo}
                    alt={`Logo ${operator.name}`}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0c3248]">{operator.name}</h3>
              </div>
              <p className="text-[#0c3248]/90 mb-4">{operator.description}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[#0c3248]/80 mb-2">
                    Nombre de bornes
                  </h4>
                  <p className="text-lg font-semibold text-[#0c3248]">
                    {operator.stationCount} bornes
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#0c3248]/80 mb-2">
                    Couverture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {operator.coverage.map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0f81ba]/10 text-[#0f81ba]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#0c3248]/80 mb-2">
                    Moyens de paiement
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {operator.paymentMethods.map((method, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0f81ba]/10 text-[#0f81ba]"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

             
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#0c3248]/90 mb-6">
            Besoin d'aide pour choisir votre opérateur ?
          </p>
          <button className="group bg-[#0f81ba] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0c3248] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="flex items-center gap-2">
              Obtenir un conseil personnalisé
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 