import Link from 'next/link';
import { ArrowRightIcon, MapPinIcon, PhoneIcon, SunIcon } from '@heroicons/react/24/outline';

export default function SolarProductionProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f9fafb] px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8 lg:pt-10 lg:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-10 h-80 w-80 rounded-full bg-[#ffdf64]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="order-2 lg:order-1">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-4 py-2 text-sm font-bold text-[#0a3d5c] shadow-sm">
              <SunIcon className="h-4 w-4" /> Votre projet solaire
            </span>
            <div className="flex items-center space-x-1 bg-gray-100/80 px-4 py-2 rounded-full">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#116290] text-sm font-semibold">4.9/5 Google</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[2.85rem] font-extrabold leading-[1.12] tracking-tight text-[#111827] mb-4">
            <span className="block text-[#116290]">Divisez par 2</span>
            <span className="block whitespace-nowrap">votre facture d’électricité</span>
          </h2>

          <div className="mb-6">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#ffb700] block">
              À partir de 6 900 € TTC
            </span>
            <span className="text-sm text-gray-500 font-medium block mt-1">
              Installateur certifié RGE en région PACA
            </span>
          </div>

          <div className="space-y-3.5 mb-8">
            {[
              "Réduisez votre facture d'électricité jusqu'à 70%",
              "Produisez votre propre énergie verte et gagnez en autonomie",
              "Installation certifiée RGE"
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3 text-base sm:text-lg text-gray-700">
                <svg className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/simulator?prestation=panneaux"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#116290] to-[#0a3d5c] px-7 py-4 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Simuler vos économies <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+33492766858"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#116290]/30 bg-white px-7 py-4 text-base font-semibold text-[#116290] transition hover:bg-[#116290]/5"
            >
              <PhoneIcon className="mr-2 h-5 w-5" /> 04 92 76 68 58
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#eaf2f6] shadow-2xl shadow-[#082f49]/15">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Un conseiller MY OHM accompagne une cliente dans son projet solaire"
            >
              <source
                src="/images/my-ohm-technologies-entreprise-d'installation-de-panneaux-solaires.mp4"
                type="video/mp4"
              />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#082f49]/45 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-4 py-2.5 text-sm font-semibold text-[#116290] shadow-lg">
              <MapPinIcon className="h-4 w-4 text-[#f0aa00]" /> My Ohm Technologies · Région PACA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
