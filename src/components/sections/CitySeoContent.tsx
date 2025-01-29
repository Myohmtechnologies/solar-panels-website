'use client';

interface CitySeoContentProps {
  cityName: string;
  seoContent?: {
    title: string;
    content?: string;
    paragraphs?: string[];
  };
}

export default function CitySeoContent({ cityName, seoContent }: CitySeoContentProps) {
  if (!seoContent) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          {seoContent.title}
        </h2>
        <div className="prose prose-lg max-w-none">
          {seoContent.paragraphs ? (
            seoContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : seoContent.content ? (
            seoContent.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : null}
        </div>
      </div>
    </section>
  );
}
