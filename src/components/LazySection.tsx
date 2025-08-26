import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  fallback?: ReactNode;
  sectionId?: string; // Add section ID prop for navigation
}

export const LazySection = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  fallback = null,
  sectionId
}: LazySectionProps) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div ref={ref} className={className} id={sectionId}>
      {inView ? children : (
        fallback || (
          <div className="w-full h-96 flex items-center justify-center">
            <div className="animate-pulse">
              <div className="w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LazySection;
