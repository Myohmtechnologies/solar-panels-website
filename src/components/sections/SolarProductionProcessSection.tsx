'use client';

import QuickSimulateur from '@/components/simulateurs/QuickSimulateur';

export default function SolarProductionProcessSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Bloc Gauche - Vidéo de l'entreprise */}
        <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[380px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="/images/my-ohm-technologies-entreprise-d'installation-de-panneaux-solaires.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        {/* Bloc Droit - Contenu Texte & Simulateur */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              <span className="text-[#116290] block">Divisez par 2</span>
              votre facture d'électricité
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
              Produisez votre propre énergie verte et réduisez durablement vos factures avec nos solutions photovoltaïques sur-mesure.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <QuickSimulateur />
          </div>
        </div>

      </div>
    </section>
  );
}



