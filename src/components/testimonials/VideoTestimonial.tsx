import React from 'react';

interface VideoTestimonialProps {
  videoUrl: string;
  clientName: string;
  city: string;
  installationDate: string;
  testimonial: string;
  thumbnail: string;
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  videoUrl,
  clientName,
  city,
  installationDate,
  testimonial,
  thumbnail
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        {/* Video player avec thumbnail personnalisé */}
        <div className="aspect-w-16 aspect-h-9">
          <video
            controls
            poster={thumbnail}
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        
        {/* Overlay avec informations du client */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h3 className="text-white text-xl font-semibold">{clientName}</h3>
          <p className="text-gray-200">Installation à {city}</p>
          <p className="text-gray-300 text-sm">{installationDate}</p>
        </div>
      </div>

      {/* Transcription du témoignage */}
      <div className="p-6">
        <blockquote className="text-gray-700 italic">
          "{testimonial}"
        </blockquote>
      </div>

      {/* Bouton de partage */}
      <div className="px-6 pb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Partager ce témoignage
        </button>
      </div>

      {/* Microdata pour le SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Service",
            "name": "Installation de panneaux solaires"
          },
          "author": {
            "@type": "Person",
            "name": clientName
          },
          "reviewBody": testimonial,
          "datePublished": installationDate,
          "publisher": {
            "@type": "Organization",
            "name": "Installation Panneaux Solaires PACA"
          }
        })}
      </script>
    </div>
  );
};
