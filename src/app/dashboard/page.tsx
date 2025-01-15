'use client';

import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';

const DashboardPage = () => {
  const [view, setView] = useState('dayGridMonth');

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          {/* En-tête du calendrier */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              Calendrier des Rendez-vous
            </h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setView('timeGridDay')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === 'timeGridDay'
                    ? 'bg-AFC97E text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Jour
              </button>
              <button
                onClick={() => setView('timeGridWeek')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === 'timeGridWeek'
                    ? 'bg-AFC97E text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Semaine
              </button>
              <button
                onClick={() => setView('dayGridMonth')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === 'dayGridMonth'
                    ? 'bg-AFC97E text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Mois
              </button>
            </div>
          </div>

          {/* Calendrier */}
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={view}
              locale={frLocale}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: '',
              }}
              views={{
                timeGridDay: {
                  titleFormat: { year: 'numeric', month: 'long', day: 'numeric' }
                },
                timeGridWeek: {
                  titleFormat: { year: 'numeric', month: 'long' }
                },
                dayGridMonth: {
                  titleFormat: { year: 'numeric', month: 'long' }
                }
              }}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              height="auto"
              allDaySlot={false}
              slotMinTime="08:00:00"
              slotMaxTime="19:00:00"
              businessHours={{
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '08:00',
                endTime: '19:00',
              }}
              eventContent={(eventInfo) => {
                return (
                  <div className="p-1">
                    <div className="font-semibold">{eventInfo.event.title}</div>
                    <div className="text-xs">{eventInfo.event.extendedProps.description}</div>
                  </div>
                );
              }}
              eventClassNames="rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Styles personnalisés pour le calendrier */}
      <style jsx global>{`
        .fc {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont;
        }
        .fc .fc-toolbar-title {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .fc .fc-button {
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          color: #374151;
          font-weight: 500;
          text-transform: capitalize;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
        .fc .fc-button:hover {
          background-color: #e5e7eb;
        }
        .fc .fc-button-primary:not(:disabled).fc-button-active,
        .fc .fc-button-primary:not(:disabled):active {
          background-color: #AFC97E;
          border-color: #AFC97E;
          color: white;
        }
        .fc-theme-standard td, .fc-theme-standard th {
          border-color: #e5e7eb;
        }
        .fc-theme-standard .fc-scrollgrid {
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .fc .fc-day-today {
          background-color: #f8fafc !important;
        }
        .fc-event {
          background-color: #AFC97E;
          border: none;
          padding: 2px;
        }
        .fc-timegrid-event-harness .fc-event {
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
