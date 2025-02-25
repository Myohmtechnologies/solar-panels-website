'use client';

import BlogHeader from '@/components/sections/BlogHeader';
import BlogCard from '@/components/sections/BlogCard';
import { useEffect, useState } from 'react';
import SolarChoiceSection from '@/components/sections/SolarChoiceSection';
import RelatedCitiesSection from '@/components/sections/RelatedCitiesSection';
import type { BlogPost } from '@/services/blogService';

interface BlogWithId extends BlogPost {
  _id: string;
  slug: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        console.log('API Response:', data); // Ajouter ce log
        setBlogs(data.blogs || []); // Accéder au tableau blogs dans la réponse
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-f2f6fa to-e3e9f0">
      <main className="flex-grow">
        <div className="-mt-4">
          <BlogHeader />
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-FFDF64"></div>
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.mainImage}
                  category={blog.category}
                  slug={blog.slug}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Aucun article de blog disponible pour le moment.</p>
          )}
        </div>

        {/* Section des villes liées */}
        <RelatedCitiesSection />

        <div className="mt-16">
          <SolarChoiceSection />
        </div>
      </main>
    </div>
  );
}