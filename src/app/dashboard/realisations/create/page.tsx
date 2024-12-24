'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function CreateRealisationPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [secondaryImage, setSecondaryImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>('');
  const [secondaryImagePreviews, setSecondaryImagePreviews] = useState<string[]>([]);

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>, type: 'main' | 'secondary') => {
    const files = e.target.files;
    if (!files) return;

    if (type === 'main') {
      setMainImage(files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImagePreview(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setSecondaryImage(files[0]);
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSecondaryImagePreviews(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Vérification des champs requis
      const title = formData.get('title') as string;
      const description = formData.get('description') as string;
      const location = formData.get('location') as string;
      const clientType = formData.get('clientType') as string;
      const completionDate = formData.get('completionDate') as string;

      if (!title || !description || !location || !clientType || !completionDate || !mainImage) {
        throw new Error('Veuillez remplir tous les champs requis et ajouter une image principale');
      }

      let mainImageUrl = '';
      const secondaryImageUrls: string[] = [];

      // Upload de l'image principale
      const mainImageFormData = new FormData();
      mainImageFormData.append('file', mainImage);
      mainImageFormData.append('folder', 'realisations');

      const mainImageRes = await fetch('/api/upload', {
        method: 'POST',
        body: mainImageFormData,
      });

      if (!mainImageRes.ok) {
        throw new Error('Erreur lors de l\'upload de l\'image principale');
      }

      const mainImageData = await mainImageRes.json();
      mainImageUrl = mainImageData.path;

      // Upload de l'image secondaire si elle existe
      if (secondaryImage) {
        const secondaryImageFormData = new FormData();
        secondaryImageFormData.append('file', secondaryImage);
        secondaryImageFormData.append('folder', 'realisations');

        const secondaryImageRes = await fetch('/api/upload', {
          method: 'POST',
          body: secondaryImageFormData,
        });

        if (!secondaryImageRes.ok) {
          throw new Error('Erreur lors de l\'upload de l\'image secondaire');
        }

        const secondaryImageData = await secondaryImageRes.json();
        secondaryImageUrls.push(secondaryImageData.path);
      }

      // Création de la réalisation avec les URLs des images
      const realisationData = {
        title,
        description,
        region: 'Provence-Alpes-Côte d\'Azur',
        city: location,
        type: clientType,
        year: new Date(completionDate).getFullYear(),
        date: completionDate,
        mainImage: mainImageUrl,
        secondaryImage: secondaryImageUrls[0] || '',
      };

      const response = await fetch('/api/realisations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(realisationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la création de la réalisation');
      }

      router.push('/dashboard/realisations');
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      alert(error instanceof Error ? error.message : 'Une erreur est survenue lors de la création de la réalisation');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/dashboard/realisations"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Retour aux réalisations
        </Link>
        <h1 className="mt-4 text-2xl font-semibold text-gray-900">
          Nouvelle Réalisation
        </h1>
      </div>

      <div className="bg-white shadow rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Localisation
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={3}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="puissance" className="block text-sm font-medium text-gray-700">
                Puissance (kWc)
              </label>
              <input
                type="number"
                name="puissance"
                id="puissance"
                step="0.1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="clientType" className="block text-sm font-medium text-gray-700">
                Type de client
              </label>
              <select
                name="clientType"
                id="clientType"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              >
                <option value="Particulier">Particulier</option>
                <option value="Professionnel">Professionnel</option>
              </select>
            </div>

            <div>
              <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700">
                Date de réalisation
              </label>
              <input
                type="date"
                name="completionDate"
                id="completionDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="surface" className="block text-sm font-medium text-gray-700">
                Surface (m²)
              </label>
              <input
                type="number"
                name="surface"
                id="surface"
                step="0.1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="orientation" className="block text-sm font-medium text-gray-700">
                Orientation
              </label>
              <input
                type="text"
                name="orientation"
                id="orientation"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="pannels" className="block text-sm font-medium text-gray-700">
                Nombre de panneaux
              </label>
              <input
                type="number"
                name="pannels"
                id="pannels"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="production" className="block text-sm font-medium text-gray-700">
                Production (kWh/an)
              </label>
              <input
                type="number"
                name="production"
                id="production"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F sm:text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Images
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image principale */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image principale
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="mainImage"
                          className="relative cursor-pointer rounded-md font-medium text-6C8D2F hover:text-5a7526 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-6C8D2F"
                        >
                          <span>Télécharger l&apos;image principale</span>
                          <input
                            id="mainImage"
                            name="mainImage"
                            type="file"
                            accept="image/*"
                            required
                            className="sr-only"
                            onChange={(e) => {
                              if (e.target.files) {
                                setMainImage(e.target.files[0]);
                                handleImagePreview(e, 'main');
                              }
                            }}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF jusqu&apos;à 10MB
                      </p>
                      {mainImagePreview && (
                        <Image
                          width={40}
                          height={40} 
                          src={mainImagePreview}
                          alt="Image principale"
                          className="mt-4 h-40 w-40 rounded-md object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Image secondaire */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Images secondaires
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="secondaryImages"
                          className="relative cursor-pointer rounded-md font-medium text-6C8D2F hover:text-5a7526 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-6C8D2F"
                        >
                          <span>Télécharger les images secondaires</span>
                          <input
                            id="secondaryImages"
                            name="secondaryImages"
                            type="file"
                            accept="image/*"
                            multiple
                            required
                            className="sr-only"
                            onChange={(e) => {
                              if (e.target.files) {
                                setSecondaryImage(e.target.files[0]);
                                handleImagePreview(e, 'secondary');
                              }
                            }}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF jusqu&apos;à 10MB
                      </p>
                      {secondaryImagePreviews.map((preview, index) => (
                        <Image
                          width={200}
                          height={200}
                          key={index}
                          src={preview}
                          alt={`Image secondaire ${index + 1}`}
                          className="mt-4 h-40 w-40 rounded-md object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Link
              href="/dashboard/realisations"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-6C8D2F"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-6C8D2F hover:bg-5a7526 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-6C8D2F"
            >
              {isSubmitting ? 'Création...' : 'Créer la réalisation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
