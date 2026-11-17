'use client';

import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/solid';

const ContactMapSection = () => {
  return (
    <section className="bg-[#f1f5f9] px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ffdf64] to-[#ffb700] text-white shadow-sm">
              <MapPinIcon className="h-6 w-6" />
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Nos coordonnées</h2>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Retrouvez-nous en région Provence-Alpes-Côte d&apos;Azur. Notre équipe locale est à votre disposition pour vous accompagner dans votre projet.
          </p>
          <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700]" />
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Informations de contact */}
          <div className="flex flex-col gap-4">
            <div className="group flex flex-1 items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-md shadow-[#102c40]/5 transition hover:border-[#116290]/20 hover:shadow-lg">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#fff7d7] text-[#ffbf22]">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102c40]">
                    Adresse
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    544 Av. Frédéric Mistral, 04100 Manosque
                  </p>
                </div>
            </div>

            <a href="tel:+33492766858" className="group flex flex-1 items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-md shadow-[#102c40]/5 transition hover:border-[#116290]/20 hover:shadow-lg">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#fff7d7] text-[#ffbf22]">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102c40]">
                    Téléphone
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    04 92 76 68 58
                  </p>
                </div>
            </a>

            <a href="mailto:contact@myohmtechnologies.com" className="group flex flex-1 items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-md shadow-[#102c40]/5 transition hover:border-[#116290]/20 hover:shadow-lg">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#fff7d7] text-[#ffbf22]">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#102c40]">
                    Email
                  </h3>
                  <p className="mt-1 break-all text-sm text-gray-600">
                    contact@myohmtechnologies.com
                  </p>
                </div>
            </a>
          </div>

          {/* Carte Google Maps */}
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white bg-white shadow-lg shadow-[#102c40]/10 md:min-h-[430px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.5647563321083!2d5.777595776882891!3d43.83423577109506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cb1b1a1a34c4c7%3A0xd7c4a8c6f5c4c0a0!2s544%20Avenue%20Fr%C3%A9d%C3%A9ric%20Mistral%2C%2004100%20Manosque%2C%20France!5e0!3m2!1sfr!2sfr!4v1703429716000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white bg-white/70 px-5 py-4 text-center shadow-sm sm:flex-row sm:gap-3">
          <MapPinIcon className="h-5 w-5 text-[#d99500]" />
          <p className="text-sm font-medium text-gray-700"><span className="font-bold text-[#102c40]">Horaires :</span> Lundi – vendredi, 9h – 18h · Samedi sur rendez-vous</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
