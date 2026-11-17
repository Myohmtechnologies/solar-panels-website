import Image from 'next/image';

export default function SolarEquipmentSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-t border-gray-100">
      {/* Halo subtil d'arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#ffdf64]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex rounded-full bg-[#116290]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">
              Les équipements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
              Des panneaux solaires{' '}
              <span className="text-[#116290]">sélectionnés pour durer</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-gray-600 lg:text-right">
            MY OHM Technologies choisit la référence la plus performante et
            adaptée à votre toiture, votre consommation et votre projet.
          </p>
        </div>

        {/* Grille principale : Produit à gauche, points clés à droite */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Colonne gauche : Image en grand format avec bords arrondis et badges superposés */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#082f49]/15">
            <Image
              src="/images/jinko.png"
              alt="Panneau solaire JinkoSolar Tiger Neo N°1 mondial"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 550px"
            />

            {/* Dégradé discret pour sublimer le contraste en haut */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#082f49]/60 via-[#082f49]/20 to-transparent" />

            {/* Badges superposés sur l'image */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-10 flex flex-col items-start gap-2.5">
              <span className="inline-flex rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0a3d5c] shadow-md border border-white/40">
                La marque sélectionnée par MY OHM
              </span>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#082f49]/90 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-lg border border-white/20">
                <span className="h-2 w-2 rounded-full bg-[#ffb700] animate-pulse" />
                <span>JinkoSolar Tiger Neo · N°1 mondial</span>
              </div>
            </div>
          </div>

          {/* Colonne droite : Les points clés techniques */}
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-[#116290]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">
              Les points clés
            </span>

            {/* Point 1 : Puissance */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#116290] tracking-tight">
                  500 Wc
                </span>
              </div>
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[#111827]">
                De puissance par panneau
              </h3>
              <p className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600">
                Pour produire davantage d’électricité sur une même surface de
                toiture et maximiser le rendement de votre installation.
              </p>
            </div>

            {/* Point 2 : Rendement */}
            <div className="border-b border-gray-100 pb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                Plus de
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#116290] tracking-tight">
                  22 %
                </span>
              </div>
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[#111827]">
                De rendement électrique
              </h3>
              <p className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600">
                Pour tirer le meilleur parti de chaque rayon de lumière reçu par
                vos panneaux, avec d'excellentes performances même par faible
                ensoleillement.
              </p>
            </div>

            {/* Point 3 : Technologie */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                Une technologie
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#116290] tracking-tight">
                  N-TYPE TOPCon
                </span>
              </div>
              <h3 className="mt-2 text-base sm:text-lg font-bold text-[#111827]">
                Haute performance & durabilité
              </h3>
              <p className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600">
                Des cellules de pointe conçues pour maintenir des performances
                optimales dans le temps avec une dégradation ultra-faible et une
                résistance thermique accrue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

