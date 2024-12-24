export async function createCalendarEvent(
  eventType: 'MEETING_SCHEDULED' | 'TECHNICAL_VISIT',
  startDateTime: Date,
  attendeeEmail?: string,
  location?: string
) {
  try {
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1); // Default duration: 1 hour

    const eventTitle = eventType === 'MEETING_SCHEDULED' 
      ? 'Rendez-vous Client - MY OHM Technologies'
      : 'Visite Technique - MY OHM Technologies';

    const eventDescription = eventType === 'MEETING_SCHEDULED'
      ? 'Rendez-vous de présentation des solutions solaires MY OHM Technologies'
      : 'Visite technique pour installation de panneaux solaires';

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

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to create calendar event');
    }

    // Si l'API renvoie un avertissement, on le propage
    if (data.warning) {
      console.warn('Calendar warning:', data.warning);
    }

    return data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}
