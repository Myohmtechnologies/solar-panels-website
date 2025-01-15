export async function createCalendarEvent(
  eventType: 'MEETING_SCHEDULED' | 'TECHNICAL_VISIT',
  startDateTime: Date,
  attendeeEmail?: string,
  location?: string
) {
  try {
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 2); // Durée de 2 heures au lieu de 1

    const eventTitle = eventType === 'MEETING_SCHEDULED' 
      ? 'Rendez-vous Client - MY OHM Technologies'
      : 'Visite Technique - MY OHM Technologies';

    const eventDescription = eventType === 'MEETING_SCHEDULED'
      ? 'Rendez-vous de présentation des solutions solaires MY OHM Technologies (durée : 2h)'
      : 'Visite technique pour installation de panneaux solaires (durée : 2h)';

    const response = await fetch('/api/calendar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: eventTitle,
        description: eventDescription,
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
        attendeeEmail,
        location,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create calendar event');
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return {
      success: true,
      eventId: data.eventId,
      warning: data.warning
    };
  } catch (error) {
    console.error('Error creating calendar event:', error);
    return {
      success: false,
      warning: error instanceof Error ? error.message : 'Failed to create calendar event'
    };
  }
}
