import { Reducer } from 'react';
import {
  SetOffsetStateAction,
  SetOffsetStateOption,
  SET_OFFSET_STATE,
  TouchCancelAction,
  TouchEndAction,
  TouchMoveAction,
  TouchStartAction,
  TOUCH_CANCEL,
  TOUCH_END,
  TOUCH_MOVE,
  TOUCH_START,
} from './actions';

export interface TouchSlideHandleState {
  startX: number;
  threshold: number;
  offset: number;
  horizontalSwipe: boolean;
}

export type TouchSlideHandleActionTypes =
  | TouchStartAction
  | TouchMoveAction
  | TouchEndAction
  | TouchCancelAction
  | SetOffsetStateAction;

export type TouchSlideHandleReducer = Reducer<
  TouchSlideHandleState,
  TouchSlideHandleActionTypes
>;

// Used for determining whether the swipe was to positive or negative
const SWIPE_OFFSET_TOLERANCE = 0.5;

// Used for determining if the user's swiping intention is an horizontal swipe
const SWIPE_HORIZONTAL_TOLERANCE = 0.2;

const reducer: TouchSlideHandleReducer = (state, action) => {
  switch (action.type) {
    case TOUCH_START: {
      const { pageX, threshold } = action.payload;

      return {
        ...state,
        startX: pageX,
        threshold,
        horizontalSwipe: false,
      };
    }

    case TOUCH_MOVE: {
      const { pageX, outerWidth } = action.payload;
      const { startX, threshold, horizontalSwipe } = state;

      if (!startX) {
        return state;
      }

      if (!horizontalSwipe) {
        const diff = pageX - startX;
        return {
          ...state,

          // if the swipe from start moved at least `SWIPE_HORIZONTAL_TOLERANCE`% of the total width
          // it is considered an horizontal swipe
          horizontalSwipe:
            Math.abs(diff) / outerWidth >= SWIPE_HORIZONTAL_TOLERANCE,
        };
      }

      return {
        ...state,
        offset: Math.min(pageX, threshold) - threshold,
      };
    }

    case TOUCH_END: {
      const { horizontalSwipe, threshold } = state;
      if (!horizontalSwipe) {
        return {
          ...state,
          startX: 0,
        };
      }

      const { pageX } = action.payload;
      const result = pageX >= threshold * SWIPE_OFFSET_TOLERANCE;

      return {
        ...state,
        horizontalSwipe: false,
        startX: 0,
        offset: result ? 0 : -threshold,
      };
    }

    case TOUCH_CANCEL: {
      const { horizontalSwipe } = state;

      if (!horizontalSwipe) {
        return {
          ...state,
          startX: 0,
        };
      }

      return {
        ...state,
        horizontalSwipe: false,
        startX: 0,
        offset: -state.threshold,
      };
    }

    case SET_OFFSET_STATE: {
      return {
        ...state,
        horizontalSwipe: false,
        startX: 0,
        offset:
          action.payload === SetOffsetStateOption.Open ? 0 : -state.threshold,
      };
    }

    default:
      return state;
  }
};

export default reducer;
