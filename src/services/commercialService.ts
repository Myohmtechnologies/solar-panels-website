import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

/**
 * Authentifie un commercial avec son email et mot de passe
 */
export async function authenticateCommercial(email: string, password: string) {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Rechercher le commercial par email
    const commercial = await db.collection('commercials').findOne({ email });
    
    if (!commercial) {
      return {
        success: false,
        error: 'Email ou mot de passe incorrect'
      };
    }
    
    // Vérifier si le commercial est actif
    if (commercial.isActive === false) {
      return {
        success: false,
        error: 'Ce compte a été désactivé'
      };
    }
    
    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, commercial.password);
    
    if (!isPasswordValid) {
      return {
        success: false,
        error: 'Email ou mot de passe incorrect'
      };
    }
    
    // Générer un token JWT
    const token = jwt.sign(
      { 
        id: commercial._id.toString(),
        email: commercial.email,
        role: 'commercial'
      },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '24h' }
    );
    
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
        isActive: commercial.isActive
      },
      token
    };
  } catch (error) {
    console.error('Erreur lors de l\'authentification du commercial:', error);
    return {
      success: false,
      error: 'Erreur lors de l\'authentification'
    };
  }
}

/**
 * Met à jour les informations d'un commercial
 */
export async function updateCommercial(id: string, updateData: Partial<Commercial>) {
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
    
    // Supprimer _id de updateData s'il existe
    if (updateData._id) {
      delete updateData._id;
    }
    
    // Ajouter la date de mise à jour
    const dataToUpdate = {
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    const result = await db.collection('commercials').updateOne(
      filter,
      { $set: dataToUpdate }
    );
    
    if (result.matchedCount === 0) {
      return {
        success: false,
        error: 'Commercial non trouvé'
      };
    }
    
    return {
      success: true,
      message: 'Commercial mis à jour avec succès'
    };
  } catch (error) {
    console.error('Erreur lors de la mise à jour du commercial:', error);
    return {
      success: false,
      error: 'Erreur lors de la mise à jour du commercial'
    };
  }
}

/**
 * Désactive un commercial (sans le supprimer de la base de données)
 */
export async function deactivateCommercial(id: string) {
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
    
    const result = await db.collection('commercials').updateOne(
      filter,
      { 
        $set: { 
          isActive: false,
          deactivatedAt: new Date().toISOString() 
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      return {
        success: false,
        error: 'Commercial non trouvé'
      };
    }
    
    return {
      success: true,
      message: 'Commercial désactivé avec succès'
    };
  } catch (error) {
    console.error('Erreur lors de la désactivation du commercial:', error);
    return {
      success: false,
      error: 'Erreur lors de la désactivation du commercial'
    };
  }
}