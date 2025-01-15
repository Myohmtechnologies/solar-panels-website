'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PremiumMaterialSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      title: "Haute Performance",
      description: "Rendement optimal garanti par les meilleurs fabricants mondiaux",
      icon: "⚡"
    },
    {
      title: "Durabilité",
      description: "25 ans de garantie sur la production d'énergie",
      icon: "🛡️"
    },
    {
      title: "Certification",
      description: "Produits certifiés aux normes européennes les plus strictes",
      icon: "✓"
    }
  ];

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-FFDF64 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-AFC97E rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Contenu texte */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-AFC97E font-medium mb-4 tracking-wider">
              SÉCURITÉ ET RENDEMENT AU SOMMET
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Le matériel le plus sûr et le plus performant du marché
            </h2>

            <div className="space-y-6 text-gray-600 mb-8">
              <p>
                Nous travaillons exclusivement avec les marques de panneaux solaires et
                d&apos;onduleurs les plus fiables du monde.
              </p>
              <p>
                Notre sélection est basée sur le classement Bloomberg New Energy Finance
                et les retours d&apos;expérience des investisseurs professionnels qui évaluent
                minutieusement les risques et la performance de chaque marque.
              </p>
            </div>

            {/* Caractéristiques */}
            <div className="grid gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-AFC97E/10 rounded-full flex items-center justify-center text-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/simulator"
              className="group inline-flex items-center bg-FFDF64 text-gray-900 font-medium py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            >
              SIMULER VOTRE PROJET
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
          </motion.div>

          {/* Image et badges */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Image principale */}
              <div className="bg-F5F5F0 p-8 rounded-2xl shadow-lg">
                <Image
                  src="/images/pv.png"
                  alt="Panneaux solaires premium"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Badge de puissance */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 right-4 bg-white px-6 py-3 rounded-xl shadow-lg"
              >
                <p className="text-AFC97E font-semibold text-lg">425 - 500 W</p>
                <p className="text-gray-800">MY OHM Technologies</p>
              </motion.div>

              {/* Badge de certification */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl shadow-lg"
              >
                <p className="text-sm font-medium text-gray-900">Certifié Tier-1</p>
                <p className="text-xs text-gray-600">Bloomberg NEF</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumMaterialSection;
