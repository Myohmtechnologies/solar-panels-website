import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const pricingTiers = [
  {
    power: '3 kWc',
    usage: 'Consommation moyenne · Facture ~80-120 €/mois',
    panels: '6 panneaux',
    panelsModel: 'JinkoSolar Tiger Neo 500 Wc',
    inverters: '6 micro-onduleurs',
    invertersModel: 'Enphase IQ8AC',
    price: 'À partir de 6 490 €',
    popular: false,
  },
  {
    power: '6 kWc',
    usage: 'Maison tout électrique · Facture ~120-200 €/mois',
    panels: '12 panneaux',
    panelsModel: 'JinkoSolar Tiger Neo 500 Wc',
    inverters: '12 micro-onduleurs',
    invertersModel: 'Enphase IQ8AC',
    price: 'À partir de 10 190 €',
    popular: true,
  },
  {
    power: '9 kWc',
    usage: 'Forte consommation · PAC / Piscine / Climatisation',
    panels: '18 panneaux',
    panelsModel: 'JinkoSolar Tiger Neo 500 Wc',
    inverters: '18 micro-onduleurs',
    invertersModel: 'Enphase IQ8AC',
    price: 'À partir de 12 990 €',
    popular: false,
  },
];

const includedFeatures = [
  'Le matériel premium (panneaux JinkoSolar 500 Wc, micro-onduleurs Enphase IQ8AC, fixations K2 Systems).',
  'La main-d’œuvre par nos artisans et installateurs qualifiés certifiés RGE QualiPV.',
  'Le raccordement au tableau électrique et la passerelle de communication Enphase Envoy.',
  'La gestion administrative complète (déclaration préalable en mairie, Consuel et raccordement Enedis).',
];

export default function SolarPricingTableSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-t border-gray-100">
      {/* Halo discret en arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#116290]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Titre et en-tête */}
        <div className="mb-8 sm:mb-12">
          <span className="mb-3 inline-flex rounded-full bg-[#116290]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">
            Tarifs & Transparence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
            Quel est le prix d'une installation de{' '}
            <span className="text-[#116290]">panneaux solaires</span> ?
          </h2>
          {/* Ligne d'accentuation */}
          <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ffb700] to-[#116290]" />
        </div>

        {/* Tableau desktop / tablette & cartes responsive */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-xl shadow-[#082f49]/5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-[#f8fafc]">
                  <th
                    scope="col"
                    className="py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a3d5c]"
                  >
                    Puissance installée
                  </th>
                  <th
                    scope="col"
                    className="py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a3d5c]"
                  >
                    Nombre de panneaux
                  </th>
                  <th
                    scope="col"
                    className="py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a3d5c]"
                  >
                    Micro-onduleurs Enphase
                  </th>
                  <th
                    scope="col"
                    className="py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a3d5c]"
                  >
                    Prix moyen clé en main
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {pricingTiers.map((tier) => (
                  <tr
                    key={tier.power}
                    className={`transition-colors duration-200 hover:bg-[#f4f8fa]/70 ${
                      tier.popular ? 'bg-[#ffdf64]/10' : 'bg-white'
                    }`}
                  >
                    {/* Colonne Puissance */}
                    <td className="py-6 px-6">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl sm:text-2xl font-extrabold text-[#111827]">
                          {tier.power}
                        </span>
                        {tier.popular && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-[#0a3d5c] shadow-sm">
                            <SparklesIcon className="h-3 w-3" /> Recommandé
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-gray-500">{tier.usage}</p>
                    </td>

                    {/* Colonne Panneaux */}
                    <td className="py-6 px-6">
                      <p className="text-base sm:text-lg font-bold text-[#111827]">
                        {tier.panels}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        {tier.panelsModel}
                      </p>
                    </td>

                    {/* Colonne Micro-onduleurs Enphase */}
                    <td className="py-6 px-6">
                      <p className="text-base sm:text-lg font-bold text-[#116290]">
                        {tier.inverters}
                      </p>
                      <span className="inline-block mt-0.5 rounded bg-[#116290]/10 px-2 py-0.5 text-xs font-semibold text-[#116290]">
                        {tier.invertersModel}
                      </span>
                    </td>

                    {/* Colonne Prix */}
                    <td className="py-6 px-6">
                      <p className="text-lg sm:text-xl font-extrabold text-[#111827]">
                        {tier.price}
                      </p>
                      <span className="text-xs text-gray-500 font-medium">
                        TTC · Aides de l'État déduites
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bloc "Ce qui est inclus dans notre tarif" */}
        <div className="mt-8 sm:mt-10 rounded-2xl bg-[#f8fafc] border border-gray-200/70 p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-4">
            Ce qui est inclus dans notre tarif :
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {includedFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5"
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
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bannière d'action rapide */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0a3d5c] to-[#116290] text-white shadow-xl shadow-[#082f49]/10">
          <div>
            <h4 className="text-lg sm:text-xl font-bold">
              Vous souhaitez connaître votre tarif exact selon votre toiture ?
            </h4>
            <p className="mt-1 text-sm text-white/80">
              Estimez votre production et calculez vos économies annuelles en 2
              minutes.
            </p>
          </div>
          <Link
            href="/simulator"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-6 py-3.5 text-sm sm:text-base font-bold text-[#0a3d5c] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
          >
            Simuler vos économies <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

