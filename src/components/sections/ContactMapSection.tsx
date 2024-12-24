'use client';

import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/solid';

const ContactMapSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <MapPinIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              Nos Coordonnées
            </h2>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Retrouvez-nous au cœur de la région Provence-Alpes-Côte d&apos;Azur. Notre équipe est à votre disposition pour vous accompagner dans votre projet solaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-FFDF64/20 rounded-full">
                  <MapPinIcon className="w-10 h-10 text-FFDF64" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-AFC97E transition-colors">
                    Adresse
                  </h3>
                  <p className="text-gray-600 text-sm">
                    12 Rue de la République, 13001 Marseille
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-FFDF64/20 rounded-full">
                  <PhoneIcon className="w-10 h-10 text-FFDF64" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-AFC97E transition-colors">
                    Téléphone
                  </h3>
                  <p className="text-gray-600 text-sm">
                    04 92 76 68 58
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-FFDF64/20 rounded-full">
                  <EnvelopeIcon className="w-10 h-10 text-FFDF64" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-AFC97E transition-colors">
                    Email
                  </h3>
                  <p className="text-gray-600 text-sm">
                    contact@myohm.fr
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.4943742355!2d5.370375315731331!3d43.29668797913244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0c5aae3f5b9%3A0x40819a5fd8fc7e0!2s12%20Rue%20de%20la%20R%C3%A9publique%2C%2013001%20Marseille!5e0!3m2!1sfr!2sfr!4v1703270014328!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl mt-12 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <MapPinIcon className="w-12 h-12 text-black mb-4" />
            <h4 className="font-bold text-black text-xl mb-2">Nos Horaires</h4>
            <p className="text-black/80 max-w-xl">
              Lundi - Vendredi : 9h - 18h
              Samedi : Sur rendez-vous
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
