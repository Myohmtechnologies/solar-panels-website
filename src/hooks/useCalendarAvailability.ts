'use client';

import { useState } from 'react';

interface AvailabilitySlot {
  start: string;
  end: string;
  title?: string;
}

interface UseCalendarAvailabilityProps {
  commercialId?: string;
}

interface UseCalendarAvailabilityReturn {
  availableSlots: AvailabilitySlot[];
  busySlots: AvailabilitySlot[];
  selectedSlot: AvailabilitySlot | null;
  isLoading: boolean;
  error: string | null;
  fetchAvailability: (startDate: string, endDate: string) => Promise<void>;
  checkSlotAvailability: (startDateTime: string, endDateTime: string) => Promise<boolean>;
  selectSlot: (slot: AvailabilitySlot) => void;
  clearSelectedSlot: () => void;
}

export function useCalendarAvailability({ 
  commercialId 
}: UseCalendarAvailabilityProps = {}): UseCalendarAvailabilityReturn {
  const [availableSlots, setAvailableSlots] = useState<AvailabilitySlot[]>([]);
  const [busySlots, setBusySlots] = useState<AvailabilitySlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<AvailabilitySlot | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les disponibilités
  const fetchAvailability = async (startDate: string, endDate: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        startDate,
        endDate,
        ...(commercialId ? { commercialId } : {}),
      });

      const response = await fetch(`/api/calendar/availability?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        setAvailableSlots(data.availableSlots);
        setBusySlots(data.busySlots);
      } else {
        setError(data.error || 'Erreur lors de la récupération des disponibilités');
      }
    } catch (error) {
      setError('Erreur de connexion lors de la récupération des disponibilités');
      console.error('Erreur lors de la récupération des disponibilités:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour vérifier la disponibilité d'un créneau spécifique
  const checkSlotAvailability = async (startDateTime: string, endDateTime: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/calendar/check-availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDateTime,
          endDateTime,
          ...(commercialId ? { commercialId } : {}),
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        return data.isAvailable;
      } else {
        setError(data.error || 'Erreur lors de la vérification de la disponibilité');
        return false;
      }
    } catch (error) {
      setError('Erreur de connexion lors de la vérification de la disponibilité');
      console.error('Erreur lors de la vérification de la disponibilité:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour sélectionner un créneau
  const selectSlot = (slot: AvailabilitySlot) => {
    setSelectedSlot(slot);
  };

  // Fonction pour effacer le créneau sélectionné
  const clearSelectedSlot = () => {
    setSelectedSlot(null);
  };

  return {
    availableSlots,
    busySlots,
    selectedSlot,
    isLoading,
    error,
    fetchAvailability,
    checkSlotAvailability,
    selectSlot,
    clearSelectedSlot,
  };
}
