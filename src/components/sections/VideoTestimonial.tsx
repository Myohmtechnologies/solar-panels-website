import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

interface VideoTestimonialProps {
  videoUrl: string;
  clientName: string;
  city: string;
  savings: string;
  reviews?: Review[];
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  videoUrl,
  clientName,
  city,
  savings,
  reviews = []
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          {/* Video Container */}
          <div className="w-full md:w-[336px] h-[600px] relative rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <video
              src={videoUrl}
              className="absolute inset-0 w-full h-full object-cover"
              controls
              autoPlay
              muted
              playsInline
              loop
            />
          </div>

          {/* Text Content */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Témoignage client 
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {clientName} a fait confiance à My Ohm Technologies pour son installation solaire.
              Découvrez son retour d'expérience et ses économies réalisées.
            </p>
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <p className="text-green-800 font-semibold text-xl">
                Économies réalisées : {savings}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Section */}
        {reviews && reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Témoignages de nos clients à {city}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center border-2 border-yellow-100">
                      <span className="text-lg font-semibold text-yellow-700">
                        {review.author[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {review.author}
                      </h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 text-lg">{review.comment}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonial;
