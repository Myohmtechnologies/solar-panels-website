'use client';

import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core';
import './calendar.css';

interface EventType {
  id: string;
  label: string;
  color: string;
}

interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  className: string;
  extendedProps: {
    type: string;
    client: string;
    phone: string;
    address: string;
  };
}

const eventTypes: EventType[] = [
  { id: 'rdv-commercial', label: 'RDV Commercial', color: '#6C8D2F' },
  { id: 'visite-technique', label: 'Visite Technique', color: '#4B5563' },
  { id: 'installation', label: 'Installation', color: '#2563EB' },
  { id: 'validation', label: 'Validation', color: '#9333EA' },
];

const initialEvents: CalendarEvent[] = [
  {
    title: 'RDV Commercial - Jean Dupont',
    start: '2024-01-15T10:00:00',
    end: '2024-01-15T11:30:00',
    className: 'event-rdv-commercial',
    extendedProps: {
      type: 'rdv-commercial',
      client: 'Jean Dupont',
      phone: '06 12 34 56 78',
      address: '123 rue de Paris',
    },
  },
  {
    title: 'Visite Technique - Marie Martin',
    start: '2024-01-16T14:00:00',
    end: '2024-01-16T15:30:00',
    className: 'event-visite-technique',
    extendedProps: {
      type: 'visite-technique',
      client: 'Marie Martin',
      phone: '06 98 76 54 32',
      address: '456 avenue des Fleurs',
    },
  },
];

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const type = prompt('Type d\'événement (rdv-commercial, visite-technique, installation, validation):');
    const client = prompt('Nom du client:');
    const phone = prompt('Téléphone:') || 'Non renseigné';
    const address = prompt('Adresse:') || 'Non renseignée';
    
    if (type && client) {
      const newEvent: CalendarEvent = {
        title: `${eventTypes.find(t => t.id === type)?.label || type} - ${client}`,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        className: `event-${type}`,
        extendedProps: {
          type,
          client,
          phone,
          address,
        },
      };
      
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    const props = event.extendedProps;
    
    const details = `
      Client: ${props.client}
      Type: ${eventTypes.find(t => t.id === props.type)?.label || props.type}
      Téléphone: ${props.phone || 'Non renseigné'}
      Adresse: ${props.address || 'Non renseignée'}
      
      Voulez-vous supprimer cet événement ?
    `;
    
    if (confirm(details)) {
      const updatedEvents = events.filter(e => 
        e.start !== event.startStr || 
        e.end !== event.endStr || 
        e.title !== event.title
      );
      setEvents(updatedEvents);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Calendrier</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gérez vos rendez-vous et visites techniques
          </p>
        </div>
        
        <div className="flex gap-2">
          {eventTypes.map((type) => (
            <div key={type.id} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: type.color }}
              />
              <span className="text-sm text-gray-600">{type.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          locale={frLocale}
          allDaySlot={false}
          slotMinTime="08:00:00"
          slotMaxTime="19:00:00"
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '08:00',
            endTime: '19:00',
          }}
        />
      </div>
    </div>
  );
}
