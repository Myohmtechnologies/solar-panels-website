import { useEffect } from 'react';
import { trackEvent } from '@/services/analytics';

export default function PacaPageTracker() {
  useEffect(() => {
    // Track page view with campaign data
    if (typeof window !== 'undefined' && window.gtag) {
      const urlParams = new URLSearchParams(window.location.search);
      const gclid = urlParams.get('gclid');
      const utm_source = urlParams.get('utm_source');
      const utm_medium = urlParams.get('utm_medium');
      const utm_campaign = urlParams.get('utm_campaign');

      // Track page view with enhanced data
      window.gtag('event', 'page_view', {
        page_title: 'Installation Panneaux Solaires PACA',
        page_location: window.location.href,
        traffic_source: gclid ? 'google_ads' : utm_source || 'direct',
        gclid: gclid,
        utm_source: utm_source,
        utm_medium: utm_medium,
        utm_campaign: utm_campaign
      });

      // Track Google Ads conversion if from ads
      if (gclid) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16817660787/bCJ6CKu725gaEPPGpNM-',
          'page_location': window.location.href
        });
      }
    }

    // Track initial engagement
    trackEvent('paca_page_engagement', {
      event_type: 'page_load',
      timestamp: new Date().toISOString()
    });

    // Track scroll depth
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );
      
      if (scrollPercent >= 25) {
        trackEvent('paca_page_engagement', {
          event_type: 'scroll_25',
          scroll_depth: 25
        });
      }
      if (scrollPercent >= 50) {
        trackEvent('paca_page_engagement', {
          event_type: 'scroll_50',
          scroll_depth: 50
        });
      }
      if (scrollPercent >= 75) {
        trackEvent('paca_page_engagement', {
          event_type: 'scroll_75',
          scroll_depth: 75
        });
      }
      if (scrollPercent >= 90) {
        trackEvent('paca_page_engagement', {
          event_type: 'scroll_90',
          scroll_depth: 90
        });
      }
    };

    // Track time spent
    const startTime = Date.now();
    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('paca_page_engagement', {
        event_type: 'time_spent',
        seconds: timeSpent
      });
    };

    // Set up event listeners
    window.addEventListener('scroll', trackScroll);
    const timeInterval = setInterval(trackTime, 30000); // Track every 30 seconds

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(timeInterval);
      trackTime(); // Final time tracking on unmount
    };
  }, []);

  return null;
}
