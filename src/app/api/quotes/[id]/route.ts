import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import QuoteModel from '@/models/Quote';

// GET /api/quotes/[id] - Récupérer un devis spécifique par son ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    
    const quoteId = params.id;
    
    if (!quoteId) {
      return NextResponse.json(
        { success: false, error: 'ID de devis non fourni' },
        { status: 400 }
      );
    }
    
    const quote = await QuoteModel.findById(quoteId).lean();
    
    if (!quote) {
      return NextResponse.json(
        { success: false, error: 'Devis non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: quote });
  } catch (error) {
    console.error(`Erreur lors de la récupération du devis:`, error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération du devis' },
      { status: 500 }
    );
  }
}
