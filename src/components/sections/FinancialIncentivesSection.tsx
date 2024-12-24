'use client';

import { 
  CurrencyEuroIcon, 
  DocumentCheckIcon, 
  BuildingLibraryIcon 
} from '@heroicons/react/24/solid';

export default function FinancialIncentivesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f3f7fa to-e4e8f0">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-8 justify-center">
          <CurrencyEuroIcon className="w-12 h-12 text-FFDF64" />
          <h2 className="text-3xl font-bold text-gray-900">
            Aides et subventions Financières de l&rsquo;état
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-3">
              <DocumentCheckIcon className="w-10 h-10 text-FFDF64" />
              <h3 className="text-xl font-semibold text-gray-800">Prime à l&rsquo;Autoconsommation</h3>
            </div>
            <div className="text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>6 kWc : 1 140 €</li>
                <li>9 kWc : 1 710 €</li>
                <li>12 kWc : 2 280 €</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">Valable jusqu&rsquo;au 31 octobre 2024</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-3">
              <BuildingLibraryIcon className="w-10 h-10 text-FFDF64" />
              <h3 className="text-xl font-semibold text-gray-800">TVA Réduite</h3>
            </div>
            <div className="text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>Taux réduit à 5,5%</li>
                <li>Applicable aux résidences principales</li>
                <li>Économies substantielles</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">Conditions selon résidence</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-3">
              <CurrencyEuroIcon className="w-10 h-10 text-FFDF64" />
              <h3 className="text-xl font-semibold text-gray-800">Exonération Fiscale</h3>
            </div>
            <div className="text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>Exonération de taxe foncière</li>
                <li>Durée : 5 à 15 ans</li>
                <li>Selon collectivités locales</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">Avantage fiscal supplémentaire</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-8">
          <div className="flex items-center space-x-4 max-w-4xl mx-auto">
            <CurrencyEuroIcon className="w-10 h-10 text-black" />
            <div>
              <h4 className="font-bold text-black text-xl mb-2">Résumé des Avantages</h4>
              <ul className="text-black/80 list-disc list-inside">
                <li>Réduction jusqu&rsquo;à 30% du coût initial</li>
                <li>Aides adaptées à votre situation</li>
                <li>Économies sur le long terme</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Estimer Mes Aides
          </button>
        </div>
      </div>
    </section>
  );
}
