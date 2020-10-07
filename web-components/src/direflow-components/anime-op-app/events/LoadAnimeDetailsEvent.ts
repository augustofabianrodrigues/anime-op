const EVENT_NAME = 'loadanimedetails';

class LoadAnimeDetailsEvent extends CustomEvent<string> {
  constructor(animeId: string) {
    super(EVENT_NAME, { detail: animeId });
  }
}

export default LoadAnimeDetailsEvent;
