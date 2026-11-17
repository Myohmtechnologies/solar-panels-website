'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function CompanyPresentationSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0a3d5c] via-[#116290] to-[#0b5279] shadow-2xl shadow-[#116290]/20"
        >
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[560px]"
            >
              <Image
                src="/images/siege.png"
                alt="Siège et showroom MY OHM Technologies à Manosque"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f30]/70 via-transparent to-[#071f30]/10" />
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2.5 text-sm font-semibold text-[#116290] shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7">
                <MapPinIcon className="h-5 w-5 text-[#d99500]" /> Manosque, région PACA
              </div>
            </motion.div>

            <div className="relative flex flex-col justify-center bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#ffdf64] to-[#ffb700]" />
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#116290]/10 bg-[#116290]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-[#116290]">
                MY OHM TECHNOLOGIES · DEPUIS MANOSQUE
              </span>
              <h2 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
                Une entreprise locale à votre service
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Implantée au cœur de la région PACA, MY OHM Technologies vous accompagne dans votre transition énergétique. Dans notre showroom à Manosque, découvrez des solutions adaptées à votre logement et à vos besoins.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4" aria-label="Nos certifications et partenaires">
                <div className="flex h-28 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-3 shadow-sm sm:h-32 sm:p-4">
                  <Image
                    src="/images/Logo-RechargeElec.jpg"
                    alt="Logo RechargeElec"
                    width={240}
                    height={84}
                    className="h-auto max-h-20 w-full object-contain"
                  />
                </div>
                <div className="flex h-28 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-3 shadow-sm sm:h-32 sm:p-4">
                  <Image
                    src="/images/logo-QualiPV-2025-RGE_sc.png"
                    alt="Certification QualiPV RGE 2025"
                    width={150}
                    height={90}
                    className="h-auto max-h-24 w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-6 py-3.5 font-bold text-[#123c54] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Visiter notre showroom <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
