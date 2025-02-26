'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuickSimulateur from '@/components/simulateurs/QuickSimulateur';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Désactiver les animations sur mobile pour améliorer les performances
  const shouldAnimate = typeof window !== 'undefined' && window.innerWidth > 768;

  const motionProps = shouldAnimate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  } : {};

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#126290] to-[#0c4a6e]">
      <div className="container mx-auto px-4">
        <motion.div
          {...motionProps}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          {/* Titre */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            🔆 Passez au Solaire et Économisez Jusqu'à 70% sur Votre Facture d'Électricité !
          </h1>

          {/* Simulateur */}
          {isMounted && <div className="mb-12"><QuickSimulateur /></div>}

          {/* Reste des informations */}
          <motion.div
            {...motionProps}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-black">
              Profitez des Aides de l'État Jusqu'à 3 600 € – Simulation Gratuite en 2 Min
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center text-black justify-center">
                <span className="mr-2">✅</span>
                Installation rapide avec un installateur certifié RGE
              </li>
              <li className="flex items-center text-black justify-center">
                <span className="mr-2">✅</span>
                Des économies garanties dès la 1ʳᵉ année
              </li>
            </ul>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-black">
              <p className="flex items-center justify-center">
                <span className="mr-2">📍</span>
                Disponible dans toute la région PACA : Marseille, Nice, Toulon, Avignon...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
