import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import QuoteModel from '@/models/Quote';

// GET /api/quotes - Récupérer tous les devis
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Récupérer tous les devis, triés par date de création (du plus récent au plus ancien)
    const quotes = await QuoteModel.find({})
      .sort({ createdAt: -1 })
      .lean();
    
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
    
    // Valider les données requises
    if (!body.client || !body.config || !body.totalPrice) {
      return NextResponse.json(
        { success: false, error: 'Données incomplètes' },
        { status: 400 }
      );
    }
    
    // Créer un nouveau devis
    const newQuote = await QuoteModel.create({
      client: body.client,
      config: body.config,
      totalPrice: body.totalPrice,
      pdfUrl: body.pdfUrl || null
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
