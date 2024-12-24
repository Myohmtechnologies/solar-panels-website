import { useState } from 'react';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

interface UseApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  makeRequest: (url: string, options?: RequestInit) => Promise<void>;
}

export function useApi<T>(): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const makeRequest = async (url: string, options?: RequestInit) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      const result: ApiResponse<T> = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue');
      }

      setData(result.data as T);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, makeRequest };
}
