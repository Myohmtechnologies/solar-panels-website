'use client';

import { 
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

const SolarInstallationStepsSection = () => {
  const steps = [
    {
      icon: <CalculatorIcon className="w-12 h-12 text-FFDF64" />,
      title: "Simulation personnalisée",
      description: "Obtenez une simulation détaillée de votre installation et de vos économies potentielles",
      number: "1"
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-FFDF64" />,
      title: "Étude de faisabilité gratuite",
      description: "Nos experts évaluent gratuitement la faisabilité technique de votre projet",
      number: "2"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-12 h-12 text-FFDF64" />,
      title: "Installation rapide et professionnelle",
      description: "Une installation soignée réalisée par nos équipes qualifiées",
      number: "3"
    },
    {
      icon: <BanknotesIcon className="w-12 h-12 text-FFDF64" />,
      title: "Commencez à économiser",
      description: "Profitez immédiatement des avantages de votre installation solaire",
      number: "4"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Les étapes de votre installation solaire
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 bg-gradient-to-br from-f1f5f9 to-e2e8f0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Numéro de l'étape */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-FFDF64 rounded-full flex items-center justify-center text-black font-bold">
                {step.number}
              </div>

              {/* Contenu */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Ligne de connexion entre les étapes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-FFDF64"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarInstallationStepsSection;
