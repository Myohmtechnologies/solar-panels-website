import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.myohmtechnologies.fr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.myohmtechnologies.fr/simulator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.myohmtechnologies.fr/qui-sommes-nous',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.myohmtechnologies.fr/guide-aides-subventions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.myohmtechnologies.fr/terms-and-conditions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ]
}
