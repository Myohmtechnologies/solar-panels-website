'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    quote:
      'Pour un propriétaire, les panneaux solaires constituent une solution avantageuse pour l’autoproduction d’énergie. Nous sommes finlandais et, en tant que nouveaux résidents en France, nous avons fait appel à une entreprise recommandée par des amis pour l’installation de panneaux solaires. Notre ancienne installation était de mauvaise qualité ; à l’occasion de travaux de rénovation de notre toiture, nous avons donc demandé à cette entreprise de mettre en place un nouveau système.\n\nL’expérience a été très positive pour nous. M. Abed est une personne compétente. Pour nous, qui venons des pays nordiques, la ponctualité et la qualité du travail sont des aspects essentiels. Nous recommandons vivement M. Ali.',
    names: 'Dr Pekka Roto · Dr Anna-Kaarina Roto',
    service: 'Installation solaire',
    location: 'Roquebrune-sur-Argens',
    image: '/images/pekka-roto.jpg',
    imageAlt: 'Projet solaire de Pekka et Anna-Kaarina Roto',
  },
  {
    id: 2,
    quote:
      'Très satisfait de l’installation de ma borne de recharge Schneider. Merci à Ali pour son professionnalisme, sa diligence et sa gentillesse. Le travail a été propre et minutieux ; tout s’est déroulé parfaitement. Je recommande My OHM Technologies sans hésiter !',
    names: 'Pinatel Maxime',
    service: 'Borne de recharge Schneider',
    image: '/images/Pinatel-Maxime.png',
    imageAlt: 'Installation de borne de recharge chez Maxime Pinatel',
  },
  {
    id: 3,
    quote:
      'Présentation des avantages et inconvénients par un personnel compétent. Préparation du fichier : aucun problème. Installation des équipements : impeccable. Propreté après installation : parfaite. Mise en service : aucun problème. Contrôle Consuel : passé sans accroc. En conclusion : je le recommande.',
    names: 'Gillies Ghizzardi',
    service: 'Installation électrique',
    image: '/images/Gillies-Ghizzardi.jpg',
    imageAlt: 'Réalisation du projet de Gillies Ghizzardi',
  },
  {
    id: 4,
    quote:
      'J’ai confié à MY OHM Technologies l’installation d’une borne de recharge Hager Witty à mon domicile, à Manosque, et j’en suis pleinement satisfait. L’équipe a fait preuve de ponctualité, de professionnalisme et d’une grande écoute. Le travail a été réalisé avec soin, l’installation m’a été parfaitement expliquée et le service client a été exemplaire. Il est rassurant de pouvoir compter sur une entreprise locale sérieuse et engagée. Encore merci à toute l’équipe pour son professionnalisme et sa sympathie. Je les recommande sans hésiter !',
    names: 'Karim',
    service: 'Borne de recharge Hager Witty',
    location: 'Manosque',
    image: '/images/karim.png',
    imageAlt: 'Installation de borne de recharge chez Karim à Manosque',
  },
  {
    id: 5,
    quote:
      'Ma première expérience avec cette entreprise familiale, pour l’installation de ma borne de recharge pour véhicule électrique, a été très positive. Tout a été réalisé à la perfection et dans le respect des normes, avec un travail minutieux. Je laisse rarement des avis, mais celui-ci est amplement mérité. Merci pour votre professionnalisme !',
    names: 'Paul Jourdan',
    service: 'Borne de recharge',
    image: '/images/Paul-Jourdan.jpg',
    imageAlt: 'Projet de borne de recharge de Paul Jourdan',
  },
];

type Testimonial = (typeof testimonials)[number];

export default function HomeTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevReview = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    if (isPaused || selectedTestimonial) return;

    const timer = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, selectedTestimonial, nextReview]);

  // Fermer la modal avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTestimonial(null);
      }
    };
    if (selectedTestimonial) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTestimonial]);

  // 3 avis visibles consécutifs
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-2 inline-flex rounded-full bg-[#116290]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">
              Ils nous font confiance
            </span>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Les avis de nos clients
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-gray-600">
            Découvrez leurs retours après la réalisation de leur projet avec
            notre équipe.
          </p>
        </div>

        {/* Carrousel avec boutons latéraux */}
        <div
          className="relative flex items-center gap-3 sm:gap-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Bouton Précédent (Desktop/Tablet) */}
          <button
            type="button"
            onClick={prevReview}
            className="hidden sm:flex z-10 h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#116290] shadow-sm transition hover:scale-105 hover:bg-gray-50 hover:border-[#116290]/40 active:scale-95"
            aria-label="Avis précédent"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          {/* Grille des 3 cartes (même taille, hauteur uniforme) */}
          <div className="w-full overflow-hidden py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch"
              >
                {visibleTestimonials.map((testimonial, idx) => (
                  <article
                    key={`${testimonial.id}-${idx}`}
                    className={`h-[450px] overflow-hidden rounded-2xl border border-[#116290]/10 bg-white shadow-[0_8px_28px_rgba(7,31,48,0.08)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(7,31,48,0.13)] flex flex-col justify-between ${
                      idx === 1
                        ? 'hidden md:flex'
                        : idx === 2
                        ? 'hidden lg:flex'
                        : 'flex'
                    }`}
                  >
                    {/* Image d'en-tête de hauteur fixe */}
                    <div className="relative h-48 w-full flex-shrink-0 overflow-hidden bg-[#eaf2f6]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#082f49]/65 to-transparent" />
                      <span className="absolute bottom-3 left-4 rounded-full border border-white/30 bg-[#082f49]/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {testimonial.service}
                      </span>
                    </div>

                    {/* Contenu textuel avec zone de citation à hauteur fixe */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="h-[92px] overflow-hidden">
                          <blockquote className="line-clamp-4 text-sm leading-relaxed text-gray-700 italic">
                            « {testimonial.quote} »
                          </blockquote>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectedTestimonial(testimonial)}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#116290] hover:text-[#ffb700] transition-colors"
                          aria-label={`Lire tout l'avis de ${testimonial.names}`}
                        >
                          <span>Voir plus</span>
                          <span aria-hidden="true">&rarr;</span>
                        </button>
                      </div>

                      {/* Bas de carte : Auteur, étoiles et localisation */}
                      <div className="mt-4 border-t border-[#116290]/10 pt-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-bold text-[#102c40] truncate max-w-[180px]">
                            {testimonial.names}
                          </p>
                          <div
                            className="flex items-center gap-0.5"
                            aria-label="5 étoiles sur 5"
                          >
                            {Array.from({ length: 5 }).map((_, i) => (
                              <StarIcon
                                key={i}
                                className="h-4 w-4 text-[#ffb700]"
                              />
                            ))}
                          </div>
                        </div>
                        {testimonial.location ? (
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                            <MapPinIcon className="h-3.5 w-3.5 text-[#116290]" />
                            {testimonial.location}
                          </p>
                        ) : (
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Avis client vérifié
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bouton Suivant (Desktop/Tablet) */}
          <button
            type="button"
            onClick={nextReview}
            className="hidden sm:flex z-10 h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#116290] shadow-sm transition hover:scale-105 hover:bg-gray-50 hover:border-[#116290]/40 active:scale-95"
            aria-label="Avis suivant"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Indicateurs de points et boutons mobile */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevReview}
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#116290] shadow-sm"
            aria-label="Avis précédent"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[#116290]'
                    : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextReview}
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#116290] shadow-sm"
            aria-label="Avis suivant"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Modal pour afficher l'avis complet sans altérer la taille des cartes */}
      {selectedTestimonial && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-review-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image avec badge et bouton fermer */}
            <div className="relative h-48 sm:h-56 w-full bg-[#eaf2f6]">
              <Image
                src={selectedTestimonial.image}
                alt={selectedTestimonial.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 500px"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#082f49]/70 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-[#082f49]/80 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {selectedTestimonial.service}
              </span>
              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Fermer la boîte de dialogue"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Contenu complet */}
            <div className="p-6 sm:p-7 max-h-[60vh] overflow-y-auto">
              {/* Note et étoiles */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="flex items-center gap-1"
                  aria-label="5 étoiles sur 5"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-[#ffb700]" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-gray-700">
                    5.0 / 5
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                  Avis vérifié Google
                </span>
              </div>

              {/* Texte complet */}
              <blockquote className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-gray-700 italic">
                « {selectedTestimonial.quote} »
              </blockquote>

              {/* Auteur et bouton fermer */}
              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <p
                    id="modal-review-title"
                    className="text-base font-bold text-[#102c40]"
                  >
                    {selectedTestimonial.names}
                  </p>
                  {selectedTestimonial.location && (
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
                      <MapPinIcon className="h-3.5 w-3.5 text-[#116290]" />
                      {selectedTestimonial.location}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTestimonial(null)}
                  className="rounded-xl bg-[#116290] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0a3d5c] transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
