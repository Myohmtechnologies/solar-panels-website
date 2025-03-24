import { 
  BoltIcon, 
  BanknotesIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  HomeIcon,
  BuildingOfficeIcon,
  SunIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface ChargingStationAdvantagesProps {
  cityName: string;
}

const advantages = [
  {
    title: "Économies significatives",
    description: "Réduisez vos coûts de transport jusqu'à 60% par rapport aux carburants traditionnels.",
    icon: BanknotesIcon
  },
  {
    title: "Recharge pratique",
    description: "Rechargez votre véhicule directement chez vous, en toute simplicité et sans déplacement.",
    icon: BoltIcon
  },
  {
    title: "Performance optimale",
    description: "Profitez d'une puissance adaptée à votre véhicule pour une recharge efficace.",
    icon: ChartBarIcon
  },
  {
    title: "Installation sécurisée",
    description: "Bénéficiez d'une installation aux normes avec une protection électrique dédiée.",
    icon: ShieldCheckIcon
  },
  {
    title: "Impact écologique",
    description: "Contribuez à la réduction des émissions de CO2 en optant pour une mobilité propre.",
    icon: SunIcon
  },
  {
    title: "Disponibilité 24/7",
    description: "Accédez à votre borne de recharge à tout moment, selon vos besoins.",
    icon: ClockIcon
  }
];

const benefits = [
  {
    title: "Pour les particuliers",
    features: [
      "Installation personnalisée selon votre véhicule",
      "Programmation des heures de charge",
      "Suivi de consommation en temps réel",
      "Garantie et maintenance incluses",
      "Éligible aux aides gouvernementales"
    ]
  },
  {
    title: "Pour les professionnels",
    features: [
      "Solutions multi-véhicules",
      "Gestion de flotte intégrée",
      "Facturation automatisée",
      "Installation évolutive",
      "Déductions fiscales avantageuses"
    ]
  }
];

export default function ChargingStationAdvantages({ cityName }: ChargingStationAdvantagesProps) {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c3248] mb-6">
            Les avantages d'une borne de recharge à {cityName}
          </h2>
          <p className="text-[#0c3248]/90 text-xl">
            Découvrez pourquoi installer une borne de recharge est un investissement judicieux
          </p>
        </div>

        {/* Bénéfices par profil */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((profile, index) => (
              <div 
                key={profile.title}
                className="bg-white rounded-2xl p-8 border border-[#0c3248]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-[#0f81ba] rounded-xl">
                    {index === 0 ? (
                      <HomeIcon className="w-8 h-8 text-white" />
                    ) : (
                      <BuildingOfficeIcon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-[#0c3248]">{profile.title}</h4>
                </div>
                <ul className="space-y-4">
                  {profile.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#0f81ba]" />
                      <span className="text-[#0c3248]/90 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Avantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div 
              key={advantage.title}
              className="bg-white rounded-xl p-8 border border-[#0c3248]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#0f81ba] rounded-xl mb-6">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0c3248] mb-4">{advantage.title}</h3>
                <p className="text-[#0c3248]/90 text-lg">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[#0c3248]/90 text-xl mb-8">
            Prêt à franchir le pas vers la mobilité électrique ?
          </p>
          <button className="group bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-[#0c3248] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="flex items-center gap-3">
              Demander un devis gratuit
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 