'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Combien coûte l'installation de panneaux solaires ?",
    answer: "Le coût d'une installation photovoltaïque varie en fonction de plusieurs facteurs : la puissance souhaitée, le type de panneaux, la configuration de votre toit, etc. En moyenne, une installation de 3kWc peut coûter entre 8000€ et 9990€, avec un retour sur investissement moyen de 4 à 6 ans grâce aux économies réalisées."
  },
  {
    question: "Quelles sont les aides disponibles pour l'installation ?",
    answer: "Plusieurs aides sont disponibles : la prime à l'autoconsommation, MaPrimeRénov', l'éco-prêt à taux zéro, et la TVA à 10%. Le montant total des aides peut couvrir jusqu'à 20% du coût de votre installation. Notre équipe vous accompagne dans toutes les démarches administratives."
  },
  {
    question: "Quelle est la durée de vie des panneaux solaires ?",
    answer: "Les panneaux solaires ont une durée de vie moyenne de 25 à 30 ans. Leur rendement diminue très légèrement chaque année (environ 0.5%). Les fabricants garantissent généralement 90% du rendement initial après 25 ans d'utilisation."
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer: "L'installation complète des panneaux solaires prend généralement 1 à 2 jours. Cependant, le projet complet, incluant les démarches administratives et le raccordement au réseau, peut prendre entre 2 et 3 mois."
  },
  {
    question: "L'entretien des panneaux solaires est-il contraignant ?",
    answer: "Non, l'entretien est minimal. Les panneaux sont autonettoyants grâce à la pluie. Un nettoyage annuel peut être recommandé pour optimiser les performances. Nous proposons des contrats de maintenance pour assurer un suivi régulier de votre installation."
  },
  {
    question: "Puis-je stocker l'énergie produite ?",
    answer: "Oui, il est possible d'installer des batteries de stockage pour conserver l'énergie produite pendant la journée. Cela permet d'augmenter votre taux d'autoconsommation jusqu'à 80%. Nous proposons différentes solutions de stockage adaptées à vos besoins."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les réponses aux questions les plus courantes sur l'installation de panneaux solaires et la transition vers l'énergie solaire.
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center gap-4"
              >
                <span className="font-medium text-left text-gray-900">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0
                    ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div
                className={`px-6 transition-all duration-200 ease-in-out overflow-hidden
                  ${openIndex === index ? 'pb-4 max-h-96' : 'max-h-0'}`}
              >
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-solar hover:opacity-90 transition-opacity"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
