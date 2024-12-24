'use client';

import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface Props {
  items: {
    name: string;
    href: string;
  }[];
}

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-gray-600 hover:text-AFC97E transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRightIcon className="w-4 h-4 text-gray-500 mx-1" />
            {index === items.length - 1 ? (
              <span className="text-AFC97E font-medium">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-AFC97E transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
