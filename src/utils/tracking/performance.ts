import { trackEvent } from '../analytics';

// Utilitaires de mesure de performance
const getPerformanceMetrics = () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
        loadTime: navigation ? navigation.loadEventEnd : performance.now(),
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        lcp: 0, // Sera mis à jour via PerformanceObserver
        fid: 0  // Sera mis à jour via PerformanceObserver
    };
};

export const trackPerformanceMetrics = {
    pageLoadMetrics: () => {
        let metrics = getPerformanceMetrics();

        // Observer pour Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.lcp = lastEntry.startTime;
        });

        try {
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
            console.warn('LCP tracking not supported');
        }

        // Observer pour First Input Delay
        const fidObserver = new PerformanceObserver((entryList) => {
            const firstInput = entryList.getEntries()[0];
            metrics.fid = firstInput.processingStart - firstInput.startTime;
            
            trackEvent('page_performance', {
                load_time: metrics.loadTime,
                first_contentful_paint: metrics.fcp,
                largest_contentful_paint: metrics.lcp,
                first_input_delay: metrics.fid
            });
        });

        try {
            fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
            console.warn('FID tracking not supported');
        }
    },

    errorTracking: (error: Error) => {
        trackEvent('js_error', {
            error_message: error.message,
            error_stack: error.stack,
            page_url: window.location.href,
            user_agent: navigator.userAgent,
            timestamp: new Date().toISOString()
        });
    }
};

// Initialisation du tracking de performance
export const initializePerformanceTracking = () => {
    // Track initial page load
    window.addEventListener('load', () => {
        trackPerformanceMetrics.pageLoadMetrics();
    });

    // Track JavaScript errors
    window.addEventListener('error', (event) => {
        trackPerformanceMetrics.errorTracking(event.error);
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
        trackPerformanceMetrics.errorTracking(new Error(event.reason));
    });
};
