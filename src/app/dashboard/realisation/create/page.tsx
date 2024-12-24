'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CreateProjectPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mainImagePreview, setMainImagePreview] = useState('');
  const [secondaryImagePreview, setSecondaryImagePreview] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Upload des images
      const imageFormData = new FormData();
      
      // Ajouter l'image principale si elle existe
      const mainImageFile = formData.get('mainImage') as File;
      if (mainImageFile) {
        imageFormData.append('mainImage', mainImageFile);
      }
      
      // Ajouter l'image secondaire si elle existe
      const secondaryImageFile = formData.get('secondaryImage') as File;
      if (secondaryImageFile) {
        imageFormData.append('secondaryImage', secondaryImageFile);
      }

      // Upload des images vers le dossier local
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: imageFormData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Error uploading images');
      }

      const { mainImage, secondaryImage } = await uploadResponse.json();

      // Création du projet avec les chemins des images locales
      const projectData = {
        title: formData.get('title'),
        description: formData.get('description'),
        location: formData.get('location'),
        mainImage,
        secondaryImage,
        powerCapacity: Number(formData.get('powerCapacity')),
        clientType: formData.get('clientType'),
        completionDate: formData.get('completionDate'),
        specifications: {
          surface: formData.get('surface'),
          orientation: formData.get('orientation'),
          panneaux: formData.get('panneaux'),
          production: formData.get('production'),
        }
      };

      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error('Error creating project');
      }

      router.push('/dashboard/realisation');
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue lors de la création du projet');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>, type: 'main' | 'secondary') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'main') {
          setMainImagePreview(reader.result as string);
        } else {
          setSecondaryImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Créer une nouvelle réalisation</h1>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        {/* Informations principales */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Informations principales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localisation
              </label>
              <input
                type="text"
                name="location"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de client
              </label>
              <select
                name="clientType"
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="Particulier">Particulier</option>
                <option value="Professionnel">Professionnel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date de réalisation
              </label>
              <input
                type="date"
                name="completionDate"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Spécifications techniques */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Spécifications techniques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Puissance (kWc)
              </label>
              <input
                type="number"
                name="powerCapacity"
                required
                step="0.1"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Surface (m²)
              </label>
              <input
                type="number"
                name="surface"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Orientation
              </label>
              <input
                type="text"
                name="orientation"
                placeholder="ex: Sud-Est"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de panneaux
              </label>
              <input
                type="number"
                name="panneaux"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Production annuelle (kWh)
              </label>
              <input
                type="number"
                name="production"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Images</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image principale */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image principale
              </label>
              <input
                type="file"
                name="mainImage"
                accept="image/*"
                required
                onChange={(e) => handleImagePreview(e, 'main')}
                className="w-full p-2 border rounded-md"
              />
              {mainImagePreview && (
                <div className="mt-2 relative h-48 w-full">
                  <Image
                    src={mainImagePreview}
                    alt="Preview principale"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>

            {/* Image secondaire */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image secondaire
              </label>
              <input
                type="file"
                name="secondaryImage"
                accept="image/*"
                required
                onChange={(e) => handleImagePreview(e, 'secondary')}
                className="w-full p-2 border rounded-md"
              />
              {secondaryImagePreview && (
                <div className="mt-2 relative h-48 w-full">
                  <Image
                    src={secondaryImagePreview}
                    alt="Preview secondaire"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-6C8D2F text-white px-6 py-2 rounded-md hover:bg-557021 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Création en cours...' : 'Créer la réalisation'}
          </button>
        </div>
      </form>
    </div>
  );
}
