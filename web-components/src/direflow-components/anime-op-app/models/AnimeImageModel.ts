import AnimeImageMetaModel from './AnimeImageMetaModel';

interface AnimePosterImageModel {
  tiny?: string;
  small?: string;
  medium?: string;
  large?: string;
  original?: string;
  meta?: AnimeImageMetaModel;
}

export default AnimePosterImageModel;
