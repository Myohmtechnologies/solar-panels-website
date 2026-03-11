'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { format, addDays, startOfWeek } from 'date-fns';
import { fr } from 'date-fns/locale';

interface AvailabilityCalendarProps {
  onSlotSelect?: (slotInfo: { start: string; end: string }) => void;
  commercialId?: string;
  initialDate?: Date;
  className?: string;
}

interface CalendarEvent {
  id?: string;
  title: string;
  start: string;
  end: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  extendedProps?: any;
}

const AvailabilityCalendar = ({
  onSlotSelect,
  commercialId,
  initialDate = new Date(),
  className = '',
}: AvailabilityCalendarProps) => {
  const [availableSlots, setAvailableSlots] = useState<CalendarEvent[]>([]);
  const [busySlots, setBusySlots] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentViewDates, setCurrentViewDates] = useState({
    start: format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'),
    end: format(addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 6), 'yyyy-MM-dd'),
  });

  // Fonction pour charger les disponibilités
  const loadAvailability = async (startDate: string, endDate: string) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        startDate,
        endDate,
        ...(commercialId ? { commercialId } : {}),
      });

      const response = await fetch(`/api/calendar/availability?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        // Formater les créneaux disponibles avec une couleur verte
        const formattedAvailableSlots = data.availableSlots.map((slot: any) => ({
          ...slot,
          backgroundColor: '#10b981', // vert
          borderColor: '#10b981',
          textColor: '#ffffff',
          extendedProps: { type: 'available' },
        }));

        // Formater les créneaux occupés avec une couleur rouge
        const formattedBusySlots = data.busySlots.map((slot: any) => ({
          ...slot,
          backgroundColor: '#ef4444', // rouge
          borderColor: '#ef4444',
          textColor: '#ffffff',
          extendedProps: { type: 'busy' },
        }));

        setAvailableSlots(formattedAvailableSlots);
        setBusySlots(formattedBusySlots);
      } else {
        console.error('Erreur lors du chargement des disponibilités:', data.error);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des disponibilités:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les disponibilités initiales
  useEffect(() => {
    loadAvailability(currentViewDates.start, currentViewDates.end);
  }, [currentViewDates, commercialId]);

  // Gérer le changement de vue du calendrier
  const handleDatesSet = (dateInfo: any) => {
    const newStartDate = format(new Date(dateInfo.startStr), 'yyyy-MM-dd');
    const newEndDate = format(new Date(dateInfo.endStr), 'yyyy-MM-dd');

    // Ne recharger que si les dates ont changé
    if (newStartDate !== currentViewDates.start || newEndDate !== currentViewDates.end) {
      setCurrentViewDates({
        start: newStartDate,
        end: newEndDate,
      });
    }
  };

  // Gérer la sélection d'un créneau disponible
  const handleEventClick = (clickInfo: any) => {
    const event = clickInfo.event;
    
    // Ne permettre la sélection que des créneaux disponibles
    if (event.extendedProps.type === 'available' && onSlotSelect) {
      onSlotSelect({
        start: event.startStr,
        end: event.endStr,
      });
    }
  };

  return (
    <div className={`availability-calendar-container ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
      
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        locale={frLocale}
        firstDay={1} // Lundi comme premier jour de la semaine
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        allDaySlot={false}
        events={[...availableSlots, ...busySlots]}
        eventClick={handleEventClick}
        datesSet={handleDatesSet}
        initialDate={initialDate}
        height="auto"
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5], // Lundi au vendredi
          startTime: '09:00',
          endTime: '18:00',
        }}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }}
      />
    </div>
  );
};

export default AvailabilityCalendar;
