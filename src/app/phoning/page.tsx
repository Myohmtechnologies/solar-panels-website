import React from 'react';
import { Metadata } from 'next';
import PhoningWorkflow from '@/components/phoning/PhoningWorkflow';

export const metadata: Metadata = {
  title: 'Centre d\'appel MyOhm | Formulaire de saisie',
  description: 'Page réservée aux agents du centre d\'appel pour saisir les leads téléphoniques',
  robots: 'noindex, nofollow' // Cette page ne doit pas être indexée
};

export default function PhoningPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <img 
            src="/images/logo.png" 
            alt="MyOhm Technologies" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Centre d&apos;appel MyOhm Technologies
          </h1>
          <p className="text-gray-600">
            Formulaire de saisie pour les prospects téléphoniques
          </p>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <PhoningWorkflow />
          </div>
        </div>
      </div>
    </div>
  );
}
