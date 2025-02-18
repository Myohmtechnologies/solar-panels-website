'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);

  // Générer un petit SVG de placeholder
  const generatePlaceholder = (w: number, h: number) => {
    const svg = `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="#F3F4F6"/></svg>`;
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={85}
        priority={priority}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        className={`
          duration-700 ease-in-out
          ${isLoading 
            ? 'scale-110 blur-2xl grayscale' 
            : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setLoading(false)}
        placeholder="blur"
        blurDataURL={generatePlaceholder(width, height)}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
}
