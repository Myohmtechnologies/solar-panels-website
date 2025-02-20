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
      lat: cityData.coordinates?.lat || 43.4252,
      lng: cityData.coordinates?.lng || 6.7700
    },
    googleReviews: {
      rating: 4.9,
      totalReviews: 138,
      recentReviews: [
        {
          author: "Antoine P.",
          rating: 5,
          comment: "Service impeccable, installation rapide et soignée. Très satisfait !",
          date: "Il y a 3 jours"
        },
        {
          author: "Marie-Claire B.",
          rating: 5,
          comment: "Équipe professionnelle et à l'écoute. Installation parfaite !",
          date: "Il y a 2 semaines"
        },
        {
          author: "François M.",
          rating: 5,
          comment: "Excellent suivi et installation de qualité. Je recommande vivement.",
          date: "Il y a 1 mois"
        }
      ]
    },
    interventionArea: {
      radius: 50,
      cities: [
        cityData.name,
        "Toulon",
        "Fréjus",
        "Draguignan",
        "Hyères",
        "Saint-Raphaël"
      ]
    }
  };

  const cityDescription = cityData.description || `Découvrez les avantages de l'installation de panneaux solaires à ${villeName}. Notre équipe d'experts vous accompagne dans votre projet de transition énergétique avec des solutions adaptées au climat méditerranéen du Var.`;

  // Données du commercial
  const commercialData = {
    name: "Laurent",
    role: "Expert en solutions solaires",
    image: "/images/team/laurent.jpg",
    phone: "06 47 76 07 25",
    email: "contact@myohmtechnologies.com",
    location: "Var"
  };

  return (
    <main className="bg-white">
      {/* 1. Section Hero Video */}
      <CityHeroVideo 
        cityName={villeName}
        departmentCode="83"
        departmentName="Var"
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
        department="Var"
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
        departmentCode="83"
        departmentName="Var"
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
