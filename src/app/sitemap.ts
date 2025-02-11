import { MetadataRoute } from 'next'
import bouchesdurhone from './data/departments/13-bouches-du-rhone'
import alpesdehauteprovence from './data/departments/04-alpes-de-haute-provence'
import hautesalpes from './data/departments/05-hautes-alpes'
import alpesmaritimes from './data/departments/06-alpes-maritimes'
import var83 from './data/departments/83-var'
import vaucluse from './data/departments/84-vaucluse'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URLs
  const baseUrls = [
    {
      url: 'https://www.myohmtechnologies.com',
      lastModified: new Date(),
      
    },
    {
      url: 'https://www.myohmtechnologies.com/simulator',
      lastModified: new Date(),
      
    },
    {
      url: 'https://www.myohmtechnologies.com/qui-sommes-nous',
      lastModified: new Date(),
      
    },
    {
      url: 'https://www.myohmtechnologies.com/guide-aides-subventions',
      lastModified: new Date(),
     
    },
    {
      url: 'https://www.myohmtechnologies.com/terms-and-conditions',
      lastModified: new Date(),
    
    }
  ];

  // Function to generate URLs for a department
  const generateDepartmentUrls = (departmentCode: string, cities: any) => {
    return Object.keys(cities).map(citySlug => ({
      url: `https://www.myohmtechnologies.com/region/paca/departements/${departmentCode}/villes/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7
    }));
  };

  // Generate URLs for all departments
  const allCityUrls = [
    ...generateDepartmentUrls('04-alpes-de-haute-provence', alpesdehauteprovence.cities),
    ...generateDepartmentUrls('05-hautes-alpes', hautesalpes.cities),
    ...generateDepartmentUrls('06-alpes-maritimes', alpesmaritimes.cities),
    ...generateDepartmentUrls('13-bouches-du-rhone', bouchesdurhone.cities),
    ...generateDepartmentUrls('83-var', var83.cities),
    ...generateDepartmentUrls('84-vaucluse', vaucluse.cities)
  ];

  return [...baseUrls, ...allCityUrls];
}
