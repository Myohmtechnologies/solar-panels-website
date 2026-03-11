import { ArrowTrendingUpIcon, SunIcon, BanknotesIcon } from '@heroicons/react/24/outline';

export default function EnergyValorizationSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Valorisez Votre Production Solaire
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Optimisez le rendement de votre installation solaire et maximisez vos économies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Autoconsommation */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-14 w-14 bg-FFDF64/10 rounded-xl flex items-center justify-center mb-6">
              <SunIcon className="h-8 w-8 text-FFDF64" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Autoconsommation
            </h3>
            <p className="text-gray-600 mb-6">
              Consommez directement l'énergie que vous produisez et réduisez 
              considérablement votre facture d'électricité.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-FFDF64 rounded-full"></span>
                Jusqu'à 80% d'autonomie
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-FFDF64 rounded-full"></span>
                Économies immédiates
              </li>
            </ul>
          </div>

          {/* Revente Totale */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-14 w-14 bg-FFDF64/10 rounded-xl flex items-center justify-center mb-6">
              <BanknotesIcon className="h-8 w-8 text-FFDF64" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Revente Totale
            </h3>
            <p className="text-gray-600 mb-6">
              Vendez toute votre production à EDF OA et bénéficiez d'un tarif 
              de rachat garanti pendant 20 ans.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-FFDF64 rounded-full"></span>
                Tarif fixe garanti
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-FFDF64 rounded-full"></span>
                Revenus prévisibles
              </li>
            </ul>
          </div>

          {/* Revente du Surplus */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-14 w-14 bg-FFDF64/10 rounded-xl flex items-center justify-center mb-6">
              <ArrowTrendingUpIcon className="h-8 w-8 text-FFDF64" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Revente du Surplus
            </h3>
            <p className="text-gray-600 mb-6">
              Autoconsommez votre production et vendez le surplus non utilisé 
              pour optimiser votre rentabilité.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-FFDF64 rounded-full"></span>
                Double avantage
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-FFDF64 rounded-full"></span>
                Flexibilité maximale
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Un Investissement Rentable
            </h3>
            <p className="text-gray-700 mb-8">
              Quelle que soit l'option choisie, votre installation solaire devient rentable 
              en 4 à 6 ans en moyenne, avec un retour sur investissement garanti.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-white mb-2">4-6</p>
                <p className="text-gray-600">Années de ROI</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-2">25+</p>
                <p className="text-gray-600">Ans de production</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-2">-50%</p>
                <p className="text-gray-600">Sur vos factures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
