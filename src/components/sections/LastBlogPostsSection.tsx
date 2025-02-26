'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  createdAt: string;
  slug: string;
}

const cleanDescription = (html: string): string => {
  // Supprime les balises HTML
  const withoutTags = html.replace(/<[^>]*>/g, '');
  // Remplace les entités HTML courantes
  return withoutTags
    .replace(/&rsquo;/g, "'")
    .replace(/&eacute;/g, "é")
    .replace(/&egrave;/g, "è")
    .replace(/&agrave;/g, "à")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
};

// Fonction de formatage de date isolée pour éviter les problèmes d'hydratation
const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    // Utiliser une locale fixe 'fr' pour éviter les différences serveur/client
    const formatter = new Intl.DateTimeFormat('fr', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return formatter.format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Retourne la date brute en cas d'erreur
  }
};

export default function LastBlogPostsSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/blog?limit=3&status=published');
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch blog posts');
        }
        
        const data = await response.json();
        setBlogPosts(data.blogs || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
        setBlogPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !mounted) {
    return null;
  }

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos derniers articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {cleanDescription(post.description)}
                </p>
                <div className="flex items-center text-gray-500">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <time dateTime={post.createdAt}>
                    {mounted ? formatDate(post.createdAt) : ''}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
