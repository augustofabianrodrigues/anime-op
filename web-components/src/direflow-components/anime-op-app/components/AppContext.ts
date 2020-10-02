import { createContext, createRef, MutableRefObject } from 'react';

const AppContext = createContext<MutableRefObject<HTMLElement | null>>(
  createRef()
);

export default AppContext;
