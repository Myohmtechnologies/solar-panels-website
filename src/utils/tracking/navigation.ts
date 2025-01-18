import { trackEvent } from '../analytics';

const getTimeOnPreviousPage = () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigationEntry ? Math.round(navigationEntry.loadEventEnd) : 0;
};

const getNavigationType = () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation ? navigation.type : 'unknown';
};

export const trackNavigationBehavior = {
    pageTransitions: () => {
        trackEvent('page_navigation', {
            previous_page: document.referrer,
            current_page: window.location.pathname,
            navigation_type: getNavigationType(),
            time_on_previous_page: getTimeOnPreviousPage()
        });
    },

    returnVisits: () => {
        const lastVisit = localStorage.getItem('last_visit');
        const totalVisits = parseInt(localStorage.getItem('total_visits') || '0', 10);
        const now = new Date().toISOString();

        // Mettre à jour les données de visite
        localStorage.setItem('last_visit', now);
        localStorage.setItem('total_visits', (totalVisits + 1).toString());

        if (lastVisit) {
            const daysSinceLastVisit = Math.floor(
                (new Date().getTime() - new Date(lastVisit).getTime()) / (1000 * 60 * 60 * 24)
            );

            trackEvent('return_visit', {
                days_since_last_visit: daysSinceLastVisit,
                total_visits: totalVisits + 1,
                previous_interactions: localStorage.getItem('previous_interactions') || 'none'
            });
        }
    }
};

// Initialisation du tracking de navigation
export const initializeNavigationTracking = () => {
    // Track page transitions
    window.addEventListener('load', () => {
        trackNavigationBehavior.pageTransitions();
        trackNavigationBehavior.returnVisits();
    });

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            trackEvent('page_visibility', {
                state: 'visible',
                timestamp: new Date().toISOString()
            });
        }
    });
};
