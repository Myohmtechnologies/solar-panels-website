'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import FaqSchema from '@/components/schemas/FaqSchema';

const solarFaqs = [
  {
    question: "Combien de temps faut-il pour rentabiliser mon installation solaire ?",
    answer:
      "En région PACA, grâce à un ensoleillement privilégié (plus de 2 800 heures de soleil par an) et aux panneaux JinkoSolar Tiger Neo N-Type à haut rendement, une installation est généralement rentabilisée entre 4 et 7 ans. Vos économies d'électricité démarrent immédiatement dès le premier jour de mise en service.",
  },
  {
    question: "Pourquoi avoir choisi les micro-onduleurs Enphase IQ8AC ?",
    answer:
      "Contrairement à un onduleur de chaîne centralisé, chaque panneau dispose de son propre micro-onduleur Enphase IQ8AC. Si un panneau subit une ombre passagère ou une saleté, tous les autres continuent de produire à 100 %. De plus, la technologie Enphase est garantie 25 ans et permet de suivre en temps réel la production panneau par panneau sur votre smartphone.",
  },
  {
    question: "Quelles sont les aides de l'État pour l'installation de panneaux solaires ?",
    answer:
      "En faisant appel à un installateur certifié RGE QualiPV comme MY OHM Technologies, vous bénéficiez de la prime à l’autoconsommation versée par l'État (jusqu'à 1 440 €), du tarif d'achat garanti de votre surplus par EDF OA pendant 20 ans, ainsi que d'un taux de TVA réduit à 10% pour les installations jusqu'à 3 kWc.",
  },
  {
    question: "Mon logement et ma toiture sont-ils adaptés aux panneaux solaires ?",
    answer:
      "La grande majorité des toitures (tuiles canal, tuiles mécaniques, bac acier ou toits plats) sont parfaitement compatibles. Nos techniciens vérifient l’orientation, l’inclinaison et l’état de la charpente lors d'une étude technique gratuite pour adapter sur mesure les fixations K2 Systems à votre toiture.",
  },
  {
    question: "Que devient l'électricité produite que je ne consomme pas ?",
    answer:
      "L'électricité photovoltaïque que vous ne consommez pas immédiatement est automatiquement injectée sur le réseau public et rachetée par EDF OA (Obligation d'Achat) à un tarif garanti fixé par la loi pendant 20 ans. Vous pouvez également opter pour une batterie physique ou virtuelle pour stocker ce surplus.",
  },
  {
    question: "Quelle est la durée de vie et la garantie des équipements ?",
    answer:
      "Nos panneaux solaires JinkoSolar Tiger Neo bénéficient d'une garantie de performance de 30 ans (garantissant plus de 87% de leur puissance initiale au bout de 30 ans). Les micro-onduleurs Enphase IQ8AC sont garantis 25 ans. Votre installation est également intégralement couverte par notre garantie décennale d'artisan.",
  },
];

export default function SolarFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12 border-t border-gray-100">
      <FaqSchema faqItems={solarFaqs} />
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-2xl shadow-[#116290]/10 md:grid-cols-[0.8fr_1.2fr]">
          {/* Bloc gauche brandé */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a3d5c] via-[#116290] to-[#0b5279] p-7 sm:p-9 lg:p-12 text-white">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border-[30px] border-[#ffdf64]/10" />
            <div className="relative z-10">
              <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#ffdf64]">
                Foire aux questions
              </span>
              <h2 className="max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                Vos questions sur le solaire
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-white/80">
                Retrouvez toutes les réponses essentielles pour préparer et réussir votre projet photovoltaïque en région PACA.
              </p>

              <div className="mt-8 pt-6 border-t border-white/15">
                <p className="text-xs text-white/70 uppercase tracking-wider mb-2 font-semibold">
                  Une question spécifique ?
                </p>
                <a
                  href="tel:+33492766858"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25 transition-colors backdrop-blur-sm"
                >
                  <PhoneIcon className="h-4 w-4 text-[#ffb700]" /> 04 92 76 68 58
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/65">
                <span className="h-px w-8 bg-[#ffdf64]" /> MY OHM Technologies · Région PACA
              </div>
            </div>
          </div>

          {/* Bloc droit accordéon */}
          <div className="space-y-3 p-4 sm:p-7 lg:p-10">
            {solarFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'border-[#116290]/20 bg-white shadow-md shadow-[#116290]/5'
                      : 'border-gray-100 bg-slate-50/80 hover:border-[#116290]/15 hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-[1.125rem]"
                  >
                    <span
                      className={`text-sm font-bold leading-6 sm:text-base ${
                        isOpen ? 'text-[#0a3d5c]' : 'text-gray-800'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? 'bg-gradient-to-br from-[#ffdf64] to-[#ffb700] text-[#0a3d5c]'
                          : 'bg-[#116290]/5 text-[#116290]'
                      }`}
                    >
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                      >
                        <p className="border-t border-gray-100 px-4 py-4 text-sm leading-6 text-gray-600 sm:px-5 sm:py-5 sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

