'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const EconomicSection = () => {
  const cards = [
    {
      icon: "/images/icone-soleil.svg",
      title: "Avec + 300 jours d&apos;ensoleillements",
      bgColor: "bg-FFDF64",
      description: "Profitez d&apos;un ensoleillement optimal en région PACA"
    },
    {
      icon: "/images/icone-portefeuille.svg",
      title: "Jusqu&apos;à 80% d&apos;économie sur vos factures d&apos;électricité",
      bgColor: "bg-AFC97E",
      description: "Réduisez significativement vos dépenses énergétiques"
    },
    {
      icon: "/images/icone-energie.svg",
      title: "Une énergie verte et renouvelable",
      bgColor: "bg-FFDF64",
      description: "Contribuez activement à la transition écologique"
    },
    {
      icon: "/images/icone-valorisation.svg",
      title: "Valorisation de votre Patrimoine",
      bgColor: "bg-AFC97E",
      description: "Augmentez la valeur de votre bien immobilier"
    },
    {
      icon: "/images/energy-savings-icon.svg",
      title: "Autonomie Énergétique",
      bgColor: "bg-FFDF64",
      description: "Gagnez en indépendance énergétique avec votre installation solaire"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Décoration d&apos;arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-FFDF64 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-AFC97E rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-AFC97E font-medium mb-4 tracking-wider"
          >
            ÉCONOMISEZ AUJOURD&apos;HUI, PROTÉGEZ DEMAIN
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Économique et écologique: votre avenir est solaire
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Équipez votre maison de panneaux solaires pour réduire votre facture
            d&apos;électricité et agir positivement pour la transition écologique.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full h-[320px] flex flex-col items-center justify-center"
            >
              <div className="w-24 h-24 mb-4 ${card.bgColor} rounded-full p-5 group-hover:scale-110 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold text-center text-gray-900 mb-2 line-clamp-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm text-center line-clamp-3">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EconomicSection;
