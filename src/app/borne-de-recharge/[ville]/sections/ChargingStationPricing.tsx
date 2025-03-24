interface PricingTier {
  name: string;
  power: string;
  pricePerKwh: number;
  subscriptionPrice?: number;
  features: string[];
}

interface ChargingStationPricingProps {
  pricingTiers: PricingTier[];
  cityName: string;
}

export default function ChargingStationPricing({
  pricingTiers,
  cityName
}: ChargingStationPricingProps) {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3248] mb-6">
            Combien coûte la recharge à {cityName} ?
          </h2>
          <p className="text-[#0c3248]/90 text-lg">
            Découvrez les tarif de recharge pour votre voiture Électrique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#0c3248]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#0f81ba] rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0c3248]">{tier.name}</h3>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#0c3248]">{tier.pricePerKwh.toFixed(2)}€</span>
                <span className="text-[#0c3248]/90">/kWh</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-[#0c3248]/90">
                  <svg className="w-5 h-5 text-[#0f81ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Jusqu'à {tier.power}</span>
                </li>
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[#0c3248]/90">
                    <svg className="w-5 h-5 text-[#0f81ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#0c3248]/90 mb-6">
            Besoin d'un devis personnalisé ?
          </p>
          <button className="group bg-[#0f81ba] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0c3248] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="flex items-center gap-2">
              Demander un devis gratuit
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 