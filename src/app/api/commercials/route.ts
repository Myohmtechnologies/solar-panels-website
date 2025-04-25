import { NextRequest, NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// Interface pour le type Commercial
interface Commercial {
  name: string;
  email: string;
  phone?: string;
  basedCity?: string;
  workingAreas?: string[];
  maxTravelDistance?: number;
}

// GET /api/commercials
// Récupère la liste des commerciaux
export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    
    // Récupérer tous les commerciaux de la base de données
    const commercials = await db.collection('commercials').find({}).toArray();
    
    // Si aucun commercial n'est trouvé, créer des commerciaux par défaut
    if (commercials.length === 0) {
      const defaultCommercials = [
        {
          name: 'Ali Abed',
          email: 'ali.abed@myohmtechnologies.com',
          phone: '06 12 34 56 78',
          basedCity: 'Paris',
          workingAreas: ['Paris', 'Ile-de-France'],
          maxTravelDistance: 50
        },
        {
          name: 'Rudy Salatnia',
          email: 'rudy.salatnia@myohmtechnologies.com',
          phone: '06 98 76 54 32',
          basedCity: 'Lyon',
          workingAreas: ['Lyon', 'Rhône-Alpes'],
          maxTravelDistance: 50
        }
      ];
      
      // Insérer les commerciaux par défaut dans la base de données
      const result = await db.collection('commercials').insertMany(defaultCommercials);
      
      // Récupérer les commerciaux avec leurs IDs
      const insertedCommercials = await db.collection('commercials').find({
        _id: { $in: Object.values(result.insertedIds) }
      }).toArray();
      
      return NextResponse.json({ 
        success: true, 
        commercials: insertedCommercials.map(c => ({
          ...c,
          _id: c._id.toString()
        }))
      });
    }
    
    // Formater les données pour la réponse
    const formattedCommercials = commercials.map(c => ({
      ...c,
      _id: c._id.toString()
    }));
    
    return NextResponse.json({ 
      success: true, 
      commercials: formattedCommercials 
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des commerciaux:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erreur lors de la récupération des commerciaux' 
    }, { status: 500 });
  }
}

// POST /api/commercials
// Ajoute un nouveau commercial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Vérifier les champs obligatoires
    const { name, email } = body;
    
    if (!name || !email) {
      return NextResponse.json({ 
        success: false, 
        error: 'Le nom et l\'email sont requis' 
      }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db('myohm');
    
    // Vérifier si un commercial avec cet email existe déjà
    const existingCommercial = await db.collection('commercials').findOne({ email });
    
    if (existingCommercial) {
      return NextResponse.json({ 
        success: false, 
        error: 'Un commercial avec cet email existe déjà' 
      }, { status: 400 });
    }
    
    // Créer le nouveau commercial
    const newCommercial: Commercial = {
      name,
      email,
      phone: body.phone || '',
      basedCity: body.basedCity || '',
      workingAreas: body.workingAreas || [],
      maxTravelDistance: body.maxTravelDistance || 50
    };
    
    const result = await db.collection('commercials').insertOne(newCommercial);
    
    return NextResponse.json({ 
      success: true, 
      commercial: {
        ...newCommercial,
        _id: result.insertedId.toString()
      }
    });
  } catch (error) {
    console.error('Erreur lors de la création du commercial:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erreur lors de la création du commercial' 
    }, { status: 500 });
  }
}