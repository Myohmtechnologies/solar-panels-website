'use client';

import Image from 'next/image';
import Link from 'next/link';
import RegionHero from '@/components/sections/RegionHero';
import PriceCalculator from '@/components/calculators/PriceCalculator';
import ClientTestimonialsSection from '@/components/sections/ClientTestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import PacaPageTracker from '@/components/tracking/PacaPageTracker';

const regionData = {
  name: 'PACA',
  fullName: 'Provence-Alpes-Côte d\'Azur',
  title: "Installation Panneaux Solaires en PACA",
  description: "Profitez du meilleur ensoleillement de France pour votre installation solaire",
  heroImage: '/images/installateur-de-panneaux-photovoltaiques-aix-en-provence.jpeg',
  ensoleillement: '2800 heures/an',
  potentielSolaire: '1600 kWh/m²/an',
  stats: [
    {
      value: '2800',
      label: 'Heures d\'ensoleillement par an',
      description: 'Une des régions les plus ensoleillées de France'
    },
    {
      value: '1600',
      label: 'kWh/m²/an',
      description: 'Potentiel solaire exceptionnel'
    },
    {
      value: '30%',
      label: 'D\'économies moyennes',
      description: 'Sur votre facture d\'électricité'
    }
  ],
  advantages: [
    {
      title: 'Climat Méditerranéen Idéal',
      description: 'La région PACA bénéficie d\'un ensoleillement exceptionnel, optimisant la production d\'énergie solaire.'
    },
    {
      title: 'Aides Régionales Spécifiques',
      description: 'Profitez des subventions locales en plus des aides nationales pour votre installation.'
    },
    {
      title: 'Expertise Locale',
      description: 'Notre équipe connaît parfaitement les spécificités techniques et administratives de la région.'
    }
  ],
  faqs: [
    {
      question: 'Quelles sont les aides disponibles en région PACA pour l\'installation de panneaux solaires ?',
      answer: 'En PACA, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov\', l\'éco-prêt à taux zéro, la prime à l\'autoconsommation, et des aides régionales spécifiques. Le montant total peut couvrir jusqu\'à 75% de votre installation.'
    },
    {
      question: 'Combien de temps faut-il pour installer des panneaux solaires en PACA ?',
      answer: 'Le délai moyen d\'installation est de 2 à 3 jours. Cependant, le processus complet, incluant les démarches administratives et les études techniques, prend généralement 2 à 3 mois.'
    },
    {
      question: 'Quelle est la durée de vie des panneaux solaires dans le climat méditerranéen ?',
      answer: 'Dans le climat méditerranéen de la région PACA, les panneaux solaires ont une durée de vie moyenne de 25 à 30 ans, avec une garantie de performance de 25 ans sur nos produits.'
    }
  ]
};

export default function SolarInstallationLandingPage() {
  return (
    <>
      <PacaPageTracker />
      <main className="bg-white">
        {/* Header minimaliste */}
        <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-sm z-50 px-4 md:px-[10%] py-4 flex justify-between items-center">
          <Link href="/" className="logo shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={190}
              height={50}
              className="w-[190px] h-auto md:w-[210px]"
              priority
            />
          </Link>
          <Link 
            href="tel:0492766858" 
            className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg ml-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span className="font-bold text-sm md:text-base whitespace-nowrap">04 92 76 68 58</span>
            <span className="text-[10px] md:text-xs bg-green-500 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ml-1 md:ml-2 hidden sm:inline-block whitespace-nowrap">Appel gratuit</span>
          </Link>
        </header>

        <RegionHero 
          region={regionData.fullName}
          imagePath={regionData.heroImage}
          ensoleillement={regionData.ensoleillement}
          potentielSolaire={regionData.potentielSolaire}
        />
        <ClientTestimonialsSection />

        {/* Calculateur de prix */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Calculez vos economies
            </h2>
            <PriceCalculator />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection faqs={regionData.faqs} />

        {/* CTA Final */}
        <section className="py-16 px-4 bg-FFDF64">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Prêts à réduire votre facture d'électricité ?
            </h2>
            <button className="bg-black text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors">
              Demander un devis gratuit
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
