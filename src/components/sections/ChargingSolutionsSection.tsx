'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface ChargingSolution {
  name: string;
  reference: string;
  power: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

const chargingSolutions: ChargingSolution[] = [
  {
    name: 'Schneider EVlink Pro AC',
    reference: 'EVH5A22N400F',
    power: '7,4 à 22 kW • Monophasé & Triphasé',
    description:
      'Borne connectée et évolutive, parfaite pour la maison comme pour les petites flottes. Compatible TIC pour piloter la consommation et prête pour les usages smart grid.',
    image: '/images/borne-marque/schevh5a22n400f-schneider-borne-de-recharge-de-vehicule-electrique-connectable-removebg-preview.png',
    alt: 'Borne de recharge Schneider EVlink Pro AC installée par MY OHM Technologies',
    features: ['Pilotage TIC & délestage automatique', 'RFID et accès sécurisé', 'Connectivité Ethernet / Modbus'],
  },
  {
    name: 'Hager Witty One',
    reference: 'Borne fleet IP55 1x7kW T2 + TIC + RFID + App BLE + OCPP',
    power: '7 kW • Monophasé',
    description:
      'Solution idéale pour les professionnels et copropriétés : supervision via OCPP, pilotage par application mobile et lecteur RFID intégré pour gérer les utilisateurs.',
    image: '/images/borne-marque/hager-product-beauty-pic-witty-one-012b-por-socket-versio.webp',
    alt: 'Borne de recharge Hager Witty One installée par MY OHM Technologies',
    features: ['OCPP et supervision distante', 'RFID & app mobile BLE', 'Indice de protection IP55 extérieur'],
  },
  {
    name: 'Legrand Green’Up Home',
    reference: 'Borne 22 kW • Triphasé T2S',
    power: '22 kW • Triphasé',
    description:
      'Borne résidentielle haut de gamme avec connectivité WiFi & Ethernet pour un suivi détaillé. Prise T2S sécurisée et compatibilité avec les aides Advenir.',
    image: '/images/borne-marque/legrand-borne-de-recharge-green-up-home-22kw-triphase-t2s-wifi-ethernet-borne-residentiel-removebg-preview.png',
    alt: 'Borne de recharge Legrand Green’Up Home installée par MY OHM Technologies',
    features: ['Connectivité WiFi / Ethernet', 'Prise T2S verrouillable', 'Compatible gestion énergétique maison'],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * index, duration: 0.5 } }),
};

const ChargingSolutionsSection = () => {
  return (
    <section id="charging-solutions" className="relative py-20 bg-gradient-to-b from-white to-[#f3f7fb]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#116290]/10 text-[#116290] text-sm font-semibold uppercase tracking-[0.2em]">
            Nos solutions IRVE
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-[#062b52]">
            Des bornes sélectionnées pour chaque usage : particulier, pro et flotte
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nous installons des bornes de recharge certifiées et compatibles avec la prime Advenir. Choisissez la solution qui correspond à votre puissance disponible et à votre mode de recharge.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {chargingSolutions.map((solution, index) => (
            <motion.article
              key={solution.name}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="group relative flex flex-col rounded-3xl bg-white shadow-xl border border-[#116290]/10 overflow-hidden"
            >
              <div className="relative h-64 flex items-center justify-center bg-gradient-to-b from-white via-[#f8fbff] to-[#e9f2fa]">
                <Image
                  src={solution.image}
                  alt={solution.alt}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-1 p-6 gap-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#116290]/80">{solution.power}</span>
                  <h3 className="text-xl font-semibold text-[#062b52]">{solution.name}</h3>
                  <p className="text-sm text-gray-500">{solution.reference}</p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#116290]"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2 space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffe066] to-[#ffbf1f] px-4 py-1.5 text-xs font-semibold text-[#5b3b00] shadow-sm uppercase tracking-[0.2em]">
                    Prime Advenir • 500 € remboursés
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#116290] px-5 py-2.5 text-sm md:text-base font-semibold text-white transition-all hover:bg-[#0d4c73] hover:shadow-lg"
                  >
                    Demander un devis
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChargingSolutionsSection;
