import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// Interface pour un commercial
export interface Commercial {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  basedCity?: string;
  workingAreas?: string[];
  maxTravelDistance?: number;
  isActive?: boolean;
}

/**
 * Récupère tous les commerciaux
 */
export async function getAllCommercials() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    const commercials = await db.collection('commercials').find({}).toArray();
    
    return {
      success: true,
      commercials: commercials.map(commercial => ({
        ...commercial,
        _id: commercial._id.toString()
      }))
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des commerciaux:', error);
    return {
      success: false,
      error: 'Erreur lors de la récupération des commerciaux'
    };
  }
}

/**
 * Récupère un commercial par son ID
 */
export async function getCommercialById(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Vérifier si l'ID est un ObjectId valide
    let filter = {};
    if (ObjectId.isValid(id)) {
      filter = { _id: new ObjectId(id) };
    } else {
      filter = { _id: id };
    }
    
    const commercial = await db.collection('commercials').findOne(filter);
    
    if (!commercial) {
      return {
        success: false,
        error: 'Commercial non trouvé'
      };
    }
    
    return {
      success: true,
      commercial: {
        ...commercial,
        _id: commercial._id.toString()
      }
    };
  } catch (error) {
    console.error('Erreur lors de la récupération du commercial:', error);
    return {
      success: false,
      error: 'Erreur lors de la récupération du commercial'
    };
  }
}

/**
 * Crée un nouveau commercial
 */
export async function createCommercial(commercialData: Omit<Commercial, '_id'>) {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    const result = await db.collection('commercials').insertOne({
      ...commercialData,
      createdAt: new Date().toISOString(),
      isActive: true
    });
    
    return {
      success: true,
      commercialId: result.insertedId.toString()
    };
  } catch (error) {
    console.error('Erreur lors de la création du commercial:', error);
    return {
      success: false,
      error: 'Erreur lors de la création du commercial'
    };
  }
}