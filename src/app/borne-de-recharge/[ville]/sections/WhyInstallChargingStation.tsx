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

interface WhyInstallChargingStationProps {
  cityName: string;
}

interface Advantage {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const advantages: Advantage[] = [
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

export default function WhyInstallChargingStation({ cityName }: WhyInstallChargingStationProps) {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3248] mb-6">
            Pourquoi installer une borne de recharge à {cityName} ?
          </h2>
          <p className="text-[#0c3248]/90 text-lg">
            Découvrez les nombreux avantages d'installer votre propre borne de recharge électrique à {cityName}.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage) => (
            <div 
              key={advantage.title}
              className="bg-white rounded-xl p-6 border border-[#0c3248]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#0f81ba] rounded-lg">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0c3248]">{advantage.title}</h3>
              </div>
              <p className="text-[#0c3248]/90">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Bénéfices par profil */}
        <div className="bg-white rounded-2xl p-8 border border-[#0c3248]/10">
          <h3 className="text-2xl font-bold text-[#0c3248] mb-8 text-center">
            Des solutions adaptées à vos besoins
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((profile, index) => (
              <div 
                key={profile.title}
                className="bg-white rounded-xl p-6 border border-[#0c3248]/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#0f81ba] rounded-lg">
                    {index === 0 ? (
                      <HomeIcon className="w-6 h-6 text-white" />
                    ) : (
                      <BuildingOfficeIcon className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-[#0c3248]">{profile.title}</h4>
                </div>
                <ul className="space-y-3">
                  {profile.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0f81ba]" />
                      <span className="text-[#0c3248]/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#0c3248]/90 mb-4">
              Prêt à franchir le pas vers la mobilité électrique ?
            </p>
            <button className="group bg-[#0f81ba] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0c3248] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span className="flex items-center gap-2">
                Demander un devis gratuit
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 