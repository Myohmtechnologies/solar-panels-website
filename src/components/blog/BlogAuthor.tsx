import Image from 'next/image';

const BlogAuthor = () => {
  return (
    <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="MyOhm Technologies"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">MyOhm Technologies</h3>
        <p className="text-gray-600 text-sm mt-1">
          Expert en solutions d&apos;énergie solaire pour particuliers et professionnels
        </p>
        <a 
          href="/contact"
          className="inline-block mt-2 text-6C8D2F hover:text-FFDF64 font-medium text-sm"
        >
          Contactez-nous →
        </a>
      </div>
    </div>
  );
};

export default BlogAuthor;
