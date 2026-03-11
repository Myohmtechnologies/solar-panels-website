'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Comment fonctionne une batterie de stockage solaire ?",
    answer: "Une batterie de stockage solaire fonctionne en 4 étapes principales : 1) Les panneaux solaires produisent de l'électricité pendant la journée, 2) Le surplus d'énergie non consommé immédiatement est stocké dans la batterie, 3) Le soir et la nuit, l'énergie stockée est utilisée pour alimenter votre maison, 4) Un système de gestion intelligent optimise les flux d'énergie entre production, stockage et consommation pour maximiser votre autonomie."
  },
  {
    question: "Quelle économie peut-on réaliser avec une batterie de stockage ?",
    answer: "Avec une batterie de stockage couplée à des panneaux solaires, vous pouvez réaliser jusqu'à 70% d'économies sur vos factures d'électricité. Le système permet d'atteindre jusqu'à 90% d'autonomie énergétique en stockant l'énergie produite pendant la journée pour l'utiliser lorsque vos panneaux ne produisent pas."
  },
  {
    question: "Quelle est la durée de vie d'une batterie de stockage solaire ?",
    answer: "Les batteries de stockage solaire modernes ont une durée de vie moyenne de 10 à 15 ans. Nos solutions incluent des garanties fabricant allant jusqu'à 10 ans, assurant un fonctionnement optimal et une tranquillité d'esprit pour votre investissement."
  },
  {
    question: "Est-ce que l'installation d'une batterie de stockage est rentable ?",
    answer: "Oui, l'installation d'une batterie de stockage devient de plus en plus rentable avec l'augmentation des prix de l'électricité. Le retour sur investissement se situe généralement entre 7 et 10 ans, selon votre consommation et le dimensionnement de votre installation. De plus, vous bénéficiez d'une indépendance énergétique accrue et d'une protection contre les coupures de courant."
  },
  {
    question: "Peut-on installer une batterie de stockage sur une installation solaire existante ?",
    answer: "Oui, il est tout à fait possible d'ajouter une batterie de stockage à une installation photovoltaïque existante. Nos experts évaluent votre installation actuelle et vous proposent la solution de stockage la plus adaptée à votre système et à vos besoins énergétiques."
  },
  {
    question: "Existe-t-il des aides financières pour l'installation d'une batterie de stockage ?",
    answer: "Oui, plusieurs aides financières sont disponibles pour l'installation de batteries de stockage, notamment des crédits d'impôt, des primes à l'autoconsommation et des subventions locales. Nos conseillers vous accompagnent dans toutes les démarches administratives pour obtenir ces aides."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes sur les batteries de stockage solaire
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
