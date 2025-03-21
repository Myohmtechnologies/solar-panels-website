interface Review {
  author: string;
  rating: number;
  comment: string;
  location?: string;
  date?: string;
}

interface CityReviewsProps {
  reviews: Review[];
  cityName: string;
}

export default function CityReviews({ reviews, cityName }: CityReviewsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Avis de nos clients à {cityName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    {review.author.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{review.author}</h3>
                  {review.location && (
                    <p className="text-sm text-gray-600">{review.location}</p>
                  )}
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
              {review.date && (
                <p className="mt-4 text-sm text-gray-500">{review.date}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
