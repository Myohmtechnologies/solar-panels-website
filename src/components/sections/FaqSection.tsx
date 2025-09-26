'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Combien coûte l'installation d'une borne de recharge IRVE ?",
    answer: "Le prix d'une borne de recharge varie selon la puissance et les fonctionnalités :\n\n" +
           "• Borne 7kW (monophasé) : 1 200€ - 1 800€ TTC posée\n" +
           "• Borne 22kW (triphasé) : 1 800€ - 2 500€ TTC posée\n" +
           "• Options RFID, WiFi : +200€ à 400€\n\n" +
           "Ces prix incluent :\n" +
           "✓ La fourniture de la borne certifiée\n" +
           "✓ L'installation par électricien IRVE qualifié\n" +
           "✓ La mise en service et formation\n" +
           "✓ La garantie fabricant\n\n" +
           "Important : Vous pouvez bénéficier de la prime Advenir jusqu'à 500€ remboursés pour les particuliers, et jusqu'à 2 100€ pour les copropriétés."
  },
  {
    question: "Qu'est-ce que la qualification IRVE et pourquoi est-elle obligatoire ?",
    answer: "La qualification IRVE (Infrastructure de Recharge pour Véhicules Électriques) est obligatoire depuis 2017 pour installer des bornes de plus de 3,7kW. Elle garantit :\n\n" +
           "✓ La sécurité de l'installation électrique\n" +
           "✓ Le respect des normes en vigueur\n" +
           "✓ L'éligibilité aux aides publiques (Prime Advenir)\n" +
           "✓ La validation des assurances\n\n" +
           "MY OHM Technologies est certifié IRVE Qualifelec niveau P2 (jusqu'à 22kW) et peut installer tous types de bornes résidentielles et d'entreprise."
  },
  {
    question: "Puis-je installer une borne de recharge dans mon appartement ou copropriété ?",
    answer: "Oui, c'est votre droit ! Depuis 2014, tout locataire ou propriétaire peut demander l'installation d'une borne dans sa copropriété :\n\n" +
           "• Droit à la prise : installation à vos frais dans votre parking\n" +
           "• Solution collective : installation partagée avec la copropriété\n" +
           "• Prime Advenir copropriété : jusqu'à 50% du coût pris en charge\n\n" +
           "Nous nous occupons de toutes les démarches administratives et de la présentation en assemblée générale."
  },
  {
    question: "À quoi sert la mise aux normes électriques NF C 15-100 ?",
    answer: "La norme NF C 15-100 régit les installations électriques domestiques et garantit :\n\n" +
           "✓ La sécurité des personnes et des biens\n" +
           "✓ La protection contre les incendies d'origine électrique\n" +
           "✓ La conformité lors de la vente d'un bien\n" +
           "✓ L'éligibilité aux assurances habitation\n\n" +
           "Les points clés : présence d'un disjoncteur différentiel, mise à la terre, nombre suffisant de prises, éclairage de sécurité. Une installation non conforme peut être dangereuse et compromettre votre assurance."
  },
  {
    question: "Quand faut-il rénover son tableau électrique ?",
    answer: "Il est temps de rénover votre tableau électrique si :\n\n" +
           "• Il date de plus de 15 ans (anciens disjoncteurs)\n" +
           "• Il possède encore des fusibles à cartouche\n" +
           "• Il n'y a pas de différentiel 30mA\n" +
           "• Les disjoncteurs se déclenchent souvent\n" +
           "• Vous ajoutez de nouveaux équipements (borne, pompe à chaleur...)\n\n" +
           "Un tableau moderne améliore la sécurité, facilite la maintenance et permet d'intégrer de nouveaux équipements comme les bornes de recharge."
  },
  {
    question: "Quel est le prix des panneaux solaires en région PACA ?",
    answer: "En région PACA, le prix d'une installation solaire varie selon la puissance :\n\n" +
           "• Installation 3kWc : 7 500€ - 9 500€\n" +
           "• Installation 6kWc : 13 500€ - 16 500€\n" +
           "• Installation 9kWc : 18 500€ - 23 500€\n\n" +
           "Ces prix incluent matériel, pose et démarches administratives. L'excellent ensoleillement de PACA permet un retour sur investissement rapide (6-8 ans). Possibilité de coupler avec une borne de recharge pour une solution complète."
  },
  {
    question: "Puis-je alimenter ma borne de recharge avec mes panneaux solaires ?",
    answer: "Absolument ! C'est même une solution très avantageuse :\n\n" +
           "✓ Recharge gratuite avec votre propre électricité\n" +
           "✓ Optimisation de l'autoconsommation solaire\n" +
           "✓ Pilotage intelligent avec surplus solaire\n" +
           "✓ Réduction de l'empreinte carbone\n\n" +
           "Nous dimensionnons votre installation solaire en tenant compte de votre consommation domestique ET de votre véhicule électrique. Une installation de 6-9kWc permet généralement de couvrir les deux besoins."
  },
  {
    question: "Combien de temps prend l'installation d'une borne de recharge ?",
    answer: "L'installation d'une borne de recharge prend généralement :\n\n" +
           "• Borne simple (proche tableau) : 2-4 heures\n" +
           "• Borne avec câblage long : 4-6 heures\n" +
           "• Borne avec mise aux normes : 1 journée\n" +
           "• Projet copropriété : 2-3 semaines (études incluses)\n\n" +
           "Délai total depuis devis accepté : 2-4 semaines (incluant commande matériel et planification). Intervention propre et remise en état des lieux incluse."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#0a3d5c]/5 mb-4">
            <p className="text-sm font-medium text-[#0a3d5c]">Foire aux questions</p>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Questions fréquentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Trouvez les réponses aux questions les plus courantes sur nos services : bornes de recharge, électricité générale et panneaux solaires
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${openIndex === index ? 'border-l-4 border-[#116290]' : ''}`}
            >
              <button
                className={`w-full px-6 py-5 flex justify-between items-center bg-white transition-colors ${openIndex === index ? 'bg-white' : 'hover:bg-gray-50'}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-gray-900">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#116290]' : 'bg-gray-100'}`}>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180 text-white' : 'text-gray-600'}`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 py-5 bg-white border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
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
