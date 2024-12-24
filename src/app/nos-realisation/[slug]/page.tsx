import { ProjectService } from '@/services/projectService';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProjectData(params: Promise<{ slug: string }>) {
  try {
    const resolvedParams = await params;
    const project = await ProjectService.getProjectBySlug(resolvedParams.slug);
    if (!project) {
      return null;
    }
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const project = await getProjectData(params);

  if (!project) {
    return {
      title: 'Réalisation non trouvée | MyOhm Technologies',
    };
  }

  return {
    title: `${project.title} | MyOhm Technologies`,
    description: project.description,
    openGraph: {
      title: `${project.title} | MyOhm Technologies`,
      description: project.description,
      images: [project.mainImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectData(params);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {project.title}
            </h1>
            <div className="mt-4 flex items-center gap-x-4 text-sm">
              <time dateTime={project.completionDate} className="text-gray-500">
                {new Date(project.completionDate).toLocaleDateString('fr-FR')}
              </time>
              <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                {project.clientType}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src={project.mainImage}
              alt={project.title}
              width={800}
              height={400}
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
              priority
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {project.secondaryImages?.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                width={400}
                height={300}
                className="aspect-[4/3] w-full rounded-2xl bg-gray-100 object-cover"
              />
            ))}
          </div>

          <div className="mt-8 prose prose-lg prose-indigo mx-auto">
            <p className="text-lg text-gray-700 leading-8">{project.description}</p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">Caractéristiques techniques</h2>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Puissance installée</dt>
                  <dd className="mt-1 text-lg font-medium text-gray-900">{project.powerCapacity} kWc</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Surface</dt>
                  <dd className="mt-1 text-lg font-medium text-gray-900">{project.specifications.surface} m²</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Orientation</dt>
                  <dd className="mt-1 text-lg font-medium text-gray-900">{project.specifications.orientation}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Nombre de panneaux</dt>
                  <dd className="mt-1 text-lg font-medium text-gray-900">{project.specifications.panneaux}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Production annuelle estimée</dt>
                  <dd className="mt-1 text-lg font-medium text-gray-900">{project.specifications.production} kWh/an</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Localisation</dt>
                  <dd className="mt-1 text-lg font-medium text-gray-900">{project.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
