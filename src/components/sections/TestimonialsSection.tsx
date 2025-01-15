'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { Review } from '@/app/data/types';

interface TestimonialsSectionProps {
  cityName: string;
  reviews?: Review[];
}

export default function TestimonialsSection({ cityName, reviews }: TestimonialsSectionProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-black font-extrabold mb-8 border-b-4 border-black/20 pb-4 text-center">
          Témoignages à {cityName}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-black">{review.author}</h3>
                  <p className="text-sm text-gray-600">{cityName}</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-ffb700' : 'text-black/30'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-black">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
