import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

// Exemple de composant pour montrer comment les rendez-vous s'affichent sur toute leur durée
const CalendarExample: React.FC = () => {
  // Date actuelle pour l'exemple
  const currentDate = new Date(2025, 3, 10); // 10 avril 2025
  
  // Jours de la semaine
  const days = [
    { name: 'LUN.', date: '07/04' },
    { name: 'MAR.', date: '08/04' },
    { name: 'MER.', date: '09/04' },
    { name: 'JEU.', date: '10/04', isHighlighted: true, isCurrent: true },
    { name: 'VEN.', date: '11/04' },
    { name: 'SAM.', date: '12/04' },
    { name: 'DIM.', date: '13/04' }
  ];
  
  // Heures de travail
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  
  // Exemples de rendez-vous
  const appointments = [
    {
      id: '1',
      day: 1, // Mardi
      startHour: 11,
      duration: 3,
      clientName: 'Martin Dupont',
      location: 'Marseille'
    },
    {
      id: '2',
      day: 2, // Mercredi
      startHour: 16,
      duration: 2,
      clientName: 'Sophie Laurent',
      location: 'Aix-en-Provence'
    },
    {
      id: '3',
      day: 3, // Jeudi
      startHour: 9,
      duration: 4,
      clientName: 'Jean Petit',
      location: 'Nice'
    }
  ];
  
  // Vérifier si un créneau est occupé par un rendez-vous
  const getAppointmentForSlot = (dayIndex: number, hour: number) => {
    return appointments.find(appointment => 
      appointment.day === dayIndex && 
      hour >= appointment.startHour && 
      hour < appointment.startHour + appointment.duration
    );
  };
  
  // Vérifier si c'est la première heure d'un rendez-vous
  const isFirstHourOfAppointment = (appointment: any, hour: number) => {
    return appointment && appointment.startHour === hour;
  };
  
  return (
    <div className="calendar-example border border-gray-200 rounded-md overflow-hidden">
      <div className="p-4 bg-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-sm">
              Aujourd'hui
            </button>
            <button className="px-2 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <span className="font-medium text-gray-800 text-sm">
            7 - 13 avr. 2025
          </span>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button className="px-2 py-1 text-sm bg-white hover:bg-gray-100">Mois</button>
            <button className="px-2 py-1 text-sm bg-green-600 text-white">Semaine</button>
            <button className="px-2 py-1 text-sm bg-white hover:bg-gray-100">Jour</button>
          </div>
        </div>
        
        <div className="calendar-grid border border-gray-200 rounded-md overflow-hidden">
          {/* En-têtes des jours */}
          <div className="grid grid-cols-8 border-b border-gray-200">
            <div className="p-2 text-center font-medium text-gray-500 border-r border-gray-200"></div>
            {days.map((day, index) => (
              <div 
                key={index} 
                className={`p-1 text-center border-b ${day.isHighlighted ? 'bg-blue-100' : ''}`}
              >
                <div className="text-xs font-medium">{day.name}</div>
                <div className={`text-sm ${day.isCurrent ? 'font-bold text-blue-600' : ''}`}>
                  {day.date}
                </div>
              </div>
            ))}
          </div>
          
          {/* Grille des heures et créneaux */}
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-8 border-b border-gray-200 min-h-[40px]">
              {/* Colonne des heures */}
              <div className="p-2 text-center font-medium text-gray-500 border-r border-gray-200 flex items-center justify-center">
                {hour}:00
              </div>
              
              {/* Créneaux pour chaque jour */}
              {days.map((day, dayIndex) => {
                const appointment = getAppointmentForSlot(dayIndex, hour);
                const isBusy = !!appointment;
                const isFirstHour = isFirstHourOfAppointment(appointment, hour);
                
                return (
                  <div 
                    key={dayIndex} 
                    className={`
                      p-1 border-r border-gray-200 relative cursor-pointer
                      ${day.isHighlighted ? 'bg-blue-50' : ''}
                      ${isBusy ? 'bg-green-100' : 'hover:bg-gray-50'}
                    `}
                  >
                    {isBusy && isFirstHour && (
                      <div className="text-xs p-1 bg-green-100 rounded shadow-sm">
                        <div className="font-medium truncate">{appointment.clientName}</div>
                        <div className="text-green-800 truncate">{appointment.location}</div>
                        <div className="text-green-700 text-xs">
                          {appointment.startHour}:00 - {appointment.startHour + appointment.duration}:00
                        </div>
                      </div>
                    )}
                    {isBusy && !isFirstHour && (
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
      
      {/* Informations sur le rendez-vous sélectionné */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="text-sm font-medium text-blue-700">
            Rendez-vous sélectionné: Jeudi 10 avril 2025, 9:00 - 13:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarExample;
