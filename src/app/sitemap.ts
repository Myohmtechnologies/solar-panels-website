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

    },
    {
      url: 'https://www.myohmtechnologies.com/mentions-legales',
      lastModified: new Date(),

    },
    {
      url: 'https://www.myohmtechnologies.com/nos-realisation',
      lastModified: new Date(),

    },
    {
      url: 'https://www.myohmtechnologies.com/blog',
      lastModified: new Date(),

    }
  ];

  // Function to generate URLs for a department
  const generateDepartmentUrls = (departmentCode: string, cities: any) => {
    return Object.keys(cities).map(citySlug => ({
      url: `https://www.myohmtechnologies.com/region/paca/departements/${departmentCode}/villes/${citySlug}`,
      lastModified: new Date(),

    }));
  };

  // Generate URLs for each department
  const departmentUrls = [
    ...generateDepartmentUrls('13', bouchesdurhone.cities),
    ...generateDepartmentUrls('04', alpesdehauteprovence.cities),
    ...generateDepartmentUrls('05', hautesalpes.cities),
    ...generateDepartmentUrls('06', alpesmaritimes.cities),
    ...generateDepartmentUrls('83', var83.cities),
    ...generateDepartmentUrls('84', vaucluse.cities),
  ];

  return [...baseUrls, ...departmentUrls];
}
