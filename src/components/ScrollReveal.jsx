import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delayClass = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once revealed, unobserve to keep state clean
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-init ${delayClass} ${isVisible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
