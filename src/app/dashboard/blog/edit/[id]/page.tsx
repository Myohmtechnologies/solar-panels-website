'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogForm from '@/components/forms/BlogForm';
import { Editor } from '@tinymce/tinymce-react';
import type { BlogPost } from '@/services/blogService';

interface BlogWithId extends BlogPost {
  _id: string;
}

export default function EditBlogPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blog, setBlog] = useState<BlogWithId | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogPost>({ title: '', description: '', content: '', sections: [] });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/id/${params.id}`);
        if (!response.ok) {
          throw new Error('Blog non trouvé');
        }
        const data = await response.json();
        setBlog(data);
        setFormData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

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

  const handleSubmit = async (formData: BlogPost) => {
    try {
      const response = await fetch(`/api/blog/id/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du blog');
      }

      router.push('/dashboard/blog');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Une erreur est survenue');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-6C8D2F"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Erreur : </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Blog non trouvé</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Modifier le blog</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}>
          {/* Description Editor */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <Editor
              apiKey="hia03q92vx3mrul16a2dvhu4b770e2dk1nvzh3cxzn6ccgz8"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link'
                ],
                toolbar: 'bold italic | bullist numlist | link',
                formats: {
                  bold: { inline: 'strong' },
                  italic: { inline: 'em' }
                },
                forced_root_block: 'div',
                force_br_newlines: false,
                force_p_newlines: false,
                remove_linebreaks: true,
                valid_elements: 'strong,em,a[href],ul,ol,li,div,br',
                content_style: 'body { font-family: system-ui, -apple-system, sans-serif; font-size: 16px; line-height: 1.5; } div { margin-bottom: 1em; }'
              }}
              value={formData.description}
              onEditorChange={handleEditorChange}
            />
          </div>

          {/* Sections */}
          <div className="mt-6">
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Sections
            </label>
            {formData.sections?.map((section, index) => (
              <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg relative">
                {/* Section Title */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titre de la section
                  </label>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => {
                      const newSections = [...formData.sections];
                      newSections[index] = { ...section, title: e.target.value };
                      setFormData({ ...formData, sections: newSections });
                    }}
                    className="shadow-sm focus:ring-6C8D2F focus:border-6C8D2F block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                {/* Section Description with TinyMCE */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description de la section
                  </label>
                  <Editor
                    apiKey="hia03q92vx3mrul16a2dvhu4b770e2dk1nvzh3cxzn6ccgz8"
                    init={{
                      height: 300,
                      menubar: true,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                      ],
                      toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    value={section.description}
                    onEditorChange={(content) => handleSectionDescriptionChange(content, index)}
                  />
                </div>
              </div>
            ))}
          </div>

          <button type="submit" className="bg-6C8D2F hover:bg-6C8D2F text-white font-bold py-2 px-4 rounded">
            Enregistrer les modifications
          </button>
        </form>
      </div>
    </div>
  );
}
