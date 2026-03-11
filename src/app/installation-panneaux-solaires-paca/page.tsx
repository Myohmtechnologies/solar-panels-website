import HeroSection from '@/components/sections/paca/HeroSection';
import dynamic from 'next/dynamic';
import PricingSection from '@/components/sections/paca/PricingSection';
import WhySolarSection from '@/components/sections/paca/WhySolarSection';
import { Metadata } from 'next';
import PriceCalculatorWrapper from '@/components/wrappers/PriceCalculatorWrapper';
import MobileOptimizer from '@/components/optimizations/MobileOptimizer';

// Chargement dynamique des composants non-critiques
const ClientTestimonialsSection = dynamic(
  () => import('@/components/sections/ClientTestimonialsSection'),
  { 
    ssr: true,
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
  }
);

export const metadata: Metadata = {
  title: "Installation Panneaux Solaires PACA - Économisez Jusqu'à 70% | My Ohm Technologies",
  description: "Passez au solaire en PACA et économisez jusqu'à 70% sur votre facture. Profitez des aides jusqu'à 3600€. Devis gratuit en 2 minutes. Installation certifiée RGE.",
  openGraph: {
    title: "Installation Panneaux Solaires PACA - Économisez Jusqu'à 70% | My Ohm Technologies",
    description: "Passez au solaire en PACA et économisez jusqu'à 70% sur votre facture. Profitez des aides jusqu'à 3600€. Devis gratuit en 2 minutes.",
    url: 'https://www.myohmtechnologies.com/installation-panneaux-solaires-paca',
    siteName: 'My Ohm Technologies',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function PacaPage() {
  return (
    <main className="min-h-screen bg-white">
      <MobileOptimizer />
      <HeroSection />
      <WhySolarSection />
      <ClientTestimonialsSection />
      <PriceCalculatorWrapper />
      <PricingSection />
    </main>
  );
}