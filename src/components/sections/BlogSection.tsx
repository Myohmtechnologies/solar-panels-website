import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

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

const BlogSection = ({ sections, tableOfContents }: BlogSectionProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - 3/4 width */}
        <div className="lg:w-3/4">
          {sections.map((section, index) => (
            <div key={index} className="mb-16" id={`section-${index}`}>
              {section.title && (
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
              )}
              
              {section.description && (
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {section.description}
                </p>
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
                  className="text-gray-700 prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
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
            <Link
              href="/contact"
              className="block text-center bg-white text-6C8D2F py-3 px-6 rounded-lg font-semibold hover:bg-FFDF64 transition-colors"
            >
              VOUS AVEZ UN PROJET
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
