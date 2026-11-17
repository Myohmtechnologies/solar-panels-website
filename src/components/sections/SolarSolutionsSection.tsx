import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, SunIcon } from '@heroicons/react/24/outline';

const offerHighlights = [
  'Étude personnalisée de votre toiture et de vos besoins',
  'Fourniture et installation des panneaux solaires',
  'Accompagnement jusqu’à la mise en service',
];

export default function SolarSolutionsSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#116290]/10 bg-white shadow-[0_18px_55px_rgba(8,47,73,0.1)]">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ffdf64]/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#0d5578]">
              <SunIcon className="h-4 w-4" /> Offre solaire clé en main
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl xl:text-[2.7rem]">
              Passez à l’énergie solaire <span className="text-[#116290]">en toute sérénité</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Produisez votre propre électricité grâce à une installation photovoltaïque étudiée pour votre maison et vos habitudes de consommation.
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-sm font-semibold text-gray-500">À partir de</span>
              <span className="text-4xl font-black tracking-tight text-[#116290] sm:text-5xl">6 690 €</span>
            </div>
            <span className="mt-1 text-sm text-gray-500">pour une installation solaire de 3 kWc</span>

            <ul className="mt-7 space-y-3">
              {offerHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffdf64]/45 text-[#0d5578]">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/devis-panneaux-solaires" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#116290] to-[#0a3d5c] px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                Demander mon étude <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+33492766858" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#116290]/20 px-6 py-3 font-semibold text-[#116290] transition hover:bg-[#116290]/5">
                04 92 76 68 58
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-gray-500">Prix indicatif « à partir de », confirmé après étude de votre projet.</p>
          </div>

          <div className="relative min-h-[280px] bg-[#eaf2f6] sm:min-h-[380px] lg:min-h-[620px]">
            <Image
              src="/images/Installation-solaire-au-jardin.png"
              alt="Installation de panneaux solaires sur une maison avec jardin"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/35 via-transparent to-transparent" />
            <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-4 py-2.5 text-sm font-bold text-[#0d5578] shadow-lg">
              <SunIcon className="h-4 w-4 text-[#e9a900]" /> Votre projet solaire en PACA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
