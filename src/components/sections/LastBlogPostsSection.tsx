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

export default function LastBlogPostsSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        // Vérifie si data.blogs existe, sinon utilise data directement
        setBlogPosts(Array.isArray(data.blogs) ? data.blogs : data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setBlogPosts([]); // Initialise avec un tableau vide en cas d'erreur
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos derniers articles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-t-2xl"></div>
                <div className="bg-white p-6 rounded-b-2xl">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!blogPosts.length) {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">Aucun article disponible pour le moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos derniers articles
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos derniers articles sur le solaire et les énergies renouvelables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <CalendarIcon className="h-5 w-5" />
                    <time>
                      {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-FFDF64 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {cleanDescription(post.description)}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
