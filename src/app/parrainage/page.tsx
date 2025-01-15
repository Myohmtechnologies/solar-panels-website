import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programme de Parrainage | MyOhm Technologies",
  description: "Parrainez vos proches et bénéficiez d'avantages exclusifs sur vos installations solaires",
};

export default function ParrainagePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section avec un design plus moderne */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-FFDF64/10 to-AFC97E/10" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <Image
            src="/images/solar-pattern.png"
            alt="Pattern"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1 bg-FFDF64/20 rounded-full text-sm font-medium text-FFDF64 mb-4">
            Programme Exclusif
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Parrainez et <span className="text-FFDF64">Économisez</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recommandez MyOhm Technologies à vos proches et profitez ensemble d&apos;avantages exceptionnels sur vos installations solaires
          </p>
        </div>
      </section>

      {/* Section Avantages avec un design plus élaboré */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Carte Parrain avec plus d'effets visuels */}
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-FFDF64/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative">
                <div className="h-20 w-20 bg-FFDF64 rounded-2xl rotate-3 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Avantages Parrain</h3>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 bg-AFC97E rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>300€ de réduction sur votre prochaine installation</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 bg-AFC97E rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Suivi prioritaire de votre dossier</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Carte Filleul avec le même style amélioré */}
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-AFC97E/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative">
                <div className="h-20 w-20 bg-AFC97E rounded-2xl rotate-3 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Avantages Filleul</h3>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 bg-FFDF64 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>200€ de réduction sur votre installation</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="flex-shrink-0 w-8 h-8 bg-FFDF64 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Étude personnalisée gratuite</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire avec un design plus moderne */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-FFDF64 to-AFC97E" />
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Parrainer un proche
          </h2>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Informations Parrain */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-FFDF64 rounded-full text-white flex items-center justify-center mr-3 text-sm">1</span>
                  Vos informations
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Informations Filleul */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-AFC97E rounded-full text-white flex items-center justify-center mr-3 text-sm">2</span>
                  Informations du filleul
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-AFC97E focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-AFC97E focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-AFC97E focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-FFDF64 to-AFC97E hover:from-AFC97E hover:to-FFDF64 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-FFDF64 transition-all duration-300 transform hover:scale-105"
              >
                Envoyer ma demande de parrainage
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}