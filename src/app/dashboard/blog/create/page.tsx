'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useImageUpload } from '@/hooks/useImageUpload';
import ImageUpload from '@/components/ImageUpload';
import SEOPreview from '@/components/blog/SEOPreview';
import SchemaPreview from '@/components/blog/SchemaPreview';
import { 
  PlusIcon,
  XMarkIcon,
  TrashIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { Editor } from '@tinymce/tinymce-react';

interface BlogSection {
  title: string;
  description: string;
  imageUrl?: string;
  order: number;
}

const categories = [
  'solaire',
  'energie',
  'environnement',
  'technologie',
  'actualites'
];

const commonTags = [
  'Énergie solaire',
  'Panneaux solaires',
  'Environnement',
  'Économies',
  'Installation',
  'Maintenance',
  'Technologie',
  'Autoconsommation'
];

export default function CreateBlogPostPage() {
  const router = useRouter();
  const { uploadImage: uploadImageToCloud, isUploading } = useImageUpload();
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // Nouveaux états pour SEO et Schema Markup
  const [seoData, setSeoData] = useState({
    seoTitle: '',
    seoDescription: ''
  });
  
  const [schemaData, setSchemaData] = useState({
    schemaType: 'BlogPosting',
    author: 'MyOhm Technologies',
    keywords: [] as string[]
  });
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'actualites',
    sections: [
      {
        title: '',
        description: '',
        imageUrl: '',
        order: 0
      }
    ] as BlogSection[]
  });

  const handleMainImageUpload = async (file: File) => {
    try {
      setError(null);
      console.log('Starting main image upload...');
      const imageUrl = await uploadImageToCloud(file);
      console.log('Image uploaded successfully, URL:', imageUrl);
      if (imageUrl) {
        setMainImage(imageUrl);
        console.log('Main image state updated to:', imageUrl);
      } else {
        throw new Error('No image URL returned from upload');
      }
    } catch (err) {
      console.error('Error uploading main image:', err);
      setError('Erreur lors du téléchargement de l\'image principale');
      throw err;
    }
  };

  const handleSectionImageUpload = async (file: File, sectionIndex: number) => {
    try {
      const imagePath = await uploadImageToCloud(file);
      if (imagePath) {
        const newSections = [...formData.sections];
        newSections[sectionIndex].imageUrl = imagePath;
        setFormData({ ...formData, sections: newSections });
      }
    } catch (err) {
      console.error('Error uploading section image:', err);
      setError('Erreur lors du téléchargement de l\'image de section');
    }
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        {
          title: '',
          description: '',
          imageUrl: '',
          order: formData.sections.length
        }
      ]
    });
  };

  const removeSection = (index: number) => {
    const newSections = formData.sections.filter((_, i) => i !== index);
    newSections.forEach((section, i) => {
      section.order = i;
    });
    setFormData({ ...formData, sections: newSections });
  };

  const handleTagAdd = (tag: string) => {
    if (!selectedTags.includes(tag) && selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    }
    setNewTag('');
  };

  const handleTagRemove = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  const updateSection = (index: number, field: keyof BlogSection, value: string) => {
    const newSections = [...formData.sections];
    newSections[index] = {
      ...newSections[index],
      [field]: value
    };
    setFormData({ ...formData, sections: newSections });
  };

  const handleEditorChange = (content: string) => {
    setFormData(prev => ({
      ...prev,
      description: content
    }));
  };

  const handleSectionDescriptionChange = (content: string, index: number) => {
    const newSections = [...formData.sections];
    newSections[index] = {
      ...newSections[index],
      description: content
    };
    setFormData({ ...formData, sections: newSections });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!mainImage) {
        throw new Error('Veuillez ajouter une image principale');
      }

      const postData = {
        ...formData,
        mainImage,
        tags: selectedTags,
        slug: formData.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, ''),
        // Ajout des données SEO et Schema
        seoTitle: seoData.seoTitle || formData.title,
        seoDescription: seoData.seoDescription || formData.description.substring(0, 160),
        schemaType: schemaData.schemaType,
        author: schemaData.author,
        keywords: schemaData.keywords.length > 0 ? schemaData.keywords : selectedTags
      };

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la création de l\'article');
      }

      router.push('/dashboard/blog');
    } catch (err) {
      console.error('Error creating blog post:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Créer un nouvel article</h1>
            <p className="mt-2 text-gray-600">Remplissez les informations ci-dessous pour créer votre article de blog.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p className="font-medium">Erreur</p>
              <p>{error}</p>
            </div>
          )}

          <div className="space-y-8">
            {/* Titre principal */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Informations principales</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titre de l'article
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64 transition-colors"
                    placeholder="Entrez le titre de votre article"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image principale
                  </label>
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
                    <ImageUpload
                      onUpload={handleMainImageUpload}
                      value={mainImage}
                      loading={isUploading}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64 transition-colors"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-FFDF64 text-6C8D2F"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleTagRemove(tag)}
                            className="ml-2 text-6C8D2F hover:text-red-600"
                          >
                            <XMarkIcon className="h-4 w-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Ajouter un tag"
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64"
                      />
                      <button
                        type="button"
                        onClick={() => handleTagAdd(newTag)}
                        disabled={!newTag || selectedTags.length >= 5}
                        className="px-4 py-2 bg-FFDF64 text-6C8D2F rounded-lg hover:bg-ffb700 hover:text-white transition-colors disabled:opacity-50"
                      >
                        Ajouter
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {commonTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleTagAdd(tag)}
                          disabled={selectedTags.includes(tag) || selectedTags.length >= 5}
                          className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:border-FFDF64 hover:bg-FFDF64 hover:text-6C8D2F transition-colors disabled:opacity-50"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description principale */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Description principale</h2>
              <Editor
                apiKey="hia03q92vx3mrul16a2dvhu4b770e2dk1nvzh3cxzn6ccgz8"
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image',
                  content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; line-height: 1.5; }',
                }}
                value={formData.description}
                onEditorChange={handleEditorChange}
              />
            </div>
            
            {/* Optimisation SEO */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Optimisation SEO</h2>
                <div className="ml-2 text-gray-500 tooltip" title="Ces informations aident à optimiser votre article pour les moteurs de recherche">
                  <InformationCircleIcon className="h-5 w-5" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titre SEO <span className="text-xs text-gray-500">(max 60 caractères)</span>
                  </label>
                  <input
                    type="text"
                    value={seoData.seoTitle}
                    onChange={(e) => setSeoData({ ...seoData, seoTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64"
                    placeholder="Titre optimisé pour les moteurs de recherche"
                    maxLength={60}
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {seoData.seoTitle.length}/60 caractères
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Méta-description <span className="text-xs text-gray-500">(max 160 caractères)</span>
                  </label>
                  <textarea
                    value={seoData.seoDescription}
                    onChange={(e) => setSeoData({ ...seoData, seoDescription: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64"
                    placeholder="Description courte qui apparaîtra dans les résultats de recherche"
                    rows={3}
                    maxLength={160}
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {seoData.seoDescription.length}/160 caractères
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-md font-medium text-gray-700 mb-3">Prévisualisation</h3>
                  <SEOPreview 
                    title={seoData.seoTitle || formData.title}
                    metaDescription={seoData.seoDescription || formData.description.substring(0, 160)}
                    url={`myohmtechnologies.com/blog/${formData.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')}`}
                  />
                </div>
              </div>
            </div>
            
            {/* Schema Markup */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Schema Markup</h2>
                <div className="ml-2 text-gray-500 tooltip" title="Le Schema Markup aide les moteurs de recherche à mieux comprendre votre contenu">
                  <InformationCircleIcon className="h-5 w-5" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type d'article
                  </label>
                  <select
                    value={schemaData.schemaType}
                    onChange={(e) => setSchemaData({ ...schemaData, schemaType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64"
                  >
                    <option value="BlogPosting">Blog (standard)</option>
                    <option value="NewsArticle">Actualité</option>
                    <option value="TechArticle">Article technique</option>
                    <option value="Article">Article général</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auteur
                  </label>
                  <input
                    type="text"
                    value={schemaData.author}
                    onChange={(e) => setSchemaData({ ...schemaData, author: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64"
                    placeholder="Nom de l'auteur"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mots-clés Schema (séparés par des virgules)
                  </label>
                  <input
                    type="text"
                    value={schemaData.keywords.join(', ')}
                    onChange={(e) => setSchemaData({ 
                      ...schemaData, 
                      keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k) 
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-FFDF64 focus:border-FFDF64"
                    placeholder="panneaux solaires, énergie renouvelable, etc."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Si laissé vide, les tags de l'article seront utilisés
                  </p>
                </div>
                
                <SchemaPreview 
                  schemaData={schemaData}
                  blogData={{
                    title: formData.title,
                    description: seoData.seoDescription || formData.description.substring(0, 160),
                    mainImage: mainImage,
                    slug: formData.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')
                  }}
                />
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              <h3 className="text-lg font-semibold text-gray-900">Sections</h3>
              {formData.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl relative">
                  <div className="absolute top-4 right-4">
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Titre de la section avec compteur */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Titre de la section
                        <span className="text-xs text-gray-500 ml-2">
                          ({section.title.length}/100 caractères)
                        </span>
                      </label>
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) => {
                          if (e.target.value.length <= 100) {
                            updateSection(index, 'title', e.target.value);
                          }
                        }}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ffb700 focus:ring-ffb700 sm:text-sm
                          ${section.title.length >= 100 ? 'border-red-500' : ''}`}
                        placeholder="Titre de la section"
                      />
                      {section.title.length >= 100 && (
                        <p className="text-red-500 text-xs mt-1">
                          Le titre ne peut pas dépasser 100 caractères
                        </p>
                      )}
                    </div>

                    {/* Description de la section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <Editor
                        apiKey="hia03q92vx3mrul16a2dvhu4b770e2dk1nvzh3cxzn6ccgz8"
                        init={{
                          height: 200,
                          menubar: false,
                          plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                          ],
                          toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image',
                          content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; line-height: 1.5; }',
                        }}
                        value={section.description}
                        onEditorChange={(content) => handleSectionDescriptionChange(content, index)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image de la section
                      </label>
                      <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
                        <ImageUpload
                          onUpload={(file) => handleSectionImageUpload(file, index)}
                          value={section.imageUrl}
                          loading={isUploading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={addSection}
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-md text-base font-semibold rounded-lg text-6C8D2F bg-FFDF64 hover:bg-ffb700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-FFDF64 transition-all duration-300"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Ajouter une section
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-md text-base font-semibold rounded-lg text-6C8D2F bg-FFDF64 hover:bg-ffb700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-FFDF64 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? 'Création en cours...' : 'Créer l\'article'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
