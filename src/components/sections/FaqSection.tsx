'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Quel est le prix des panneaux solaires photovoltaïques en région PACA ?",
    answer: "En région PACA, le prix d'une installation solaire varie selon plusieurs critères :\n\n" +
           "• Installation 3kWc (15m²) : 7890€ - 10 000€\n" +
           "• Installation 6kWc (30m²) : 15 000€ - 18 000€\n" +
           "• Installation 9kWc (45m²) : 20 000€ - 25 000€\n\n" +
           "Ces prix incluent :\n" +
           "✓ La fourniture du matériel (panneaux, onduleur, fixations)\n" +
           "✓ L'installation complète par nos équipes certifiées\n" +
           "✓ Les démarches administratives\n" +
           "✓ La garantie décennale\n\n" +
           "Important : Ces prix sont AVANT déduction des aides de l'État qui peuvent réduire votre investissement de 640€ à 1440€ selon votre situation. De plus, en région PACA, l'excellent ensoleillement permet un retour sur investissement plus rapide (5-7 ans en moyenne)."
  },
  {
    question: "Quel est le tarif d'achat de l'électricité photovoltaïque en France en 2024 ?",
    answer: "En 2024, le tarif d'achat varie selon la puissance installée : pour une installation ≤ 3kWc, le tarif est d'environ 0,1270€/kWh, pour 3-9kWc environ 0,1270€/kWh, et pour 9-36kWc environ 0,1270€/kWh. Ces tarifs sont garantis sur 20 ans par l'État français. L'autoconsommation avec vente du surplus est souvent la solution la plus avantageuse pour les particuliers."
  },
  {
    question: "Quel est le rendement des panneaux photovoltaïques ?",
    answer: "Le rendement moyen des panneaux photovoltaïques modernes se situe à 99,7% . En région PACA, grâce à l'excellent ensoleillement, un panneau de 1kWc peut produire jusqu'à 1 400 kWh par an. Les dernières technologies de panneaux monocristallins offrent les meilleurs rendements du marché."
  },
  {
    question: "Quelle orientation doit être privilégiée lors de l'installation des panneaux solaires ?",
    answer: "L'orientation optimale est plein sud (sud ±15°) avec une inclinaison de 30-35°. Cependant, une orientation sud-est ou sud-ouest reste très performante avec une perte de rendement limitée à 5-10%. En région PACA, même une orientation est-ouest peut être viable grâce au fort ensoleillement, avec une perte de rendement d'environ 15-20%."
  },
  {
    question: "Quelle différence entre des panneaux solaires photovoltaïques et thermiques ?",
    answer: "Les panneaux photovoltaïques produisent de l'électricité à partir de la lumière solaire, tandis que les panneaux thermiques chauffent un fluide pour produire de l'eau chaude. Les photovoltaïques sont plus polyvalents car ils permettent d'alimenter tous vos appareils électroniques et de revendre le surplus, alors que les thermiques ne servent qu'au chauffage de l'eau."
  },
  {
    question: "Quels sont les produits qui composent les installations solaires photovoltaïques ?",
    answer: "Une installation photovoltaïque complète comprend : les panneaux solaires, un onduleur pour convertir le courant continu en courant alternatif, un système de fixation adapté à votre toit, un compteur de production, un coffret de protection électronique, et éventuellement des batteries de stockage pour l'autoconsommation. Tous nos composants sont certifiés et garantis jusqu à 25 ans."
  },
  {
    question: "Puis-je bénéficier d'une exonération d'impôt sur le revenu pour la revente d'électricité ?",
    answer: "Oui, les revenus issus de la vente d'électricité photovoltaïque sont exonérés d'impots sur le revenu si la puissance de votre installation ne dépasse pas 3kWc. Au-delà, vous pouvez opter pour le régime micro-BIC avec un abattement forfaitaire de 71% sur vos revenus, rendant la fiscalité très avantageuse."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Questions Fréquentes sur le Solaire
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
