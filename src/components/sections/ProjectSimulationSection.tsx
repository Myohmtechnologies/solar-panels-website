'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { simulatorEvents } from '@/utils/analytics';

interface SimulationSectionProps {
  cityName?: string;
}

const SimulationSection = ({ cityName }: SimulationSectionProps) => {
  const handleSimulatorClick = () => {
    simulatorEvents.simulatorStart('homepage_cta');
  };

  return (
    <section className="w-full bg-FFDF64 py-16" aria-label="Simulation de projet solaire">
      <motion.div 
        className="w-full max-w-7xl mx-auto text-center space-y-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl text-black font-bold uppercase text-center leading-tight">
            Simuler votre projet en moins 1 minute et obtenez votre devis sous 24h
          </h2>
          <p className="text-xl md:text-2xl text-black font-bold uppercase">
            Étude gratuite avis d&apos;experts
          </p>
        </div>
        <motion.div 
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/simulator"
            onClick={handleSimulatorClick}
            className="bg-15171A text-white px-4 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-opacity-90 transition-all uppercase text-sm md:text-base w-full md:w-auto inline-block mx-4"
            role="button"
            aria-label="Accéder au simulateur d'économie"
          >
            Accédez à votre simulateur d&apos;économie
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SimulationSection;
