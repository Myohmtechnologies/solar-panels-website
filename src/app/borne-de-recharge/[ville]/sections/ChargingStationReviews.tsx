'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { StarIcon, ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface ChargingStationReviewsProps {
  cityName: string;
}

const reviews = [
  {
    name: "Marie L.",
    role: "Propriétaire Tesla Model 3",
    initials: "ML",
    content: "Installation rapide et professionnelle. L'équipe a été très à l'écoute de mes besoins et m'a conseillé la meilleure solution pour ma maison.",
    rating: 5,
    date: "Mars 2024",
    category: "Installation",
    verified: true
  },
  {
    name: "Thomas D.",
    role: "Propriétaire Renault Zoe",
    initials: "TD",
    content: "Excellent service client et installation impeccable. Je recommande vivement leurs services pour l'installation de bornes de recharge.",
    rating: 5,
    date: "Février 2024",
    category: "Service Client",
    verified: true
  },
  {
    name: "Sophie M.",
    role: "Propriétaire Peugeot e-208",
    initials: "SM",
    content: "Très satisfaite de ma borne de recharge. L'installation s'est faite en une demi-journée et tout fonctionne parfaitement.",
    rating: 5,
    date: "Janvier 2024",
    category: "Installation",
    verified: true
  },
  {
    name: "Pierre B.",
    role: "Propriétaire BMW i4",
    initials: "PB",
    content: "Service professionnel du début à la fin. L'équipe technique est compétente et le suivi est excellent.",
    rating: 5,
    date: "Décembre 2023",
    category: "Suivi",
    verified: true
  },
  {
    name: "Julie R.",
    role: "Propriétaire Volkswagen ID.4",
    initials: "JR",
    content: "Très contente de mon installation. Le technicien a pris le temps de m'expliquer le fonctionnement en détail.",
    rating: 5,
    date: "Novembre 2023",
    category: "Formation",
    verified: true
  }
];

const stats = [
  {
    label: "Avis clients",
    value: "78",
    icon: UserGroupIcon,
  },
  {
    label: "Note moyenne",
    value: "5.0/5",
    icon: ChartBarIcon,
  },
  {
    label: "Délai moyen",
    value: "10 jours",
    icon: ClockIcon,
  },
];

export default function ChargingStationReviews({ cityName }: ChargingStationReviewsProps) {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f81ba]/5 to-[#d2edfa]/5" />
      
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c3248] mb-6">
            Avis clients à {cityName}
          </h2>
          <p className="text-[#0c3248]/90 text-xl mb-12">
            Découvrez les retours d'expérience de nos clients
          </p>

        

          {/* Badge Google Reviews */}
          <div className="inline-flex items-center gap-6 bg-white rounded-xl shadow-lg p-6 border border-[#0c3248]/10">
            <Image
              src="/images/avis-google.avif"
              alt="Google Reviews"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div className="flex items-center gap-4">
              <span className="font-bold text-[#0c3248] text-2xl">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`w-6 h-6 ${i < 5 ? 'text-[#ffb700]' : 'text-[#ffb700]/60'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#0c3248]/70">
                76 avis vérifiés
              </span>
            </div>
          </div>
        </div>

        {/* Carrousel */}
        <div className="max-w-7xl mx-auto">
          <div className="px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#0f81ba]',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="!overflow-hidden pb-16"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0c3248]/10 h-full flex flex-col">
                    {/* En-tête de l'avis */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#0c3248]/10">
                        <span className="text-[#0c3248] text-xl font-bold">
                          {review.initials}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-[#0c3248]">{review.name}</h3>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Vérifié
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#0c3248]/70">{review.role}</p>
                        <span className="inline-block mt-1 text-xs px-2 py-1 bg-[#0f81ba]/10 text-[#0f81ba] rounded-full">
                          {review.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <p className="text-[#0c3248]/90 mb-6 flex-grow">
                      "{review.content}"
                    </p>

                    {/* Pied de l'avis */}
                    <div className="flex justify-between items-center">
                      {/* Étoiles */}
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-[#ffb700]" />
                        ))}
                      </div>
                      {/* Date */}
                      <span className="text-sm text-[#0c3248]/60">{review.date}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

    
      </div>

      {/* Ajout de styles globaux pour Swiper */}
      <style jsx global>{`
        .swiper-wrapper {
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
} 