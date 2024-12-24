'use client';

import Image from "next/image";
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="container-pv py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="div-text text-center mb-16"
      >
        <p className="text-AFC97E font-medium mb-4 text-xl">
          Comment Produire de l&apos;énergie solaire?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Comment ça marche
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="pv-ccm mb-20 flex justify-center"
      >
        <div className="max-w-3xl w-full">
          <Image
            src="/images/panneaux-photovoltaique-comment-ca-marche.png"
            alt="Comment ça marche"
            width={800}
            height={500}
            className="rounded-2xl shadow-lg w-full h-auto"
            priority
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="comment-ca-marche-cards grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4"
      >
        <div className="comment-ca-marche-card bg-white p-8 rounded-2xl shadow-lg">
          <div className="comment-ca-marche-circle w-20 h-20 bg-FFDF64 rounded-full flex items-center justify-center text-3xl font-bold text-gray-900 mb-6 mx-auto">
            1
          </div>
          <p className="text-gray-600 leading-relaxed text-lg text-center">
            Le fonctionnement d&apos;un panneau solaire est assuré par les cellules
            photovoltaïques contenues dans les panneaux, chargées de capter
            cette lumière pour la transformer en énergie : le courant continu.
          </p>
        </div>

        <div className="comment-ca-marche-card bg-white p-8 rounded-2xl shadow-lg">
          <div className="comment-ca-marche-circle second w-20 h-20 bg-AFC97E rounded-full flex items-center justify-center text-3xl font-bold text-gray-900 mb-6 mx-auto">
            2
          </div>
          <p className="text-gray-600 leading-relaxed text-lg text-center">
            L&apos;onduleur central, ou les micro-onduleurs, convertissent ce courant
            continu en courant alternatif, envoyé directement aux appareils
            électriques de votre logement.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
