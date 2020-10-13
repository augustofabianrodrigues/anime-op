import { Store } from 'pullstate';

interface ScrollTopByLocation {
  [path: string]: number;
}

const ScrollTopByLocationStore = new Store<ScrollTopByLocation>({});
export default ScrollTopByLocationStore;
