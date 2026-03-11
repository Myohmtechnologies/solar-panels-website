'use client';

import React, { useState, useEffect } from 'react';
import { format, addDays, startOfWeek, parseISO, isToday } from 'date-fns';
import { fr } from 'date-fns/locale';

interface AppointmentSlotGridProps {
  commercialId: string;
  commercialName: string;
  onSlotSelect: (slotInfo: { date: string; time: string; duration: number }) => void;
  className?: string;
}

interface Appointment {
  id: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
  city?: string;
  postalCode?: string;
  address?: string;
  client?: {
    name: string;
    phone?: string;
    email?: string;
  };
}

const DAYS_OF_WEEK = ['LUN.', 'MAR.', 'MER.', 'JEU.', 'VEN.', 'SAM.', 'DIM.'];
const HOURS = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

const AppointmentSlotGrid = ({
  commercialId,
  commercialName,
  onSlotSelect,
  className = '',
}: AppointmentSlotGridProps) => {
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number>(3);
  const [viewMode, setViewMode] = useState<'week' | 'month' | 'day'>('week');

  // Générer les dates de la semaine
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  // Charger les rendez-vous
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!commercialId) return;
      
      setIsLoading(true);
      try {
        const startDate = format(currentWeekStart, 'yyyy-MM-dd');
        const endDate = format(addDays(currentWeekStart, 6), 'yyyy-MM-dd');
        
        // Appel à l'API pour récupérer les rendez-vous du commercial
        const response = await fetch(`/api/appointments?commercialId=${commercialId}&startDate=${startDate}&endDate=${endDate}`);
        const data = await response.json();
        
        if (data.success) {
          setAppointments(data.appointments);
          console.log('Rendez-vous chargés:', data.appointments);
        } else {
          console.error('Erreur lors du chargement des rendez-vous:', data.error);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, [commercialId, currentWeekStart]);

  // Naviguer à la semaine précédente
  const goToPreviousWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, -7));
  };

  // Naviguer à la semaine suivante
  const goToNextWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, 7));
  };

  // Naviguer à la semaine actuelle
  const goToCurrentWeek = () => {
    setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
  };

  // Vérifier si un créneau est occupé
  const isSlotOccupied = (date: Date, hour: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const timeHour = parseInt(hour.split(':')[0]);
    
    return appointments.some(appointment => {
      try {
        const appointmentDate = format(parseISO(appointment.start), 'yyyy-MM-dd');
        const appointmentStartHour = parseISO(appointment.start).getHours();
        const appointmentEndHour = parseISO(appointment.end).getHours();
        
        return appointmentDate === dateStr && 
               timeHour >= appointmentStartHour && 
               timeHour < appointmentEndHour;
      } catch (error) {
        console.error('Erreur lors de la vérification du créneau:', error, appointment);
        return false;
      }
    });
  };

  // Obtenir l'indice de position du rendez-vous dans la journée (pour l'affichage visuel)
  const getAppointmentPosition = (date: Date, hour: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const timeHour = parseInt(hour.split(':')[0]);
    
    const appointment = appointments.find(appointment => {
      try {
        const appointmentDate = format(parseISO(appointment.start), 'yyyy-MM-dd');
        const appointmentStartHour = parseISO(appointment.start).getHours();
        const appointmentEndHour = parseISO(appointment.end).getHours();
        
        return appointmentDate === dateStr && 
               timeHour >= appointmentStartHour && 
               timeHour < appointmentEndHour;
      } catch (error) {
        return false;
      }
    });
    
    if (!appointment) return null;
    
    try {
      const appointmentStartHour = parseISO(appointment.start).getHours();
      const appointmentEndHour = parseISO(appointment.end).getHours();
      const duration = appointmentEndHour - appointmentStartHour;
      
      // Si c'est la première heure du rendez-vous
      if (timeHour === appointmentStartHour) {
        return { isStart: true, duration, appointment };
      }
      
      // Si c'est une heure intermédiaire du rendez-vous
      return { isStart: false, duration, appointment };
    } catch (error) {
      console.error('Erreur lors du calcul de la position du rendez-vous:', error);
      return null;
    }
  };

  // Obtenir les détails d'un rendez-vous pour un créneau spécifique
  const getAppointmentDetails = (date: Date, hour: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const timeHour = parseInt(hour.split(':')[0]);
    
    return appointments.find(appointment => {
      try {
        const appointmentDate = format(parseISO(appointment.start), 'yyyy-MM-dd');
        const appointmentStartHour = parseISO(appointment.start).getHours();
        const appointmentEndHour = parseISO(appointment.end).getHours();
        
        return appointmentDate === dateStr && 
               timeHour >= appointmentStartHour && 
               timeHour < appointmentEndHour;
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du rendez-vous:', error);
        return false;
      }
    });
  };

  // Gérer la sélection d'un créneau
  const handleSlotSelect = (date: Date, time: string) => {
    if (!isSlotOccupied(date, time)) {
      setSelectedDate(date);
      setSelectedTime(time);
      
      const formattedDate = format(date, 'yyyy-MM-dd');
      const [hours] = time.split(':');
      const formattedTime = `${hours}:00`;
      
      onSlotSelect({
        date: formattedDate,
        time: formattedTime,
        duration: selectedDuration
      });
    }
  };

  return (
    <div className={`appointment-slot-grid ${className}`}>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-semibold text-[#0B6291] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
            {commercialName ? `Planning de ${commercialName}` : 'Sélectionnez un commercial'}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={goToPreviousWeek}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={goToCurrentWeek}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-sm"
            >
              Aujourd'hui
            </button>
            <button
              onClick={goToNextWeek}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-2">
          {format(currentWeekStart, 'd')} - {format(addDays(currentWeekStart, 6), 'd MMM yyyy', { locale: fr })}
        </div>
        
        <div className="flex space-x-2 mb-2">
          <button
            onClick={() => setViewMode('month')}
            className={`px-3 py-1 rounded-lg text-sm ${viewMode === 'month' ? 'bg-[#0B6291] text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Mois
          </button>
          <button
            onClick={() => setViewMode('week')}
            className={`px-3 py-1 rounded-lg text-sm ${viewMode === 'week' ? 'bg-[#0B6291] text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Semaine
          </button>
          <button
            onClick={() => setViewMode('day')}
            className={`px-3 py-1 rounded-lg text-sm ${viewMode === 'day' ? 'bg-[#0B6291] text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Jour
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B6291]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-[auto_repeat(7,1fr)] border rounded-lg overflow-hidden">
          {/* En-têtes des jours */}
          <div className="bg-gray-50 border-b border-r p-2"></div>
          {weekDates.map((date, index) => {
            const isCurrentDay = isToday(date);
            const dayNumber = format(date, 'dd/MM');
            
            return (
              <div 
                key={index} 
                className={`text-center p-2 border-b ${index < 6 ? 'border-r' : ''} ${isCurrentDay ? 'bg-blue-50 font-semibold' : 'bg-gray-50'}`}
              >
                <div className="font-medium">{DAYS_OF_WEEK[index]}</div>
                <div className={`text-sm ${isCurrentDay ? 'text-blue-600' : 'text-gray-500'}`}>{dayNumber}</div>
              </div>
            );
          })}
          
          {/* Grille des heures et créneaux */}
          {HOURS.map((hour, hourIndex) => (
            <React.Fragment key={hour}>
              <div className="text-sm font-medium text-gray-500 p-2 border-r border-gray-200">
                {hour}
              </div>
              {weekDates.map((date, dateIndex) => {
                const isOccupied = isSlotOccupied(date, hour);
                const isSelected = selectedDate && 
                                  format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd') && 
                                  selectedTime === hour;
                
                // Trouver le rendez-vous pour ce créneau s'il existe
                const appointment = appointments.find(appt => {
                  try {
                    const apptDate = format(parseISO(appt.start), 'yyyy-MM-dd');
                    const apptHour = parseISO(appt.start).getHours();
                    return apptDate === format(date, 'yyyy-MM-dd') && apptHour === parseInt(hour.split(':')[0]);
                  } catch (error) {
                    return false;
                  }
                });
                
                return (
                  <div 
                    key={`${format(date, 'yyyy-MM-dd')}-${hour}`}
                    className={`
                      p-2 border border-gray-100 rounded-md cursor-pointer transition-all
                      ${isOccupied ? 'bg-green-100 text-green-800 cursor-not-allowed' : 'hover:bg-blue-50'}
                      ${isSelected ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
                      ${isToday(date) ? 'ring-2 ring-yellow-400' : ''}
                    `}
                    onClick={() => !isOccupied && handleSlotSelect(date, hour)}
                    title={appointment ? `${appointment.title} - ${appointment.location || ''}` : ''}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      {isOccupied ? (
                        (() => {
                          const position = getAppointmentPosition(date, hour);
                          if (!position) return <div className="text-xs">Occupé</div>;
                          
                          // Si c'est le début du rendez-vous, afficher les informations du client
                          if (position.isStart) {
                            // Extraire les informations importantes
                            const appointment = position.appointment;
                            const clientName = appointment.title;
                            const city = appointment.city || '';
                            const postalCode = appointment.postalCode || '';
                            
                            return (
                              <div className="text-xs font-medium overflow-hidden text-ellipsis p-1 bg-green-50 rounded border border-green-100">
                                <div className="font-bold text-green-800">{clientName}</div>
                                <div className="text-[10px] text-green-700">
                                  {city && postalCode ? (
                                    <span className="block truncate font-medium">{postalCode} {city}</span>
                                  ) : null}
                                  <span className="bg-green-200 text-green-800 px-1 rounded-sm">{position.duration}h</span>
                                </div>
                              </div>
                            );
                          }
                          
                          // Si c'est une heure intermédiaire, afficher une indication visuelle
                          return (
                            <div className="h-full w-full flex items-center justify-center bg-green-50 border border-green-100 rounded">
                              <div className="text-xs text-green-700">&#8226;&#8226;&#8226;</div>
                            </div>
                          );
                        })()
                      ) : (
                        <span className="text-xs">&nbsp;</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      )}
      
      {selectedDate && selectedTime && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
          <div className="flex items-center space-x-2 text-blue-700 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Rendez-vous sélectionné</span>
          </div>
          <div className="text-sm text-blue-800 bg-white p-2 rounded border border-blue-100">
            <div className="font-semibold">{format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}</div>
            <div>Heure: <span className="font-medium">{selectedTime}</span></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentSlotGrid;