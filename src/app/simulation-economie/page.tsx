'use client';
import Image from 'next/image';
import { CheckIcon, ArrowRightIcon, PhoneIcon, ChevronDownIcon, StarIcon, ClickIcon } from '@/components/icons/CommonIcons';
import RealisationsPreview from '@/components/sections/RealisationsPreview';


export default function SimulationEconomiePage() {
  return (
    <main>
      {/* Header personnalisé */}
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img 
                src="/images/logo.webp" 
                alt="Logo Myohm Technologies" 
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </a>
          </div>
          <div className="flex items-center">
            <a 
              href="tel:+330492766858" 
              className="flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <PhoneIcon />
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
            Économisez en passant au solaire : simulation gratuite
            </h1>

            {/* Bandeau d'urgence */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 font-medium">
                    ALERTE : Les prix de l'électricité ont augmenté de 43% depuis 2021 et continueront d'augmenter !
                  </p>
                </div>
              </div>
            </div>
            
            

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <CheckIcon className="h-4 w-4 text-white mr-0" />
                </div>
                <p className="text-lg text-gray-700">Économisez jusqu'à -70% sur vos factures d'électricité</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <CheckIcon className="h-4 w-4 text-white mr-0" />
                </div>
                <p className="text-lg text-gray-700">Produisez votre propre énergie</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <CheckIcon className="h-4 w-4 text-white mr-0" />
                </div>
                <p className="text-lg text-gray-700">Calcul de rendement et de la puissance d'installation</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#116290] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-medium text-gray-800">Nous intervenons dans toute la région PACA</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-3">
                <div className="sm:w-1/5">
                  <img 
                    src="/images/Carte-region.svg" 
                    alt="Carte de la région PACA - Zone d'intervention MyOhm Technologies" 
                    className="w-full h-auto max-h-28 rounded-lg shadow-sm mx-auto"
                  />
                </div>
                
                <div className="sm:w-4/5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-white mr-0" />
                      </div>
                      <span className="text-sm text-gray-700">Alpes-Maritimes (06)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-white mr-0" />
                      </div>
                      <span className="text-sm text-gray-700">Var (83)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-white mr-0" />
                      </div>
                      <span className="text-sm text-gray-700">Bouches-du-Rhône (13)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-white mr-0" />
                      </div>
                      <span className="text-sm text-gray-700">Vaucluse (84)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-white mr-0" />
                      </div>
                      <span className="text-sm text-gray-700">Alpes-de-Haute-Provence (04)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-white mr-0" />
                      </div>
                      <span className="text-sm text-gray-700">Hautes-Alpes (05)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
            
            <div className="mb-10">
              <a 
                href="/simulator" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                <span>Je calcule mes économies</span>
                <ArrowRightIcon />
              </a>
              <p className="text-gray-500 mt-3 text-sm">Simulation gratuite et immédiate</p>
            </div>
            
            <div className="flex  gap-2 mb-4">
              <img 
                src="/images/avis-google.avif" 
                alt="Google Avis" 
                width={120}
                height={32}
                loading="lazy"
                className="h-8 w-auto"
              />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-6 h-6" />
                ))}
              </div>
              <p className="text-gray-700 font-medium">4,9/5 </p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] w-full">
            <img
              src="/images/simulateur-myohmtechnologies.png"
              alt="Simulation d'économies avec des panneaux solaires"
              width={1000}
              height={700}
              loading="eager"
              fetchPriority="high"
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
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <div className="relative w-full aspect-square mb-6">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center z-10">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl p-4">
                <div className="relative w-full max-w-[400px]">
                  <img 
                    src="/images/etape1-simualtion.png" 
                    alt="Étape 1: Cliquer sur le bouton de simulation" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Je clique sur le bouton ci-dessous</h3>
            <p className="text-gray-600">pour lancer la simulation.</p>
          </div>
          
          {/* Étape 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <div className="relative w-full aspect-square mb-6">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center z-10">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl p-4">
                <div className="relative w-full max-w-[300px]">
                  <img 
                    src="/images/etape2-simulation$.png" 
                    alt="Étape 2: Répondre aux questions" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Je réponds à 6 questions pour</h3>
            <p className="text-gray-600">calculer précisément mes économies en passant au solaire.</p>
          </div>
          
          {/* Étape 3 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <div className="relative w-full aspect-square mb-6">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center z-10">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl p-4">
                <div className="relative w-full max-w-[450px]">
                  <img 
                    src="/images/etape-simulation-.png" 
                    alt="Étape 3: Accéder aux résultats" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Vous accédez instantanément aux</h3>
            <p className="text-gray-600">résultats.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/simulator" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:translate-x-1"
          >
            <span>→ Je calcule mes économies</span>
          </a>
        </div>
        
        {/* Nos réalisations récentes */}
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Nos réalisations récentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ces données seront remplacées par des données dynamiques provenant de l'API */}
              <RealisationsPreview />
            </div>
           
          </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/simulator" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:translate-x-1"
          >
            <span>Je fais des économies</span>
            <ArrowRightIcon />
          </a>
          <p className="text-gray-500 mt-3 text-sm">Simulation gratuite et immédiate</p>
        </div>
      </section>

      {/* Section Avis Clients */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">
              Ce que nos clients disent de nous
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <img 
                src="/images/avis-google.avif" 
                alt="Google Avis" 
                width={120}
                height={32}
                loading="lazy"
                className="h-8 w-auto"
              />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-6 h-6" />
                ))}
              </div>
              <p className="text-gray-700 font-medium">5/5 basé sur 127 avis</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Avis 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-lg">SL</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Stéphane Lefevre</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 2 semaines</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Franchement, je suis ravi de mon installation de panneaux solaires de 3 kWc ! L’équipe a été au top du début à la fin : ponctuelle, pro, et super sympa. L’installation s’est faite rapidement et proprement, avec du matériel de qualité. Tout fonctionne parfaitement, et je vois déjà la différence sur ma consommation. En plus, ils ont pris le temps de bien expliquer le fonctionnement et de donner des conseils utiles. Bref, une super prestation, je recommande sans hésiter !"
              </p>
            </div>

            {/* Avis 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-600 font-semibold text-lg">BF</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Benoit Furnes</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 1 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "L’entreprise my ohm a été très professionnel. Tout s’est bien passé, dès le premier contact, en passant parles étapes administratives,jusqu’à l’installation. Nous sommes satisfait de l’installation de nos panneaux solaires. Ils m’ont même dépanner un luminaire gratuitement. Merci à toute l’equipe."
              </p>
            </div>

            {/* Avis 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">EI</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">MEVOUILLON-IRENEE Eliane</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellente expérience avec Myohm Technologies. Le simulateur d'économies a été très utile pour me convaincre. Je produis maintenant ma propre électricité et j'ai réduit ma facture d'electricité. Je recommande vivement !"
              </p>
            </div>
            {/* Avis 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">PB</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Francois Baudry</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Entreprise sérieuse et équipe très professionnelle. L'installation s'est bien passée, je recommande."
              </p>
            </div>

            {/* Avis 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">PB</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Christelle irass</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Une équipe attentive aux besoins du client, alliant professionnalisme et rigueur.
Le chantier à été laissé propre, et nous avons reçu des explications claires sur la gestion des panneaux photovoltaique.
Je recommande vivement My Ohm !"
              </p>
            </div>
            {/* Avis 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">PB</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                  Philippe Guizard</h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Entreprise sérieuse , travaux réalisés dans le temps imparti avec un service soigné et dans le respect du budget plus que raisonnable je conseille vivement."
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/simulator" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-semibold text-xl hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span>Je calcule mes économies</span>
              <ArrowRightIcon />
            </a>
            <p className="text-gray-500 mt-3 text-sm">Simulation gratuite et immédiate</p>
          </div>
        </div>
      </section>

      {/* Section Aides de l'État 2025 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Les aides de l'État 2025 pour vos panneaux solaires</h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Profitez des dispositifs mis en place par l'État pour financer votre installation photovoltaïque
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aide 1: Prime à l'autoconsommation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-xl">
              <div className="h-3 bg-gradient-to-r from-[#ffeb99] to-[#ffb700]"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prime à l'autoconsommation</h3>
                <p className="text-gray-600 mb-4">
                  L'État vous verse une prime pour l'électricité que vous produisez et consommez vous-même, encourageant ainsi l'autonomie énergétique des foyers français.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Jusqu'à <span className="text-[#116290] font-bold">380€/kWc</span> d'aide directe</p>
                  <p className="text-sm text-gray-600 mt-1">Pour une installation standard de 3kWc, cela représente environ 1140€ d'économies</p>
                </div>
              </div>
            </div>
            
            {/* Aide 2: Rachat de surplus par EDF */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-xl">
              <div className="h-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c]"></div>
              <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Rachat de surplus par <img src="/images/edf.png" alt="EDF" className="h-6 w-auto inline-block ml-1 -mt-1" /></h3>
                <p className="text-gray-600 mb-4">
                  L'électricité que vous produisez mais ne consommez pas est automatiquement rachetée par EDF OA à un tarif avantageux garanti pendant 20 ans.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Tarif de rachat : <span className="text-[#116290] font-bold">0,13€/kWh</span></p>
                  <p className="text-sm text-gray-600 mt-1">Contrat garanti sur 20 ans, vous permettant de rentabiliser plus rapidement votre installation</p>
                </div>
              </div>
            </div>
            
            {/* Aide 3: TVA à 10% */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-xl">
              <div className="h-3 bg-gradient-to-r from-[#ffeb99] to-[#ffb700]"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">TVA à 10% au lieu de 20%</h3>
                <p className="text-gray-600 mb-4">
                  Pour les installations photovoltaïques de moins de 3kWc sur les résidences principales de plus de 2 ans, bénéficiez d'une TVA réduite à 10%.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Économie : <span className="text-[#116290] font-bold">10% sur le coût total</span></p>
                  <p className="text-sm text-gray-600 mt-1">Pour une installation de 10 000€, c'est 1 000€ d'économies directes sur votre facture</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/simulator" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              <span>Calculer mes économies avec les aides 2025</span>
              <ArrowRightIcon />
            </a>
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
                    <ChevronDownIcon />
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
                    <ChevronDownIcon />
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
                    <ChevronDownIcon />
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
                    <ChevronDownIcon />
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
                    <ChevronDownIcon />
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
              <span>Je calcule mes économies</span>
              <ArrowRightIcon />
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
                <ArrowRightIcon />
              </a>
              
              <a 
                href="tel:+330492766858" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all"
              >
                <PhoneIcon />
                <span>Appeler un conseiller</span>
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center">
                <CheckIcon />
                <span className="text-white">Installation en 1-2 jours</span>
              </div>
              
              <div className="flex items-center">
                <CheckIcon />
                <span className="text-white">Garantie 25 ans</span>
              </div>
              
              <div className="flex items-center">
                <CheckIcon />
                <span className="text-white">Économies immédiates</span>
              </div>
              
              <div className="flex items-center">
                <CheckIcon />
                <span className="text-white">Certification RGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image 
                src="/images/logo-dark.png" 
                alt="Logo Myohm Technologies" 
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400"> {new Date().getFullYear()} My Ohm Technologies. Tous droits réservés.</p>
              <p className="text-gray-400 mt-1">04 92 76 68 58 | contact@myohmtechnologies.com</p>
              <div className="mt-4 flex flex-wrap justify-center md:justify-end gap-4">
                <a href="/conditions-generales" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions Générales</a>
                <a href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions Légales</a>
                <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de Confidentialité</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Section Google Ads Testimonials */}
    </main>
  );
}