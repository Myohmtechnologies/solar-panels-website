'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpenIcon, DocumentDuplicateIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface Article {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  slug: string;
  articleType?: 'pilier' | 'niche' | 'standard';
}

interface RelatedArticlesProps {
  currentArticleId: string | any; // Accepte ObjectId de MongoDB
  articleType?: 'pilier' | 'niche' | 'standard';
  pilierParentId?: string | any; // Accepte ObjectId de MongoDB
  articlesNicheLies?: string[] | any[]; // Accepte ObjectId[] de MongoDB
}

export default function RelatedArticles({
  currentArticleId,
  articleType,
  pilierParentId,
  articlesNicheLies
}: RelatedArticlesProps) {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [pilierArticle, setPilierArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      setLoading(true);
      try {
        if (articleType === 'pilier' && articlesNicheLies && articlesNicheLies.length > 0) {
          // Pour un article pilier, récupérer tous ses articles de niche
          const response = await fetch(`/api/blog?type=niche&pilierParent=${currentArticleId}`);
          if (response.ok) {
            const data = await response.json();
            setRelatedArticles(data.blogs || []);
          }
        } else if (articleType === 'niche' && pilierParentId) {
          // Pour un article de niche, récupérer l'article pilier parent et 3 autres articles de niche liés au même pilier
          // 1. Récupérer l'article pilier parent
          // Nous devons d'abord obtenir le slug de l'article pilier
          const pilierInfoResponse = await fetch(`/api/blog?type=pilier&_id=${pilierParentId}`);
          if (pilierInfoResponse.ok) {
            const pilierInfoData = await pilierInfoResponse.json();
            if (pilierInfoData.blogs && pilierInfoData.blogs.length > 0) {
              const pilierSlug = pilierInfoData.blogs[0].slug;
              // Maintenant nous pouvons récupérer les détails complets avec le slug
              const pilierResponse = await fetch(`/api/blog/${pilierSlug}`);
              if (pilierResponse.ok) {
                const pilierData = await pilierResponse.json();
                setPilierArticle(pilierData);
              }
            }
          }
          
          // 2. Récupérer d'autres articles de niche liés au même pilier (excluant l'article courant)
          const nichesResponse = await fetch(`/api/blog?type=niche&pilierParent=${pilierParentId}`);
          if (nichesResponse.ok) {
            const nichesData = await nichesResponse.json();
            // Filtrer pour exclure l'article courant et limiter à 3 articles
            const otherNiches = nichesData.blogs.filter((article: Article) => 
              article._id !== currentArticleId
            ).slice(0, 3);
            setRelatedArticles(otherNiches);
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement des articles liés:', error);
      } finally {
        setLoading(false);
      }
    };

    if ((articleType === 'pilier' && articlesNicheLies) || 
        (articleType === 'niche' && pilierParentId)) {
      fetchRelatedArticles();
    } else {
      setLoading(false);
    }
  }, [currentArticleId, articleType, pilierParentId, articlesNicheLies]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Si aucun article lié n'est trouvé et qu'il n'y a pas d'article pilier, ne rien afficher
  if (relatedArticles.length === 0 && !pilierArticle) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 border-t border-gray-200 mt-8">
      {articleType === 'pilier' && (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <DocumentDuplicateIcon className="h-6 w-6 mr-2 text-6C8D2F" />
            Articles de niche associés
          </h2>
          
          {relatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link 
                  href={`/blog/${article.slug}`} 
                  key={article._id}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {article.mainImage && (
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={article.mainImage} 
                        alt={article.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                      <DocumentDuplicateIcon className="h-3 w-3 mr-1" />
                      Article de niche
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-6C8D2F transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.description.replace(/<[^>]*>/g, '')}
                    </p>
                    <div className="mt-3 flex items-center text-6C8D2F font-medium">
                      <span>Lire l'article</span>
                      <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">Aucun article de niche associé pour le moment.</p>
          )}
        </>
      )}

      {articleType === 'niche' && (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <BookOpenIcon className="h-6 w-6 mr-2 text-blue-600" />
              Article pilier parent
            </h2>
            
            {pilierArticle ? (
              <Link 
                href={`/blog/${pilierArticle.slug}`}
                className="group flex flex-col md:flex-row bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors duration-300"
              >
                {pilierArticle.mainImage && (
                  <div className="relative h-48 md:w-1/3 bg-gray-100 overflow-hidden rounded-lg">
                    <img 
                      src={pilierArticle.mainImage} 
                      alt={pilierArticle.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
                <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                    <BookOpenIcon className="h-3 w-3 mr-1" />
                    Article pilier
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {pilierArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {pilierArticle.description.replace(/<[^>]*>/g, '')}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Lire l'article complet</span>
                    <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ) : (
              <p className="text-gray-600 italic">Article pilier parent non disponible.</p>
            )}
          </div>

          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DocumentDuplicateIcon className="h-6 w-6 mr-2 text-green-600" />
                Autres articles de niche associés
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Link 
                    href={`/blog/${article.slug}`} 
                    key={article._id}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {article.mainImage && (
                      <div className="relative h-40 bg-gray-100 overflow-hidden">
                        <img 
                          src={article.mainImage} 
                          alt={article.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                        <DocumentDuplicateIcon className="h-3 w-3 mr-1" />
                        Article de niche
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {article.description.replace(/<[^>]*>/g, '')}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
