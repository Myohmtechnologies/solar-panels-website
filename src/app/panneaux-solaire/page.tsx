import { Metadata } from 'next';
import ContactCTASection from '@/components/sections/ContactCTASection';
import ActionCTASection from '@/components/sections/ActionCTASection';
import SolarProductionProcessSection from '@/components/sections/SolarProductionProcessSection';
import FinancialIncentivesSection from '@/components/sections/FinancialIncentivesSection';
import SolarTechnologySection from '@/components/sections/SolarTechnologySection';
import EnergyValorizationSection from '@/components/sections/EnergyValorizationSection';

export const metadata: Metadata = {
  title: 'Panneaux Solaires - Comprendre la Production d\'Énergie Solaire | My Ohm',
  description: 'Découvrez le fonctionnement des panneaux solaires et des micro-onduleurs. Apprenez comment la lumière est transformée en électricité pour votre logement.',
  keywords: [
    'panneaux solaires', 
    'production énergie solaire', 
    'cellules photovoltaïques', 
    'conversion énergie solaire', 
    'micro-onduleurs',
    'énergie renouvelable',
    'autoconsommation',
    'revente électricité'
  ]
};

export default function PanneauxSolairePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SolarProductionProcessSection />
      <ActionCTASection />
      <FinancialIncentivesSection />
      <SolarTechnologySection />
      <EnergyValorizationSection />
      <ContactCTASection />
    </main>
  );
}
