'use client';

import { useEffect, useState, useRef } from 'react';
import { isTeamEmail } from '@/config/team';
import { SunIcon, KeyIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

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
    <div className="fixed bottom-4 right-4 z-50 overflow-hidden rounded-lg shadow-lg">
      {!isAuthenticated ? (
        <>
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-medium hover:shadow-md transition-all duration-300 w-full"
            >
              <KeyIcon className="w-5 h-5" />
              <span>Espace Équipe</span>
            </button>
          ) : (
            <div className="bg-white p-4 border-t-4 border-ffeb99">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <SunIcon className="w-5 h-5 text-ffb700" />
                  Connexion Équipe
                </h3>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="team-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email professionnel
                  </label>
                  <input
                    id="team-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ffb700 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-medium rounded-md hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Se connecter</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-between bg-gradient-to-br from-ffeb99 to-ffb700 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              <SunIcon className="w-4 h-4 text-ffb700" />
            </div>
            <span className="text-black font-medium">Membre connecté</span>
          </div>
          <button
            onClick={handleLogout}
            className="ml-3 text-black hover:text-gray-800 transition-colors"
            title="Déconnexion"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamAuth;
