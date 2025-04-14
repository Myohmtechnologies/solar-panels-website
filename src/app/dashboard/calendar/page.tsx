'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface Appointment {
  _id: string;
  title: string;
  start: string;
  end: string;
  commercialId: string;
  commercialName: string;
  leadId: string;
  leadName: string;
  address: string;
  status: string;
  color?: string;
}

export default function CalendarPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchAppointments() {
      try {
        setLoading(true);
        
        // Calculer les dates de début et de fin pour le mois en cours
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        
        // Formater les dates au format YYYY-MM-DD
        const startDateStr = startDate.toISOString().split('T')[0];
        const endDateStr = endDate.toISOString().split('T')[0];
        
        // Construire l'URL avec les paramètres requis
        const url = `/api/appointments?startDate=${startDateStr}&endDate=${endDateStr}`;
        
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des rendez-vous');
        }

        const data = await response.json();
        
        if (data.success) {
          // Ajouter une couleur différente pour chaque commercial
          const commercialColors: Record<string, string> = {};
          const colors = [
            '#4285F4', // Bleu Google
            '#EA4335', // Rouge Google
            '#FBBC05', // Jaune Google
            '#34A853', // Vert Google
            '#8E24AA', // Violet
            '#00ACC1', // Cyan
            '#FB8C00', // Orange
            '#607D8B', // Bleu-gris
          ];
          
          let colorIndex = 0;
          
          const formattedAppointments = data.appointments.map((appointment: Appointment) => {
            if (!commercialColors[appointment.commercialId]) {
              commercialColors[appointment.commercialId] = colors[colorIndex % colors.length];
              colorIndex++;
            }
            
            return {
              ...appointment,
              title: `${appointment.leadName} - ${appointment.commercialName}`,
              color: commercialColors[appointment.commercialId]
            };
          });
          
          setAppointments(formattedAppointments);
        } else {
          setError(data.error || 'Erreur lors de la récupération des rendez-vous');
        }
      } catch (err) {
        setError('Erreur lors de la récupération des rendez-vous');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, []);

  const handleEventClick = (info: any) => {
    const appointmentId = info.event.id;
    router.push(`/dashboard/appointments/${appointmentId}`);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Calendrier des rendez-vous</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-3">Chargement des rendez-vous...</span>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Erreur :</strong>
            <span className="block sm:inline"> {error}</span>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              events={appointments.map(appointment => ({
                id: appointment._id,
                title: appointment.title,
                start: appointment.start,
                end: appointment.end,
                color: appointment.color,
                extendedProps: {
                  commercialId: appointment.commercialId,
                  commercialName: appointment.commercialName,
                  leadId: appointment.leadId,
                  leadName: appointment.leadName,
                  address: appointment.address,
                  status: appointment.status
                }
              }))}
              eventClick={handleEventClick}
              height="auto"
              locale="fr"
              buttonText={{
                today: "Aujourd'hui",
                month: 'Mois',
                week: 'Semaine',
                day: 'Jour',
                list: 'Liste'
              }}
              firstDay={1} // Commence la semaine le lundi
              businessHours={{
                daysOfWeek: [1, 2, 3, 4, 5], // Lundi au vendredi
                startTime: '08:00',
                endTime: '18:00'
              }}
              slotMinTime="08:00:00"
              slotMaxTime="19:00:00"
              allDaySlot={false}
              eventTimeFormat={{
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              }}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
