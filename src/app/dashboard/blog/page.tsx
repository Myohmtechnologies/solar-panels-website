'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  TagIcon,
  ClockIcon,
  LinkIcon,
  BookOpenIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import type { BlogPost } from '@/services/blogService';

interface BlogWithId extends BlogPost {
  _id: string;
  articleType?: 'pilier' | 'niche' | 'standard';
  pilierParent?: string;
  articlesNicheLies?: string[];
}

export default function BlogDashboardPage() {
  const [posts, setPosts] = useState<BlogWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [pilierArticles, setPilierArticles] = useState<{[key: string]: BlogWithId}>({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Construire l'URL avec les paramètres de filtre
        let url = '/api/blog';
        const params = new URLSearchParams();
        
        if (selectedType) {
          params.append('type', selectedType);
        }
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.blogs || []); 
        
        // Créer un dictionnaire des articles piliers pour référence rapide
        const pilierDict: {[key: string]: BlogWithId} = {};
        data.blogs.forEach((blog: BlogWithId) => {
          if (blog.articleType === 'pilier') {
            pilierDict[blog._id] = blog;
          }
        });
        setPilierArticles(pilierDict);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Une erreur est survenue lors du chargement des articles');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedType]);

  // Extraire tous les tags uniques
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags || []))
  );

  // Filtrer les posts par tag si un tag est sélectionné
  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags?.includes(selectedTag))
    : posts;
    
  // Fonction pour obtenir le nom de l'article pilier parent
  const getPilierName = (pilierParentId: string | undefined) => {
    if (!pilierParentId) return '';
    return pilierArticles[pilierParentId]?.title || 'Article pilier inconnu';
  };
  
  // Fonction pour obtenir le badge de type d'article
  const getArticleTypeBadge = (type: string | undefined) => {
    switch(type) {
      case 'pilier':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <BookOpenIcon className="h-3 w-3 mr-1" />
            Article Pilier
          </span>
        );
      case 'niche':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <DocumentDuplicateIcon className="h-3 w-3 mr-1" />
            Article de Niche
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <DocumentTextIcon className="h-3 w-3 mr-1" />
            Article Standard
          </span>
        );
    }
  };

  const handleDelete = async (postId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/blog/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPosts(posts.filter(post => post._id !== postId));
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Une erreur est survenue lors de la suppression de l\'article');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-6C8D2F"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des Articles</h1>
        <Link 
          href="/dashboard/blog/create" 
          className="flex items-center gap-2 bg-FFDF64 text-6C8D2F font-semibold px-6 py-3 rounded-lg hover:bg-ffb700 hover:text-white transition-all duration-300 shadow-md"
        >
          <PlusIcon className="h-5 w-5" />
          Créer un nouveau blog
        </Link>
      </div>

      {/* Type d'article filter */}
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Type d'article</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === null
                ? 'bg-6C8D2F text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tous les types
          </button>
          <button
            onClick={() => setSelectedType('pilier')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === 'pilier'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
          >
            <BookOpenIcon className="h-4 w-4 inline mr-1" />
            Articles Piliers
          </button>
          <button
            onClick={() => setSelectedType('niche')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === 'niche'
                ? 'bg-green-600 text-white'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            <DocumentDuplicateIcon className="h-4 w-4 inline mr-1" />
            Articles de Niche
          </button>
          <button
            onClick={() => setSelectedType('standard')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedType === 'standard'
                ? 'bg-gray-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <DocumentTextIcon className="h-4 w-4 inline mr-1" />
            Articles Standards
          </button>
        </div>
      </div>

      {/* Tags filter */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === null
                ? 'bg-6C8D2F text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tous les tags
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === tag
                  ? 'bg-6C8D2F text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            {post.mainImage && (
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                {/* Affichage de l'image avec une balise img standard */}
                <img 
                  src={(() => {
                    // Fonction pour construire le chemin de l'image avec plus de robustesse
                    const imagePath = post.mainImage || '';
                    console.log('Image originale:', imagePath);
                    
                    // Cas 1: URL complète (http/https)
                    if (imagePath.includes('http')) {
                      console.log('Cas 1 - URL complète:', imagePath);
                      return imagePath;
                    }
                    
                    // Cas 2: Chemin absolu commençant par /
                    if (imagePath.startsWith('/')) {
                      // Si c'est déjà /uploads/blog, on ne modifie pas
                      if (imagePath.includes('/uploads/blog/')) {
                        console.log('Cas 2a - Chemin absolu uploads/blog:', imagePath);
                        return imagePath;
                      }
                      // Sinon on ajoute le préfixe si nécessaire
                      console.log('Cas 2b - Autre chemin absolu:', imagePath);
                      return imagePath;
                    }
                    
                    // Cas 3: Nom de fichier simple ou chemin relatif
                    // On vérifie si le chemin contient déjà 'uploads/blog'
                    if (imagePath.includes('uploads/blog/')) {
                      console.log('Cas 3a - Chemin relatif avec uploads/blog:', `/${imagePath}`);
                      return `/${imagePath}`;
                    }
                    
                    // Cas par défaut: on ajoute le préfixe /uploads/blog/
                    const finalPath = `/uploads/blog/${imagePath}`;
                    console.log('Cas 3b - Nom de fichier simple:', finalPath);
                    return finalPath;
                  })()}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error('Erreur de chargement d\'image:', post.mainImage, 'URL complète:', target.src);
                    // Aucune image de fallback pour le moment
                  }}
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                {getArticleTypeBadge(post.articleType)}
              </div>
              
              <div 
                className="text-gray-600 text-sm mb-4 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
              
              {/* Afficher la relation avec l'article pilier si c'est un article de niche */}
              {post.articleType === 'niche' && post.pilierParent && (
                <div className="mb-3 p-2 bg-blue-50 rounded-md">
                  <div className="flex items-center text-sm text-blue-700">
                    <LinkIcon className="h-4 w-4 mr-1" />
                    <span className="font-medium">Article pilier parent:</span>
                    <span className="ml-1 truncate">{getPilierName(post.pilierParent)}</span>
                  </div>
                </div>
              )}
              
              {/* Afficher le nombre d'articles de niche liés si c'est un article pilier */}
              {post.articleType === 'pilier' && post.articlesNicheLies && post.articlesNicheLies.length > 0 && (
                <div className="mb-3 p-2 bg-green-50 rounded-md">
                  <div className="flex items-center text-sm text-green-700">
                    <DocumentDuplicateIcon className="h-4 w-4 mr-1" />
                    <span className="font-medium">{post.articlesNicheLies.length} article{post.articlesNicheLies.length > 1 ? 's' : ''} de niche lié{post.articlesNicheLies.length > 1 ? 's' : ''}</span>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <TagIcon className="h-4 w-4" />
                  <span>{post.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>
                    {post.createdAt 
                      ? new Date(post.createdAt).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })
                      : 'Date inconnue'}
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Link
                  href={`/dashboard/blog/edit/${post._id}`}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  <PencilIcon className="h-4 w-4" />
                  Modifier
                </Link>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <TrashIcon className="h-4 w-4" />
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
