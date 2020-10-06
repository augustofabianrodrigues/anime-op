const EVENT_NAME = 'loadgenres';

class LoadGenresEvent extends Event {
  constructor() {
    super(EVENT_NAME);
  }
}

export default LoadGenresEvent;
