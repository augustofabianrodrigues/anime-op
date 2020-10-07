import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../AppContext';

export default function ScrollToTop() {
  const appElement = useContext(AppContext);
  const { pathname } = useLocation();

  useEffect(() => {
    appElement.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [appElement, pathname]);

  return null;
}
