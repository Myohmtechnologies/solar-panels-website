import { useState, useCallback } from 'react';
import type { Realisation } from '@/types';

interface RealisationFilter {
  city?: string;
  type?: string;
  year?: number;
}

interface UseRealisationsReturn {
  realisations: Realisation[];
  loading: boolean;
  error: string | null;
  stats: {
    totalRealisations: number;
    cities: string[];
    types: string[];
    yearlyStats: Array<{
      year: number;
      count: number;
      totalPower: number;
    }>;
  };
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
  fetchRealisations: (page?: number, limit?: number, filter?: RealisationFilter) => Promise<void>;
  createRealisation: (realisation: Omit<Realisation, 'id'>) => Promise<{ id: string } | null>;
  updateRealisation: (id: string, updates: Partial<Realisation>) => Promise<boolean>;
  deleteRealisation: (id: string) => Promise<boolean>;
  toggleFeatured: (id: string) => Promise<boolean>;
  fetchStats: () => Promise<void>;
  searchRealisations: (query: string) => Promise<Realisation[]>;
}

export function useRealisations(): UseRealisationsReturn {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalRealisations: 0,
    cities: [] as string[],
    types: [] as string[],
    yearlyStats: [] as Array<{
      year: number;
      count: number;
      totalPower: number;
    }>,
  });
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pages: 1
  });

  const fetchRealisations = useCallback(async (
    page = 1,
    limit = 10,
    filter?: RealisationFilter
  ) => {
    try {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(filter?.city && { city: filter.city }),
        ...(filter?.type && { type: filter.type }),
        ...(filter?.year && { year: filter.year.toString() }),
      });

      const response = await fetch(`/api/realisations?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des réalisations');
      }

      const data = await response.json();
      setRealisations(data.realisations);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, []);

  const createRealisation = useCallback(async (realisation: Omit<Realisation, 'id'>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/realisations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(realisation),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création de la réalisation');
      }

      const data = await response.json();
      await fetchRealisations(1); // Rafraîchir la liste
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  }, [fetchRealisations]);

  const updateRealisation = useCallback(async (id: string, updates: Partial<Realisation>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/realisations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de la réalisation');
      }

      await fetchRealisations(pagination.page); // Rafraîchir la liste
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchRealisations, pagination.page]);

  const deleteRealisation = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/realisations/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de la réalisation');
      }

      await fetchRealisations(pagination.page); // Rafraîchir la liste
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchRealisations, pagination.page]);

  const toggleFeatured = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/realisations/${id}/featured`, {
        method: 'PUT',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du statut featured');
      }

      await fetchRealisations(pagination.page); // Rafraîchir la liste
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchRealisations, pagination.page]);

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/realisations/stats');
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des statistiques');
      }

      const data = await response.json();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, []);

  const searchRealisations = useCallback(async (query: string): Promise<Realisation[]> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/realisations/search?q=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la recherche');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    realisations,
    loading,
    error,
    stats,
    pagination,
    fetchRealisations,
    createRealisation,
    updateRealisation,
    deleteRealisation,
    toggleFeatured,
    fetchStats,
    searchRealisations,
  };
}
