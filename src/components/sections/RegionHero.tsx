'use client';

import { motion } from 'framer-motion';
import QuickSimulateur from '../simulateurs/QuickSimulateur';

interface RegionHeroProps {
  region: string;
  ensoleillement: string;
  potentielSolaire: string;
}

export default function RegionHero({ region, ensoleillement, potentielSolaire }: RegionHeroProps) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center">
      {/* Arrière-plan stylisé avec dégradé bleu et jaune */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800">
          {/* Éléments décoratifs jaunes */}
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-yellow-400/20 blur-3xl"></div>
          <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-yellow-500/15 blur-3xl"></div>
          <div className="absolute top-[40%] left-[20%] w-40 h-40 rounded-full bg-yellow-300/20 blur-2xl"></div>
          
          {/* Motif solaire stylisé */}
          <div className="absolute top-[15%] right-[15%] w-32 h-32 rounded-full bg-yellow-400/40 blur-sm"></div>
          <div className="absolute top-[15%] right-[15%] w-24 h-24 rounded-full bg-yellow-500/60"></div>
          
          {/* Lignes décoratives */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            <div className="absolute top-[60%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-24">
        {/* Titre principal avec accent - Visible en premier sur mobile */}
        <div className="mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Installation Panneaux Solaires en <span className="text-yellow-400">{region}</span>
            </h1>
            <p className="text-xl text-white/90">Réduisez vos factures d'électricité jusqu'à 70% avec notre solution clé en main</p>
          </div>
        </div>

        {/* Grille principale avec ordre modifié pour mobile */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Simulateur - Apparaît en second sur mobile */}
          <div className="order-1 md:order-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="p-6">
                <QuickSimulateur />
              </div>
            </div>
          </div>

          {/* Statistiques - Apparaît en premier sur mobile */}
          <div className="order-2 md:order-1 flex items-center">
            <div className="space-y-8">
              {/* Statistiques d'ensoleillement */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center">
                  <span className="text-yellow-400 mr-2">☀️</span> 
                  Ensoleillement Exceptionnel
                </h3>
                <p className="text-white/80 mb-4">
                  Le département {region} bénéficie d'un ensoleillement optimal pour les installations photovoltaïques
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-white/60">Heures d'ensoleillement</p>
                    <p className="text-2xl font-bold text-yellow-400">{ensoleillement}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-white/60">Prix installation</p>
                    <p className="text-2xl font-bold text-yellow-400">À partir de 7890€</p>
                  </div>
                </div>
              </motion.div>

              {/* Avantages */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center">
                  <span className="text-yellow-400 mr-2">✓</span> 
                  Pourquoi choisir le solaire
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-white/80">Économies importantes sur vos factures d'électricité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-white/80">Installation par des professionnels certifiés RGE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-white/80">Aides financières de l'État et de la région</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
