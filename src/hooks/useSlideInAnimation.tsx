import React, { useState, useEffect } from "react";

const useSlideInAnimation = (elementRef: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (elementRef.current && !isVisible) {
      const elementTop = elementRef.current.offsetTop;
      const elementBottom = elementTop + elementRef.current.offsetHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      if (elementBottom >= window.scrollY && elementTop <= viewportBottom) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (elementRef.current && !isVisible) {
      const elementTop = elementRef.current.offsetTop;
      const elementBottom = elementTop + elementRef.current.offsetHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      if (elementBottom >= window.scrollY && elementTop <= viewportBottom) {
        setIsVisible(true);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};

export default useSlideInAnimation;
