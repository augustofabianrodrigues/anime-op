const EVENT_NAME = 'loadanimedetail';

class LoadAnimeDetailsEvent extends CustomEvent<string> {
  constructor(animeId: string) {
    super(EVENT_NAME, { detail: animeId });
  }
}

export default LoadAnimeDetailsEvent;
