'use client';

import Image from "next/image";
import Link from "next/link";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ContactModal from "../modals/ContactModal";

interface Section {
  title: string;
  description?: string;
  content: string;
  image?: string;
}

interface BlogSectionProps {
  sections: Section[];
  tableOfContents: { title: string; id: string }[];
}

const InlineCTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <div className="my-12 bg-gradient-solar p-8 rounded-xl shadow-lg">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">Vous souhaitez passer à l&apos;énergie solaire ?</h3>
        <p className="mb-6 text-gray-700">Découvrez combien vous pourriez économiser ou parlez à un expert</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <Link
            href="/simulator"
            className="inline-flex items-center justify-center px-6 py-3 bg-AFC97E text-white rounded-lg font-semibold hover:bg-FFDF64 hover:text-gray-900 transition-all duration-300 group text-center"
          >
            Simulation gratuite
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-AFC97E border-2 border-AFC97E rounded-lg font-semibold hover:bg-AFC97E hover:text-white transition-all duration-300 group text-center"
          >
            Parler à un expert
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = ({ sections, tableOfContents }: BlogSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:w-3/4">
            {sections.map((section, index) => (
              <div key={index}>
                <div className="mb-16" id={`section-${index}`}>
                  {section.title && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {section.title}
                    </h2>
                  )}
                  
                  {section.description && (
                    <div 
                      className="text-lg text-gray-700 mb-6 leading-relaxed prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-4 prose-h2:text-2xl prose-h2:mb-4 prose-h3:text-xl prose-h3:mb-3 prose-h4:text-lg prose-h4:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-1"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                  )}

                  {section.image && (
                    <div className="relative h-[500px] mb-8 rounded-xl overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title || "Section image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {section.content && (
                    <div
                      className="text-gray-700 prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-4 prose-h2:text-2xl prose-h2:mb-4 prose-h3:text-xl prose-h3:mb-3 prose-h4:text-lg prose-h4:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-1"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}
                </div>
                
                {/* Ajouter un CTA après chaque 2e section */}
                {(index + 1) % 2 === 0 && index < sections.length - 1 && (
                  <div className="relative z-10">
                    <InlineCTA onOpenModal={() => setIsModalOpen(true)} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="lg:w-1/4 space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Sommaire</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="block text-gray-600 hover:text-6C8D2F transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTA Card */}
            <div className="bg-6C8D2F text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Prêt à passer à l&apos;énergie solaire ?
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-FFDF64" />
                  <span>Estimation en 2 min</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-FFDF64" />
                  <span>Gratuit et sans engagement</span>
                </li>
              </ul>
              <div className="space-y-3">
                <Link
                  href="/simulator"
                  className="block text-center bg-white text-6C8D2F py-3 px-6 rounded-lg font-semibold hover:bg-FFDF64 transition-colors w-full"
                >
                  SIMULATION GRATUITE
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block text-center bg-FFDF64 text-6C8D2F py-3 px-6 rounded-lg font-semibold hover:bg-white transition-colors w-full"
                >
                  PARLER À UN EXPERT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de contact */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BlogSection;
