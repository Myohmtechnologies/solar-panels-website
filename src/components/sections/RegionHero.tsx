'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  region: string;
  imagePath: string;
  ensoleillement: string;
  potentielSolaire: string;
}

const RegionHero = ({ region, imagePath, ensoleillement, potentielSolaire }: Props) => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      <Image
        src={imagePath}
        alt={`Installation panneaux solaires en ${region}`}
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Installation Panneaux Solaires en {region}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Profitez d&apos;un ensoleillement exceptionnel de {ensoleillement} par an et d&apos;un potentiel solaire de {potentielSolaire}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black px-8 py-4 rounded-3xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
              Simuler mon projet
            </button>
            <button className="bg-white/10 backdrop-blur-lg border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-3xl text-lg font-semibold transition-all duration-300 hover:shadow-lg">
              En savoir plus
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-FFDF64">{ensoleillement}</h3>
              <p className="text-gray-200">Heures d&apos;ensoleillement annuel</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-FFDF64">{potentielSolaire}</h3>
              <p className="text-gray-200">Potentiel solaire annuel</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionHero;
