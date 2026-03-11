import Link from 'next/link';

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <Link 
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
