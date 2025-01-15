'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onUpload: (file: File) => Promise<void>;
  value?: string;
  loading?: boolean;
}

export default function ImageUpload({ onUpload, value, loading = false }: ImageUploadProps) {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validation
    if (!file.type.startsWith('image/')) {
      setError('Veuillez sélectionner une image');
      return;
    }

    try {
      setError(null);
      await onUpload(file);
    } catch (err) {
      setError('Échec du téléchargement de l\'image');
      console.error('Erreur de téléchargement:', err);
    }
  };

  return (
    <div className="relative">
      <div className="min-h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
        {value ? (
          <div className="relative w-full h-full min-h-[200px]">
            <Image
              src={value}
              alt="Aperçu"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="text-center p-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              />
            </svg>
            <p className="mt-1 text-sm text-gray-600">
              Cliquez ou glissez pour télécharger une image
            </p>
          </div>
        )}
        
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={loading}
        />
      </div>

      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-6C8D2F"></div>
        </div>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
