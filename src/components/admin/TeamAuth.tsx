'use client';

import { useEffect, useState } from 'react';
import { isTeamEmail } from '@/config/team';

const TeamAuth = () => {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Vérifie si déjà authentifié au chargement
  useEffect(() => {
    const teamStatus = localStorage.getItem('teamMember');
    const teamEmail = localStorage.getItem('teamEmail');
    
    if (teamStatus === 'true' && teamEmail && isTeamEmail(teamEmail)) {
      setIsAuthenticated(true);
      // Envoie l'information à GA
      if (window.gtag) {
        window.gtag('event', 'team_auth', {
          team_member: true,
          team_email: teamEmail
        });
      }
    }

    // Auto-authentification si l'email est dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('team_email');
    if (emailParam && isTeamEmail(emailParam)) {
      handleTeamAuth(emailParam);
    }
  }, []);

  const handleTeamAuth = (emailToAuth: string) => {
    if (isTeamEmail(emailToAuth)) {
      localStorage.setItem('teamMember', 'true');
      localStorage.setItem('teamEmail', emailToAuth);
      setIsAuthenticated(true);
      
      // Envoie l'information à GA
      if (window.gtag) {
        window.gtag('event', 'team_auth', {
          team_member: true,
          team_email: emailToAuth
        });
      }

      // Nettoie l'URL si nécessaire
      const url = new URL(window.location.href);
      if (url.searchParams.has('team_email')) {
        url.searchParams.delete('team_email');
        window.history.replaceState({}, '', url.toString());
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTeamAuth(email);
  };

  const handleLogout = () => {
    localStorage.removeItem('teamMember');
    localStorage.removeItem('teamEmail');
    setIsAuthenticated(false);
    setEmail('');
    
    // Met à jour GA
    if (window.gtag) {
      window.gtag('event', 'team_logout', {
        team_member: false,
        team_email: null
      });
    }
  };

  // Affiche uniquement en développement ou avec le paramètre admin/team
  if (process.env.NODE_ENV !== 'development' && 
      !window.location.search.includes('admin') && 
      !window.location.search.includes('team')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      {!isAuthenticated ? (
        <>
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Membre de l'équipe ?
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email professionnel"
                className="text-sm border rounded px-2 py-1 w-full"
                required
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Valider
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Annuler
                </button>
              </div>
            </form>
          )}
        </>
      ) : (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-green-600">✓ Membre de l'équipe</span>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-600"
          >
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamAuth;
