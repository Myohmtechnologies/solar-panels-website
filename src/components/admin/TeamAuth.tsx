'use client';

import { useEffect, useState, useRef } from 'react';
import { isTeamEmail } from '@/config/team';

const TeamAuth = () => {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const eventSentRef = useRef(false);

  // Vérifie si déjà authentifié au chargement
  useEffect(() => {
    const teamStatus = localStorage.getItem('teamMember');
    const teamEmail = localStorage.getItem('teamEmail');
    
    if (teamStatus === 'true' && teamEmail && isTeamEmail(teamEmail)) {
      setIsAuthenticated(true);
    }

    // Auto-authentification si l'email est dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('team_email');
    console.log('TeamAuth: URL params check', { emailParam });
    if (emailParam && isTeamEmail(emailParam)) {
      console.log('TeamAuth: Valid team email found', emailParam);
      handleTeamAuth(emailParam);
    }
  }, []);

  const handleTeamAuth = (emailToAuth: string) => {
    console.log('TeamAuth: Attempting authentication', { emailToAuth });
    if (isTeamEmail(emailToAuth)) {
      console.log('TeamAuth: Email validated');
      localStorage.setItem('teamMember', 'true');
      localStorage.setItem('teamEmail', emailToAuth);
      setIsAuthenticated(true);
      
      // Envoie l'information à GA seulement si ce n'est pas déjà fait
      if (window.gtag && !eventSentRef.current) {
        console.log('TeamAuth: Sending GA event');
        try {
          window.gtag('event', 'team_auth', {
            team_member: true,
            team_email: emailToAuth
          });
          console.log('TeamAuth: GA event sent successfully');
          eventSentRef.current = true;
        } catch (error) {
          console.error('TeamAuth: Error sending GA event:', error);
        }
      } else {
        if (!window.gtag) {
          console.warn('TeamAuth: gtag not found');
        } else if (eventSentRef.current) {
          console.log('TeamAuth: Event already sent, skipping');
        }
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
      console.log('TeamAuth: Sending GA event');
      window.gtag('event', 'team_logout', {
        team_member: false,
        team_email: null
      });
      console.log('TeamAuth: GA event sent');
    } else {
      console.warn('TeamAuth: gtag not found');
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
