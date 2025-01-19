'use client';

import { useEffect, useState } from 'react';
import { trackScrollDepth } from '@/services/analytics';

const ScrollTracker = () => {
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      if (scrolled > maxScroll) {
        setMaxScroll(scrolled);
        
        // Track at specific thresholds
        const thresholds = [25, 50, 75, 90];
        thresholds.forEach(threshold => {
          if (scrolled >= threshold && maxScroll < threshold) {
            trackScrollDepth(threshold);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScroll]);

  return null;
};

export default ScrollTracker;
