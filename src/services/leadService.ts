export interface Lead {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  source: 'hero' | 'simulator';
  estimations?: {
    production?: number;
    totalAnnualSavings?: number;
    systemSize?: number;
  };
  createdAt: string;
}

export async function submitLead(lead: Omit<Lead, 'createdAt'>): Promise<{ success: boolean; error?: string }> {
  try {
    // Ici, vous pouvez implémenter l'envoi vers votre backend
    // Par exemple avec fetch vers votre API ou un service comme Firebase

    // Pour l'instant, on simule un envoi réussi
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log pour le développement
    console.log('Lead submitted:', {
      ...lead,
      createdAt: new Date().toISOString()
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting lead:', error);
    return {
      success: false,
      error: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
    };
  }
}
