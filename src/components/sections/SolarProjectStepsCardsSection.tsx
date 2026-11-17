import { CalculatorIcon, CheckCircleIcon, ClipboardDocumentCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: CalculatorIcon,
    title: 'Simulation personnalisée',
    description: 'Décrivez votre projet pour obtenir une première estimation adaptée à vos besoins.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Étude de faisabilité',
    description: 'Nous étudions la toiture, votre consommation et les contraintes du logement.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Installation professionnelle',
    description: 'Nos équipes réalisent la pose et les raccordements de votre installation.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Mise en service',
    description: 'Nous vous présentons le fonctionnement et le suivi de votre installation.',
  },
];

export default function SolarProjectStepsCardsSection() {
  return (
    <section className="bg-white px-4 pb-16 pt-8 sm:px-6 md:px-8 md:pb-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <span className="inline-flex rounded-full bg-[#f1f6f9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#116290]">
            Un accompagnement de A à Z
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl">
            Les étapes de votre <span className="text-[#116290]">installation solaire</span>
          </h2>
          <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ffb700] to-[#116290]" />
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            De la première estimation à la mise en service, notre équipe vous accompagne à chaque étape de votre projet photovoltaïque.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="relative min-h-[250px] rounded-2xl border border-[#116290]/10 bg-white p-6 pt-7 shadow-[0_12px_32px_rgba(10,61,92,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-[#116290]/20 hover:shadow-[0_18px_40px_rgba(10,61,92,0.14)]"
              >
                <span className="absolute -top-3.5 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#ffdf64] to-[#ffb700] text-sm font-black text-[#102c40] shadow-md">
                  {index + 1}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#ffdf64]/70 bg-[#fffaf0] text-[#116290]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-extrabold leading-snug text-[#0a3d5c]">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
