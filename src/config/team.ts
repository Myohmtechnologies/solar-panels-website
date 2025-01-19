export const TEAM_EMAILS = [
  // Équipe de développement
  'riadh@myohmtechnologies.com',
  // Équipe commerciale
  // Ajoutez les emails de l'équipe commerciale
  
  // Équipe marketing
  // Ajoutez les emails de l'équipe marketing
  
  // Direction
  // Ajoutez les emails de la direction
];

export const TEAM_DOMAINS = [
  'myohmtechnologies.com'
];

// Vérifie si un email appartient à l'équipe
export const isTeamEmail = (email: string): boolean => {
  if (TEAM_EMAILS.includes(email)) return true;
  
  const domain = email.split('@')[1];
  return TEAM_DOMAINS.includes(domain);
};
