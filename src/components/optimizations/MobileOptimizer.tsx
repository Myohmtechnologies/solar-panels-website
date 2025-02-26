'use client';

import { useEffect } from 'react';

export default function MobileOptimizer() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Désactiver les animations CSS sur mobile
    if (window.innerWidth <= 768) {
      document.documentElement.style.setProperty('--enable-animations', '0');
    }

    // Charger les polices de manière optimisée
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('700 1em Poppins'),
        document.fonts.load('400 1em Poppins')
      ]).catch(() => {
        // Fallback silencieux en cas d'échec
      });
    }

    // Précharger les images critiques
    const preloadImages = ['/images/hero-paca.jpg'];
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
