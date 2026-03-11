'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CompanyPresentationSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              MY OHM Technologies - Votre Expert Local en Énergie Solaire
            </h2>
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
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            MY OHM Technologies - entreprise d'installation de panneaux solaires photovoltaïque
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/local-my-ohm-technologies.jpg"
                alt="Showroom MY OHM Technologies - Installation panneaux solaires PACA"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-[#126290] mb-4">
                Une Entreprise Locale à Votre Service
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                Implantée au cœur de la région PACA, MY OHM Technologies est votre partenaire de confiance pour votre transition énergétique. Notre showroom, situé à Manosque, vous permet de découvrir concrètement les solutions solaires adaptées à vos besoins.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#126290] text-xl">✓</span>
                  <p className="text-gray-700">Installation certifiée RGE QualiPV</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#126290] text-xl">✓</span>
                  <p className="text-gray-700">Équipe locale expérimentée</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#126290] text-xl">✓</span>
                  <p className="text-gray-700">Accompagnement personnalisé</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#126290] text-xl">✓</span>
                  <p className="text-gray-700">Service après-vente réactif</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#126290] text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Visitez Notre Showroom
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
