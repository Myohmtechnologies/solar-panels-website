'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ReviewSchema } from '@/components/ReviewSchema';
import FaqSection from '@/components/sections/FaqSection';
import { CheckIcon, ArrowRightIcon, PhoneIcon, ChevronDownIcon, StarIcon, ClickIcon } from '@/components/icons/CommonIcons';

// Ajout du composant RealisationsPreview
import RealisationsPreview from '@/components/sections/RealisationsPreview';

export default function DevisPanneauxSolairesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    // Réinitialiser le formulaire après soumission
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Votre demande a été envoyée avec succès!');
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('devis-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Données des avis pour le schéma structuré
  const reviews = [
    {
      author: 'Jean Dupont',
      reviewRating: 5,
      reviewBody: 'Excellente expérience avec My Ohm Technologies. L\'équipe est professionnelle et à l\'écoute. Installation rapide et soignée. Je produis maintenant ma propre électricité et j\'ai réduit ma facture de 65%. Je recommande vivement !',
      datePublished: '2025-01-15'
    },
    {
      author: 'Marie Leroy',
      reviewRating: 5,
      reviewBody: 'Très satisfaite de mon installation de panneaux solaires. Le conseiller a pris le temps de m\'expliquer toutes les étapes et les économies que je pouvais réaliser. L\'installation s\'est déroulée comme prévu et je suis ravie du résultat.',
      datePublished: '2025-02-20'
    },
    {
      author: 'Pierre Bertrand',
      reviewRating: 5,
      reviewBody: 'Excellente expérience avec My Ohm Technologies. Le simulateur d\'économies a été très utile pour me convaincre. Je produis maintenant ma propre électricité et j\'ai réduit ma facture de 70%. Je recommande vivement !',
      datePublished: '2025-01-05'
    }
  ];

  return (
    <main>
      {/* Header personnalisé */}
      <header className="py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <Image 
                src="/images/logo.webp" 
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

      {/* Section hero avec formulaire */}
      <section className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Divisez par 2 votre facture d'électricité
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Économisez jusqu'à -50% sur vos factures d'électricité</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Produisez votre propre énergie</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Profitez des aides de l'État et d'un retour sur investissement rapide</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-lg text-gray-700">Équipements de qualité Made in France</p>
                  <div className="flex h-5">
                    <div className="w-2 h-5 bg-blue-700"></div>
                    <div className="w-2 h-5 bg-white"></div>
                    <div className="w-2 h-5 bg-red-600"></div>
                  </div>
                </div>
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
            
            <div className="flex gap-2 mb-4">
              <Image 
                src="/images/avis-google.avif" 
                alt="Google Avis" 
                width={100}
                height={32}
                className="h-8 w-auto"
              />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-6 h-6" />
                ))}
              </div>
              <p className="text-gray-700 font-medium">4,9/5</p>
            </div>
          </div>
          
          {/* Formulaire de devis */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8" id="devis-form">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Demandez votre devis gratuit</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre nom et prénom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="06 12 34 56 78"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Dites-nous plus sur votre projet</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Décrivez votre projet d'installation de panneaux solaires..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium text-lg hover:shadow-lg transition-all"
              >
                Envoyer ma demande
              </button>
            </form>
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

      {/* Section Passez au solaire avec My Ohm Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Passez au solaire avec My Ohm Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Colonne gauche: Pourquoi nous choisir + Certifications */}
            <div className="flex flex-col gap-8">
              {/* Pourquoi nous choisir */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Entreprise certifiée RGE (Reconnu Garant de l'Environnement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Garantie décennale sur toutes nos installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Matériel de haute qualité fabriqué en Europe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Service après-vente réactif et efficace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">Équipe de professionnels expérimentés et qualifiés</span>
                  </li>
                </ul>
              </div>
              
              {/* Nos certifications et garanties */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Nos certifications et garanties</h3>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                  <Image 
                    src="/images/qualipv1.png" 
                    alt="Certification RGE QualiPV" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[120px]"
                  />
                  <Image 
                    src="/images/rge1.png" 
                    alt="Certification RGE" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[120px]"
                  />
                  <Image 
                    src="/images/garantie-decennale-p2a-construction.webp" 
                    alt="Garantie Décennale" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[120px]"
                  />
                  <Image 
                    src="/images/dualsun-logo.svg" 
                    alt="dualsun" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[120px]"
                  />
                  <Image 
                    src="/images/enphase-logo_black.png" 
                    alt="enphase" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[120px]"
                  />
                  
                </div>
              </div>
            </div>
            
            {/* Colonne droite: Image du showroom */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Notre showroom à votre service</h3>
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                <Image 
                  src="/images/local-my-ohm-technologies.jpg" 
                  alt="Showroom My Ohm Technologies" 
                  fill
                  className="object-cover object-[center_12%] hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-gray-700">
                Venez visiter notre showroom pour découvrir nos solutions d'énergie solaire et discuter de votre projet avec nos experts. Nous vous présenterons les différentes options adaptées à vos besoins et à votre budget.
              </p>
            </div>
            
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <span>Je passe à l'énergie solaire</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          {/* Nos réalisations récentes */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Nos réalisations récentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ces données seront remplacées par des données dynamiques provenant de l'API */}
              <RealisationsPreview />
            </div>
            <div className="text-center mt-12">
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <span>Je passe à l'énergie solaire</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
           
          </div>
        </div>
      </section>

      {/* Section Pourquoi installer des panneaux solaires */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi installer des panneaux solaires ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Argument 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Économies sur votre facture d'électricité</h3>
              <p className="text-gray-700 text-center">
                Réduisez votre facture d'électricité jusqu'à 70% en produisant votre propre énergie. Avec l'augmentation constante des prix de l'électricité, votre installation devient de plus en plus rentable chaque année.
              </p>
            </div>
            
            {/* Argument 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Impact environnemental positif</h3>
              <p className="text-gray-700 text-center">
                Contribuez à la réduction des émissions de CO2 en optant pour une énergie propre et renouvelable. Une installation solaire standard permet d'économiser environ 1,5 tonne de CO2 par an.
              </p>
            </div>
            
            {/* Argument 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Indépendance énergétique</h3>
              <p className="text-gray-700 text-center">
                Protégez-vous contre les hausses de prix de l'électricité et les coupures de courant. Avec une installation de panneaux solaires, vous devenez producteur de votre propre énergie et gagnez en autonomie.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <span>Je passe à l'énergie solaire</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
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

 

      {/* Section FAQ */}
      <FaqSection />
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
                <PhoneIcon />
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
              <p className="text-gray-400 mt-1">04 92 76 68 58 | contact@myohm-tech.com</p>
              <div className="mt-4 flex flex-wrap justify-center md:justify-end gap-4">
                <a href="/conditions-generales" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions Générales</a>
                <a href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions Légales</a>
                <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de Confidentialité</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ReviewSchema 
        reviews={reviews} 
        itemReviewed={{
          name: "My Ohm Technologies - Installation de panneaux solaires",
          image: "https://www.myohmtechnologies.com/images/logo.webp",
          description: "Divisez par 2 votre facture d'électricité avec l'installation de panneaux solaires photovoltaïques par My Ohm Technologies, entreprise certifiée RGE."
        }}
      />
      
    </main>
  );
}
