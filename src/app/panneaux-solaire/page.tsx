import { Metadata } from 'next';
import SolarProductionProcessSection from '@/components/sections/SolarProductionProcessSection';
import WhyPhotovoltaicSection from '@/components/sections/WhyPhotovoltaicSection';
import SolarEquipmentSection from '@/components/sections/SolarEquipmentSection';
import SolarTestimonialsSection from '@/components/sections/SolarTestimonialsSection';
import SolarPricingTableSection from '@/components/sections/SolarPricingTableSection';
import SolarProjectStepsCardsSection from '@/components/sections/SolarProjectStepsCardsSection';
import SolarFaqSection from '@/components/sections/SolarFaqSection';

export const metadata: Metadata = {
  title: 'Panneaux Solaires - Installation Photovoltaïque Clé en Main | My Ohm Technologies',
  description: 'Installation de panneaux solaires JinkoSolar Tiger Neo N°1 mondial et micro-onduleurs Enphase en région PACA. Réduisez votre facture d\'électricité avec un artisan certifié RGE.',
  keywords: [
    'panneaux solaires', 
    'production énergie solaire', 
    'cellules photovoltaïques', 
    'conversion énergie solaire', 
    'micro-onduleurs',
    'énergie renouvelable',
    'autoconsommation',
    'revente électricité',
    'JinkoSolar Tiger Neo',
    'Enphase IQ8AC'
  ]
};

export default function PanneauxSolairePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero / Promesse / 4.9 Google / Dès 6 900 € */}
      <SolarProductionProcessSection />

      {/* 2. Pourquoi le photovoltaïque en 2026 ? */}
      <WhyPhotovoltaicSection />

      {/* 3. Matériel premium : JinkoSolar Tiger Neo N°1 mondial */}
      <SolarEquipmentSection />

      {/* 4. Preuve sociale : Avis clients réels 100% solaire avec photos toitures */}
      <SolarTestimonialsSection />

      {/* 5. Tarifs transparents : 3 kWc, 6 kWc, 9 kWc avec Jinko + Enphase IQ8AC */}
      <SolarPricingTableSection />

      {/* 6. Les 4 étapes du projet d'installation */}
      <SolarProjectStepsCardsSection />

      {/* 7. Foire aux questions (FAQ) */}
      <SolarFaqSection />
    </div>
  );
}
