'use client';

import { RegionData } from '@/config/seo';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface Props {
  region: RegionData;
}

const RegionFAQ = ({ region }: Props) => {
  const allAids = [...region.aids.regional, ...region.aids.local];
  const aidsList = allAids.map(aid => aid.title).join(', ');

  const defaultQuestions = [
    {
      question: `Pourquoi installer des panneaux solaires dans le ${region.name} ?`,
      answer: `Le ${region.name} bénéficie de ${region.sunshineHours} heures d'ensoleillement par an, ce qui en fait une région idéale pour l'installation de panneaux solaires. C'est le ${region.sunshineRank} département le plus ensoleillé de France.`
    },
    {
      question: `Quelles sont les aides disponibles dans le ${region.name} ?`,
      answer: aidsList 
        ? `Plusieurs aides sont disponibles : ${aidsList}. Contactez-nous pour une estimation personnalisée.`
        : `Plusieurs aides nationales et locales sont disponibles. Contactez-nous pour connaître les aides spécifiques à votre situation.`
    },
    {
      question: `Quelle production puis-je espérer dans le ${region.name} ?`,
      answer: `Avec un ensoleillement moyen de ${region.sunshineHours} heures par an, une installation solaire bien dimensionnée peut couvrir une part significative de votre consommation électrique. La consommation moyenne dans la région est de ${region.stats.averageConsumption} kWh/an.`
    },
    {
      question: `Combien coûte une installation solaire dans le ${region.name} ?`,
      answer: `Le coût d'une installation solaire dépend de plusieurs facteurs : la puissance souhaitée, le type de panneaux, la complexité de l'installation... Nous vous proposons une étude gratuite et personnalisée pour déterminer la solution la plus adaptée à votre situation.`
    }
  ];

  const questions = [...defaultQuestions, ...region.faq];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Questions Fréquentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Tout ce que vous devez savoir sur l&apos;installation de panneaux solaires dans le {region.name}
          </motion.p>
        </div>

        <div className="space-y-4">
          {questions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-sm">
                    <Disclosure.Button className="w-full px-4 py-4 text-left flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-500 transition-transform duration-200`}
                      />
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pb-4 text-gray-700">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionFAQ;
