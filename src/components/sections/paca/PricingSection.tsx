'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              🔹 Ce Que Vous Devez Savoir sur le Prix
            </h2>

            <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
              <p className="text-xl text-[#126290] font-semibold mb-6">
                💰 Votre installation solaire peut être très rentable grâce aux aides !
              </p>
              <p className="text-black mb-8">
                Les aides de l'État et primes vous permettent de réduire considérablement votre investissement initial.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-black">
                  📌 Exemple d'une installation moyenne :
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-[#126290]">✅</span>
                    <p className="text-black">Prix avant aides : ~7 990 €</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#126290]">✅</span>
                    <p className="text-black">Aides et subventions : jusqu'à 3 600 €</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#126290]">✅</span>
                    <p className="text-black">Reste à charge : bien inférieur à ce que vous pensez !</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-black mb-6">
                  🎯 Pour connaître votre prix personnalisé, faites une estimation gratuite !
                </p>
                <button
                  onClick={() => {
                    // Scroll to simulator
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#126290] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all text-lg font-semibold"
                >
                  🔘 Obtenir mon devis GRATUIT maintenant
                </button>
              </div>
            </div>

            <div className="text-center text-black">
              <p className="text-sm">
                🔒 Nous respectons vos données – Aucune sollicitation abusive.
              </p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
            🔹 Ce Que Vous Devez Savoir sur le Prix
          </h2>

          <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
            <p className="text-xl text-[#126290] font-semibold mb-6">
              💰 Votre installation solaire peut être très rentable grâce aux aides !
            </p>
            <p className="text-black mb-8">
              Les aides de l'État et primes vous permettent de réduire considérablement votre investissement initial.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-black">
                📌 Exemple d'une installation moyenne :
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[#126290]">✅</span>
                  <p className="text-black">Prix avant aides : ~7 990 €</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#126290]">✅</span>
                  <p className="text-black">Aides et subventions : jusqu'à 3 600 €</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#126290]">✅</span>
                  <p className="text-black">Reste à charge : bien inférieur à ce que vous pensez !</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-black mb-6">
                🎯 Pour connaître votre prix personnalisé, faites une estimation gratuite !
              </p>
              <button
                onClick={() => {
                  // Scroll to simulator
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#126290] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all text-lg font-semibold"
              >
                🔘 Obtenir mon devis GRATUIT maintenant
              </button>
            </div>
          </div>

          <div className="text-center text-black">
            <p className="text-sm">
              🔒 Nous respectons vos données – Aucune sollicitation abusive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
