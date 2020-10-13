import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../components/AppContext';

/**
 * Resets the scroll top position when the `location.pathname` changes.
 */
function useScrollReset() {
  const appElement = useContext(AppContext);
  const { pathname } = useLocation();

  useEffect(() => {
    appElement.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [appElement, pathname]);
}

export default useScrollReset;
