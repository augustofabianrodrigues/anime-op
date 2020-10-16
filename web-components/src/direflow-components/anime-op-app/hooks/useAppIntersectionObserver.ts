import { RefObject, useContext, useEffect, useState } from 'react';
import AppContext from '../components/AppContext';

function useAppIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  intersectionRatio: number = 0
): boolean {
  const [pastRatio, setPastRatio] = useState(false);
  const appElement = useContext(AppContext);

  useEffect(() => {
    const { current } = ref;
    const { current: currentAppElement } = appElement;

    if (!current || !currentAppElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastRatio(entry?.intersectionRatio <= intersectionRatio);
      },
      {
        root: currentAppElement,
      }
    );

    observer.observe(current);

    return () => {
      try {
        if (current) {
          observer.unobserve(current);
        }

        observer.disconnect();
      } catch (err) {
        console.error(
          'Unexpected error when trying to disconnect from observer:',
          err
        );
      }
    };
  }, [ref, intersectionRatio, appElement]);

  return pastRatio;
}

export default useAppIntersectionObserver;
