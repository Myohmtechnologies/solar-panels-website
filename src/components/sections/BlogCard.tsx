import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  slug: string;
}

const BlogCard = ({ title, description, image, category = 'Blog', slug }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Image Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Category */}
          <p className="text-xs font-semibold text-FFDF64 mb-2 uppercase">{category}</p>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>

          {/* Description */}
          <div 
            className="text-sm text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ 
              __html: description.length > 100 
                ? description.slice(0, 100) + '...' 
                : description 
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
