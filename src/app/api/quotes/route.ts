import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import QuoteModel from '@/models/Quote';

// GET /api/quotes - Récupérer tous les devis
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Récupérer tous les devis, triés par date de création (du plus récent au plus ancien)
    // Ne pas utiliser lean() pour préserver la structure complète des documents
    const quotes = await QuoteModel.find({})
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: quotes });
  } catch (error) {
    console.error('Erreur lors de la récupération des devis:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des devis' },
      { status: 500 }
    );
  }
}

// POST /api/quotes - Créer un nouveau devis
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const body = await req.json();
    
    // Logs pour déboguer
    console.log('Données reçues par l\'API:', {
      hasClient: !!body.client,
      hasConfig: !!body.config,
      hasExceptionalService: body.config?.exceptionalService?.description && body.config?.exceptionalService?.price > 0,
      exceptionalService: body.config?.exceptionalService,
      totalPrice: body.totalPrice
    });
    
    // Valider les données requises
    if (!body.client || !body.config || !body.totalPrice) {
      console.error('Données incomplètes:', { body });
      return NextResponse.json(
        { success: false, error: 'Données incomplètes' },
        { status: 400 }
      );
    }
    
    // Utiliser directement les données envoyées sans transformation
    // Cela garantit que tous les champs sont préservés tels quels
    const quoteData = {
      client: body.client,
      config: body.config,  // Utiliser l'objet config complet tel quel
      totalPrice: body.totalPrice,
      pdfUrl: body.pdfUrl || null
    };
    
    // Afficher les données pour déboguer
    console.log('Données brutes envoyées à MongoDB:', JSON.stringify(quoteData, null, 2));
    
    console.log('Données formatées pour MongoDB:', JSON.stringify(quoteData, null, 2));
    
    // Créer un nouveau devis
    const newQuote = await QuoteModel.create(quoteData);
    
    // Vérifier si la prestation exceptionnelle a été correctement enregistrée
    // Convertir le document Mongoose en objet JavaScript simple pour l'inspection
    const savedQuote = newQuote.toObject();
    
    // Vérifier si la prestation exceptionnelle est présente dans les données enregistrées
    const hasExceptionalService = savedQuote.config?.exceptionalService?.description && 
                               savedQuote.config?.exceptionalService?.price > 0;
    
    console.log('Devis créé avec succès:', {
      id: savedQuote._id,
      hasExceptionalService,
      // Afficher la prestation exceptionnelle enregistrée
      savedExceptionalService: savedQuote.config?.exceptionalService
    });
    
    return NextResponse.json({ 
      success: true, 
      data: newQuote,
      message: 'Devis créé avec succès'
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du devis:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la création du devis' },
      { status: 500 }
    );
  }
}
