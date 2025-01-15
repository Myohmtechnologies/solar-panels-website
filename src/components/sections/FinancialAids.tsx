import { BanknotesIcon, HomeIcon, DocumentCheckIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface FinancialAidsProps {
  setIsQuoteModalOpen: (isOpen: boolean) => void;
}

export default function FinancialAids({ setIsQuoteModalOpen }: FinancialAidsProps) {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-black mb-8 text-center border-b-4 border-black/20 pb-4">
        Aides Financières de l'État pour Panneaux Solaires
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Prime à l'Autoconsommation */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-FFDF64/50 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
              <BanknotesIcon className="w-6 h-6 text-black" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-black">Prime à l'Autoconsommation</h3>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              6 kWc : 1 140 €
            </li>
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              9 kWc : 1 710 €
            </li>
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              12 kWc : 2 280 €
            </li>
          </ul>
          <p className="text-sm text-black/70 italic border-l-4 border-FFDF64 pl-4 mt-4">
            Valable jusqu'au 31 octobre 2024
          </p>
        </div>

        {/* TVA Réduite */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-FFDF64/50 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-black" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-black">TVA Réduite</h3>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              Taux réduit à 5,5%
            </li>
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              Applicable aux résidences principales
            </li>
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              Économies substantielles
            </li>
          </ul>
          <p className="text-sm text-black/70 italic border-l-4 border-FFDF64 pl-4 mt-4">
            Conditions selon résidence
          </p>
        </div>

        {/* Exonération Fiscale */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:border-FFDF64/50 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-full flex items-center justify-center">
              <DocumentCheckIcon className="w-6 h-6 text-black" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-black">Exonération Fiscale</h3>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              Exonération de taxe foncière
            </li>
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              Durée : 5 à 15 ans
            </li>
            <li className="text-black flex items-center">
              <span className="mr-2 text-FFDF64 font-bold">•</span>
              Selon collectivités locales
            </li>
          </ul>
          <p className="text-sm text-black/70 italic border-l-4 border-FFDF64 pl-4 mt-4">
            Avantage fiscal supplémentaire
          </p>
        </div>
      </div>
      {/* Bouton CTA Contacter un Spécialiste */}
      <div className="mt-12 text-center">
        <button 
          onClick={() => setIsQuoteModalOpen(true)}
          className="bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-4 px-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto space-x-3"
        >
          <PhoneIcon className="h-6 w-6" />
          <span>Contacter un Spécialiste pour vous accompagner</span>
        </button>
      </div>
    </section>
  );
}
