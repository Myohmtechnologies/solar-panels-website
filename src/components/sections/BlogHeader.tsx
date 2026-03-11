'use client';

import { useState, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface BlogHeaderProps {
  onSearch?: (searchTerm: string) => void;
  onCategorySelect?: (category: string) => void;
}

const BlogHeader = ({ onSearch, onCategorySelect }: BlogHeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const categories = [
    'Panneaux solaires',
    'Économies d\'énergie',
    'Installation',
    'Guide'
  ];

  return (
    <section className="bg-gradient-to-br from-ffeb99 to-ffb700 py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-black/70 mb-2">NOTRE BLOG</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Le Blog de l&apos;énergie photovoltaïque
        </h1>
        <p className="text-black/80 mb-8">
          Découvrez nos derniers articles sur l&apos;énergie solaire, les innovations technologiques et
          les solutions durables.
        </p>

        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="relative max-w-2xl mx-auto mb-6"
        >
          <input
            type="text"
            placeholder="Rechercher des articles"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-FFDF64 text-gray-800"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <FaSearch className="text-FFDF64" />
          </button>
        </form>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect?.(category)}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-AFC97E hover:bg-FFDF64/10 transition-colors shadow-md"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
