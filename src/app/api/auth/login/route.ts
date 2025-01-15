import { NextResponse } from 'next/server';
import * as jose from 'jose';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    console.log('Tentative de connexion pour:', email);

    // Vérification des identifiants
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      console.log('Identifiants incorrects');
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      );
    }

    // Création du token JWT
    if (!JWT_SECRET) {
      console.log('JWT_SECRET non défini');
      throw new Error('JWT_SECRET non défini');
    }

    // Créer une clé secrète à partir de la chaîne JWT_SECRET
    const secretKey = new TextEncoder().encode(JWT_SECRET);

    // Créer le token JWT
    const token = await new jose.SignJWT({ email, role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1d')
      .sign(secretKey);

    console.log('Token JWT créé avec succès');

    // Configuration du cookie
    const response = NextResponse.json(
      { success: true, redirectUrl: '/dashboard' },
      { status: 200 }
    );

    // Définition du cookie avec des options plus strictes
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 86400 // 24 heures
    });

    console.log('Cookie défini avec succès');
    return response;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la connexion' },
      { status: 500 }
    );
  }
}
