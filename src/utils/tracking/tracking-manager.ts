import { initializeInteractionTracking } from './interactions';
import { initializePerformanceTracking } from './performance';
import { initializeNavigationTracking } from './navigation';

export const initializeTracking = () => {
    // Vérifier si le tracking est déjà initialisé
    if ((window as any).__trackingInitialized) {
        return;
    }

    try {
        // Initialiser tous les trackings
        initializeInteractionTracking();
        initializePerformanceTracking();
        initializeNavigationTracking();

        // Marquer le tracking comme initialisé
        (window as any).__trackingInitialized = true;

        console.log('Tracking initialized successfully');
    } catch (error) {
        console.error('Error initializing tracking:', error);
    }
};
