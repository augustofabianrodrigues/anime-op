import { FC, useEffect } from 'react';

/**
 * Fix for viewport units on mobile
 *
 * see: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

const SetNavigationBarHeightCSSVariable: FC = () => {
  useEffect(() => {
    setNavigationBarHeightCSSVariable();

    // Whenever the viewport dimensions change, we recalculate the navigation bar height
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);

    return () => {
      window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
    };
  }, []);

  return null;
};

export default SetNavigationBarHeightCSSVariable;
