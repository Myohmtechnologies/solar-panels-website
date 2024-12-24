'use client';

import { 
  SunIcon, 
  SparklesIcon, 
  CurrencyEuroIcon 
} from '@heroicons/react/24/solid';

export default function EnergyValorizationSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <SparklesIcon className="w-8 h-8 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Valorisez l&apos;énergie solaire
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Autoconsommation */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <SunIcon className="w-10 h-10 text-FFDF64 group-hover:animate-pulse" />
                <h3 className="text-2xl font-semibold text-gray-800">Autoconsommation</h3>
              </div>
              <div className="bg-FFDF64/20 p-2 rounded-full">
                <span className="text-sm font-bold text-FFDF64">Option 1</span>
              </div>
            </div>

            <div className="bg-f9fafb p-4 rounded-lg border border-gray-200 mb-4">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <SparklesIcon className="w-5 h-5 mr-2 text-FFDF64" />
                Comment Ça Fonctionne
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-FFDF64 rounded-full"></span>
                  Consommez directement l&apos;électricité produite par vos panneaux
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-FFDF64 rounded-full"></span>
                  Réduisez votre facture d&apos;électricité jusqu&apos;à 70%
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-FFDF64 rounded-full"></span>
                  Stockage possible avec batterie de stockage
                </li>
              </ul>
            </div>

            <div className="text-gray-600 text-sm">
              L&apos;autoconsommation vous permet de devenir acteur de votre production énergétique, en consommant directement l&apos;électricité produite par vos panneaux solaires.
            </div>
          </div>

          {/* Revente à EDF */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <CurrencyEuroIcon className="w-10 h-10 text-FFDF64 group-hover:animate-pulse" />
                <h3 className="text-2xl font-semibold text-gray-800">Revente à EDF</h3>
              </div>
              <div className="bg-FFDF64/20 p-2 rounded-full">
                <span className="text-sm font-bold text-FFDF64">Option 2</span>
              </div>
            </div>

            <div className="bg-f9fafb p-4 rounded-lg border border-gray-200 mb-4">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <SparklesIcon className="w-5 h-5 mr-2 text-FFDF64" />
                Comment Ça Fonctionne
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-FFDF64 rounded-full"></span>
                  Revendez l&apos;électricité non consommée à EDF
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-FFDF64 rounded-full"></span>
                  Tarif de rachat garanti pendant 20 ans
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-FFDF64 rounded-full"></span>
                  Revenus complémentaires garantis
                </li>
              </ul>
            </div>

            <div className="text-gray-600 text-sm">
              La revente à EDF vous permet de transformer votre surplus d&apos;énergie en revenus, avec un tarif de rachat attractif et sécurisé.
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-8 rounded-3xl mt-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h4 className="font-bold text-black text-2xl mb-4">Maximisez Vos Bénéfices</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="bg-black/10 p-3 rounded-xl">
                <SunIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <CurrencyEuroIcon className="w-8 h-8 text-black" />
              </div>
              <div className="bg-black/10 p-3 rounded-xl">
                <SparklesIcon className="w-8 h-8 text-black" />
              </div>
            </div>
            <ul className="text-black/80 space-y-2 max-w-xl mx-auto">
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Économies sur votre facture d&apos;électricité
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Revenus complémentaires
              </li>
              <li className="flex items-center justify-center">
                <span className="w-3 h-3 mr-3 bg-black rounded-full"></span>
                Contribution à la transition énergétique
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="relative px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group">
            <span className="relative z-10">Simuler Mon Projet</span>
            <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
