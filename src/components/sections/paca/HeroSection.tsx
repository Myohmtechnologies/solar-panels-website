'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuickSimulateur from '@/components/simulateurs/QuickSimulateur';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setShouldAnimate(window.innerWidth > 768);
  }, []);

  const motionProps = shouldAnimate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  } : {};

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-400 to-blue-200">
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            🔆 Passez au Solaire et Économisez Jusqu'à 70% sur Votre Facture d'Électricité !
          </h1>
        </div>

        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-12">
          {isMounted && <QuickSimulateur />}
        </div>

        <div className="max-w-3xl mx-auto text-black">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="text-lg font-semibold mb-4 text-center">
              Profitez des Aides de l'État Jusqu'à 1440€ !
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2">✅</span>
                <span>Installation rapide avec un installateur certifié RGE</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✅</span>
                <span>Des économies garanties dès la 1ʳᵉ année</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-2">
              Disponible dans toute la région PACA
            </p>
            <p className="text-sm opacity-90">
              Marseille · Nice · Toulon · Avignon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
