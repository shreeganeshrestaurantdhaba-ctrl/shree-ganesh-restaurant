import { useEffect, useRef, useState, type ReactNode } from 'react';

interface AnimateSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'fade-in';
  delay?: number;
}

// Full class names for Tailwind to detect
const animationMap: Record<string, string> = {
  'fade-in-up': 'animate-fade-in-up',
  'fade-in-left': 'animate-fade-in-left',
  'fade-in-right': 'animate-fade-in-right',
  'scale-in': 'animate-scale-in',
  'fade-in': 'animate-fade-in',
};

export default function AnimateSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
}: AnimateSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? animationMap[animation] : 'opacity-0'
      }`}
      style={isVisible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
