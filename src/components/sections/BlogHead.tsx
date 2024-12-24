import Image from "next/image";

interface BlogHeadProps {
  title: string;
  description: string;
  mainImage: string;
}

const BlogHead = ({ title, description, mainImage }: BlogHeadProps) => {
  return (
    <section className="bg-FFDF64 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2">
          {/* Tag */}
          <p className="text-sm font-semibold text-green-700 bg-green-100 inline-block px-3 py-1 rounded-full mb-4">
            Innovations
          </p>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-800 mb-6">
            {description}
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={mainImage || '/images/blog-default.jpg'}
              alt={title}
              width={700}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHead;
