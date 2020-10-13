import { useEffect } from 'react';

/**
 * Fix for viewport units on mobile
 *
 * see: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
function setNavigationBarHeightCSSVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

/**
 * Sets a `--vh` css variable with the current height of the
 * navigation bar on the document.
 */
function useNavigationBarHeightCSSVariable() {
  useEffect(() => {
    setNavigationBarHeightCSSVariable();

    // Whenever the viewport dimensions change, we recalculate the navigation bar height
    window.addEventListener('resize', setNavigationBarHeightCSSVariable);

    return () => {
      window.removeEventListener('resize', setNavigationBarHeightCSSVariable);
    };
  }, []);
}

export default useNavigationBarHeightCSSVariable;
