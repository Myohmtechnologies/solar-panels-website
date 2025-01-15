import Image from "next/image";
import Link from "next/link";

type SolarProjectCardProps = {
  image: string;
  capacity: string;
  date: string;
  title: string;
  link: string;
};

const SolarProjectCard = ({
  image,
  capacity,
  date,
  title,
  link,
}: SolarProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Badge Section */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
          {capacity}
        </span>
        <span className="text-xs text-white">{date}</span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <Link
          href={link}
          className="text-sm font-medium text-yellow-500 hover:text-yellow-600"
        >
          AFFICHER LES DÉTAILS →
        </Link>
      </div>
    </div>
  );
};

export default SolarProjectCard;
