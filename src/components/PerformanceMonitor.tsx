import { useEffect } from 'react';

interface Metric {
  name: string;
  value: number;
  rating: string;
}

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals in development
    if (process.env.NODE_ENV === 'development') {
      const logWebVitals = (metric: Metric) => {
        console.log(`${metric.name}: ${metric.value} (${metric.rating})`);
      };

      // Simple performance logging without web-vitals dependency
      const measurePerformance = () => {
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach((entry) => {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        });
        
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          console.log(`DOM Content Loaded: ${navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart}ms`);
          console.log(`Page Load Complete: ${navigationEntry.loadEventEnd - navigationEntry.fetchStart}ms`);
        }
      };

      // Wait for page load to measure
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          if (process.env.NODE_ENV === 'development') {
            console.log(`Page Load Time: ${nav.loadEventEnd - nav.fetchStart}ms`);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
