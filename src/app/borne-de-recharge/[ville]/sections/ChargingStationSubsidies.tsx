import { 
  BanknotesIcon, 
  BuildingOfficeIcon, 
  HomeIcon, 
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface ChargingStationSubsidiesProps {
  cityName: string;
}

const subsidies = [
  {
    title: "Crédit d'impôt",
    description: "30 % de réduction sur l'installation d'une borne Wallbox",
    icon: BanknotesIcon,
    color: "bg-blue-50 text-blue-600",
    features: [
      "Cumulable avec d'autres aides",
      "Sans condition de revenus",
      "Pour les particuliers et professionnels"
    ]
  },
  {
    title: "Programme ADVENIR",
    description: "Jusqu'à 50% de prise en charge selon le type d'installation",
    icon: BuildingOfficeIcon,
    color: "bg-green-50 text-green-600",
    features: [
      "Aide pour les installations en copropriété",
      "Aide pour les flottes professionnelles",
      "Aide pour les parkings privés"
    ]
  },
  {
    title: "Transition écologique",
    description: "500€ pour une borne connectée, 300€ pour une borne non connectée",
    icon: SparklesIcon,
    color: "bg-purple-50 text-purple-600",
    features: [
      "Aide régionale",
      "Cumulable avec le crédit d'impôt",
      "Pour les installations en résidence principale"
    ]
  }
];

const advenirPrograms = [
  {
    title: "Poids lourds",
    description: "50% pour les flottes de poids lourds en parking privé",
    icon: TruckIcon,
  },
  {
    title: "Parkings privés",
    description: "30% pour les parkings privés ouverts au public",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Copropriétés",
    description: "50% pour les installations en copropriété",
    icon: HomeIcon,
  },
  {
    title: "Professionnels",
    description: "25% pour les flottes et salariés",
    icon: UserGroupIcon,
  }
];

export default function ChargingStationSubsidies({ cityName }: ChargingStationSubsidiesProps) {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3248] mb-6">
            Aides et subventions pour la borne de recharge
          </h2>
          <p className="text-[#0c3248]/90 text-lg">
            Découvrez les aides financières pour l'installation de votre borne de recharge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {subsidies.map((subsidy) => (
            <div 
              key={subsidy.title}
              className="bg-white rounded-xl p-6 border border-[#0c3248]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#0f81ba] rounded-lg">
                  <subsidy.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0c3248]">{subsidy.title}</h3>
              </div>
              <p className="text-[#0c3248]/90 mb-4">{subsidy.description}</p>
              <ul className="space-y-2">
                {subsidy.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#0c3248]/90">
                    <CheckCircleIcon className="w-5 h-5 text-[#0f81ba]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#0c3248]/90 mb-6">
            Besoin d'aide pour identifier les aides auxquelles vous êtes éligible ?
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