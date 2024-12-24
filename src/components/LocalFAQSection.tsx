import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    question: "Combien coûte une installation de panneaux solaires dans le Var ?",
    answer: "Le coût varie entre 8 000 € et 15 000 € selon la surface et la puissance. Avec les aides gouvernementales, le coût net peut être réduit jusqu'à 40%."
  },
  {
    question: "Quel est le potentiel solaire dans le Var ?",
    answer: "Le Var bénéficie de 2 800 heures d'ensoleillement par an, ce qui en fait l'une des régions les plus favorables en France pour l'énergie solaire."
  },
  {
    question: "Combien puis-je économiser avec des panneaux solaires ?",
    answer: "En moyenne, les habitants du Var peuvent économiser entre 800 € et 1 200 € par an sur leur facture d'électricité, avec un retour sur investissement en 7-10 ans."
  },
  {
    question: "Les panneaux solaires fonctionnent-ils par temps nuageux ?",
    answer: "Oui, les panneaux solaires produisent de l'électricité même par temps nuageux, bien que la production soit réduite comparée à un jour ensoleillé."
  },
  {
    question: "Quelles sont les aides disponibles dans le Var ?",
    answer: "Outre les aides nationales, le Var propose des subventions régionales et locales supplémentaires pour l'installation de panneaux solaires."
  }
];

const LocalFAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8 text-center border-b-4 border-FFDF64 pb-4">
          Questions Fréquentes dans le Var
        </h2>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-black font-semibold text-lg">
                  {faq.question}
                </span>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-black transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 text-black/80">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalFAQSection;
