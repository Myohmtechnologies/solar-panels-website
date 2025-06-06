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
import SolarPowerSection from '@/components/sections/SolarPowerSection';
import RequestQuoteSection from '@/components/sections/RequestQuoteSection';
import RatingSchema from '@/components/schemas/RatingSchema';
import ProductSchema from '@/components/schemas/ProductSchema';
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
      lat: cityData.coordinates?.lat || 43.7102,
      lng: cityData.coordinates?.lng || 7.2620
    },
    googleReviews: {
      rating: 5.0,
      totalReviews: 78,
      recentReviews: [
        {
          author: "Michel R.",
          rating: 5,
          comment: "Installation parfaite, équipe très professionnelle. Je recommande !",
          date: "Il y a 5 jours"
        },
        {
          author: "Claire D.",
          rating: 5,
          comment: "Excellent service, installation soignée et équipe à l'écoute.",
          date: "Il y a 2 semaines"
        },
        {
          author: "Patrick L.",
          rating: 4,
          comment: "Très satisfait de l'installation. Équipe réactive et professionnelle.",
          date: "Il y a 1 mois"
        }
      ]
    },
    interventionArea: {
      radius: 50,
      cities: [
        cityData.name,
        "Nice",
        "Cannes",
        "Antibes",
        "Grasse",
        "Menton"
      ]
    }
  };

  const cityDescription = cityData.description || `Découvrez les avantages de l'installation de panneaux solaires à ${villeName}. Notre équipe d'experts vous accompagne dans votre projet de transition énergétique avec des solutions adaptées au climat méditerranéen de la Côte d'Azur.`;

  // Données du commercial
  const commercialData = {
    name: "Nicolas",
    role: "Expert en solutions solaires",
    image: "/images/team/nicolas.jpg",
    phone: "06 47 76 07 25",
    email: "contact@myohmtechnologies.com",
    location: "Alpes-Maritimes"
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
      {/* Schéma de notation pour les résultats de recherche Google */}
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

      {/* 1. Section Hero Video */}
      <CityHeroVideo 
        cityName={villeName}
        departmentCode="06"
        departmentName="Alpes-Maritimes"
        description={cityDescription}
        population={cityData.population || 15000}
        sunshineHours={cityData.sunshineHours || 2850}
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
        department="Alpes-Maritimes"
        sunshineHours={cityData.sunshineHours || 2850}
      />

      {/* 5. Section Puissance Solaire */}
      <SolarPowerSection 
        cityName={villeName}
        sunshineHours={cityData.sunshineHours || 2850}
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
        departmentCode="06"
        departmentName="Alpes-Maritimes"
      />

      {/* 13. Section Devis Gratuit */}
      <RequestQuoteSection commercial={commercialData} />

      {/* 14. Section FAQ */}
      {cityData.seo?.faqSchema && (
        <CityFaqSection faqItems={cityData.seo.faqSchema} />
      )}

      {/* 15. Section Derniers Articles */}
      <LastBlogPostsSection />
    </main>
  );
}
