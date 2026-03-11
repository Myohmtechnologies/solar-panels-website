"use client";

import React from 'react';

interface VideoTestimonialProps {
  videoUrl?: string;
  title?: string;
  description?: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  videoUrl = "https://www.youtube.com/embed/your-default-video-id",
  title = "Témoignage Client",
  description = "Découvrez l'expérience de nos clients avec l'installation de panneaux solaires"
}) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {title}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {description}
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
