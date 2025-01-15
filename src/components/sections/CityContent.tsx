"use client";

import React from 'react';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { LocalFAQSection } from '@/components/LocalFAQSection';

interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

interface CityContentProps {
  city: {
    name: string;
    sunshineHours?: number;
    solarAdvantages?: string[];
    keyPoints?: string[];
    reviews?: Review[];
    seo?: {
      title?: string;
      metaDescription?: string;
      keywords?: string[];
      faqSchema?: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
}

export const CityContent: React.FC<CityContentProps> = ({ city }) => {
  return (
    <div className="city-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* SEO Meta Tags */}
      {city.seo?.title && <title>{city.seo.title}</title>}
      {city.seo?.metaDescription && <meta name="description" content={city.seo.metaDescription} />}
      {city.seo?.keywords && <meta name="keywords" content={city.seo.keywords.join(', ')} />}

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{city.seo?.title || city.name}</h1>
        {city.sunshineHours && (
          <p className="text-xl text-gray-600">
            Profitez de {city.sunshineHours}h d'ensoleillement par an pour votre installation solaire
          </p>
        )}
      </section>

      {/* Advantages Section */}
      {city.solarAdvantages && city.solarAdvantages.length > 0 && (
        <WhyChooseSection advantages={city.solarAdvantages} />
      )}

      {/* Key Points Section */}
      {city.keyPoints && city.keyPoints.length > 0 && (
        <section className="my-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Pourquoi choisir {city.name} pour votre installation solaire ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.keyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {city.reviews && city.reviews.length > 0 && (
        <section className="my-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Avis de nos clients à {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-xl font-semibold text-gray-900">
                    {review.author}
                  </span>
                  <span className="ml-4 text-yellow-500">
                    {"★".repeat(review.rating)}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{review.comment}</p>
                <div className="text-sm text-gray-500">
                  <p>{review.location}</p>
                  <p>{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {city.seo?.faqSchema && city.seo.faqSchema.length > 0 && (
        <LocalFAQSection faqs={city.seo.faqSchema} />
      )}
    </div>
  );
};

export default CityContent;
