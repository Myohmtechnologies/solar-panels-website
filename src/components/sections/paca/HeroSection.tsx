'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import QuickSimulateur from '@/components/simulateurs/QuickSimulateur';

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <Image
        src="/images/hero-paca.jpg"
        alt="Installation panneaux solaires PACA"
        fill
        priority
        className="object-cover z-0"
        quality={90}
      />
      <div className="container mx-auto px-4">
        {/* Titre visible uniquement sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:hidden"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            🔆 Passez au Solaire et Économisez Jusqu'à 70% sur Votre Facture d'Électricité !
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contenu de gauche - visible uniquement en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 hidden lg:block"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              🔆 Passez au Solaire et Économisez Jusqu'à 70% sur Votre Facture d'Électricité !
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-black">
                Profitez des Aides de l'État Jusqu'à 3 600 € – Simulation Gratuite en 2 Min
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-black">
                  <span className="mr-2">✅</span>
                  Installation rapide avec un installateur certifié RGE
                </li>
                <li className="flex items-center text-black">
                  <span className="mr-2">✅</span>
                  Des économies garanties dès la 1ʳᵉ année
                </li>
              </ul>
              <div className="bg-yellow-100 p-4 rounded-lg text-black">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Disponible dans toute la région PACA : Marseille, Nice, Toulon, Avignon...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Simulateur */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-lg mx-auto w-full"
          >
            <QuickSimulateur onStepChange={setCurrentStep} />
          </motion.div>

          {/* Contenu restant - visible uniquement sur mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:hidden"
          >
            <div className="space-y-4">
              <p className="text-xl text-black">
                Profitez des Aides de l'État Jusqu'à 3 600 € – Simulation Gratuite en 2 Min
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-black">
                  <span className="mr-2">✅</span>
                  Installation rapide avec un installateur certifié RGE
                </li>
                <li className="flex items-center text-black">
                  <span className="mr-2">✅</span>
                  Des économies garanties dès la 1ʳᵉ année
                </li>
              </ul>
              <div className="bg-yellow-100 p-4 rounded-lg text-black">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Disponible dans toute la région PACA : Marseille, Nice, Toulon, Avignon...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
