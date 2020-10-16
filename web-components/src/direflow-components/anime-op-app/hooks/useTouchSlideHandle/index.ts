import { throttle } from 'lodash';
import { useEffect, useReducer } from 'react';
import {
  setOffsetState,
  SetOffsetStateOption,
  touchCancel,
  touchEnd,
  touchMove,
  touchStart,
} from './actions';
import reducer, { TouchSlideHandleState } from './reducer';

const init = (threshold: number): TouchSlideHandleState => ({
  startX: 0,
  offset: -threshold,
  threshold,
  horizontalSwipe: false,
});

export type SetTouchSlideOffsetState = (option: SetOffsetStateOption) => void;

function useTouchSlideHandle(
  threshold: number
): [number, SetTouchSlideOffsetState] {
  const [state, dispatch] = useReducer(reducer, threshold, init);

  useEffect(() => {
    const handleStart = (e: TouchEvent) => {
      const touch = e.changedTouches.item(0);
      if (touch === null) return;

      dispatch(touchStart(touch.pageX, threshold));
    };

    const handleMove = throttle(
      (e: TouchEvent) => {
        const touch = e.changedTouches.item(0);
        if (touch === null) return;

        dispatch(touchMove(touch.pageX, window.outerWidth));
      },
      100,
      { leading: true, trailing: false }
    );

    const handleEnd = (e: TouchEvent) => {
      const touch = e.changedTouches.item(0);
      if (touch === null) return;

      dispatch(touchEnd(touch.pageX));
    };

    const handleCancel = () => {
      dispatch(touchCancel());
    };

    document.addEventListener('touchstart', handleStart);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
    document.addEventListener('touchcancel', handleCancel);

    return () => {
      document.removeEventListener('touchstart', handleStart);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
      document.removeEventListener('touchcancel', handleCancel);
    };
  }, [threshold]);

  return [state.offset, (option) => dispatch(setOffsetState(option))];
}

export default useTouchSlideHandle;
