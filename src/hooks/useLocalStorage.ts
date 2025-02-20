import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // État pour stocker la valeur
  // Passer la fonction d'initialisation à useState pour que la logique ne s'exécute qu'une fois
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Vérifier si window est défini (côté client)
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        // Parser le JSON stocké ou retourner initialValue
        return item ? JSON.parse(item) : initialValue;
      }
      return initialValue;
    } catch (error) {
      // En cas d'erreur, retourner initialValue
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Retourner une version wrappée de la fonction useState's setter
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permettre à la valeur d'être une fonction pour avoir la même API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Sauvegarder l'état
      setStoredValue(valueToStore);
      // Sauvegarder dans localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Une erreur plus descriptive pour le débogage
      console.error('Error saving to localStorage:', error);
    }
  };

  // Écouter les changements dans d'autres onglets/fenêtres
  useEffect(() => {
    function handleStorageChange(event: StorageEvent) {
      if (event.key === key && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, [key]);

  return [storedValue, setValue] as const;
}
