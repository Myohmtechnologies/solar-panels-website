'use client';

import { capitalizeFirstLetter } from '@/utils/stringUtils';

// Components imports
import CityHeroVideo from '@/components/sections/CityHeroVideo';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import SolarProductionProcessSection from '@/components/sections/SolarProductionProcessSection';
import CityIntroSection from '@/components/sections/CityIntroSection';
import InstallationPricingSection from '@/components/sections/InstallationPricingSection';
import StateAidsSection from '@/components/sections/StateAidsSection';
import SolarComponentsSection from '@/components/sections/SolarComponentsSection';
import LastInstallationsSection from '@/components/sections/LastInstallationsSection';
import SolarServicesSection from '@/components/sections/SolarServicesSection';
import SolarComparisonSection from '@/components/sections/SolarComparisonSection';
import LocalPresenceSection from '@/components/sections/LocalPresenceSection';
import CityFaqSection from '@/components/sections/CityFaqSection';
import LastBlogPostsSection from '@/components/sections/LastBlogPostsSection';
import ContactCTASection from '@/components/sections/ContactCTASection';
import SolarPowerSection from '@/components/sections/SolarPowerSection';
import RequestQuoteSection from '@/components/sections/RequestQuoteSection';
import RatingSchema from '@/components/schemas/RatingSchema';
import ProductSchema from '@/components/schemas/ProductSchema';
import VideoSchema from '@/components/schemas/VideoSchema';
import { pricingData } from '@/components/sections/InstallationPricingSection';

interface CityData {
  name: string;
  code: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  heroImage?: {
    url: string;
    alt: string;
  };
  sunshineHours?: number;
  population?: number;
  description?: string;
  seo?: {
    faqSchema: {
      question: string;
      answer: string;
    }[];
  };
}

interface CityPageContentProps {
  ville: string;
  cityData: CityData;
}

export default function CityPageContent({ ville, cityData }: CityPageContentProps) {
  const villeName = capitalizeFirstLetter(cityData.name.replace(/-/g, ' '));

  // Données pour la section de présence locale
  const localPresenceData = {
    name: cityData.name,
    coordinates: {
      lat: cityData.coordinates?.lat || 44.5633,
      lng: cityData.coordinates?.lng || 6.0822
    },
    googleReviews: {
      rating: 5.0,
      totalReviews: 78,
      recentReviews: [
        {
          author: "Marc L.",
          rating: 5,
          comment: "Installation parfaite malgré le terrain montagneux. Équipe très professionnelle !",
          date: "Il y a 4 jours"
        },
        {
          author: "Anne S.",
          rating: 5,
          comment: "Excellent service, installation adaptée à notre climat alpin. Je recommande !",
          date: "Il y a 2 semaines"
        },
        {
          author: "Robert D.",
          rating: 5,
          comment: "Très satisfait de l'installation. L'équipe connaît bien les spécificités de la région.",
          date: "Il y a 1 mois"
        }
      ]
    },
    interventionArea: {
      radius: 50,
      cities: [
        cityData.name,
        "Gap",
        "Briançon",
        "Embrun",
        "Laragne-Montéglin",
        "Veynes"
      ]
    }
  };

  const cityDescription = cityData.description || `Découvrez les avantages de l'installation de panneaux solaires à ${villeName}. Notre équipe d'experts vous accompagne dans votre projet de transition énergétique avec des solutions adaptées au climat montagnard des Hautes-Alpes.`;

  // Données du commercial
  const commercialData = {
    name: "Mathieu",
    role: "Expert en solutions solaires",
    image: "/images/team/mathieu.jpg",
    phone: "06 47 76 07 25",
    email: "contact@myohmtechnologies.com",
    location: "Hautes-Alpes"
  };

  // Conversion des avis Google pour le schéma de notation
  const reviewsForSchema = localPresenceData.googleReviews.recentReviews.map(review => ({
    author: review.author,
    rating: review.rating,
    date: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
    content: review.comment
  }));

  // Conversion des avis pour le schéma de produit
  const reviewsForProductSchema = localPresenceData.googleReviews.recentReviews.map(review => ({
    author: review.author,
    rating: review.rating,
    date: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
    comment: review.comment
  }));

  return (
    <main className="bg-white">
      {/* 1. Section Hero Video */}
      <CityHeroVideo 
        cityName={villeName}
        departmentCode="05"
        departmentName="Hautes-Alpes"
        description={cityDescription}
        population={cityData.population || 5000}
        sunshineHours={cityData.sunshineHours || 2800}
        heroImage={cityData.heroImage}
      />

      {/* 2. Section Témoignages Clients */}
      <ClientTestimonialsSection />

      {/* 3. Section Production Solaire */}
      <SolarProductionProcessSection />

      {/* 4. Section Introduction Ville */}
      <CityIntroSection 
        cityName={cityData.name}
        region="PACA"
        department="Hautes-Alpes"
        sunshineHours={cityData.sunshineHours || 2700}
      />

      {/* 5. Section Puissance Solaire */}
      <SolarPowerSection 
        cityName={villeName}
        sunshineHours={cityData.sunshineHours || 2700}
      />

      {/* 6. Section Aides d'État */}
      <StateAidsSection ville={villeName} />

      {/* 7. Section Prix Installation */}
      <InstallationPricingSection ville={cityData.name} />

      {/* 8. Section Composants Solaires */}
      <SolarComponentsSection />

      {/* 9. Section Dernières Installations */}
      <LastInstallationsSection />

      {/* 10. Section Services Solaires */}
      <SolarServicesSection cityName={cityData.name} />

      {/* 11. Section Comparaison Solaire */}
      <SolarComparisonSection />

      {/* 12. Section Présence Locale */}
      <LocalPresenceSection 
        cityData={localPresenceData}
        departmentCode="05"
        departmentName="Hautes-Alpes"
      />

      {/* 13. Section Devis Gratuit */}
      <RequestQuoteSection commercial={commercialData} />

      {/* 14. Section FAQ */}
      {cityData.seo?.faqSchema && (
        <CityFaqSection faqItems={cityData.seo.faqSchema} />
      )}

      {/* 15. Section Derniers Articles */}
      <LastBlogPostsSection />

      <RatingSchema
        businessName={`MY OHM Technologies - Installation Panneaux Solaires à ${villeName}`}
        city={villeName}
        region="PACA"
        ratingValue={localPresenceData.googleReviews.rating}
        reviewCount={localPresenceData.googleReviews.totalReviews}
        reviews={reviewsForSchema}
      />

      {/* Schéma de produit pour les panneaux solaires */}
      <ProductSchema
        businessName={`MY OHM Technologies - Installation Panneaux Solaires à ${villeName}`}
        city={villeName}
        region="PACA"
        pricingData={pricingData}
        reviews={reviewsForProductSchema}
      />

      {/* Schéma vidéo pour l'indexation par Google */}
      <VideoSchema
        name={`Installation de panneaux solaires à ${villeName}`}
        description={`Découvrez comment MY OHM Technologies installe des panneaux solaires à ${villeName} dans le département des Hautes-Alpes. Profitez d'un ensoleillement alpin exceptionnel et réduisez vos factures d'électricité.`}
        thumbnailUrl={`/videos/thumbnails/cities/${ville}.jpg`}
        contentUrl={`/videos/cities/${ville}.mp4`}
        embedUrl={`https://www.myohmtechnologies.com/videos/cities/${ville}.mp4`}
        uploadDate={new Date().toISOString().split('T')[0]}
        duration="PT1M30S"
      />
    </main>
  );
}
