import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

/**
 * Middleware pour vérifier l'authentification des commerciaux
 */
export async function verifyCommercialAuth(request: NextRequest) {
  try {
    // Récupérer le token depuis les cookies ou les headers
    const token = request.cookies.get('commercial-token')?.value || 
                  request.headers.get('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return {
        success: false,
        error: 'Non authentifié',
        status: 401
      };
    }
    
    // Vérifier le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as JwtPayload;
    
    if (!decoded || !decoded.id || decoded.role !== 'commercial') {
      return {
        success: false,
        error: 'Token invalide',
        status: 401
      };
    }
    
    // Récupérer les informations du commercial
    const client = await clientPromise;
    const db = client.db();
    
    let filter = {};
    if (ObjectId.isValid(decoded.id)) {
      filter = { _id: new ObjectId(decoded.id) };
    } else {
      filter = { _id: decoded.id };
    }
    
    const commercial = await db.collection('commercials').findOne(filter);
    
    if (!commercial) {
      return {
        success: false,
        error: 'Commercial non trouvé',
        status: 401
      };
    }
    
    if (commercial.isActive === false) {
      return {
        success: false,
        error: 'Ce compte a été désactivé',
        status: 403
      };
    }
    
    // Tout est bon, retourner les informations du commercial
    return {
      success: true,
      commercial: {
        _id: commercial._id.toString(),
        name: commercial.name,
        email: commercial.email,
        phone: commercial.phone,
        basedCity: commercial.basedCity,
        workingAreas: commercial.workingAreas,
        maxTravelDistance: commercial.maxTravelDistance,
        isActive: commercial.isActive,
        role: commercial.role || 'commercial' // Ajouter le rôle
      }
    };
  } catch (error) {
    console.error('Erreur d\'authentification:', error);
    return {
      success: false,
      error: 'Erreur d\'authentification',
      status: 401
    };
  }
}
