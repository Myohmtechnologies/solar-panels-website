import Image from 'next/image';

const advantages = [
  {
    title: 'Produire votre propre énergie gratuitement grâce au soleil',
    description: "consommez directement l'énergie produite par vos panneaux. Ne plus subir les hausses régulières du coût de l'électricité.",
  },
  {
    title: 'Valorisation immobilière',
    description: 'améliorez instantanément votre DPE et augmentez la valeur de revente de votre maison.',
  },
  {
    title: 'Engagement durable',
    description: 'installez des équipements performants, certifiés et recyclables à plus de 95 %.',
  },
];

export default function WhyPhotovoltaicSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Halo lumineux d'arrière-plan discret */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#ffdf64]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Colonne gauche : texte et points clés */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
              Pourquoi passer au <span className="text-[#116290]">photovoltaïque</span> en 2026 ?
            </h2>

            {/* Ligne d'accentuation aux couleurs My Ohm */}
            <div className="mt-4 mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#ffb700] to-[#116290]" />

            <p className="mb-8 text-base sm:text-lg leading-relaxed text-gray-600">
              Face à l'envolée des prix de l'énergie, produire sa propre électricité peut devenir une priorité économique autant qu'écologique.
            </p>

            <ul className="space-y-6">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffb700]/15 text-orange-500">
                    <svg
                      className="h-4 w-4 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    <strong className="font-bold text-[#111827]">
                      {item.title} :{' '}
                    </strong>
                    <span className="text-gray-600">{item.description}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne droite : Photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#eaf2f6] shadow-2xl shadow-[#082f49]/15">
              <Image
                src="/images/Installation-solaire-au-jardin.png"
                alt="Installation de panneaux solaires au sol dans un jardin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#082f49]/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

