'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, BoltIcon, ClockIcon, HomeIcon, PhoneIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';
import EnergyExpertModal from '@/components/modals/EnergyExpertModal';

const steps = [
  { title: 'Étude de vos besoins', text: 'Nous prenons en compte le nombre d’occupants, vos habitudes et l’espace disponible pour vous conseiller un volume adapté.' },
  { title: 'Vérification technique', text: 'Nous vérifions l’emplacement, les raccordements d’eau et l’alimentation électrique avant de définir la solution.' },
  { title: 'Installation et mise en service', text: 'La pose comprend les raccordements nécessaires, les vérifications de sécurité et les explications pour utiliser votre équipement.' },
];

const faqs = [
  { q: 'Quel volume de ballon choisir ?', a: 'Le volume dépend du nombre d’occupants, des équipements sanitaires et de vos habitudes. Nous étudions votre situation pour vous orienter vers une capacité adaptée.' },
  { q: 'Peut-on remplacer un ancien chauffe-eau ?', a: 'Oui. Le remplacement est possible dans la plupart des logements, sous réserve de vérifier l’emplacement, les raccordements et l’état de l’installation existante.' },
  { q: 'Combien de temps dure la pose ?', a: 'La durée varie selon l’accès, le type de ballon et les adaptations nécessaires. Elle est précisée après l’étude de votre installation.' },
  { q: 'Le ballon peut-il fonctionner en heures creuses ?', a: 'Selon votre contrat d’électricité et la configuration du tableau, un raccordement à un contacteur heures creuses peut être prévu ou vérifié.' },
];

export default function InstallationBallonEauChaudePage() {
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);

  return (
    <main className="bg-white overflow-x-hidden">
      <section className="relative overflow-hidden bg-[#f9fafb] py-12 sm:py-14 lg:py-16">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-gray-900">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#ffeb99] to-[#ffb700] px-4 py-2 font-medium text-[#116290]">
                <BoltIcon className="h-5 w-5" /> Installation en région PACA
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#116290] shadow-sm" aria-label="Note de 4,9 sur 5 sur Google">
                <span className="text-[#ffb700]" aria-hidden="true">★★★★★</span> 4.9/5 Google
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-[#116290] sm:text-5xl">
              Installer un ballon d’eau chaude électrique
            </h1>
            <div className="mb-6">
              <span className="block text-2xl font-extrabold text-[#ffb700] sm:text-3xl">À partir de 799 € TTC</span>
              <span className="mt-1 block text-sm font-medium text-gray-500">Le prix dépend du volume choisi et des conditions de pose.</span>
            </div>

            <ul className="mb-8 space-y-4">
              {[
                'Un ballon dimensionné selon votre foyer et vos usages',
                'Remplacement ou installation dans un logement neuf',
                'Pose soignée et mise en service par notre équipe locale',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-gray-700 sm:text-lg">
                  <svg className="mt-0.5 h-6 w-6 flex-none text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/simulator?prestation=ballon"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#ffeb99] to-[#ffb700] px-7 py-4 text-base font-bold text-gray-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Obtenir mon estimation <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+33492766858" className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#116290]/30 bg-white px-7 py-4 text-base font-semibold text-[#116290] transition hover:bg-[#116290]/5">
                <PhoneIcon className="mr-2 h-5 w-5 flex-none" /> 04 92 76 68 58
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#116290]/15">
              <Image src="/images/ballon.png" alt="Ballon d’eau chaude installé dans un logement" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Un chauffe-eau adapté à votre logement</h2>
            <p className="text-lg text-gray-600">Un ballon électrique bien dimensionné contribue à votre confort au quotidien. Nous étudions les contraintes de votre installation avant de vous proposer une solution.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, title: 'Dimensionnement adapté', text: 'Capacité étudiée selon votre foyer et vos usages.' },
              { icon: WrenchScrewdriverIcon, title: 'Pose soignée', text: 'Installation et raccordements vérifiés sur place.' },
              { icon: ShieldCheckIcon, title: 'Sécurité contrôlée', text: 'Vérification des éléments électriques et hydrauliques concernés.' },
              { icon: ClockIcon, title: 'Remplacement planifié', text: 'Organisation de l’intervention selon votre disponibilité.' },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-xl border border-gray-100 p-6 shadow-sm text-center">
                <Icon className="h-9 w-9 mx-auto mb-4 text-[#116290]" />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment se déroule l’installation ?</h2><p className="text-lg text-gray-600">Un accompagnement simple, de l’étude à la mise en service.</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => <article key={step.title} className="bg-white rounded-xl p-7 shadow-sm"><div className="text-[#116290] text-sm font-bold mb-3">ÉTAPE 0{i + 1}</div><h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3><p className="text-gray-600">{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Questions fréquentes</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map(({ q, a }) => <details key={q} className="py-5 group"><summary className="cursor-pointer list-none flex justify-between gap-4 font-semibold text-gray-900">{q}<span className="text-[#116290] group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-gray-600">{a}</p></details>)}
          </div>
        </div>
      </section>

      <ContactCTASection />
      <EnergyExpertModal isOpen={isExpertModalOpen} onClose={() => setIsExpertModalOpen(false)} source="ballon-electrique" />
    </main>
  );
}
