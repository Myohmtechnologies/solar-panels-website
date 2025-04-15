'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ReviewSchema } from '@/components/ReviewSchema';
import FaqSection from '@/components/sections/FaqSection';
import QuickSimulateur from '@/components/simulateurs/QuickSimulateur';
import SectionSimulateur from '@/components/simulateurs/SectionSimulateur';
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Préparation des données du lead
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        notes: formData.message,
        source: 'DEVIS_PAGE',
        projectType: 'SOLAR_PANELS',
        createdAt: new Date().toISOString()
      };

      // Envoi des données à l'API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const result = await response.json();

      if (response.ok) {
        // Réinitialiser le formulaire après soumission réussie
        setFormData({ name: '', email: '', phone: '', message: '' });
        setShowSuccessModal(true);
      } else {
        // Gérer les erreurs de l'API
        setErrorMessage(result.error || 'Une erreur est survenue lors de l\'envoi du formulaire.');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setErrorMessage('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
      setShowErrorModal(true);
    }
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
        <div className="container mx-auto px-6 md:px-8 lg:px-10 flex justify-between items-center">
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

      {/* Section hero avec simulateur - Design inspiré des sections Aides et Réalisations */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        {/* Arrière-plan clair avec motif */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images/solar-pattern.png")', backgroundSize: '200px' }}></div>
        </div>
        
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#ffb700]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#116290]/10 rounded-full blur-3xl"></div>
        
        {/* Version mobile - Visible uniquement sur les écrans mobiles */}
        <div className="lg:hidden container relative z-10 mx-auto px-6 md:px-8">
          {/* Badge d'actualité */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffb700] text-gray-900 font-medium mb-6 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Aides de l'État 2025 disponibles</span>
          </div>
          
          {/* Titre principal avec effet de dégradé */}
          <h1 className="text-4xl font-extrabold mb-6 leading-tight text-gray-900">
            <span className="block">Divisez par <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffb700] to-[#ffeb99]">2</span> votre</span>
            <span className="block">facture d'électricité</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Produisez votre propre énergie et réduisez durablement vos factures grâce aux panneaux solaires de qualité française.
          </p>
          
          {/* Simulateur pour mobile */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            {/* Barre colorée en haut */}
            <div className="h-3 bg-gradient-to-r from-[#ffb700] to-[#ffeb99]"></div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Rejoignez les 500+ foyers qui économisent déjà</h3>
              </div>
              
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
        </div>
        
        {/* Contenu principal */}
        <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Contenu mobile-first - Réorganisé pour l'affichage mobile */}
            <div className="lg:col-span-6 text-gray-900 order-1 lg:order-1">
              {/* Badge d'actualité */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffb700] text-gray-900 font-medium mb-6 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Aides de l'État 2025 disponibles</span>
              </div>
              
              {/* Titre principal avec effet de dégradé */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="block">Divisez par <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffb700] to-[#ffeb99]">2</span> votre</span>
                <span className="block">facture d'électricité</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Produisez votre propre énergie et réduisez durablement vos factures grâce aux panneaux solaires de qualité française.
              </p>
              
              {/* Points clés avec badges comme dans la section Réalisations - Affichés après le simulateur sur mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 order-3 lg:order-3">
                {[
                  { text: "Économies jusqu'à 50%", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { text: "Aides de l'État 2025", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" },
                  { text: "Retour sur investissement rapide", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { text: "Qualité Made in France", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 flex items-center gap-3 border border-gray-100 hover:border-[#116290]/30 transition-colors shadow-sm hover:shadow">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#116290] to-[#0a3d5c] flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">{item.text}
                      {index === 3 && (
                        <span className="inline-flex ml-2 h-4">
                          <span className="w-1.5 h-4 bg-blue-700"></span>
                          <span className="w-1.5 h-4 bg-white"></span>
                          <span className="w-1.5 h-4 bg-red-600"></span>
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Localisation avec style inspiré de la section Réalisations - Affichée après les points clés sur mobile */}
              <div className="bg-white rounded-xl p-5 mb-8 border border-gray-100 shadow-md order-4 lg:order-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#116290] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">Nous intervenons dans toute la région PACA</p>
                    <p className="text-sm text-gray-600">Alpes-Maritimes, Var, Bouches-du-Rhône, Vaucluse, Alpes-de-Haute-Provence, Hautes-Alpes</p>
                  </div>
                </div>
              </div>
              
              {/* Badge de confiance avec avis Google - Affiché en dernier sur mobile */}
              <div className="flex items-center gap-4 mt-6 order-5 lg:order-5">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-md">
                  <Image
                    src="/images/avis-google.avif"
                    alt="Google Avis"
                    width={100}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-5 h-5 text-[#ffb700]" />
                    ))}
                  </div>
                  <p className="font-medium text-gray-900">4,9/5</p>
                </div>
              </div>
              
            
            </div>
            
            {/* Simulateur - Affiché après le texte sur mobile, à droite sur desktop */}
            <div className="lg:col-span-6 order-2 lg:order-2">
              <div className="relative">
                {/* Carte du simulateur inspirée de la section Aides */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Barre colorée en haut comme dans la section Aides */}
                  <div className="h-3 bg-gradient-to-r from-[#ffb700] to-[#ffeb99]"></div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex -space-x-2 mr-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm">
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Rejoignez les 500+ foyers qui économisent déjà</h3>
                    </div>
                    
                    
                    {/* Simulateur avec style inspiré de la section Aides */}
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
                
                {/* Badge de confiance */}
                <div className="absolute -bottom-4 right-8 bg-white py-2 px-4 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#116290]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium text-gray-900">Entreprise certifiée RGE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

          <div className="mt-12">
            <div className="rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-[#ffb700] to-[#ffeb99]">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Découvrez le montant de vos aides 2025</h3>
                <p className="text-gray-800 opacity-90 mb-6">Calculez gratuitement combien vous pourriez économiser avec les aides de l'État</p>
                <a 
                  href="/simulator" 
                  className="inline-flex items-center gap-2 bg-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#116290] transition-colors"
                >
                  <span>Estimer mes aides financières</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
                <p className="mt-4 text-sm text-gray-700">Simulateur mis à jour avec les dernières aides disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir ?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Colonne gauche: Présentation de la société */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              {/* En-tête avec barre colorée comme dans la section Aides */}
              <div className="h-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c]"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#116290] to-[#0a3d5c] flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Une entreprise familiale d'experts</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Fondée il y a plus de 15 ans par d'anciens ingénieurs d'EDF, My Ohm Technologies est une entreprise familiale spécialisée dans les énergies renouvelables. Notre expertise et notre passion pour l'énergie solaire nous permettent de vous offrir des solutions sur mesure et de qualité.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Nos engagements</h4>
                
                <ul className="space-y-4">
                  {[
                    "Entreprise certifiée RGE (Reconnu Garant de l'Environnement)",
                    "Garantie décennale sur toutes nos installations",
                    "Matériel de haute qualité fabriqué en Europe",
                    "Service après-vente réactif et efficace",
                    "Équipe de professionnels expérimentés et qualifiés"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-[#116290] flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckIcon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne droite: Showroom et certifications */}
            <div>
              {/* Notre showroom - Style inspiré de la section Réalisations */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-[320px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                  <Image
                    src="/images/local-my-ohm-technologies.jpg"
                    alt="Showroom My Ohm Technologies"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Badge de localisation comme dans la section Réalisations */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0a3d5c] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Manosque, PACA</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-2">Notre showroom à votre service</h3>
                    <p className="text-white/90 mb-4">
                      Visitez notre showroom pour découvrir nos solutions et rencontrer nos experts
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/Vc9Uy5Jg5MbJLmGr8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span>Voir sur Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Nos certifications et partenaires - Style inspiré de la section Aides */}
              <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-[#ffeb99] to-[#ffb700]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Nos certifications et partenaires</h3>
                
                  <div className="grid grid-cols-3 gap-4">
                    {["/images/dualsun-logo.svg", "/images/enphase-logo_black.png", "/images/bourgeoislogo.png", "/images/qualipv1.png", "/images/rge1.png", "/images/garantie-decennale-p2a-construction.png"].map((logo, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <Image
                          src={logo}
                          alt={`Certification ${index + 1}`}
                          width={100}
                          height={60}
                          className="h-auto max-w-[100px] max-h-[50px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA en bas comme celui des aides */}
          <div className="mt-12">
            <div className="rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-[#116290] to-[#0a3d5c]">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Faites confiance à des experts certifiés</h3>
                <p className="text-white/90 mb-6">Bénéficiez de notre expertise de plus de 15 ans dans l'installation de panneaux solaires</p>
                <a 
                  href="/simulator" 
                  className="inline-flex items-center gap-2 bg-[#ffb700] text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-[#ffeb99] transition-colors"
                >
                  <span>Simuler mon installation avec des experts</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
                <p className="mt-4 text-sm text-white/80">Plus de 500 installations réalisées en région PACA</p>
              </div>
            </div>
          </div>

          {/* Nos réalisations récentes - Design moderne et attrayant */}
          <div className="mt-20 relative">
            {/* Élément décoratif */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ffb700]/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#116290]/10 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-1 rounded-full bg-[#0a3d5c]/5 mb-4">
                  <p className="text-sm font-medium text-[#0a3d5c]">Réalisations 2025</p>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Nos installations récentes</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Découvrez nos dernières réalisations dans la région PACA et inspirez-vous pour votre projet
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RealisationsPreview />
              </div>
              
              {/* CTA en bas comme celui des aides et pourquoi nous choisir */}
              <div className="mt-12">
                <div className="rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-[#ffb700] to-[#ffeb99]">
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Inspirez-vous de nos réalisations</h3>
                    <p className="text-gray-800 opacity-90 mb-6">Plus de 500 installations réalisées en région PACA par nos équipes certifiées</p>
                    <a 
                      href="/simulator" 
                      className="inline-flex items-center gap-2 bg-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#116290] transition-colors"
                    >
                      <span>Simuler mon installation personnalisée</span>
                      <ArrowRightIcon className="h-5 w-5" />
                    </a>
                    <p className="mt-4 text-sm text-gray-700">Découvrez combien vous pourriez économiser avec une installation similaire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Avis Clients */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 rounded-full bg-[#0a3d5c]/5 mb-4">
              <p className="text-sm font-medium text-[#0a3d5c]">Témoignages clients</p>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ce que nos clients disent de nous
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Découvrez les avis de nos clients satisfaits qui ont fait confiance à My Ohm Technologies pour leur installation solaire
            </p>
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
                  <StarIcon key={star} className="h-6 w-6 text-[#ffb700]" />
                ))}
              </div>
              <p className="text-gray-700 font-medium">5/5 basé sur 127 avis</p>
            </div>
          </div>

          {/* Première rangée d'avis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Avis 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c]"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#116290]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#116290] font-semibold text-lg">SL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Stéphane Lefevre</h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="w-4 h-4 text-[#ffb700]" />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm">Il y a 2 semaines</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Franchement, je suis ravi de mon installation de panneaux solaires de 3 kWc ! L'équipe a été au top du début à la fin : ponctuelle, pro, et super sympa. L'installation s'est faite rapidement et proprement, avec du matériel de qualité. Je recommande sans hésiter !"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#116290] rounded-full flex items-center justify-center mr-2">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-500">Client vérifié</span>
                </div>
              </div>
            </div>

            {/* Avis vidéo au centre */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
              <div className="h-2 bg-gradient-to-r from-[#ffb700] to-[#ffeb99]"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ffb700]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffb700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Marie Dupont</h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="w-4 h-4 text-[#ffb700]" />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm">Il y a 1 mois</p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <div className="aspect-w-16 aspect-h-9 relative h-[160px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#0a3d5c]/80 flex items-center justify-center cursor-pointer hover:bg-[#0a3d5c] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <Image 
                      src="/images/local-my-ohm-technologies.jpg" 
                      alt="Témoignage vidéo de Marie Dupont"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-700">
                  "J'ai fait installer 9 panneaux solaires par My Ohm Technologies et je suis très satisfaite du résultat. Regardez ma vidéo pour voir l'installation et les économies réalisées !"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#ffb700] rounded-full flex items-center justify-center mr-2">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-500">Client vérifié</span>
                </div>
              </div>
            </div>

            {/* Avis 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c]"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#116290]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#116290] font-semibold text-lg">CI</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Christelle Irass</h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="w-4 h-4 text-[#ffb700]" />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm">Il y a 3 mois</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Une équipe attentive aux besoins du client, alliant professionnalisme et rigueur. Le chantier a été laissé propre, et nous avons reçu des explications claires. Je recommande vivement My Ohm !"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#116290] rounded-full flex items-center justify-center mr-2">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-500">Client vérifié</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA en bas comme celui des aides */}
          <div className="mt-12">
            <div className="rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-[#ffb700] to-[#ffeb99]">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Rejoignez nos clients satisfaits</h3>
                <p className="text-gray-800 opacity-90 mb-6">Simulez gratuitement votre installation et découvrez combien vous pourriez économiser</p>
                <a 
                  href="/simulator" 
                  className="inline-flex items-center gap-2 bg-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#116290] transition-colors"
                >
                  <span>Je calcule mes économies</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
                <p className="mt-4 text-sm text-gray-700">Simulation gratuite et sans engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section FAQ */}
      <FaqSection />
      {/* Section CTA de bas de page */}
      <section className="py-20 relative overflow-hidden">
        {/* Arrière-plan avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#116290] to-[#0a3d5c] opacity-95"></div>

        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-white opacity-5"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-white opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <p className="text-sm font-medium text-white">Simulation gratuite et sans engagement</p>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Prêt à réduire vos factures d'électricité ?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Rejoignez les milliers de Français qui produisent leur propre électricité et économisent jusqu'à 70% sur leurs factures. Obtenez une simulation personnalisée en quelques minutes.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="/simulator"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffb700] to-[#ffeb99] text-gray-900 py-4 px-8 rounded-xl font-medium text-xl hover:shadow-xl transition-all transform hover:scale-105"
              >
                <span>Je calcule mes économies</span>
                <ArrowRightIcon className="h-6 w-6" />
              </a>

              <a
                href="tel:+330492766858"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 py-4 px-8 rounded-xl font-medium text-xl hover:bg-white/20 transition-all"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Appeler un conseiller</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Installation en 1-2 jours</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Garantie 25 ans</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Économies immédiates</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Certification RGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a2536] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/images/logo-dark.png"
                alt="Logo Myohm Technologies"
                width={180}
                height={70}
                className="h-14 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
                Spécialiste des installations photovoltaïques en région PACA depuis plus de 15 ans.
              </p>
              <div className="mt-4 flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-[#116290] flex items-center justify-center hover:bg-[#ffb700] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#116290] flex items-center justify-center hover:bg-[#ffb700] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#116290]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ffb700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">04 92 76 68 58</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#116290]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ffb700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">contact@myohm-tech.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#116290]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ffb700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Manosque, PACA</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
              <div className="grid grid-cols-1 gap-2">
                <a href="/simulator" className="text-gray-300 hover:text-[#ffb700] transition-colors">Simulateur d'économies</a>
                <a href="/realisations" className="text-gray-300 hover:text-[#ffb700] transition-colors">Nos réalisations</a>
                <a href="/aides" className="text-gray-300 hover:text-[#ffb700] transition-colors">Aides de l'État</a>
                <a href="/contact" className="text-gray-300 hover:text-[#ffb700] transition-colors">Contact</a>
              </div>
              <div className="mt-6">
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="/conditions-generales" className="text-gray-400 hover:text-[#ffb700] text-sm transition-colors">Conditions Générales</a>
                  <a href="/mentions-legales" className="text-gray-400 hover:text-[#ffb700] text-sm transition-colors">Mentions Légales</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} My Ohm Technologies. Tous droits réservés.</p>
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

      {/* Modal de succès */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full animate-fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Demande envoyée !</h3>
            <p className="text-gray-700 text-center mb-6">
              Votre demande a été envoyée avec succès ! Un conseiller énergie vous contactera très prochainement.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Modal d'erreur */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full animate-fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Erreur</h3>
            <p className="text-gray-700 text-center mb-6">
              {errorMessage}
            </p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </main>
  );
}