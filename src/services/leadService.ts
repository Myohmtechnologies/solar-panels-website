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
  nextAction?: {
    type: string;
    commercialId: string;
    plannedDate: string;
    duration: number;
    notes?: string;
  };
}

export async function submitLead(lead: Lead): Promise<{ success: boolean; error?: string; mode?: string }> {
  try {
    console.log('Lead service received:', lead);
    
    // Vérification des champs obligatoires
    if (!lead.fullName || !lead.email || !lead.phone) {
      return {
        success: false,
        error: 'Les champs nom, email et téléphone sont requis'
      };
    }
    
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: lead.fullName, // Utiliser fullName comme name pour l'API
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
        residentialStatus: lead.residentialStatus,
        createdAt: lead.createdAt,
        // Inclure les informations du rendez-vous si elles existent
        nextAction: lead.nextAction
      }),
    });

    const data = await response.json();
    console.log('API response in service:', data, 'Status:', response.status);

    if (!response.ok) {
      console.error('API error:', data.error);
      return { 
        success: false, 
        error: data.error || "Une erreur s'est produite lors de l'enregistrement"
      };
    }

    return { 
      success: true,
      mode: data.mode // 'local' si stocké localement, undefined si stocké dans MongoDB
    };
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // Simuler un succès en mode développement pour une meilleure expérience utilisateur
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode: simulating successful submission');
      return {
        success: true,
        mode: 'simulated'
      };
    }
    
    return {
      success: false,
      error: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
    };
  }
}
