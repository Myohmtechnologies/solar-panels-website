'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="flex-shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const PagesJaunesIcon = () => (
  <Image src="/images/pagesjaunes-logo-icone.png" alt="Pages Jaunes" width={25} height={25} />
);

const reviews = [
  {
    id: 1,
    content: "Entreprise sérieuse, bon boulot. J'ai envoyé des clients a cette entreprise, ils étaient enchantés du travail réalisé Bravo",
    author: "Christian Sanegre",
    date: "01 décembre 2024",
    rating: 5
  },
  {
    id: 2,
    content: "Une entreprise sérieuse qui a su répondre à mes attentes. Le commercial était très pédagogue et m'a bien expliqué les différentes options. L'installation s'est déroulée parfaitement et je vois déjà les économies sur ma facture.",
    author: "Remy Feraud",
    date: "3 Août 2024",
    rating: 5
  },
  {
    id: 3,
    content: "Une équipe attentive aux besoins du client, alliant professionnalisme et rigueur. Le chantier à été laissé propre, et nous avons reçu des explications claires sur la gestion des panneaux photovoltaique. Je recommande vivement My Ohm !",
    author: "Christelle Irénée",
    date: "28 décembre 2023",
    rating: 5
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNextReview = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setIsTransitioning(false);
      }, 500);
    }
  }, [isTransitioning]);

  const handlePrevReview = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
        setIsTransitioning(false);
      }, 500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      if (mounted) {
        handleNextReview();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
      setMounted(false);
    };
  }, [handleNextReview, mounted]);

  const getVisibleReviews = () => {
    if (isMobile) {
      return [reviews[currentIndex]];
    } else {
      return [
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length],
        reviews[(currentIndex + 2) % reviews.length]
      ];
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Ce que nos clients disent de nous
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-4 bg-white rounded-lg shadow-sm px-4 py-3">
              <GoogleIcon />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5/5 sur Google</span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-lg shadow-sm px-4 py-3">
              <PagesJaunesIcon />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5/5 sur Pages Jaunes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6 transition-all duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <div className="w-5 h-5 ml-auto">
                      <GoogleIcon />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <button 
              onClick={handlePrevReview}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setCurrentIndex(index);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-AFC97E w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNextReview}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(ReviewsSection), {
  ssr: false
});
