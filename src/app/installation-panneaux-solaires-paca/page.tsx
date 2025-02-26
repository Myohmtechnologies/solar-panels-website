import HeroSection from '@/components/sections/paca/HeroSection';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import PricingSection from '@/components/sections/paca/PricingSection';
import WhySolarSection from '@/components/sections/paca/WhySolarSection';
import { Metadata } from 'next';
import PriceCalculator from '@/components/calculators/PriceCalculator';

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
      <HeroSection />
      <ClientTestimonialsSection />
      <WhySolarSection />
      <PriceCalculator />
      <PricingSection />
    </main>
  );
}