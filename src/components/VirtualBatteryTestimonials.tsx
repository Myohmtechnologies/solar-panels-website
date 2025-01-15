'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Laurent Dubois',
    location: 'Aix-en-Provence',
    image: '/images/testimonials/laurent.jpg',
    text: 'Grâce à la batterie virtuelle My Light, j\'économise plus de 800€ par an sur ma facture d\'électricité. Le système est très intuitif et me permet de suivre ma consommation en temps réel.',
    rating: 5,
    date: 'Janvier 2025',
    savings: '70%',
    installation: 'Installation 6kWc'
  },
  {
    name: 'Sophie Martin',
    location: 'Marseille',
    image: '/images/testimonials/sophie.jpg',
    text: 'J\'hésitais entre une batterie physique et virtuelle. My Light s\'est avéré être le meilleur choix : pas d\'entretien, pas de remplacement à prévoir, et des économies immédiates !',
    rating: 5,
    date: 'Décembre 2024',
    savings: '65%',
    installation: 'Installation 4.5kWc'
  },
  {
    name: 'Philippe Renaud',
    location: 'Nice',
    image: '/images/testimonials/philippe.jpg',
    text: 'Le concept de batterie virtuelle était nouveau pour moi, mais après 6 mois d\'utilisation, je suis conquis. Je produis le jour et consomme le soir sans aucune contrainte.',
    rating: 5,
    date: 'Novembre 2024',
    savings: '75%',
    installation: 'Installation 9kWc'
  }
];

export const VirtualBatteryTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-ffeb99/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-ffeb99/20 to-ffb700/20 text-[#232323] text-sm font-semibold mb-4">
            Avis clients
          </span>
          <h2 className="text-3xl font-bold text-[#232323] mb-4">
            Ils ont choisi la batterie virtuelle My Light
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les retours d'expérience de nos clients qui utilisent quotidiennement notre solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-ffeb99 to-ffb700 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#232323] font-semibold text-lg">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#232323] group-hover:text-ffb700 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-ffb700" />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Économies</p>
                    <p className="text-lg font-semibold text-ffb700">{testimonial.savings}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Installation</p>
                    <p className="text-lg font-semibold text-[#232323]">{testimonial.installation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
