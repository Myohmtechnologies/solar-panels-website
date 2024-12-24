'use client';

import { 
  DocumentMagnifyingGlassIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/solid';

const installationSteps = [
  {
    icon: DocumentMagnifyingGlassIcon,
    title: "Étude de Faisabilité",
    description: "Analyse personnalisée de votre propriété, consommation énergétique et potentiel solaire.",
    details: [
      "Audit énergétique",
      "Étude d'ensoleillement",
      "Dimensionnement du système"
    ]
  },
  {
    icon: LightBulbIcon,
    title: "Conception du Projet",
    description: "Création d'un projet sur-mesure adapté à vos besoins et à votre budget.",
    details: [
      "Choix des panneaux",
      "Plan d'installation",
      "Simulation financière"
    ]
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Installation",
    description: "Mise en place professionnelle de vos panneaux solaires par nos techniciens experts.",
    details: [
      "Pose des supports",
      "Installation des panneaux",
      "Raccordement électrique"
    ]
  },
  {
    icon: CheckBadgeIcon,
    title: "Mise en Service",
    description: "Activation et test complet de votre installation pour une performance optimale.",
    details: [
      "Vérifications techniques",
      "Raccordement au réseau",
      "Formation et conseils"
    ]
  }
];

const SolarInstallationStepsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <WrenchScrewdriverIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Étapes de l&apos;installation solaire
            </h2>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Découvrez le processus complet de votre installation de panneaux solaires, de l&apos;étude initiale à la mise en service, pour une transition énergétique en toute sérénité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {installationSteps.map((step, index) => (
            <div 
              key={step.title} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-FFDF64/20 rounded-full mb-4">
                  <step.icon className="w-10 h-10 text-FFDF64" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-AFC97E transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-12 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <LightBulbIcon className="w-12 h-12 text-black mb-4" />
            <h4 className="font-bold text-black text-xl mb-2">Notre Engagement</h4>
            <p className="text-black/80 max-w-xl">
              Un accompagnement personnalisé à chaque étape pour garantir la réussite de votre projet solaire.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Commencer Votre Projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolarInstallationStepsSection;
