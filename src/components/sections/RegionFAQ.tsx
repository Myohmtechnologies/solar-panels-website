'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

const RegionFAQ = ({ faqs }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f0f4f8 to-e1e7f0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur l&apos;installation de panneaux solaires dans votre région
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-FFDF64 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                      <p className="text-gray-600 text-lg">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Section Contact */}
        <div className="mt-12 bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl">
          <div className="flex items-center justify-center space-x-6">
            <QuestionMarkCircleIcon className="w-12 h-12 text-black" />
            <div>
              <h4 className="text-2xl font-bold text-black mb-3">
                Vous avez d&apos;autres questions ?
              </h4>
              <p className="text-black/80 text-lg">
                Notre équipe d&apos;experts est là pour vous accompagner dans votre projet solaire.
                N&apos;hésitez pas à nous contacter pour plus d&apos;informations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionFAQ;
