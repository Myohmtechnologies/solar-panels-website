'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function MerciPage() {
  const searchParams = useSearchParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d7f0fc] to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                <Image
                  src="/images/logo.png"
                  alt="MyOhm Technologies - Retour à l'accueil"
                  width={180}
                  height={60}
                  className="mx-auto"
                />
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#116290] mb-6">
              Merci pour votre confiance !
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Notre équipe d'experts va étudier votre projet et vous recontacter dans les plus brefs délais.
            </p>
          </div>

          {/* Carte principale */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#d7f0fc] mb-8">
            <h2 className="text-2xl font-semibold text-[#116290] mb-6">
              Les prochaines étapes de votre projet
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center text-white font-bold text-lg">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Étude personnalisée</h3>
                  <p className="text-gray-600">Nos experts analysent votre projet en détail pour vous proposer la solution la plus adaptée à vos besoins.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center text-white font-bold text-lg">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Premier contact sous 24h</h3>
                  <p className="text-gray-600">Un expert vous contactera pour discuter de votre projet et répondre à vos questions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center text-white font-bold text-lg">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visite technique gratuite</h3>
                  <p className="text-gray-600">Un technicien se déplace chez vous pour évaluer la faisabilité et optimiser votre installation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte des avantages */}
          <div className="bg-[#f8fcff] rounded-xl p-8 border border-[#d7f0fc]">
            <h2 className="text-2xl font-semibold text-[#116290] mb-6">
              Pourquoi choisir MyOhm Technologies ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ffb700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Expertise reconnue</h3>
                  <p className="text-gray-600">Plus de 1000 installations réalisées en PACA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ffb700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Garantie décennale</h3>
                  <p className="text-gray-600">Installation et matériel garantis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ffb700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Service local</h3>
                  <p className="text-gray-600">Entreprise basée en PACA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#ffb700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Accompagnement complet</h3>
                  <p className="text-gray-600">Des aides jusqu'à la mise en service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Une question ? Contactez-nous au{' '}
              <a href="tel:0484490968" className="text-[#116290] font-semibold hover:underline">
                04 84 49 09 68
              </a>
            </p>
            <Link 
              href="/"
              className="inline-flex items-center text-[#116290] hover:underline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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