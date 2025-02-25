'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import RegionHero from '@/components/sections/RegionHero';
import PacaPageTracker from '@/components/tracking/PacaPageTracker';

// Optimisation des imports dynamiques avec préchargement
const PriceCalculator = dynamic(() => import('@/components/calculators/PriceCalculator'), {
  loading: () => <div className="animate-pulse bg-gray-100 rounded-xl p-8" />,
});

const ClientTestimonialsSection = dynamic(() => import('@/components/sections/ClientTestimonialsSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[300px]" />,
});

const SolarTechnologySection = dynamic(() => import('@/components/sections/SolarTechnologySection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[300px]" />,
});

const CaseStudySection = dynamic(() => import('@/components/sections/CaseStudySection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[300px]" />,
});

const FaqSection = dynamic(() => import('@/components/sections/FaqSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[200px]" />,
});

// Préchargement des sections importantes
const preloadComponents = () => {
  const componentsToPreload = [
    () => import('@/components/calculators/PriceCalculator'),
    () => import('@/components/sections/ClientTestimonialsSection'),
  ];
  
  componentsToPreload.forEach(component => {
    component();
  });
};

const regionData = {
  name: 'PACA',
  fullName: 'Provence-Alpes-Côte d\'Azur',
  title: "Installation Panneaux Solaires PACA - Devis Gratuit 2025",
  description: "✓ Devis Gratuit ✓ Installation en 2-3 jours ✓ Jusqu'à -70% d'économies ✓ Aides 2025 incluses. Experts certifiés RGE en PACA.",
  heroImage: '/images/installateur-de-panneaux-photovoltaiques-aix-en-provence.jpeg',
  ensoleillement: '2800 heures/an',
  potentielSolaire: '1600 kWh/m²/an',
  stats: [
    {
      value: '3J',
      label: 'Installation Express',
      description: 'Installation en 2-3 jours'
    },
    {
      value: '-70%',
      label: 'Sur votre facture',
      description: 'Économies maximales'
    },
    {
      value: '100%',
      label: 'Made in France',
      description: 'Panneaux français'
    }
  ],
  advantages: [
    {
      title: 'Installation Express',
      description: 'Installation professionnelle en 2-3 jours par nos experts certifiés.'
    },
    {
      title: 'Économies Garanties',
      description: 'Réduisez jusqu\'à 70% votre facture d\'électricité dès la première année.'
    },
    {
      title: 'Aides 2025 Incluses',
      description: 'Profitez des subventions maximales : MaPrimeRénov\', ECO-PTZ, et aides régionales PACA.'
    }
  ],
  faqs: [
    {
      question: 'Quel est le délai d\'installation des panneaux solaires en PACA ?',
      answer: 'Notre équipe certifiée réalise l\'installation en 2-3 jours ouvrés après acceptation du devis. Le processus complet, incluant les démarches administratives, prend environ 2-3 mois.'
    },
    {
      question: 'Quelles économies puis-je réaliser avec des panneaux solaires en PACA ?',
      answer: 'En PACA, grâce à l\'ensoleillement exceptionnel (2800h/an), nos clients réalisent en moyenne 70% d\'économies sur leur facture d\'électricité. Le retour sur investissement est généralement entre 4 et 6 ans avec les aides 2025.'
    },
    {
      question: 'Quelles sont les aides disponibles en 2025 pour la région PACA ?',
      answer: 'En 2025, vous pouvez cumuler : MaPrimeRénov\' (jusqu\'à 4000€), la prime à l\'autoconsommation, l\'éco-PTZ (prêt à taux zéro), et les aides régionales PACA. Lors de votre devis gratuit, nous calculons toutes vos aides personnalisées.'
    }
  ]
};

export default function SolarInstallationLandingPage() {
  preloadComponents();

  return (
    <>
      <PacaPageTracker />
      <main className="bg-white">
     

        <RegionHero 
          region={regionData.fullName}
          imagePath={regionData.heroImage}
          ensoleillement={regionData.ensoleillement}
          potentielSolaire={regionData.potentielSolaire}
        />

        {/* Avantages clés - Nouvelle section */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regionData.advantages.map((advantage, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ClientTestimonialsSection />

        {/* Calculateur de prix - Priorité plus haute */}
        <section className="py-16 px-4 bg-[#116290]/5">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Calculez vos économies d'énergie
            </h2>
            <PriceCalculator />
          </div>
        </section>

        
        
        <SolarTechnologySection />

        <CaseStudySection />

        <FaqSection faqs={regionData.faqs} />

        {/* CTA Final optimisé */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#116290] to-[#0c4668] text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Réduisez votre facture d'électricité dès maintenant
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Profitez des aides 2025 et de notre installation express en 2-3 jours
            </p>
            <button className="bg-white text-[#116290] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Obtenir mon devis gratuit
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
