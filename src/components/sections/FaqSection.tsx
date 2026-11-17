'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Quel budget prévoir pour une installation solaire ?",
    answer: "Le budget dépend notamment de la puissance nécessaire, des équipements choisis et de la configuration de votre toiture. Après étude de votre projet, nous pouvons vous présenter une proposition détaillée."
  },
  {
    question: "Mon logement est-il adapté aux panneaux solaires ?",
    answer: "Cela dépend de plusieurs éléments, comme l’état et la forme de la toiture, son orientation, les zones d’ombre et vos besoins en électricité. Une étude de faisabilité permet d’évaluer votre situation."
  },
  {
    question: "Comment est estimée la production de mon installation ?",
    answer: "L’estimation prend en compte la puissance envisagée, l’orientation et l’inclinaison de la toiture, les éventuelles zones d’ombre et les conditions locales. Elle est affinée lors de l’étude de votre projet."
  },
  {
    question: "Ai-je besoin d’une batterie de stockage ?",
    answer: "Pas nécessairement. Le choix dépend de vos habitudes de consommation, de la part d’électricité utilisée le soir et de votre budget. Nous pouvons comparer les options lors de l’étude."
  },
  {
    question: "Comment obtenir une étude personnalisée ?",
    answer: "Utilisez notre formulaire de demande de devis en ligne pour nous décrire votre projet. Notre équipe pourra ensuite vous recontacter afin de préciser vos besoins et les caractéristiques du logement."
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-2xl shadow-[#116290]/10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a3d5c] via-[#116290] to-[#0b5279] p-7 sm:p-9 lg:p-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border-[30px] border-[#ffdf64]/10" />
            <div className="relative">
              <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#ffdf64]">
                Foire aux questions
              </span>
              <h2 className="max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                Vos questions sur le solaire
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-white/80">
                Retrouvez les réponses essentielles pour avancer sereinement dans votre projet photovoltaïque.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/65">
                <span className="h-px w-8 bg-[#ffdf64]" /> MY OHM Technologies · Région PACA
              </div>
            </div>
          </div>

          <div className="space-y-3 p-4 sm:p-7 lg:p-10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isOpen ? 'border-[#116290]/20 bg-white shadow-md shadow-[#116290]/5' : 'border-gray-100 bg-slate-50/80 hover:border-[#116290]/15 hover:bg-white'}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-[1.125rem]"
                  >
                    <span className={`text-sm font-bold leading-6 sm:text-base ${isOpen ? 'text-[#0a3d5c]' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-gradient-to-br from-[#ffdf64] to-[#ffb700] text-[#0a3d5c]' : 'bg-[#116290]/5 text-[#116290]'}`}>
                      <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
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
