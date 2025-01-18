import { trackEvent } from '../analytics';

export const getScrollPercentage = () => {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';
    return Math.round(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
};

export const getCurrentSection = () => {
    // Trouve la section visible actuelle basée sur le scroll
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    let maxVisibility = 0;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibility = Math.min(Math.max(0, rect.bottom), window.innerHeight) - 
                         Math.max(0, rect.top);
        if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = section.id || 'unknown';
        }
    });

    return currentSection;
};

export const trackPageInteractions = {
    scrollDepth: () => {
        let lastTrackedDepth = 0;
        const depths = [25, 50, 75, 100];

        return () => {
            const currentDepth = getScrollPercentage();
            const depthToTrack = depths.find(depth => currentDepth >= depth && lastTrackedDepth < depth);

            if (depthToTrack) {
                lastTrackedDepth = depthToTrack;
                trackEvent('scroll_depth', {
                    depth: `${depthToTrack}%`,
                    page_type: window.location.pathname,
                    time_on_page: Math.round(performance.now() / 1000)
                });
            }
        };
    },

    readingTime: (() => {
        let startTime = Date.now();
        let lastTrackTime = startTime;
        const TRACK_INTERVAL = 30000; // 30 secondes

        return () => {
            const now = Date.now();
            if (now - lastTrackTime >= TRACK_INTERVAL) {
                trackEvent('content_engagement', {
                    section: getCurrentSection(),
                    time_spent: Math.round((now - startTime) / 1000),
                    scroll_percentage: getScrollPercentage()
                });
                lastTrackTime = now;
            }
        };
    })(),

    ctaInteractions: (ctaType: string, element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        trackEvent('cta_interaction', {
            cta_type: ctaType,
            position: {
                x: Math.round(rect.left),
                y: Math.round(rect.top)
            },
            page_section: getCurrentSection()
        });
    }
};

// Initialisation du tracking des interactions
export const initializeInteractionTracking = () => {
    const scrollTracker = trackPageInteractions.scrollDepth();
    
    // Event listeners
    window.addEventListener('scroll', () => {
        scrollTracker();
        trackPageInteractions.readingTime();
    }, { passive: true });

    // Track CTA clicks
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.matches('button, a, [role="button"]')) {
            const ctaType = target.getAttribute('data-cta-type') || 'unknown';
            trackPageInteractions.ctaInteractions(ctaType, target);
        }
    });
};
