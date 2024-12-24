import { notFound } from 'next/navigation';
import BlogHead from '@/components/sections/BlogHead';
import BlogSection from '@/components/sections/BlogSection';
import { BlogService } from '@/services/blogService';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

interface BlogSection {
  title: string;
  content: string;
}

async function getBlogPost(params: Promise<{ slug: string }>) {
  const resolvedParams = await params;
  return BlogService.getBlogBySlug(resolvedParams.slug);
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const blog = await getBlogPost(params);

  if (!blog) {
    return {
      title: 'Article non trouvé | MyOhm Technologies',
    };
  }

  return {
    title: `${blog.title} | MyOhm Technologies`,
    description: blog.description,
    openGraph: {
      title: `${blog.title} | MyOhm Technologies`,
      description: blog.description,
      images: [blog.mainImage || '/images/blog-default.jpg'],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  try {
    const blog = await getBlogPost(params);

    if (!blog) {
      notFound();
    }

    // Generate table of contents from sections
    const tableOfContents = blog.sections?.map((section: any, index: number) => ({
      title: section.title,
      id: `section-${index}`,
    })) || [];

    // Adapter les sections pour correspondre au type Section
    const adaptedSections = blog.sections?.map(section => ({
      title: section.title,
      description: section.description,
      content: section.description, // Utiliser la description comme contenu
      image: section.imageUrl || undefined // Convertir null en undefined
    })) || [];

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-grow">
          <BlogHead 
            title={blog.title}
            description={blog.description}
            mainImage={blog.mainImage || '/images/blog-default.jpg'}
          />
          
          {/* Blog Meta */}
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center text-gray-600 gap-4">
              <span className="inline-block bg-6C8D2F text-white px-4 py-1 rounded-full text-sm">
                {blog.category}
              </span>
              <span>My Ohm Technologies</span>
              <span>•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>

          {/* Blog Content with Sections */}
          <BlogSection 
            sections={adaptedSections}
            tableOfContents={tableOfContents}
          />
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error in BlogDetailPage:', error);
    notFound();
  }
}
