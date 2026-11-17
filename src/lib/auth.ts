import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export function isDashboardRequest(request: NextRequest): boolean {
  // Exemple simple de vérification
  // À remplacer par votre logique réelle d'authentification
  const authHeader = request.headers.get('authorization');
  return authHeader === process.env.DASHBOARD_SECRET;
}

// Vérifier un token JWT pour un administrateur
export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('JWT_SECRET non défini dans les variables d\'environnement');
    }

    const secret = new TextEncoder().encode(jwtSecret);
    const { payload: decoded } = await jwtVerify(token, secret, { algorithms: ['HS256'] });
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
}

// Vérifier un token JWT pour un commercial
export async function verifyCommercialToken(token: string): Promise<{ id: string; email: string } | null> {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('JWT_SECRET non défini dans les variables d\'environnement');
    }

    const secret = new TextEncoder().encode(jwtSecret);
    const { payload: decoded } = await jwtVerify(token, secret, { algorithms: ['HS256'] });
    if (
      decoded.role !== 'commercial' ||
      typeof decoded.id !== 'string' ||
      typeof decoded.email !== 'string'
    ) {
      return null;
    }

    return {
      id: decoded.id,
      email: decoded.email
    };
  } catch (error) {
    return null;
  }
}
