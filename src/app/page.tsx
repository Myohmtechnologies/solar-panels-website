import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ChargingSolutionsSection from '@/components/sections/ChargingSolutionsSection';
import CaseStudySection from '@/components/sections/CaseStudySection';
import SolarBenefitsSection from '@/components/sections/SolarBenefitsSection';
import SolarPanelSection from '@/components/sections/SolarPanelSection';
import SolarInstallationStepsSection from '@/components/sections/SolarInstallationStepsSection';
import FaqSection from '@/components/sections/FaqSection';
import RegionMapSection from '@/components/sections/RegionMapSection';
import HomeSchemaMarkup from '@/components/HomeSchemaMarkup';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import CityActionButtons from '@/components/sections/CityActionButtons';
import ChatBot from '@/components/ChatBot';
import CompanyPresentationSection from '@/components/sections/CompanyPresentationSection';
import SolarServicesSection from '@/components/sections/SolarServicesSection';
import SolarSolutionsSection from '@/components/sections/SolarSolutionsSection';
import InteractiveSolarSection from '@/components/sections/InteractiveSolarSection';

export const metadata: Metadata = {
  title: 'MY OHM Technologies – Bornes de Recharge & Électricité Générale en PACA',
  description: 'Installateur certifié de bornes de recharge pour véhicules électriques et spécialiste en électricité générale en Provence-Alpes-Côte d’Azur. Installation de panneaux solaires. Devis gratuit, intervention rapide.',
  alternates: {
    canonical: 'https://www.myohmtechnologies.com',
  },
  openGraph: {
    title: 'MY OHM Technologies – Bornes de Recharge & Électricité Générale en PACA',
    description: 'Installateur certifié de bornes de recharge pour véhicules électriques et spécialiste en électricité générale en Provence-Alpes-Côte d’Azur. Installation de panneaux solaires. Devis gratuit, intervention rapide.',
    url: 'https://www.myohmtechnologies.com',
    siteName: 'MY OHM Technologies',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MY OHM Technologies - Installation de panneaux solaires en PACA',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MY OHM Technologies – Bornes de Recharge & Électricité Générale en PACA',
    description: 'Installateur certifié de bornes de recharge pour véhicules électriques et spécialiste en électricité générale en Provence-Alpes-Côte d’Azur. Installation de panneaux solaires. Devis gratuit, intervention rapide.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HomeSchemaMarkup />
      <HeroSection />
      <ChargingSolutionsSection />
      <ClientTestimonialsSection />
      <InteractiveSolarSection />
      <CityActionButtons />
      <SolarBenefitsSection />
      <SolarServicesSection cityName="PACA" />
      <SolarInstallationStepsSection />
      <RegionMapSection region="PACA" />
      <FaqSection />
      
      <ChatBot />
    </main>
  );
}