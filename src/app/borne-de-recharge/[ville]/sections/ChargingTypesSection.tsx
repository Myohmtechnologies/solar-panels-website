import { BoltIcon, ClockIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

interface ChargingType {
  name: string;
  power: string;
  duration: string;
  icon: React.ForwardRefExoticComponent<any>;
  description: string;
}

const chargingTypes: ChargingType[] = [
  {
    name: "Charge lente",
    power: "3,7 kW",
    duration: "8-12h",
    icon: ClockIcon,
    description: "Idéale pour la recharge nocturne à domicile, cette solution est économique et préserve la durée de vie de votre batterie."
  },
  {
    name: "Charge normale",
    power: "7 kW",
    duration: "4-6h",
    icon: HomeIcon,
    description: "Le meilleur compromis pour une recharge quotidienne, parfaitement adaptée pour le domicile ou le lieu de travail."
  },
  {
    name: "Charge accélérée",
    power: "22 kW",
    duration: "1-2h",
    icon: BoltIcon,
    description: "Solution optimale pour les entreprises et les parkings publics, permettant une recharge rapide pendant vos activités."
  }
];

const installationTypes = [
  {
    title: "Prise renforcée Green'Up",
    features: [
      "Installation simple et économique",
      "Puissance de 3,7 kW",
      "Idéale pour une utilisation domestique",
      "Temps de charge : 8-13h",
      "Sécurité renforcée vs prise standard"
    ]
  },
  {
    title: "Borne de recharge",
    features: [
      "Installation professionnelle",
      "Puissance de 7 à 22 kW",
      "Parfaite pour particuliers et entreprises",
      "Temps de charge : 1-7h selon puissance",
      "Compatible avec tous les véhicules"
    ]
  }
];

export default function ChargingTypesSection() {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d5c] mb-6">
            Quel type de recharge choisir ?
          </h2>
          <p className="text-[#0a3d5c]/90 text-lg">
            Le choix de votre type de recharge dépendra principalement de la capacité de la batterie de votre véhicule et de vos besoins quotidiens en autonomie.
          </p>
        </div>

        {/* Types de recharge */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {chargingTypes.map((type, index) => (
            <div 
              key={type.name}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-[#0a3d5c]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-lg">
                  <type.icon className="w-6 h-6 text-[#0a3d5c]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0a3d5c]">{type.name}</h3>
                  <p className="text-[#0a3d5c]/80">{type.power}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[#0a3d5c]/90">{type.description}</p>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-[#0a3d5c]/80" />
                  <span className="text-[#0a3d5c]/80">Durée moyenne : {type.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Installation à domicile */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-[#0a3d5c]/10">
          <h3 className="text-2xl font-bold text-[#0a3d5c] mb-8 text-center">
            Quelle installation pour chez vous ?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {installationTypes.map((install, index) => (
              <div 
                key={install.title}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-[#0a3d5c]/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-lg">
                    {index === 0 ? (
                      <HomeIcon className="w-6 h-6 text-[#0a3d5c]" />
                    ) : (
                      <BuildingOfficeIcon className="w-6 h-6 text-[#0a3d5c]" />
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-[#0a3d5c]">{install.title}</h4>
                </div>
                <ul className="space-y-3">
                  {install.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffb700]" />
                      <span className="text-[#0a3d5c]/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#0a3d5c]/90 mb-4">
              Vous êtes une entreprise et souhaitez installer des bornes de recharge ?
            </p>
            <button className="group bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-[#0a3d5c] px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#ffe066] hover:to-[#ffa600] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span className="flex items-center gap-2">
                Télécharger notre guide gratuit
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 