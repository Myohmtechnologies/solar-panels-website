'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col justify-between">
      {/* Header avec Logo */}
      <header className="py-6 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="MyOhm Technologies"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center flex flex-col items-center">
          {/* Badge catégorie identique au style du site */}
          <div className="mb-6 inline-flex items-center space-x-2">
            <span className="bg-[#ffb700] text-black font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
              Demande enregistrée
            </span>
            <span className="bg-gray-100 text-[#116290] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center">
              ★ 4.9/5 Google
            </span>
          </div>

          {/* Icône de Succès - Cercle bleu avec check orange/jaune comme les listes du site */}
          <div className="w-20 h-20 bg-[#116290]/5 rounded-full flex items-center justify-center mb-8 border border-[#116290]/10">
            <svg className="h-10 w-10 text-[#ffb700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Titre Principal aux couleurs de la marque (#116290) */}
          <h1 className="text-3xl font-black text-[#116290] mb-4 tracking-tight leading-tight">
            Merci pour votre confiance !
          </h1>

          {/* Description claire et concise */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 font-medium">
            Votre demande a bien été reçue. Un de nos conseillers techniques qualifiés RGE vous rappellera sous 24h pour valider ensemble votre projet.
          </p>

          {/* Bouton de Téléphone Blanc identique au bouton de contact secondaire du site */}
          <div className="w-full mb-8">
            <a 
              href="tel:0492766858" 
              className="w-full inline-flex items-center justify-center py-4 px-6 border-2 border-[#116290]/20 text-[#116290] font-black rounded-full hover:bg-gray-50/50 hover:border-[#116290]/40 transition-all text-center space-x-3 text-base shadow-sm"
            >
              <svg className="h-5 w-5 text-[#116290]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.022a8.233 8.233 0 01-4.887-4.887l2.022-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>04 92 76 68 58</span>
            </a>
          </div>

          {/* Bouton Principal Jaune/Orange dégradé avec effet hover de relief du site */}
          <Link
            href="/"
            className="w-full py-4 bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-black font-black rounded-full hover:shadow-xl hover:scale-[1.02] transition-all text-center text-base shadow-md"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>

      {/* Footer épuré */}
      <footer className="py-6 bg-white border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400 font-semibold tracking-wide">
          © {new Date().getFullYear()} MyOhm Technologies. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}