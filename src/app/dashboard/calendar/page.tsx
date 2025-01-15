'use client';

import { useState, useEffect } from 'react';
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

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const fetchEvents = async (start: string, end: string) => {
    try {
      const response = await fetch(
        `/api/calendar/events?start=${start}&end=${end}`
      );
      const data = await response.json();
      if (data.events) {
        setEvents(data.events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDatesSet = (dateInfo: any) => {
    fetchEvents(dateInfo.start.toISOString(), dateInfo.end.toISOString());
  };

  const handleDateSelect = async (selectInfo: DateSelectArg) => {
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
    `;
    
    alert(details);
  };

  useEffect(() => {
    fetchEvents(new Date().toISOString(), new Date().toISOString());
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendrier</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Types d&apos;événements</h2>
        <div className="flex flex-wrap gap-4">
          {eventTypes.map((type) => (
            <div key={type.id} className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: type.color }}
              ></div>
              <span>{type.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          locale={frLocale}
          events={events}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          datesSet={handleDatesSet}
          height="auto"
          slotMinTime="08:00:00"
          slotMaxTime="19:00:00"
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5], // Lundi au vendredi
            startTime: '08:00',
            endTime: '19:00',
          }}
          allDaySlot={false}
          scrollTime="08:00:00"
        />
      </div>
    </div>
  );
}
