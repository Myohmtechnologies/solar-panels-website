'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, PhoneIcon } from '@/components/icons/CommonIcons';

export default function MerciPage() {
  const searchParams = useSearchParams();
  const [economiesAnnuelles, setEconomiesAnnuelles] = useState<number>(870);
  const [puissanceKwc, setPuissanceKwc] = useState<number>(3);
  
  useEffect(() => {
    // Récupérer les économies annuelles des paramètres d'URL si disponibles
    const economiesParam = searchParams.get('economiesAnnuelles');
    const puissanceParam = searchParams.get('puissance');
    
    if (economiesParam && !isNaN(Number(economiesParam))) {
      setEconomiesAnnuelles(Number(economiesParam));
    }
    
    if (puissanceParam && !isNaN(Number(puissanceParam))) {
      setPuissanceKwc(Number(puissanceParam));
    }
  }, [searchParams]);
  
  // Calcul des économies sur 25 ans
  const economiesSur25Ans = economiesAnnuelles * 25;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                <img
                  src="/images/logo.webp"
                  alt="MyOhm Technologies - Retour à l'accueil"
                  width={200}
                  height={80}
                  className="h-16 w-auto mx-auto"
                />
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-transparent bg-clip-text mb-6">
              Merci pour votre confiance !
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Notre équipe d'experts va étudier votre projet et vous recontacter dans les plus brefs délais.
            </p>
          </div>

          {/* Carte d'économies */}
          <div className="bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-xl p-8 shadow-lg mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Vos économies estimées avec les panneaux solaires
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Économies annuelles</h3>
                <p className="text-3xl font-bold text-[#116290]">{economiesAnnuelles} €</p>
                <p className="text-sm text-gray-500 mt-2">par an</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Économies sur 25 ans</h3>
                <p className="text-3xl font-bold text-[#116290]">{economiesSur25Ans.toLocaleString()} €</p>
                <p className="text-sm text-gray-500 mt-2">durée de vie des panneaux</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Puissance installée</h3>
                <p className="text-3xl font-bold text-[#116290]">{puissanceKwc} kWc</p>
                <p className="text-sm text-gray-500 mt-2">installation optimisée</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-800 font-medium">
                Ces économies sont basées sur les tarifs actuels de l'électricité et peuvent augmenter avec la hausse des prix.
              </p>
            </div>
          </div>

          {/* Carte principale */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-10">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-transparent bg-clip-text mb-6">
              Les prochaines étapes de votre projet
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center text-white font-bold text-lg">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Étude personnalisée</h3>
                  <p className="text-gray-600">Nos experts analysent votre projet en détail pour vous proposer la solution la plus adaptée à vos besoins.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center text-white font-bold text-lg">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Premier contact sous 24h</h3>
                  <p className="text-gray-600">Un expert vous contactera pour discuter de votre projet et répondre à vos questions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center text-white font-bold text-lg">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visite technique gratuite</h3>
                  <p className="text-gray-600">Un technicien se déplace chez vous pour évaluer la faisabilité et optimiser votre installation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte des avantages */}
          <div className="bg-gradient-to-r from-[#116290] to-[#0a3d5c] rounded-xl p-8 text-white mb-10">
            <h2 className="text-2xl font-semibold mb-6">
              Pourquoi choisir MyOhm Technologies ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expertise reconnue</h3>
                  <p className="text-gray-200">Plus de 1000 installations réalisées en PACA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Garantie décennale</h3>
                  <p className="text-gray-200">Installation et matériel garantis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Service local</h3>
                  <p className="text-gray-200">Entreprise basée en PACA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Accompagnement complet</h3>
                  <p className="text-gray-200">Des aides jusqu'à la mise en service</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Vous avez des questions ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est disponible pour répondre à toutes vos interrogations
            </p>
            <a 
              href="tel:0492766858" 
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-gray-800 py-3 px-6 rounded-lg font-medium text-lg hover:shadow-lg transition-all"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>04 92 76 68 58</span>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#116290] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}