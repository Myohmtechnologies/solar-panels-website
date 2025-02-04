import { MetadataRoute } from 'next'
import bouchesdurhone from './data/departments/13-bouches-du-rhone'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URLs
  const baseUrls = [
    {
      url: 'https://www.myohmtechnologies.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.myohmtechnologies.com/simulator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.myohmtechnologies.com/qui-sommes-nous',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.myohmtechnologies.com/guide-aides-subventions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.myohmtechnologies.com/terms-and-conditions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ];

  // Generate URLs for all cities
  const cityUrls = Object.keys(bouchesdurhone.cities).map(citySlug => ({
    url: `https://www.myohmtechnologies.com/region/paca/departements/13-bouches-du-rhone/villes/${citySlug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  return [...baseUrls, ...cityUrls];
}
