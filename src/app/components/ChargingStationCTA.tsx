import { BuildingOfficeIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function ChargingStationCTA() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Option Entreprise */}
          <div className="bg-[#0f81ba] text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-start gap-6 mb-8">
              <BuildingOfficeIcon className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Une installation clé en main</h3>
                <ul className="space-y-3 mb-6">
                  
                  <li className="flex items-center gap-2">
                    <span className="text-[#0f81ba]">✓</span>
                    Étude de faisabilité technique
                  </li>
               
                  
                  <li className="flex items-center gap-2">
                    <span className="text-[#0f81ba]">✓</span>
                    Diagnostic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0f81ba]">✓</span>
                    Maintenance et dépannage
                  </li>
                </ul>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Options</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-[#0f81ba]">✓</span>
                      Offres d'achat et de location de bornes
                    </li>
                   
                    <li className="flex items-center gap-2">
                      <span className="text-[#0f81ba]">✓</span>
                      Propositions d'équipements complémentaires
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-[#0f81ba] hover:text-white transition-all duration-300">
              J'équipe mon entreprise
            </button>
          </div>

          {/* Option Particulier */}
          <div className="bg-white text-[#0f81ba] rounded-3xl p-8 relative overflow-hidden border-2 border-[#0f81ba]">
            <div className="flex items-start gap-6 mb-8">
              <HomeIcon className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Installation en 10 jours ouvrés</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0f81ba]">✓</span>
                    Estimation à distance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0f81ba]">✓</span>
                    Bornes connectées et non connectées
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0f81ba]">✓</span>
                    Intervention dans toute la France métropolitaine et Benelux
                  </li>
                </ul>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Options</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-[#0f81ba]">✓</span>
                      Offres d'achat et de location de bornes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0f81ba]">✓</span>
                      Garantie complète sous forme d'abonnement mensuel
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#0f81ba] text-white py-4 rounded-xl font-semibold hover:bg-[#0c3248] transition-all duration-300">
                J'équipe ma maison
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 