'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';

export default function WhySolarSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
              🔎 Pourquoi Passer à l'Énergie Solaire ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🔹",
                  title: "Des économies garanties",
                  description: "Réduisez votre facture jusqu'à 70%"
                },
                {
                  icon: "🔹",
                  title: "Un retour sur investissement rapide",
                  description: "grâce aux aides de l'État"
                },
                {
                  icon: "🔹",
                  title: "Une énergie propre et durable",
                  description: "Valorisez votre bien immobilier"
                },
                {
                  icon: "🔹",
                  title: "Une installation certifiée RGE",
                  description: "Éligible aux primes et subventions"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                      <p className="text-black">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="tel:0123456789"
                className="inline-flex items-center space-x-2 bg-[#126290] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Besoin d'un conseil ? Appelez-nous au 04 92 76 68 58</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            🔎 Pourquoi Passer à l'Énergie Solaire ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🔹",
                title: "Des économies garanties",
                description: "Réduisez votre facture jusqu'à 70%"
              },
              {
                icon: "🔹",
                title: "Un retour sur investissement rapide",
                description: "grâce aux aides de l'État"
              },
              {
                icon: "🔹",
                title: "Une énergie propre et durable",
                description: "Valorisez votre bien immobilier"
              },
              {
                icon: "🔹",
                title: "Une installation certifiée RGE",
                description: "Éligible aux primes et subventions"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-black">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:0123456789"
              className="inline-flex items-center space-x-2 bg-[#126290] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>Besoin d'un conseil ? Appelez-nous au 04 92 76 68 58</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
