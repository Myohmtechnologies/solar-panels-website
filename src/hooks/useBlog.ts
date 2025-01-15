import { useState, useCallback } from 'react';
import type { BlogPost } from '@/types';

interface UseBlogReturn {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
  fetchPosts: (page?: number, limit?: number, tag?: string) => Promise<void>;
  createPost: (post: Omit<BlogPost, 'id'>) => Promise<{ id: string; slug: string } | null>;
  updatePost: (slug: string, updates: Partial<BlogPost>) => Promise<boolean>;
  deletePost: (slug: string) => Promise<boolean>;
  getTags: () => Promise<string[]>;
}

export function useBlog(): UseBlogReturn {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pages: 1
  });

  const fetchPosts = useCallback(async (page = 1, limit = 10, tag?: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `/api/blog?page=${page}&limit=${limit}${tag ? `&tag=${tag}` : ''}`
      );
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des articles');
      }

      const data = await response.json();
      setPosts(data.posts);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, []);

  const createPost = useCallback(async (post: Omit<BlogPost, 'id'>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création de l\'article');
      }

      const data = await response.json();
      await fetchPosts(1); // Rafraîchir la liste
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  }, [fetchPosts]);

  const updatePost = useCallback(async (slug: string, updates: Partial<BlogPost>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/blog/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'article');
      }

      await fetchPosts(pagination.page); // Rafraîchir la liste
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchPosts, pagination.page]);

  const deletePost = useCallback(async (slug: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/blog/${slug}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'article');
      }

      await fetchPosts(pagination.page); // Rafraîchir la liste
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchPosts, pagination.page]);

  const getTags = useCallback(async () => {
    try {
      const response = await fetch('/api/blog/tags');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des tags');
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return [];
    }
  }, []);

  return {
    posts,
    loading,
    error,
    pagination,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    getTags,
  };
}
