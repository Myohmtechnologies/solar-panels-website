'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            🌟 Témoignages de Nos Clients en PACA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                stars: "⭐️⭐️⭐️⭐️⭐️",
                text: "Grâce à cette installation, nous avons réduit notre facture de 60% !",
                author: "Julien",
                city: "Nice"
              },
              {
                stars: "⭐️⭐️⭐️⭐️⭐️",
                text: "L'équipe a été ultra réactive, mon installation a été posée en 3 semaines !",
                author: "Sophie",
                city: "Marseille"
              },
              {
                stars: "⭐️⭐️⭐️⭐️⭐️",
                text: "Une équipe attentive aux besoins du client, alliant professionnalisme et rigueur. Le chantier à été laissé propre, et nous avons reçu des explications claires sur la gestion des panneaux photovoltaique. Je recommande vivement My Ohm !",
                author: "Christelle Irénée",
                city: "manosque"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-lg p-6 shadow-lg"
              >
                <div className="mb-4">{testimonial.stars}</div>
                <p className="text-black text-lg mb-4">"{testimonial.text}"</p>
                <p className="text-[#126290] font-semibold">
                  – {testimonial.author}, {testimonial.city}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
