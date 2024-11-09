import { useEffect, useState } from 'react';

export const useLazyLoadBackground = (className, loadedClassName) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = document.querySelector(`.${className}`);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [className]);

  return isLoaded ? loadedClassName : '';
};
