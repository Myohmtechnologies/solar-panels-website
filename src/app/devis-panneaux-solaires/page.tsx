'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ReviewSchema } from '@/components/ReviewSchema';

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
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC05" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-medium">4.9/5 basé sur 127 avis</p>
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

      {/* Section Passez au solaire avec My Ohm Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Passez au solaire avec My Ohm Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Nos certifications et garanties</h3>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                  <Image 
                    src="/images/qualipv1.png" 
                    alt="Certification RGE QualiPV" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[200px]"
                  />
                  <Image 
                    src="/images/rge1.png" 
                    alt="Certification RGE" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[200px]"
                  />
                  <Image 
                    src="/images/dualsun-logo.svg" 
                    alt="dualsun" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[200px]"
                  />
                  <Image 
                    src="/images/enphase-logo_black.png" 
                    alt="enphase" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[200px]"
                  />
                  <Image 
                    src="/images/garantie-decennale-p2a-construction.webp" 
                    alt="Garantie Décennale" 
                    width={100}
                    height={120}
                    className="h-auto max-w-[200px]"
                  />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Entreprise certifiée RGE (Reconnu Garant de l'Environnement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Garantie décennale sur toutes nos installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Matériel de haute qualité fabriqué en Europe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Service après-vente réactif et efficace</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center mt-6">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <span>Je fais des économies</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/installation-panneaux-solaire-a-manosque.jpg" 
                alt="Installation de panneaux solaires à Manosque" 
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
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

      {/* Section Témoignages clients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que nos clients disent de nous</h2>
          
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
                  <p className="text-gray-500 text-sm">Il y a 2 mois</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Excellente expérience avec My Ohm Technologies. L'équipe est professionnelle et à l'écoute. Installation rapide et soignée. Je produis maintenant ma propre électricité et j'ai réduit ma facture de 65%. Je recommande vivement !"
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
                "Très satisfaite de mon installation de panneaux solaires. Le conseiller a pris le temps de m'expliquer toutes les étapes et les économies que je pouvais réaliser. L'installation s'est déroulée comme prévu et je suis ravie du résultat."
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
                "Excellente expérience avec My Ohm Technologies. Le simulateur d'économies a été très utile pour me convaincre. Je produis maintenant ma propre électricité et j'ai réduit ma facture de 70%. Je recommande vivement !"
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-4 px-8 rounded-lg font-medium text-xl hover:shadow-lg transition-all transform hover:translate-x-1"
            >
              <span>Je passe à l'énergie solaire</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Question 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Combien coûte l'installation de panneaux solaires ?</h3>
              <p className="text-gray-700">
                Le coût d'une installation de panneaux solaires dépend de plusieurs facteurs : la puissance souhaitée, le type de panneaux, la configuration de votre toiture, etc. Pour une maison individuelle, comptez entre 8 000€ et 20 000€. Cependant, des aides financières sont disponibles pour réduire cet investissement. Demandez un devis personnalisé pour connaître le coût exact pour votre projet.
              </p>
            </div>
            
            {/* Question 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quelles sont les aides financières disponibles ?</h3>
              <p className="text-gray-700">
                Plusieurs aides sont disponibles en France : la prime à l'autoconsommation, le taux de TVA réduit à 10%, les aides locales (régions, départements, communes), et la possibilité de revendre votre surplus d'électricité. De plus, vous pouvez bénéficier d'un crédit d'impôt pour la transition énergétique. Nos conseillers vous accompagnent dans toutes les démarches pour obtenir ces aides.
              </p>
            </div>
            
            {/* Question 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quelle est la durée de vie des panneaux solaires ?</h3>
              <p className="text-gray-700">
                Les panneaux solaires que nous installons ont une durée de vie moyenne de 30 ans. Leur rendement diminue légèrement avec le temps (environ 0,5% par an), mais ils continuent de produire efficacement de l'électricité pendant plusieurs décennies. Nous offrons une garantie de 25 ans sur la production et une garantie décennale sur l'installation.
              </p>
            </div>
            
            {/* Question 4 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Combien de temps faut-il pour installer des panneaux solaires ?</h3>
              <p className="text-gray-700">
                La durée d'installation varie selon la taille et la complexité du projet. Pour une installation résidentielle standard, comptez 1 à 3 jours pour la pose des panneaux. Le processus complet, incluant l'étude technique, les démarches administratives et le raccordement au réseau, prend généralement entre 2 et 3 mois.
              </p>
            </div>
            
            {/* Question 5 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">L'entretien des panneaux solaires est-il compliqué ?</h3>
              <p className="text-gray-700">
                Non, l'entretien des panneaux solaires est minimal. La pluie nettoie naturellement les panneaux dans la plupart des cas. Un nettoyage annuel peut être recommandé pour maintenir un rendement optimal, surtout dans les zones poussiéreuses. Nous proposons des contrats de maintenance pour assurer le suivi et l'optimisation de votre installation.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image 
                src="/images/logo.webp" 
                alt="Logo Myohm Technologies" 
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400"> {new Date().getFullYear()} My Ohm Technologies. Tous droits réservés.</p>
              <p className="text-gray-400 mt-1">04 92 76 68 58 | contact@myohm-tech.com</p>
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
