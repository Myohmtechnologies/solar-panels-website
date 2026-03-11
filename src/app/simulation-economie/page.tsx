'use client';
import Image from 'next/image';
import QuickSimulateur from '@/components/simulateurs/QuickSimulateur';
import { CheckIcon, ArrowRightIcon, PhoneIcon, ChevronDownIcon, StarIcon, ClickIcon } from '@/components/icons/CommonIcons';
import RealisationsPreview from '@/components/sections/RealisationsPreview';

// Données des avis pour le schéma structuré
const reviews = [
  {
    author: 'Alexandra Pantano',
    reviewRating: 5,
    reviewBody: 'Prestataire très sérieux contacté pour une petite intervention électrique à mon domicile. Le technicien a été très efficace et il m\'a d\'ailleurs très bien conseillé dans ce domaine qu\'il gère très bien. Je recommande vivement ce professionnel.',
    datePublished: '2025-04-15'
  },
  {
    author: 'Stéphane Lefevre',
    reviewRating: 5,
    reviewBody: 'Franchement, je suis ravi de mon installation de panneaux solaires de 3 kWc ! L’équipe a été au top du début à la fin : ponctuelle, pro, et super sympa. L’installation s’est faite rapidement et proprement, avec du matériel de qualité. Tout fonctionne parfaitement, et je vois déjà la différence sur ma consommation. En plus, ils ont pris le temps de bien expliquer le fonctionnement et de donner des conseils utiles. Bref, une super prestation, je recommande sans hésiter !',
    datePublished: '2025-02-20'
  },
  {
    author: 'benoit furnes',
    reviewRating: 5,
    reviewBody: 'L’entreprise my ohm a été très professionnel. Tout s’est bien passé, dès le premier contact, en passant parles étapes administratives,jusqu’à l’installation. Nous sommes satisfait de l’installation de nos panneaux solaires. Ils m’ont même dépanner un luminaire gratuitement. Merci à toute l’equipe.',
    datePublished: '2025-01-25'
  },
  {
    author: 'Régis Bourlanges',
    reviewRating: 5,
    reviewBody: 'Je suis très satisfait de notre installation de panneaux solaires par une équipe sympathique, travail propre et soigné, tous ponctuels et sérieux, à recommander...',
    datePublished: '2024-11-05'
  },
  {
    author: 'MEVOUILLON-IRENEE Eliane',
    reviewRating: 5,
    reviewBody: 'Bonne équipe, travail soigné et efficace. Tout a été fait comme prévu. J\'ai découvert qu\'ils installent aussi des panneaux photovoltaïques, un projet que je prévois de réaliser bientôt.',
    datePublished: '2025-02-09'
  },
  {
    author: 'Chloe Swati',
    reviewRating: 5,
    reviewBody: 'l\'équipe my ohm technologies est très efficace et minutieux ! Son travail est toujours satisfaisant. Merci à vous pour votre écoute et votre disponibilité !',
    datePublished: '2025-03-02'
  }

];
export default function SimulationEconomiePage() {
  return (
    <main>
      {/* Header personnalisé */}
      <div className="relative min-h-screen">
        {/* Image de fond plein écran */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/maison-panneaux-solaires-borne-de-recharge-batterie-de-stockage.png"
            alt="Maison panneaux solaires borne de recharge batterie de stockage"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            draggable="false"
          />
          {/* Overlay sombre pour contraste */}
          <div className="absolute inset-0 bg-black/60 lg:bg-black/50"></div>
        </div>

        {/* Header transparent */}
        <header className="relative z-10 py-4">
          <div className="container mx-auto px-6 md:px-8 lg:px-10 flex justify-between items-center">
            <div className="flex items-center">
              <a href="/">
                <Image
                  src="/images/logo-dark.png"
                  alt="Logo Myohm Technologies"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                  priority
                />
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="tel:+330492766858"
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#0a3d5c] py-2 px-4 rounded-lg font-medium hover:bg-white hover:shadow-lg transition-all"
              >
                <PhoneIcon />
                <span>04 92 76 68 58</span>
              </a>
            </div>
          </div>
        </header>

        {/* Section hero ultra épurée pour conversion maximale */}
        <section className="relative z-10 overflow-hidden min-h-[70vh] flex items-center justify-center">
          {/* Contenu centré en surimpression */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 leading-tight text-white text-center drop-shadow-lg">
              Simulateur de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffb700] to-[#ffeb99]">production solaire</span> | Calculez vos économies d'électricité
            </h1>

            <p className="text-3xl text-white mb-8">
              Calculez votre production photovoltaïque et réduisez jusqu'à 70% vos factures grâce à notre simulateur de rendement solaire.
            </p>

            {/* Simulateur pour mobile */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              {/* Barre colorée en haut */}
              <div className="h-3 bg-gradient-to-r from-[#ffb700] to-[#ffeb99]"></div>

              <div className="p-6">


                {/* Simulateur */}
                <QuickSimulateur />

                {/* Badge d'information */}
                <div className="mt-4 flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#116290]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Simulation gratuite et sans engagement</span>
                </div>
              </div>
            </div>

            {/* Avis clients et certifications sur toute la largeur */}
            <div className="relative z-10 w-full mt-8 pt-8 border-t border-white/20">
              <div className="container mx-auto px-4">
                {/* Titre avec note Google */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                  <h3 className="text-xl font-semibold text-white drop-shadow-md">Des centaines de propriétaires nous ont déjà fait confiance !</h3>

                  {/* Note Google */}
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-md">
                    <div className="flex items-center gap-1">
                      <Image src="/images/avis-google.avif" alt="Google Avis" width={60} height={20} className="h-5 w-auto" />
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} className="w-4 h-4 text-[#ffb700]" />
                        ))}
                      </div>
                      <p className="font-medium text-sm">4,9/5</p>
                    </div>
                  </div>
                </div>

                {/* Section avis et certifications optimisée pour mobile */}
                <div className="flex flex-col gap-6">
                  {/* Logos de certification en ligne horizontale pour mobile */}
                  <div className="flex flex-wrap justify-center md:justify-end gap-3 py-2">
                    <div className="flex items-center backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                      <Image src="/images/logo-QualiPV-2025-RGE_sc.png" alt="Certification QualiPV" width={180} height={160} className="h-14 md:h-16 w-auto" />
                    </div>
                    <div className="flex items-center backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                      <Image src="/images/LOGO-garantie-20-ans.png" alt="Certification RGE" width={160} height={120} className="h-14 md:h-16 w-auto" />
                    </div>
                    <div className="flex items-center backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                      <Image src="/images/qualifelec.jpg" alt="Certification RGE" width={140} height={120} className="h-14 md:h-16 w-auto" />
                    </div>
                  </div>

                  {/* Carrousel automatique d'avis clients - 3 avis à la fois */}
                  <div className="w-full overflow-hidden">
                    {/* Titre du carrousel */}
                    <div className="flex justify-center mb-2">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-white/80">Nos clients témoignent</span>
                      </div>
                    </div>

                    {/* Carrousel automatique d'avis */}
                    <div className="relative">
                      {/* Conteneur du carrousel avec animation */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Première ligne de 3 avis */}
                        {reviews.slice(0, 3).map((review, index) => (
                          <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
                            <div className="flex items-center mb-3">
                              <div className="w-10 h-10 rounded-full bg-[#ffb700]/10 flex items-center justify-center mr-3">
                                <span className="text-[#ffb700] font-bold">{review.author.charAt(0)}</span>
                              </div>
                              <div>
                                <p className="font-medium">{review.author}</p>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className={`w-4 h-4 ${i < review.reviewRating ? 'text-[#ffb700]' : 'text-gray-300'}`} />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-3">{review.reviewBody}</p>
                          </div>
                        ))}
                      </div>

                      {/* Indicateurs de pagination */}
                      <div className="flex justify-center mt-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>
      </div>

      {/* Nouvelle section: Le choix de l'excellence française */}
      <div className="relative z-10 w-full mt-8 py-8 ">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Le choix de l'excellence française avec DualSun et My Ohm Technologies</h2>
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image à gauche */}
              <div className="flex items-center justify-center p-4">
                <Image
                  src="/images/nos-produit.png"
                  alt="Produits DualSun et My Ohm Technologies"
                  width={600}
                  height={500}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>

              {/* Avantages à droite */}
              <div className="p-6 flex flex-col justify-center">

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Jusqu'à 70% d'économies</h3>
                  <p className="text-white/90">sur vos factures</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                      <span className="text-white text-lg">🇫🇷</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Marque française certifiée</h4>
                      <p className="text-balck text-sm">Qualité, fiabilité et performance garanties</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                      <span className="text-black text-lg">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Produisez toute l'année</h4>
                      <p className="text-black text-sm">Produisez de l'énergie verte et gratuite toute l'année</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                      <span className="text-black text-lg">💪</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Devenez indépendant</h4>
                      <p className="text-black text-sm">Devenez indépendant des prix de l'électricité</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                      <span className="text-[#ffb700] text-lg">💰</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Faites de vraies économies</h4>
                      <p className="text-black text-sm">Réalisez jusqu'à 1 500 euros d'économies par an</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                      <span className="text-[#ffb700] text-lg">💸</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Générez des revenus</h4>
                      <p className="text-black text-sm">Vendez le surplus d'énergie produite que vous n'avez pas utilisé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-[#ffb700] to-[#ffeb99]">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Passez à l'excellence française</h3>
                <p className="text-gray-800 opacity-90 mb-6">Simulez votre installation DualSun et découvrez combien vous pourriez économiser</p>
                {
/* Fonction de conversion Google Ads adaptée pour React */}
                <a
                  href="/simulator"
                  className="inline-flex items-center gap-2 bg-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#116290] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();

                    // Appel de la fonction de conversion Google Ads
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'conversion', {
                        'send_to': 'AW-16817660787/9PJFCP3gnLkaEPPGpNM-',
                        'value': 10.0,
                        'currency': 'EUR',
                        'event_callback': function () {
                          window.location.href = '/simulator';
                        }
                      });
                    } else {
                      // Fallback si gtag n'est pas disponible
                      window.location.href = '/simulator';
                    }
                  }}
                >
                  <span>Simuler mon installation DualSun</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
                <p className="mt-4 text-sm text-gray-700">Simulation gratuite et sans engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section technique sur les calculs de production solaire */}
      <section className="container mx-auto py-16 px-6 md:px-8 lg:px-10 bg-white rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculez votre production solaire
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estimez précisément la production de vos panneaux solaires selon la puissance installée et votre localisation.
          </p>
        </div>

        {/* Tableau de production solaire */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white">
                <th className="p-4 text-left">Puissance installée</th>
                <th className="p-4 text-left">Nombre de panneaux</th>
                <th className="p-4 text-left">Surface nécessaire</th>
                <th className="p-4 text-left">Production annuelle</th>
                <th className="p-4 text-left">Production journalière moyenne</th>
                <th className="p-4 text-left">Économies estimées/an</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">3 kWc</td>
                <td className="p-4">8 panneaux</td>
                <td className="p-4">15 m²</td>
                <td className="p-4">3 600 kWh</td>
                <td className="p-4">9,8 kWh/jour</td>
                <td className="p-4">870€</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">6 kWc</td>
                <td className="p-4">16 panneaux</td>
                <td className="p-4">30 m²</td>
                <td className="p-4">7 200 kWh</td>
                <td className="p-4">19,7 kWh/jour</td>
                <td className="p-4">1 740€</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">9 kWc</td>
                <td className="p-4">24 panneaux</td>
                <td className="p-4">45 m²</td>
                <td className="p-4">10 800 kWh</td>
                <td className="p-4">29,6 kWh/jour</td>
                <td className="p-4">2 610€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Graphique de production saisonnière */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Production mensuelle pour une installation de 3 kWc</h3>
            <div className="relative h-64">
              {/* Barres du graphique */}
              <div className="absolute bottom-0 left-0 w-[8.33%] h-[40%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[8.33%] w-[8.33%] h-[45%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[16.66%] w-[8.33%] h-[60%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[24.99%] w-[8.33%] h-[75%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[33.32%] w-[8.33%] h-[85%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[41.65%] w-[8.33%] h-[95%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[49.98%] w-[8.33%] h-[100%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[58.31%] w-[8.33%] h-[90%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[66.64%] w-[8.33%] h-[80%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[74.97%] w-[8.33%] h-[65%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[83.3%] w-[8.33%] h-[50%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              <div className="absolute bottom-0 left-[91.63%] w-[8.33%] h-[35%] bg-[#ffb700] rounded-t-md mx-[0.3%]"></div>
              
              {/* Mois */}
              <div className="absolute bottom-[-25px] left-0 w-full flex justify-between text-xs text-gray-600">
                <span>Jan</span>
                <span>Fév</span>
                <span>Mar</span>
                <span>Avr</span>
                <span>Mai</span>
                <span>Juin</span>
                <span>Juil</span>
                <span>Août</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Déc</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-8">La production est maximale en été et minimale en hiver. Ces variations sont prises en compte dans notre simulateur.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Comment dimensionner votre installation</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                  <span className="text-[#ffb700] font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Maison de 100m²</h4>
                  <p className="text-gray-600">Installation recommandée: <span className="font-medium">3 kWc</span> (8 panneaux)</p>
                  <p className="text-sm text-gray-500">Consommation moyenne: 4 500 kWh/an</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                  <span className="text-[#ffb700] font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Maison de 150m²</h4>
                  <p className="text-gray-600">Installation recommandée: <span className="font-medium">6 kWc</span> (16 panneaux)</p>
                  <p className="text-sm text-gray-500">Consommation moyenne: 7 500 kWh/an</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffb700]/20 flex items-center justify-center">
                  <span className="text-[#ffb700] font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Maison de 200m²</h4>
                  <p className="text-gray-600">Installation recommandée: <span className="font-medium">9 kWc</span> (24 panneaux)</p>
                  <p className="text-sm text-gray-500">Consommation moyenne: 11 000 kWh/an</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Le dimensionnement optimal dépend de votre consommation réelle et de l'orientation de votre toit. Notre simulateur calcule précisément ces paramètres.</p>
          </div>
        </div>
        
        <div className="text-center">
          <a
            href="/simulator"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:translate-x-1"
          >
            <span>Calculer ma production solaire</span>
            <ArrowRightIcon />
          </a>
          <p className="text-gray-500 mt-3 text-sm">Simulation gratuite et sans engagement</p>
        </div>
      </section>

      {/* Section des étapes de simulation */}
      <section className="container mx-auto py-16 px-6 md:px-8 lg:px-10 rounded-xl">
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

        {/* Section Aides de l'État 2025 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl">
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
        <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl">
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

      {/* Section FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes sur les panneaux solaires</h2>

          <div className="space-y-6">
            {/* Question 1 - Calcul production */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Comment calculer la production de mes panneaux solaires ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Le calcul de la production photovoltaïque dépend de plusieurs facteurs :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>La puissance installée en kilowatt-crête (kWc)</li>
                    <li>L'ensoleillement de votre région (en kWh/m²/an)</li>
                    <li>L'orientation et l'inclinaison de vos panneaux</li>
                    <li>Les pertes système (onduleur, câblage, etc.)</li>
                  </ul>
                  <p className="mt-2">En France métropolitaine, un système de 1 kWc correctement orienté produit entre 1000 et 1400 kWh par an selon la région. Pour une estimation précise, utilisez notre simulateur qui prend en compte tous ces paramètres.</p>
                </div>
              </details>
            </div>

            {/* Question 2 - Puissance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Quelle puissance de panneau solaire me faut-il ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>La puissance nécessaire dépend principalement de votre consommation électrique annuelle et de vos objectifs :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>3 kWc</strong> : idéal pour une petite maison (2-3 personnes) avec une consommation de 3500-4500 kWh/an</li>
                    <li><strong>6 kWc</strong> : adapté à une maison moyenne (3-4 personnes) consommant 7000-8000 kWh/an</li>
                    <li><strong>9 kWc</strong> : recommandé pour les grandes maisons ou celles avec des équipements énergivores (piscine, climatisation)</li>
                  </ul>
                  <p className="mt-2">Chaque panneau standard a une puissance d'environ 375-400 Wc. Pour une installation de 3 kWc, vous aurez besoin de 8 panneaux environ.</p>
                </div>
              </details>
            </div>

            {/* Question 3 - Surface */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Quelle surface de toit est nécessaire pour des panneaux solaires ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>La surface nécessaire dépend directement de la puissance souhaitée :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Installation de <strong>3 kWc</strong> : environ 15 m² (8 panneaux)</li>
                    <li>Installation de <strong>6 kWc</strong> : environ 30 m² (16 panneaux)</li>
                    <li>Installation de <strong>9 kWc</strong> : environ 45 m² (24 panneaux)</li>
                  </ul>
                  <p className="mt-2">Un panneau standard mesure environ 1,7 m² (1,7m x 1m). L'orientation idéale est plein sud avec une inclinaison de 30°, mais des orientations sud-est à sud-ouest restent très performantes.</p>
                </div>
              </details>
            </div>

            {/* Question 4 - Rendement */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Quel est le rendement d'un panneau solaire en 2025 ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>En 2025, les panneaux solaires résidentiels standards ont un rendement compris entre 20% et 23%. Cela signifie qu'ils convertissent 20-23% de l'énergie solaire reçue en électricité.</p>
                  <p className="mt-2">Les panneaux haut de gamme que nous installons (DualSun) atteignent des rendements de 22%, ce qui est excellent pour une utilisation résidentielle. Plus le rendement est élevé, moins vous aurez besoin de surface pour atteindre une puissance donnée.</p>
                  <p className="mt-2">Le rendement global du système (incluant l'onduleur et autres pertes) est généralement de 75-85% du rendement théorique des panneaux.</p>
                </div>
              </details>
            </div>

            {/* Question 5 - Simulation ombre */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Comment l'ombre affecte-t-elle la production solaire ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>L'ombre est l'un des facteurs les plus limitants pour la production photovoltaïque. Même une ombre partielle peut réduire significativement la production :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Une ombre couvrant 10% d'un panneau peut réduire sa production de 30-40%</li>
                    <li>Les ombres portées par des arbres, cheminées ou bâtiments voisins sont particulièrement problématiques</li>
                  </ul>
                  <p className="mt-2">Pour minimiser l'impact des ombres, nous utilisons des micro-onduleurs Enphase qui permettent à chaque panneau de fonctionner indépendamment. Ainsi, si un panneau est ombragé, les autres continuent de produire à pleine puissance.</p>
                  <p className="mt-2">Notre étude technique inclut une simulation d'ombrage pour optimiser le placement des panneaux sur votre toit.</p>
                </div>
              </details>
            </div>

            {/* Question 6 - Économies */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Combien puis-je économiser avec des panneaux solaires ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>En moyenne, nos clients économisent entre 50% et 70% sur leur facture d'électricité annuelle. Avec l'augmentation constante des prix de l'électricité, ces économies augmentent chaque année.</p>
                  <p className="mt-2">Pour une installation de 3 kWc, l'économie annuelle moyenne est de 870€. Pour 6 kWc, elle atteint environ 1 740€, et pour 9 kWc, environ 2 610€.</p>
                  <p className="mt-2">Notre simulateur vous permet d'obtenir une estimation précise basée sur votre consommation et votre localisation.</p>
                </div>
              </details>
            </div>

            {/* Question 7 - Aides */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-xl font-medium">Quelles aides de l'État puis-je obtenir en 2025 ?</h3>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronDownIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>Plusieurs aides sont disponibles en France pour l'installation de panneaux solaires en 2025 :</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Prime à l'autoconsommation</strong> : jusqu'à 380€/kWc (plafonnée à 3 kWc)</li>
                    <li><strong>Obligation d'achat</strong> : tarif de rachat de 0,13€/kWh garanti 20 ans</li>
                    <li><strong>TVA réduite</strong> : 10% au lieu de 20% pour les installations inférieures à 3kWc</li>
                    <li><strong>MaPrimeRénov'</strong> : sous conditions de ressources</li>
                    <li><strong>Aides locales</strong> : variables selon votre région et commune</li>
                  </ul>
                  <p className="mt-2">Notre équipe vous accompagne dans toutes les démarches administratives pour obtenir ces aides.</p>
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

        <div className="container mx-auto px-6 md:px-8 lg:px-10 relative z-10">
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