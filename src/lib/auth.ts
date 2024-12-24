import { NextRequest } from 'next/server';

export function isDashboardRequest(request: NextRequest): boolean {
  // Exemple simple de vérification
  // À remplacer par votre logique réelle d'authentification
  const authHeader = request.headers.get('authorization');
  return authHeader === process.env.DASHBOARD_SECRET;
}
