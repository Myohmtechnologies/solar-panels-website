import { RealisationService } from '@/services/realisationService';
import Image from 'next/image';
import { Realisation } from '@/types';
import { MapPinIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

export const revalidate = 3600; // Revalidate every hour

async function getRealisations() {
  try {
    const result = await RealisationService.getAllRealisations();
    return result.realisations || [];
  } catch (error) {
    console.error('Error fetching realisations:', error);
    return [];
  }
}

export default async function RealisationsPage() {
  const realisations = await getRealisations();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Réalisations</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Découvrez nos installations de panneaux solaires réalisées dans toute la région PACA.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {realisations.map((realisation: Realisation) => (
            <article key={realisation._id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={realisation.mainImage}
                  alt={realisation.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                  <div className="flex items-center gap-x-1">
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                    <time dateTime={realisation.date} className="text-gray-500">
                      {new Date(realisation.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <MapPinIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-500">
                      {realisation.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <UserIcon className="h-4 w-4 text-gray-500" />
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {realisation.type}
                    </span>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {realisation.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {realisation.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
