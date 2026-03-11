import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Appointment from '@/models/Appointment';
import Commercial from '@/models/Commercial';
import { verifyAdminToken } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, message: 'Non autorisé' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const isAdmin = await verifyAdminToken(token);
    
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: 'Accès réservé aux administrateurs' },
        { status: 403 }
      );
    }

    await dbConnect();

    // Vérifier si le commercial existe
    const commercial = await Commercial.findById(params.id);
    if (!commercial) {
      return NextResponse.json(
        { success: false, message: 'Commercial non trouvé' },
        { status: 404 }
      );
    }

    // Récupérer tous les rendez-vous du commercial
    // Nous récupérons les rendez-vous à venir (date supérieure à maintenant)
    const appointments = await Appointment.find({
      commercial: params.id,
      date: { $gte: new Date() }
    }).sort({ date: 1 }).populate('lead', 'address city postalCode');

    // Formater les rendez-vous pour l'affichage
    const formattedAppointments = appointments.map(apt => {
      // Construire l'adresse complète
      let address = '';
      if (apt.lead) {
        const lead = apt.lead;
        const addressParts = [];
        
        if (lead.address) addressParts.push(lead.address);
        if (lead.city) addressParts.push(lead.city);
        if (lead.postalCode) addressParts.push(lead.postalCode);
        
        address = addressParts.join(', ');
      } else if (apt.address) {
        address = apt.address;
      }

      return {
        _id: apt._id,
        date: apt.date,
        address: address || 'Adresse non spécifiée',
        status: apt.status,
        leadId: apt.lead?._id || null
      };
    });

    return NextResponse.json({
      success: true,
      appointments: formattedAppointments
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des rendez-vous:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
