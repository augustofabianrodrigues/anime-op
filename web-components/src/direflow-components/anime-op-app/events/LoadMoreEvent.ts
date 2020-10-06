const EVENT_NAME = 'loadmore';

class LoadMoreEvent extends Event {
  constructor() {
    super(EVENT_NAME);
  }
}

export default LoadMoreEvent;
