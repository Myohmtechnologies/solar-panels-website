import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SolarInstallationSection from '@/components/sections/SolarInstallationSection';
import ProjectSimulationSection from '@/components/sections/ProjectSimulationSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CaseStudySection from '@/components/sections/CaseStudySection';
import SolarBenefitsSection from '@/components/sections/SolarBenefitsSection';
import ShowroomSection from '@/components/sections/ShowroomSection';
import SolarPanelSection from '@/components/sections/SolarPanelSection';
import SolarInstallationStepsSection from '@/components/sections/SolarInstallationStepsSection';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import ContactCTASection from '@/components/sections/ContactCTASection';
import ActionCTASection from '@/components/sections/ActionCTASection';
import PartnersSection from '@/components/sections/PartnersSection';
import Script from 'next/script';
import RegionSolarInstallationSection from '@/components/sections/RegionSolarInstallationSection';
import { defaultRegion } from '@/config/seo';

export const metadata: Metadata = {
  title: 'My Ohm - Installations de Panneaux Solaires | Économies d\'Énergie',
  description: 'Découvrez My Ohm, votre expert en installations de panneaux photovoltaïques. Simulez vos économies d\'énergie, bénéficiez de solutions sur mesure dans les Alpes de Haute-Provence et toute la région PACA.',
  keywords: [
    'installations panneaux solaires', 
    'installations de panneaux photovoltaïques', 
    'économies d\'énergie', 
    'simulateur d\'énergie', 
    'installation de panneaux solaires Alpes de Haute-Provence',
    'panneaux solaires PACA',
    'énergie renouvelable',
    'transition énergétique'
  ],
  openGraph: {
    title: 'My Ohm - Économisez avec l\'Énergie Solaire',
    description: 'Solutions personnalisées de panneaux solaires. Réduisez vos factures et votre empreinte carbone.',
    type: 'website',
    url: 'https://www.myohm.fr',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Ohm - Panneaux Solaires'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Ohm - Économisez avec l\'Énergie Solaire',
    description: 'Solutions personnalisées de panneaux solaires. Réduisez vos factures et votre empreinte carbone.',
    images: '/images/og-image.jpg'
  }
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "My Ohm",
            "description": "Expert en installations de panneaux solaires et solutions d'économies d'énergie",
            "url": "https://www.myohm.fr",
            "logo": "https://www.myohm.fr/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33652632145",
              "contactType": "Customer Service",
              "availableLanguage": "French"
            },
            "sameAs": [
              "https://www.facebook.com/myohm",
              "https://www.instagram.com/myohm",
              "https://www.linkedin.com/company/myohm"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Installation de Panneaux Solaires",
              "description": "Solutions personnalisées d'installations photovoltaïques pour particuliers et entreprises"
            }
          })
        }}
      />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ShowroomSection />
        <PartnersSection />
        <CaseStudySection />
        <ActionCTASection />
        <SolarBenefitsSection />
        <SolarPanelSection />
        <SolarInstallationStepsSection />
        <ClientTestimonialsSection />
        <RegionSolarInstallationSection region={defaultRegion} />
        <ContactCTASection />
      </main>
    </>
  );
}