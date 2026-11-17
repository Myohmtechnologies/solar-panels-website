'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { CalculatorIcon, CheckCircleIcon, ClipboardDocumentCheckIcon, PlayIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: CalculatorIcon,
    title: 'Simulation personnalisée',
    description: 'Décrivez votre projet pour obtenir une première estimation adaptée à vos besoins.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Étude de faisabilité',
    description: 'Nous étudions la toiture, votre consommation et les contraintes du logement.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Installation professionnelle',
    description: 'Nos équipes réalisent la pose et les raccordements de votre installation.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Mise en service',
    description: 'Nous vous présentons le fonctionnement et le suivi de votre installation.',
  },
];

export default function SolarInstallationStepsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
    } catch {
      setHasStarted(true);
    }
  };

  return (
    <section className="overflow-hidden bg-white px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">
            Un accompagnement clé en main
          </span>
          <h2 className="text-3xl font-extrabold text-[#111827] md:text-4xl">
            Les 4 étapes de votre projet
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-4 mb-4"></div>
          <p className="mt-2 text-base text-gray-600 md:text-lg">
            De la première simulation jusqu’à la production de vos premiers kWh, nous gérons l'ensemble des démarches et de la pose.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/3] max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#0a3d5c] shadow-2xl sm:aspect-[16/9] lg:aspect-[2.3/1]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            playsInline
            preload="metadata"
            poster="/images/installateur-rge-panneaux-solaire.jpeg"
            controls={hasStarted}
            onPlay={() => setHasStarted(true)}
          >
            <source src="/images/my-ohm-technologies-entreprise-d'installation-de-panneaux-solaires.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071f30]/50 via-[#071f30]/15 to-[#071f30]/30" />

          <Image
            src="/images/Portrait_d_un_technicien_MY_OHM_souriant-removebg-preview.png"
            alt="Technicien MY OHM souriant"
            width={403}
            height={619}
            sizes="(max-width: 640px) 48vw, (max-width: 1024px) 34vw, 28vw"
            className="pointer-events-none absolute bottom-0 left-0 z-10 h-[92%] w-auto max-w-[48%] object-contain object-bottom drop-shadow-2xl sm:h-[104%] sm:max-w-[38%] lg:max-w-[30%]"
          />

          {!hasStarted && (
            <button
              type="button"
              onClick={playVideo}
              aria-label="Lire la vidéo de présentation de MY OHM Technologies"
              className="absolute left-[60%] top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#116290] shadow-xl backdrop-blur transition hover:scale-105 hover:bg-white sm:h-20 sm:w-20"
            >
              <PlayIcon className="ml-1 h-8 w-8 text-[#116290] sm:h-10 sm:w-10" />
            </button>
          )}

          <span className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-[#0a3d5c]/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur sm:right-6 sm:top-6 sm:px-4 sm:text-xs">
            MY OHM Technologies · PACA
          </span>
        </div>

        <div className="relative z-20 mx-auto -mt-10 grid max-w-6xl grid-cols-1 gap-4 px-2 sm:grid-cols-2 sm:px-4 lg:-mt-16 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="group relative flex flex-col justify-start rounded-2xl border border-gray-100 bg-white p-6 pt-7 shadow-[0_12px_32px_rgba(10,61,92,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#116290]/20 hover:shadow-[0_18px_40px_rgba(10,61,92,0.13)]"
              >
                {/* Numéro étape rond jaune */}
                <span className="absolute -top-3.5 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffb700] text-sm font-black text-gray-900 shadow-md">
                  {index + 1}
                </span>

                {/* Icône dans carré jaune clair */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-200/60 shadow-sm">
                  <Icon className="h-6 w-6 text-[#116290]" />
                </div>

                {/* Titre */}
                <h3 className="text-base font-extrabold leading-snug text-[#0a3d5c] sm:text-lg">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
