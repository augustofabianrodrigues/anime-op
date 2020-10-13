import { useStoreState } from 'pullstate';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../components/AppContext';
import ScrollTopByLocationStore from '../stores/ScrollTopByLocationStore';

/**
 * Restores the previous `pathname` scroll top position
 * when navigating back from another location.
 * @param pathname The pathname to listen for changes
 */
function useScrollLocationRestore(pathname: string): void {
  const { pathname: currentPathname } = useLocation();
  const state = useStoreState(ScrollTopByLocationStore);
  const appElement = useContext(AppContext);

  useEffect(() => {
    if (currentPathname !== pathname) return;

    const { current: currentAppElement } = appElement;
    if (!currentAppElement) return;

    const scrollTop = state[pathname];

    // Queues the scrollTo call, so it will run after render
    setTimeout(() => {
      currentAppElement.scrollTo({
        top: scrollTop || 0,
      });
    });

    return () => {
      ScrollTopByLocationStore.update((state) => ({
        ...state,
        [pathname]: currentAppElement.scrollTop,
      }));
    };
  }, [pathname, currentPathname, state, appElement]);
}

export default useScrollLocationRestore;
