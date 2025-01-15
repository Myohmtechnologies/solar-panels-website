import React from 'react';
import Image from 'next/image';
import { formatDate } from '../../utils/date';

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  city: string;
  category: string;
  readTime: number;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  author,
  date,
  image,
  city,
  category,
  readTime
}) => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-96 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>{formatDate(date)}</span>
          <span className="mx-2">•</span>
          <span>{readTime} min de lecture</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        
        <div className="flex items-center mb-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/authors/default-avatar.png"
              alt={author}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">Expert en installation solaire à {city}</p>
          </div>
        </div>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Articles similaires</h2>
          {/* Composant pour les articles similaires à implémenter */}
        </div>
      </div>
    </article>
  );
};
