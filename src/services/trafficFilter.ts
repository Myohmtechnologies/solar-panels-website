// Liste des adresses IP internes (à compléter)
const INTERNAL_IPS = [
  // Ajoutez les IPs de bureau
];

// Liste des emails de l'entreprise
const COMPANY_DOMAINS = [
  'myohmtechnologies.com',
  // Ajoutez d'autres domaines d'entreprise
];

// User-Agents des outils de test
const TEST_USER_AGENTS = [
  'Cypress',
  'Selenium',
  'Postman',
  'crawler',
  'bot',
  'spider',
];

export const isInternalTraffic = () => {
  try {
    // 1. Vérification du paramètre debug
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('debug') || urlParams.has('test')) {
      return true;
    }

    // 2. Vérification du localStorage
    if (localStorage.getItem('isInternalUser') === 'true') {
      return true;
    }

    // 3. Vérification du User-Agent
    const userAgent = navigator.userAgent.toLowerCase();
    if (TEST_USER_AGENTS.some(agent => userAgent.includes(agent.toLowerCase()))) {
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error checking internal traffic:', error);
    return false;
  }
};

export const markAsInternalUser = () => {
  try {
    localStorage.setItem('isInternalUser', 'true');
  } catch (error) {
    console.error('Error marking internal user:', error);
  }
};

export const markAsExternalUser = () => {
  try {
    localStorage.setItem('isInternalUser', 'false');
  } catch (error) {
    console.error('Error marking external user:', error);
  }
};
