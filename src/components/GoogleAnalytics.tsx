import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Only load GA if measurement ID is provided
    if (!measurementId || measurementId === 'your_ga_measurement_id_here') {
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize GA
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_path: window.location.pathname + window.location.search + window.location.hash,
      });
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  // Track page views on route change
  useEffect(() => {
    if (!measurementId || measurementId === 'your_ga_measurement_id_here') {
      return;
    }

    // @ts-expect-error - gtag is loaded dynamically
    if (typeof window.gtag === 'function') {
      // @ts-expect-error - gtag is loaded dynamically
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location, measurementId]);

  return null;
};

export default GoogleAnalytics;
