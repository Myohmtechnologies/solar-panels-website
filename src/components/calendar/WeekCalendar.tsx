'use client';

import React, { useState, useEffect } from 'react';
import { format, addDays, startOfWeek, isToday, isSameDay, parseISO, getHours } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Appointment {
  _id: string;
  date: string;
  clientName: string;
  location: string;
  status: string;
  duration?: number; // Durée en heures
}

interface CalendarSlot {
  date: Date;
  hour: number;
  appointments: any[];
  isAvailable: boolean;
}

interface SelectedSlot {
  date: Date;
  hour: number;
  isAvailable: boolean;
  appointments?: any[];
}

interface WeekCalendarProps {
  onSlotSelect: (slot: SelectedSlot) => void;
  commercialId?: string;
  className?: string;
}

const WeekCalendar: React.FC<WeekCalendarProps> = ({
  onSlotSelect,
  commercialId,
  className = '',
}) => {
  const [startDate, setStartDate] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [calendarSlots, setCalendarSlots] = useState<CalendarSlot[][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);

  // Heures de travail (8h à 17h)
  const workHours = Array.from({ length: 10 }, (_, i) => i + 8);

  // Charger les disponibilités pour la semaine en cours
  useEffect(() => {
    const fetchAvailability = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Calculer la date de fin (7 jours après la date de début)
        const endDate = addDays(startDate, 6);
        
        // Préparer les paramètres pour l'API
        const params = new URLSearchParams({
          startDate: format(startDate, 'yyyy-MM-dd'),
          endDate: format(endDate, 'yyyy-MM-dd'),
          ...(commercialId ? { commercialId } : {}),
        });

        // Pour la démonstration, nous allons simuler des données de rendez-vous
        // Dans un environnement réel, vous feriez un appel API
        // const response = await fetch(`/api/calendar/availability?${params.toString()}`);
        // const data = await response.json();
        
        // Simuler un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Données simulées pour la démonstration
        const data = {
          success: true,
          appointments: [
            {
              _id: '1',
              date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1, 11, 0, 0).toISOString(), // Mardi 11h
              clientName: 'Martin Dupont',
              location: 'Marseille',
              status: 'confirmed',
              duration: 3 // Rendez-vous de 3 heures (11h-14h)
            },
            {
              _id: '2',
              date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 2, 16, 0, 0).toISOString(), // Mercredi 16h
              clientName: 'Sophie Laurent',
              location: 'Aix-en-Provence',
              status: 'confirmed',
              duration: 2 // Rendez-vous de 2 heures (16h-18h)
            },
            {
              _id: '3',
              date: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 3, 9, 0, 0).toISOString(), // Jeudi 9h
              clientName: 'Jean Petit',
              location: 'Nice',
              status: 'confirmed',
              duration: 4 // Rendez-vous de 4 heures (9h-13h)
            }
          ]
        };
        
        // Préparer les données du calendrier
        const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));
        const slots: CalendarSlot[][] = [];
        const appointments: Appointment[] = data.appointments || [];

        // Pour chaque heure de travail
        for (const hour of workHours) {
          const hourSlots: CalendarSlot[] = [];
          
          // Pour chaque jour de la semaine
          for (const day of days) {
            const currentDate = new Date(day);
            currentDate.setHours(hour, 0, 0, 0);
            
            // Trouver les rendez-vous pour ce créneau
            const appointmentsForSlot = appointments.filter((appointment) => {
              const appointmentDate = new Date(appointment.date);
              const appointmentStartHour = getHours(appointmentDate);
              const appointmentEndHour = appointmentStartHour + (appointment.duration || 3); // Durée par défaut de 3h si non spécifiée
              
              return (
                isSameDay(appointmentDate, currentDate) &&
                hour >= appointmentStartHour && 
                hour < appointmentEndHour
              );
            });
            
            // Vérifier si ce créneau est disponible
            const isAvailable = appointmentsForSlot.length === 0;
            
            hourSlots.push({
              date: currentDate,
              hour,
              appointments: appointmentsForSlot,
              isAvailable: isAvailable
            });
          }
          
          slots.push(hourSlots);
        }
        
        setCalendarSlots(slots);
      } catch (error) {
        setError('Erreur de connexion lors de la récupération des disponibilités');
        console.error('Erreur lors de la récupération des disponibilités:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvailability();
  }, [startDate, commercialId]);

  // Naviguer vers la semaine précédente
  const goToPreviousWeek = () => {
    setStartDate(prevDate => addDays(prevDate, -7));
  };

  // Naviguer vers la semaine suivante
  const goToNextWeek = () => {
    setStartDate(prevDate => addDays(prevDate, 7));
  };

  // Aller à aujourd'hui
  const goToToday = () => {
    setStartDate(startOfWeek(new Date(), { weekStartsOn: 1 }));
  };

  // Fonction pour gérer la sélection d'un créneau
  const handleSlotSelect = (slot: SelectedSlot) => {
    setSelectedSlot(slot);
    onSlotSelect(slot);
  };

  // Formater l'heure pour l'affichage
  const formatHour = (hour: number) => {
    return `${hour}:00`;
  };
  
  // Fonction pour vérifier si un créneau est le premier d'un rendez-vous
  const checkIfFirstHourOfAppointment = (appointment: Appointment, hour: number) => {
    if (!appointment) return false;
    return getHours(new Date(appointment.date)) === hour;
  };

  return (
    <div className={`week-calendar ${className}`}>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Erreur: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      ) : (
        <div>
          {/* Navigation et contrôles */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex space-x-2">
              <button
                onClick={goToPreviousWeek}
                className="px-2 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100 flex items-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToToday}
                className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-sm"
              >
                Aujourd'hui
              </button>
              <button
                onClick={goToNextWeek}
                className="px-2 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100 flex items-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <span className="font-medium text-gray-800 text-sm">
              {format(startDate, 'd')} - {format(addDays(startDate, 6), 'd MMM yyyy', { locale: fr })}
            </span>
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button className="px-2 py-1 text-sm bg-white hover:bg-gray-100">Mois</button>
              <button className="px-2 py-1 text-sm bg-green-600 text-white">Semaine</button>
              <button className="px-2 py-1 text-sm bg-white hover:bg-gray-100">Jour</button>
            </div>
          </div>
          


          {/* Calendrier */}
          <div className="border border-gray-200 rounded-md overflow-hidden">
            {/* En-têtes des jours */}
            <div className="grid grid-cols-8 border-b border-gray-200">
              <div className="p-2 text-center font-medium text-gray-500 border-r border-gray-200"></div>
              {Array.from({ length: 7 }, (_, i) => {
                const day = addDays(startDate, i);
                const isCurrentDay = isToday(day);
                const dayName = format(day, 'EEE', { locale: fr }).toUpperCase();
                const dayNumber = format(day, 'dd/MM');
                const isHighlighted = i === 3; // Mettre en évidence le jeudi comme dans l'image
                
                return (
                  <div 
                    key={i} 
                    className={`p-1 text-center border-b ${isCurrentDay ? 'bg-blue-50' : ''} ${isHighlighted ? 'bg-blue-100' : ''}`}
                  >
                    <div className="text-xs font-medium">{dayName}.</div>
                    <div className={`text-sm ${isCurrentDay ? 'font-bold text-blue-600' : ''}`}>
                      {dayNumber}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Grille des heures et créneaux */}
            <div>
              {calendarSlots.map((hourRow, hourIndex) => (
                <div key={hourIndex} className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
                  {/* Colonne des heures */}
                  <div className="p-2 text-center font-medium text-gray-500 border-r border-gray-200 flex items-center justify-center">
                    {formatHour(hourRow[0].hour)}
                  </div>
                  
                  {/* Créneaux pour chaque jour */}
                  {hourRow.map((slot, dayIndex) => {
                    const day = slot.date;
                    const appointmentsForSlot = slot.appointments as Appointment[];
                    const isBusy = appointmentsForSlot.length > 0;
                    const appointment = isBusy ? appointmentsForSlot[0] : null;
                    const isSelected = selectedSlot && 
                      isSameDay(selectedSlot.date, day) && 
                      selectedSlot.hour === slot.hour;
                    
                    // Vérifier si c'est la première heure d'un rendez-vous
                    const isFirstHourOfAppointment = appointment && checkIfFirstHourOfAppointment(appointment, slot.hour);
                    
                    return (
                      <div 
                        key={dayIndex} 
                        className={`
                          p-1 border-r border-gray-200 relative cursor-pointer
                          ${isSelected ? 'bg-blue-100' : ''}
                          ${isBusy ? 'bg-green-100' : 'hover:bg-gray-50'}
                        `}
                        onClick={() => {
                          if (!isBusy) {
                            handleSlotSelect({
                              date: day,
                              hour: slot.hour,
                              isAvailable: !isBusy
                            });
                          }
                        }}
                      >
                        {isBusy && appointment && isFirstHourOfAppointment && (
                          <div className="text-xs p-1 bg-green-100 rounded shadow-sm">
                            <div className="font-medium truncate">{appointment.clientName}</div>
                            <div className="text-green-800 truncate">{appointment.location}</div>
                            <div className="text-green-700 text-xs">
                              {getHours(new Date(appointment.date))}:00 - {getHours(new Date(appointment.date)) + (appointment.duration || 3)}:00
                            </div>
                          </div>
                        )}
                        {isBusy && appointment && !isFirstHourOfAppointment && (
                          <div className="w-full h-full bg-green-100 opacity-70 flex items-center justify-center">
                            <div className="w-1/2 h-1 bg-green-300 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
          {/* Information sur le créneau sélectionné */}
          {selectedSlot && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">
                    {selectedSlot && (
                      <>
                        {format(selectedSlot.date, 'EEEE d MMMM', { locale: fr })}, 
                        {`${selectedSlot.hour}:00 - ${selectedSlot.hour + 3}:00`}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeekCalendar;
