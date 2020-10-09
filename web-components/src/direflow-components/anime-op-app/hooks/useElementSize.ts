import { useLayoutEffect, useState } from 'react';
import Optional from '../models/Optional';

/**
 * Returns the width and height of the element respectively.
 * When the window is resized or when the element changes, dimensions are recalculated and returned.
 *
 * **Note**: It is a layout effect
 * @param element
 *  The DOM element to get dimensions from.
 *  If it is not and HTMLElement, a [0, 0] pair will be returned.
 */
function useElementSize(element: Optional<HTMLElement>): number[] {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      if (element) {
        setSize([element.offsetWidth, element.offsetHeight]);
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [element]);
  return size;
}

export default useElementSize;
