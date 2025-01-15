import { RealisationService } from '@/services/realisationService';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarIcon, MapPinIcon, ChartBarIcon, BoltIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const revalidate = 3600;

interface Props {
  params: { id: string };
}

async function getRealisationData(id: string) {
  try {
    console.log('Fetching realisation with ID:', id);
    const realisation = await RealisationService.getRealisationById(id);
    console.log('Fetched realisation:', realisation);
    if (!realisation) {
      return null;
    }
    return realisation;
  } catch (error) {
    console.error('Error fetching realisation:', error);
    return null;
  }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const realisation = await getRealisationData(params.id);

  if (!realisation) {
    return {
      title: 'Réalisation non trouvée | MyOhm Technologies',
    };
  }

  return {
    title: `${realisation.title} | MyOhm Technologies`,
    description: realisation.description,
    openGraph: {
      title: `${realisation.title} | MyOhm Technologies`,
      description: realisation.description,
      images: [realisation.mainImage],
    },
  };
}

export default async function RealisationPage({ params }: Props) {
  const realisation = await getRealisationData(params.id);

  if (!realisation) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          href="/nos-realisation"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Retour aux réalisations
        </Link>

        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{realisation.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-FFDF64" />
              <time dateTime={realisation.date.toString()}>
                {new Date(realisation.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long'
                })}
              </time>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-FFDF64" />
              {realisation.city}
            </div>
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-ffeb99 to-ffb700 px-3 py-1 text-sm font-medium text-gray-900">
              {realisation.type}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Images et Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={realisation.mainImage}
                  alt={realisation.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {realisation.secondaryImage && (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={realisation.secondaryImage}
                    alt={`${realisation.title} - Vue secondaire`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description du projet</h2>
              <p className="text-gray-600 leading-relaxed">{realisation.description}</p>
            </div>
          </div>

          {/* Spécifications */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Caractéristiques techniques</h2>
              {realisation.specifications && (
                <dl className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <dt className="flex items-center text-gray-600">
                      <BoltIcon className="h-5 w-5 mr-2 text-FFDF64" />
                      Puissance installée
                    </dt>
                    <dd className="font-semibold text-gray-900">{realisation.specifications.puissance} kWc</dd>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <dt className="flex items-center text-gray-600">
                      <ChartBarIcon className="h-5 w-5 mr-2 text-FFDF64" />
                      Nombre de panneaux
                    </dt>
                    <dd className="font-semibold text-gray-900">{realisation.specifications.pannels}</dd>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <dt className="flex items-center text-gray-600">
                      <ChartBarIcon className="h-5 w-5 mr-2 text-FFDF64" />
                      Surface
                    </dt>
                    <dd className="font-semibold text-gray-900">{realisation.specifications.surface} m²</dd>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <dt className="flex items-center text-gray-600">
                      <ChartBarIcon className="h-5 w-5 mr-2 text-FFDF64" />
                      Économie annuelle
                    </dt>
                    <dd className="font-semibold text-gray-900">{realisation.specifications.economie} €</dd>
                  </div>
                </dl>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
