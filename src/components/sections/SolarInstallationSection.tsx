'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '15+',
    label: 'Installations réalisées',
    icon: '🏠'
  },
  {
    value: '100%',
    label: 'Clients satisfaits',
    icon: '⭐'
  },
  {
    value: '5+',
    label: "Années d'expérience",
    icon: '📅'
  }
];

const SolarInstallationSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20">
      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-AFC97E rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-FFDF64 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Section Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full">
              {/* Image principale */}
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/solar-worker.jpg"
                  alt="Technicien en installation solaire"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute -bottom-6 right-2 sm:right-4 lg:-right-6 bg-white p-2.5 sm:p-3 md:p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1 sm:p-1.5 md:p-2 bg-FFDF64 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Garantie Décennale</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Installation certifiée</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:w-1/2 w-full px-2 sm:px-0"
          >
            <p className="text-AFC97E font-medium mb-4 tracking-wider">
              L&apos;ÉNERGIE SOLAIRE À VOTRE PORTÉE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une installation solaire professionnelle partout en France
            </h2>

            <p className="text-gray-600 mb-8">
              Nous proposons des solutions solaires abordables avec des équipements de haute qualité. 
              Notre équipe d&apos;experts vous accompagne à chaque étape, de l&apos;étude personnalisée à 
              l&apos;installation finale, en passant par toutes les démarches administratives.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-center p-2 sm:p-4 bg-white rounded-xl shadow-md"
                >
                  <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-lg sm:text-xl text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <p className="text-gray-800 font-semibold mb-4">Nos certifications :</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-1.5 sm:p-2 rounded-lg shadow-md"
              >
                <Image
                  src="/images/qualipv.png"
                  alt="Certification QualiPv"
                  width={100}
                  height={40}
                  className="h-auto w-20 sm:w-[100px]"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-1.5 sm:p-2 rounded-lg shadow-md"
              >
                <Image
                  src="/images/decinal.png"
                  alt="Garantie Décennale"
                  width={100}
                  height={40}
                  className="h-auto w-20 sm:w-[100px]"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-1.5 sm:p-2 rounded-lg shadow-md"
              >
                <Image
                  src="/images/syndicat.png"
                  alt="Syndicat des énergies renouvelables"
                  width={100}
                  height={40}
                  className="h-auto w-20 sm:w-[100px]"
                />
              </motion.div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="group inline-flex items-center bg-FFDF64 text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
              >
                VOIR NOS CERTIFICATIONS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="group inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                NOUS CONTACTER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarInstallationSection;
