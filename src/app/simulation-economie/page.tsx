'use client';

export default function SimulationEconomiePage() {
  return (
    <main>
      {/* Header personnalisé */}
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img src="/images/logo.webp" alt="Logo Myohm Technologies" className="h-16 w-auto" />
            </a>
          </div>
          <div className="flex items-center">
            <a 
              href="tel:+330492766858" 
              className="flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>04 92 76 68 58</span>
            </a>
          </div>
        </div>
      </header>
      
      {/* Séparateur avec dégradé */}
      <div className="h-1 w-full bg-white"></div>

      {/* Section hero */}
      <section className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simulez gratuitement vos économies en passant aux panneaux solaires
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Économisez jusqu'à -70% sur vos factures d'électricité</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Produisez votre propre énergie</p>
              </div>
            </div>
            
            <div className="mb-10">
              <a 
                href="/simulator" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-semibold text-xl hover:shadow-xl transition-all transform hover:scale-105"
              >
                <span>Je calcule mes économies</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="text-gray-500 mt-3 text-sm">Simulation gratuite et immédiate</p>
            </div>
            
            <div className="flex  gap-2 mb-4">
              <img 
                src="/images/avis-google.avif" 
                alt="Google Avis" 
                className="h-8 w-auto"
              />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC05" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-medium">4.9/5 basé sur 127 avis</p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] w-full">
            <img
              src="/images/simulation-des-economies.webp"
              alt="Simulation d'économies avec des panneaux solaires"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Section des étapes de simulation */}
      <section className="container mx-auto py-16 px-4 md:px-0 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recevez immédiatement le résultat :
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Notre simulateur d'économies vous permet de connaître en quelques minutes combien vous pourriez économiser en installant des panneaux solaires.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Étape 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full">
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cliquez sur le bouton</h3>
              <p className="text-gray-600 mb-6">Commencez votre simulation d'économies en un seul clic.</p>
              <div className="mt-auto">
                <a 
                  href="/simulator" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium text-lg hover:shadow-lg transition-all"
                >
                  <span>Je calcule mes économies</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 p-4 h-48 flex items-center justify-center">
              <div className="bg-gradient-to-r from-[#116290] to-[#0a3d5c] rounded-lg p-4 text-white text-center w-full">
                <div className="flex justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <p className="font-medium">Cliquez pour commencer</p>
              </div>
            </div>
          </div>
          
          {/* Étape 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full">
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Répondez à 5 questions</h3>
              <p className="text-gray-600 mb-6">Calculez précisément vos économies en répondant à quelques questions simples.</p>
            </div>
            <div className="bg-gray-100 p-4 h-48 flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 w-full">
                <div className="flex justify-between mb-6 px-2">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-white">
                      <span className="text-xs font-medium">1</span>
                    </div>
                    <div className="text-xs mt-1 text-[#ffb700] font-medium">Q1</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-white">
                      <span className="text-xs font-medium">2</span>
                    </div>
                    <div className="text-xs mt-1 text-[#ffb700] font-medium">Q2</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-white">
                      <span className="text-xs font-medium">3</span>
                    </div>
                    <div className="text-xs mt-1 text-[#ffb700] font-medium">Q3</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200">
                      <span className="text-xs font-medium">4</span>
                    </div>
                    <div className="text-xs mt-1 text-gray-400">Q4</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200">
                      <span className="text-xs font-medium">5</span>
                    </div>
                    <div className="text-xs mt-1 text-gray-400">Q5</div>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#ffeb99] to-[#ffb700] w-3/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Étape 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full">
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Accédez aux résultats</h3>
              <p className="text-gray-600 mb-6">Découvrez combien vous pourriez économiser et les détails de votre installation.</p>
            </div>
            <div className="bg-gray-100 p-4 h-48 flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 w-full">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                    <div className="text-[#ffb700] font-bold text-xl">125€</div>
                    <div className="text-gray-600 text-sm">sur votre facture</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                    <div className="text-[#116290] font-bold text-xl">870€</div>
                    <div className="text-gray-600 text-sm">économies/an</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                    <div className="text-[#ffb700] font-bold text-xl">7890€</div>
                    <div className="text-gray-600 text-sm">installation</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                    <div className="text-[#116290] font-bold text-xl">9 ans</div>
                    <div className="text-gray-600 text-sm">rentabilité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/simulator" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:translate-x-1"
          >
            <span>Je fais des économies</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-gray-500 mt-3 text-sm">Simulation gratuite et immédiate</p>
        </div>
      </section>

      {/* Section Avis Clients */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que nos clients disent de nous
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <img 
                src="/images/avis-google.avif" 
                alt="Google Avis" 
                className="h-8 w-auto"
              />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC05" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-medium">4.9/5 basé sur 127 avis</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Avis 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Jean Dupont</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC05" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 2 semaines</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Installation impeccable et service client au top ! J'économise déjà 65€ par mois sur ma facture d'électricité. Le simulateur d'économies était très précis et m'a aidé à prendre ma décision."
              </p>
            </div>

            {/* Avis 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-600 font-semibold text-lg">ML</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Marie Leroy</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC05" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 1 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Très satisfaite de mon installation de panneaux solaires. L'équipe a été professionnelle du début à la fin. La simulation d'économies était très claire et m'a permis de comprendre mon retour sur investissement."
              </p>
            </div>

            {/* Avis 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">PB</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pierre Bertrand</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index < 4 ? "#FBBC05" : "#FBBC05"} className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellente expérience avec Myohm Technologies. Le simulateur d'économies a été très utile pour me convaincre. Je produis maintenant ma propre électricité et j'ai réduit ma facture de 70%. Je recommande vivement !"
              </p>
            </div>
            {/* Avis 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">PB</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pierre Bertrand</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index < 4 ? "#FBBC05" : "#FBBC05"} className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellente expérience avec Myohm Technologies. Le simulateur d'économies a été très utile pour me convaincre. Je produis maintenant ma propre électricité et j'ai réduit ma facture de 70%. Je recommande vivement !"
              </p>
            </div>
            {/* Avis 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">PB</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pierre Bertrand</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index < 4 ? "#FBBC05" : "#FBBC05"} className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellente expérience avec Myohm Technologies. Le simulateur d'économies a été très utile pour me convaincre. Je produis maintenant ma propre électricité et j'ai réduit ma facture de 70%. Je recommande vivement !"
              </p>
            </div>
            {/* Avis 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">PB</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pierre Bertrand</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index < 4 ? "#FBBC05" : "#FBBC05"} className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellente expérience avec Myohm Technologies. Le simulateur d'économies a été très utile pour me convaincre. Je produis maintenant ma propre électricité et j'ai réduit ma facture de 70%. Je recommande vivement !"
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/simulator" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-semibold text-xl hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span>Je calcule mes économies</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-gray-500 mt-3 text-sm">Simulation gratuite et immédiate</p>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes sur les panneaux solaires</h2>
          
          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Combien puis-je économiser avec des panneaux solaires ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>En moyenne, nos clients économisent entre 50% et 70% sur leur facture d'électricité annuelle. Avec l'augmentation constante des prix de l'électricité, ces économies augmentent chaque année. Notre simulateur vous permet d'obtenir une estimation précise basée sur votre consommation et votre localisation.</p>
                </div>
              </details>
            </div>
            
            {/* Question 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Quelles aides de l'État puis-je obtenir ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Plusieurs aides sont disponibles en France pour l'installation de panneaux solaires :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>La prime à l'autoconsommation</li>
                    <li>L'obligation d'achat avec tarif préférentiel</li>
                    <li>La TVA à taux réduit (10%)</li>
                    <li>MaPrimeRénov' sous conditions</li>
                    <li>Des aides locales selon votre région</li>
                  </ul>
                  <p className="mt-2">Notre équipe vous accompagne dans toutes les démarches administratives pour obtenir ces aides.</p>
                </div>
              </details>
            </div>
            
            {/* Question 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Quelle est la durée de vie des panneaux solaires ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Les panneaux solaires que nous installons ont une durée de vie moyenne de 25 à 30 ans. Ils sont garantis pour maintenir au moins 80% de leur performance initiale après 25 ans. L'onduleur, quant à lui, a une durée de vie de 10 à 15 ans et pourra nécessiter un remplacement durant la vie de votre installation.</p>
                </div>
              </details>
            </div>
            
            {/* Question 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Combien de temps dure l'installation ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>La durée d'installation varie selon la taille et la complexité du projet, mais pour une installation résidentielle standard, nos équipes réalisent généralement le travail en 1 à 2 jours. Avant l'installation, nous effectuons une étude technique complète et nous occupons de toutes les démarches administratives, ce qui peut prendre de 2 à 8 semaines.</p>
                </div>
              </details>
            </div>
            
            {/* Question 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Que se passe-t-il en cas de panne ou de problème ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Tous nos panneaux solaires sont garantis 25 ans et l'onduleur 10 ans. En cas de problème, notre service après-vente intervient rapidement. Nous proposons également un contrat de maintenance optionnel qui inclut une visite annuelle pour vérifier et optimiser votre installation. Notre système de monitoring à distance nous permet de détecter proactivement la plupart des problèmes avant même que vous ne les remarquiez.</p>
                </div>
              </details>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Vous avez d'autres questions ? N'hésitez pas à nous contacter</p>
            <a 
              href="/simulator" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:translate-x-1"
            >
              <span>Je fais des économies</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section CTA de bas de page */}
      <section className="py-20 relative overflow-hidden">
        {/* Arrière-plan avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#116290] to-[#0a3d5c] opacity-95"></div>
        
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-white opacity-5"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-white opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Prêt à réduire vos factures d'électricité ?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Rejoignez les milliers de Français qui produisent leur propre électricité et économisent jusqu'à 70% sur leurs factures. Obtenez une simulation gratuite et sans engagement en quelques minutes.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="/simulator" 
                className="inline-flex items-center gap-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                <span>Je calcule mes économies</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a 
                href="tel:+330492766858" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Appeler un conseiller</span>
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Installation en 1-2 jours</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Garantie 25 ans</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Économies immédiates</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Certification RGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Google Ads Testimonials */}
    </main>
  );
}