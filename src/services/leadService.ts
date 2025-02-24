export interface Lead {
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  address?: string;
  postalCode?: string;
  source: 'hero' | 'simulator';
  notes?: string;
  logementType?: string;
  equipment?: string;
  energyBill?: string;
  residentialStatus?: string;
  createdAt: string;
}

export async function submitLead(lead: Lead): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        city: lead.city,
        address: lead.address,
        postalCode: lead.postalCode,
        source: lead.source,
        projectType: 'SOLAR_PANELS',
        notes: lead.notes || '',
        logementType: lead.logementType,
        equipment: lead.equipment,
        energyBill: lead.energyBill,
        residentialStatus: lead.residentialStatus
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Une erreur s'est produite");
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting lead:', error);
    return {
      success: false,
      error: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
    };
  }
}
