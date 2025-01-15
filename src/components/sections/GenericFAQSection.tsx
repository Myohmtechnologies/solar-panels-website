'use client';

import React, { useState, useMemo } from 'react';

interface FAQItem {
  icon: string;
  question: string;
  answer: string;
}

interface GenericFAQSectionProps {
  title: string;
  subtitle: string;
  faqData: FAQItem[];
}

export default function GenericFAQSection({
  title, 
  subtitle, 
  faqData
}: GenericFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-white text-black px-4 py-2 rounded-full mb-4">
            <span className="font-medium">Questions Fréquentes</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-4 pb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div 
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{faq.icon}</span>
                  <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''} group-hover:text-gray-800"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 bg-gray-50 animate-fade-in">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
