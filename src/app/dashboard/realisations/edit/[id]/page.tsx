'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Realisation } from '@/types';
import { toast } from 'react-hot-toast';

export default function EditRealisationPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Partial<Realisation>>({
    title: '',
    description: '',
    mainImage: '',
    secondaryImage: '',
    region: '',
    city: '',
    type: '',
    year: new Date().getFullYear(),
    date: new Date().toISOString().split('T')[0],
    specifications: {
      puissance: 0,
      pannels: 0,
      surface: 0,
      orientation: '',
      economie: 0
    }
  });

  // Charger les données de la réalisation
  useEffect(() => {
    const fetchRealisation = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/realisations/${id}`);
        
        if (!response.ok) {
          throw new Error(`Erreur lors de la récupération de la réalisation: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Données récupérées:', data);
        
        // Formater la date pour l'input date
        if (data.date) {
          data.date = new Date(data.date).toISOString().split('T')[0];
        }
        
        setFormData(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement de la réalisation:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchRealisation();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      // Gestion des champs imbriqués (specifications)
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      // Gestion des champs simples
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSaving(true);
      
      // Convertir les valeurs numériques
      const dataToSend = {
        ...formData,
        year: Number(formData.year),
        specifications: {
          ...formData.specifications,
          puissance: Number(formData.specifications?.puissance),
          pannels: Number(formData.specifications?.pannels),
          surface: Number(formData.specifications?.surface),
          economie: Number(formData.specifications?.economie)
        }
      };
      
      const response = await fetch(`/api/realisations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erreur lors de la mise à jour: ${response.status}`);
      }

      toast.success('Réalisation mise à jour avec succès');
      router.push('/dashboard/realisations');
    } catch (err) {
      console.error('Erreur lors de la mise à jour:', err);
      toast.error(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-AFC97E"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Erreur</p>
          <p>{error}</p>
          <Link href="/dashboard/realisations" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
            <ArrowLeftIcon className="w-4 h-4 mr-1" /> Retour aux réalisations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <Link href="/dashboard/realisations" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeftIcon className="w-4 h-4 mr-1" /> Retour aux réalisations
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Modifier la réalisation</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description || ''}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                required
              />
            </div>
            
            <div>
              <label htmlFor="mainImage" className="block text-sm font-medium text-gray-700">Image principale (URL)</label>
              <input
                type="text"
                id="mainImage"
                name="mainImage"
                value={formData.mainImage || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                required
              />
              {formData.mainImage && (
                <div className="mt-2 relative h-40 w-full">
                  <Image
                    src={formData.mainImage}
                    alt="Aperçu de l'image principale"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="secondaryImage" className="block text-sm font-medium text-gray-700">Image secondaire (URL, optionnelle)</label>
              <input
                type="text"
                id="secondaryImage"
                name="secondaryImage"
                value={formData.secondaryImage || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
              />
              {formData.secondaryImage && (
                <div className="mt-2 relative h-40 w-full">
                  <Image
                    src={formData.secondaryImage}
                    alt="Aperçu de l'image secondaire"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">Région</label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  value={formData.region || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ville</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  required
                >
                  <option value="">Sélectionner un type</option>
                  <option value="Panneaux Solaires">Panneaux Solaires</option>
                  <option value="Résidentiel">Résidentiel</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Agricole">Agricole</option>
                  <option value="Industriel">Industriel</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Année</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year || new Date().getFullYear()}
                  onChange={handleChange}
                  min="2000"
                  max={new Date().getFullYear()}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date ? new Date(formData.date).toISOString().split('T')[0] : ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                required
              />
            </div>
            
            <fieldset className="border border-gray-300 rounded-md p-4 mt-4">
              <legend className="text-sm font-medium text-gray-700 px-2">Spécifications techniques</legend>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="puissance" className="block text-sm font-medium text-gray-700">Puissance (kWc)</label>
                  <input
                    type="number"
                    id="puissance"
                    name="specifications.puissance"
                    value={formData.specifications?.puissance || 0}
                    onChange={handleChange}
                    step="0.1"
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  />
                </div>
                
                <div>
                  <label htmlFor="pannels" className="block text-sm font-medium text-gray-700">Nombre de panneaux</label>
                  <input
                    type="number"
                    id="pannels"
                    name="specifications.pannels"
                    value={formData.specifications?.pannels || 0}
                    onChange={handleChange}
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  />
                </div>
                
                <div>
                  <label htmlFor="surface" className="block text-sm font-medium text-gray-700">Surface (m²)</label>
                  <input
                    type="number"
                    id="surface"
                    name="specifications.surface"
                    value={formData.specifications?.surface || 0}
                    onChange={handleChange}
                    step="0.1"
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  />
                </div>
                
                <div>
                  <label htmlFor="orientation" className="block text-sm font-medium text-gray-700">Orientation</label>
                  <select
                    id="orientation"
                    name="specifications.orientation"
                    value={formData.specifications?.orientation || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Sud">Sud</option>
                    <option value="Sud-Est">Sud-Est</option>
                    <option value="Sud-Ouest">Sud-Ouest</option>
                    <option value="Est">Est</option>
                    <option value="Ouest">Ouest</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="economie" className="block text-sm font-medium text-gray-700">Économie annuelle (€)</label>
                  <input
                    type="number"
                    id="economie"
                    name="specifications.economie"
                    value={formData.specifications?.economie || 0}
                    onChange={handleChange}
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-AFC97E focus:ring-AFC97E"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Link
            href="/dashboard/realisations"
            className="mr-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Annuler
          </Link>
          <button
            type="submit"
            disabled={isSaving}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-AFC97E hover:bg-AFC97E/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-AFC97E disabled:opacity-50"
          >
            {isSaving ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </div>
      </form>
    </div>
  );
}
