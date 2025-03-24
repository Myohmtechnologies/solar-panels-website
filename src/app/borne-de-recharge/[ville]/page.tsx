import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import ChargingStationHero from './sections/ChargingStationHero';
import ChargingStationStats from './sections/ChargingStationStats';
import ChargingStationLocations from './sections/ChargingStationLocations';
import ChargingStationTypes from './sections/ChargingStationTypes';
import ChargingStationPricing from './sections/ChargingStationPricing';
import ChargingStationOperators from './sections/ChargingStationOperators';
import WhyInstallChargingStation from './sections/WhyInstallChargingStation';
import ChargingStationAdvantages from './sections/ChargingStationAdvantages';
import ChargingStationSubsidies from './sections/ChargingStationSubsidies';
import ChargingStationInstaller from './sections/ChargingStationInstaller';
import ChargingStationReviews from './sections/ChargingStationReviews';
import ChargingStationCTA from '@/app/components/ChargingStationCTA';
import { chargingStationCities } from '@/app/data/charging-stations/cities';
import { ChargingStationCity } from '@/app/data/types';

interface Props {
  params: {
    ville: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityData = chargingStationCities[params.ville];

  if (!cityData) {
    return {
      title: 'Page non trouvée',
      description: 'La ville demandée n\'existe pas.'
    };
  }

  return {
    title: `Bornes de recharge à ${cityData.name} ⚡| installation, Prix, Devis`,
    description: cityData.content.mainDescription,
    openGraph: {
      title: `Bornes de recharge à ${cityData.name} ⚡| installation, Prix, Devis`,
      description: cityData.content.mainDescription,
      images: [
        {
          url: '/images/charging-station-bg.jpg',
          alt: 'Borne de recharge électrique'
        }
      ]
    }
  };
}

export default async function ChargingStationCityPage({ params }: Props) {
  const cityData = chargingStationCities[params.ville];

  if (!cityData) {
    notFound();
  }

  // Préparation des données pour ChargingStationStats
  const statistics = {
    evCount: cityData.statistics.evCount,
    stationDensity: cityData.statistics.stationDensity,
    averageOccupancy: cityData.statistics.averageOccupancy,
    averageWaitTime: cityData.statistics.averageWaitTime
  };

  // Préparation des données pour ChargingStationTypes
  const chargingTypes = [
    {
      name: 'Charge Rapide',
      power: '50 kW - 150 kW',
      chargingTime: '30 min - 1h',
      compatibility: ['CCS', 'CHAdeMO'],
      count: cityData.chargingStations.chargingPoints.fast
    },
    {
      name: 'Charge Ultra-Rapide',
      power: '150 kW - 350 kW',
      chargingTime: '15 min - 30 min',
      compatibility: ['CCS'],
      count: cityData.chargingStations.chargingPoints.ultraFast
    },
    {
      name: 'Charge Standard',
      power: '7 kW - 22 kW',
      chargingTime: '2h - 8h',
      compatibility: ['Type 2'],
      count: cityData.chargingStations.chargingPoints.normal
    }
  ];

  // Préparation des données pour ChargingStationPricing
  const pricingTiers = [
    {
      name: 'Standard',
      power: '7 kW',
      pricePerKwh: 0.35,
      features: [
        'Accès à toutes les bornes standard',
        'Paiement à l\'utilisation',
        'Sans engagement'
      ]
    },
    {
      name: 'Premium',
      power: '50 kW',
      pricePerKwh: 0.45,
      subscriptionPrice: 9.90,
      features: [
        'Accès à toutes les bornes',
        'Tarifs préférentiels',
        'Réservation de borne',
        'Support prioritaire'
      ]
    },
    {
      name: 'Ultra',
      power: '150 kW+',
      pricePerKwh: 0.65,
      features: [
        'Accès aux bornes ultra-rapides',
        'Paiement à l\'utilisation',
        'Support 24/7'
      ]
    }
  ];

  // Préparation des données pour ChargingStationIncentives
  const incentives = cityData.localIncentives.map((incentive: string, index: number) => ({
    name: `Aide ${index + 1}`,
    description: incentive,
    amount: 'Variable',
    eligibility: ['Résidents', 'Particuliers'],
    provider: 'Ville'
  }));

  // Préparation des données pour ChargingStationOperators
  const operators = cityData.chargingStations.operators.map((op: { name: string; stationCount: number }) => {
    let logo = '';
    switch (op.name) {
      case 'TotalEnergies':
        logo = '/images/marque-voiture/Logo_TotalEnergies.svg.png';
        break;
      case 'Tesla':
        logo = '/images/marque-voiture/tesla-logo.webp';
        break;
      case 'IZIVIA':
        logo = '/images/marque-voiture/logo.png.webp';
        break;
      default:
        logo = '/images/placeholder-logo.png';
    }
    
    return {
      name: op.name,
      logo: logo,
      description: 'Réseau de recharge professionnel',
      stationCount: op.stationCount,
      coverage: ['Ville', 'Périphérie'],
      paymentMethods: ['CB', 'Badge opérateur']
    };
  });

  // Préparation des données pour ChargingStationLocations
  const locations = cityData.keyLocations.map((loc: { name: string; description: string; stationCount: number }) => ({
    name: loc.name,
    description: loc.description,
    stationCount: loc.stationCount,
    type: 'public' as const
  }));

  // Schema JSON-LD pour les avis
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Installation borne de recharge ${cityData.name}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "addressRegion": cityData.department,
      "addressCountry": "FR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "78",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": "Marie L.",
        "datePublished": "2024-03-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Installation rapide et professionnelle. L'équipe a été très à l'écoute de mes besoins et m'a conseillé la meilleure solution pour ma maison."
      },
      {
        "@type": "Review",
        "author": "Thomas D.",
        "datePublished": "2024-02-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent service client et installation impeccable. Je recommande vivement leurs services pour l'installation de bornes de recharge."
      },
      {
        "@type": "Review",
        "author": "Sophie M.",
        "datePublished": "2024-01-10",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Très satisfaite de ma borne de recharge. L'installation s'est faite en une demi-journée et tout fonctionne parfaitement."
      }
    ]
  };

  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <main>
        <ChargingStationHero
          cityName={cityData.name}
          department={cityData.department}
          departmentCode={cityData.department}
          description={cityData.content.mainDescription}
          totalStations={cityData.chargingStations.totalCount}
        />
        <WhyInstallChargingStation cityName={cityData.name} />
        <ChargingStationReviews cityName={cityData.name} />
        <ChargingStationAdvantages cityName={cityData.name} />
        <ChargingStationCTA />
        
        <ChargingStationLocations
          cityName={cityData.name}
          locations={locations}
        />
        <ChargingStationTypes
          types={chargingTypes}
        />
        <ChargingStationPricing
          pricingTiers={pricingTiers}
          cityName={cityData.name}
        />
        <ChargingStationCTA />
        
        <ChargingStationSubsidies cityName={cityData.name} />
        <ChargingStationInstaller cityName={cityData.name} />
        <ChargingStationCTA />
        <ChargingStationOperators
          operators={operators}
        />
        <ChargingStationStats
          statistics={statistics}
          chargingPoints={cityData.chargingStations.chargingPoints}
        />
        <ChargingStationCTA />
      </main>
    </>
  );
} 