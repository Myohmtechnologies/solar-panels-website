import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
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

export const metadata: Metadata = {
  title: 'MY OHM Technologies - Installation de panneaux solaires en PACA',
  description: 'MY OHM Technologies, votre expert en installation de panneaux solaires en région PACA. Profitez des aides et subventions pour votre projet solaire.',
  alternates: {
    canonical: 'https://www.myohmtechnologies.com',
  },
  openGraph: {
    title: 'MY OHM Technologies - Installation de panneaux solaires en PACA',
    description: 'MY OHM Technologies, votre expert en installation de panneaux solaires en région PACA. Profitez des aides et subventions pour votre projet solaire.',
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
    title: 'MY OHM Technologies - Installation de panneaux solaires en PACA',
    description: 'MY OHM Technologies, votre expert en installation de panneaux solaires en région PACA. Profitez des aides et subventions pour votre projet solaire.',
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
      <ClientTestimonialsSection />
      <CityActionButtons />
      <SolarBenefitsSection />
      <CaseStudySection />
      <SolarPanelSection />
      <SolarInstallationStepsSection />
      <FaqSection />
      <RegionMapSection region="PACA" />
      <ChatBot />
    </main>
  );
}