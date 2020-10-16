export const TOUCH_START = 'TOUCH_START';
export const TOUCH_MOVE = 'TOUCH_MOVE';
export const TOUCH_END = 'TOUCH_END';
export const TOUCH_CANCEL = 'TOUCH_CANCEL';

export const SET_OFFSET_STATE = 'SET_OFFSET_STATE';

export interface TouchStartPayload {
  pageX: number;
  threshold: number;
}

export interface TouchStartAction {
  type: typeof TOUCH_START;
  payload: TouchStartPayload;
}

export interface TouchMovePayload {
  pageX: number;
  outerWidth: number;
}

export interface TouchMoveAction {
  type: typeof TOUCH_MOVE;
  payload: TouchMovePayload;
}

export interface TouchEndPayload {
  pageX: number;
}

export interface TouchEndAction {
  type: typeof TOUCH_END;
  payload: TouchEndPayload;
}

export interface TouchCancelAction {
  type: typeof TOUCH_CANCEL;
}

export enum SetOffsetStateOption {
  Open = 'OPEN',
  Closed = 'CLOSED',
}

export interface SetOffsetStateAction {
  type: typeof SET_OFFSET_STATE;
  payload: SetOffsetStateOption;
}

export function touchStart(pageX: number, threshold: number): TouchStartAction {
  return {
    type: TOUCH_START,
    payload: {
      pageX,
      threshold,
    },
  };
}

export function touchMove(pageX: number, outerWidth: number): TouchMoveAction {
  return {
    type: TOUCH_MOVE,
    payload: {
      pageX,
      outerWidth,
    },
  };
}

export function touchEnd(pageX: number): TouchEndAction {
  return {
    type: TOUCH_END,
    payload: {
      pageX,
    },
  };
}

export function touchCancel(): TouchCancelAction {
  return {
    type: TOUCH_CANCEL,
  };
}

export function setOffsetState(
  option: SetOffsetStateOption
): SetOffsetStateAction {
  return {
    type: SET_OFFSET_STATE,
    payload: option,
  };
}
