'use client';

import { useState } from 'react';
import type { BlogPost, BlogSection } from '@/services/blogService';
import ImageUpload from './ImageUpload';

interface BlogFormProps {
  initialData?: BlogPost;
  onSubmit: (data: BlogPost) => Promise<void>;
}

export default function BlogForm({ initialData, onSubmit }: BlogFormProps) {
  const [formData, setFormData] = useState<BlogPost>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    mainImage: initialData?.mainImage || '',
    sections: initialData?.sections || [],
    category: initialData?.category || 'actualites',
    tags: initialData?.tags || [],
    status: initialData?.status || 'draft'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSectionChange = (index: number, field: keyof BlogSection, value: string) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map((section, i) => 
        i === index ? { ...section, [field]: value } : section
      )
    }));
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { title: '', description: '', imageUrl: '', order: prev.sections.length }]
    }));
  };

  const removeSection = (index: number) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await onSubmit(formData);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      {/* Titre */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Titre
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F"
          required
        />
      </div>

      {/* Image Principale */}
      <div>
        <ImageUpload
          currentImage={formData.mainImage}
          onImageSelected={(url) => setFormData(prev => ({ ...prev, mainImage: url }))}
          label="Image Principale"
        />
      </div>

      {/* Catégorie */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Catégorie
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F"
        >
          <option value="solaire">Solaire</option>
          <option value="energie">Énergie</option>
          <option value="environnement">Environnement</option>
          <option value="technologie">Technologie</option>
          <option value="actualites">Actualités</option>
        </select>
      </div>

      {/* Statut */}
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Statut
        </label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F"
        >
          <option value="draft">Brouillon</option>
          <option value="published">Publié</option>
          <option value="archived">Archivé</option>
        </select>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Sections</h3>
          <button
            type="button"
            onClick={addSection}
            className="px-4 py-2 text-sm font-medium text-white bg-6C8D2F rounded-md hover:bg-557021"
          >
            Ajouter une section
          </button>
        </div>

        {formData.sections.map((section, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-md font-medium text-gray-900">Section {index + 1}</h4>
              <button
                type="button"
                onClick={() => removeSection(index)}
                className="text-red-600 hover:text-red-800"
              >
                Supprimer
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Titre</label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={section.description}
                onChange={(e) => handleSectionChange(index, 'description', e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-6C8D2F focus:ring-6C8D2F"
                required
              />
            </div>

            <div>
              <ImageUpload
                currentImage={section.imageUrl}
                onImageSelected={(url) => handleSectionChange(index, 'imageUrl', url)}
                label="Image de section (optionnel)"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-sm font-medium text-white bg-6C8D2F rounded-md hover:bg-557021 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
    </form>
  );
}
