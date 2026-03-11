'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { RegionData } from '@/config/seo';

interface Props {
  currentRegion: RegionData;
  previousRegion?: RegionData;
  nextRegion?: RegionData;
}

export default function RegionNavigation({ currentRegion, previousRegion, nextRegion }: Props) {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {previousRegion ? (
        <Link
          href={`/region/${previousRegion.slug}`}
          className="group flex items-center text-gray-600 hover:text-AFC97E transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5 mr-2" />
          <span>
            <span className="block text-sm text-gray-500">Région précédente</span>
            <span className="block font-medium group-hover:text-AFC97E">
              {previousRegion.name}
            </span>
          </span>
        </Link>
      ) : (
        <div />
      )}

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center hidden sm:block"
      >
        <span className="block text-sm text-gray-500">Région actuelle</span>
        <span className="block font-medium text-AFC97E">{currentRegion.name}</span>
      </motion.div>

      {nextRegion ? (
        <Link
          href={`/region/${nextRegion.slug}`}
          className="group flex items-center text-right text-gray-600 hover:text-AFC97E transition-colors"
        >
          <span>
            <span className="block text-sm text-gray-500">Région suivante</span>
            <span className="block font-medium group-hover:text-AFC97E">
              {nextRegion.name}
            </span>
          </span>
          <ChevronRightIcon className="w-5 h-5 ml-2" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
