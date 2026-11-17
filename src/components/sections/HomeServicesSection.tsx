'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 'solaire',
    title: 'Panneaux solaires',
    description: 'Produisez votre électricité avec une installation adaptée à votre maison.',
    href: '/panneaux-solaire',
    left: '62%',
    top: '55%',
  },
  {
    id: 'climatisation',
    title: 'Climatisation',
    description: 'Améliorez votre confort thermique avec une solution adaptée à votre logement.',
    href: '/climatisation',
    left: '58%',
    top: '30%',
  },
  {
    id: 'batterie',
    title: 'Batterie de stockage',
    description: 'Stockez une partie de votre production solaire pour l’utiliser plus tard.',
    href: '/batterie-de-stockage',
    left: '48%',
    top: '73%',
  },
  {
    id: 'borne',
    title: 'Borne de recharge',
    description: 'Rechargez votre véhicule à domicile ou sur votre site professionnel.',
    href: '/borne-de-recharge',
    left: '81%',
    top: '67%',
  },
];

const otherServices = [
  { label: 'Électricité générale', href: '/electricite-generale' },
  { label: 'Ballon d’eau chaude', href: '/installation-ballon-eau-chaude' },
];

export default function HomeServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <span className="mb-3 inline-flex rounded-full bg-[#116290]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">Nos prestations</span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Des solutions pour votre habitat</h2>
          <p className="mt-3 text-base text-gray-600 md:text-lg">Cliquez sur un point de l’image pour découvrir le service correspondant.</p>
        </div>

        <div className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-[2rem] bg-[#0a3d5c] shadow-2xl shadow-[#116290]/15">
          <Image
            src="/images/nos-service.png"
            alt="Maison équipée de panneaux solaires, d’une climatisation, d’une batterie de stockage et d’une borne de recharge"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071f30]/20 via-transparent to-transparent" />

          {services.map((service) => {
            const isActive = activeServiceId === service.id;
            return (
              <div key={service.id} className="absolute z-10" style={{ left: service.left, top: service.top }}>
                {isActive && (
                  <div className="absolute bottom-[calc(100%+0.8rem)] left-1/2 z-20 w-[min(22rem,calc(100vw-2.5rem))] -translate-x-1/2 sm:w-[22rem]">
                    <div className="relative rounded-2xl border border-[#116290]/10 bg-white p-5 text-left shadow-[0_14px_40px_rgba(7,31,48,0.22)] sm:p-6">
                      <h3 className="text-lg font-bold leading-snug text-[#102c40] sm:text-xl">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{service.description}</p>
                      <Link
                        href={service.href}
                        onClick={() => setActiveServiceId(null)}
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-5 py-2.5 text-sm font-bold text-[#123c54] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        Voir le service <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                      <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#116290]/10 bg-white" />
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  aria-label={`${isActive ? 'Masquer' : 'Découvrir'} : ${service.title}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveServiceId(isActive ? null : service.id)}
                  className={`flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white shadow-xl transition-all duration-200 hover:scale-110 ${isActive ? 'scale-110 bg-gradient-to-br from-[#ffdf64] to-[#ffb700] text-[#0a3d5c]' : 'bg-[#116290] text-white hover:bg-[#0a3d5c]'}`}
                >
                  <PlusIcon className={`h-6 w-6 transition-transform duration-200 ${isActive ? 'rotate-45' : ''}`} strokeWidth={2.5} />
                </button>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-4 max-w-6xl text-center text-sm text-gray-500">Sélectionnez un point « + » sur l’image pour découvrir le service correspondant.</p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className="mr-1 text-sm font-semibold text-gray-600">Autres prestations :</span>
          {otherServices.map((service) => (
            <Link key={service.href} href={service.href} className="inline-flex items-center gap-1 rounded-full border border-[#116290]/15 bg-white px-4 py-2 text-sm font-semibold text-[#116290] transition hover:border-[#116290]/30 hover:bg-[#116290]/5">
              {service.label}<ArrowRightIcon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
